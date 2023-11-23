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
        <div>
          <Aside />
        </div>

        <main className={`p-5 bg-[--mainBg] text-[--white] w-full mdTablet:h-screen mdTablet:pl-20 ${theme}`}>
          <Routes>
            <Route path="/" element={<TodoForm />} />
            <Route path="TodoList" element={<TodoList />} />
          </Routes>
        </main>
      </section>
    </BrowserRouter>
  )
}