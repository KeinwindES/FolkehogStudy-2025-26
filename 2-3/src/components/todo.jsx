import { useEffect, useState } from "react";

export function Todo() {
  const [todoList, setTodoList] = useState([
    "something",
    "another thing",
    "more stuff",
  ]);
  const [textBoxContent, setTextBoxContent] = useState("");

  useEffect(() => {
    localStorage.clear();
    let savedData = localStorage.getItem("todoList");
    if (savedData) {
      setTodoList(JSON.parse(savedData));
    }
  }, []);

  return (
    <>
      <div>
        <input
          type="text"
          value={textBoxContent}
          onChange={(event) => setTextBoxContent(event.target.value)}
        />
        <button
          type="button"
          onClick={() => {
            setTodoList((previous) => {
              let array = [...previous, textBoxContent];
              localStorage.setItem("todoList", JSON.stringify(array));
              return array;
            });
            setTextBoxContent("");
          }}
        >
          Add Todo
        </button>
        {todoList.map((item, index) => (
          <div key={index}>
            <input type="checkbox" />
            {item}
            <button
              type="button"
              onClick={() => {
                const updatedList = todoList.filter((_, i) => i !== index);
                localStorage.setItem("todoList", JSON.stringify(updatedList));
                setTodoList(updatedList);
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
