<template>
  <div>
    <div>
      导航栏 | 
      <router-link to="/">Hao</router-link> |
      <router-link to="xxx">xxx</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: "App",
};
</script>
