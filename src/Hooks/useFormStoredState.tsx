import { ChangeEvent, FormEvent, useState } from "react";

function useFormStoredState(key: string) {
  const [state, setState] = useState<string>("");
  const [tempState, setTempState] = useState<string>(
    localStorage.getItem(key) != null ? `${localStorage.getItem(key)}` : ""
  );
  const onStateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTempState(() => event?.target?.value);
    localStorage.setItem(key, state);
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setState(() => tempState);
  };

  return { state: state, temp: tempState, onSubmit: onSubmit, onStateChange: onStateChange };
}

export default useFormStoredState;
