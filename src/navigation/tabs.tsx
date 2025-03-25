import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AuthorScreen } from '../screens/AuthorScreen';
import { Ionicons as Icon } from '@expo/vector-icons';
import { DashboardStackNavigation } from '../Dashboard/Navigation';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'purple',
          borderTopWidth: 0,
          elevation: 0,
          height: 60,
          paddingBottom: 10,
        }
      }}
    >
      <Tab.Screen 
        name="Dashboard" 
        component={DashboardStackNavigation}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="home-outline" size={25} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen 
        name="Author" 
        component={AuthorScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="search-outline" size={25} color={color} />
          ),
          headerShown: true,
        }}
      />
    </Tab.Navigator>
  );
}
