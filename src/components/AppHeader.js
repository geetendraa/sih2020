import React from 'react';
import { Button, Menu, Header ,Container} from 'semantic-ui-react'

import { Link } from 'react-router-dom';

export default () => (
	<div>
		<Menu 
			fixed='top'
			borderless={true}
			inverted
			size='big'
		>
			<Container>
				<Menu.Item header as='h2'>
					<Header inverted as={ Link }  to='/'>Freelancr</Header>
				</Menu.Item>

				<Menu.Item as={ Link } to='/jobs' position='right'>
					<Header inverted size='small' >Browse Jobs</Header>
				</Menu.Item>

				<Menu.Item as={ Link } to='/login' >
					<Header inverted content='Login' size='small' /> 
				</Menu.Item>

				<Menu.Item as={ Link } to='/signup'  >
					<Header inverted content='Signup'  size='small' /> 									
				</Menu.Item>

				<Menu.Item>
					<Button as={ Link } to='post_job' color='green' size='massive' content='Post a Job' />
				</Menu.Item>
					
				{/* <Menu.Item>
					<Button  as={ Link } to='/jobs'>Browse Jobs</Button>
				</Menu.Item>

				<Menu.Item>
					<Button  as={ NavLink } to='/'>Profile</Button>
				</Menu.Item> */}
			</Container>
		</Menu>
	</div>
)