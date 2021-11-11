import Axios from '../Axios';

export const findOnePatient = ({id}) => {
  const url = '/data-one-patient';
  const body = {id};
  return Axios.post(url, body);
};

export const findOneDoctor = ({id}) => {
  const url = '/data-one-doctor';
  const body = {id};
  return Axios.post(url, body);
};
export const findPatient = ({id}) => {
  const url = '/data-a-patient';
  const body = {id};
  return Axios.post(url, body);
};
export const findAllPatient = () => {
  const url = '/data-patient';
  return Axios.get(url);
};
