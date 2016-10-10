import React, { Component } from 'react'
import {
  Text,
  View,
	StyleSheet,
	Image
} from 'react-native'

import SideMenu from 'react-native-side-menu'

import {Home} from './components/Home'
import {Tickets} from './components/Tickets'
import {HowToUse} from './components/HowToUse'
import {Menu} from './components/Menu'

export default class App extends Component {
  render() {	
    const menu = <Menu navigator={navigator}/>
    			
    return (
      <SideMenu menu={menu}>
				<Tickets />
      </SideMenu>
    )
  }
}