import React, {Component} from 'react'
import {Text, StyleSheet} from 'react-native'
import {Scene, Router} from 'react-native-router-flux'
import SideMenu from 'react-native-side-menu'

var styles = require('./style.js')

import {Menu} from './components/Menu'

import {Login} from './components/Login'

import {Home} from './components/Home'
import {Tickets} from './components/Tickets'
import {TicketItem} from './components/TicketItem'
import {HowToUse} from './components/HowToUse'
import {Payment} from './components/Payment'

const TabIcon = ({selected, title}) => {
	return (
		<Text style={{color: selected ? 'red' : 'black'}}>{title}</Text>
	)
}


export default class App extends Component {
  render() {
		const menu = <Menu navigator={navigator}/>
		
    return (
			<SideMenu menu={menu}>
				<Router>
					<Scene key="tabbar" tabs tabBarStyle={styles.tab} >

						

			      <Scene key="map" title="Mapa" icon={TabIcon}>
			        <Scene key="map_home" component={Home} initial hideNavBar />
			      </Scene>
			
			      <Scene key="tickets" title="Tickets" icon={TabIcon} navigationBarStyle={styles.nav}>
			        <Scene key="ticket_home" component={Tickets} title="Tickets"/>
							<Scene key="ticket_view" component={TicketItem} hideNavBar />
			      </Scene>
			
						<Scene key="payments" title="Pagamento" icon={TabIcon} navigationBarStyle={styles.nav}>
							<Scene key="payment_home" component={Payment} title="Pagamento" />
						</Scene>
      
            <Scene key="login" component={Login} hideNavBar />
					
						
					</Scene>
	    	</Router>
			</SideMenu>
		)
  }
}