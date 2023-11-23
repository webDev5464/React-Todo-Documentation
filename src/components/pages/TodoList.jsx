import { useContext } from "react"
import { GlobalContext } from "../configs/ContextProvider"

export default function TodoList() {
  const { todoData } = useContext(GlobalContext)
  return (
    <div>
      {todoData.map(val => (
        <div key={val.id}>
          <h2>{val.heading}</h2>
        </div>
      ))}
    </div>
  )
}