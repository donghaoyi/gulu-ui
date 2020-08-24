<template>
<div>
    <Topnav />
    <div class="banner">
        <h1>轱辘UI</h1>
        <h3>一个厉害的、UI框架</h3>
        <p class="actions">
            <a href="https://github.com/donghaoyi/gulu-ui">GitHub</a>
            <router-link to="/doc">开始</router-link>
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
.banner {
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: lightgreen;

    >.actions {
        padding: 8px 0;

        a {
            margin: 0 8px;
            background: #fff;
            display: inline-block;
            $h: 28px;
            height: $h;
            line-height: $h;
            border-radius: $h/2;
            padding: 0 8px;
        }
    }
}
</style>
