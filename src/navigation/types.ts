import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

export type TabParamList = {
  Jobs: undefined;
  Customers: undefined;
  Quotes: undefined;
  Invoices: undefined;
  Profile: undefined;
};

export type TabNavigationProp = BottomTabNavigationProp<TabParamList>;
