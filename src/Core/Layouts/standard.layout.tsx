import React, { useContext } from "react"
import { StyleSheet, View } from "react-native"
import { NavBar } from "../Components/navbar.component"
import { ThemeContext } from "../../State/Context/ThemeContext"

//Componente que se encarga de mostrar el layout estandar de la aplicacion
export interface StandardLayoutProps {
  children: React.ReactNode,
  title?: string
}

export const StandardLayout = ({children, title}:StandardLayoutProps) => {
  const { theme } = useContext(ThemeContext);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '90%', // Reduced height to not occupy full screen
    marginTop: 20, // Added margin from top
    backgroundColor:theme?.colors.background
  },
  content: {
    flex: 1,
    paddingHorizontal: 10, // Added horizontal padding
  }
});
  return (
    <View style={styles.container}>
      <NavBar title={title}></NavBar>
      <View style={styles.content}>
        {children}
      </View>
    </View>
  )

}