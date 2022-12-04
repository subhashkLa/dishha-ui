const SectionHeader = (props) => {
  const { title, description } = props;
  return (
    <>
      <div className="section-title text-5xl">{title}</div>
      {description && <div className="mt-10 text-gray-600">{description}</div>}
    </>
  );
};

export default SectionHeader;
