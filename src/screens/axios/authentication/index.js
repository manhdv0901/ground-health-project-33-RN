import Axios from "../Axios";

export const loginPatient = ({username,password}) => {
    const url ='/data-login-patient';
    const body ={username, password};
    // console.log('body', body)
    return Axios.post(url,body);
}
export const loginDoctor = ({username, password}) => {
  const url = '/data-login-doctor';
  const body = {username, password};
  return Axios.post(url, body);
};
