
import { NavigationContainer } from '@react-navigation/native';
import { TabsNavigator } from './Modules/tabs.navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from './Modules/Details/Detail.screen';


const Stack = createNativeStackNavigator();
export const AppNavigation = () => {

    return (
        <NavigationContainer>
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