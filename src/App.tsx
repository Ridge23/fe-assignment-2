import React from 'react';
import store from 'store'
import { Provider } from 'react-redux';

import Layout from 'components/layout/Layout';

export default function App(): JSX.Element {
    return (
        <Provider store={store}>
            <Layout title="Folders tree">hello world</Layout>
        </Provider>
    )
}