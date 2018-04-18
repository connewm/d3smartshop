import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Body, Content, Root } from 'native-base';
import { DrawerNavigator, DrawerItems, StackNavigator } from 'react-navigation';

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

const Logo = require('../assets/SmartShopLogo.png');

const DrawerComponent = (props) => (
  <Container>
    <Header style={{ height: 150, backgroundColor: 'white' }}>
      <Body>
        <Image
          style={styles.drawerImage}
          source={Logo}
        />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>
);

const DrawerScreen = DrawerNavigator(
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
    contentComponent: props => <DrawerComponent {...props} />,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  }
);

const AppNavigator = StackNavigator(
  {
    Drawer: { screen: DrawerScreen },

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerImage: {
    height: 150,
    width: 150,
    borderRadius: 80
  }
});
