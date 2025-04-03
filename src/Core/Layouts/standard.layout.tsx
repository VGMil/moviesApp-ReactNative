import { StyleSheet, View } from "react-native"
import { useTheme } from "../Hooks/useTheme";


//Componente que se encarga de mostrar el layout estandar de la aplicacion
export interface StandardProps {
  children: React.ReactNode,

}

export const StandardLayout = ({ children }: StandardProps) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: '100%', // Reduced height to not occupy full screen
      backgroundColor: theme?.colors.background,

    },
    content: {
      flex: 1,
      marginTop: 35, // Added margin from top
      
    }
  });
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {children}
      </View>
    </View>
  )

}