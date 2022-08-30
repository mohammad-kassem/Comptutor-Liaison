import { useCallObject } from './useCallObject';
import { useCallback, useEffect, useState } from 'react';
import { DailyEvent } from '@daily-co/react-native-daily-js';

export const useMeetingState = () => {
  const callObject = useCallObject();
  const [meetingState, setMeetingState] = useState<string | undefined>();

  const handleMeetingState = useCallback(async () => {
    const currentMeetingState = callObject?.meetingState();
    setMeetingState(currentMeetingState);
  }, [callObject]);

  useEffect(() => {
    if (!callObject) {
      return;
    }
    const events: DailyEvent[] = [
      'loading',
      'loaded',
      'load-attempt-failed',
      'joining-meeting',
      'joined-meeting',
      'left-meeting',
      'error',
    ];

    handleMeetingState();
    for (const event of events) {
      callObject.on(event, handleMeetingState);
    }
    return function cleanup() {
      for (const event of events) {
        callObject.off(event, handleMeetingState);
      }
    };
  }, [callObject, handleMeetingState]);

  return meetingState;
};
