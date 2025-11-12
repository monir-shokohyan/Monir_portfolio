// src/i18n/config.ts
import i18n from "./index";

export const changeLanguage = (lng,changeDir) => {
  i18n.changeLanguage(lng);
  if(changeDir){
      document.documentElement.dir = lng === "fa" ? "rtl" : "ltr";
      document.documentElement.lang = lng;
  }
};