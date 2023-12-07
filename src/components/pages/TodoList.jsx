import { useContext } from "react"
import { GlobalContext } from "../configs/ContextProvider"
import { Link } from "react-router-dom"
import { FaPencilAlt } from "react-icons/fa"

export default function TodoList() {
  const {
    searchQuery,
    setSearchQuery,
    todoData,
    removeTodo,
    searchData,
    removeSearch,
  } = useContext(GlobalContext)

  if (todoData.length == 0) {
    return (
      <div className="bg-[--aside] py-5 px-20 lMobile:px-10 mMobile:px-3 border-2 border-dashed border-[--red] w-fit m-auto">
        <h2 className="text-center text-2xl mb-5">Todo list is blank!</h2>
        <p className="flex items-center justify-center">
          <span className="pr-3">Go to add todo : </span>
          <span><Link to={'/'} className="flex items-center text-[#4242ff] underline hover:text-[--red]"><span className="pr-2"><FaPencilAlt /></span>Create Todo</Link></span>
        </p>
      </div>
    )
  } else if (!searchQuery == "") {
    return (
      <div>
        <div>
          <input type="search" placeholder="Search Your Todo..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
        </div>

        <div>
          {searchData.map(val => (
            <div key={val.id} className="relative border-2 border-white my-4 bg-[--aside] rounded-md mb-10">
              <h2 className="relative text-center bg-[--white] text-[--black] py-1 font-bold text-2xl lMobile:text-xl lMobile:py-1">
                <span>{val.heading}</span>
              </h2>
              <div className="p-2">
                <p className="text-xl lMobile:text-[16px]">
                  <span className="text-[--gray]">Description :</span> <span>{val.description}</span>
                </p>
                <p className="text-xl lMobile:text-[16px]">
                  <span className="text-[--gray]">Time : </span><span>{val.time}</span>
                </p>
                <p className="text-xl lMobile:text-[16px]">
                  <span className="text-[--gray]">Date : </span><span>{val.date}</span>
                </p>
                <hr className="mt-3" />
                <button onClick={() => {
                  removeTodo(val.id), removeSearch(val.id)
                }} className="cursor-pointer bg-[--red] text-[--black] font-bold active:scale-95 mt-4 mb-2 p-1 rounded-md border-2 border-[--white]">Remove</button>
              </div>
              <div className="bg-[--white] flex justify-between items-center text-[12px] mMobile:text-[10px]">
                <p className="text-right text-[--gray] p-1">Todo Created</p>
                <p className="text-right text-[--gray] p-1">
                  <span className="mx-2 mMobile:mx-0 mMobile:mr-1">Date : {val.createdDate}</span> <span className="mx-2 mMobile:mx-0">Time : {val.createdTime}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  } else {
    return (
      <div className="relative">
        <div>
          <input type="search" placeholder="Search Your Todo..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
        </div>
        <div>
          {todoData.map(val => (
            <div key={val.id} className="relative border-2 border-white my-4 bg-[--aside] rounded-md mb-10">
              <h2 className="relative text-center bg-[--white] text-[--black] py-2 font-bold text-2xl lMobile:text-xl lMobile:py-1">
                <span>{val.heading}</span>
              </h2>
              <div className="p-2">
                <p className="text-xl lMobile:text-[16px]">
                  <span className="text-[--gray]">Description :</span> <span>{val.description}</span>
                </p>
                <p className="text-xl lMobile:text-[16px]">
                  <span className="text-[--gray]">Time : </span><span>{val.time}</span>
                </p>
                <p className="text-xl lMobile:text-[16px]">
                  <span className="text-[--gray]">Date : </span><span>{val.date}</span>
                </p>
                <hr className="mt-3" />
                <button onClick={() => removeTodo(val.id)} className="cursor-pointer bg-[--red] text-[--black] font-bold active:scale-95 mt-4 mb-2 p-1 rounded-md border-2 border-[--white]">Remove</button>
              </div>
              <div className="bg-[--white] flex justify-between items-center text-[12px] mMobile:text-[10px]">
                <p className="text-right text-[--gray] p-1">Todo Created</p>
                <p className="text-right text-[--gray] p-1">
                  <span className="mx-2 mMobile:mx-0 mMobile:mr-1">Date : {val.createdDate}</span> <span className="mx-2 mMobile:mx-0">Time : {val.createdTime}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}