import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aside from "./components/configs/Aside";
import TodoForm from "./components/pages/TodoForm";
import TodoList from "./components/pages/TodoList";
import { useContext } from "react";
import { GlobalContext } from "./components/configs/ContextProvider";

export default function App() {
  const { theme } = useContext(GlobalContext)
  return (
    <BrowserRouter>
      <section className="flex select-none">
        <div className="fixed z-10">
          <Aside />
        </div>

        <main className={`h-screen overflow-auto p-5 pl-[210px] tablet:pl-[80px] bg-[--mainBg] text-[--white] w-full mdTablet:pl-20 lMobile:pl-16 ${theme}`}>
          <Routes>
            <Route path="/" element={<TodoForm />} />
            <Route path="TodoList" element={<TodoList />} />
          </Routes>
        </main>
      </section>
    </BrowserRouter>
  )
}