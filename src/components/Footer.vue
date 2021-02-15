<template>
  <footer class="Footer">
    <div class="Footer__content">
      <div class="Footer__textBlock">
        <b
          >Контактный телефон по вопросам проведения Рекламной <br />
          игры +375 (44) 583 76 93</b
        >
        <br />
        <b>Время работы:</b> с 10.00 до 18.00 понедельник-суббота <br />
        <b>E-mail:</b> promo@nestle-cereals.by <br /><br /><b>
          Рекламная игра «Завтракай и выигрывай!». <br />
          Сроки проведения рекламной игры</b
        >
        <br />(с учетом выдачи призов и публикации результатов): <br />
        1 марта 2021 г. – 22 мая 2021 г. <br />
        Свидетельство о государственной регистрации №3932 от <br />
        02.02.2021 г., <br />
        выданное Министерством антимонопольного регулирования <br />
        и торговли Республики Беларусь. <br />
        <b>Организатор:</b> ООО «Проспектпресс», УНП 101520868 <br />
        <br />
        <b>
          ®Владелец товарных знаков: <br />
          Société des Produits Nestlé S.A. (Швейцария)</b
        >
      </div>
      <img src="../assets/footer_boxes.png" alt="footer_boxes" />
      <div class="Footer__linksToDocs">
        <a href="#" target="_blank">Политика конфиденциальности и cookies</a>
        <a href="#" target="_blank">Политика в отношении персональных данных</a>
      </div>
    </div>
    <!-- <Winners v-if="isOpenWinners" /> -->
  </footer>
</template>

<script>
import Winners from "./Winners";
export default {
  name: "Footer",
  components: {
    Winners,
  },
  data() {
    return {
      isOpenWinners: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../styles/media.less";
@import "../styles/variables.less";

@-moz-document url-prefix() {
}

.Footer {
  color: @main_color1;
  text-align: center;
  font-size: 3.25vw;
  padding-bottom: 5.5vw;
  .bcgImage("../assets/footerDecor_m.png");
  background-position: bottom;
  background-size: contain;

  img {
    width: 94vw;
    display: block;
    margin: auto;
    margin-bottom: 3vw;
  }
  &__content {
    margin-top: 11.1vw;
  }
  img {
    margin-top: 10.1vw;
  }
  &__linksToDocs {
    a {
      color: @main_color2;
      display: block;
      text-align: center;
      text-decoration: underline;
      font-size: 3.2vw;
      &:first-child {
        margin-bottom: 3vw;
      }
    }
  }
}
</style>
