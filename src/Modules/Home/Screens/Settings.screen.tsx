import { Text, View } from 'react-native';
import { useTheme } from '../../../Core/Hooks/useTheme';

export const SettingsScreen = () => {
  const { theme } = useTheme();
  
  return (
    <View style={{ backgroundColor: theme.colors.background }}>
      <Text style={{ color: theme.colors.text }}>Hola Settings!</Text>
    </View>
  );
}