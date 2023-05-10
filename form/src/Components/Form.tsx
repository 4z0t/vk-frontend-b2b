import React, { useState, useRef } from "react";
import Select, { SingleValue, Options } from "react-select";
import "./Form.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import localization from "../Localization";
interface Option {
  value?: string;
  label?: string;
}

interface FormData {
  option1?: string;
  option2?: string;
  date?: Date;
  comment: string;
}

const options: Options<Option> = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function Form({ onSend }: { onSend: (data: FormData) => void }) {
  const [option, setOption] = useState<SingleValue<Option>>(null);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [comment, setComment] = useState<string>("");

  return (
    <div className="Form">
      <p>{localization.form.formTitle}</p>
      <Select
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
        placeholder={localization.form.commentPlaceholder}
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
          {localization.form.sendText}
        </div>
        <div
          className="Button Button-clear"
          onClick={() => {
            setOption(null);
            setComment("");
            setStartDate(new Date());
          }}
        >
          {localization.form.clearText}
        </div>
      </div>
    </div>
  );
}
