
import { NavigationContainer } from '@react-navigation/native';
import { TabsNavigator } from './Modules/tabs.navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from './Modules/Details/Detail.screen';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from './Core/Hooks/useTheme';
import { StandardLayout } from './Core/Layouts/Standard.layout';


const Stack = createNativeStackNavigator();
export const AppNavigation = () => {
const { theme } = useTheme();
    return (
        <NavigationContainer>
            <StatusBar style={theme.dark ? 'light' : 'dark'} />
            <StandardLayout>
            <Stack.Navigator 
            screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name="Tab" component={TabsNavigator} options={{animation:'default'}}/>
                <Stack.Screen name="MovieDetail" component={DetailScreen} options={{animation:'slide_from_left'}} />
            </Stack.Navigator>
            </StandardLayout>
        </NavigationContainer>


    )

}