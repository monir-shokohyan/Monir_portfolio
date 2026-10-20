import i18n from "./index";

export type Language = "en" | "fa";

export const changeLanguage = (lng: Language, changeDir?: boolean) => {
  i18n.changeLanguage(lng);
  if(changeDir){
      document.documentElement.dir = lng === "fa" ? "rtl" : "ltr";
      document.documentElement.lang = lng;
  }
};
