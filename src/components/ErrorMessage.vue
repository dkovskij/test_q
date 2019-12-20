<template>
  <div class="error-wrap">
    <div class="error-message">
      К сожалению произошла ошибка, попробуйте позже.
      <button @click="closeErrorMessage">Закрыть</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ErrorMessage extends Vue {
  closeErrorMessage() {
    this.$store.dispatch('SET_ERROR',false)
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/_color.scss';

  .error-message {
  z-index: 100;
  position: fixed;
  width: 200px;
  height: 100px;
  background-color: get-color( 'bg-color' );
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  text-align: center;
  padding: 20px 10px;
  button {
    display: block;
    margin: 10px auto;
  }
}
</style>
