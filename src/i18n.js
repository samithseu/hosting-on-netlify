import { createI18n } from "vue-i18n";

const messages = {
  en: {
    welcome: "Welcome",
    message: "Hello World",
  },
  km: {
    welcome: "សូមស្វាគមន៍",
    message: "សួស្ដី ពិភពលោក",
  },
};

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages,
});

export default i18n;
