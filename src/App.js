import React, {useState} from 'react'
//import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import "./App.css";
//import Search from "./components/Search";

const items = [
  {
    title: "What is React?",
    content: "React is front-end JavaScript framework",
  },
  {
    title: "Why use React?",
    content: "React is fav JS library among enginners",
  },
  {
    title: "How you use React?",
    content: "You use React by creating components",
  },
]; 


const options = [
  { label: "The Color Red", value: "red" },
  { label: "The Color Green", value: "green" },
  { label: "A Shade of blue", value: "blue" },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);
    return (
      <div>
        <br />
        {/* <Accordion items={items} /> 
        <Search />*/}
        <button
          onClick={() => setShowDropdown(!showDropdown)}>
          Toggle Dropdown
            </button>
        { showDropdown ?
          <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        /> : null} 
      </div>
    );
}

export default App