import React, { useState } from "react";

export default function Todo() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (text.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text, completed: false }]);
      setText("");
      console.log("Todo added:", text); // Debugging line
    }
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      {/* Container */}
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md sm:max-w-lg">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-purple-600">
          📝 Todo List
        </h1>

        {/* Input */}
        <div className="flex flex-col sm:flex-row gap-2 mb-6">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTodo()}
            placeholder="Enter a task..."
            className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 text-base sm:text-lg"
          />
          <button
            onClick={addTodo}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition text-base sm:text-lg"
          >
            Add
          </button>
        </div>

        {/* Todo list */}
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`flex flex-col sm:flex-row items-center justify-between p-3 rounded-lg transition
                ${todo.completed ? "bg-green-100" : "bg-gray-50"}
              `}
            >
              {/* Task text */}
              <span
                className={`flex-1 text-lg sm:text-xl transition
                  ${
                    todo.completed
                      ? "text-green-600 line-through"
                      : "text-gray-800"
                  }
                `}
              >
                {todo.text}
              </span>

              {/* Buttons */}
              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                {/* Check button */}
                <button
                  onClick={() => toggleComplete(todo.id)}
                  className={`w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full transition
                    ${
                      todo.completed
                        ? "bg-green-600 text-white"
                        : "bg-gray-400 text-white hover:bg-gray-500"
                    }
                  `}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </button>

                {/* Delete button */}
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600 transition"
                >
                  ✕
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
