import React from 'react';
import { Admin } from 'react-admin';
import nestjsxCrudProvider from 'ra-data-nestjsx-crud';

import authProvider from './auth';
import i18nProvider from './localization';
import theme from './theme';

const dataProvider = nestjsxCrudProvider(process.env.REACT_APP_API_URL);

const App = () => (
  <Admin
    theme={theme}
    authProvider={authProvider}
    dataProvider={dataProvider}
    i18nProvider={i18nProvider}></Admin>
);

export default App;
