import React, {Component} from 'react'
import {
	View,
	Text,
	TouchableHighlight
} from 'react-native'

import QRCode from 'react-native-qrcode'

export class TicketItem extends Component {
	
  render() {
    return (
			<View>
	      <Text style={{marginTop:200}}>Expresso Recreio</Text>
				<QRCode
          value='Ricardo'
          size={200}
          bgColor='white'
          fgColor='purple' />
			</View>
    );
  }
}