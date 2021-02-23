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
      ><button class="btn" @click="openLightbox">Календарь розыгрышей</button>
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
    <vue-easy-lightbox
      escDisabled
      moveDisabled
      :visible="visible"
      :imgs="gallery"
      :index="index"
      @hide="handleHide"
    >
      <template slot="close-btn" slot-scope="props">
        <button class="TournamentsWinners__closeBtn" @click="props.close">
          X
        </button>
      </template>
      <template v-slot:prev-btn="{ prev }">
        <button
          :disabled="currentIndex === 0"
          class="controlBtn controlBtn-prev"
          @click="prevImg(prev)"
        >
          <img src="../assets/icons/controlarrow.svg" alt="" />
        </button>
      </template>

      <template v-slot:next-btn="{ next }">
        <button
          :disabled="currentIndex === 1"
          class="controlBtn controlBtn-next"
          @click="nextImg(next)"
        >
          <img src="../assets/icons/controlarrow.svg" alt="" />
        </button> </template
    ></vue-easy-lightbox>
  </div>
</template>

<script>
import axios from "axios";
import { getWinners } from "../API";

import Splicer from "./Splicer";
import Winners from "./Winners";

import calendar1 from "./../assets/calendar-1.jpg";
import calendar2 from "./../assets/calendar-2.jpg";

export default {
  name: "TournamentsWinners",
  components: {
    Splicer,
    Winners,
  },
  data() {
    return {
      currentIndex: 0,
      gallery: [
        {
          src: calendar1,
        },
        {
          src: calendar2,
        },
      ],
      visible: false,
      index: 0,
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
    openLightbox() {
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
    nextImg(next) {
      next();
      this.currentIndex = 1;
    },
    prevImg(prev) {
      prev();
      this.currentIndex = 0;
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

  .btn__prev,
  .btn__next {
    border-radius: 100px;
    border: 2px solid #fff;
    padding: 1.7vw;
    position: relative;
    background: @main_color1;
    opacity: 1 !important;
    @media @desktop {
      padding: 0.5vw;
    }
    &.disable {
      opacity: 0.5 !important;
    }
    svg {
      position: relative;
      fill: #fff;

      // left: 2px;
    }
  }
  .btn__prev {
    svg {
      // right: 2px;
      fill: #fff;
    }
  }
  .btn__prev {
    @media @desktop {
      left: 6vw !important;
    }
  }
  .btn__next {
    @media @desktop {
      right: 6vw !important;
    }
  }

  #silentbox-overlay__close-button .icon {
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  &__closeBtn {
    position: absolute;
    right: 0;
    top: 0;
    border: none;
    cursor: pointer;
    color: #fff;
    background: #1e7d14;
    width: 15vw;
    height: 7.2vw;
    font-size: 5vw;
    border-radius: 0 0 0 21px;

    @media @desktop {
      font-size: 2vw;
      width: 5vw;
      height: 3vw;
    }
  }
  .controlBtn {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 10vw;
    height: 10vw;
    background: green;
    border: 2px solid #fff;

    border-radius: 100px;
    color: #fff;
    // font-size: 9vw;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 1vw;
    img {
      width: 100%;
    }

    @media @desktop {
      width: 6vw;
      // font-size: 6vw;
      padding: 1vw;
      height: 6vw;
      max-width: 125px;
      max-height: 125px;
      left: 5vw;
    }

    &-next {
      left: unset;
      right: 1vw;
      img {
        transform: rotate(180deg);
      }
      @media @desktop {
        right: 5vw;
      }
    }

    &[disabled] {
      opacity: 0.5;
    }
  }
}
</style>
