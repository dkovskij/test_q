<template>
  <div class="history">
    <table class="history-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Действие</th>
          <th>Дата</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in historyList" :key="'item' + index">
          <td>{{ item.id }}</td>
          <td>{{ item.name}}</td>
          <td>{{ item.action === 'add' ? 'Добавление' : 'Удаление'}}</td>
          <td>{{ item.date | getDate}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import moment from 'moment';

@Component({
  filters: {
    getDate(date: string) {
      let d = moment(date);
      return moment(d).format("DD.MM.YYYY");
    }
  }
})
export default class History extends Vue {
  historyList: object[] = []

  created() {
    if (this.$route.params.event === "both") {
      this.historyList = this.history;
    } else if (this.$route.params.event === "add") {
      this.historyList = this.history.filter((el: any) => el.action === "add");
    } else if (this.$route.params.event === "remove") {
      this.historyList = this.history.filter((el: any) => el.action === "remove");
    }
  }

  get history() {
      return this.$store.state.history.history;
    }
}
</script>

<style lang="scss" scoped>
@import '@/styles/_color.scss';

.history {
  max-width: 1200px;
  margin: 0 auto;
}
.history-table {
  margin: 0 auto;
  border: 1px solid get-color( 'border-color' );
  border-collapse: collapse;
  th,
  td {
    padding: 10px;
    border: 1px solid get-color( 'border-color' );
    border-collapse: collapse;
  }
}
</style>
