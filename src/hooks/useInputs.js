import { useCallback, useState } from "react";

/** input의 onChange 기능과 reset기능을 간편하게 만들어주는 커스텀 훅 */
function useInputs(initialState) {
  const [inputs, setInputs] = useState(initialState);

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  }, []);

  const reset = useCallback(() => setInputs(initialState), [initialState]);

  return { inputs, onChange, reset };
}

export default useInputs;
