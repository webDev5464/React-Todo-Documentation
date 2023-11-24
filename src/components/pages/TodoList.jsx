import { useContext } from "react"
import { GlobalContext } from "../configs/ContextProvider"

export default function TodoList() {
  const { todoData, removeTodo } = useContext(GlobalContext)
  return (
    <div>
      {todoData.map(val => (
        <div key={val.id} className="relative border-2 border-white my-4 bg-[--aside] rounded-md">
          <h2 className="relative text-center bg-[--white] text-[--black] py-1 font-bold">
            <span className="float-left text-[--gray]">Todo No.{val.todoLength}</span> <span>{val.heading}</span>
          </h2>
          <div className="p-2">
            <p>
              <span className="text-[--gray]">Description :</span> <span>{val.description}</span>
            </p>
            <button onClick={() => removeTodo(val.id)} className="cursor-pointer bg-[--red] text-[--black] font-bold active:scale-95 mt-4 p-1 rounded-md border-2 border-[--white]">Remove</button>
          </div>
          <div>
            <p className="text-right text-[--gray] p-1 text-sm">
              <span className="mx-2">Date : {val.createdDate}</span> <span className="mx-2">Time : {val.createdTime}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}