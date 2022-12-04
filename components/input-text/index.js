import React from "react";

const InputText = ({
  register,
  helperText,
  error,
  label,
  hint,
  style,
  inputStyle,
  ...props
}) => {
  let className =
    "focus:ring-green-500 focus:border-brand-green block w-full sm:text-sm border-gray-100 form-input";
  if (props.rounded) {
    className =
      "shadow-lg focus:ring-green-500 focus:border-brand-green block w-full sm:text-sm border-gray-100 rounded-full";
  }
  if (!props.noPadding) {
    className += " px-4 py-3";
  }
  if (props.disabled) {
    className += " bg-gray-100";
  }
  return (
    <div className="flex flex-col w-full" style={style}>
      {label && <label>{label}</label>}
      <input
        {...props}
        {...register}
        style={inputStyle}
        type={props.type || "text"}
        className={className}
      />
      {hint && (
        <label className="text-xs text-gray-400 font-normal">{hint}</label>
      )}
      {((error && error.message) || helperText) && (
        <span
          style={{
            color: error ? "#c51616" : "grey",
            fontSize: "12px",
            margin: "2px 5px",
          }}
        >
          {(error && error.message) || helperText}
        </span>
      )}
    </div>
  );
};
export default InputText;
