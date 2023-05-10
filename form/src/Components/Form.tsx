import React, { useState, useRef } from "react";
import Select, { SingleValue, Options } from "react-select";
import "./Form.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimeRangePicker from "@wojtekmaj/react-timerange-picker";
import { LooseValue } from "@wojtekmaj/react-timerange-picker/dist/cjs/shared/types";

import localization from "../Localization";
interface Option<T = string> {
  value?: T;
  label?: string;
}

interface FormData {
  tower?: string;
  floor?: number;
  room?: number;
  date?: Date;
  comment: string;
}

const range = (start: number, end: number) =>
  Array.from(Array(end - start + 1).keys()).map((x) => x + start);

const towers: Options<Option> = [
  { value: "A", label: "А" },
  { value: "B", label: "Б" },
];

const floors: Options<Option<number>> = range(3, 27).map((v) => {
  return { value: v, label: v.toString() };
});

const rooms: Options<Option<number>> = range(1, 10).map((v) => {
  return { value: v, label: v.toString() };
});

function TextArea(props: React.HTMLProps<HTMLTextAreaElement>) {
  return (
    <textarea
      className="Form-textarea"
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
  const [tower, setTower] = useState<SingleValue<Option>>(null);
  const [floor, setFloor] = useState<SingleValue<Option<number>>>(null);
  const [room, setRoom] = useState<SingleValue<Option<number>>>(null);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [comment, setComment] = useState<string>("");
  const [timeRange, setTimeRange] = useState<LooseValue>(["00:00", "23:59"]);

  return (
    <form className="Form">
      <p>{localization.form.formTitle}</p>
      <Select
        placeholder={localization.form.select.towerPlaceholder}
        value={tower}
        defaultValue={tower}
        onChange={setTower}
        options={towers}
      ></Select>
      <Select
        placeholder={localization.form.select.floorPlaceholder}
        value={floor}
        defaultValue={floor}
        onChange={setFloor}
        options={floors}
      ></Select>
      <Select
        placeholder={localization.form.select.roomPlaceholder}
        value={room}
        defaultValue={room}
        onChange={setRoom}
        options={rooms}
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
              tower: tower?.value,
              floor: floor?.value,
              room: room?.value,
              date: startDate,
              comment: comment,
            })
          }
        />
        <ClearButton
          onClick={() => {
            setTower(null);
            setFloor(null);
            setRoom(null);
            setStartDate(new Date());
            setComment("");
          }}
        />
      </div>
    </form>
  );
}

export default Form;
