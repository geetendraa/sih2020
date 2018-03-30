import React from 'react';
import { Segment, Form, Divider, Grid, Header, Button, Radio, List } from 'semantic-ui-react';
import { validate } from 'email-validator';
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
		passwordLengthError: false,
		lastNameBlankError: false,
		blankWorkerTypeError: false
	}

	onSubmit = (e) => {
		e.preventDefault();
		// form validation
		const email = e.target.email.value;
		if (validate(email) == false) {
			this.setState(() => ({ emailError: true}));
		} else {
			this.setState(() => ({ emailError: false }))
		}
		
		const password = e.target.password.value;
		const password_confirm = e.target.password_confirm.value;

		if (password_confirm != password) {
			this.setState(() => ({ passwordMatchError: true }));
		} else {
			this.setState(() => ({ passwordMatchError: false }));
		}
		
		// if (password.length < 6 || password_confirm.length < 6) {
		// 	this.setState(() => ({ passwordLengthError: true }));
		// } else {
		// 	this.setState(() => )
		// }

		this.setState(() => ({
			passwordLengthError: password.length < 3
		}));

		// check if the password is blank
		this.setState(() => ({
			passwordBlankError: password === '' || password_confirm === ''
		}));

		const first_name = e.target.first_name.value;
		const last_name = e.target.last_name.value;
		this.setState(() => ({ firstNameBlankError: first_name === ''}));
		this.setState(() => ({ lastNameBlankError: last_name === ''}));

		const worker_type = e.target.radioGroup.value;
		// worker_type = worker_type ? 'Government' : 'Freelancer';
		if (worker_type == '') {
			this.setState(() => ({ blankWorkerTypeError: true }))
		}
		
		if (this.errorsPresent() === false ) {
			const signupDetails = {
				first_name,
				last_name,
				email,
				password,
				worker_type
			}
			this.props.signup(signupDetails);
		}
	}

	handleChangeRadio = (e, { value }) => {
		this.setState(() => ({ 
			radioValue: value,
			blankWorkerTypeError: false
		}))
	}

	errorsPresent = () => {
		if (
			this.state.emailError ||
			this.state.firstNameBlankError ||
			this.state.lastNameBlankError ||
			this.state.passwordBlankError ||
			this.state.passwordLengthError ||
			this.state.passwordMatchError &&
			this.state.blankWorkerTypeError
		) return true
		else return false
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

							{/* First Name and last name */}
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
							
							{/* email */}
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
									error={ this.state.passwordBlankError} 
									error={ this.state.passwordLengthError} />
							</Form.Field>

							<Form.Field>
								<Form.Input
									fluid 
									label='Confirm password' 
									placeholder='Password'
									type='password'
									name='password_confirm'
									error={ this.state.passwordMatchError}
									error={ this.state.passwordBlankError}
									error={ this.state.passwordLengthError } />
							</Form.Field>

							<Form.Field>
								<strong>You are the : </strong>			
							</Form.Field>
							
							<Form.Field>
								<Radio
									label='Freelancer'
									name='radioGroup'
									value={0}
									checked={this.state.radioValue === 0}
									onChange={this.handleChangeRadio}
								/>
							</Form.Field>
							<Form.Field>
								<Radio
									label='Government'
									name='radioGroup'
									value={1}
									checked={this.state.radioValue === 1}
									onChange={this.handleChangeRadio}
								/>
							</Form.Field>

							<Button 
								color='teal' 
								fluid 
								style={{ marginTop: '1em'}}	>
									Signup
							</Button>
						</Form>

						{/* error list */}
						<List className='signup-form__error'>
							{ this.state.emailError &&  <List.Item>Invalid email</List.Item>}
							{ this.state.passwordBlankError &&  <List.Item>Password must not be blank </List.Item>}
							{ this.state.passwordLengthError &&  <List.Item>Password must be at least 6 characters</List.Item>}
							{ this.state.passwordMatchError &&  <List.Item>Passwords do not match</List.Item>}
							{ this.state.firstNameBlankError &&  <List.Item>First name cannot be blank</List.Item>}
							{ this.state.lastNameBlankError &&  <List.Item>Last name cannot be blank</List.Item>}
							{ this.state.blankWorkerTypeError &&  <List.Item>Worker type cannot be blank</List.Item>}							
						</List>
						
					</Segment>
				</Grid.Column>
			</Grid>
		</div>
	);
}

const matchDispatchToProps = (dispatch) => ({
	signup: (signupDetails) => { 
		dispatch({
			type: 'SIGNUP',
			signupDetails
		});
	 }
})

export default connect(null, matchDispatchToProps)(SignupForm);