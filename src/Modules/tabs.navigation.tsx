import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeNavigation } from "./Home/Home.navigation";
import DetailScreen from "./Details/Detail.screen";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useTheme } from "../Core/Hooks/useTheme";
const Tab = createBottomTabNavigator();

export const TabsNavigator = () => {
    const {theme} = useTheme();
    
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeNavigation}
        options={{
          tabBarLabel: 'Home',
        tabBarIcon: () => (
            <MaterialIcons name="home" size={24} color={theme.colors.primary} />
        ),
        }}
      />

    </Tab.Navigator>
  );
};
