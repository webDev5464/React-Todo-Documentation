import { useContext } from "react"
import { GlobalContext } from "./ContextProvider"

/* eslint-disable react/prop-types */
export default function Popup({ props }) {
  const { activeTodo } = useContext(GlobalContext)

  return (
    <div className={activeTodo ? "absolute right-0 top-0 text-red-500 bg-[--white] text-[--black] m-2 px-5 py-1 font-bold rounded-lg" : "hidden"}>
      <p>{props.message}</p>
    </div>
  )
}
