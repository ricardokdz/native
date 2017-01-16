import React, {Component} from 'react'
import {
	View,
	TouchableHighlight,
	Text,
	StyleSheet
} from 'react-native'
import {Actions} from 'react-native-router-flux'
var {FBLogin, FBLoginManager} = require('react-native-facebook-login')

export class Login extends Component {
	
	_onEnter(){
		Actions.map()
	}
	
  render() {
    var _this = this;
    return (
			<View style={styles.container}>
	      <FBLogin
	        ref={(fbLogin) => { this.fbLogin = fbLogin }}
	        permissions={["email","user_friends"]}
	        loginBehavior={FBLoginManager.LoginBehaviors.Native}
	        onLogin={function(data){
	          console.log("Logged in!");
	          console.log(data);
	          _this.setState({ user : data.credentials });
	        }}

	        onLoginFound={function(data){
	          console.log("Existing login found.");
	          console.log(data);
	          _this.setState({ user : data.credentials });
	        }}
	        onLoginNotFound={function(){
	          console.log("No user logged in.");
	          _this.setState({ user : null });
	        }}
	        onError={function(data){
	          console.log("ERROR");
	          console.log(data);
	        }}
	        onCancel={function(){
	          console.log("User cancelled.");
	        }}
	        onPermissionsMissing={function(data){
	          console.log("Check permissions!");
	          console.log(data);
	        }}
	      />
				<TouchableHighlight onPress={this._onEnter}>
					<Text>Entrar</Text>
				</TouchableHighlight>
			</View>
    )
  }
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'center'
	}
})