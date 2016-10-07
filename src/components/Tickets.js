import React, {Component} from 'react'
import {
	View,
	Text,
	StatusBar
} from 'react-native'

import {TicketListItem} from './TicketListItem'

export class Tickets extends Component {
	
  render() {
    return (
			<View>
	      <Text>Tickets</Text>
			
				<TicketListItem title="Ticket 01" number="0001" />
			</View>
    );
  }
}