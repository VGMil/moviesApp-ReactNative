import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DashboardScreen } from './Screen';
import { InfoScreen } from './Views/Info/Screen';

const dashboardStack = createNativeStackNavigator();
export function DashboardStackNavigation() {
  return (
    <dashboardStack.Navigator>
        <dashboardStack.Screen
        name="DashBoardScreen"
        component={DashboardScreen}
        />
        <dashboardStack.Screen
        name="Info"
        component={InfoScreen}
        />
    </dashboardStack.Navigator>
  );
}