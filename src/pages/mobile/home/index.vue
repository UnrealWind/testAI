<template>
  <view class="content">

  </view>
</template>

<script setup>
import { useUserStore } from '@/store/user.js'
const user = useUserStore()
import request from '@/utils/request'
import {getAssetsFile} from "@/utils/pub-tool";

function getImg(url){
  if(systype.value == 'mp') return url
  return getAssetsFile(url)
}

onMounted(() => {

});

</script>


<style lang="scss" scoped>
  @import "index.scss";
</style>
