import React, { useState } from "react";
import Dropdown from "./Dropdown";

const options = [
  { label: "Afrikaans", value: "af" },
  { label: "Arabic", value: "ar" },
  { label: "Hindi", value: "hi" },
];

export const Translate = () => {
  const [language, setLanguae] = useState(options[0]);
  return (
    <div>
      <Dropdown
        selected={language}
        onSelectedChange={setLanguae}
        options={options}
      />
    </div>
  );
};

export default Translate;
