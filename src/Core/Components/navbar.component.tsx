
import { StyleSheet, Text, View } from "react-native"
import { ToogleButton } from "./buttons/primary.button.compontent";
import { useTheme } from "../Hooks/useTheme";


export interface NavBarProps {
    title?: string;
}

export const NavBar = (props:NavBarProps) => {
    const { theme } = useTheme();
    const styles = StyleSheet.create({

        NavBar: {
            backgroundColor: theme?.colors.primary
        },
        Title:{
            color:theme?.colors.text,
        }
    });
    return (
        <View style={styles.NavBar}>
            <Text style={styles.Title}>{props.title}</Text>
            <ToogleButton></ToogleButton>
        </View>
    )
}


