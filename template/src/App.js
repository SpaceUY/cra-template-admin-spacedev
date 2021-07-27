import React from 'react';
import { Admin } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import authProvider from './auth';
import i18nProvider from './localization';
import theme from './theme';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin
    theme={theme}
    authProvider={authProvider}
    dataProvider={dataProvider}
    i18nProvider={i18nProvider}></Admin>
);

export default App;
