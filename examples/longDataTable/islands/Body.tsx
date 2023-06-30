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

import MyData from "./myData.tsx";

export default function Body() {
  const [myData, setMyData] = useState(MyData);

  return (
    <>
      <div class="flex flex-row justify-evenly">
        <DataTable
          dataArray={myData}
        />
      </div>
    </>
  );
}
