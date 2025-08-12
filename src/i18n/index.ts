import i18n from "i18next"
import {initReactI18next} from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

import ua from "../locales/ua/common.json"
import en from "../locales/en/common.json"
import pl from "../locales/pl/common.json"

void i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "ua",
        supportedLngs: ["ua", "en", "pl"],
        resources: {
            ua: {common: ua},
            en: {common: en},
            pl: {common: pl},
        },
        ns: ["common"],
        defaultNS: "common",
        interpolation: {escapeValue: false},
        detection: {
            order: ["localStorage", "navigator", "htmlTag"],
            caches: ["localStorage"],
            lookupLocalStorage: "lang",
        },
    })

export default i18n
