import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  const [todo, setTodo] = useState("")
  const [todoArr, setTodoArr] = useState(Object.values(localStorage))
  const [edit, setEdit] = useState({do:false,index:null})

  const handelTodo = () => {

    edit.do ? handelEdit() : todo.length == 0 ? null : setTodoArr([...todoArr, [todo]])
    setTodo("")

  }

  const handelChange = (e) => {
    setTodo(e.target.value)
  }

  const handelKey = (e) => {

    e.code == "Enter" ? todo.length == 0 ? null : setTodoArr([...todoArr, [todo]]) : ""
    e.code == "Enter" ?setTodo(""):null

  }

  const handelEdit = (item, index) => {


    if (!edit.do) {

      setTodo(item)
      setEdit({do:true,index:index})


    } else if (edit.do) {

      setTodoArr(todoArr.map((item, i) => {


        if (i == edit.index) {

          return todo;
        } else {
          return item
        }



      }))



      setEdit({do:false,index:null})
    }

  }

  const handelDelete = (index) => {

    setTodoArr(todoArr.filter((dlt, i) => {
      localStorage.clear()
      return i !== index

    }))

  }







  return (
    <>

      <header className=" body-font bg-indigo-500 text-white">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src="list_1950715.png" alt="png" className='w-10 h-10 text-white p-2 bg-white rounded-full' w-10 />

            <p className='ml-3 text-white text-xl font-bold text-center'>Todo OK</p>

          </a>

          
        </div>
      </header>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-2">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              Write Your Todo Task Here
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              You can always change your plan, but only if you have one....
            </p>

            <div className="input flex w-full justify-center">

              <input type="text" name="todo" id="todo" placeholder='Enter Your Task' className='border mt-4 w-1/3 h-12' value={todo} onChange={handelChange} onKeyDown={handelKey} />

              <button className="flex ml-4 mt-4 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handelTodo} >
                Add
              </button>

            </div>

          </div>

          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {todoArr.map((item, index) => (
              <div className="p-2 sm:w-1/2 w-full" key={index}>
                <div className="bg-gray-100 rounded flex p-4 h-full items-center justify-around">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-indigo-500 w-[10%] h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"

                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium w-[60%]">{item}</span>

                  {localStorage.setItem(index, item)}

                  <span className='flex justify-center items-center w-[20%]'>

                    <button className='flex justify-center items-center'><span className="material-symbols-outlined text-green-400" onClick={() =>
                      handelEdit(item, index)
                    }>
                      edit
                    </span></button>

                    <button className='flex justify-center items-center' onClick={() => {

                      handelDelete(index)

                    }} ><span className="material-symbols-outlined text-red-600">
                        delete
                      </span></button>

                  </span>

                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    </>
  )
}

export default App
