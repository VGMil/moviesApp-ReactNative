import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeNavigation } from "./Home/Home.navigation";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useTheme } from "../Core/Hooks/useTheme";
import SearchScreen from "./Search/Search.screen";
import TicketScreen from "./Ticket/Ticket.screen";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Tab = createBottomTabNavigator();
type TabItem = {
  name: string;
  component: React.ComponentType<any>;
  label: string;
  iconName: keyof typeof MaterialIcons.glyphMap;
  text: string;
};
const tabItems: TabItem[] = [
  {
    name: 'HomeTab',
    component: HomeNavigation,
    label: 'Home',
    iconName: 'home',
    text: 'Home'
  },
  {
    name: 'Search',
    component: SearchScreen,
    label: 'Search',
    iconName: 'search',
    text: 'Search'
  },
  {
    name: 'Ticket',
    component: TicketScreen,
    label: 'Ticket',
    iconName: 'movie',
    text: 'Ticket'
  }
];

export const TabsNavigator = () => {
  const { theme } = useTheme();
  
  const styles = StyleSheet.create({
    activeTab: {
      backgroundColor: theme.colors.background,
      borderRadius: 180,
      width: 60,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <Tab.Navigator
      screenOptions={{ 
        headerShown: false,
        animation: 'none',
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          borderTopColor: 'transparent',
          borderTopWidth: 0,
          height: 70,
          paddingTop: 10,
          paddingBottom: 10,
        },
        tabBarShowLabel: false,
        tabBarButton: (props) => 
          <Pressable {...props} android_ripple={{ color: 'transparent' }} 
        />
      }}>
      
      {tabItems.map((tab) => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={{
            tabBarHideOnKeyboard: true,
            tabBarLabel: tab.label,
            tabBarIcon: ({ focused }) => (
              <View style={[styles.activeTab,
               focused && { backgroundColor: theme.colors.primary }]}>
                <MaterialIcons
                  name={tab.iconName}
                  size={24}
                  color={focused ? '#fff' : theme.colors.accent}
                />
                <Text style={{ color: focused ? '#fff' : theme.colors.accent }}>
                  {tab.text}
                </Text>
              </View>
            ),
          }}
        />
      ))}

    </Tab.Navigator>
  );
};
