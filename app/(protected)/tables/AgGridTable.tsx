'use client';

import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import {
    ColDef,
    ColGroupDef,
    GridApi,
    GridOptions,
    ModuleRegistry,
    Theme,
    ValidationModule,
    createGrid,
    themeQuartz,
} from "ag-grid-community";import { ClientSideRowModelModule } from 'ag-grid-community';

// Přidání vlastního tématu
const myTheme = themeQuartz.withParams({
    // Úprava okrajů a vzhledu sloupců v hlavičce
    headerColumnBorder: { color: 'gray' },
    headerColumnBorderHeight: '100%',
    headerColumnResizeHandleColor: 'gray',
    headerColumnResizeHandleHeight: '25%',
    headerColumnResizeHandleWidth: '5px',

});
ModuleRegistry.registerModules([ClientSideRowModelModule]);

type Blog = {
    id: string;
    name: string;
    content: string;
};

interface AgGridTableProps {
    rowData: Blog[];
}

export default function AgGridTable({ rowData }: AgGridTableProps) {
    const columnDefs: ColDef[] = [
        {
            headerName: 'ID',
            field: 'id',
            width: 60,
            editable: false,},
        {
            headerName: 'Name',
            field: 'name',
            flex: 1,
            editable: true,
            resizable: true,
        },
        {
            headerName: 'Content',
            field: 'content',
            flex: 2,
            editable: true,
            resizable: true,},
        {
            headerName: 'Actions',
            field: 'actions',
            width: 50,
            flex: 1,
            editable: true,
            resizable: true,
        },
    ];

    return (
        <div className="ag-theme-alpine border border-gray-300 rounded-lg">
            {/* Aplikuj vlastní téma na AgGrid */}
            <AgGridReact
                columnDefs={columnDefs}
                rowData={rowData}
                domLayout="autoHeight"
                className="h-[600px] w-full"
                theme={myTheme}  // Použití přizpůsobeného tématu
            />
        </div>
    );
}
