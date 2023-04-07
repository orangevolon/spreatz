import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { theme } from '../ui/theme';
import { HomeScreen, LookupEntryScreen, WordChestScreen } from '../screens';
import { LoginScreen } from '../screens/LoginScreen';

const AuthStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: styles.container,
      }}
    >
      <AuthStack.Screen name='Login' component={LoginScreen} />
    </AuthStack.Navigator>
  );
}

function AppNavigator() {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: styles.container,
      }}
    >
      <AppStack.Screen name='Home' component={HomeScreen} />
      <AppStack.Screen name='WordChest' component={WordChestScreen} />
      <AppStack.Screen name='LookupEntry' component={LookupEntryScreen} />
    </AppStack.Navigator>
  );
}

export function RootNavigator() {
  const isAuthenticated = false;

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.color.background,
  },
});
