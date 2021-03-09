<template>
  <div
    class="Winners"
    :style="{
      overflow: calculatedChoosedWinners.length > 1 ? 'scroll' : 'unset',
    }"
  >
    <img
      src="../../assets/winners_decor.png"
      class="Winners__titleDecoration"
      alt="decoration winners"
    />
    <h1>{{ header }}</h1>

    <div class="Winners__filterBlock">
      <input type="text" placeholder="Найти победителя" v-model="searchName" />
    </div>

    <ul class="Winners__list">
      <li class="Winners__listHead">
        <div class="Winners__listName">ФИО</div>
        <div class="Winners__listDate">Торговая сеть</div>
        <div class="Winners__listDate">Дата розыгрыша</div>
      </li>
      <li
        class="Winners__listItem"
        v-for="(winner, index) in calculatedChoosedWinners"
        :key="index"
      >
        <div class="name">{{ winner.name }}</div>
        <div class="Winners__listDate">{{ winner.game }}</div>
        <div class="Winners__listDate">{{ winner.date }}</div>
      </li>
    </ul>
    <!-- <pagination
      :records="choosedWinners.length"
      v-model="page"
      :per-page="perPage"
      @paginate="callback"
      :texts="{}"
    >
    </pagination> -->
    <!-- <span>
      Победителей пока нет !
    </span> -->
    <button
      v-if="$listeners.closeFunction"
      @click="close"
      class="Winners__closeBtn"
    >
      <img src="../../assets/icons/close2.svg" alt="close" />
    </button>
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
    close() {
      this.$emit("closeFunction");
    },
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
