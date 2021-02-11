<template>
  <li class="SertificateItem">
    <img :src="img" alt="sertificate card" />
    <div class="SertificateItem__itemTextBlock">
      <div class="SertificateItem__itemTextBlockFirst">
        <span>Подарочный </span>
        <span>сертификат</span>
      </div>
      <p>
        <span>на</span><span> {{ value }} </span> <span> рублей</span>
      </p>
      <span>{{ shop }}</span>
    </div>
  </li>
</template>

<script>
export default {
  name: "Sertificates",
  props: {
    img: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    shop: {
      type: String,
      required: true,
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
  .SertificateItem {
    @media @desktop {
    }
  }
}

.SertificateItem {
  img {
    width: 80.9vw;
  }
  @media @desktop {
  }
  &__itemTextBlock {
    font-family: "Lobster";
    color: @main_color1;
    font-size: 6.2vw;
    text-align: center;
    margin-top: 1.6vw;
    span {
      text-decoration: underline;
      display: inline-block;
      // margin-right: 1vw;
    }

    & > p {
      margin-top: 3.2vw;
      font-size: 9.3vw;
      text-decoration: underline;
      & > span:nth-child(2) {
        margin: 0 2vw;
      }
    }

    & > span:last-child {
      font-family: "Roboto";
      text-decoration: none;
      margin-top: 5.3vw;
      font-size: 4.7vw;
    }
  }
  &__itemTextBlockFirst {
    & > span:first-child {
      margin-right: 2vw;
    }
  }
}
</style>
