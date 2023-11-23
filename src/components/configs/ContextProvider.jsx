/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react"

export const GlobalContext = createContext()

export default function ContextProvider({ children }) {
  //! Aside
  const [aside, setAside] = useState(true)

  const showAside = () => {
    setAside(!aside)
  }

  //! toggleTheme
  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
  }

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")

    if (storedTheme) {
      setTheme(storedTheme)
    }

    //! get todoData
    const storedTodoData = localStorage.getItem("storedData")

    if (storedTodoData) {
      setTodoData(JSON.parse(storedTodoData))
    }
  }, [])

  //! preventDefault Form
  const submittedForm = (e) => {
    e.preventDefault()
  }

  //! Todo Input Value
  const [inputHeading, setInputHeading] = useState("")
  const [inputTime, setInputTime] = useState("")
  const [inputDate, setInputDate] = useState("")
  const [inputDescription, setInputDescription] = useState("")

  //! Add data in array
  const [todoData, setTodoData] = useState([])
  const allData = inputHeading.concat(inputTime, inputDate, inputDescription)
  const addTodoBtn = () => {
    if (allData.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        heading: inputHeading,
        time: inputTime,
        date: inputDate,
        description: inputDescription
      }

      //? updated localStorage
      const updatedTodoData = [...todoData, newTodo]
      localStorage.setItem("storedData", JSON.stringify(updatedTodoData))

      //? update state
      setTodoData(updatedTodoData)
    }

    setInputHeading("")
    setInputTime("")
    setInputDate("")
    setInputDescription("")
  }

  return (
    <GlobalContext.Provider value={{
      aside,
      setAside,
      showAside,
      theme,
      toggleTheme,
      submittedForm,
      inputHeading,
      setInputHeading,
      inputTime,
      setInputTime,
      inputDate,
      setInputDate,
      inputDescription,
      setInputDescription,
      addTodoBtn,
      todoData
    }}>
      {children}
    </GlobalContext.Provider>
  )
}