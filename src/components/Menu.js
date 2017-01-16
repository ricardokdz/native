import React, {Component} from 'react'
import {
  Dimensions,
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native'
import {Actions} from 'react-native-router-flux'

const window = Dimensions.get('window');
const uri = 'https://e-nautia.com/avatars/thesimpsons/Homer_Simpson_Sideart_Homebrew_s.jpg';

export class Menu extends Component {
  render() {
    return (
			<View style={styles.menu}>
	      <View style={styles.avatarContainer}>
	        <Image
	          style={styles.avatar}
	          source={{ uri, }}/>
	        <Text style={styles.name}>Ricardo Pedrosa</Text>
	      </View>

	      <Text
	        onPress={() => Actions.payment_home({test: 1})}
	        style={styles.item}>
	        Contacts
	      </Text>
			</View>
    )
  }
}


const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: '#293944',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5,
  },
});