<template>
  <div class="MainBlock">
    <div class="MainBlockFirstContent">
      <Splicer>
        <img
          class="Splicer__nestleLogo"
          src="../assets/icons/nestle_logo2.png"
          alt="nestle logo"
        />
        <span>с 1 марта по 30 апреля 2021 года</span>
        <img
          class="Splicer__applyIcon"
          src="../assets/icons/decor_splicer.png"
          alt="decoration"
        />
      </Splicer>
      <h1>
        Завтракай <br v-if="isMobileSize" />
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
              class="MainBlock__basketImg"
            />
            <img
              v-if="isMobileSize"
              src="./../assets/icons/basket_m.png"
              alt="Покупайте 2 любых"
            />
            <div class="MainBlock__textContent">
              <h4>Покупайте 2 любых</h4>
              <p>
                готовых завтрака Nestlé® <br />
                в магазинах торговых сетей <br />
                ГИППО, GREEN, ВИТАЛЮР <br />
              </p>
              <a href="listOfProducts.pdf" target="_blank"
                >Полный список игровых продуктов</a
              >
            </div>
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
            <div class="MainBlock__textContent">
              <h4>Регистрируйте</h4>
              <p>чек на сайте nestle-cereals.by</p>
            </div>
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
            <div class="MainBlock__textContent">
              <h4>Выигрывайте призы</h4>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="MainBlock__bottomContent">
      <a href="rules.pdf" target="_blank" class="MainBlock__decorBtn"
        >Правила рекламной игры</a
      >
      <span v-if="isMobileSize" class="MainBlock__decorMessage">
        Выберите игровую сеть, <br />
        в которой купили продукты
      </span>
      <Splicer v-if="!isMobileSize"
        ><span> Выберите игровую сеть, в которой купили продукты </span
        ><img
          class="Splicer__applyIcon"
          v-if="!isMobileSize"
          src="../assets/icons/decor_splicer.png"
          alt="decoration"
      /></Splicer>
      <div class="MainBlock__listBtns">
        <a v-scroll-to="'#GippoSertificate'" class="btn btn-gippo">
          <img src="../assets/gippo_logo.png" alt="gippo logo" />
        </a>
        <a v-scroll-to="'#GreenSertificate'" class="btn btn-green">
          <img src="../assets/green_logo.png" alt="green_logo" />
        </a>
        <a v-scroll-to="'#VitalSertificate'" class="btn btn-vita">
          <img src="../assets/vita_logo.png" alt="vita_logo" />
        </a>
      </div>
      <div class="MainBlock__BottomDownContent">
        <div class="MainBlock__Calculations">
          <h4>
            Завтракай и выигрывай <br v-if="isMobileSize" />
            призы вместе с Nestlé®!
          </h4>
          <div class="MainBlock__calcItem">
            <p>
              Каждые 2 Игровых продукта в чеке
              <br v-if="isMobileSize" /><b class="MainBlock__equalPic"> = </b>
              <br />
            </p>

            <p>1 Игровой код</p>
          </div>
          <div class="MainBlock__calcItem">
            <p>
              4 Игровых продукта в чеке
              <br v-if="isMobileSize" /><b class="MainBlock__equalPic"> = </b>
              <br />
            </p>

            <p>2 Игровых кода</p>
          </div>
          <div class="MainBlock__calcItem">
            <p>
              6 Игровых продуктов в чеке
              <br v-if="isMobileSize" /><b class="MainBlock__equalPic"> = </b>
              <br />
            </p>

            <p>3 Игровых кода и т.д.</p>
          </div>
        </div>
        <img
          v-if="isMobileSize"
          v-lazy="images[0]"
          alt="cereals"
          class="MainBlock__bottomDecor"
        />
        <img
          v-if="!isMobileSize"
          v-lazy="images[1]"
          alt="cereals"
          class="MainBlock__bottomDecor"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Splicer from "./Splicer";

import img1 from "../assets/boxCereals_m.png";
import img2 from "../assets/boxCereals_desk.png";

export default {
  name: "MainBlock",
  components: {
    Splicer,
  },
  data() {
    return {
      images: [img1, img2],
    };
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
  .bcgImage("../assets/bcg_head_m.png");
  background-position: 0 -3vw;
  background-size: contain;
  @media @desktop {
    background-image: none;
  }
  .Splicer {
    margin-top: 0;
    padding: 3.1vw 0;
    background-size: 100% 15.2vw;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media @desktop {
      margin-top: 0vw;
      padding: 1vw 0 2vw;
      width: 93vw;
      margin-top: 2.7vw;
      background-size: 100% 7.3vw;
    }
    span {
      font-family: "Roboto";
      font-size: 3.85vw;
      position: relative;
      bottom: 1vw;
      @media @desktop {
        font-size: 3.35vw;
        font-weight: 500;
        position: relative;
        right: 4vw;
        bottom: 0vw;
      }
    }
    @media @desktop {
    }

    .Splicer__nestleLogo {
      margin-left: 4vw;
      width: 16vw;
      @media @desktop {
        margin-left: 4.1vw;
        width: 15.3vw;
        position: relative;
        top: 0.6vw;
      }
    }

    &__applyIcon {
      width: 8vw;
      margin-right: 3.6vw;
      position: relative;
      bottom: 0.7vw;
      @media @desktop {
        margin-right: 7.2vw;
        width: 4.1vw;
        bottom: 0;
      }
    }
  }
  @media @desktop {
  }
  h1 {
    text-align: center;
    font-family: "Lobster";
    font-size: 14.7vw;
    margin-top: 0;
    line-height: 15.2vw;
    color: @main_color1;
    font-weight: normal;
    @media @desktop {
      font-size: 6.9vw;
      margin-top: 0;
      line-height: 9.4vw;
      position: relative;
      bottom: 1.5vw;
    }
  }

  &__boxes {
    width: 100vw;
    display: block;
    margin: auto;
    margin-top: auto;
    margin-bottom: auto;
    margin-top: 3.8vw;
    position: relative;
    z-index: 5;
    right: 1.1vw;
    margin-bottom: -2vw;
    @media @desktop {
      width: 53vw;
      margin-top: 0.1vw;
      margin-left: 0;
      margin-right: 0;
      position: relative;
      left: -0.2vw;
    }
  }
  ul {
    background-color: @main_color1;
    margin-top: 12vw;
    position: relative;
    padding-top: 2.7vw;
    @media @desktop {
      background-color: unset;
      margin-top: 3.5vw;
      margin-left: 2.5vw;
      padding-top: 0;
      margin-bottom: 10.3vw;
    }
    &::before {
      content: "";
      z-index: 2;
      display: block;
      position: absolute;
      left: 0;
      top: -9.6vw;
      // .bcgImage("../assets/bcg_head_m.png");
      // background-position: 0 6vw;
      // background-size: contain;
      width: 100%;
      background-color: @main_color1;
      height: 9.8vw;

      @media @desktop {
        display: none;
      }
    }

    li {
      text-align: center;
      color: @main_color2;
      margin-bottom: 12vw;
      &:last-child {
        margin: 0;
      }
      @media @desktop {
        color: @main_color1;
        display: flex;
        text-align: left;
        margin-bottom: 3.2vw;
      }
      a {
        color: @main_color2;
        text-decoration: underline;
        font-size: 5vw;
        margin-top: 1.2vw;
        display: inline-block;
        @media @desktop {
          font-size: 1.66vw;
          margin-top: 0.3vw;
          color: @main_color1;
        }
      }
      img {
        width: 28.8vw;
        @media @desktop {
          width: 6.8vw;
          margin-right: 1.8vw;
        }
      }

      h4 {
        font-family: "Lobster";
        font-size: 6.4vw;
        margin-top: 5.3vw;
        text-decoration: underline;
        font-weight: normal;
        @media @desktop {
          font-size: 3.35vw;
          margin-top: 0;
        }
      }
      p {
        margin-top: 1vw;
        font-size: 4.9vw;
        line-height: 7.4vw;
        @media @desktop {
          font-size: 2vw;
          line-height: 2.5vw;
          margin-top: 0.3vw;
          font-weight: 500;
        }
      }
    }
  }

  &__decorBtn {
    cursor: pointer;
    display: block;
    box-sizing: border-box;
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
    @media @desktop {
      position: absolute;
      top: 56.2vw;
      font-size: 2.5vw;
      width: 33.6vw;
      right: 7.6vw;
      padding: 1vw 0;
    }
    &:hover {
      color: #fff;
    }
  }

  &__bottomContent {
    padding-top: 11.6vw;
    background: @main_color1;
    color: @main_color2;
    text-align: center;
    padding-bottom: 9.8vw;
    border-radius: 0 0 0 27px;
    @media @desktop {
      padding-top: 2.5vw;
      padding-bottom: 2.8vw;
      border-radius: 0 0 0 187px;
    }
    .Splicer {
      span {
        font-family: "Lobster";
        right: 0;
        left: 3vw;
      }
    }
  }

  &__decorMessage {
    font-family: "Lobster";
    display: block;
    margin-top: 12.1vw;
    font-size: 6.5vw;
    line-height: 8vw;
  }
  &__listBtns {
    margin-top: 9.8vw;
    @media @desktop {
      display: flex;
      margin-top: 3.8vw;
      padding: 0 5vw;
    }
    .btn {
      margin-bottom: 7.6vw;
      &:last-child {
        margin-bottom: 0;
      }
      @media @desktop {
        margin-bottom: 7.6vw;
        padding: 2.1vw 0;
        width: 28vw;
        margin-bottom: 0;
        max-height: 7vw;
      }
      &-gippo {
        img {
          width: 33.2vw;
          @media @desktop {
            width: 13.2vw;
          }
        }
      }
      &-green {
        img {
          width: 21.8vw;
          @media @desktop {
            width: 12.2vw;
          }
        }
      }
      &-vita {
        img {
          width: 36vw;
          @media @desktop {
            width: 18vw;
          }
        }
      }
    }
  }

  &__Calculations {
    margin-top: 18.2vw;
    font-size: 4.6vw;
    @media @desktop {
      margin-top: 5.3vw;
      margin-left: 7vw;
    }
    h4 {
      font-family: "Lobster";
      font-size: 6.4vw;
      line-height: 8vw;
      margin-bottom: 8.1vw;
      @media @desktop {
        line-height: 4.3vw;
        font-size: 3.3vw;
        width: 35vw;
        margin: auto;
        position: relative;
        left: 2.4vw;
        margin-bottom: 2.5vw;
      }
    }
    b {
      font-size: 13vw;
      line-height: 11.4vw;
      @media @desktop {
        font-size: inherit;
        line-height: inherit;
      }
    }
  }
  &__calcItem {
    font-weight: 600;
    font-size: 4.85vw;
    margin-bottom: 10.9vw;
    &:last-child {
      margin-bottom: 0;
    }
    @media @desktop {
      font-size: 1.5vw;
      text-align: center;
      justify-content: center;
      display: flex;
      margin-bottom: 1.3vw;
      position: relative;
      left: 2vw;

      b {
        margin: 0vw 0.7vw 0 0.5vw !important;
      }
    }
  }
  &__bottomDecor {
    margin: auto;
    display: block;
    margin-top: 16.2vw;
    width: 80.4vw;
    @media @desktop {
      width: 43.4vw;
      margin-right: 5.7vw;
      margin-top: 55px;
    }
  }

  &__top_content {
    @media @desktop {
      display: flex;
    }
  }
  &__basketImg {
    height: 6.7vw;
  }

  .MainBlockFirstContent {
    padding-top: 1.7vw;
    @media @desktop {
      .bcgImage("../assets/bcg_head.png");
      background-size: cover;
      padding-bottom: 1vw;
      padding-top: 1.5vw;
    }

    .Splicer {
      @media @desktop {
        margin-top: 0;
        position: relative;
        bottom: 0.9vw;
      }
    }
  }
  &__BottomDownContent {
    @media @desktop {
      display: flex;
      justify-content: space-between;
    }
  }

  &__textContent {
    @media @desktop {
      position: relative;
      top: 0.4vw;
    }
  }

  &__equalPic {
    display: inline-block;
    transform: scaleX(1.2);
    font-size: 10vw;
    font-weight: 500;
  }
}
</style>
