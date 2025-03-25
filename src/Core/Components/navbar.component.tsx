import { Text, View } from "react-native"

export interface NavBarProps {
    title?: string;
}

export const NavBar = (props:NavBarProps) => {
    return (
        <View>
            <Text>{props.title}</Text>
        </View>
    )
}