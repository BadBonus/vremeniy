<template>
  <div class="TournamentsWinners">
    <Splicer value="Розыгрыши и победители" />
  </div>
</template>

<script>
import Splicer from "./Splicer";

export default {
  name: "TournamentsWinners",
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
  .TournamentsWinners {
    @media @desktop {
    }
  }
}

.TournamentsWinners {
  @media @desktop {
  }
}
</style>
