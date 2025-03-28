import { StyleSheet, View } from "react-native"
import { useTheme } from "../../../Core/Hooks/useTheme";


//Componente que se encarga de mostrar el layout estandar de la aplicacion
export interface HomeProps {
  children: React.ReactNode,

}

export const HomeLayout = ({children}:HomeProps) => {
  const { theme } = useTheme();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '90%', // Reduced height to not occupy full screen
    backgroundColor:theme?.colors.background,
    
  },
  content: {
    flex: 1,
    paddingHorizontal: 10, // Added horizontal padding
    marginTop: 10, // Added margin from top
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