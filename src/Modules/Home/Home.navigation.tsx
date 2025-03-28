import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./Home.screen";
import { SettingsScreen } from "./Screens/Settings.screen";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { HomeLayout } from "./Layouts/Home.layout";
import { useTheme } from "../../Core/Hooks/useTheme";



const Stack = createNativeStackNavigator();

export const HomeNavigation = () => {
    const { theme } = useTheme();
    const styles = StyleSheet.create({
        button: {
            backgroundColor: theme.colors.background,
            padding: 10,
            borderRadius: 5,
            margin: 10,
            alignItems: 'center',
        },
        texto: {
            color: theme.colors.text,
            fontWeight: 'bold',
        },
    });
    return (
        <Stack.Navigator
            initialRouteName="Home" >
            <Stack.Screen
                name="Home"
                options={({ navigation }) => ({
                    headerRight: () => (
                        <TouchableOpacity 
                            onPressIn={() => navigation.navigate('Settings')}
                            style={styles.button}
                        >
                            <Text 
                            style={styles.texto}>
                                Settings
                            </Text>
                        </TouchableOpacity>
                    ),
                })}
            >
                {() => {
                    return (
                        <HomeLayout>
                            <HomeScreen />
                        </HomeLayout>)

                }}
            </Stack.Screen>
            <Stack.Screen
                name="Settings"
                options={{
                    headerBackTitle: 'Custom Back',
                }}
            >
                {() => {
                    return (
                        <HomeLayout>
                            <SettingsScreen />
                        </HomeLayout>)

                }}
            </Stack.Screen>
        </Stack.Navigator>
    );
};
