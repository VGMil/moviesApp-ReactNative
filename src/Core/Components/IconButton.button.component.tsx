import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
interface IconButtonProps {
  onPress?: () => void;
  iconName: keyof typeof MaterialIcons.glyphMap;
  style?: object;
}

export const IconButton: React.FC<IconButtonProps> = ({
  onPress,
  iconName,
  style
}) => {
  const styles = StyleSheet.create({
    icon: {
      fontSize: 24,
      color: '#fff',
      ...style
    }
  });

  return (
    <TouchableOpacity onPress={onPress}>
      <MaterialIcons 
        style={styles.icon}
        name={iconName}
      />
    </TouchableOpacity>
  );
};
