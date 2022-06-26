import {DEFAULT_CURRENCY_CODE, Injector, LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ComponentsModule, ComponentsComponent} from 'components';
import {createCustomElement} from "@angular/elements";
import {HttpClientModule} from "@angular/common/http";
import {getLocaleCurrencyCode} from "@angular/common";

/**
 * USD currency code that the application uses by default for CurrencyPipe when no
 * DEFAULT_CURRENCY_CODE is provided. [1]
 *
 * [1] packages/core/src/i18n/localization.ts
 */
export const USD_CURRENCY_CODE = 'USD';

function getDefaultCurrencyCode(locale: any): string {
  return getLocaleCurrencyCode(locale) ?? USD_CURRENCY_CODE;
}

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    // We must import HttpClientModule after BrowserModule.
    HttpClientModule,
    ComponentsModule,
  ],
  providers: [
    // https://github.com/angular/angular/pull/34724#issuecomment-614496201
    {provide: DEFAULT_CURRENCY_CODE, useFactory: getDefaultCurrencyCode, deps: [LOCALE_ID]},
  ],
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
