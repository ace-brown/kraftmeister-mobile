import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { JobsScreen } from '../screens/jobs/JobsScreen';
import { CustomersScreen } from '../screens/customers/CustomersScreen';
import { QuotesScreen } from '../screens/quotes/QuotesScreen';
import { InvoicesScreen } from '../screens/invoices/InvoicesScreen';
import { TabParamList } from './types';
import { Colors } from '../constants/colors';

const Tab = createBottomTabNavigator<TabParamList>();

/** Bottom tab navigator with the four main sections of the app. */
export function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.text.muted,
        tabBarStyle: { backgroundColor: Colors.surface, borderTopColor: Colors.border },
      }}
    >
      <Tab.Screen
        name="Jobs"
        component={JobsScreen}
        options={{ tabBarLabel: 'Aufträge', tabBarIcon: ({ color }) => <Text style={{ color }}>🔨</Text> }}
      />
      <Tab.Screen
        name="Customers"
        component={CustomersScreen}
        options={{ tabBarLabel: 'Kunden', tabBarIcon: ({ color }) => <Text style={{ color }}>👥</Text> }}
      />
      <Tab.Screen
        name="Quotes"
        component={QuotesScreen}
        options={{ tabBarLabel: 'Angebote', tabBarIcon: ({ color }) => <Text style={{ color }}>📄</Text> }}
      />
      <Tab.Screen
        name="Invoices"
        component={InvoicesScreen}
        options={{ tabBarLabel: 'Rechnungen', tabBarIcon: ({ color }) => <Text style={{ color }}>🧾</Text> }}
      />
    </Tab.Navigator>
  );
}
