import React, {Component} from 'react'
import {
	View,
	Text,
	TouchableHighlight,
	StyleSheet
} from 'react-native'

export class TicketListItem extends Component {
	
	_onPressButton(){
		// redirect to ticket
	}
	
  render() {
    return (
			<View>
	      <Text>{this.props.title}</Text>
				<Text>{this.props.number}</Text>
				<TouchableHighlight onPress={this._onPressButton}>
					<Text>Ver</Text>
				</TouchableHighlight>
			</View>
    );
  }
}
