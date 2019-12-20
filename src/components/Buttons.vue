<template>
  <div class="buttons-wrap">
    <router-link to="/history/both">История</router-link>
    <router-link to="/history/add">История добавлений</router-link>
    <router-link to="history/remove">История удалений</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Buttons extends Vue {}
</script>

<style lang="scss" scoped>
@import '@/styles/_color.scss';

.buttons-wrap {
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
  a {
    display: block;
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;
    background-color: get-color( 'bg-color' );
    color: get-color( 'text-color' );
  }
}
</style>
