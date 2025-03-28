import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./Home.screen";
import { SettingsScreen } from "./Screens/Settings.screen";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { HomeLayout } from "./Layouts/Home.layout";
import { useTheme } from "../../Core/Hooks/useTheme";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const Stack = createNativeStackNavigator();

export const HomeNavigation = () => {
    const { theme } = useTheme();
    const styles = StyleSheet.create({

        button: {
            backgroundColor: theme.colors.surface,
            padding: 10,
            borderRadius: 5,
            margin: 10,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
        },
        texto: {
            color: theme.colors.text,
            fontWeight: 'bold',

        },
        icon: {
            marginRight: 5,
            color: theme.colors.primary,
            fontSize: 24,
        },
    });
    return (
        <Stack.Navigator initialRouteName="Home" 
        screenOptions={{
            headerStyle:{
                backgroundColor: theme.colors.surface,
            },
            headerTintColor: theme.colors.text,
        }}>
            <Stack.Screen
                name="Home"
                options={({ navigation }) => ({

                    headerRight: () => (
                        <TouchableOpacity
                            onPressIn={() => navigation.navigate('Settings')}
                            style={styles.button}
                        >
                            <MaterialIcons
                                name="settings"
                                style={styles.icon}
                            />
                            <Text style={styles.texto}>
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
