import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef()
  
  // useEffect(() => {

  //   document.body.addEventListener('click', (event) => {
  //     console.log(event.target)
  //     setOpen(false)
  //   }, {capture: true})
  //   //make sure this runs only one time
  // }, [])

  useEffect(() => {
    const onBodyClick = event => {
      //The constains method belongs to all DOM-elements
      //*  & Checks if a DOM-element contains another element
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    }
    document.body.addEventListener('click', onBodyClick)

    //Clean up
    return () => {
      document.body.removeEventListener('click', onBodyClick)
    }
  })

  const renderOptions = options.map((option) => {
    if (option.value === selected.value) return null;
    return (
      <div
        className="item"
        key={option.value}
        onClick={() => 
         
          onSelectedChange(option)
        }
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label htmlFor="" className="label">
          Select a Color
        </label>
        <div
          onClick={() => {
            
            setOpen(!open)
          }}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text"> {selected.label} </div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
