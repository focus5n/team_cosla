import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import MaterialTable from "@material-table/core";
import { Link } from "react-router-dom";
import './DiaryList.css'

export default function DiaryList() {

    const [inputData, setInputData] = useState([{
        id: '',
        title: '',
        Editor: '',
        sympathy: '',
        write: '',
    }])

    const [lastId, setLastId] = useState(0)

    useEffect(async () => {

        await axios.get(`/findall`).then(res => {
            const _inputData = res.data.map((rowData) => (
                // rowData 의 갯수만큼 증가
                setLastId(lastId + 1),
                {
                    id: rowData.id,
                    title: rowData.title,
                    Editor: rowData.Editor,
                    sympathy: rowData.sympathy,
                    write: rowData.write,
                    content: rowData.content,

                })
            )
            setInputData(inputData.concat(_inputData))
        })

    }, [])

    const handleClick = (event) => {
        event.preventDefault();
        window.location.href = "/diary";
    }

    return (

        <React.Fragment>
            {console.log(inputData)}
            <h2>공감 일기장</h2>

            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>번호</TableCell>
                        <TableCell>제목</TableCell>
                        <TableCell>작성자</TableCell>
                        <TableCell>공감</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {inputData.map((row) => (
                        row.id !== '' &&
                        <TableRow key={row.id}>
                            <TableCell>{row.id}</TableCell>
                            <Link className='text-link' to={{
                                pathname: `/diarydetail`,
                            }} onClick={() => {
                                window.sessionStorage.setItem("title", row.title)
                                window.sessionStorage.setItem("content", row.content)
                            }}>
                                <TableCell>{row.title}</TableCell>
                            </Link>
                            <TableCell>{row.Editor}</TableCell>
                            <TableCell>{row.sympathy}</TableCell>
                        </TableRow>
                    ))}
                    <button type="submit" onClick={handleClick} > 글쓰기 </button>
                </TableBody>
            </Table>
        </React.Fragment>
    );
}