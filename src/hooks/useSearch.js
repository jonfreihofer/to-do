// import React, {useState} from "react";

// export default function useSearch() {
//     const [todoSearch, setTodoSearch] = useState({
//         searchTodo: "",
//       });
//     const handleTodoSearch = (e) => {
//         const { name, value } = e.target;
//         setTodoSearch((prevSearch) => ({ [name]: value }));
//         setTodoList((prevTodo) =>
//           prevTodo.filter((todo) => {
//             if (!todo.value) return prevTodo;
//             return todo.item.toLowerCase().includes(value);
//           })
//         );
//         console.log(value);
//       };

// }
