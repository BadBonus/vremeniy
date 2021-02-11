<template>
  <div class="Splicer">
    <span>
      {{ value }}
    </span>
  </div>
</template>

<script>
export default {
  name: "Splicer",
  props: {
    value: {
      type: String,
      required: false,
      default: "Вы потрясающий!",
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="less">
@import "../styles/media.less";
@import "../styles/variables.less";

@-moz-document url-prefix() {
  .Splicer {
    @media @desktop {
    }
  }
}

.Splicer {
  .Lobster;
  font-size: 6.4vw;
  .bcgImage("../assets/decor_splicer_m.png");
  color: @main_color2;
  text-align: right;
  background-position: right;
  background-size: 97.4vw 100%;
  padding: 5.7vw 3.5vw 8.4vw 0;
  span {
    display: inline-block;
  }
  @media @desktop {
  }
}
</style>
