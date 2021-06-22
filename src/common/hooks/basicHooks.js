import {useState, useRef, useEffect} from 'react'

export function useOnUpdateEffect(fn, inputs) {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current)
      fn();
    else
      didMountRef.current = true;
  }, inputs);
}


export function useFormInput (defaultValue) {
  const [value, setValue] = useState(defaultValue)

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return {value, onChange : handleChange} 
}
