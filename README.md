# DataTable
deno component for a dynamic data table based on data object stored in javascript array.

## Version
v0.0.4-alpha

## Link to deno.land
https://deno.land/x/datatable@v0.0.4-alpha

## Usage
~~~js

import { DataTable } from "https://deno.land/x/datatable@v0.0.4-alpha";

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
* Pagination with variable number of pages

## Example
![datatable example](images/datatable01.png)
