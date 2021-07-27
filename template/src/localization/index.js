import polyglotI18nProvider from 'ra-i18n-polyglot';
import en from './en';

const i18nProvider = polyglotI18nProvider((locale) => {
  switch (locale) {
    case 'en':
      return en;
    // If you get a new language that you support just add a case for it here
    // case 'es':
    //   return import(`./${locale}`).then((messages) => messages.default);
    default:
      return en;
  }
}, 'en');

export default i18nProvider;
