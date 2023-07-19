import React from 'react';

import ModuleRoot, { ModuleRoutesType } from '../../src';

import {
  useNavigation,
  ParamListBase,
  NavigationContainer,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { Button, View } from 'react-native';

type Routes = {
  home: undefined;
  moduleApp: ModuleRoutesType;
};

const Navigator = createNativeStackNavigator<Routes>();

const Home = () => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const handleNavigate = () => {
    navigate('moduleApp', {
      screen: 'moduleHome',
    });
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Button onPress={handleNavigate} title="go to module home" />
    </View>
  );
};

/**
 * @returns JSX
 */
function RootRoutes() {
  return (
    <NavigationContainer>
      <Navigator.Navigator
        screenOptions={{
          headerShown: true,
        }}
        initialRouteName="home"
      >
        <Navigator.Screen name="home" component={Home} />
        <Navigator.Screen
          options={{
            headerShown: false,
          }}
          name="moduleApp"
          component={ModuleRoot}
        />
      </Navigator.Navigator>
    </NavigationContainer>
  );
}

export default RootRoutes;
