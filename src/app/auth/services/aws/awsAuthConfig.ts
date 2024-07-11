type awsAuthConfig = {
	[key: string]: unknown;
};
const awsAuthConfig: awsAuthConfig = {
	aws_project_region: import.meta.env.VITE_AWS_PROJECT_REGION,
	aws_cognito_identity_pool_id: import.meta.env.VITE_AWS_COGNITO_IDENTITY_POOL_ID,
	aws_cognito_region: import.meta.env.VITE_AWS_COGNITO_REGION,
	aws_user_pools_id: import.meta.env.VITE_AWS_USER_POOLS_ID,
	aws_user_pools_web_client_id: import.meta.env.VITE_AWS_USER_POOLS_WEB_CLIENT_ID,
	oauth: {},
	aws_cognito_username_attributes: ['EMAIL'],
	aws_cognito_social_providers: [],
	aws_cognito_signup_attributes: ['EMAIL', 'NAME'],
	aws_cognito_mfa_configuration: 'OFF',
	aws_cognito_mfa_types: ['SMS'],
	aws_cognito_password_protection_settings: {
		passwordPolicyMinLength: 8,
		passwordPolicyCharacters: []
	},
	aws_cognito_verification_mechanisms: ['CODE']
};

export default awsAuthConfig;
