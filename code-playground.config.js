module.exports = {
  // server port
  port: 3000,

  // title
  title: "s-{component-name}-component",

  // layout
  layout: "right",

  // compile server
  compileServer: {
    // compile server port
    port: 4000
  },

  // editors
  editors: {
    html: {
      language: "html",
      data: `
      <s-swiper color="primary" autoplay="{delay:5000}">
        <div s-swiper-swiper>
          <div s-swiper-slide class="swipe-item">
            <img src="https://source.unsplash.com/random/1280x720?bust=1" />
          </div>
          <div s-swiper-slide class="swipe-item">
            <img src="https://source.unsplash.com/random/1280x720?bust=2" />
          </div>
          <div s-swiper-slide class="swipe-item">
            <img src="https://source.unsplash.com/random/1280x720?bust=3" />
          </div>
          <div s-swiper-slide class="swipe-item">
            <img src="https://source.unsplash.com/random/1280x720?bust=4" />
          </div>
        </div>
        <ul s-swiper-pagination></ul>
      </s-swiper>

      <s-swiper direction="vertical">
        <div s-swiper-swiper>
          <div s-swiper-slide class="swipe-item">
            <img src="https://source.unsplash.com/random/1280x720?bust=5" />
          </div>
          <div s-swiper-slide class="swipe-item">
            <img src="https://source.unsplash.com/random/1280x720?bust=6" />
          </div>
          <div s-swiper-slide class="swipe-item">
            <img src="https://source.unsplash.com/random/1280x720?bust=7" />
          </div>
          <div s-swiper-slide class="swipe-item">
            <img src="https://source.unsplash.com/random/1280x720?bust=8" />
          </div>
        </div>
        <ul s-swiper-pagination></ul>
      </s-swiper>
      `
    },
    css: {
      language: "scss",
      data: `
        @import 'node_modules/coffeekraken-sugar/index';
        @import 'node_modules/coffeekraken-s-typography-component/index';
        @import 'index';
        @include s-init();
        @include s-classes();
        @include s-typography-classes();
        @include s-swiper-classes();

        s-swiper {
          width: 100%;
          height: 50vh;
          overflow: hidden;

          .swipe-item {
            width: 100%;

            img {
              @include s-fit();
              object-fit: cover;
            }
          }
        }
        s-swiper[direction="horizontal"] {
          position: absolute;
          top: 0; left: 0;
        }
        s-swiper[direction="vertical"] {
          position: absolute;
          top: 50%; left: 0;
        }
      `
    },
    js: {
      language: "js",
      data: `
        import SSwiperComponent from './dist/index'
      `
    }
  }
}
