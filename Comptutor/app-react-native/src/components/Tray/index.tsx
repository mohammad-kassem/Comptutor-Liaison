import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { logDailyEvent } from '../../utility/utils';
import { DailyCall } from '@daily-co/react-native-daily-js';
import { useCallObject } from '../../Context/useCallObject';
import TrayButton from '../TrayButton';
import { useOrientation, Orientation } from '../../Context/useOrientation';
import styles from './styles';

function getStreamStates(callObject: DailyCall) {
  let isCameraMuted = false,
    isMicMuted = false;
  if (
    callObject &&
    callObject.participants() &&
    callObject.participants().local
  ) {
    const localParticipant = callObject.participants().local;
    isCameraMuted = !localParticipant.video;
    isMicMuted = !localParticipant.audio;
  }
  return [isCameraMuted, isMicMuted];
}

type Props = {
  onClickLeaveCall: () => void;
  disabled: boolean;
};

export const TRAY_HEIGHT = 90;

export default function Tray({ disabled, onClickLeaveCall }: Props) {
  const callObject = useCallObject();
  const [isCameraMuted, setCameraMuted] = useState(false);
  const [isMicMuted, setMicMuted] = useState(false);
  const orientation = useOrientation();

  const toggleCamera = useCallback(() => {
    callObject?.setLocalVideo(isCameraMuted);
  }, [callObject, isCameraMuted]);

  const toggleMic = useCallback(() => {
    callObject?.setLocalAudio(isMicMuted);
  }, [callObject, isMicMuted]);


  useEffect(() => {
    if (!callObject) {
      return;
    }

    const handleNewParticipantsState = (event?: any) => {
      event && logDailyEvent(event);
      const [cameraMuted, micMuted] = getStreamStates(callObject);
      setCameraMuted(cameraMuted);
      setMicMuted(micMuted);
    };

    handleNewParticipantsState();
    callObject.on('participant-updated', handleNewParticipantsState);
    
    return function cleanup() {
      callObject.off('participant-updated', handleNewParticipantsState);
    };
  }, [callObject]);

  return (
    <View
      style={[
        styles.containerBase,
        orientation === Orientation.Portrait
          ? styles.containerPortrait
          : styles.containerLandscape,
      ]}
    >
      <View
        style={
          orientation === Orientation.Portrait
            ? styles.controlsPortrait
            : styles.controlsLandscape
        }
      >
        <TrayButton
          disabled={disabled}
          onPress={toggleMic}
          muted={isMicMuted}
          text={isMicMuted ? 'Unmute' : 'Mute'}
          type="mic"
        />
        <TrayButton
          disabled={disabled}
          onPress={toggleCamera}
          muted={isCameraMuted}
          text={isCameraMuted ? 'Turn on' : 'Turn off'}
          type="camera"
        />
      </View>
      <TrayButton
        disabled={disabled}
        onPress={onClickLeaveCall}
        text="Leave"
        type="leave"
      />
    </View>
  );
}
