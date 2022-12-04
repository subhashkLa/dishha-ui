import React from "react";

const InputTextArea = ({
  register,
  helperText,
  error,
  label,
  hint,
  className,
  ...props
}) => {
  // bg - gray - 300;
  let classNames =
    "focus:ring-green-500 focus:border-brand-green block w-full sm:text-sm border-gray-100 px-3 py-3 form-input";
  if (props.rounded) {
    classNames =
      "shadow-lg focus:ring-green-500 focus:border-brand-green block w-full sm:text-sm border-gray-100 px-3 py-3 rounded-full";
  }
  if (props.disabled) {
    classNames += " bg-gray-300";
  }
  // if (props.className) {
  // 	className += props.className;
  // }
  return (
    <div className={`flex flex-col ${className}`}>
      {label && <label>{label}</label>}
      <textarea
        id="textarea"
        name="textarea"
        style={{ width: "100%" }}
        className={classNames}
        {...register}
        {...props}
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
export default InputTextArea;
