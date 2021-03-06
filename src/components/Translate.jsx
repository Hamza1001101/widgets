import React, { useState } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";
import ExerciseSolution from "./ExerciseSolution";

const options = [
  { label: "Afrikaans", value: "af" },
  { label: "Arabic", value: "ar" },
  { label: "Hindi", value: "hi" },
  { label: "Dutch", value: "nl" },
];

export const Translate = () => {

  const [language, setLanguae] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label> Enter text </label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label="Select a Language"
        selected={language}
        onSelectedChange={setLanguae}
        options={options}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />

      <ExerciseSolution />
    </div>
  );
};

export default Translate;


// https://translation.googleapis.com/language/translate/v2
// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM