import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DashboardScreen } from './Modules/Dashboard/dashboard.screen';
import { StandardLayout } from './Core/Layouts/standard.layout';
import { AboutScreen } from './Modules/About/about.screen';

const Stack = createNativeStackNavigator();
export const AppNavigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Dashboard'>
                <Stack.Screen name="Dashboard">
                    {() => {
                        return (
                            <StandardLayout title='Dashboard'>
                                <DashboardScreen />
                            </StandardLayout>
                        );
                    }}
                </Stack.Screen>
                <Stack.Screen name="About">
                    {() => {
                        return (
                            <StandardLayout title='About'>
                                <AboutScreen />
                            </StandardLayout>
                        );
                    }}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>


    )

}