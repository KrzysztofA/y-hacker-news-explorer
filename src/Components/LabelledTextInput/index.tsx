const LabelledTextInput = ({
  title,
  value,
  id,
  onChange,
}: {
  title: string;
  value: string;
  id: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <>
      <label htmlFor={id}>{title}</label>
      <div>
        <input id={id} type="text" value={value} onChange={onChange} />
      </div>
    </>
  );
};

export default LabelledTextInput;
