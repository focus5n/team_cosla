import React, { useEffect } from "react";

const SignOut = () => {
    useEffect(() => {
        window.sessionStorage.removeItem("rt")
        window.sessionStorage.removeItem("at")
        window.sessionStorage.removeItem("email")
        window.sessionStorage.removeItem("name")
        window.location = '/';
    })

    return (
        <div></div>
    )
}
export default SignOut;