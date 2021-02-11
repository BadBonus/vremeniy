<template>
  <div class="Sertificates">
    <Splicer value="Еженедельный розыгрыш призов" />
    <div class="Sertificates__container">
      <img
        src="../assets/gippo_logo2.png"
        alt="logo of gippo"
        class="Sertificates__logo"
      />
      <ul class="Sertificates__listItems">
        <SertificateItem
          :img="ser_images.gip50"
          :value="'50'"
          :shop="'в торговую сеть Гиппо'"
        />
        <SertificateItem
          :img="ser_images.gip100"
          :value="'100'"
          :shop="'в торговую сеть Гиппо'"
        />
        <SertificateItem
          :img="ser_images.gip200"
          :value="'200'"
          :shop="'в торговую сеть Гиппо'"
        />
      </ul>
    </div>
    <div class="Sertificates__container"></div>
    <div class="Sertificates__container"></div>
  </div>
</template>

<script>
import Splicer from "./Splicer";
import SertificateItem from "./SertificateItem";
import gip50 from "./../assets/card50gip.png";
import gip100 from "./../assets/card100gip.png";
import gip200 from "./../assets/card200gip.png";

export default {
  name: "Sertificates",
  components: {
    Splicer,
    SertificateItem,
  },
  data() {
    return {
      ser_images: {
        gip50,
        gip100,
        gip200,
      },
    };
  },
};
</script>

<style lang="less">
@import "../styles/media.less";
@import "../styles/variables.less";

@-moz-document url-prefix() {
  .Sertificates {
    @media @desktop {
    }
  }
}

.Sertificates {
  @media @desktop {
  }

  .Splicer {
    margin-bottom: 4vw;
  }

  &__container {
    .bcgImage("../assets/background_cards_m.png");
    background-position: center;
    background-size: 94% 100%;
    // height: 404.8vw; //криво элементы расположены на макете, высоту лучше меньше сделать для аккуратности
    height: 395.8vw;
    @media @desktop {
    }
  }

  &__listItems {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    margin-top: 14.7vw;
    @media @desktop {
    }

    .SertificateItem {
      margin-right: 3.7vw;
    }
  }
  &__logo {
    margin: auto;
    display: block;
    width: 43.6vw;
    padding-top: 8.5vw;
  }

  & .SertificateItem:nth-of-type(2n) {
    img {
      position: relative;
      right: 1.8vw;
    }
  }
}
</style>
