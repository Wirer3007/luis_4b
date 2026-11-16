import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Lucide } from '@react-native-vector-icons/lucide';

import Config from '../telas/config';
import Home from '../telas/home';
import Select from '../telas/select';


const Tab = createBottomTabNavigator();

export default function Menu() {

    return (

        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >

                <Tab.Screen
                    name="Menu"
                    component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Lucide
                                name="house"
                                size={size}
                                color={color}
                            />
                        )
                    }}
                />

                <Tab.Screen
                    name="Select"
                    component={Select}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Lucide
                                name="gamepad-2"
                                size={size}
                                color={color}
                            />
                        )
                    }}
                >

                </Tab.Screen>

                <Tab.Screen
                    name="Config"
                    component={Config}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Lucide
                                name="settings"
                                size={size}
                                color={color}
                            />
                        )
                    }}
                    >
                </Tab.Screen>

            </Tab.Navigator>
        </NavigationContainer>
    );
  }