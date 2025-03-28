import { StyleSheet, Switch, Text, TouchableOpacity } from "react-native";
import { useTheme } from "../../Hooks/useTheme";

export const DarkSwitch = () => {
    const { theme, toggleTheme } = useTheme();
    
    const styles = StyleSheet.create({
        Button: {
            backgroundColor: theme?.colors.primary,
            padding: 10,
            borderRadius: 8,
        },
        Texto: {
            color: theme?.colors.text
        }
    });

    return (
        <Switch 
            onValueChange={toggleTheme}
            style={styles.Button}
        >
            <Text style={styles.Texto}>
                Cambiar Color
            </Text>
        </Switch>
    );
}