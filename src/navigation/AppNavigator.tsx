import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator } from './TabNavigator';

/** Root navigation container. */
export function AppNavigator() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
