import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeNavigation } from "./Home/Home.navigation";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useTheme } from "../Core/Hooks/useTheme";
import SearchScreen from "./Search/Search.screen";
import TicketScreen from "./Ticket/Ticket.screen";
const Tab = createBottomTabNavigator();

export const TabsNavigator = () => {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
          borderTopColor: 'transparent',
        },
        tabBarActiveTintColor: theme.colors.primary,
      }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeNavigation}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="home"
              size={24}
              color={focused ? theme.colors.primary : theme.colors.accent}
            />
          ),

        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="search"
              size={24}
              color={focused ? theme.colors.primary : theme.colors.accent}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Ticket"
        component={TicketScreen}
        options={{
          tabBarLabel: 'Ticket',
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="movie"
              size={24}
              color={focused ? theme.colors.primary : theme.colors.accent}
            />
          ),
        }}
      />

    </Tab.Navigator>
  );
};
