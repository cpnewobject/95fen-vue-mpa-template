<template>
  <div class="page-content">
    模板下载成功
    <Toast ref="toast"></Toast>
  </div>
</template>

<script>

import parseToken from './lib/parseToken.js';
import fetchAccessToken from './lib/fetchAccessToken';
import track from './lib/track.js';
import trackHref from './lib/trackHref.js';
import Toast from './commponents/Toast';

export default {
  name: 'app',
  data(){
    return {
    }
  },
  http: {
    headers: {
      'fen95-host': 'default',
    }
  },
  components:{
    Toast,
  },
  created(){
  },
  mounted(){
  },
  filters:{
  },
  computed:{
  },
  watch:{
  },
  events:{
  },
  methods:{
  }
}
</script>

<style lang="scss">
  @import "styles/index.scss";
</style>
