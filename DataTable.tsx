// @ts-ignore
import { useEffect, useRef, useState } from "./mod.ts";
import { Pagino } from "https://deno.land/x/paginodeno@v0.0.1-alpha/mod.ts";

export interface DataTableStyle {
	table: "";
	thead: "";
	header_tr: "";
	th: "";
	tbody: "";
	body_tr: "";
	td: "";
}

export interface DataTableProps {
	dataArray: object[];
	rowsPerPage?: number
	style?: DataTableStyle;
}

export function DataTable(props: DataTableProps) {
	const tablestyle = props.style ||
	{
		table: "table align-items-center justify-content-center mb-0",
		th: "border-2 border-blue-800",
		tr: "border border-blue-800 bg-green-200"
	}
		;
	const rowsPerPage = props.rowsPerPage || 15;
	const keys = Object.keys(props.dataArray[0]);
	const [currentPage, setcurrentPage] = useState(1);
	const [totalPages, settotalPages] = useState(Math.ceil(props.dataArray.length / rowsPerPage));
	const pageNumbers: number[] = [];

	function onChange(page: number) {
		setcurrentPage(page);
	}

	function showData() {
		const indexOfLastPage = currentPage * rowsPerPage;
		const indexOfFirstPage = indexOfLastPage - rowsPerPage;
		const currentRows = props.dataArray.slice(indexOfFirstPage, indexOfLastPage);

		return (
			currentRows.map((data, index) => {
				return (
					<tr class={tablestyle.body_tr} key={index}>
						{keys.map((k) => {
							return (
								<td class={tablestyle.td}>{data[k as keyof typeof data]}</td>
							);
						})}
					</tr>
				);
			})
		)
	}

	useEffect(() => {
		console.log(JSON.stringify(tablestyle, null, 4));

		settotalPages(Math.ceil(props.dataArray.length / rowsPerPage));
	}, [props]);

	return (
		<div>
			<table class={tablestyle.table}>
				<thead class={tablestyle.thead}>
					<tr class={tablestyle.header_tr}>
						{keys.map((data, index) => {
							return <th class={tablestyle.th}>{keys[index]}</th>;
						})}
					</tr>
				</thead>
				<tbody class={tablestyle.tbody}>
					{showData()}
				</tbody>
			</table>
			<Pagino
				count={totalPages}
				showFirst={true}
				showPrevious={true}
				showNext={true}
				showLast={true}
				page={1}
				siblingCount={1}
				boundaryCount={1}
				onChange={onChange}
			/>
		</div>
	);
}
