import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity,TouchableHighlight , YellowBox, Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import RegistrationScreen from './login/RegistrationScreen';
import SignScreen from './login/SignScreen';
import SortList from './forlease/sorting/SortList';
import CityScreen from './forlease/sorting/CityScreen';
import SortScreen from './forlease/sorting/SortScreen';
import ListScreen from './forlease/ListScreen';
import SelectLocationScreen from './forlease/SelectLocationScreen';
//import ForLease from './ForLease';
import { StackNavigator } from 'react-navigation'
import { createAppContainer, createMaterialTopTabNavigator, createBottomTabNavigator,createDrawerNavigator, createStackNavigator } from "react-navigation";
class HamburgerIcon extends Component {

  toggleDrawer = () => {
    console.log(this.props.navigationProps);
    this.props.navigationProps.toggleDrawer();
  }

  render() {

    return (

      <View style={{ flexDirection: 'row' }}>

        <TouchableOpacity onPress={this.toggleDrawer.bind(this)} >

          <Image
            source={require('./assets/imenu.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />

        </TouchableOpacity>

      </View>

    );


  }
}





class Custom_Side_Menu extends Component {

  render() {

    return (

      <View style={styles.sideMenuContainer}>

        <Image source={require('./assets/estatselogo.png')}
          style={styles.sideMenuProfileIcon} />

        <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2', marginTop: 15}} />

        <View style={{width: '100%'}}>

    <TouchableHighlight  underlayColor={'lightgrey'} onPress={() => { this.props.navigation.navigate('MainStack') }}  >


            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>

          
               <Image style={styles.sideMenuIcon}source={require('./assets/estate.png')} />
              
              <Text style={styles.menuText}  > Estatse </Text>

            </View>
     </TouchableHighlight>

            
            <TouchableHighlight  underlayColor={'lightgrey'} onPress={() => { this.props.navigation.navigate('SecondStack')}}  >

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
            
            <Image style={styles.sideMenuIcon}source={require('./assets/login.png')} />
            
              <Text style={styles.menuText} > Login</Text>

            </View>
              </TouchableHighlight>


              <TouchableHighlight  underlayColor={'lightgrey'} onPress={() => { this.props.navigation.navigate('SortScreen')}}  >

<View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>

<Image style={styles.sideMenuIcon}source={require('./assets/login.png')} />

  <Text style={styles.menuText} > Sorting</Text>

</View>
  </TouchableHighlight>

       </View>

       <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2', marginTop: 15}} />


      </View>
    );
  }
}


const Estatse = createAppContainer(createBottomTabNavigator(
  {
    Map: { screen: SelectLocationScreen },
    List: { screen: ListScreen },
  },
   
  {
    //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Map') {
          return (
            <Image
              source={
                focused
                  ? require('./assets/map.png')
                  : require('./assets/map1.png')
              }
              style={{
                width: 20,
                height: 20,
                borderRadius: 40 / 2,
              }}
            />
          );
        } else if (routeName === 'List') {
          return (
            <Image
              source={
                focused
                  ? require('./assets/list.png')
                  : require('./assets/list1.png')
              }
              style={{
                width: 20,
                height: 20,
                borderRadius: 40 / 2,
              }}
            />
          );
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: '#EC1B85',
      inactiveTintColor: 'gray',
    },
  }


));
 createAppContainer(Estatse);


const Forlease_StackNavigator =  createStackNavigator ({
  Estatse: {
    screen: Estatse,
    navigationOptions: ({ navigation }) => ({
      title: 'Estatse',
      headerLeft: <HamburgerIcon navigationProps={navigation} />,
      headerRight:  <Text style={styles.menuText} onPress={() => { this.props.navigation.navigate('SortScreen') }} > Sorting</Text>,
      headerStyle: {
        backgroundColor: '#EC1B85'
      },
      headerTintColor: '#fff',
    })
  },
});

const Sorting_StackNavigator =  createStackNavigator ({
  SortScreen: {
    screen: SortScreen,
    navigationOptions:  {
      title: 'Sorting',
      headerStyle: {
        backgroundColor: '#EC1B85'
      },
      headerTintColor: '#fff',
    }
  },

  Default:{
    screen:ListScreen,
    navigationOptions: {
      title: 'Sorting Default',
//header: null //this will hide the header


      headerStyle: {
        backgroundColor: '#EC1B85'
      },
      headerTintColor: '#fff',
    
    },
  },
  City:{
    screen:CityScreen,
    navigationOptions: {
      title: 'Sorting City',
//header: null //this will hide the header


      headerStyle: {
        backgroundColor: '#EC1B85'
      },
      headerTintColor: '#fff',
    
    },
  },

  SortList:{
    screen:SortList,
    navigationOptions: {
      title: 'SortList',
//header: null //this will hide the header


      headerStyle: {
        backgroundColor: '#EC1B85'
      },
      headerTintColor: '#fff',
    
    },
  },

});


const Forlogin_StackNavigator =  createStackNavigator ({
 
  Sign:{
    screen:SignScreen,
    navigationOptions: {
      title: 'Login',
header: null //this will hide the header
    },
  },
  Reg:{
    screen:RegistrationScreen,
    navigationOptions: {
      title: 'Registration',
//header: null //this will hide the header
    },
  },
});




const MyDrawerNavigator = createDrawerNavigator({
  MainStack: {
    screen: Forlease_StackNavigator
  },
  SortStack: {
    screen: Sorting_StackNavigator
  },
  SecondStack: {
    screen: Forlogin_StackNavigator
  },
},
  {
    contentComponent: Custom_Side_Menu,
    drawerWidth: Dimensions.get('window').width - 130,
  });

export default createAppContainer(MyDrawerNavigator);
const styles = StyleSheet.create({

  MainContainer: {

    flex: 1,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
  },

  sideMenuContainer: {

    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20
  },

  sideMenuProfileIcon:
  {
    resizeMode: 'center',
    width: 150, 
    height: 150, 
    borderRadius: 150/2
  },

  sideMenuIcon:
  {
    resizeMode: 'center',
    width: 38, 
    height: 38, 
    marginRight: 10,
    marginLeft: 20
    
  },

  menuText:{

    fontSize: 15,
    color: '#222222',
    
  }

});
