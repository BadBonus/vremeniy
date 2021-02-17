<template>
  <div class="ModalChatbot">
    <div class="ModalChatbot__title">
      Здесь можно быстро зарегистрировать чек
    </div>
    <ul class="ModalChatbot__list">
      <li>
        <a href="#"
          ><img src="../assets/icons/telegram.png" alt="decor" />
          <span>Telegram</span></a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ModalChatbot",
  components: {},
  data() {
    return {};
  },
  computed: {
    isMobileSize() {
      return this.$vssWidth < this.$desktopSize;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../styles/media.less";
@import "../styles/variables.less";

@-moz-document url-prefix() {
  .ModalChatbot {
  }
}

.ModalChatbot {
  width: 47.3vw;
  background: #1e7d14;

  color: #fff;
  font-size: 2.94vw;
  font-family: "Lobster";
  text-align: center;
  border: 5px solid #f0dac0;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px #0f390a;
  border-radius: 91px;
  padding-top: 2vw;
  padding-bottom: 4vw;
  background: @main_color1;

  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 9999;

  &__title {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      right: 6.8vw;
      top: 4.7vw;
      width: 4.8vw;
      height: 4.932vw;
      .bcgImage("../assets/icons/strela.png");
      background-repeat: no-repeat;
      background-size: contain;
    }
    @media @desktop {
    }
  }
  &__list {
    @media @desktop {
    }
    li {
      .bcgImage("../assets/chatbot_decor.png");
      background-image: url(/img/chatbot_decor.fe621278.png);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto;
      @media @desktop {
        width: 40vw;
        height: 6.7vw;
      }

      a {
        color: @main_color1;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      span {
        font-size: 2.611vw;
        font-family: "Roboto";
      }
    }
  }
}
</style>
