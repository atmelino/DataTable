import { useEffect, useRef, useState } from "preact/hooks";
// import { DataTable } from "../../../../../DataTable/mod.ts";
import { DataTable } from "https://raw.githubusercontent.com/atmelino/DataTable/main/mod.ts"

export default function Body() {
  const dataArray = [
    { id: 1, name: "John", age: 30, rand: 0 },
    { id: 2, name: "Jane", age: 28, rand: 3 },
    { id: 3, name: "Doe", age: 45, rand: 4 },
    { id: 4, name: "Cindy", age: 35, rand: 1 },
  ];

  const [myData, setMyData] = useState(dataArray);


  const dataArray2 = [
    { id: 4, name: "John", age: 30, rand: 0 },
    { id: 5, name: "Jane", age: 28, rand: 3 },
  ];

  function changeData() {
    setMyData(dataArray2);

  }

  // console.log(JSON.stringify(dataArray));

  return (
    <>
      <div class="flex flex-row justify-evenly">
        <DataTable
          dataArray={myData}
        />
      </div>

      <div>
        <button
          type="button"
          class="w-full bg-gray-700 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-700"
          onClick={changeData}
        >
          change data
        </button>

      </div>
    </>
  );
}
