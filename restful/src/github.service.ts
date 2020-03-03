import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

export interface GitHubUser {
  base: string;
  date: string;
  rates: any[];
}

@Injectable()
export class GitHubService {
  constructor(private _http: HttpClient) {}

  getGitHubData(_searchTerm): Observable<GitHubUser> {
    return this._http.get<GitHubUser>("https://api.exchangeratesapi.io/latest");
  }
}
