import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import {logoutFunction} from "../hooks/useAuth.jsx";
import axios from "axios";

// type KeycloakToken = {
//   exp: number
//   iat: number
//   jti: string
//   iss: string
//   aud: string
//   sub: string
//   typ: string
//   azp: string
//   session_state: string
//   acr: string
//   'allowed-origins': string[]
//   realm_access: {
//     roles: string[]
//   }
//   resource_access: {
//     account: {
//       roles: string[]
//     }
//   }
//   scope: string
//   sid: string
//   email_verified: boolean
//   name: string
//   preferred_username: string
//   given_name: string
//   family_name: string
//   email: string
//   client_id: string
//   username: string
//   token_type: string
//   active: boolean
// }

/**
 * type Keycloak = {
 *  token: string
 *  refreshToken: string
 *  userDetail: KeycloakToken
 *  keycloak: KeycloakInstance
 */
const useAuthKeycloak = create(
  devtools(
    persist(
      (set) => ({
        userDetail: null,
        token: null,
        refreshToken: null,
        keycloak: null,
        isLogin: false,

        setLogin: (login) => set(() => ({ isLogin: login })),
        setToken: (token) => set(() => ({ token: token })),
        setRefreshToken: (token) => set(() => ({ refreshToken: token })),
        setDetail: (detail) => set(() => ({ userDetail: detail })),
        setKeycloak: (keycloak) => set(() => ({ keycloak: keycloak })),
        setLogout: async () => {
          await set(() => ({
            userDetail: null,
            token: null,
            refreshToken: null,
            keycloak: null,
            isLogin: false,
          }))
          await logoutFunction();
        },
        sendToken: async (token) => {
          try{
            await axios.post(import.meta.env.VITE_BASE_URL + '/users', {token})
          } catch (e) {
            console.log('send token error ==> ', e)
          }
        },
      }),
      { name: 'keycloak-detail' },
    ),
  ),
)

export default useAuthKeycloak
