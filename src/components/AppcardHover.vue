<script>
export default {
  props: {
    cardObj: Object,
  },
  methods: {
    getUrlPath(img) {
      return new URL(`../assets/${img}.jpg`, import.meta.url).href;
    },
  },
};
</script>

<template>
  <div class="card bg-transparent border-0 my-4 border ms_card m-0">
    <div
      class="d-flex align-items-center justify-content-start w-100 m-auto py-0"
    >
      <img :src="getUrlPath(cardObj.img)" alt="" />

      <div class="hover">
        <i :class="cardObj.icon"></i>
        <h3 class="pt-2">{{ cardObj.txt }}</h3>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.ms_card {
  position: relative;
  overflow: hidden;
  &:hover .hover {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.273);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 1;
    border-radius: 3%;
    i {
      color: #09c2dd;
      font-size: 5rem;
    }
    h3 {
      color: white;
      font-size: 2rem;
    }
  }

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 3%;
  }
}
.hover {
  opacity: 0;
}
.icone {
  border-radius: 50%;
  font-size: 2.3rem;
  text-align: center;
  line-height: 5rem;
  background-color: #09c2dd;
  width: 5rem;
  height: 5rem;
  color: white;
}
</style>
