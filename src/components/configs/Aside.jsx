//? Icon
import { GiHamburgerMenu } from "react-icons/gi"
import { MdCancel } from "react-icons/md"
import { FaPencilAlt, FaGithub, FaSun, FaMoon } from "react-icons/fa"
import { LuListTodo } from "react-icons/lu"
//? Img
import TodoIcon from "../../assets/todo.png"
//? dependency
import { useContext } from "react"
import { GlobalContext } from "./ContextProvider"
import { Link, NavLink } from "react-router-dom"

export default function Aside() {
  const { aside, showAside, theme, toggleTheme, todoData } = useContext(GlobalContext)
  return (
    <section className={aside ? `aside aside-Disable ${theme}` : `aside aside-Enable ${theme}`}>
      {/* hamburger Button */}
      <section className="lg:hidden text-4xl lMobile:text-2xl mx-2 flex items-center py-3 h-14">
        <button onClick={showAside} className={aside ? '' : 'absolute left-0 px-3'}>
          {aside ? <GiHamburgerMenu /> : <MdCancel />}
        </button>
      </section>
      {/* Icon & webHeading */}
      <section className={`flex w-full items-center justify-center bg-[--mainBg] text-[--white] ${theme}`}>
        <div className="m-2">
          <img src={TodoIcon} alt="TodoIcon" className="w-10 lMobile:w-7" />
        </div>
        <div className={aside ? "tablet:hidden" : "block"}>
          <h2 className={`text-lg mx-6 font-bold`}>My-Todo</h2>
        </div>
      </section>
      {/* Navigation Link */}
      <section className="my-3">
        <div className="flex items-center justify-center py-3">
          <NavLink to={'/'}>
            {aside
              ?
              <div className="lg:text-xl text-3xl lMobile:text-2xl flex items-center">
                <div className="mx-2"><FaPencilAlt /></div>
                <div className="tablet:hidden">Create Todo</div>
              </div>
              :
              <div className="flex items-center justify-between w-full">
                <div className="text-2xl px-2"><FaPencilAlt /></div>
                <div className="text-center w-full">Create Todo</div>
              </div>
            }
          </NavLink>
        </div>
        <div className="relative flex items-center justify-center py-3">
          <NavLink to={'TodoList'}>
            {aside
              ?
              <div className="lg:text-xl text-3xl lMobile:text-2xl flex items-center">
                <div className="absolute right-1 top-0 text-[--aside] lg:text-xl text-sm font-bold bg-[--red] w-4 h-4 rounded-full flex justify-center items-center">
                  <div>{todoData.length}</div>
                </div>
                <div className="mx-2 z-10"><LuListTodo /></div>
                <div className="tablet:hidden">Todo List</div>
              </div>
              :
              <div className="flex items-center justify-between w-full">
                <div className="absolute right-0 top-1 text-[--aside] text-sm font-bold bg-[--red] w-4 h-4 rounded-full flex justify-center items-center">
                  <div>{todoData.length}</div>
                </div>
                <div className="text-2xl px-2"><LuListTodo /></div>
                <div className="text-center w-full z-10">Todo List</div>
              </div>
            }
          </NavLink>
        </div>
      </section>
      {/* Ref & Theme */}
      <section className={aside ? "refAndTheme tablet:flex-col" : "refAndTheme flex-row"}>
        <div onClick={toggleTheme} className="text-3xl lMobile:text-2xl cursor-pointer tablet:py-3">
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </div>
        <div className="tablet:py-3">
          <Link to={"https://github.com/webDev5464/React-Todo-Documentation.git"} target="_blank" className="text-3xl lMobile:text-2xl"><FaGithub /></Link>
        </div>
      </section>
    </section>
  )
}
