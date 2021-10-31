import Axios from '../Axios';

export const findPatient = ({id}) => {
    const url ='/data-a-patient';
    const body = {id}
    return Axios.post(url,body);
}