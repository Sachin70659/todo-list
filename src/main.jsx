import React from "react";
import ReactDOM from "react-dom/client";
import TodoApp from "./Todo.jsx";   // <-- Yahan App.jsx/TodoApp.jsx ka naam rakhna
import "./index.css"; 
import { Check, X } from "lucide-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>
);
