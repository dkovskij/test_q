<template>
  <div class="elements-list">
    <div
      v-for="(item, index) in filteredList"
      :key="'list' + index"
      class="wrap"
    >
      <div class="item">
        {{ item }}
      </div>
      <div @click="moveItem(item)" class="move-button" />
    </div>
    <div class="input">
      <input v-model="query" type="text" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  computed: {
    query: {
      get() {
        return this.$store.state.list.query;
      },
      set(val) {
        this.$store.state.list.query = val;
      }
    },
    filteredList() {
      return this.$store.getters.filteredList;
    }
  }
})
export default class ElementsList extends Vue {
  localList: object[] = [];

  created() {
    // this.$store.dispatch('list/GET_LIST');
  }

  moveItem(item: any) {
    let el = JSON.parse(JSON.stringify(item))
    this.$store.dispatch('list/MOVE_ITEM', el);
    this.$store.dispatch('history/ADD_EVENT', item);
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/_color.scss';

.wrap {
  display: grid;
  grid-template-columns: 3fr 1fr;
  column-gap: 10px;
  margin: 10px 0;
}

.move-button {
  position: relative;
  justify-self: end;
  width: 20px;
  height: 30px;
  cursor: pointer;
  &::after {
    content: '+';
    position: absolute;
    top: 0;
    left: 0;
    font-size: 30px;
  }
}

.input {
  input {
    width: calc(100% - 10px);
    border-radius: 10px;
    height: 30px;
    padding-left: 10px;
    outline: none;
    border: 1px solid get-color( 'border-color' );
  }
}
</style>
