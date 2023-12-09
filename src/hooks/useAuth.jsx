import  { useEffect, useRef } from "react";
import Keycloak from "keycloak-js";
import {jwtDecode} from "jwt-decode";
import useAuthKeycloak from "../store/useAuthKeycloak.js";
import axios from "axios";
import {useNavigate} from "react-router";

const client = new Keycloak({
    url: import.meta.env.VITE_KEYCLOAK_URL,
    realm: import.meta.env.VITE_KEYCLOAK_REALM,
    clientId: import.meta.env.VITE_KEYCLOAK_CLIENT,
});

// Aksam store icinde denenecek...

const useAuth = () => {
    const isRun = useRef(false);
    const {setToken, setRefreshToken, setDetail, setKeycloak, setLogin, isLogin, sendToken} = useAuthKeycloak()
    const navigate = useNavigate()

    useEffect(() => {
        const takeToken = async () => {
            if (isRun.current) return;
            isRun.current = true;

            if (isLogin) {
                navigate('/')
                return
            }

            await client
              .init({
                  onLoad: "login-required",
              })
              .then((res) => {
                  sendToken(client.token)
                  setLogin(res)
                  setToken(client.token);
                  setRefreshToken(client.refreshToken);
                  setDetail(jwtDecode(client.token));
                  setKeycloak(client);
                  navigate('/')
              });
        }
        takeToken().catch((err) => {
            console.log(err)
        })
    }, [setToken, setRefreshToken, setDetail, setKeycloak, setLogin, isLogin, navigate]);

    return null;
};

export const logoutFunction = async () => {
    try{
        await client.logout();
    } catch (e) {
        console.log('in logout function', e)
    }
}

export default useAuth;
