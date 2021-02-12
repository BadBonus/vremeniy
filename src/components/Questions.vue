<template>
  <div class="Questions">
    <Splicer value="Вопросы и ответы" />
    <ul class="Questions__list">
      <li tabindex="0">
        <span class="Questions__title"
          >Как принять участие в рекламной игре?
        </span>
        <p class="Questions__content">
          С 1 марта 2021 года по 30 апреля 2021 года включительно нужно: 1)
          Купить 2 продукта, участвующих в рекламной игре, в любом магазине
          «ГИППО», «GREEN», или «ВИТАЛЮР» на территории Республики Беларусь и
          сохранить чек. 2) Зарегистрироваться в рекламной игре на сайте:
          nestle-cereals.by. Для этого нужно заполнить специальную форму и
          загрузить чёткое изображение чека. 3) После того, как Вы выполнили два
          первых пункта, в течение ближайших 24 часов, Вы получите SMS с игровым
          кодом на номер, который указали при регистрации.
        </p>
      </li>
      <li tabindex="0">
        <span class="Questions__title"> Как я могу забрать приз? </span>
        <p class="Questions__content">
          Призы можно получить по 7 мая 2021 года включительно по адресу: г.
          Минск, пер. Козлова, 25, пом. 22, с 10.00 по 18.00 с понедельника по
          пятницу, с 15.00 по 16.00 по субботам. Дату и время прибытия следует
          предварительно согласовать с представителем Организатора по телефону
          +375 (44) 583 76 93, с 10.00 по 18.00 с понедельника по пятницу, с
          15.00 по 16.00 по субботам. При получении приза при себе необходимо
          иметь оригинал паспорта.
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import Splicer from "./Splicer";

export default {
  name: "Questions",
  components: {
    Splicer,
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
  .Questions {
    @media @desktop {
    }
  }
}

.Questions {
  background: @main_color1;
  font-size: 4.8vw;
  @media @desktop {
  }
  .Splicer {
    position: relative;
    bottom: 1.2vw;
    margin-bottom: 8vw;
    @media @desktop {
    }
  }
  &__list {
    li {
      outline: none;
      background: #fff;
      text-align: center;
      color: @main_color1;
      font-family: "Lobster";
      width: 94vw;
      margin: auto;
      border-radius: 50px;
      padding: 3.3vw 0;
      margin-bottom: 3.7vw;
      cursor: pointer;
      &:hover {
        .Questions__title {
          color: #133e13;
        }
      }
      @media @desktop {
      }

      &:focus {
        cursor: default;
        .Questions__title {
          color: #133e13;
          font-size: 6.8vw;
        }
        p {
          height: auto;
          margin-top: 5.9vw;
          padding-bottom: 1vw;
        }
      }
    }
    p {
      height: 0;
      overflow: hidden;
      font-family: Roboto;
      padding: 0 7vw;
      font-size: 3.9vw;
      margin-top: 0;
      padding-bottom: 0;
      @media @desktop {
      }
    }
  }
}
</style>
