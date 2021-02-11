<template>
  <div class="PeriodOfEvent">
    <h2>Период Акции</h2>
    <p>С 1 февраля по 31 марта 2021 года</p>
    <br />
    <span>
      Срок совершения покупок <br class="no-desktop" />
      в рамках участия в Акции: <br />
      с 01.02.2021 по 28.02.2021
    </span>
  </div>
</template>

<script>
export default {
  name: "PeriodOfEvent",
  data() {
    return {};
  },
};
</script>

<style lang="less">
@import "../styles/media.less";
@import "../styles/variables.less";

@-moz-document url-prefix() {
  .PeriodOfEvent {
    @media @desktop {
    }
  }
}

.PeriodOfEvent {
  background-color: #fff;
  text-align: center;
  padding-bottom: 22.2vw;
  @media @desktop {
    padding-bottom: 9.8vw;
  }
  h2 {
    padding-top: 22.6vw;
    @media @desktop {
      padding-top: 8.9vw;
    }
  }
  p {
    font-weight: bold;
    font-size: 5.2vw;
    margin-top: 2.8vw;
    @media @desktop {
      font-size: 2.1vw;
      margin-top: 1vw;
    }
  }
  span {
    font-size: 5.2vw;
    display: block;
    margin-top: 2vw;
    line-height: 6vw;
    @media @desktop {
      font-size: 2.13vw;
      line-height: 2.7vw;
      margin-top: 1.2vw;
    }
  }
}
</style>
