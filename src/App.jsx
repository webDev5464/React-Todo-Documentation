import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aside from "./components/configs/Aside";
import TodoForm from "./components/pages/TodoForm";
import TodoList from "./components/pages/TodoList";
import { useContext } from "react";
import { GlobalContext } from "./components/configs/ContextProvider";
import Popup from "./components/configs/Popup";
import information from "../manifest.json"

export default function App() {
  const { theme, popupMsg } = useContext(GlobalContext)
  return (
    <BrowserRouter>
      <section className="flex select-none">
        <div className="fixed z-10">
          <Aside />
        </div>

        <main className={`relative h-screen overflow-auto p-5 pl-[210px] tablet:pl-[80px] bg-[--mainBg] text-[--white] w-full mdTablet:pl-20 lMobile:pl-16 ${theme}`}>
          <Popup props={{ message: popupMsg }} />
          <Routes>
            <Route path="/" element={<TodoForm />} />
            <Route path="TodoList" element={<TodoList />} />
          </Routes>

          <div className="fixed bottom-0 right-0 text-[10px] text-[--gray] flex items-center">
            <p className="mx-2">Developer: {information.author_name}</p>
            <p className="mx-2">V: {information.version}</p>
          </div>
        </main>
      </section>
    </BrowserRouter>
  )
}