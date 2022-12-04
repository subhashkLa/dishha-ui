const Divider = (props) => {
  const { height } = props;
  const customStyle = {
    vl: {
      borderLeft: "1px solid white",
      height: height || "10px",
    },
  };
  return (
    <>
      <div style={customStyle.vl}></div>
    </>
  );
};

export default Divider;
