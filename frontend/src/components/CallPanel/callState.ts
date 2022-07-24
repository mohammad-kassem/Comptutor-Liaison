import { DailyTrackState } from '@daily-co/react-native-daily-js';
import { DailyParticipant } from '@daily-co/react-native-daily-js';

type CallState = {
  callItems: { [id: string]: CallItem };
  camOrMicError: string | null;
  fatalError: string | null;
};


type CallItem = {
  videoTrackState: DailyTrackState | null;
  audioTrackState: DailyTrackState | null;
};

const initialCallState: CallState = {
  callItems: {
    local: {
      audioTrackState: null,
      videoTrackState: null,
    },
  },
  camOrMicError: null,
  fatalError: null,
};


const PARTICIPANTS_CHANGE = 'PARTICIPANTS_CHANGE';

type ParticipantsChangeAction = {
  type: typeof PARTICIPANTS_CHANGE;
  participants: { [id: string]: DailyParticipant };
};


const CAM_OR_MIC_ERROR = 'CAM_OR_MIC_ERROR';

type CamOrMicErrorAction = {
  type: typeof CAM_OR_MIC_ERROR;
  message: string;
};


const FATAL_ERROR = 'FATAL_ERROR';

type FatalError = {
  type: typeof FATAL_ERROR;
  message: string;
};

type CallStateAction =
  | ParticipantsChangeAction
  | CamOrMicErrorAction
  | FatalError;


function callReducer(callState: CallState, action: CallStateAction) {
  switch (action.type) {
    case PARTICIPANTS_CHANGE:
      const callItems = getCallItems(action.participants);
      return {
        ...callState,
        callItems,
      };
    case CAM_OR_MIC_ERROR:
      return { ...callState, camOrMicError: action.message };
    case FATAL_ERROR:
      return { ...callState, fatalError: action.message };
    default:
      throw new Error();
  }
}

function getCallItems(participants: { [id: string]: DailyParticipant }) {
  let callItems = { ...initialCallState.callItems }; 
  for (const [id, participant] of Object.entries(participants)) {
    callItems[id] = {
      videoTrackState: participant.tracks.video,
      audioTrackState: participant.tracks.audio,
    };
    if (shouldIncludeScreenCallItem(participant)) {
      callItems[id + '-screen'] = {
        videoTrackState: participant.tracks.screenVideo,
        audioTrackState: participant.tracks.screenAudio,
      };
    }
  }
  return callItems;
}

function shouldIncludeScreenCallItem(participant: DailyParticipant): boolean {
  const trackStatesForInclusion = ['loading', 'playable', 'interrupted'];
  return (
    trackStatesForInclusion.includes(participant.tracks.screenVideo.state) ||
    trackStatesForInclusion.includes(participant.tracks.screenAudio.state)
  );
}


function isLocal(id: string) {
  return id === 'local';
}

function isScreenShare(id: string) {
  return id.endsWith('-screen');
}

function containsScreenShare(callItems: { [id: string]: CallItem }) {
  return Object.keys(callItems).some((id) => isScreenShare(id));
}

function participantCount(callItems: { [id: string]: CallItem }) {
  return Object.keys(callItems).length;
}

export {
  initialCallState,
  PARTICIPANTS_CHANGE,
  CAM_OR_MIC_ERROR,
  FATAL_ERROR,
  callReducer,
  isLocal,
  isScreenShare,
  containsScreenShare,
  participantCount,
};
