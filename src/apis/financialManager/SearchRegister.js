import axios from 'axios';
import * as env from '../../constants/env';

export function loadSearchRegisterData(search) {
  let url = env.API_URL + "/v2/search-registers?search=" + search;
  let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjE5NjYsImlzcyI6Imh0dHA6XC9cL2FwaS5jb2xvcm1lLnZuXC9sb2dpbiIsImlhdCI6MTQ4NTQ0Mzg5MSwiZXhwIjoxNDg2MDQ4NjkxLCJuYmYiOjE0ODU0NDM4OTEsImp0aSI6IjhiOTM4N2JiM2NlZWFkYjEyMmY4YmQ3YzQyZTlkNDhiIn0.oQ19qEgkHzoGCRsXB_KfT19l4iSyndNPJe-luW7LW_E";
  if (token) {
    url += "&token=" + token;
  }
  return axios.get(url);
}
