import { useEffect, useRef, useState } from "preact/hooks";

/* Development Versions */ 
// Import from local storage
// import { DataTable } from "../../../mod.ts";
// Import from github
// import { DataTable } from "https://raw.githubusercontent.com/atmelino/DataTable/main/mod.ts"

/* Production Versions */ 
// Import latest version from deno.land
import { DataTable } from "https://deno.land/x/datatable/mod.ts";
// Import specific version from deno.land
// import { DataTable } from "https://deno.land/x/datatable@v0.0.5-alpha/mod.ts";

export default function Body() {
  let buttonState = useRef(1);

  const dataArray = [
    { Id: "401", Name: "Apple", Price: "0.00" },
    { Id: "402", Name: "Banana", Price: "0.20" },
    { Id: "405", Name: "Cherry", Price: "0.15" },
    { Id: "403", Name: "Chocolate", Price: "0.40" },
    { Id: "404", Name: "Maple", Price: "0.30" },
    { Id: "406", Name: "Almond", Price: "0.30" },
    { Id: "407", Name: "Peanut", Price: "0.30" },
    { Id: "408", Name: "Butter", Price: "0.30" }
  ];

  const dataArray2 = [
    { userId: 1, id: 1, title: "delectus aut autem", completed: false },
    { userId: 1, id: 2, title: "quis ut nam facilis et officia qui", completed: false },
    { userId: 1, id: 3, title: "fugiat veniam minus", completed: false },
    { userId: 1, id: 4, title: "et porro tempora", completed: true },
    { userId: 1, id: 5, title: "laboriosam mollitia et enim quasi adipisci quia provident illum", completed: false },
    { userId: 1, id: 6, title: "qui ullam ratione quibusdam voluptatem quia omnis", completed: false },
    { userId: 1, id: 7, title: "illo expedita consequatur quia in", completed: false },
    { userId: 1, id: 8, title: "quo adipisci enim quam ut ab", completed: true },
    { userId: 1, id: 9, title: "molestiae perspiciatis ipsa", completed: false },
    { userId: 1, id: 10, title: "illo est ratione doloremque quia maiores aut", completed: true },
  ];

  const dataArray3 = [
    { userId: 1, id: 11, title: "vero rerum temporibus dolor", completed: true },
    { userId: 1, id: 12, title: "ipsa repellendus fugit nisi", completed: true },
    { userId: 1, id: 13, title: "et doloremque nulla", completed: false },
    { userId: 1, id: 14, title: "repellendus sunt dolores architecto voluptatum", completed: true },
    { userId: 1, id: 15, title: "ab voluptatum amet voluptas", completed: true },
    { userId: 1, id: 16, title: "accusamus eos facilis sint et aut voluptatem", completed: true },
    { userId: 1, id: 17, title: "quo laboriosam deleniti aut qui", completed: true },
    { userId: 1, id: 18, title: "dolorum est consequatur ea mollitia in culpa", completed: false },
    { userId: 1, id: 19, title: "molestiae ipsa aut voluptatibus pariatur dolor nihil", completed: true },
    { userId: 1, id: 20, title: "ullam nobis libero sapiente ad optio sint", completed: true },
  ];

  const [myData, setMyData] = useState(dataArray);

  function changeData() {
    setMyData(dataArray2);
    buttonState.current = 2;
  }

  function addRows() {
    setMyData(dataArray2.concat(dataArray3));
    buttonState.current = 3;
  }

  function showButtons() {

    if (buttonState.current === 1) {
      return (
        <button
          type="button"
          class="w-1/6 bg-gray-700 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-700"
          onClick={changeData}
        >
          change data
        </button>)
    }

    if (buttonState.current === 2) {
      return (
        <button
          type="button"
          class="w-1/6 bg-gray-700 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-700"
          onClick={addRows}
        >
          add rows
        </button>
      )
    }
  }

  return (
    <>
      <div class="flex flex-row justify-evenly">
        <DataTable
          dataArray={myData}
        />
      </div>
      {showButtons()}
    </>
  );
}
