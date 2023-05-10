import React, { useState, useRef } from "react";
import "./Form.css";
import Select, {
  SingleValue,
  Options,
  Theme,
  CSSObjectWithLabel,
  ControlProps,
} from "react-select";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setDate } from "date-fns";

interface Option {
  value?: string;
  label?: string;
}

const options: Options<Option> = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const newTheme = (theme: Theme) => ({
  ...theme,
  borderRadius: 10,
  colors: {
    ...theme.colors,

    primary25: "hotpink",
    primary: "black",
  },
});

const newControlStyle = (
  baseStyles: CSSObjectWithLabel,
  state: ControlProps<Option>
): CSSObjectWithLabel => ({
  ...baseStyles,
  backgroundColor: "#7C3626",
});

interface FormData {
  option1?: string;
  option2?: string;
  date?: Date;
  comment: string;
}

export default function Form({ onSend }: { onSend: (data: FormData) => void }) {
  const [option, setOption] = useState<SingleValue<Option>>(null);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [comment, setComment] = useState<string>("");

  // const selectRef = useRef<Select<Option>>(null);

  return (
    <div className="Form">
      <p> Meeting room book</p>
      <Select
        //ref={selectRef}
        value={option}
        defaultValue={option}
        onChange={setOption}
        options={options}
      ></Select>
      <Select
        value={option}
        defaultValue={option}
        onChange={setOption}
        options={options}
      ></Select>
      <div>
        <DatePicker
          dateFormat="dd.MM.yyyy"
          selected={startDate}
          onChange={(date) => {
            date && setStartDate(date);
          }}
        ></DatePicker>
      </div>
      <textarea
        placeholder="leave your comment here..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <div className="Buttons-panel">
        <div
          className="Button Button-send"
          onClick={() =>
            onSend({
              option1: option?.value,
              option2: option?.value,
              date: startDate,
              comment: comment,
            })
          }
        >
          Send
        </div>
        <div
          className="Button Button-clear"
          onClick={() => {
            setOption(null);

            setComment("");
            setStartDate(new Date());
          }}
        >
          Clear
        </div>
      </div>
    </div>
  );
}
