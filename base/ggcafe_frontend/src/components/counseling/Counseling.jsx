import React, { useEffect, useState } from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Counseling() {

  const [inputData, setInputData] = useState([{
    id: '',
    counselor: '',
    counselee: '',
    purpose: '',
    date: '',
    url: ''
  }])

  const [lastId, setLastId] = useState(0)
  const counseleeId = 1

  useEffect(async () => {
    await axios.get(`/counseling/${counseleeId}`).then(res => {
      const _inputData = res.data.map((rowData) => (
        // rowData 의 갯수만큼 증가
        setLastId(lastId + 1),
        {
          id: rowData.id,
          counselor: rowData.counselor,
          counselee: rowData.counselee,
          purpose: rowData.purpose,
          date: rowData.date,
          url: rowData.url
        })
      )
      setInputData(inputData.concat(_inputData))
    })

  }, [])

  return (

    <React.Fragment>
      <h2>Counseling List</h2>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Counselor</TableCell>
            <TableCell>Counselee</TableCell>
            <TableCell>Purpose</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>URL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {inputData.map((row) => (
            row.id !== '' &&
            <TableRow key={row.id}>
              <TableCell>{row.counselor}</TableCell>
              <TableCell>{row.counselee}</TableCell>
              <TableCell>{row.purpose}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>
                <Link to={`/aftercounsel`}>
                  Counseling Start
                </Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}