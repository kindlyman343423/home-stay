import * as jwt from "jsonwebtoken";
import * as moment from "moment";

class AuthService {

  auth_token = "auth_token";

  getToken() {
    return localStorage.getItem(this.auth_token);
  }

  getExpiration(token) {
    const exp = jwt.decode(token).exp;
    return moment.unix(exp);
  }

  isValid(token) {
    return moment().isBefore(this.getExpiration(token));
  }

  isAuthenticated() {
    const token = this.getToken();
    return (token && this.isValid(token)) ? true : false;
  }

  logout(){
    return localStorage.removeItem(this.auth_token);
  }
}

export default new AuthService();