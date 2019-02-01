# Coffeekraken s-swiper-component <img src=".resources/coffeekraken-logo.jpg" height="25px" />

<p>
	<!-- <a href="https://travis-ci.org/coffeekraken/s-swiper-component">
		<img src="https://img.shields.io/travis/coffeekraken/s-swiper-component.svg?style=flat-square" />
	</a> -->
	<a href="https://www.npmjs.com/package/coffeekraken-s-swiper-component">
		<img src="https://img.shields.io/npm/v/coffeekraken-s-swiper-component.svg?style=flat-square" />
	</a>
	<a href="https://github.com/coffeekraken/s-swiper-component/blob/master/LICENSE.txt">
		<img src="https://img.shields.io/npm/l/coffeekraken-s-swiper-component.svg?style=flat-square" />
	</a>
	<!-- <a href="https://github.com/coffeekraken/s-swiper-component">
		<img src="https://img.shields.io/npm/dt/coffeekraken-s-swiper-component.svg?style=flat-square" />
	</a>
	<a href="https://github.com/coffeekraken/s-swiper-component">
		<img src="https://img.shields.io/github/forks/coffeekraken/s-swiper-component.svg?style=social&label=Fork&style=flat-square" />
	</a>
	<a href="https://github.com/coffeekraken/s-swiper-component">
		<img src="https://img.shields.io/github/stars/coffeekraken/s-swiper-component.svg?style=social&label=Star&style=flat-square" />
	</a> -->
	<a href="https://twitter.com/{twitter-username}">
		<img src="https://img.shields.io/twitter/url/http/{twitter-username}.svg?style=social&style=flat-square" />
	</a>
	<a href="http://coffeekraken.io">
		<img src="https://img.shields.io/twitter/url/http/shields.io.svg?style=flat-square&label=coffeekraken.io&colorB=f2bc2b&style=flat-square" />
	</a>
</p>

<p class="lead">Webcomponent wrapper around the freaking cool [Swiper](http://idangero.us/swiper/) library</p>

[![View demo](http://components.coffeekraken.io/assets/img/view-demo.png)](http://components.coffeekraken.io/app/s-swiper-component)

## Table of content

1. **[Demo](http://components.coffeekraken.io/app/s-swiper-component)**
2. [Install](#readme-install)
3. [Get Started](#readme-get-started)
4. [Javascript API](doc/js)
5. [SASS API](doc/sass)
6. [Sugar Web Components Documentation](https://github.com/coffeekraken/sugar/blob/master/doc/webcomponent.md)
7. [Browsers support](#readme-browsers-support)
8. [Code linting](#readme-code-linting)
9. [Contribute](#readme-contribute)
10. [Who are Coffeekraken?](#readme-who-are-coffeekraken)
11. [Licence](#readme-license)

<a name="readme-install"></a>

## Install

```
npm install coffeekraken-s-swiper-component --save
```

<a name="readme-get-started"></a>

## Get Started

First, import the component into your javascript file like so:

```js
import SSwiperComponent from "coffeekraken-s-swiper-component"
```

Then simply use it inside your html like so:

```html
<s-swiper>
  <div s-swiper-swiper>
    <div s-swiper-slide>
      <img src="https://source.unsplash.com/random/1280x720?bust=1" />
    </div>
    <div s-swiper-slide>
      <img src="https://source.unsplash.com/random/1280x720?bust=2" />
    </div>
    <div s-swiper-slide>
      <img src="https://source.unsplash.com/random/1280x720?bust=3" />
    </div>
    <div s-swiper-slide>
      <img src="https://source.unsplash.com/random/1280x720?bust=4" />
    </div>
  </div>
  <ul s-swiper-pagination>
    <!-- filled by swiper -->
  </ul>
  <div s-swiper-next></div>
  <!-- skin this as you want... -->
  <div s-swiper-previous></div>
  <!-- skin this as you want... -->
</s-swiper>
```

Generate the styles for the pagination if wanted like so:

```scss
@import "node_modules/coffeekraken-s-swiper-component/index";
@include s-swiper-classes($colors: default primary secondary);
```

This will gives you access to classes:

- `s-swiper`: default color
- `s-swiper[color="primary"]`: primary color
- `s-swiper[color="secondary"]`: secondary color

> This use the [sugar colors system](https://github.com/Coffeekraken/sugar/blob/master/doc/sass/colors.md)

<a id="readme-props"></a>

## Properties (options)

This webcomponent support every options that [Swiper](http://idangero.us/swiper/api/#parameters) has to offer. You can set them using the html attributes or by using the `setDefaultProps` like so:

#### Using attributes

```html
<s-swiper autoplay="{delay:4000}" speed="500" space-between="50">
  <!-- your swiper here... -->
</s-swiper>
```

#### Using `setDefaultProps`

```js
import SWebComponent from "coffeekraken-sugar/js/core/SWebComponent"
SWebComponent.setDefaultProps(
  {
    autoplay: {
      delay: 4000
    },
    speed: 500,
    spaceBetween: 50
  },
  "s-swiper"
)
```

<a id="readme-modules"></a>

## Supported modules

To keep the package size as small as possible, the webcomponent does not load all the Swiper modules. Here's the ones that are loaded and we think this is more than enough:

- Swiper
- Navigation
- Pagination
- Keyboard
- Mousewheel
- A11y
- Autoplay
- History
- HashNavigation

<a id="readme-browsers-support"></a>

## Browsers support

| <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE / Edge" width="16px" height="16px" /></br>IE / Edge | <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" /></br>Firefox | <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" /></br>Chrome | <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" /></br>Safari |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE11+                                                                                                                                                              | last 2 versions                                                                                                                                                   | last 2 versions                                                                                                                                                | last 2 versions                                                                                                                                                |

> As browsers are automatically updated, we will keep as reference the last two versions of each but this component can work on older ones as well.

> The webcomponent API (custom elements, shadowDOM, etc...) is not supported in some older browsers like IE10, etc... In order to make them work, you will need to integrate the [corresponding polyfill](https://www.webcomponents.org/polyfills).

<a id="readme-code-linting"></a>

## Code linting

This package uses some code linting rules. Here's the list:

1. [ESLint](https://eslint.org/) with [airbnb](https://www.npmjs.com/package/eslint-config-airbnb) and [prettier](https://github.com/prettier/eslint-config-prettier) rules for javascript files
2. [Stylelint](https://github.com/stylelint/stylelint) with [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) for `scss` files

> Your commits will not been accepted if the code style is not respected!

<a id="readme-contribute"></a>

## Contribute

This is an open source project and will ever be! You are more that welcomed to contribute to his development and make it more awesome every day.
To do so, you have several possibilities:

1. [Share the love ❤️](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-share-the-love)
2. [Declare issues](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-declare-issues)
3. [Fix issues](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-fix-issues)
4. [Add features](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-add-features)
5. [Build web component](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-build-web-component)

<a id="readme-who-are-coffeekraken"></a>

## Who are Coffeekraken

We try to be **some cool guys** that build **some cool tools** to make our (and yours hopefully) **every day life better**.

#### [More on who we are](https://github.com/Coffeekraken/coffeekraken/blob/master/who-are-we.md)

<a id="readme-license"></a>

## License

The code is available under the [MIT license](LICENSE.txt). This mean that you can use, modify, or do whatever you want with it. This mean also that it is shipped to you for free, so don't be a hater and if you find some issues, etc... feel free to [contribute](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md) instead of sharing your frustrations on social networks like an asshole...
