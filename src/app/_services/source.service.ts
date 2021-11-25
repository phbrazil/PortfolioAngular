import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SourceService {

  readonly baseUrl: string = 'https://sparta-clan.herokuapp.com'
  //readonly baseUrl: string = 'http://localhost:8080'


  constructor(private http: HttpClient) { }

  postSource(ip: string, source: string) {

    return this.http.post<any>(`${this.baseUrl}/account/api/auth/click/${ip}/${source}`, {});

  }

  public getIPAddress()
  {
    return this.http.get<any>("https://api.ipify.org/?format=json");
  }

  public getBrowserName() {
    const agent = window.navigator.userAgent.toLowerCase()
    switch (true) {
      case agent.indexOf('edge') > -1:
        return 'edge';
      case agent.indexOf('opr') > -1 && !!(<any>window).opr:
        return 'opera';
      case agent.indexOf('chrome') > -1 && !!(<any>window).chrome:
        return 'chrome';
      case agent.indexOf('trident') > -1:
        return 'ie';
      case agent.indexOf('firefox') > -1:
        return 'firefox';
      case agent.indexOf('safari') > -1:
        return 'safari';
      default:
        return 'other';
    }
}

}
