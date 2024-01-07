/* eslint-disable prettier/prettier */
import {API_URL} from './constants';

function sendLoginSignal() {
  // collect device id
  const did = 'dev-device-id';
  fetch(API_URL + '/student/validate-user/', {
    method: 'POST',
    body: JSON.stringify({
      did: did,
    }),
  })
    .then(res => {
      return res.json();
    })
    .then(data => {});
}
export default sendLoginSignal;
