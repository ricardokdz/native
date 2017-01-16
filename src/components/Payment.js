import React, {Component} from 'react'
import {
	View,
	Text,
	StatusBar,
	TouchableHighlight
} from 'react-native'

import {LiteCreditCardInput} from "react-native-credit-card-input"

export class Payment extends Component {
	
	constructor(props){
		super(props)
		
		this.state = {
			showButton: false
		}
		
		
	}
	
	_onChange(data){
		var _this = this;
		
		if(data.valid){
			//_this.setState({showButton: true})
		}
		
	}
	
	_addCard(){

		
	}
	
	componentDidMount(){
		//this.setState({showButton: true})
	}
	
  render() {
		console.log(this.state.showButton)
		
    return (
			<View style={{paddingTop: 100}}>
				<Text>Adicionar cartao</Text>
				
				<LiteCreditCardInput onChange={this._onChange} />
				
				{this.state.showButton ? 
					<TouchableHighlight onPress={this._addCard} style={{backgroundColor:'#ccc', padding:10}}>
						<Text>Salvar</Text>
					</TouchableHighlight>
					: null }
					
			</View>	
    )
  }
}