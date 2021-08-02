import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export type NavBarProps = {
  screens: {
    // todo import GLYPH? type for icon names
    name: string;
    component: any;
    iconString: string;
  }[];
};

const Tab = createBottomTabNavigator();

// Todo: modularization
// take screens as a prop object to decouple, then app.tsx could utilize navigation and contexts
// todo: will probably end up needing to split logic between client and barber
const NavBar = (props: NavBarProps) => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        return (
          <Ionicons
            // @ts-ignore
            name={props.screens
              .find((x) => x.name === route.name)
              ?.iconString.concat(focused ? "" : "-outline")}
            size={size}
            color={color}
          />
        );
      },
    })}
  >
    {props.screens.map((screen, idx) => (
      <Tab.Screen
        key={`${idx} - ${screen.name}`}
        name={screen.name}
        component={screen.component}
      />
    ))}
  </Tab.Navigator>
);

export default NavBar;
