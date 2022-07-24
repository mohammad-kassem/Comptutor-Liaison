import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { useOrientation, Orientation } from '../../Context/useOrientation';
import styles from './styles';

type Props = {
  disabled?: boolean;
  onPress: () => void;
  muted?: boolean;
  robotId?: string;
  text: string;
  type: 'mic' | 'camera' | 'leave';
};
export default function TrayButton({
  disabled = false,
  onPress,
  muted = false,
  robotId = '',
  text,
  type,
}: Props) {
  const orientation = useOrientation();

  let source: NodeRequire = require('../../../assets/leave.png');
  const isLeaveButton: boolean = type === 'leave';
  if (type === 'camera') {
    source = muted
      ? require('../../../assets/camera-off.png')
      : require('../../../assets/camera.png');
  } else if (type === 'mic') {
    source = muted
      ? require('../../../assets/mic-off.png')
      : require('../../../assets/mic.png');
  }
  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      disabled={disabled}
    >
      <View style={styles.controlContainer}>
        <Image
          style={[
            styles.iconBase,
            orientation === Orientation.Portrait
              ? styles.iconPortrait
              : styles.iconLandscape,
            disabled && styles.disabled,
            isLeaveButton && styles.iconLeave,
          ]}
          source={source}
        />
        <Text
          style={[
            styles.controlText,
            (muted || isLeaveButton) && styles.offText,
          ]}
        >
          {text}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}


