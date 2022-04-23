import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Back() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/writecounselcard");
    })
    return(
        <></>
    )

}