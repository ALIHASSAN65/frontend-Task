//packages
import React from "react";
import { LuAsterisk } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { GrCircleQuestion } from "react-icons/gr";

//styles
import "./index.css";

//component
const CustomInput = ({ label, name, placeholder, value, onChange }) => {
  return (
    <div className="inputGroup">
      <div className="input-label-container">
        <label className="input-label">{label}</label>
        <LuAsterisk size={10} color="#40AEBD" className="asterisk-icon" />
      </div>

      <div className="inputContainer">
        <input
          placeholder={placeholder}
          type="text"
          className="inputID"
          name={name}
          value={value}
          onChange={onChange}
        />

        <IoClose size={20} color="#707070" className="inputContainer-icon" />

        <GrCircleQuestion size={14} color="#707070" />
      </div>
    </div>
  );
};

export default CustomInput;
