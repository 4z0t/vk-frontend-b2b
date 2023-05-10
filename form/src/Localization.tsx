import LocalizedStrings, { LocalizedStringsMethods } from "react-localization";

interface SelectStrings {
  towerPlaceholder: string;
  floorPlaceholder: string;
  roomPlaceholder: string;
}

interface FormStrings {
  formTitle: string;
  sendText: String;
  clearText: String;
  commentPlaceholder: string;
  select: SelectStrings;
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
      commentPlaceholder: "leave your comment here...",
      select: {
        towerPlaceholder: "Select tower",
        floorPlaceholder: "Select floor",
        roomPlaceholder: "Select room",
      },
    },
  },
  ru: {
    form: {
      formTitle: "Бронирование переговорной",
      sendText: "Отправить",
      clearText: "Очистить",
      commentPlaceholder: "оставьте свой комментарий здесь...",
      select: {
        towerPlaceholder: "Выберите башню",
        floorPlaceholder: "Выберите этаж",
        roomPlaceholder: "Выберите переговорку",
      },
    },
  },
});

export default strings;
