import React from 'react';
import { Segment, Form, Divider, Grid, Header, Button,Radio } from 'semantic-ui-react';
import { validate } from 'email-validator';
import LogSign from './LogSign'
import { NavLink } from 'react-router-dom';
// import SignupColumn from './SignupColumn';


export default class LoginColumn extends React.Component {
	constructor(props) {
		super(props);
	}

	state = {
		emailError: false,
		passwordMatchError: false,
		passwordBlankError: false,
		firstNameBlankError: false,
		lastNameBlankError: false
	}

	onSubmit = (f) => {
		// e.preventDefault();
		// console.log(document.forms['signupForm'].elements['first_name'].value)
		const form = document.forms['signupForm'];
		// form validation
		const email = form.elements['email'].value;
		if (validate(email) == false) {
			this.setState(() => ({ emailError: true}));
			console.log('invalid email.');
		} else {
			this.setState(() => ({ emailError: false }))
		}
		
		const password = form.elements['password'].value;
		const password_confirm = form.elements['password_confirm'].value;

		if (password_confirm != password) {
			this.setState(() => ({ passwordMatchError: true }));
		}

		// check if the password is blank
		this.setState(() => ({
			passwordBlankError: password === '' || password_confirm === ''
		}));

		const first_name = form.elements['first_name'].value;
		const last_name = form.elements['last_name'].value;
		this.setState(() => ({ firstNameBlankError: first_name === ''}));
		this.setState(() => ({ lastNameBlankError: last_name === ''}));

		const data = { 'name': first_name }

		fetch('/api/ajax', {
			body: JSON.stringify(data), // must match 'Content-Type' header
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			credentials: 'same-origin', // include, same-origin, *omit
			headers: {
				'user-agent': 'Mozilla/4.0 MDN Example',
				'content-type': 'application/json'
			},
			method: 'POST', // *GET, POST, PUT, DELETE, etc.
			mode: 'cors', // no-cors, cors, *same-origin
			redirect: 'follow', // *manual, follow, error
			referrer: 'no-referrer', // *client, no-referrer
		}).then( response => response.json() )
		.then( resData => { console.log(resData)});
	}

	render = () => (
		<div className="signup-column">
			<Grid
				style ={{marginTop:'1em'}}
				verticalAlign="middle"
				textAlign='left'
				centered	        
			>
				<Grid.Column style={{ maxWidth: 420 }} floated='middle'>
					<Header as='h2' color='teal'>Already a member</Header>
					
					<Segment padded='very'>
						<Form onSubmit={ this.onSubmit } name='signupForm'>
							<Form.Field>
								<Form.Input
									fluid 
									label='Email' 
									placeholder='email'
									icon='mail'
									iconPosition='left'
									name='email'
									error={ this.state.emailError } />
							</Form.Field>

							<Form.Field>
								<Form.Input
									fluid 
									label='Password' 
									placeholder='Password'
									type='password'
									name='password'
									error={ this.state.passwordMatchError}
									error={ this.state.passwordBlankError} />
							</Form.Field>
						</Form>
            <Radio label='remember me '  style ={{marginTop:'1em'}} />
                  <Header 
							      as='h5'
										content='' />
												<Button 
												color='green' 
												fluid 
												as={ NavLink } to='/postjobs'
												style={{ marginTop: '1em'}}
												onClick={ this.onSubmit }	>
												login
												</Button>
										</Segment>
                  </Grid.Column>
                </Grid>
                </div>
                );
                }

	
                    
