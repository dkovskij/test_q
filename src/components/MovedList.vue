<template>
  <div class="moved-list">
    <div
      v-for="(item, index) in movedList"
      :key="'movedItem' + index"
      class="wrap"
    >
      <div class="item">{{ item }}</div>
      <div class="move-back" @click="moveBack(index, item)"></div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({
  computed: {
    movedList() {
      return this.$store.state.list.movedList;
    }
  }
})
export default class MovedList extends Vue {
  moveBack(index, item) {
    this.$store.dispatch('list/MOVE_BACK', index);
    this.$store.dispatch('history/REMOVE_EVENT', item);
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  display: grid;
  grid-template-columns: 3fr 1fr;
  column-gap: 10px;
  margin: 10px 0;
}
.move-back {
  position: relative;
  width: 20px;
  height: 30px;
  cursor: pointer;
  &::after {
    content: '-';
    position: absolute;
    top: 0;
    left: 0;
    font-size: 30px;
  }
}
</style>
