import {Injectable} from "@angular/core";
import {ILogin} from "../types/login.interface";
import {lastValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  async login(user: ILogin): Promise<any> {
    return null;
  }
}
