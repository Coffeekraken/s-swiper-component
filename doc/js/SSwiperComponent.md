# SSwiperComponent

Webcomponent wrapper around the freaking cool [Swiper](http://idangero.us/swiper/) library

### Example

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
</s-swiper>
```

Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)

See : **Swiper** : [http://idangero.us/swiper/](http://idangero.us/swiper/)

Extends **SWebComponent**

## Attributes

Here's the list of available attribute(s).

### Swiper

Support all the [Swiper](http://idangero.us/swiper/api/) options

Type : **{ Mixed }**

### direction

Specify the direction. Can be 'horizontal' or 'vertical'

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**

Default : **horizontal**

## Properties

### Swiper

The [Swiper]() instance

Type : **{ Swiper }**
