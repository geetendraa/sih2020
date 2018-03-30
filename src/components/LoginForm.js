import React from 'react';
import { Segment, Grid, Button, Input, Header, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    emailError: '',
    passwordBlankError: '',
	}
	
	onSubmit = (e) => {
		e.preventDefault();

		const email = e.target.email.value;
		const password = e.target.password.value;

		const loginDetails = {
			email,
			password
		};

		this.props.login(loginDetails);

		console.log(this.props.auth.current_user);
		
	}

  render = () => (
    <div className="signup-form">
			<Grid
				verticalAlign="middle"
				textAlign='left'
				centered	
			>
				<Grid.Column style={{ maxWidth: 420 }}>

					<Header as='h2' color='teal'>Log in to your account</Header>
					
					<Segment padded='very'>
						<Form method='post' onSubmit={this.onSubmit} >							
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

							<Button 
								color='teal' 
								fluid 
								style={{ marginTop: '1em'}}	>
									Login
							</Button>
						</Form>
					</Segment>
				</Grid.Column>
			</Grid>
		</div>
  )
}


const matchStateToProps = (state) => ({
	auth: state.auth
})

const matchDispatchToProps = (dispatch) => ({
	login: (loginDetails) => {
		dispatch({
			type: 'LOGIN',
			loginDetails
		});
	}
})

export default connect(matchStateToProps, matchDispatchToProps)(LoginForm);