# DataTable
deno component for a dynamic data table based on data object stored in javascript array.

## Version
v0.0.2-alpha

## Link to deno.land
https://deno.land/x/datatable@v0.0.2-alpha

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
## Features
* Table will automatically update when dataArray is changed.
* Pagination with fixed number of pages

