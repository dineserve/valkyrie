import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ComponentsModule, ComponentsComponent} from 'components';
import {createCustomElement} from "@angular/elements";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    // We must import HttpClientModule after BrowserModule.
    HttpClientModule,
    ComponentsModule,
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const element = createCustomElement(ComponentsComponent, {injector: this.injector})
    customElements.define("fillet-menu", element);
  }
}
