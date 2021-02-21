// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { useStore } from 'app/store';

export default function App({ Component, pageProps }) {
    const store = useStore(pageProps.initialReduxState)

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}
