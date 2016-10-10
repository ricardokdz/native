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
	      <Text style={{fontSize: 24, color: '#527fe4', fontFamily: 'Helvetica'}}>{this.props.company}</Text>
        <Text>{this.props.date} - {this.props.hour}</Text>
				<Text>{this.props.status}</Text>
				<TouchableHighlight onPress={this._onPressButton}>
					<Text>Ver ticket</Text>
				</TouchableHighlight>
			</View>
    );
  }
}
