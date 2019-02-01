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

## Mixins

### s-swiper-classes

Print out the bare and style component css

#### Parameters

| Name    | Type                | Description            | Status   | Default                   |
| ------- | ------------------- | ---------------------- | -------- | ------------------------- |
| \$color | **{ List<Color> }** | The colors to generate | optional | default primary secondary |

### s-swiper-classes-bare

Print out the bare component css

### s-swiper-classes-style

Print out the style component css

#### Parameters

| Name    | Type                | Description            | Status   | Default                   |
| ------- | ------------------- | ---------------------- | -------- | ------------------------- |
| \$color | **{ List<Color> }** | The colors to generate | optional | default primary secondary |
