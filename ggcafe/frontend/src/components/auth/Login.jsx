import axios from "axios";
import React, { useEffect } from "react";

const Login = () => {
    const code = new URL(window.location.href).searchParams.get("code");
    useEffect(() => {
        axios.get(`/login?code=${code}`).then(res => {
            console.log(res)
            window.sessionStorage.setItem("at", res.data.access_token)
            window.sessionStorage.setItem("rt", res.data.refresh_token)
            if (window.sessionStorage.getItem('at') === null) {
                //로그인이 되어 있는지 확인 
            }
            else {
                let at = window.sessionStorage.getItem('at')
                let email
                let name
                axios.get(`/accountinfo?at=${at}`)
                    .then((res) => {
                        console.log(at);
                        email = res.data.kakao_account.email;
                        name = res.data.kakao_account.profile.nickname;
                        window.sessionStorage.setItem("email", email)
                        window.sessionStorage.setItem("name", name)
                }).then(() =>{
                    window.location = '/';
                })
            }
        })
    })
    return(
        <div></div>
    )
}

export default Login;