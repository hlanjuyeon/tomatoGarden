import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import awsAuthConfig from './awsAuthConfig';

type AWSAuthProviderProps = {
	children: React.ReactNode;
};

Amplify.configure(awsAuthConfig);

function AWSAuthProvider(props: AWSAuthProviderProps) {
	const { children } = props;

	return <Authenticator.Provider>{children}</Authenticator.Provider>;
}

export default AWSAuthProvider;
