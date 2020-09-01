<template>
<div>
    <Switch v-model:value="bool" />
</div>
</template>

<script>
import Switch from "../lib/Switch.vue";
import {
    ref
} from "vue";
export default {
    name: "",
    components: {
        Switch,
    },
    setup() {
        const bool = ref(false);
        return {
            bool
        };
    },
};
</script>
