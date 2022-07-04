[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/wc-valkyrie)
<a href="https://www.npmjs.com/package/wc-valkyrie">
<img src="https://img.shields.io/npm/v/wc-valkyrie" alt="Valkyrie on npm" />
</a>&nbsp;

<img src="https://user-images.githubusercontent.com/205733/175829113-4682426b-9162-48e6-955d-20c32249d015.png" width="100" height="100"  alt="Valkyrie"/>

# Valkyrie

Publish your live menu from Fillet for Chefs on any website using Angular Elements or Web Components. Changes you make to your menu are automatically updated on every website.

## Installation

Valkyrie can be installed as a Web Component on any web page, or as an Angular Element in projects that use Angular.

### Install as Web Component

To use Valkyrie as a web component:

1. Add the following snippet to your HTML header. Optionally, replace `en-US` with your desired locale.

```html
<script src="https://cdn.dineserve.com/wc-valkyrie@0.0.5/en-US/elements.js"></script>
```

2. Add the following snippet to your body. Replace `getfillet` with your **menu.show** username.

```html
<fillet-menu username="getfillet"></fillet-menu>
```

### Install as Angular Element

1. Run `npm i ngx-valkyrie`.

2. Import `ComponentsModule` in your `app.module.ts`, below `HttpClientModule`.

```typescript
import {ComponentsModule} from "ngx-valkyrie";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ComponentsModule
  ]
})
```

3. Add the following snippet to your Angular template. Replace `getfillet` with your **menu.show** username.

```html
<fillet-menu username="getfillet"></fillet-menu>
```

## Usage

Valkyrie can be customized using HTML attributes.

### Customization

The web component accepts optional price customization attribute parameters in kebab-case.

To see the list of possible customizations and how they work consult Angular's CurrencyPipe documentation.

https://angular.io/api/common/CurrencyPipe#parameters

The file `test.html` demonstrates customization.

### Language and region, currency formatting, i18n, and locales.

A separate web component is built for each modern locale that is supported by Angular 13.

See the list of all supported locales in `package.json`.

## Demo

https://jsfiddle.net/csve630p/2/

## Attributions

* <a href="https://www.flaticon.com/free-icons/valkyrie" title="valkyrie icons">Valkyrie icons created by Freepik - Flaticon</a>
