<template>
  <div class="shop">
    <div class="swiper-content">
      <swiper
        class="swiper-container"
        :options="swiperOption"
        v-show="imgList.length>0"
        @click.native="jumpDetailShop"
      >
        <swiper-slide v-for="(item,index) in imgList" :key="index">
          <img :src="item.img" :data-id="item.id" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: "SwiperOne",
  data() {
    return {
      imgList: [
        {
          id: 1,
          img: require("@/assets/images/store_1.png")
        },
        {
          id: 2,
          img: require("@/assets/images/store_2.png")
        },
        {
          id: 2,
          img: require("@/assets/images/store_3.png")
        }
      ],
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
    };
  },
  methods: {
    // 跳转 到具体某个店铺
    jumpDetailShop(event) {
      const id = event.target.dataset.id;
      if (id) {
        this.$router.push({
          name: "signStoreDetail",
          params: { id }
        });
      }
    }
  }
};
</script>
<style lang="less" scoped>
.shop {
  padding-top: 25px;
  .swiper-content {
    position: relative;
  }
  /deep/ .swiper-slide {
    width: 190px;
    height: 144px;
    img {
      width: 100%;
    }
  }
  .more {
    position: absolute;
    z-index: 100;
    top: -25px;
    right: 30px;
    width: 83px;
    height: 38px;
    text-align: center;
    line-height: 38px;
    font-size: 12px;
    color: #fff;
    background-image: linear-gradient(#ffb6a9, #fe691a);
    border-radius: 18px;
  }
}
</style>
