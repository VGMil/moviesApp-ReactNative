import { Text, View } from 'react-native';
import { useTheme } from '../../Core/Hooks/useTheme';

export const DashboardScreen = () => {
  const { theme } = useTheme();
  
  return (
    <View style={{ backgroundColor: theme.colors.background }}>
      <Text style={{ color: theme.colors.text }}>Hola Dashboard!</Text>
    </View>
  );
}