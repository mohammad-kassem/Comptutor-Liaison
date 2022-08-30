import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  LogBox,
} from 'react-native';
import Daily, {
  DailyEvent,
  DailyCall,
  DailyEventObject,
} from '@daily-co/react-native-daily-js';
import CallPanel from '../../components/CallPanel';
import { logDailyEvent } from '../../utility/utils';
import Tray from '../../components/Tray';
import CallObjectContext from '../../Context/CallObjectContext';
import { useOrientation, Orientation } from '../../Context/useOrientation';
import createRoom, { getUrlFromDB, setUrlInDB } from './controller';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import styles from './styles'


declare const global: { HermesInternal: null | {} };

LogBox.ignoreLogs(['Require cycle: node_modules']);
LogBox.ignoreLogs(['new NativeEventEmitter']);

enum AppState {
  Idle,
  Creating,
  Joining,
  Joined,
  Leaving,
  Error,
}

const CallScreen = ({route}: any) => {
  const [appState, setAppState] = useState(AppState.Idle);
  const [roomUrl, setRoomUrl] = useState<string | undefined>(undefined);
  const [roomCreateError, setRoomCreateError] = useState<boolean>(false);
  const [callObject, setCallObject] = useState<DailyCall | null>(null);
  const [roomUrlFieldValue, setRoomUrlFieldValue] = useState<
    string | undefined
  >(undefined);
  const orientation = useOrientation();
  const appointmentId = route.params.appointmentId
  const navigation = useNavigation()

  useEffect(() => {
    if (!callObject) {
      return;
    }

    const events: DailyEvent[] = ['joined-meeting', 'left-meeting', 'error'];

    function handleNewMeetingState(event?: DailyEventObject) {
      logDailyEvent(event);
      switch (callObject?.meetingState()) {
        case 'joined-meeting':
          setAppState(AppState.Joined);
          break;
        case 'left-meeting':
          callObject?.destroy().then(() => {
            setRoomUrl(undefined);
            setCallObject(null);
            setAppState(AppState.Idle);
          });
          break;
        case 'error':
          setAppState(AppState.Error);
          break;
        default:
          break;
      }
    }

    handleNewMeetingState();

    for (const event of events) {
      callObject.on(event, handleNewMeetingState);
    }

    return function cleanup() {
      for (const event of events) {
        callObject.off(event, handleNewMeetingState);
      }
    };
  }, [callObject]);


  useFocusEffect(
    React.useCallback(() => {
      async function roomJoin(){
        const urlDB= await getUrlFromDB(appointmentId, setRoomUrl)
        !urlDB && createRoom(setAppState, AppState, setRoomUrl, appointmentId)
      }
      roomJoin()
    },[])
)

  useEffect(() => {
    if (!callObject || !roomUrl) {
      return;
    }
    callObject.join({ url: roomUrl }).catch((_) => {
    });
    setAppState(AppState.Joining);
  }, [callObject, roomUrl]);



  useEffect(() => {
    if (!roomUrl) {
      return;
    }
    const newCallObject = Daily.createCallObject();
    setCallObject(newCallObject);
  }, [roomUrl]);

 
  const leaveCall = useCallback(() => {
    if (!callObject) {
      return;
    }
    if (appState === AppState.Error) {
      callObject.destroy().then(() => {
        setRoomUrl(undefined);
        setRoomUrlFieldValue(undefined);
        setCallObject(null);
        setAppState(AppState.Idle);
      });
    } else {
      setAppState(AppState.Leaving);
      callObject.leave();
      navigation.goBack();
    }
  }, [callObject, appState]);

  const showCallPanel = [
    AppState.Joining,
    AppState.Joined,
    AppState.Error,
  ].includes(appState);
  const enableCallButtons = [AppState.Joined, AppState.Error].includes(
    appState
  );
  const isAppStateIdle = appState === AppState.Idle;
  const startButtonDisabled = !isAppStateIdle || !roomUrlFieldValue;

  return (
    <CallObjectContext.Provider value={callObject}>
          {showCallPanel && (
            <View
              style={[
                styles.callContainerBase,
                orientation === Orientation.Landscape
                  ? styles.callContainerLandscape
                  : null,
              ]}
            >
              <CallPanel roomUrl={roomUrl || ''} />
              <Tray
                onClickLeaveCall={leaveCall}
                disabled={!enableCallButtons}
              />
            </View>
          )}
    </CallObjectContext.Provider>
  );
};


export default CallScreen;
