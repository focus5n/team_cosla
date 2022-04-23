import React, { useEffect, useState } from "react";
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';

export default function AfterCounsel() {

    const [inputData, setInputData] = useState([{
        id: '',
        counselor: '',
        counselee: '',
        counselRecord: '',
        counselData: '',
        date: ''
    }])

    const [lastId, setLastId] = useState(0)
    const counseleeId = 1

    useEffect(async () => {
        //const counseleeId = window.sessionStorage.getItem("counseleeId");

        await axios.get(`/aftercounsel/${counseleeId}`).then(res => {
            console.log(res)
            const _inputData = res.data.map((rowData) => (
                // rowData 의 갯수만큼 증가
                setLastId(lastId + 1),
                {
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

    return (
        <React.Fragment>
            {console.log(inputData)}
            <h2>After Counseling List</h2>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Counselor</TableCell>
                        <TableCell>Counselee</TableCell>
                        <TableCell>CounselRecord</TableCell>
                        <TableCell>CounselData</TableCell>
                        <TableCell>Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {inputData.map((row) => (
                        row.id !== '' &&
                        <TableRow key={row.id}>
                            <TableCell>{row.counselor}</TableCell>
                            <TableCell>{row.counselee}</TableCell>
                            <TableCell>{row.counselRecord}</TableCell>
                            <TableCell>{row.counselData}</TableCell>
                            <TableCell>{row.date}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {/* 
       <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
      */}
        </React.Fragment>
    );
}