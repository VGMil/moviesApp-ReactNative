import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useTheme } from "../../Hooks/useTheme";

export const ToogleButton = () => {
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
        <TouchableOpacity 
            onPress={toggleTheme}
            style={styles.Button}
        >
            <Text style={styles.Texto}>
                Cambiar Color
            </Text>
        </TouchableOpacity>
    );
}