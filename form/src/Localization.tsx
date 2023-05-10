import LocalizedStrings, { LocalizedStringsMethods } from "react-localization";

interface FormStrings {
  formTitle: string;
  sendText: String;
  clearText: String;
  commentPlaceholder: string;
}

interface AppStrings extends LocalizedStringsMethods {
  form: FormStrings;
}

const strings: AppStrings = new LocalizedStrings({
  en: {
    form: {
      formTitle: "Meeting room booking",
      sendText: "Send",
      clearText: "Clear",
      commentPlaceholder:"leave your comment here..."
    },
  },
  ru: {
    form: {
      formTitle: "Бронирование переговорной",
      sendText: "Отправить",
      clearText: "Очистить",
      commentPlaceholder:"оставьте свой комментарий здесь..."
    },
  },
});

export default strings;
