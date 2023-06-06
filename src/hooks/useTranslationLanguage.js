import { useContext } from 'react';
import { I18nContext } from 'react-i18next';

export function useTranslationLanguage() {
  const { t } = useContext(I18nContext);

  return {
    t,
  };
}