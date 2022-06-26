[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/wc-valkyrie)

<img src="https://user-images.githubusercontent.com/205733/175829113-4682426b-9162-48e6-955d-20c32249d015.png" width="100" height="100"  alt="Valkyrie"/>

# Valkyrie

## Installation

To use Valkyrie as a web component:

1. Add the following snippet to your HTML header. Optionally, replace `en-US` with your desired locale.

```html
<script src="https://cdn.dineserve.com/wc-valkyrie@0.0.4/en-US/elements.js"></script>
```

2. Add the following snippet to your body. Replace `getfillet` with your **menu.show** username.

```html
<fillet-menu username="getfillet"></fillet-menu>
```

## Usage

Publish your menu from Fillet for Chefs on any website using Angular Elements or Web Components.

### Customization

The web component accepts optional price customization attribute parameters in kebab-case.

To see the list of possible customizations and how they work consult Angular's CurrencyPipe documentation.

https://angular.io/api/common/CurrencyPipe#parameters

The file `test.html` demonstrates customization.

### Language and region, currency formatting, i18n, and locales.

A separate web component is built for each modern locale that is supported by Angular 13.

See the list of all supported locales in `package.json`.

## Demo

https://jsfiddle.net/gc91of57/1/

## Attributions

* <a href="https://www.flaticon.com/free-icons/valkyrie" title="valkyrie icons">Valkyrie icons created by Freepik - Flaticon</a>
