<script>
export default {
  props: {
    bannerObj: Object,
  },
  data() {
    return {
      bannerSev: true,
    };
  },
  methods: {
    getUrlPath(img) {
      return new URL(`../assets/${img}.jpg`, import.meta.url).href;
    },
    getUrlPathVideo(video) {
      return new URL(`../assets/${video}.mp4`, import.meta.url).href;
    },
  },
};
</script>

<template>
  <div :class="bannerObj.contBanner" class="video">
    <img
      :class="bannerObj.imgStyle"
      :src="getUrlPath(bannerObj.imgage)"
      alt=""
    />
    <video
      :class="bannerObj.videoStyle"
      playsinline
      autoplay
      loop
      muted
      :src="getUrlPathVideo(bannerObj.video)"
    ></video>
    <div :class="bannerObj.txtCont">
      <h1 :class="bannerObj.bigtitle">{{ bannerObj.title }}</h1>
      <h2 :class="bannerObj.titleSmall" >
        {{ bannerObj.subtitle }}
      </h2>
      <p :class="bannerObj.parag">{{ bannerObj.para }}</p>
      <p :class="bannerObj.parag1">{{ bannerObj.para1 }}</p>
      <button :class="bannerObj.button">{{ bannerObj.buttonTxt }}</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.video {
  background-color: white;
  h2 {
    font-weight: 400;
  }
}
</style>
