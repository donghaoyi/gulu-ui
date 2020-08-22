<template>
    <div>
        <div class="topnav">
            <div class="logo">LOGO</div>
            <div class="menu">
                <ul>
                    <li>菜单 1</li>
                    <li>菜单 2</li>
                </ul>
            </div>
        </div>
        <div class="banner">
            <h1>轱辘UI</h1>
            <h3>一个厉害的、UI框架</h3>
            <p class="actions">
                <a href="">GitHub</a>
                <a href="">开始</a>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    name:'Home'
}
</script>
<style lang="scss" scoped>
    .topnav{
        display: flex;
        padding: 16px;
        background-color: pink;
        > .logo{
            max-width: 6em;
            margin-right: auto;
        }
        > .menu{
            display: flex;
            flex-wrap: nowrap;
            white-space: nowrap;
            > li{
                margin: 0 1em;
            }
        }
    }
</style>