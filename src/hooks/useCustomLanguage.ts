import { useTranslation } from "react-i18next";

const useCustomLanguage = () => {
  const { t } = useTranslation();

  const customT = (titleKey: string, key: string, values = {}) => {
    return t(`${titleKey}.${key}`, values);
  };

  return customT;
};

export default useCustomLanguage;
