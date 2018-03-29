import React from 'react';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header ,Container} from 'semantic-ui-react'

import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';



export default () => (
	<div>
		<Menu 
			fixed='top'
			borderless={true}
			inverted={true}
			size='small'
		>
			<Container>
			<Menu.Item header as='h2'>
				<Button  as={ NavLink } to='/'>Freelancr</Button>
				</Menu.Item>
			<Menu.Item position='right'>
					<Button   as={ NavLink } to='/logsign'>Post Jobs</Button>
				</Menu.Item>
				<Menu.Item>
					<Button  as={ Link } to='/jobs'>Browse Jobs</Button>
				</Menu.Item>
				<Menu.Item>
					<Button  as={ NavLink } to='/'>Profile</Button>
				</Menu.Item>
			</Container>
		</Menu>
	</div>
)