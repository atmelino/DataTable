# DataTable
deno component for a dynamic data table based on data object stored in javascript array.

## Usage
~~~js

import { DataTable } from "mod.ts";

  const dataArray = [
    { id: 1, name: "Joe", age: 33 },
    { id: 2, name: "Jane", age: 25 },
  ];


  return (
    <>
        <DataTable dataArray={myData}/>
   </>
  );

~~~
## Feature
* Table will automatically update when dataArray is changed.

