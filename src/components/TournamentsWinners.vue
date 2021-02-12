<template>
  <div class="TournamentsWinners">
    <Splicer value="Розыгрыши и победители" />
    <transition name="fade">
      <Winners
        v-on:closeFunction="closeModal"
        :items="winners"
        :header="choosedHeader"
        v-if="choosedHeader"
        :perPage="8"
      />
    </transition>
  </div>
</template>

<script>
import Splicer from "./Splicer";
import Winners from "./Winners";

export default {
  name: "TournamentsWinners",
  components: {
    Splicer,
    Winners,
  },
  data() {
    return {
      winners: [
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
      ],
      choosedHeader: "Сертификат на 50 рублей",
    };
  },
  methods: {
    closeModal() {
      this.winners = [];
      this.choosedHeader = null;
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
  @media @desktop {
  }
}
</style>
