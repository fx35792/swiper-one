# swiper-one
三张图片轮播，中间放大，叠在后面两张的上面
```
swiperOption: {
  direction: "horizontal",
  loop: true,
  loopedSlides: 3,
  slidesPerView: "auto",
  autoplay: false,
  watchSlidesProgress: true,
  centeredSlides: true,
  observeParents: true,
  initialSlide: 2,
  observer: true,
  on: {
    progress: function() {
      for (let i = 0; i < this.slides.length; i++) {
        const slide = this.slides.eq(i);
        const slideProgress = this.slides[i].progress;
        let modify = 1;
        if (Math.abs(slideProgress) > 1) {
          modify = (Math.abs(slideProgress) - 1) * 0.4 + 1;
        }
        const translate = slideProgress * modify * 310 + "px";
        const scale = 1 - Math.abs(slideProgress) / 3;
        const zIndex = 9 - Math.abs(Math.round(10 * slideProgress));
        slide.transform(`translateX(${translate}) scale(${scale})`);
        slide.css("zIndex", zIndex);
        slide.css("opacity", 1);
        if (Math.abs(slideProgress) > 3) {
          slide.css("opacity", 0);
        }
      }
    },
    setTransition: function(transition) {
      for (let i = 0; i < this.slides.length; i++) {
        const slide = this.slides.eq(i);
        slide.transition(transition);
      }
    }
  }
}

```
![效果图](https://graph.baidu.com/resource/121f42f3e1750a105a5d601587895709.jpg)