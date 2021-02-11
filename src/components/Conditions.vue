<template>
  <div class="Conditions">
    <h2>Условия акции</h2>
    <ul class="Conditions__list">
      <li>
        <img src="../assets/icons/food.svg" alt="decoration" />
        <div class="Conditions__textBlock">
          <h4>Купи</h4>
          <span
            >трусики Pampers <br />
            2-го или 3-го размера</span
          >
        </div>
      </li>
      <li>
        <img src="../assets/icons/registration.svg" alt="decoration" />
        <div class="Conditions__textBlock">
          <h4>Зарегистрируй чек</h4>
          <span
            >на сайте <br />
            <b> promo-igra.by</b>
          </span>
        </div>
      </li>
      <li>
        <img src="../assets/icons/mobile.svg" alt="decoration" />
        <div class="Conditions__textBlock">
          <h4>Получи</h4>
          <span
            >до 20 рублей на телефон <br />
            за покупку трусиков <br class="no-desktop" />
            Pampers*
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Conditions",
  data() {
    return {};
  },
};
</script>

<style lang="less">
@import "../styles/media.less";
@import "../styles/variables.less";

@-moz-document url-prefix() {
  .Conditions {
    @media @desktop {
    }
  }
}

.Conditions {
  background-color: #fff;
  padding-bottom: 15.9vw;
  @media @desktop {
    padding-bottom: 8.4vw;
  }
  h2 {
    @media @desktop {
      font-size: 4vw;
    }
  }
  h4 {
    text-transform: uppercase;
    @media @desktop {
      font-size: 2.15vw;
    }
  }
  &__list {
    @media @desktop {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 10vw;
    }
    li {
      display: flex;
      width: 100%;
      margin-top: 12.8vw;
      position: relative;
      @media @desktop {
        flex-direction: column;
        align-items: center;
        margin-top: 0;
        justify-content: space-between;
        height: 17.3vw;
      }

      &:first-child {
        margin-top: 0;
        img {
          width: 14.5vw;
          @media @desktop {
            width: 4.9vw;
            margin-left: 0;
          }
        }
        .Conditions__textBlock {
          &::before {
            content: "1";
          }
        }
      }
      &:nth-child(2) {
        img {
          width: 19vw;
          margin-left: 5.4vw;
          @media @desktop {
            width: 7.1vw;
            margin-left: 0;
            left: 0.6vw;
          }
        }
        .Conditions__textBlock {
          margin-left: 12.3vw;
          position: relative;
          top: 2vw;
          @media @desktop {
            margin-left: 0;
            top: 0;
          }
          &::before {
            content: "2";
          }
          &::after {
            @media @desktop {
              top: -6.7vw;
            }
          }
        }
      }
      &:last-child {
        margin-top: 15.9vw;
        @media @desktop {
          margin-top: 0;
          position: relative;
          top: 0.7vw;
        }
        .Conditions__textBlock {
          margin-top: 3vw;
          &::before {
            content: "3";
          }

          &::after {
            display: none !important;
          }
        }
        img {
          position: relative;
          left: 1.8vw;
          bottom: 1.6vw;
          width: 13.6vw;
          @media @desktop {
            width: 5.2vw;
            left: 0.6vw;
            bottom: 1vw;
          }
        }
      }

      .Conditions__textBlock {
        position: relative;
        &::before {
          background-color: #dc0c1c;
          border: 4px solid #faf6fd;
          border-radius: 200px;
          display: block;
          position: absolute;
          left: -9.2vw;
          top: -2.2px;
          color: #fff;
          box-sizing: border-box;
          padding: 0.6vw 1.5vw 1.1vw;
          font-family: "open sans";
          font-size: 3.9vw;

          @media @desktop {
            padding: 0.35vw 0.5vw 0.35vw;
            font-family: "open sans";
            font-size: 0.9vw;
            margin: auto;
            right: 0;
            width: 2.1vw;
            top: -3vw;
            left: 0;
          }
        }
        &::after {
          content: "";
          position: absolute;
          left: -19vw;
          top: 8.8vw;
          display: block;
          background-image: url("../assets/icons/curveArrow.svg");
          display: block;
          background-repeat: no-repeat;
          background-size: contain;
          width: 100%;
          height: 23.2vw;
          @media @desktop {
            height: 11.2vw;
            transform: rotate(-90deg) scale(-1, 1);
            top: -9.3vw;
            left: 11.2vw;
          }
        }
        @media @desktop {
          text-align: center;
          margin-left: 0;
          margin-top: 5.1vw;
        }
      }
    }
    img {
      margin-left: 7.1vw;
      @media @desktop {
        margin-left: 0;
      }
    }
  }
  h2 {
    padding-top: 12.9vw;
    padding-bottom: 10vw;
    @media @desktop {
      padding-top: 7.1vw;
      padding-bottom: 3.5vw;
    }
  }
  &__textBlock {
    margin-left: 15.2vw;
    position: relative;
    h4 {
      font-size: 5.8vw;
      @media @desktop {
        font-size: 2.2vw;
      }
    }
    span {
      font-size: 4.9vw;
      margin-top: 0.7vw;
      display: block;
      line-height: 5.9vw;
      @media @desktop {
        font-size: 1.57vw;
        line-height: 2vw;
        margin-top: 0vw;
      }
    }
  }
}
</style>
