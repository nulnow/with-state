import React, { useState } from "react";

type Props<T> = {
  initialState: T;
  children: ({
    state,
    setState,
  }: {
    state: T;
    setState: React.Dispatch<React.SetStateAction<T>>;
  }) => React.JSX.Element;
};

export const WithState = <T,>({ initialState, children }: Props<T>) => {
  const [state, setState] = useState(initialState);

  return children({ state, setState });
};
