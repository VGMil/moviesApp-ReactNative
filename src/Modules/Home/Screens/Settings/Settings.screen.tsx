import { StyleSheet, Text, View } from 'react-native';
import { DarkSwitch } from './Components/Dark.switch.compontent';
import { useTheme } from '../../../../Core/Hooks/useTheme';
import { NavigationProp } from '@react-navigation/native';


export const SettingsScreen = ({navigation}:any) => {
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
      <Text style={styles.texto} >Setting Screen</Text>
      <DarkSwitch></DarkSwitch>
    </View>
  );
}