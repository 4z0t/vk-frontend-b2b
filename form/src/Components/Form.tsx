import React, { useState, useRef } from "react";
import Select, { SingleValue, Options } from "react-select";
import "./Form.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimeRangePicker from "@wojtekmaj/react-timerange-picker";
import { LooseValue } from "@wojtekmaj/react-timerange-picker/dist/cjs/shared/types";

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

function TextArea(props: React.HTMLProps<HTMLTextAreaElement>) {
  return (
    <textarea
      placeholder={localization.form.commentPlaceholder}
      {...props}
    ></textarea>
  );
}

function ClearButton(props: React.HTMLProps<HTMLDivElement>) {
  return (
    <div className="Button Button-clear" {...props}>
      {localization.form.clearText}
    </div>
  );
}

function SendButton(props: React.HTMLProps<HTMLDivElement>) {
  return (
    <div className="Button Button-send" {...props}>
      {localization.form.sendText}
    </div>
  );
}

function Form({ onSend }: { onSend: (data: FormData) => void }) {
  const [option, setOption] = useState<SingleValue<Option>>(null);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [comment, setComment] = useState<string>("");
  const [timeRange, setTimeRange] = useState<LooseValue>(["00:00", "23:59"]);

  return (
    <form className="Form">
      <p>{localization.form.formTitle}</p>
      <Select
        placeholder={localization.form.select.towerPlaceholder}
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
      <TimeRangePicker
        value={timeRange}
        onChange={setTimeRange}
      ></TimeRangePicker>
      <TextArea
        value={comment}
        onChange={(e) => setComment(e.currentTarget.value)}
      />
      <div className="Buttons-panel">
        <SendButton
          onClick={() =>
            onSend({
              option1: option?.value,
              option2: option?.value,
              date: startDate,
              comment: comment,
            })
          }
        />
        <ClearButton
          onClick={() => {
            setOption(null);
            setComment("");
            setStartDate(new Date());
          }}
        />
      </div>
    </form>
  );
}

export default Form;
