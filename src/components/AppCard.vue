<script>
export default {
  props: {
    cardObj: Object,
  },
};
</script>

<template>
  <div class="card bg-transparent border-0 py-4">
    <div class="d-flex align-items-center justify-content-start w-100 m-auto px-4">
      <div class="icone me-4">
        <i class="fa-regular" :class="cardObj.icon"></i>
      </div>
      <h5 class="card-title fs-3 fw-bold">{{ cardObj.category || cardObj.title }}</h5>
    </div>
    <div class="card-body">
      <p class="card-text">
        {{ cardObj.description || cardObj.para }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
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
