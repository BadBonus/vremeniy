<template>
  <div class="Winners">
    <h1>Победители</h1>

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
          <td>Приз</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(winner, index) in calculatedChoosedWinners" :key="index">
          <td>{{ winner.name }}</td>
          <!-- <td>{{ winner.date }}</td> -->
          <td>{{ winner.prise }}</td>
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
      :per-page="10"
      @paginate="callback"
      :texts="{}"
    >
    </pagination>
  </div>
</template>

<script>
import Pagination from "vue-pagination-2";
// import vSelect from "vue-select";

import "vue-select/dist/vue-select.css";
import "./style.less";

const mock_winners = [
  {
    date: new Date("December 17, 2021"),
    winners: [
      {
        id: "00000165",
        name: "Валюженич Маринав Владимировна",
        prise: "Фотоаппарат White",
      },
      {
        id: "00000122",
        name: "Букатова Натальяв Витальевна",
        prise: "Фотоаппарат White",
      },
      {
        id: "00000572",
        name: "Нестёркина Галинав Викторовна",
        prise: "Фотоаппарат White",
      },
      {
        id: "00000500",
        name: "Тихонович Алинав Алексеевна",
        prise: "Фотоаппарат White",
      },
      {
        id: "00000412",
        name: "Ануфреенок Ярославав Сергеевна",
        prise: "Фотоаппарат White",
      },
      {
        id: "00000472",
        name: "Игнатик Еленав Александровна",
        prise: "Фотоаппарат White",
      },
      {
        id: "00000158",
        name: "Вируцкая Светланав Владимировна",
        prise: "Фотоаппарат White",
      },
      {
        id: "00000090",
        name: "Акулич Маринав Иосифовна",
        prise: "Фотоаппарат White",
      },
      {
        id: "00000523",
        name: "Криштопенко Люсяв Ивановна",
        prise: "Фотоаппарат White",
      },
      {
        id: "00000313",
        name: "Штоп Анжелав Владимировна",
        prise: "Фотоаппарат White",
      },
      {
        id: "00000545",
        name: "Сокол Татьянав Александровна",
        prise: "Фотоаппарат White",
      },
      {
        id: "00000561",
        name: "Габинет Екатеринав Олеговна",
        prise: "Фотоаппарат White",
      },
      {
        id: "00000448",
        name: "Беломестных Алексейв Николаевич",
        prise: "Фотоаппарат White",
      },
      {
        id: "00000503",
        name: "Струнович Татьянав Юрьевна",
        prise: "Фотоаппарат White",
      },
      {
        id: "00000387",
        name: "Ерофеева Екатеринав Михайловна",
        prise: "Фотоаппарат White",
      },
      {
        id: "00000284",
        name: "Дубовская Иринав Александровна",
        prise: "Фотоаппарат White",
      },
      {
        id: "00000315",
        name: "Булко Натальяв Сергеевна",
        prise: "Фотоаппарат White",
      },
      {
        id: "00000210",
        name: "Масюк Татьянав Юрьевна",
        prise: "Фотоаппарат White",
      },
      {
        id: "00000103",
        name: "Германова Татьянав Александровна",
        prise: "Фотоаппарат White",
      },
      {
        id: "00000481",
        name: "Пастушенко Вероникав Викторовна",
        prise: "Фотоаппарат White",
      },
      {
        id: "00000147",
        name: "Шахнович Татьянав Вячеславовна",
        prise: "Фотоаппарат White",
      },
      {
        id: "00000266",
        name: "Иваненко Ольгав Сергеевна",
        prise: "Фотоаппарат White",
      },
      {
        id: "00000569",
        name: "Юрченкова Иннав Максимовна",
        prise: "Фотоаппарат White",
      },
      {
        id: "00000121",
        name: "Тереня Татьянав Игоревна",
        prise: "Фотоаппарат White",
      },
      {
        id: "00000565",
        name: "Бутримович Анастасияв Евгеньевна",
        prise: "Фотоаппарат White",
      },
      {
        id: "00000288",
        name: "Лупарева Иринав Владимировна",
        prise: "Фотоаппарат White",
      },
      {
        id: "00000066",
        name: "Горбатенко Марияв Юрьевна",
        prise: "Фотоаппарат White",
      },
      {
        id: "00000088",
        name: "Кушнер Верав Леонидовна",
        prise: "Фотоаппарат White",
      },
      {
        id: "00000055",
        name: "Буевич Марияв Вадимовна",
        prise: "Фотоаппарат White",
      },
      {
        id: "00000404",
        name: "Подгруша Галинав Станиславовна",
        prise: "Фотоаппарат White",
      },
      {
        id: "00000125",
        name: "Хаджинова Ольгав Михайловна",
        prise: "Фотоаппарат White",
      },
      {
        id: "00000555",
        name: "Выглазов Юрийв Владимирович",
        prise: "Фотоаппарат White",
      },
      {
        id: "00000317",
        name: "Дмитрук Янав Анатольевна",
        prise: "Фотоаппарат White",
      },
      {
        id: "00000163",
        name: "Максимюк Михаилв Владимирович",
        prise: "Фотоаппарат White",
      },
      {
        id: "00000583",
        name: "Бондарева Маринав Олеговна",
        prise: "Фотоаппарат White",
      },
      {
        id: "00000199",
        name: "Липницкий Кириллв Борисович",
        prise: "Фотоаппарат White",
      },
      {
        id: "00000580",
        name: "Макаренко Снежанав Михайловна",
        prise: "Фотоаппарат White",
      },
      {
        id: "00000086",
        name: "Климович Кристинав Александровна",
        prise: "Фотоаппарат White",
      },
      {
        id: "00000380",
        name: "Хвощ Галинав Владимировна",
        prise: "Фотоаппарат White",
      },
      {
        id: "00000045",
        name: "Стокин-Гершаньв Татьянав Николаевна",
        prise: "Фотоаппарат White",
      },
      {
        id: "00000021",
        name: "Кореневская Ольгав Юрьевна",
        prise: "Фотоаппарат Gray",
      },
      {
        id: "00000302",
        name: "Тылец Янав Ивановна",
        prise: "Фотоаппарат Gray",
      },
      {
        id: "00000602",
        name: "Тараданюк Натальяв Ивановна",
        prise: "Фотоаппарат Gray",
      },
      {
        id: "00000255",
        name: "Клыбик Вероникав Александровна",
        prise: "Фотоаппарат Gray",
      },
      {
        id: "00000035",
        name: "Хмельницкая Маринав Геннадьевна",
        prise: "Фотоаппарат Gray",
      },
      {
        id: "00000439",
        name: "Каравай Андрейв Сергеевич",
        prise: "Фотоаппарат Gray",
      },
      {
        id: "00000067",
        name: "Шрамова Светланав Сергеевна",
        prise: "Фотоаппарат Gray",
      },
      {
        id: "00000024",
        name: "Пудова Маринав Владимировна",
        prise: "Фотоаппарат Gray",
      },
      {
        id: "00000470",
        name: "Ковалёва Наталияв Андреевна",
        prise: "Фотоаппарат Gray",
      },
      {
        id: "00000068",
        name: "Ярошевич Полинав Сергеевна",
        prise: "Фотоаппарат Gray",
      },
    ],
  },
];

export default {
  name: "Winner",
  components: {
    Pagination,
    // vSelect,
  },
  props: {},
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

      if (this.choosedTournament === "Все розыгрыши") {
        choosedWinners = this.allWinners;
      } else {
        choosedWinners = this.winners
          .find(
            ({ date }) =>
              date.toLocaleString("ru", this.timeOptions) ===
              this.choosedTournament
          )
          .winners.map((el) => ({ ...el, date: this.choosedTournament }));
      }

      return choosedWinners;
    },
    calculatedChoosedWinners() {
      const { page } = this;
      if (page > 1) {
        return this.choosedWinners.slice(10 * (page - 1), 10 * page);
      } else if (this.page === 1) {
        return this.choosedWinners.slice(0, 10);
      }
    },
    foundedWinners() {
      if (this.searchName.length) {
        return this.allWinners.filter((el) =>
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
      console.log(`Page ${page} was selected. Do something about it`);
    },
  },
  mounted() {
    this.winners.push(...mock_winners);
    this.tournaments.push(
      ...mock_winners.map(({ date }) =>
        date.toLocaleString("ru", this.timeOptions)
      )
    );
  },
};
</script>
