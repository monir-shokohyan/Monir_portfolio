import { useSyncExternalStore } from "react";
import i18n from "./index";

export const useIsRtl = () => {
  const isRTL = useSyncExternalStore(
    (callback: () => void) => {
      i18n.on("languageChanged", callback);
      return () => i18n.off("languageChanged", callback);
    },
    () => i18n.language === "fa"
  );

  return { isRTL };
};
