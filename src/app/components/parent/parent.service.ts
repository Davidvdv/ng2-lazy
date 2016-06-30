import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class ParentService {
  constructor(private http:Http) {}

  fetch() {
    return this.http.get('https://api.github.com')
      .map(resp => resp.json());
  }
}
