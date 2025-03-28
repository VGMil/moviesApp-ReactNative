import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../../Core/Hooks/useTheme';

export const HomeScreen = () => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme?.colors.background,
    },
    texto:{
      color: theme?.colors.text,
    }
  });

  return (

    <View style={styles.container}>
      <Text style={styles.texto}>Home Screen</Text>
    </View>

  );
}