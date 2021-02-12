<template>
  <footer class="Footer">
    <div class="Footer__content">

      <div class="textblock">
        <span>
          <b>Наименование рекламной акции</b>
          <br class="no-desktop" />
          «Вернем до 20 рублей на телефон <br class="no-desktop" />
          за покупку трусиков Pampers» <br />
          ООО "ЭфСиБи Бел", <br class="no-desktop" />
          УНП 193185741.
        </span>
        <br />
        <br />

        <span>
          <b> Телефон горячей линии:</b> <br class="no-desktop" />
          с 01.02.2021 по 31.03.2021 года <br class="no-desktop" />
          (включительно): <br class="no-desktop" />
          +375 29 608 19 49.<br />
          <b>Время работы:</b> с 10:00 до 12:00 <br class="no-desktop" />
          в будние дни.</span
        >
      </div>
    </div>
    <button class="btn" @click="isOpenWinners = !isOpenWinners">
      Победители рекламной игры "Живи моментом с Always"
    </button>
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

@-moz-document url-prefix() {
}

.Footer {

}
</style>
