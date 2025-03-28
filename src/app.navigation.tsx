
import { NavigationContainer } from '@react-navigation/native';
import { TabsNavigator } from './Modules/tabs.navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from './Modules/Details/Detail.screen';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from './Core/Hooks/useTheme';


const Stack = createNativeStackNavigator();
export const AppNavigation = () => {
const { theme } = useTheme();
    return (
        <NavigationContainer>
            <StatusBar style={theme.dark ? 'light' : 'dark'} />
            <Stack.Navigator 
            screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name="Tab" component={TabsNavigator} />
                <Stack.Screen name="MovieDetail" component={DetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>


    )

}