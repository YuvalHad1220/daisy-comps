/*
Good luck :)
*/

import { ColumnDef, PaginationState, createColumnHelper, flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import { useMemo } from "react";
import Paper from "./Paper";

interface iUser {
    fName: string,
    lName: string, 
    pNum: string,
    permission: string,
    unit?: string,
    createdAt: Date,
    updatedAt: Date
}

const generateRandomUsers = (amount: number): iUser[] => {
    const users: iUser[] = [];

    const firstNames = ["Alice", "Bob", "Charlie", "David", "Eva"];
    const lastNames = ["Smith", "Johnson", "Williams", "Jones", "Brown"];

    for (let i = 0; i < amount; i++) {
        const randomUser: iUser = {
            fName: firstNames[Math.floor(Math.random() * firstNames.length)],
            lName: lastNames[Math.floor(Math.random() * lastNames.length)],
            pNum: `PhoneNumber${i + 1}`,
            permission: `Permission${i + 1}`,
            unit: `Unit${i + 1}`,
            createdAt: new Date(),
            updatedAt: new Date()
        };

        users.push(randomUser);
    }

    return users;
};


const DataGrid = () => {
    const users = useMemo(() => generateRandomUsers(120_000), []);

    interface iDataGrid<T> {
        data: T[],
        columns: ColumnDef<T, string>[],
        pagination: PaginationState,
        stickyHeader?: boolean
    }
    
    const columnHelper = createColumnHelper<iUser>();

    const COLUMNS = useMemo(() => [
        columnHelper.accessor('fName', {
            header: "שם פרטי"
        }),
        columnHelper.accessor('lName', {
            header: "שם משפחה"
        }),
        columnHelper.accessor(row => row.fName +" " +row.lName, {
            header: "שם מלא"
        }),
        columnHelper.accessor("pNum", {
            header: "מספר אישי"
        })
    ], []);


    const tableData: iDataGrid<iUser> = {
        data: users,
        columns: COLUMNS,
        pagination: {
            pageIndex: 0,
            pageSize: 20
        }
    }


    const table = useReactTable({
        data: tableData.data,
        columns: tableData.columns,
        getPaginationRowModel: getPaginationRowModel(),
        getCoreRowModel: getCoreRowModel(),
        state: {
            pagination: tableData.pagination
        },
        debugTable: true, 
    })

    const tableHead = (
        <thead>
            {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                    {headerGroup.headers.map(header => (
                        <th key={header.id}>{flexRender(header.column.columnDef.header, header.getContext())}</th>
                    ))}
                </tr>
            ))}
        </thead>
    );

    const tableBody = (
        <tbody>
            {table.getRowModel().rows.map(row => (
                <tr key={row.id}>
                    {row.getVisibleCells().map(cell => (
                        <td key={cell.id}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    );

    const pages = (
        <div className="flex items-center">
            <div className="join join-item">
                <button className="join-item btn btn-sm">הקודם</button>
                <button className="join-item btn btn-sm">הבא</button>
            </div>
            <div>
                עמוד 1 מתוך 200
            </div>
            <div>
                שורות בעמוד: 
            </div>
        </div>
    );
    return (
        <div className="flex flex-col h-full">
            <table className="flex-grow table table-pin-rows">
                {tableHead}
                {tableBody}
            </table>
            <Paper bgcolor="bg-base-200" classnames="h-16 flex items-center justify-between p-2">
                <p className="text-white text-xl mr-12">תאריך עדכון אחרון: 13.11.23</p>
                <p className="text-white text-xl mr-12">סה"כ צ: {users.length}</p>
                {pages}
                <div className="flex gap-4">
                    <button className="btn btn-primary">תצוגת שעונים</button>
                    <button className="btn btn-outline">הורדה כקובץ EXCEL</button>
                    <button className="btn btn-outline">המרה לשעון</button>
                </div>
            </Paper>
        </div>

    );
};

export default DataGrid;