<template>
  <div id="app">
    <MainBlock />
    <Sertificates />
    <GameRegistration />
    <PeriodOfEvent />
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

export default {
  name: "App",
  components: {
    Footer,
    MainBlock,
    GameRegistration,
    Sertificates,
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
  font-family: "Roboto", 'Sans-serif';
  // background-color: @main_color3;
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
  // font-weight: bold;
  // text-transform: uppercase;
  // display: block;
  // font-size: 5.4vw;
  // box-sizing: border-box;
  // background: @main_color1;
  // color: #fff;
  // width: 75vw;
  // margin: auto;
  // border-radius: 200px;
  // padding: 3.4vw 0;
  // border: none;
  // font-family: "Harmonia Sans Pro Cyr";
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
      // font-size: 2.45vw;
      // padding-left: 0.5vw;
      // padding-right: 0.5vw;
      // color: @main_color1;
      // background: #fff;
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
