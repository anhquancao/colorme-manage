import axios from 'axios';
import * as env from '../../constants/env';

export function loadSearchRegisterData(search) {
  let url = env.API_URL + "/v2/search-registers?search=" + search;
  let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjE5NjYsImlzcyI6Imh0dHA6XC9cL2FwaS5jb2xvcm1lLnZuXC9sb2dpbiIsImlhdCI6MTQ4NDc5MDU2MCwiZXhwIjoxNDg1Mzk1MzYwLCJuYmYiOjE0ODQ3OTA1NjAsImp0aSI6ImM5NmRhNGFiZjFjYjRhNzEwMmYzNjJlNmYyNDk3ZDMxIn0.FBqweorqUaDhuLA2pGSw3Ke5JpTdj6ORLoxNAggHQDg";
  if (token) {
    url += "&token=" + token;
  }
  return axios.get(url);
}
