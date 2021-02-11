<template>
  <div class="MainBlock">
      <Splicer value='Еженедельный розыгрыш призов' />
  </div>
</template>

<script>
import Splicer from './Splicer'

export default {
  name: "MainBlock",
  components:{
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
  .MainBlock {
    @media @desktop {
    }
  }
}

.MainBlock {
  @media @desktop {
    }
}
</style>
