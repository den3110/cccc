import { useContext } from 'react';
import { I18nContext } from 'react-i18next';

export function useLanguage() {
  const { i18n } = useContext(I18nContext);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return {
    language: i18n.language,
    changeLanguage,
  };
}