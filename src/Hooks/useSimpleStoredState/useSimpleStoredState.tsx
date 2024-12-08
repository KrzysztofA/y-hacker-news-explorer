import { ChangeEvent, useState } from "react";

function useSimpleStoredState(key: string) {
  const [state, setState] = useState<string>(localStorage.getItem(key) != null ? `${localStorage.getItem(key)}` : "");
  const onStateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState(() => event?.target?.value);
    localStorage.setItem(key, state);
  };

  return { state: state, onStateChange: onStateChange };
}

export default useSimpleStoredState;
