import useAuthKeycloak from "./store/useAuthKeycloak.js";

const Logout = () => {
  const { setLogout } = useAuthKeycloak();
  setLogout();
    return (
        <div>
            <h1>Logout</h1>
        </div>
    )
}

export default Logout