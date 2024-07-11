import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import FuseSplashScreen from '@fuse/core/FuseSplashScreen';
import { useAppDispatch } from 'app/store/hooks';
import apiService from 'app/store/apiService';
import ExtendedMockAdapter from './ExtendedMockAdapter';
import { authApiMocks } from './api/auth-api';
import { contactsApiMocks } from './api/contacts-api';
import { countriesApiMocks } from './api/countries-api';

const mockAdapterOptions = {
	delayResponse: 0
};

const baseURL = '/mock-api';

type MockAdapterProviderProps = {
	enabled?: boolean;
	children: React.ReactNode;
};

const mock = new ExtendedMockAdapter(axios, mockAdapterOptions, baseURL);

function MockAdapterProvider(props: MockAdapterProviderProps) {
	const { enabled = true, children } = props;
	const [loading, setLoading] = useState(true);
	const dispatch = useAppDispatch();
	const isInitialMount = useRef(true);
	useEffect(() => {
		const setupAllMocks = () => {
			[authApiMocks, contactsApiMocks, countriesApiMocks].forEach((mockSetup) => {
				mockSetup(mock);
			});
		};

		if (enabled) {
			setupAllMocks();
			mock.onAny().passThrough();
		} else {
			mock.restore();
		}

		setLoading(false);

		return () => {
			if (!enabled && mock) {
				mock.restore();
			}

			setLoading(false);
		};
	}, [enabled]);

	useEffect(() => {
		if (import.meta.hot) {
			if (!isInitialMount.current) {
				dispatch(apiService.util.resetApiState());
			}

			isInitialMount.current = false;
		}
	}, [dispatch]);

	return loading ? <FuseSplashScreen /> : children;
}

export default MockAdapterProvider;
