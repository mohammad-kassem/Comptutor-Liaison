import React, {
  useEffect,
  useReducer,
  useMemo,
  useCallback,
  useState,
} from 'react';
import { View, ScrollView, Text } from 'react-native';
import { logDailyEvent } from '../../utility/utils';
import {
  DailyEvent,
  DailyEventObjectAvailableDevicesUpdated,
  MediaDeviceInfo,
} from '@daily-co/react-native-daily-js';
import {
  callReducer,
  initialCallState,
  PARTICIPANTS_CHANGE,
  CAM_OR_MIC_ERROR,
  FATAL_ERROR,
  isScreenShare,
  isLocal,
  containsScreenShare,
  participantCount,
} from './callState';
import Tile, { TileType } from '../Tile';
import { useCallObject } from '../../Context/useCallObject';
import { useOrientation, Orientation } from '../../Context/useOrientation';
import { useMeetingState } from '../../Context/useMeetingState';
import styles from './styles'


type Props = {
  roomUrl: string;
};


const CallPanel = (props: Props) => {
  const callObject = useCallObject();
  const meetingState = useMeetingState();

  const [callState, dispatch] = useReducer(callReducer, initialCallState);
  const [usingFrontCamera, setUsingFrontCamera] = useState(true);
  const orientation = useOrientation();
  const [cameraDevicesOpen, setCameraDevicesOpen] = useState<boolean>(false);
  const [cameraDeviceValue, setCameraDeviceValue] = useState<string | null>(
    null
  );
  const [cameraDeviceItems, setCameraDevicesItems] = useState<any[]>([]);
  const [audioDevicesOpen, setAudioDevicesOpen] = useState<boolean>(false);
  const [audioDeviceValue, setAudioDeviceValue] = useState<string | null>(null);
  const [audioDevicesItems, setAudioDevicesItems] = useState<any[]>([]);

  const refreshSelectedDevice = useCallback(async () => {
    const devicesInUse = await callObject?.getInputDevices();
    if (
      devicesInUse?.camera &&
      (devicesInUse.camera as MediaDeviceInfo).deviceId
    ) {
      setCameraDeviceValue((devicesInUse.camera as MediaDeviceInfo).deviceId);
    }
    if (
      devicesInUse?.speaker &&
      (devicesInUse.speaker as MediaDeviceInfo).deviceId
    ) {
      setAudioDeviceValue((devicesInUse.speaker as MediaDeviceInfo).deviceId);
    }
  }, [callObject]);

  const updateAvailableDevices = useCallback(
    (devices: MediaDeviceInfo[] | undefined) => {
      const inputDevices = devices
        ?.filter((device) => device.kind === 'videoinput')
        .map((device) => {
          return {
            value: device.deviceId,
            label: device.label,
            originalValue: device,
          };
        });
      setCameraDevicesItems(inputDevices || []);
      const outputDevices = devices
        ?.filter((device) => device.kind === 'audio')
        .map((device) => {
          return {
            value: device.deviceId,
            label: device.label,
            originalValue: device,
          };
        });
      setAudioDevicesItems(outputDevices || []);
      refreshSelectedDevice();
    },
    [refreshSelectedDevice]
  );

  useEffect(() => {
    if (!callObject || meetingState !== 'joined-meeting') {
      return;
    }
    const loadDevicesInfo = async () => {
      const devicesAvailable = await callObject?.enumerateDevices();
      updateAvailableDevices(devicesAvailable?.devices);
    };
    loadDevicesInfo();
  }, [callObject, meetingState, updateAvailableDevices]);

  useEffect(() => {
    if (!callObject) {
      return;
    }

    const events: DailyEvent[] = [
      'participant-joined',
      'participant-updated',
      'participant-left',
    ];

    const handleNewParticipantsState = (event?: any) => {
      event && logDailyEvent(event);
      dispatch({
        type: PARTICIPANTS_CHANGE,
        participants: callObject.participants(),
      });
    };

    handleNewParticipantsState();
    for (const event of events) {
      callObject.on(event, handleNewParticipantsState);
    }

    return function cleanup() {
      for (const event of events) {
        callObject.off(event, handleNewParticipantsState);
      }
    };
  }, [callObject]);

 
  useEffect(() => {
    if (!callObject) {
      return;
    }

    function handleCameraErrorEvent(event?: any) {
      logDailyEvent(event);
      dispatch({
        type: CAM_OR_MIC_ERROR,
        message:
          (event && event.errorMsg && event.errorMsg.errorMsg) || 'Unknown',
      });
    }


    callObject.on('camera-error', handleCameraErrorEvent);

    return function cleanup() {
      callObject.off('camera-error', handleCameraErrorEvent);
    };
  }, [callObject]);

  useEffect(() => {
    if (!callObject) {
      return;
    }

    function handleErrorEvent(event?: any) {
      logDailyEvent(event);
      dispatch({
        type: FATAL_ERROR,
        message: (event && event.errorMsg) || 'Unknown',
      });
    }

    callObject.on('error', handleErrorEvent);

    return function cleanup() {
      callObject.off('error', handleErrorEvent);
    };
  }, [callObject]);

  useEffect(() => {
    if (!callObject) {
      return;
    }
    const handleDevicesUpdated = (
      event?: DailyEventObjectAvailableDevicesUpdated
    ) => {
      updateAvailableDevices(event?.availableDevices);
    };
    callObject.on('available-devices-updated', handleDevicesUpdated);
    return function cleanup() {
      callObject.off('available-devices-updated', handleDevicesUpdated);
    };
  }, [callObject, updateAvailableDevices]);

  const flipCamera = useCallback(async () => {
    if (!callObject) {
      return;
    }
    const { device } = await callObject.cycleCamera();
    if (device) {
      setUsingFrontCamera(device.facingMode === 'user');
    }
  }, [callObject]);

  const [largeTiles, thumbnailTiles] = useMemo(() => {
    let larges: JSX.Element[] = [];
    let thumbnails: JSX.Element[] = [];
    Object.entries(callState.callItems).forEach(([id, callItem]) => {
      let tileType: TileType;
      if (isScreenShare(id)) {
        tileType = TileType.Full;
      } else if (isLocal(id) || containsScreenShare(callState.callItems)) {
        tileType = TileType.Thumbnail;
      } else if (participantCount(callState.callItems) <= 3) {
        tileType = TileType.Full;
      } else {
        tileType = TileType.Half;
      }
      const tile = (
        <Tile
          key={id}
          videoTrackState={callItem.videoTrackState}
          audioTrackState={callItem.audioTrackState}
          mirror={usingFrontCamera && isLocal(id)}
          type={tileType}
          robotId={isLocal(id) ? 'robots-tile-local' : `robots-tile-${id}`}
          disableAudioIndicators={isScreenShare(id)}
          onPress={flipCamera}
        />
      );
      if (tileType === TileType.Thumbnail) {
        thumbnails.push(tile);
      } else {
        larges.push(tile);
      }
    });
    return [larges, thumbnails];
  }, [callState.callItems, flipCamera, usingFrontCamera]);



  useEffect(() => {
    if (!audioDeviceValue) {
      return;
    }
    callObject?.setAudioDevice(audioDeviceValue).then(({ deviceId }) => {
    });
  }, [callObject, audioDeviceValue]);

  useEffect(() => {
    if (!cameraDeviceValue) {
      return;
    }
    callObject?.setCamera(cameraDeviceValue);
  }, [callObject, cameraDeviceValue]);

  return (
    <>
      <View
        style={[
          styles.mainContainer,
          styles.largeTilesContainerOuter,
        ]}
      >
          <ScrollView
            alwaysBounceVertical={false}
            alwaysBounceHorizontal={false}
            horizontal={orientation === Orientation.Landscape}
          >
            <View
              style={[
                styles.largeTilesContainerInnerBase,
                orientation === Orientation.Portrait
                  ? styles.largeTilesContainerInnerPortrait
                  : styles.largeTilesContainerInnerLandscape,
              ]}
            >
              {largeTiles}
            </View>
          </ScrollView>
      </View>
      <View
        style={[
          styles.thumbnailContainerOuterBase,
          orientation === Orientation.Portrait
            ? styles.thumbnailContainerOuterPortrait
            : styles.thumbnailContainerOuterLandscape,
        ]}
      >
        <ScrollView
          horizontal={orientation === Orientation.Portrait}
          alwaysBounceHorizontal={false}
          alwaysBounceVertical={false}
        >
          <View
            style={
              orientation === Orientation.Portrait
                ? styles.thumbnailContainerInnerPortrait
                : styles.thumbnailContainerInnerLandscape
            }
          >
            {thumbnailTiles}
          </View>
        </ScrollView>
      </View>
      
    </>
  );
};



export default CallPanel;
