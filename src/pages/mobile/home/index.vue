<template>
  <view class="content">
    <div class="model-front"></div>
    <div class="ai-btn"> <img mode="widthFix" src="@/static/img/button.png"/> </div>
    <img mode="widthFix" src="@/static/img/bg.png" />
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
  .content {
    width: 100vw;
    height: 100vh;
    position: relative;
    .model-front {
      width: 100%;
      height: 100%;
      position: absolute;
      overflow-y: scroll;
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(5px);
    }
    >image {
      width: 100%;
      height: 100%;
    }
    .ai-btn {
      width: 120px;
      height: 120px;
      position: absolute;
      bottom: 0px;
      right: 10px;
      image {
        width: 100%;
        height: 100%;
      }
    }
  }

</style>
