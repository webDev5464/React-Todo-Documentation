import { useContext } from "react"
import { GlobalContext } from "../configs/ContextProvider"

export default function TodoForm() {
  const {
    submittedForm,
    inputHeading,
    setInputHeading,
    inputTime,
    setInputTime,
    inputDate,
    setInputDate,
    inputDescription,
    setInputDescription,
    addTodoBtn
  } = useContext(GlobalContext)

  return (
    <section className="w-fit m-auto mt-10 lMobile:mt-0 border-2 bg-[--aside] rounded-lg">
      <h2 className="text-center mb-4 text-2xl font-bold bg-[--white] text-[--black] py-2 rounded-tr-md rounded-tl-md">Create Todo</h2>
      <form className="lg:w-[800px] laptopSm:w-[600px] smTablet:w-[400px] lMobile:w-[350px] mMobile:w-[300px] py-1 px-4 tablet:w-fit smTablet:py-3 small:shadow-[0_2px_20px_0_var(--aside)]" onSubmit={submittedForm}>

        <div className="tablet:w-full flex justify-between my-2 smTablet:flex-col smTablet:w-fit smTablet:m-auto smTablet:mb-3">
          <div className="smTablet:mb-2">
            <label htmlFor="todoHeading" className="text-2xl">Heading :</label>
          </div>
          <div>
            <input type="text" className="mx-2" placeholder="Write Here..." required value={inputHeading} onChange={(e) => setInputHeading(e.target.value)} />
          </div>
        </div>

        <div className="flex justify-around smTablet:flex-col smTablet:w-fit smTablet:m-auto smTablet:mb-3">
          <div className="flex lg:justify-between my-2">
            <div>
              <label htmlFor="time" className="text-2xl mr-3">Time :</label>
            </div>
            <div>
              <input type="time" name="time" value={inputTime} onChange={(e) => setInputTime(e.target.value)} />
            </div>
          </div>
          <div className="flex lg:justify-between my-2">
            <div>
              <label htmlFor="time" className="text-2xl mr-3">Date :</label>
            </div>
            <div>
              <input type="date" name="date" value={inputDate} onChange={(e) => setInputDate(e.target.value)} />
            </div>
          </div>
        </div>

        <div className="tablet:w-full flex justify-between my-2 smTablet:flex-col smTablet:w-fit smTablet:m-auto smTablet:mb-3">
          <div className="smTablet:mb-2">
            <label htmlFor="description" className="text-2xl mr-3">Description :</label>
          </div>
          <div>
            <textarea name="descriptor" className="w-[400px] smTablet:w-[300px] mMobile:w-[250px] mMobile:h-[130px]" placeholder="Write Here..." required value={inputDescription} onChange={(e) => setInputDescription(e.target.value)} />
          </div>
        </div>

        <div className="mb-3">
          <input type="submit" value="Add Todo" className="cursor-pointer bg-skyBlue text-[--black] font-bold active:scale-95" onClick={addTodoBtn} />
        </div>
      </form>
    </section>
  )
}