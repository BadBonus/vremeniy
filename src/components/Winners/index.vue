<template>
  <div class="Winners">
    <h1>{{ header }}</h1>

    <div class="Winners__filterBlock">
      <!-- <vSelect
        v-model="choosedTournament"
        placeholder="Выбери розыгрыш"
        name="provider"
        :options="tournaments"
        :clearable="false"
        :searchable="false"
        class="Winners__SelectTournament"
      /> -->
      <input type="text" placeholder="Найти победителя" v-model="searchName" />
    </div>
    <table class="Winners__winners">
      <thead>
        <tr>
          <td>ФИО</td>
          <!-- <td>Дата розыгрыша</td> -->
          <!-- <td>Приз</td> -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="(winner, index) in calculatedChoosedWinners" :key="index">
          <td>{{ winner.name }}</td>
          <!-- <td>{{ winner.date }}</td> -->
          <!-- <td>{{ winner.prise }}</td> -->
        </tr>
        <tr v-if="!calculatedChoosedWinners.length">
          <td></td>
          <td><h3>Ничего не найдено</h3></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <pagination
      :records="choosedWinners.length"
      v-model="page"
      :per-page="perPage"
      @paginate="callback"
      :texts="{}"
    >
    </pagination>
    <button v-if="$listeners.closeFunction" @click="close" class="Winners__closeBtn">X</button>
  </div>
</template>

<script>
import Pagination from "vue-pagination-2";
// import vSelect from "vue-select";

import "vue-select/dist/vue-select.css";
import "./style.less";

 export default {
  name: "Winner",
  components: {
    Pagination,
    // vSelect,
  },
  props: {
    header: {
      type: String,
      require: false,
      default: "Победители",
    },
    items: {
      type: Array,
      require: false,
      default: [],
    },
    perPage: {
      type: Number,
      require: false,
      default: 10,
    },

  },
  data() {
    return {
      page: 1,
      choosedTournament: "Все розыгрыши",
      tournaments: ["Все розыгрыши"],
      // OpenIndicator: {
      //   render: (createElement) => createElement("span", { class: "dnone" }),
      // },
      winners: [],
      timeOptions: {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      },
      searchName: "",
    };
  },
  computed: {
    allWinners() {
      const choosedWinners = [];
      this.winners.forEach((el) => {
        choosedWinners.push(
          ...el.winners.map((item) => ({
            ...item,
            date: el.date.toLocaleString("ru", this.timeOptions),
          }))
        );
      });
      return choosedWinners;
    },
    choosedWinners() {
      let choosedWinners = [];

      if (this.searchName.length) return this.foundedWinners;

      // if (this.choosedTournament === "Все розыгрыши") {
      //   choosedWinners = this.allWinners;
      // } else {
      //   choosedWinners = this.winners
      //     .find(
      //       ({ date }) =>
      //         date.toLocaleString("ru", this.timeOptions) ===
      //         this.choosedTournament
      //     )
      //     .winners.map((el) => ({ ...el, date: this.choosedTournament }));
      // }

      // return choosedWinners;
      return this.items;

    },
    calculatedChoosedWinners() {
      const { page } = this;
      if (page > 1) {
        return this.choosedWinners.slice(
          this.perPage * (page - 1),
          this.perPage * page
        );
      } else if (this.page === 1) {
        return this.choosedWinners.slice(0, this.perPage);
      }
    },
    foundedWinners() {

      if (this.searchName.length) {
        return this.items.filter((el) =>
          el.name.match(new RegExp(this.searchName, "gi"))
        );
      } else {
        return [];
      }
    },
  },
  watch: {
    choosedTournament: function () {
      this.page = 1;
    },
  },
  methods: {
    callback: function (page) {
      // console.log(`Page ${page} was selected. Do something about it`);
    },
    close(){
      this.$emit('closeFunction');
    }
  },
  mounted() {
    // this.winners.push(...mock_winners);
    // this.tournaments.push(
    //   ...mock_winners.map(({ date }) =>
    //     date.toLocaleString("ru", this.timeOptions)
    //   )
    // );
  },
};
</script>
