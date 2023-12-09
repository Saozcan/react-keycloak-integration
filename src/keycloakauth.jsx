import useAuth from "./hooks/useAuth.jsx";

const KeycloakAuth = () => {
  console.log('test render keycloak auth')
  useAuth()
  return null
};

export default KeycloakAuth;
