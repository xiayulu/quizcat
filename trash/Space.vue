<script setup lang="ts">
import Star from '@/components/Star.vue';
import Galaxy from '@/components/Galaxy.vue';
import SpaceHeader from "@/components/SpaceHeader.vue"
</script>


<template>
  <SpaceHeader></SpaceHeader>
  <div class="space-box">
    <div class="container space">
      <Galaxy name="温柔地球">
        <Star icon="/icons/yang.webp" name="作业喵" bgColor="bg-grey" href="/exs"></Star>
        <Star icon="/icons/gou.webp" name="面试喵" bgColor="bg-brown" href="/interviews"></Star>
        <Star icon="/icons/tu.webp" name="编程喵" bgColor="bg-pink" href="/play"></Star>
        <Star icon="https://pic.imgdb.cn/item/6382f74d16f2c2beb1620bda.png" name="喵学堂" bgColor="bg-pink"
          href="/schools">
        </Star>
      </Galaxy>
    </div>
  </div>
</template>
