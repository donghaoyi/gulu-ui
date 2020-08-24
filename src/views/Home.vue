<template>
<div>
    <Topnav />
    <div class="banner">
        <h1>轱辘UI</h1>
        <h3>一个厉害的、UI框架</h3>
        <p class="actions">
            <a href>GitHub</a>
            <a href>开始</a>
        </p>
    </div>
</div>
</template>

<script>
import Topnav from "../components/topnav.vue";
export default {
    name: "Home",
    components: {
        Topnav,
    },
};
</script>

<style lang="scss" scoped>

</style>
