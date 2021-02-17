<template>
  <div class="Splicer" :id="id">
    <slot></slot>
    <span v-if="!this.$slots.default">
      {{ value }}
    </span>
    <!-- <img src="../assets/icons/decor_splicer.png" alt="decoration"> -->
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
    id: {
      type: String,
      required: false,
    },
  },
  data() {
    return {};
  },
  mounted() {},
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
  text-align: center;
  width: 97.4vw;
  margin-left: auto;
  background-position: right;
  background-size: 100%;
  padding: 5.7vw 0 8.4vw 0;
  @media @desktop {
    .bcgImage("../assets/decor_splicer.png");
    font-size: 3.3vw;
    width: 92vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1vw 0 2vw;
  }
  span {
    display: inline-block;
    padding-left: 1.2vw;
    @media @desktop {
    }
  }

  &__applyIcon {
    width: 8vw;
    margin-right: 5.5vw;
    @media @desktop {
      width: 4.4vw;
      margin-right: 6.8vw;
      padding-left: 0;
    }
  }
}
</style>
