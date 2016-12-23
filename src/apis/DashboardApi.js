import axios from 'axios';
import * as env from '../constants/env';

export function loadDashboardData(genId) {
  let url = env.API_URL + "gens/" + genId + "/dashboard";
  let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjE5NjYsImlzcyI6Imh0dHA6XC9cL2FwaS5jb2xvcm1lLnZuXC9sb2dpbiIsImlhdCI6MTQ4MjQ3NDk0MSwiZXhwIjoxNDgzMDc5NzQxLCJuYmYiOjE0ODI0NzQ5NDEsImp0aSI6ImNiMzVhYjlmYTgzYmJjMGI0OGE0NDBhN2QyOTA4ZGM5In0.fbY-HgRYjFn3dwu4g1TySJom6f6PIwAL49E_yVJrT-E";
  if (token) {
    url += "?token=" + token;
  }
  return axios.get(url);
}
