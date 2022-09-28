import { useState, useEffect } from 'react'

const getValueFromStorage = key => JSON.parse(localStorage.getItem(key))
const setValueInStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value))

const useLocalStorage = (initialValue, storageKey) => {

  const [data, setData] = useState(getValueFromStorage(storageKey) || initialValue)

  useEffect(() => {
    setValueInStorage(storageKey, data)
  }, [data, storageKey])

  return [data, setData]

}
export default useLocalStorage;