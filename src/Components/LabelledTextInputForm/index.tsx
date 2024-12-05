import { FormEventHandler } from "react";

const LabelledTextInput = ({
  title,
  value,
  id,
  onChange,
  onSubmit,
  description = "",
}: {
  title: string;
  value: string;
  id: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit: FormEventHandler<HTMLFormElement>;
  description?: string;
}) => {
  return (
    <form onSubmit={onSubmit}>
      <label aria-description={description} htmlFor={id}>{title}</label>
      <div>
        <input id={id} type="text" value={value} onChange={onChange} />
        <button type="submit">OK</button>
      </div>
    </form>
  );
};

export default LabelledTextInput;
