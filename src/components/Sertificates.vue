<template>
  <div class="Sertificates">
    <Splicer
      id="GippoSertificate"
      :style="{
        position: 'relative',
        bottom: '2vw',
      }"
    >
      <img
        class="Splicer__shopLogo Splicer__shopLogo-gippo"
        v-if="!isMobileSize"
        src="../assets/gippo_logo.png"
        alt="gippo logo"
      />
      <span>Еженедельный розыгрыш призов</span>
      <img
        class="Splicer__applyIcon"
        v-if="!isMobileSize"
        src="../assets/icons/decor_splicer.png"
        alt="decoration"
      />
    </Splicer>
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
      <a
        href="/rulesSertificates_gippo.pdf"
        target="_blank"
        class="Sertificates__linkRegistration"
        >Правила использования сертификатов</a
      >
      <a v-scroll-to="'#GameRegistration'" class="btn">Зарегистрироваться</a>
    </div>
    <Splicer id="GreenSertificate">
      <img
        class="Splicer__shopLogo Splicer__shopLogo-green"
        v-if="!isMobileSize"
        src="../assets/green_logo.png"
        alt="gippo logo" />
      <span>Еженедельный розыгрыш призов</span>
      <img
        class="Splicer__applyIcon"
        v-if="!isMobileSize"
        src="../assets/icons/decor_splicer.png"
        alt="decoration"
    /></Splicer>
    <div class="Sertificates__container Sertificates__container-green">
      <img
        src="../assets/green_logo2.png"
        alt="logo of green"
        class="Sertificates__logo Sertificates__logo-green"
      />
      <ul class="Sertificates__listItems Sertificates__listItems-green">
        <SertificateItem
          :img="ser_images.green50"
          :value="'50'"
          :shop="'в торговую сеть Green'"
        />
        <SertificateItem
          :img="ser_images.green100"
          :value="'100'"
          :shop="'в торговую сеть Green'"
        />
        <SertificateItem
          :img="ser_images.green200"
          :value="'200'"
          :shop="'в торговую сеть Green'"
        />
      </ul>
      <a
        href="/rulesSertificates_green.pdf"
        target="_blank"
        class="Sertificates__linkRegistration"
        >Правила использования сертификатов</a
      >
      <a v-scroll-to="'#GameRegistration'" class="btn">Зарегистрироваться</a>
    </div>

    <Splicer id="VitalSertificate">
      <img
        class="Splicer__shopLogo Splicer__shopLogo-vita"
        v-if="!isMobileSize"
        src="../assets/vita_logo.png"
        alt="gippo logo" />
      <span>Еженедельный розыгрыш призов</span>
      <img
        class="Splicer__applyIcon"
        v-if="!isMobileSize"
        src="../assets/icons/decor_splicer.png"
        alt="decoration"
    /></Splicer>
    <div class="Sertificates__container Sertificates__container-vita">
      <img
        src="../assets/vita_logo2.png"
        alt="logo of green"
        class="Sertificates__logo"
      />
      <ul class="Sertificates__listItems">
        <SertificateItem
          :img="ser_images.vit50"
          :value="'50'"
          :shop="'в торговую сеть Виталюр'"
        />
        <SertificateItem
          :img="ser_images.vit100"
          :value="'100'"
          :shop="'в торговую сеть Виталюр'"
        />
        <SertificateItem
          :img="ser_images.vit200"
          :value="'200'"
          :shop="'в торговую сеть Виталюр'"
        />
      </ul>
      <a
        href="/rulesSertificates_Vitalur.pdf"
        target="_blank"
        class="Sertificates__linkRegistration"
        >Правила использования сертификатов</a
      >
      <a v-scroll-to="'#GameRegistration'" class="btn">Зарегистрироваться</a>
    </div>
  </div>
</template>

<script>
import Splicer from "./Splicer";
import SertificateItem from "./SertificateItem";
import gip50 from "./../assets/card50gip.png";
import gip100 from "./../assets/card100gip.png";
import gip200 from "./../assets/card200gip.png";
import green50 from "./../assets/card50gr.png";
import green100 from "./../assets/card100gr.png";
import green200 from "./../assets/card200gr.png";
import vit50 from "./../assets/card50vit.png";
import vit100 from "./../assets/card100vit.png";
import vit200 from "./../assets/card200vit.png";

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
        green50,
        green100,
        green200,
        vit50,
        vit100,
        vit200,
      },
    };
  },
  computed: {
    isMobileSize() {
      return this.$vssWidth < this.$desktopSize;
    },
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
    @media @desktop {
      margin-bottom: 0;
    }
  }

  &__container {
    .bcgImage("../assets/background_cards_m.png");
    background-position: center;
    background-position: top;
    background-size: 94% 395.8vw;
    // background-size: 94% 404.8vw;  //криво элементы расположены на макете, высоту лучше меньше сделать для аккуратности
    margin-bottom: 22.7vw;
    &:last-child {
      margin-bottom: 17vw;
      @media @desktop {
        margin-bottom: 3.3vw;
      }
    }
    @media @desktop {
      background-image: url("../assets/background_cards.png");
      background-repeat: no-repeat;
      background-size: 94.2vw 36.6vw;
      background-position-x: 0.9vw;
      margin-bottom: 2vw;

      position: relative;
      &::before {
        content: "";
        position: absolute;
        width: 15vw;
        height: 1.3vw;
        background-color: #ffff;
        left: 0;
        right: 0;
        top: 7vw;
        margin: auto;
        z-index: 1;
      }
    }

    &-green {
      background-size: 94% 93.3%;
      @media @desktop {
        // background-size: 97.2vw 54.8vw;
        background-size: 96% 76.5%;
        background-position-x: 1.8vw;
      }
      .Splicer {
        margin-bottom: 10vw;
      }

      .Sertificates__linkRegistration {
        margin-top: 18vw;
        @media @desktop {
          margin-top: 5.9vw;
        }
      }
    }
  }

  &__listItems {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    margin-top: 14.7vw;
    &-green {
      margin-top: 19.4vw;
    }
    @media @desktop {
      flex-direction: row;
      margin-top: 2vw;
      justify-content: space-around;
      padding: 0vw 3vw;
      &-green {
        margin-top: 2vw;
      }
    }

    .SertificateItem {
      margin-right: 3.7vw;
      @media @desktop {
        margin-right: 0;
      }
    }
  }
  &__logo {
    margin: auto;
    display: block;
    width: 43.6vw;
    padding-top: 8.5vw;
    position: relative;
    z-index: 5;

    &-green {
      top: 7vw;
      @media @desktop {
        top: 0;
      }
    }
    @media @desktop {
      position: relative;
      width: 18vw;
      padding-top: 3.5vw;

      &-green {
        width: 14.5vw;
      }
    }
  }

  & .SertificateItem:nth-of-type(2n) {
    img {
      position: relative;
      right: 1.8vw;
      @media @desktop {
        right: 0;
      }
    }
  }
  &__linkRegistration {
    font-family: "Lobster";
    color: @main_color1;
    text-align: center;
    display: block;
    margin-top: 4.4vw;
    font-size: 4.6vw;
    margin-bottom: 5.8vw;
    text-decoration: underline;
    @media @desktop {
      font-size: 1.5vw;
      margin-top: 2.2vw;
      margin-bottom: 2.7vw;
    }
  }

  .Splicer__shopLogo {
    @media @desktop {
      width: 11vw;
      margin-right: 0;
      margin-left: 4.1vw;

      &-green {
        position: relative;
        top: 0.3vw;
        width: 9vw;
      }
      &-vita {
        position: relative;
        top: 0.3vw;
      }
    }
  }
  .btn {
    @media @desktop {
      width: 22vw;
      font-size: 2vw;
      padding: 1.5vw 0;
    }
  }
}
</style>
