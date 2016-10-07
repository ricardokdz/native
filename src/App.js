import React, { Component } from 'react'
import {
  Text,
  View,
	StyleSheet,
	Image
} from 'react-native'

import {Home} from './components/Home'
import {Tickets} from './components/Tickets'
import {HowToUse} from './components/HowToUse'


export default class App extends Component {
	
  render() {				
    return (
			<View>
				<Home/>
			</View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})