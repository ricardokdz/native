import React, {Component} from 'react'
import {
	View,
	Text,
	StyleSheet
} from 'react-native'

import Carousel from 'react-native-carousel'

export class HowToUse extends Component {
	
  render() {
    return (
			<Carousel style={styles.container} loop={false} animate={false} indicatorAtBottom={true}>
        <View style={styles.item}>
          <Text>Não perca seu ônibus</Text>
					
        </View>
        <View style={styles.item}>
          <Text>Page 2</Text>
        </View>
        <View style={styles.item}>
          <Text>Page 3</Text>
        </View>
      </Carousel>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width:400
	},
  item: {
    width: 375,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});
