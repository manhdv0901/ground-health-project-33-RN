import Axios from "../Axios";

export const findDevice = ({key_device}) => {
    const url ='/data-a-device';
    const body ={key_device};
    return Axios.post(url,body);
}