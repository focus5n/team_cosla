import React, { useEffect, useState, forwardRef, Fragment, useCallback } from "react";
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
import AWS from 'aws-sdk';
import { Row, Col, Button, Input, Alert } from 'reactstrap';
import { useNavigate } from "react-router-dom";

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

    const [progress, setProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);
    const [showAlert, setShowAlert] = useState(false);

    const [columns, setColumns] = useState([
        { title: 'Counselor', field: 'counselor' },
        { title: 'Counselee', field: 'counselee' },
        { title: 'Counseling Record', field: 'counselRecord' },
        { title: 'Counsel Data', field: 'counselData' },
        { title: 'Date', field: 'date', type: 'datetime' },
    ]);

    const [inputData, setInputData] = useState([{
        counselor: '',
        counselee: '',
        counselRecord: '',
        counselData: '',
        date: '',
    }]);

    const [lastId, setLastId] = useState(0)

    const navigate = useNavigate();

    const counseleeId = 2

    const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;
    const SECRET_ACCESS_KEY = process.env.REACT_APP_SECRET_ACCESS_KEY;
    const REGION = process.env.REACT_APP_REGION;
    const S3_BUCKET = process.env.REACT_APP_S3_BUCKET;

    AWS.config.update({
        accessKeyId: ACCESS_KEY,
        secretAccessKey: SECRET_ACCESS_KEY
    });

    const myBucket = new AWS.S3({
        params: { Bucket: S3_BUCKET },
        region: REGION,
    });

    const handleFileInput = (e) => {
        const file = e.target.files[0];
        const fileExt = file.name.split('.').pop();
        if (file.type !== 'image/jpeg' || fileExt !== 'jpg') {
            alert('jpg 파일만 Upload 가능합니다.');
            return;
        }
        setProgress(0);
        setSelectedFile(e.target.files[0]);
    }

    const uploadFile = (file) => {
        const params = {
            ACL: 'public-read',
            Body: file,
            Bucket: S3_BUCKET,
            Key: "upload/" + file.name
        };

        myBucket.putObject(params)
            .on('httpUploadProgress', (evt) => {
                setProgress(Math.round((evt.loaded / evt.total) * 100))
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                    setSelectedFile(null);
                }, 3000)
                console.log(myBucket)
            })
            .send((err) => {
                if (err) {
                    console.log(err);
                    console.log(ACCESS_KEY);
                }
            })
    }

    useEffect(async () => {
        await axios.get(`/aftercounsel/${counseleeId}`).then(res => {
            console.log(res)
            const _inputData = res.data.map((rowData) => (
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
            setInputData(_inputData)
        })
    }, [])
    //빈 종속성 집합은 []구성 요소가 마운트 될 때마다
    //효과가 한 번만 실행되고 다시 렌더링시 실행되지 않음을 의미합니다.
    //한마디로 반복되지 않음을 뜻함

    return (
        <ThemeProvider theme={theme}>
            {console.log(inputData)}
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
                                axios.post('/writecounselcard', null, {
                                    params:
                                    {
                                        counselor: newInputData.counselor,
                                        counselee: newInputData.counselee,
                                        counselData: newInputData.counselData,
                                        counselRecord: newInputData.counselRecord,
                                        date: newInputData.date,
                                        counseleeId: '2',
                                        counselorId: '2',
                                    }
                                }).then((res) => {
                                    console.log(res, 'Create Success');
                                    navigate("/back");
                                })
                                resolve();
                            }, 1000)
                        }),
                    onRowUpdate: (newInputData, oldInputData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {

                                const dataInputUpdate = [...inputData];
                                const index = oldInputData.tableData.id;
                                
                                //dataInputUpdate[index] = newInputData;
                                setInputData([...dataInputUpdate]);
                                console.log(newInputData);
                                axios.post(`/updatecounselcard/${index}`, null, {
                                    params:
                                    {
                                        counselor: newInputData.counselor,
                                        counselee: newInputData.counselee,
                                        counselData: newInputData.counselData,
                                        counselRecord: newInputData.counselRecord,
                                        date: newInputData.date,
                                        counseleeId: '2',
                                        counselorId: '2',
                                    }
                                }).then((res) => {
                                    console.log(res, 'Update Success');
                                    navigate("/back");
                                })
                                resolve();
                            }, 1000)
                        }),
                    onRowDelete: oldInputData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                const dataDelete = [...inputData];
                                const index = oldInputData.tableData.id;
                                setInputData([...dataDelete]);
                                axios.get(`/deletecounselcard/${index}`).then((res) => {
                                    console.log(res, 'Delete Success');
                                    navigate("/back");
                                })
                                //dataDelete.splice(index, 1);
                                resolve()
                            }, 1000)
                        }),
                }}
                detailPanel={rowData => {
                    return (
                        <Fragment>
                            <div className="App">
                                <div className="App-header">
                                    <Row>
                                        <Col><h1>File Upload</h1></Col>
                                    </Row>
                                </div>
                                <div className="App-body">
                                    <Row>
                                        <Col>
                                            {showAlert ?
                                                <Alert color="primary">업로드 진행률 : {progress}%</Alert>
                                                :
                                                <Alert color="primary">파일을 선택해 주세요.</Alert>
                                            }
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Input color="primary" type="file" onChange={handleFileInput} />
                                            {selectedFile ? (
                                                <Button color="primary" onClick={() => uploadFile(selectedFile)}> Upload to S3</Button>
                                            ) : null}

                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Fragment>
                    )
                }}
                onRowClick={(event, rowData, togglePanel) => togglePanel()}
            />
        </ThemeProvider>
    )
}