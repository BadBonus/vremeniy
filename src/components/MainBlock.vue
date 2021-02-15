<template>
  <div class="MainBlock">
    <Splicer>
      <img
        class="Splicer__nestleLogo"
        src="../assets/icons/nestle_logo.png"
        alt="nestle logo"
      />
      <span>с 1 марта по 30 апреля</span>
      <img
        class="Splicer_applyIcon"
        src="../assets/icons/decor_splicer.png"
        alt="decoration"
      />
    </Splicer>
    <h1>
      Завтракай <br />
      и выигрывай!
    </h1>
    <div class="MainBlock__top_content">
      <img class="MainBlock__boxes" src="./../assets/boxes.png" alt="boxes" />
      <ul>
        <li>
          <img
            v-if="!isMobileSize"
            src="./../assets/icons/basket.png"
            alt="Покупайте 2 любых"
          />
          <img
            v-if="isMobileSize"
            src="./../assets/icons/basket_m.png"
            alt="Покупайте 2 любых"
          />
          <h4>Покупайте 2 любых</h4>
          <p>
            готовых завтрака Nestlé® <br />
            в ГИППО, GREEN, ВИТАЛЮР <br />
          </p>
          <a href="">Полный список игровых продуктов</a>
        </li>
        <li>
          <img
            v-if="!isMobileSize"
            src="./../assets/icons/registration.png"
            alt="Регистрируйте"
          />
          <img
            v-if="isMobileSize"
            src="./../assets/icons/registration_m.png"
            alt="Регистрируйте"
          />
          <h4>Регистрируйте</h4>
          <p>чек на сайте nestle-cereals.by</p>
        </li>
        <li>
          <img
            v-if="!isMobileSize"
            src="./../assets/icons/present.png"
            alt="Регистрируйте"
          />
          <img
            v-if="isMobileSize"
            src="./../assets/icons/present_m.png"
            alt="Регистрируйте"
          />
          <h4>Выигрывайте призы</h4>
        </li>
      </ul>
    </div>
    <div class="MainBlock__bottomContent">
      <div class="MainBlock__decorBtn">Правила рекламной игры</div>
      <span class="MainBlock__decorMessage">
        Выберите игровую сеть, <br />
        в которой купили продукты
      </span>
    </div>
  </div>
</template>

<script>
import Splicer from "./Splicer";

export default {
  name: "MainBlock",
  components: {
    Splicer,
  },
  data() {
    return {};
  },
  computed: {
    isMobileSize() {
      return this.$vssWidth < this.$desktopSize;
    },
  },
  mounted() {
    // console.log(this.$vssWidth, this.$desktopSize);
  },
};
</script>

<style lang="less">
@import "../styles/media.less";
@import "../styles/variables.less";

@-moz-document url-prefix() {
  .MainBlock {
    @media @desktop {
    }
  }
}

.MainBlock {
  .Splicer {
    padding: 2vw 0;
    margin-top: 2.7vw;
    background-size: 100% 15.2vw;

    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      font-family: "Roboto";
      font-size: 4.35vw;
      @media @desktop {
      }
    }
    @media @desktop {
    }
    .Splicer_applyIcon {
      width: 8vw;
      margin-right: 5.5vw;
    }

    .Splicer__nestleLogo {
      margin-left: 8vw;
      width: 21vw;
    }
  }
  @media @desktop {
  }
  h1 {
    text-align: center;
    font-family: "Lobster";
    font-size: 12.7vw;
    margin-top: 3.6vw;
    line-height: 15.2vw;
    color: @main_color1;
    font-weight: normal;
    @media @desktop {
    }
  }

  &__boxes {
    width: 95vw;
    display: block;
    margin: auto;
    margin-top: 5.7vw;
    @media @desktop {
    }
  }
  ul {
    background-color: @main_color1;
    margin-top: 12vw;
    @media @desktop {
    }
    li {
      text-align: center;
      color: @main_color2;
      margin-bottom: 12vw;
      &:last-child {
        margin: 0;
      }
      @media @desktop {
      }
      a {
        color: @main_color2;
        text-decoration: underline;
        font-size: 5vw;
        margin-top: 1.2vw;
        display: inline-block;
        @media @desktop {
        }
      }
      img {
        width: 28.8vw;
        @media @desktop {
        }
      }

      h4 {
        font-family: "Lobster";
        font-size: 6.4vw;
        margin-top: 5.3vw;
        text-decoration: underline;
        @media @desktop {
        }
      }
      p {
        margin-top: 1vw;
        font-size: 4.9vw;
        line-height: 7.4vw;
        @media @desktop {
        }
      }
    }
  }

  &__decorBtn {
    background: #f0dac0;
    width: 94vw;
    border: 3px solid @main_color1;
    box-sizing: border-box;
    box-shadow: 0px 0px 10px #0f390a;
    border-radius: 91px;
    text-align: center;
    color: @main_color1;
    font-family: "Lobster";
    margin: auto;
    font-size: 6.4vw;
    padding: 1.8vw 0;
  }

  &__bottomContent {
    padding-top: 11.6vw;
    background: @main_color1;
    color: @main_color2;
    text-align: center;
  }

  &__decorMessage {
    font-family: "Lobster";
    display: block;
    margin-top: 12.1vw;
    font-size: 6.5vw;
    line-height: 8vw;
  }
}
</style>
