import axios from 'axios';

import authService from './auth-service';

import {baseUrlLocal} from '../helpers/index.js'

class AxiosService {
 axiosInstance = {}

 constructor(){
  this.initInstance();
 }

 tokenInHeader(){
  const token = authService.getToken();
  return token ? {'Authorization': `Bearer ${token}`} : null;
 }

 initInstance(){
  this.axiosInstance = axios.create({
   baseURL: `${baseUrlLocal}/api`,
   timeout: 1000,
   headers: this.tokenInHeader()
  })
  return this.axiosInstance;
 }

 getInstance(){
  return this.axiosInstance || this.initInstance;
 }

}

export default new AxiosService;