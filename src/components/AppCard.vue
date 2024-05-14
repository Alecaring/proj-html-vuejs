<script>
export default {
  props: {
    cardObj: Object,
  },
};
</script>

<template>
  <div class="card">
    <div class="d-flex">
      <div class="icone">
        <i class="fa-regular fa-user"></i>
      </div>
      <h5 class="card-title">{{ cardObj.category }}</h5>
    </div>
    <div class="card-body">
      <p class="card-text">
        {{ cardObj.description }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.icone {
  border-radius: 50%;
  font-size: 3rem;
  text-align: center;
  background-color: #09c2dd;
  width: 90px;
  height: 90px;
  color: white;
}
</style>
