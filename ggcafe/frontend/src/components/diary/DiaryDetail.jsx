import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function DiaryDetail() {

    return (
        <React.Fragment>
            {window.sessionStorage.getItem("title")}
            {window.sessionStorage.getItem("content")   }
        </React.Fragment>
    );
}