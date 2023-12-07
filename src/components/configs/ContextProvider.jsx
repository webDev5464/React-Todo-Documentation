/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react"

export const GlobalContext = createContext()

export default function ContextProvider({ children }) {
  //* Aside
  const [aside, setAside] = useState(true)
  //* toggleTheme
  const [theme, setTheme] = useState("dark")
  //* Todo Input Value
  const [inputHeading, setInputHeading] = useState("")
  const [inputTime, setInputTime] = useState("")
  const [inputDate, setInputDate] = useState("")
  const [inputDescription, setInputDescription] = useState("")
  //* popup message
  const [activeTodo, setActiveTodo] = useState(false)
  const [popupMsg, setPopupMsg] = useState("")
  //* all todoList data is here
  const [todoData, setTodoData] = useState([])
  //* search method
  const [searchQuery, setSearchQuery] = useState("")
  const [searchData, setSearchData] = useState([])

  //! filter todo
  const filterTodo = () => {
    const filterResult = todoData.filter(item => item.heading.toLowerCase().includes(searchQuery.toLowerCase()))
    setSearchData(filterResult)
  }

  useEffect(() => {
    filterTodo()
  }, [searchQuery])

  //! remove searched todo
  const removeSearch = (id) => {
    let findAndRemove = todoData.filter(item => item.id !== id)
    setSearchData(findAndRemove)
    setSearchQuery("")
  }

  //! aside toggleActive
  const showAside = () => {
    setAside(!aside)
  }

  //! setTodo in localStorage
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
  }

  useEffect(() => {
    //! get toggleTheme
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

  //! Add data in array
  const allData = inputHeading.concat(inputTime, inputDate, inputDescription)
  const date = new Date()
  const newTodo = {
    id: Date.now(),
    todoLength: todoData.length + 1,
    createdTime: date.getHours() + ":" + date.getMinutes() + " " + (date < 12 ? "Am" : "Pm"),
    createdDate: date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear(),
    heading: inputHeading,
    time: inputTime,
    date: inputDate,
    description: inputDescription
  }

  //? Add todo btn
  const addTodoBtn = () => {
    if (inputHeading == "") {
      setPopupMsg("Write Heading")
      setActiveTodo(true)
      setTimeout(() => { setActiveTodo(false), setPopupMsg("") }, 1000)
    } else if (inputDescription == "") {
      setPopupMsg("Write Description")
      setActiveTodo(true)
      setTimeout(() => { setActiveTodo(false), setPopupMsg("") }, 1000)
    } else if (allData.trim() !== "") {
      //? updated localStorage
      const updatedTodoData = [...todoData, newTodo]
      localStorage.setItem("storedData", JSON.stringify(updatedTodoData))

      //? update state
      setTodoData(updatedTodoData)

      //? popup message
      setPopupMsg("New todo added")
      setActiveTodo(true)
      setTimeout(() => { setActiveTodo(false), setPopupMsg("") }, 1500)

      setInputHeading("")
      setInputTime("")
      setInputDate("")
      setInputDescription("")
    }
  }

  //? remove Todo
  const removeTodo = (todoId) => {
    const updatedTodo = todoData.filter(todo => todo.id !== todoId)
    localStorage.setItem("storedData", JSON.stringify(updatedTodo))
    setTodoData(updatedTodo)

    //? popup message
    setPopupMsg("Remove todo")
    setActiveTodo(true)
    setTimeout(() => { setActiveTodo(false), setPopupMsg("") }, 1000)
  }

  return (
    <GlobalContext.Provider value={{
      aside, setAside,
      inputHeading, setInputHeading,
      inputTime, setInputTime,
      inputDate, setInputDate,
      inputDescription, setInputDescription,
      popupMsg, setPopupMsg,
      searchQuery, setSearchQuery,
      activeTodo,
      addTodoBtn,
      todoData,
      removeTodo,
      showAside,
      theme,
      toggleTheme,
      submittedForm,
      searchData,
      removeSearch
    }}>
      {children}
    </GlobalContext.Provider>
  )
}