<template>
  <div id="app">
    <MainBlock />
    <Sertificates />
    <GameRegistration />
    <TournamentsWinners />
    <Footer />
  </div>
</template>

<script>
import "reset-css";
import "animate.css";
// import "./assets/fonts/stylesheet.css";

import Footer from "./components/Footer.vue";
import MainBlock from "./components/MainBlock";
import Sertificates from "./components/Sertificates";
import GameRegistration from "./components/GameRegistration";
import TournamentsWinners from "./components/TournamentsWinners";

export default {
  name: "App",
  components: {
    Footer,
    MainBlock,
    GameRegistration,
    Sertificates,
    TournamentsWinners,
  },
  data() {
    return {
      windowTopY: 0,
    };
  },

  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    this.windowTopY = window.scrollY;
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {},
};
</script>

<style lang="less">
@import "./styles/media.less";
@import "./styles/variables.less";
@import "./assets/fonts/stylesheet.css";

.vsa-item {
  .vsa-item__trigger {
    padding: 0;
  }
}

* {
  transition: 0.35s;
}

body {
  // color: @main_color2;
  font-family: "Roboto", "Sans-serif";
  // background-color: @main_color3;
  background-image: url("./assets/background_m.png");
  background-repeat: no-repeat;
  background-size: cover;
}

b {
  font-weight: bold;
}
input,
button {
  outline: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
  opacity: 1;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}

//Строковые элементы

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: bold;
}

a {
  text-decoration: unset;
}

.btn {
  cursor: pointer;
  width: 94.2vw;
  padding: 1.6vw 0;
  background: @main_color1;
  border: 3px solid #f0dac0;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px #0f390a;
  border-radius: 91px;
  display: flex;
  align-content: center;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-family: "Lobster";
  color: @main_color2;
  font-size: 6.5vw;
  margin: auto;
  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
  @media @desktop {
    // width: 31vw;
    // font-size: 2.35vw;
    // text-transform: none;
    // padding: 1.5vw 0;

    &:hover:not([disabled]) {
      color: @main_color1;
      background: @main_color2;
    }
  }
}
h2 {
  font-size: 10.3vw;
  text-align: center;
  @media @desktop {
    font-size: 4vw;
  }
}
</style>
