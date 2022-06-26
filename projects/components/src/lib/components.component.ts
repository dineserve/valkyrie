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
  get currencyCode(): string {
    return this._currencyCode;
  }

  set currencyCode(s: string) {
    this._currencyCode = s;
  }

  private _currencyCode = '';

  @Input()
  get display(): string {
    return this._display;
  }

  set display(s: string) {
    this._display = s;
  }

  private _display: string = '';

  @Input()
  get digitsInfo(): string {
    return this._digitsInfo;
  }

  set digitsInfo(s: string) {
    this._digitsInfo = s;
  }

  private _digitsInfo: string = '';

  menuItems?: Observable<MenuItem[]>;

  constructor(public http: HttpClient) {
  }

  ngOnInit(): void {
    this.menuItems = this.http.get<MenuItem[]>(`${this.apiUrlRoot}/${this.username}`);
  }
}
