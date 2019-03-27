import { useState } from 'react';

const update = (idx, value, state) => [
  ...state.slice(0, idx),
  value,
  ...state.slice(idx + 1),
];

const useStateList = (length, defaultValue) => {
  const [state, setState] = useState([...Array(length).fill(defaultValue)]);

  const setListState = (idx, value) => setState(update(idx, value, state));

  return [state, setListState];
};

export default useStateList;
