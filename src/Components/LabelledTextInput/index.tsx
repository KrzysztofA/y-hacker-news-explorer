import { TextInput } from "./types";

const LabelledTextInput = ({
  title,
  value,
  id,
  onChange,
}: TextInput) => {
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
