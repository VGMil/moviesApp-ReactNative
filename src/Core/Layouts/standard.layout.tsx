import React from "react"
import { View } from "react-native"
import { NavBar } from "../Components/navbar.component"
//Componente que se encarga de mostrar el layout estandar de la aplicacion
export interface StandardLayoutProps {
  children: React.ReactNode,
  title?: string
}

export const StandardLayout = ({children, title}:StandardLayoutProps) => {
  return (
    <View style={{ backgroundColor: 'blue' }}>
    <NavBar title={title}></NavBar>
      {children}
    </View>
  )
}