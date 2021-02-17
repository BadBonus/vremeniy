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
      <button class="btn" @click="choosePrize('50 рублей')">
        Подарочный сертификат <br />
        <p>на 50 рублей</p>
      </button>
      <button class="btn" @click="choosePrize('100 рублей')">
        Подарочный сертификат <br />
        <p>на 100 рублей</p>
      </button>
      <button class="btn" @click="choosePrize('200 рублей')">
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
import axios from "axios";
import { getWinners } from "../API";

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
          prize: "Подарочный сертификат на 50 рублей",
          name: "50 рублей",
          winners: [],
        },
        {
          prize: "Подарочный сертификат на 100 рублей",
          name: "100 рублей",
          winners: [],
        },
        {
          prize: "Подарочный сертификат на 200 рублей",
          name: "200 рублей",
          winners: [],
        },
      ],
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
      const currentObj = this.winners.find((el) => el.name === prize);
      this.choosedPrize = currentObj.prize;
      this.choosedWinners = currentObj.winners;
    },
    parsingWinners(rawdata) {
      const winners = [];

      rawdata.forEach((element) => {
        winners.push({ winners: [], name: element.name });
        const currentArray = winners.find((el) => el.name === element.name);
        element.draw.forEach(({ date_draw, winners }) => {
          winners.forEach(({ name }) =>
            currentArray.winners.push({ name, date: date_draw })
          );
        });
      });
      winners.forEach(({ name, winners }) => {
        const currentArray = this.winners.find((el) => el.name === name);
        currentArray.winners = [...winners];
      });
    },
  },
  mounted() {
    axios.post(getWinners).then(({ data }) => {
      this.parsingWinners(data.data);
    });
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
    padding-bottom: 4.5vw;
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
