const Button = (props) => {
  const { style, className, children, type, ...rest } = props;
  return (
    <>
      <button
        {...rest}
        style={style}
        type={type || "submit"}
        className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-md shadow-sm  bg-yellow-400 text-white bg-brand-gray hover:text-white hover:bg-yellow-500  ${className}`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
