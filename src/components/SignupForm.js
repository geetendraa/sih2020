import React from 'react';
import { Segment, Form, Divider, Grid, Header, Button, Radio } from 'semantic-ui-react';
import { validate } from 'email-validator';
import LogSign from './LogSign'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class SignupForm extends React.Component {
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

	onSubmit = (e) => {
		console.log('makichuuusus');
		// e.preventDefault();
		// console.log(document.forms['signupForm'].elements['first_name'].value)
		// const form = document.forms['signupForm'];
		// form validation
		// const email = form.elements['email'].value;
		// if (validate(email) == false) {
		// 	this.setState(() => ({ emailError: true}));
		// 	console.log('invalid email.');
		// } else {
		// 	this.setState(() => ({ emailError: false }))
		// }
		
		// const password = form.elements['password'].value;
		// const password_confirm = form.elements['password_confirm'].value;

		// if (password_confirm != password) {
		// 	this.setState(() => ({ passwordMatchError: true }));
		// }

		// // check if the password is blank
		// this.setState(() => ({
		// 	passwordBlankError: password === '' || password_confirm === ''
		// }));

		// const first_name = form.elements['first_name'].value;
		// const last_name = form.elements['last_name'].value;
		// this.setState(() => ({ firstNameBlankError: first_name === ''}));
		// this.setState(() => ({ lastNameBlankError: last_name === ''}));

		// const data = { 'name': first_name }

		// this.props.signup({ name: 'anchit'});
	}

	handleChangeRadio = (e, { value }) => {
		this.setState(() => ({ value }))
	}

	render = () => (
		<div className="signup-form">
			<Grid
				verticalAlign="middle"
				textAlign='left'
				centered	
			>
				<Grid.Column style={{ maxWidth: 420 }}>

					<Header as='h2' color='teal'>Create a new account</Header>
					
					<Segment padded='very'>
						<Form method='post' onSubmit={this.onSubmit} >

							<Form.Group widths='equal'>
								<Form.Input 
									fluid label='First name' 
									placeholder='First name'
									name='first_name'
									error={ this.state.firstNameBlankError } />
								<Form.Input 
									fluid 
									label='Last name' 
									placeholder='Last name'
									name='last_name'
									error={ this.state.lastNameBlankError } />
							</Form.Group>
							
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

							<Form.Field>
								<Form.Input
									fluid 
									label='Confirm password' 
									placeholder='Password'
									type='password'
									name='password_confirm'
									error={ this.state.passwordMatchError}
									error={ this.state.passwordBlankError} />
							</Form.Field>

							<Form.Field>
								<strong>You are the : </strong>			
							</Form.Field>
							
							<Form.Field>
								<Radio
									label='Freelancer'
									name='radioGroup'
									value={0}
									checked={this.state.value === 0}
									onChange={this.handleChangeRadio}
								/>
							</Form.Field>
							<Form.Field>
								<Radio
									label='Government'
									name='radioGroup'
									value={1}
									checked={this.state.value === 1}
									onChange={this.handleChangeRadio}
								/>
							</Form.Field>

							<Button 
								color='teal' 
								fluid 
								as={ NavLink } to='/'
								style={{ marginTop: '1em'}}	>
									Signup
							</Button>
						</Form>
					</Segment>
				</Grid.Column>
			</Grid>
		</div>
	);
}

const matchDispatchToProps = (dispatch) => ({
	signup: (signupDetails) => { 
		console.log('helloooo');
		dispatch('SIGNUP', signupDetails);
	 }
})

export default connect(null, matchDispatchToProps)(SignupForm);