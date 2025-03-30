import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./Home.screen";
import { SettingsScreen } from "./Screens/Settings/Settings.screen";


const Stack = createNativeStackNavigator();

export const HomeNavigation = () => {

    return (
        <Stack.Navigator 
            initialRouteName="Home" 
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Settings" component={SettingsScreen}/>
        </Stack.Navigator>
    );
};
