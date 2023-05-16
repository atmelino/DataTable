// @ts-ignore
import {  useEffect, useRef,useState } from "./mod.ts";


export interface DataTableProps {
	dataArray: object[];
}


export  function DataTable(props: DataTableProps) {
	const keys = Object.keys(props.dataArray[0]);

	useEffect(() => {
	}, [props]);

	return (

		<table class="border-2">
			<tr class="border-2">
				{keys.map((data, index) => {
					return <th class="border-2">{keys[index]}</th>;
				})}
			</tr>

			{props.dataArray.map((data, index) => {
				return (
					<tr class="border-2" key={index}>
						{keys.map((k) => {
							return (
								<td class="border-2">{data[k as keyof typeof data]}</td>
							);
						})}
					</tr>
				);
			})}
		</table>

	);
}
