<template>
  <footer class="Footer">
    <div class="Footer__content">
      <img src="../assets/logo.svg" alt="logo" />
      <div class="textblock">
        <span>
          <b>Наименование рекламной акции</b>
          <br class="no-desktop" />
          «Вернем до 20 рублей на телефон <br class="no-desktop" />
          за покупку трусиков Pampers» <br />
          ООО "ЭфСиБи Бел", <br class="no-desktop" />
          УНП 193185741.
        </span>
        <br />
        <br />

        <span>
          <b> Телефон горячей линии:</b> <br class="no-desktop" />
          с 01.02.2021 по 31.03.2021 года <br class="no-desktop" />
          (включительно): <br class="no-desktop" />
          +375 29 608 19 49.<br />
          <b>Время работы:</b> с 10:00 до 12:00 <br class="no-desktop" />
          в будние дни.</span
        >
      </div>
    </div>
    <button class="btn" @click="isOpenWinners = !isOpenWinners">
      Победители рекламной игры "Живи моментом с Always"
    </button>
    <Winners v-if="isOpenWinners" />
  </footer>
</template>

<script>
import Winners from "./Winners";
export default {
  name: "Footer",
  components: {
    Winners,
  },
  data() {
    return {
      isOpenWinners: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../styles/media.less";

@-moz-document url-prefix() {
}

.Footer {
  text-align: center;
  font-size: 4.9vw;
  line-height: 6.5vw;
  @media @desktop {
    font-size: 1.45vw;
    text-align: left;
    line-height: 1.5vw;
  }
  img {
    display: block;
    margin: auto;
    width: 40.9vw;
    padding-top: 10.9vw;
    margin-bottom: 14vw;
    @media @desktop {
      width: 13.5vw;
      margin-left: 6.7vw;
      padding-top: 4.1vw;
      margin-right: 4.1vw;
      margin-bottom: 0;
    }
  }
  .btn {
    width: 100%;
    margin-top: 10vw;
    margin-bottom: 5vw;
    font-weight: normal;
    padding-left: 2vw;
    padding-right: 2vw;

    @media @desktop {
      margin-top: 2.76vw;
      width: 38vw;
      margin-left: 24vw;
      font-size: 1.3vw;
      padding: 0.85vw 0;
      &:hover{
        font-size: 1.35vw;
      }
    }
  }

  span {
    @media @desktop {
      display: block;
      padding-left: 0;
      &:first-of-type {
        padding-top: 8.5vw;
      }
      &:last-of-type {
        margin-top: -0.8vw;
      }
    }
  }

  &__content {
    @media @desktop {
      display: flex;
      justify-content: flex-start;
    }
  }
}
</style>
