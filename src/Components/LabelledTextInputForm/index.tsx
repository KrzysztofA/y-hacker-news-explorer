import { FormEventHandler } from "react";

const LabelledTextInput = ({
  title,
  value,
  id,
  onChange,
  onSubmit,
}: {
  title: string;
  value: string;
  id: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit: FormEventHandler<HTMLFormElement>;
}) => {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor={id}>{title}</label>
      <div>
        <input id={id} type="text" value={value} onChange={onChange} />
        <button type="submit">OK</button>
      </div>
    </form>
  );
};

export default LabelledTextInput;
