<template>
  <div class="Sertificates">
    <Splicer value="Еженедельный розыгрыш призов" id="GippoSertificate" />
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
      <a href="" class="Sertificates__linkRegistration"
        >Правила использования сертификатов</a
      >
      <a v-scroll-to="'#GameRegistration'" class="btn">Зарегистрироваться</a>
    </div>
    <Splicer value="Еженедельный розыгрыш призов" id="GreenSertificate" />
    <div class="Sertificates__container" :style="{ 'background-size': '94%' }">
      <img
        src="../assets/green_logo2.png"
        alt="logo of green"
        class="Sertificates__logo"
      />
      <ul class="Sertificates__listItems">
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
      <a href="" class="Sertificates__linkRegistration"
        >Правила использования сертификатов</a
      >
      <a v-scroll-to="'#GameRegistration'" class="btn">Зарегистрироваться</a>
    </div>

    <Splicer value="Еженедельный розыгрыш призов" id="VitalSertificate" />
    <div class="Sertificates__container">
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
      <a href="" class="Sertificates__linkRegistration"
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
    background-position: top;
    background-size: 94% 395.8vw;
    // background-size: 94% 404.8vw;  //криво элементы расположены на макете, высоту лучше меньше сделать для аккуратности
    margin-bottom: 22.7vw;
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
  &__linkRegistration {
    font-family: "Lobster";
    color: @main_color1;
    text-align: center;
    display: block;
    margin-top: 4.4vw;
    font-size: 4.6vw;
    margin-bottom: 5.8vw;
    text-decoration: underline;
  }
}
</style>
