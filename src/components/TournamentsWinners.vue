<template>
  <div class="TournamentsWinners">
    <Splicer>
      <span>Розыгрыши и победители</span>
      <img
        class="Splicer__applyIcon"
        v-if="!isMobileSize"
        src="../assets/icons/decor_splicer.png"
        alt="decoration"
    /></Splicer>
    <div class="TournamentsWinners__content">
      <button class="btn" @click="choosePrize('first')">
        Подарочный сертификат <br />
        <p>на 50 рублей</p>
      </button>
      <button class="btn" @click="choosePrize('second')">
        Подарочный сертификат <br />
        <p>на 100 рублей</p>
      </button>
      <button class="btn" @click="choosePrize('third')">
        Подарочный сертификат <br />
        <p>на 200 рублей</p></button
      ><button class="btn" @click="isOpenCalendar = true">
        Календарь розыгрышей
      </button>
    </div>
    <transition name="fade">
      <Winners
        v-on:closeFunction="closeModal"
        :items="choosedWinners"
        :header="choosedPrize"
        v-if="choosedPrize"
        :perPage="8"
      />
    </transition>
  </div>
</template>

<script>
import Splicer from "./Splicer";
import Winners from "./Winners";

const mock_winners1 = [
  {
    id: "00000163",
    name: "Максимюк Михаилв Владимирович",
    prise: "Фотоаппарат White",
  },
  {
    id: "000200163",
    name: "Максимюк Михаилв Владимирович",
    prise: "Фотоаппарат White",
  },
  {
    id: "0000013163",
    name: "Максимюк Михаилв Владимирович",
    prise: "Фотоаппарат White",
  },
  {
    id: "0аф0000163",
    name: "Максимюк Михаилв Владимирович",
    prise: "Фотоаппарат White",
  },
  {
    id: "0000вфывфыв0163",
    name: "Максимюк Михаилв Владимирович",
    prise: "Фотоаппарат White",
  },
  {
    id: "0000016ddd23",
    name: "СС МихЫЫаилв ВВВ",
    prise: "Фотоаппарат White",
  },
  {
    id: "00000f16dd23",
    name: "СС МихЫЫаилв ВВВ",
    prise: "Фотоаппарат White",
  },
  {
    id: "0000016qdd23",
    name: "СС МихЫЫаилв ВВВ",
    prise: "Фотоаппарат White",
  },
  {
    id: "000001d6dd23",
    name: "СС МихЫЫаилв ВВВ",
    prise: "Фотоаппарат White",
  },
  {
    id: "0000016dsd23",
    name: "СС МихЫЫаилв ВВВ",
    prise: "Фотоаппарат White",
  },

  {
    id: "0000s0163",
    name: "Максимюк Михаилв Владимирович",
    prise: "Фотоаппарат White",
  },
  {
    id: "0000d01623",
    name: "СС МихЫЫаилв ВВВ",
    prise: "Фотоаппарат White",
  },
  {
    id: "000a00163",
    name: "Максимюк Михаилв Владимирович",
    prise: "Фотоаппарат White",
  },
  {
    id: "0000c01623",
    name: "СС МихЫЫаилв ВВВ",
    prise: "Фотоаппарат White",
  },
  {
    id: "0f0000163",
    name: "Максимюк Михаилв Владимирович",
    prise: "Фотоаппарат White",
  },
  {
    id: "00000q1623",
    name: "СС МихЫЫаилв ВВВ",
    prise: "Фотоаппарат White",
  },
  {
    id: "0000d0163",
    name: "Максимюк Михаилв Владимирович",
    prise: "Фотоаппарат White",
  },
  {
    id: "0000s01623",
    name: "СС МихЫЫаилв ВВВ",
    prise: "Фотоаппарат White",
  },
];

const mock_winners2 = [
  {
    id: "00000163",
    name: "Ыгро Михаилв Владимирович",
    prise: "Фотоаппарат White",
  },
  {
    id: "000200163",
    name: "Ыгро Михаилв Владимирович",
    prise: "Фотоаппарат White",
  },
  {
    id: "0000013163",
    name: "Ыгро Михаилв Владимирович",
    prise: "Фотоаппарат White",
  },
  {
    id: "0аф0000163",
    name: "Ыгро Михаилв Владимирович",
    prise: "Фотоаппарат White",
  },
  {
    id: "0000вфывфыв0163",
    name: "Ыгро Михаилв Владимирович",
    prise: "Фотоаппарат White",
  },
  {
    id: "0000016ddd23",
    name: "ГГ МихЫЫаилв ВВВ",
    prise: "Фотоаппарат White",
  },
  {
    id: "00000f16dd23",
    name: "ГГ МихЫЫаилв ВВВ",
    prise: "Фотоаппарат White",
  },
  {
    id: "0000016qdd23",
    name: "ГГ МихЫЫаилв ВВВ",
    prise: "Фотоаппарат White",
  },
  {
    id: "000001d6dd23",
    name: "ГГ МихЫЫаилв ВВВ",
    prise: "Фотоаппарат White",
  },
  {
    id: "0000016dsd23",
    name: "ГГ МихЫЫаилв ВВВ",
    prise: "Фотоаппарат White",
  },

  {
    id: "0000s0163",
    name: "Ыгро Михаилв Владимирович",
    prise: "Фотоаппарат White",
  },
  {
    id: "0000d01623",
    name: "ГГ МихЫЫаилв ВВВ",
    prise: "Фотоаппарат White",
  },
  {
    id: "000a00163",
    name: "Ыгро Михаилв Владимирович",
    prise: "Фотоаппарат White",
  },
  {
    id: "0000c01623",
    name: "ГГ МихЫЫаилв ВВВ",
    prise: "Фотоаппарат White",
  },
  {
    id: "0f0000163",
    name: "Ыгро Михаилв Владимирович",
    prise: "Фотоаппарат White",
  },
  {
    id: "00000q1623",
    name: "ГГ МихЫЫаилв ВВВ",
    prise: "Фотоаппарат White",
  },
  {
    id: "0000d0163",
    name: "Ыгро Михаилв Владимирович",
    prise: "Фотоаппарат White",
  },
  {
    id: "0000s01623",
    name: "ГГ МихЫЫаилв ВВВ",
    prise: "Фотоаппарат White",
  },
];

const mock_winners3 = [
  {
    id: "s",
    name: "SSSSS SS sssss",
    prise: "Фотоаппарат White",
  },
];

export default {
  name: "TournamentsWinners",
  components: {
    Splicer,
    Winners,
  },
  data() {
    return {
      winners: {
        first: {
          prize: "Подарочный сертификат на 50 рублей",
          winners: [...mock_winners1],
        },
        second: {
          prize: "Подарочный сертификат на 100 рублей",
          winners: [...mock_winners2],
        },
        third: {
          prize: "Подарочный сертификат на 200 рублей",
          winners: [...mock_winners3],
        },
      },
      choosedPrize: null,
      isOpenCalendar: false,
      choosedWinners: [],
    };
  },
  computed: {
    isMobileSize() {
      return this.$vssWidth < this.$desktopSize;
    },
  },
  methods: {
    closeModal() {
      this.choosedPrize = null;
      this.currentHeader = null;
    },
    choosePrize(prize) {
      this.choosedPrize = this.winners[prize].prize;
      this.choosedWinners = this.winners[prize].winners;
    },
  },
};
</script>

<style lang="less">
@import "../styles/media.less";
@import "../styles/variables.less";

@-moz-document url-prefix() {
  .TournamentsWinners {
    @media @desktop {
    }
  }
}

.TournamentsWinners {
  padding-bottom: 13.5vw;
  @media @desktop {
  }
  .btn {
    display: flex;
    flex-direction: column;
    font-size: 4.8vw;
    margin-bottom: 6.7vw;
    &:last-child {
      margin-bottom: 0;
      padding: 5.9vw 0;
      @media @desktop {
        padding: 1.8vw 0vw;
        font-size: 2.45vw;
        margin-top: 3.7vw;
        width: 31vw;
      }
    }
    @media @desktop {
      font-size: 1.95vw;
      margin-bottom: 0;
      width: 28vw;
      padding: 0.6vw 0;
    }
    p {
      font-size: 6.5vw;
      @media @desktop {
        font-size: 2.45vw;
      }
    }
  }

  &__content {
    margin-top: 8.4vw;
    @media @desktop {
      display: flex;
      flex-wrap: wrap;
      padding: 0px 4.9vw;
      margin-top: 4.3vw;
    }
  }

  .Splicer {
    span {
      @media @desktop {
        margin-left: 24.1vw;
      }
    }
  }
}
</style>
