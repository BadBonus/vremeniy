<template>
  <div class="ModalChatbot">
    <button class="ModalChatbot__closeBtn" @click="onClose"></button>
    <div class="ModalChatbot__title">
      Здесь можно быстро зарегистрировать чек
    </div>
    <ul class="ModalChatbot__list">
      <li>
        <a target="_blank" href="https://t.me/nestle_reach_and_target_bot"
          ><img src="../assets/icons/telegram.png" alt="decor" />
          <span>Telegram</span></a
        >
      </li>
      <!-- <li>
        <a href="#"
          ><img src="../assets/icons/viber.ico" alt="decor" />
          <span>Viber</span></a
        >
      </li> -->
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
  methods: {
    onClose() {
      this.$emit("onCloseModal");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../styles/media.less";
@import "../styles/variables.less";

.ModalChatbot {
  background: #1e7d14;
  color: #fff;
  font-family: "Lobster";
  text-align: center;
  border: 5px solid #f0dac0;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px #0f390a;
  border-radius: 13vw;
  background: @main_color1;
  z-index: 998;
  padding-bottom: 2vw;
  padding-top: 5vw;

  font-size: 8vw;
  width: 100%;
  height: 43vw;

  position: fixed;
  bottom: 0;
  top: 0;
  margin: auto;
  left: 0;
  @media @desktop {
    border-radius: 91px;
    opacity: 0.5;
    padding-top: 0.6vw;
    padding-bottom: 1.27vw;
    width: 34vw;
    font-size: 1.4vw;
    right: 0.5vw;
    left: unset;
    top: unset;
    bottom: 3vw;
    height: auto;
    &:hover {
      opacity: 1;
    }
  }

  &__title {
    position: relative;
    cursor: default;
    &::after {
      content: "";
      position: absolute;
      right: 2.6vw;
      top: 13vw;
      width: 12.8vw;
      height: 9.532vw;

      .bcgImage("../assets/icons/strela.png");
      background-repeat: no-repeat;
      background-size: contain;

      @media @desktop {
        right: 3.3vw;
        top: 1.9vw;
        width: 3.8vw;
        height: 3.132vw;
        transform: rotate(-13.9turn);
      }
    }
  }
  &__list {
    margin-top: 4vw;
    @media @desktop {
      margin-top: 0;
    }
    li {
      .bcgImage("../assets/chatbot_decor.png");
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto;
      background-size: 100%;
      background-position: center;
      width: 80%;
      height: 14vw;
      @media @desktop {
        width: 30vw;
        height: 3.1vw;
        background-size: 63%;
        position: relative;
        top: 0.6vw;
      }

      a {
        color: @main_color1;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      span {
        font-size: 7vw;
        font-family: "Roboto";
        @media @desktop {
          font-size: 1.3vw;
        }
      }

      img {
        position: relative;

        right: 2.1vw;
        width: 7vw;
        @media @desktop {
          right: 0.6vw;
          width: 2.2vw;
        }
      }
    }
  }
  &__closeBtn {
    width: 3vw;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: unset;
    .bcgImage("../assets/icons/close2.svg");
    background-size: 40%;
    background-position: center;

    position: absolute;
    right: 3.2vw;
    width: 10vw;
    height: 5vw;
    top: 2.6vw;

    z-index: 500;
    @media @desktop {
      right: 1.4vw;
      width: 1.5vw;
      top: 0vw;
      height: 3vw;
      background-size: 60%;
    }
  }
}
</style>
