import { useState, useEffect } from "react"


function App() {
  // handle the input
  const [input, setInput] = useState("")

  // fetch the todo if there is already present.
  const [todo, setTodo] = useState(() => {
    const savedTodo = localStorage.getItem("todo")
    return savedTodo ? JSON.parse(savedTodo) : [];
  })

  const submitHandlar = function (e) {
    e.preventDefault()
    console.log(input);

    let newTodo = {
      id: Date.now(),
      text: input,
      completed: false

    }

    setTodo((prev) => [...prev, newTodo])
    setInput("");

  }

  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((item) => item.id !== id))

  }

  const editTodo = (id) => {
    // first aspect what is comming from client
    // store those in container
    // if valid input came update todo array
    const newText = prompt("Enter updated task");

    if (!newText?.trim()) return;

    setTodo((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, text: newText } : item
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo))

  }, [todo])

  return (
    <>
      <div className="bg-gray-200 min-h-screen">
        <h1 className="text-center bg-blue-800 text-white p-3 text-2xl">
          My Todo App
        </h1>

        <form className="mt-9" onSubmit={submitHandlar}>
          <div className="flex justify-center gap-4">
            <input
              type="text"
              className="border bg-white p-2"
              placeholder="Enter Your Task"
              required
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <button
              className="bg-green-600 text-white p-2 rounded"
              type="submit"
            >
              Create
            </button>

          </div>

        </form>

        {/* Display todo list */}
        <div className="flex flex-col items-center mt-8 gap-3">
          {todo.map((item) => (
            <div
              className="flex items-center gap-4 border bg-white p-3 w-96"
              key={item.id}>
              <span className="flex-1">{item.text}</span>
              <button
                className="bg-blue-500 text-white p-2"
                onClick={() => editTodo(item.id)}>
                Edit
              </button>
              <button
                className="bg-red-500 text-white p-2"
                onClick={() => deleteTodo(item.id)}>
                Delete
              </button>
            </div>
          ))}

        </div>

      </div>
    </>
  )
}


export default App
