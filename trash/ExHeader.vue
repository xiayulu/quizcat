<script setup lang="ts">
import UserCut from './user/UserDrop.vue';
</script>

<template>
  <header>
    <div class="container">
      <h1 class="logo">
        <RouterLink to="/exs">作业喵</RouterLink>
      </h1>
      <div class="info">
        <UserCut></UserCut>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  background-color: var(--bg-base2);

  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    font-size: 36px;
    margin: 0 0 0 40px;
    padding: 8px 0 12px;
    color: var(--fg-primary);
    text-align: center;
  }

  .info {
    margin-right: 40px;
    margin-left: auto;
  }
}
</style>