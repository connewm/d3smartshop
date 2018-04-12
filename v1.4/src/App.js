import React from 'react';
import { Root } from 'native-base';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import MainMenu from './components/Screens/MainMenu/index';
import Settings from './components/Screens/Settings/index';
import AccountSettings from './components/Screens/AccountSettings/index';
import StoreSettings from './components/Screens/StoreSettings/index';
import BudgetSettings from './components/Screens/BudgetSettings/index';
import FindItems from './components/Screens/FindItems/index';
import ItemCard from './components/Screens/ItemCard/index';
import MyLists from './components/Screens/MyLists/index';
import List1 from './components/Screens/MyLists/List1';
import Favorites from './components/Screens/Favorites/index';
import Coupons from './components/Screens/Coupons/index';
import CouponCard from './components/Screens/CouponCard/index';
import ShoppingList from './components/Screens/ShoppingList/index';
import KrogerList from './components/Screens/ShoppingList/KrogerList';

const Drawer = DrawerNavigator(
  {
    Main: { screen: MainMenu },
    Settings: { screen: Settings },
    FindItems: { screen: FindItems },
    MyLists: { screen: MyLists },
    Favorites: { screen: Favorites },
    Coupons: { screen: Coupons },
    ShoppingList: { screen: ShoppingList }
  },
  {
    initialRouteName: 'Main',
  }
);

const AppNavigator = StackNavigator(
  {
    Drawer: { screen: Drawer },

    AccountSettings: { screen: AccountSettings },
    StoreSettings: { screen: StoreSettings },
    BudgetSettings: { screen: BudgetSettings },

    ItemCard: { screen: ItemCard },
    CouponCard: { screen: CouponCard },

    List1: { screen: List1 },
    KrogerList: { screen: KrogerList }
  },
  {
    initialRouteName: 'Drawer',
    headerMode: 'none'
  }
);

export default () =>
  <Root>
    <AppNavigator />
  </Root>;
