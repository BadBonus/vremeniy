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
  margin-bottom: 11.4vw;
  img {
    width: 80.9vw;
    @media @desktop {
      width: 28.2vw;
      // margin-right: 0;
      min-height: 28.3vw;
      margin: auto;
      display: block;
    }
  }
  @media @desktop {
    margin-bottom: 0;
  }
  &__itemTextBlock {
    font-family: "Lobster";
    color: @main_color1;
    font-size: 6.2vw;
    text-align: center;
    margin-top: 1.6vw;
    @media @desktop {
      font-size: 2vw;
      margin-top: 0;
      position: relative;
      bottom: 0.4vw;
      padding-left: 0.4vw;
    }
    span {
      text-decoration: underline;
      display: inline-block;
      // margin-right: 1vw;
      @media @desktop {
      }
    }

    & > p {
      margin-top: 3.2vw;
      font-size: 9.3vw;
      text-decoration: underline;
      @media @desktop {
        font-size: 2.5vw;
        margin-top: 1.1vw;
      }
      & > span:nth-child(2) {
        margin: 0 2vw;
        @media @desktop {
          margin: 0;
        }
      }
    }

    & > span:last-child {
      font-family: "Roboto";
      text-decoration: none;
      margin-top: 5.3vw;
      font-size: 4.7vw;
      @media @desktop {
        margin-top: 1.7vw;
        font-size: 1.7vw;
      }
    }
  }
  &__itemTextBlockFirst {
    & > span:first-child {
      margin-right: 2vw;
      @media @desktop {
        margin-right: 0;
      }
    }
    & > span:last-child {
      @media @desktop {
        position: relative;
        left: 1vw;
      }
    }
  }
}
</style>
