import { StyleSheet, Switch, Text, View } from "react-native";
import { useTheme } from "../../../Core/Hooks/useTheme";


export const DarkSwitch = () => {
    const { theme, toggleTheme } = useTheme();
    
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
        },
        text: {
            color: theme?.colors.text,
            fontSize: 16,
            fontWeight: '500',
        },
        switch: {
            transform: [{ scale: 1.1 }],
        }
    });

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Change Theme
            </Text>
            <Switch 
                onValueChange={toggleTheme}
                value={theme?.dark}
                trackColor={{ false: theme?.colors.background, true: theme?.colors.primary }}
                thumbColor={theme?.colors.text}
                style={styles.switch}
            />
        </View>
    );
}