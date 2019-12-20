<template>
  <div class="wrap">
    <div class="lists">
      <ElementsList></ElementsList>
      <MovedList></MovedList>
    </div>
    <Buttons></Buttons>
    <ErrorMessage v-if="isError"></ErrorMessage>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ErrorMessage from '@/components/ErrorMessage.vue';
import ElementsList from '@/components/ElementsList.vue';
import MovedList from '@/components/MovedList.vue';
import Buttons from '@/components/Buttons.vue';

@Component({
  components: {
    ErrorMessage,
    ElementsList,
    MovedList,
    Buttons
  },
  computed: {
    isError() {
      return this.$store.state.isError;
    }
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.wrap {
  max-width: 1200px;
  margin: 0 auto;
}
.lists {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 30px;
}
</style>
