import React, {Component} from 'react'
import {
	StyleSheet,
  Image,View,Text,TouchableHighlight,AlertIOS
} from 'react-native'

import MapView from 'react-native-maps'

import MarkerBus from '../marker-bus.png'
import MarkerStation from '../marker-station.png'

export class Home extends Component {
	
  render() {
    return (
      <MapView
        style={{flex:1}}
        showsUserLocation={true}
        showsMyLocationButton={true}
        showsCompass={true}
        initialRegion={{
          latitude: -22.992556,
          longitude: -43.367217,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      >
        <MapView.Marker
          coordinate={{latitude: -23.000403, longitude: -43.376979}}
          title='Moov 0050'
          description='Recreio &rarr; Centro'
          image={MarkerBus}
        />
        <MapView.Marker
          coordinate={{latitude: -23.001329, longitude: -43.365926}}
          image={MarkerStation}
        >
          <MapView.Callout style={{width: 120}}>
            <View>
              <Text>Terminal Alvorada</Text>
              <TouchableHighlight style={{padding:10}} onPress={() => AlertIOS.alert('Boa', 'garoto')}>
                <Text>Ver próximos</Text>
              </TouchableHighlight>
            </View>
          </MapView.Callout>
        </MapView.Marker>
          
        <MapView.Marker
          coordinate={{latitude: -23.000163, longitude: -43.360422}}
          title='Barra Shopping'
          description='Próximo ônibus em 5 minutos'
          image={MarkerStation}
        />
        <MapView.Polyline 
          strokeWidth={5}
          strokeColor={'#42a3c9'}
          coordinates={[
            {
              latitude: -23.000493,
              longitude: -43.387368
            },
            {
              latitude: -23.000295,
              longitude: -43.369172
            },
            {
              latitude: -23.002744, 
              longitude: -43.366769
            },
            {
              latitude: -23.002784, 
              longitude: -43.365481
            },
            {
              latitude: -23.000177, 
              longitude: -43.362778
            },
            {
              latitude: -23.000335, 
              longitude: -43.341449
            }
          ]}
        />
      </MapView>
    )
  }
}