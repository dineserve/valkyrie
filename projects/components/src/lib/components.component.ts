import {Component, OnInit, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';

export interface MenuItem {
  name: string;
  price: number;
}

@Component({
  selector: 'fillet-menu',
  templateUrl: './components.component.html',
  styles: []
})
export class ComponentsComponent implements OnInit {

  readonly apiUrlRoot = 'https://menu.show/api';

  @Input()
  // Must initialize because `strictPropertyInitialization` is enabled in tsconfig.json.
  get username(): string {
    return this._username;
  }

  set username(s: string) {
    this._username = s;
  }

  private _username = '';

  @Input()
  // Must initialize because `strictPropertyInitialization` is enabled in tsconfig.json.
  get currency(): string {
    return this._currency;
  }

  set currency(s: string) {
    this._currency = s;
  }

  private _currency = '';

  menuItems?: Observable<MenuItem[]>;

  constructor(public http: HttpClient) {
  }

  ngOnInit(): void {
    this.menuItems = this.http.get<MenuItem[]>(`${this.apiUrlRoot}/${this.username}`);
  }
}
