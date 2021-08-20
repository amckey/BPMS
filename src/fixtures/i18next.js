import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './english';
import ru from './russian';
import lv from './latvian';

i18next
.use(initReactI18next)
.init({
  resources: {
    en: en,
    ru: ru,
    lv: lv
  },
  lng: 'ru',
  fallbackLng: 'ru',
  interpolation: {escapeValue: false}
});

export default i18next;