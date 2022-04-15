import React, { useEffect, useState, forwardRef } from "react";
import MaterialTable from '@material-table/core';
import { ThemeProvider } from "@material-ui/core/styles";
import { unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import axios from "axios";

const theme = unstable_createMuiStrictModeTheme();

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

export default function WriteCounselCard() {

    const [columns, setColumns] = useState([
        { title: 'Counselor', field: 'counselor' },
        { title: 'Counselee', field: 'counselee' },
        { title: 'Counseling Record', field: 'counselRecord' },
        { title: 'Counsel Data', field: 'counselData' },
        { title: 'Date', field: 'date', type: 'date' },
    ]);

    const [inputData, setInputData] = useState([{
        counselor: '',
        counselee: '',
        counselRecord: '',
        counselData: '',
        date: '',
    }]);

    const [lastId, setLastId] = useState(0)
    const counseleeId = 1

    useEffect(async () => {
        await axios.get(`/aftercounsel/${counseleeId}`).then(res => {
            console.log(res)
            const _inputData = res.data.map((rowData) => (
                setLastId(lastId + 1), {
                    id: rowData.id,
                    counselor: rowData.counselor,
                    counselee: rowData.counselee,
                    counselRecord: rowData.counselRecord,
                    counselData: rowData.counselData,
                    date: rowData.date
                })
            )
            setInputData(inputData.concat(_inputData))
        })
    }, [])
    //빈 종속성 집합은 []구성 요소가 마운트 될 때마다
    //효과가 한 번만 실행되고 모든 다시 렌더링시 실행되지 않음을 의미합니다.
    //한마디로 반복되지 않음을 뜻함

    return (
        <ThemeProvider theme={theme}>
            <MaterialTable
                title="Counseling Card"
                columns={columns}
                data={inputData}
                icons={tableIcons}
                editable={{
                    onRowAdd: newInputData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                setInputData([...inputData, newInputData]);
                                
                                resolve();
                            }, 1000)
                        }),
                    onRowUpdate: (newInputData, oldInputData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                const dataInputUpdate = [...inputData];
                                const index = oldInputData.tableData.id;
                                dataInputUpdate[index] = newInputData;
                                setInputData([...dataInputUpdate]);

                                resolve();
                            }, 1000)
                        }),
                    onRowDelete: oldInputData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                const dataDelete = [...inputData];
                                const index = oldInputData.tableData.id;
                                dataDelete.splice(index, 1);
                                setInputData([...dataDelete]);
                                resolve()
                            }, 1000)
                        }),

                }}
            />
        </ThemeProvider>
    )
}