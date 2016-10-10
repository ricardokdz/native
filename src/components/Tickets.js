import React, {Component} from 'react'
import {
	View,
	Text,
	StatusBar
} from 'react-native'

import NavigationBar from 'react-native-navbar'

import {TicketListItem} from './TicketListItem'

export class Tickets extends Component {
	
  render() {
    return (
			<View style={{backgroundColor: '#ccc'}}>
        <NavigationBar
          title={{title: 'Tickets'}} />
			
				<TicketListItem 
          company="Expresso Recreio"
          date="26/Set"
          hour="8:30"
          status="valid"
          way="ida"
          line="Genesis 2333SV" />
      
			</View>
    );
  }
}