import { useEffect } from 'react'

const useLogVariable = (variable, label) => {

  useEffect(() => {
    console.log(label, variable);
  }, [label, variable])

}
export default useLogVariable; 