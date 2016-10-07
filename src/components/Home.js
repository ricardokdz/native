import React, {Component} from 'react'
import {
	View,
	Text,
	MapView
} from 'react-native'

export class Home extends Component {
  render() {
    return (
			<View>
				<MapView
        	style={{height:700}}
        	showsUserLocation={true}
					followUserLocation={true}
      	/>
			</View>
    );
  }
}