import React from 'react';
import { Root } from 'native-base';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import MainMenu from './components/Screens/MainMenu/index';
import Settings from './components/Screens/Settings/index';
import StoreSettings from './components/Screens/StoreSettings/index';
import FindItems from './components/Screens/FindItems/index';
import MyLists from './components/Screens/MyLists/index';
import Favorites from './components/Screens/Favorites/index';
import Coupons from './components/Screens/Coupons/index';
import ShoppingList from './components/Screens/ShoppingList/index';

const Drawer = DrawerNavigator(
  {
    Main: { screen: MainMenu },
    Settings: { screen: Settings },
    StoreSettings: { screen: StoreSettings },
    FindItems: { screen: FindItems },
    MyLists: { screen: MyLists },
    Favorites: { screen: Favorites },
    Coupons: { screen: Coupons },
    ShoppingList: { screen: ShoppingList }
  }
);

const AppNavigator = StackNavigator(
  {
    Drawer: { screen: Drawer }
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
