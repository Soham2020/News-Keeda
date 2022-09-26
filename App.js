import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import Bitcoin from './Screens/Bitcoin';
import Business from './Screens/Business';
import Tech from './Screens/Tech';
import Trending from './Screens/Trending';


const Stack = createStackNavigator();

function TrendingStack () {
  return(
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen name="Trending News" component={Trending} />
    </Stack.Navigator>
  )
}

function BitcoinStack () {
  return(
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen name="Bitcoin News" component={Bitcoin} />
    </Stack.Navigator>
  )
}

function BusinessStack () {
  return(
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen name="Business News" component={Business} />
    </Stack.Navigator>
  )
}

function TechStack () {
  return(
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen name="Tech News" component={Tech} />
    </Stack.Navigator>
  )
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return(
    <Tab.Navigator
      initialRouteName="Space"
      activeColor="black"
      inactiveColor="#f5fffa"
      labelStyle={{ fontSize: 15 }}
      barStyle={{ backgroundColor: 'skyblue' }}
    >
      <Tab.Screen 
        name="Trending"
        component={TrendingStack}
        options={{
          tabBarLabel: 'Space',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="fire" color={ color } size={26} />
          ),
        }}
      />

      {/* <Tab.Screen 
        name="Business"
        component={BusinessStack}
        options={{
          tabBarLabel: 'Business',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-business" size={26} color={ color } />
          ),
        }}
      />

      <Tab.Screen 
        name="Bitcoin"
        component={BitcoinStack}
        options={{
          tabBarLabel: 'Bitcoin',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bitcoin" color={ color } size={26} />
          ),
        }}
      /> */}

      <Tab.Screen 
        name="Tech"
        component={TechStack}
        options={{
          tabBarLabel: 'Tech',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="laptop-mac" color={ color } size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App () {
  return(
    <>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
      <StatusBar style='auto' />
    </>
  )
}