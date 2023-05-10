import React, { useState } from "react";
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

interface Option {
  value: string;
  label: string;
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

export default function Form() {
  const [option, setOption] = useState<SingleValue<Option>>(null);
  const [startDate, setStartDate] = useState<Date>(new Date());

  return (
    <div className="Form">
      <p> Meeting room book</p>
      <Select<Option>
        defaultValue={option}
        onChange={setOption}
        options={options}
      ></Select>
      <Select<Option>
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
      <textarea placeholder="leave your comment here..."></textarea>
      <div>
        <div>Send</div>
        <div>Clear</div>
      </div>
    </div>
  );
}
