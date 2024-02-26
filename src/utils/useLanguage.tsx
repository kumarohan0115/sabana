import { useEffect, useState } from "react";
import langData from "../../public/lang-v1/lang.json";

const getString = (str: string, lang: string) => {
  return langData[lang][str];
};

const useLangString = (): ((str: string) => string) => {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");
  useEffect(() => {
    setLang(localStorage.getItem("lang") || 'en')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localStorage.getItem("lang")]);
  return (str: string) => getString(str, lang);
};

export default useLangString;
