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

  set username(message: string) {
    this._username = message;
  }

  private _username = '';

  constructor(public http: HttpClient) {
  }

  menuItems?: Observable<MenuItem[]>;

  ngOnInit(): void {
    this.menuItems = this.http.get<MenuItem[]>(`${this.apiUrlRoot}/${this.username}`);
  }
}
