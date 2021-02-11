<template>
  <div class="MainBlock">
    <img src="../assets/logo.svg" alt="" class="MainBlock__logo" />
    <div class="MainBlock__content">
      <b>Вернём</b>
      <p class="MainBlock__content__note">до <b>20</b> руб.</p>
      <b>на телефон</b>
      <span class="MainBlock__content__cause">
        за покупку<br class="no-desktop" />
        трусиков Pampers*</span
      >
      <a href="#GameRegistration" class="btn">Зарегистрировать чек</a>
    </div>
    <img
      src="../assets/pampers_mob.png"
      alt="decoration"
      class="MainBlock__pumpersDec no-desktop"
    />
    <span class="MainBlock__rules">
      *Срок проведения акции: 01.02.2021-31.03.2021, срок совершения покупок:
      <br class="no-desktop" />
      01.02.2021-28.02.2021. <br class="no-mobile" />
      Информация об организаторе акции, правилах её<br class="no-desktop" />
      проведения, сроках, местах и порядке получения <br class="no-mobile" />
      подарков – на promo-igra.by<br class="no-desktop" />
      и по телефону: +375 29 608 19 49. <br />
      Организатор акции – ООО “ЭфСиБи Бел”. УНП 193185741.
    </span>
  </div>
</template>

<script>
export default {
  name: "MainBlock",
  data() {
    return {};
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
  // background-image: url("../assets/fon_main_mob.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: bottom;
  padding-bottom: 7.6vw;

  @media @desktop {
    // background-image: url("../assets/fon_main.png");
    display: flex;
    justify-content: space-between;
    background-position: unset;
    background-size: cover;
    padding-bottom: 29.2vw;
  }

  &__logo {
    margin: auto;
    display: block;
    margin-top: 8.2vw;
    width: 33.6vw;
    @media @desktop {
      // position: absolute;
      width: 16.1vw;
      margin: unset;
      margin-left: 7.7vw;
      margin-top: -11.6vw;
    }
  }
  &__content {
    text-align: center;
    margin-top: 8.4vw;

    @media @desktop {
      width: 42.3vw;
      margin: unset;
      margin-top: 6.6vw;
    }

    b {
      display: block;
      font-size: 9vw;
      @media @desktop {
        font-size: 3.5vw;
      }
    }

    & > span {
      font-size: 2vw;
    }

    &__note {
      font-weight: bold;
      font-size: 9.5vw;
      color: @main_color1;
      width: 64vw;
      margin: auto;
      border-radius: 200px;
      margin-top: 2vw;
      padding: 4vw 0 2vw;
      background-color: #fff;
      margin-bottom: 1.3vw;
      @media @desktop {
        font-size: 2.7vw;
        font-weight: bold;
        width: 20vw;
        margin: auto;
        border-radius: 200px;
        margin-top: 1.1vw;
        padding: 0.3vw 0 1vw;
        margin-bottom: 0.5vw;
      }
      b {
        display: inline;
        font-size: 12.3vw;
        @media @desktop {
          font-size: 4.5vw;
        }
      }
    }

    .MainBlock__content__cause {
      display: block;
      font-size: 7vw;
      margin-top: 4.5vw;
      @media @desktop {
        font-size: 2.14vw;
        margin-top: 0.9vw;
      }
    }
  }
  .btn {
    margin-top: 6.3vw;
    @media @desktop {
      margin-top: 4.4vw;
    }
  }
  &__pumpersDec {
    margin: auto;
    width: 87.7vw;
    display: block;
    margin-top: 5.8vw;
    @media @desktop {
    }
  }
  &__rules {
    font-size: 2.4vw;
    text-align: center;
    display: block;
    width: 88.2vw;
    margin: auto;
    margin-top: 61.8vw;

    @media @desktop {
      position: absolute;
      font-size: 1vw;
      text-align: left;
      left: 2vw;
      margin-top: auto;
      top: 56.1vw;
    }
  }
}
</style>
