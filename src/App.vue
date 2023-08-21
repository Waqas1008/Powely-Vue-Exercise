<script setup lang="ts">
    import Header from './components/Header.vue'
    import FixedCosts from './components/FixedCosts.vue'
    import RecurrentCosts from './components/RecurrentCosts.vue'
    import NewCost from './components/NewCost.vue';
    import { useRef } from './main';
    import { watch } from 'vue';

    const [data, setData] = useRef()
    const [showFixedCost, setShowFixedCost] = useRef(false)
    const [showRecurringCost, setShowRecurringCost] = useRef(false)

    const button_add = (button_is_fixed: boolean) => {
        button_is_fixed && setShowFixedCost(true)
        !button_is_fixed && setShowRecurringCost(true)
    }

    watch(data, () => {
        console.log(data.value)
    })

</script>

<template>
    <Header />
    <main>
        <h2>
            OTHER CAPEX AND OPEX COSTS
        </h2>
        <NewCost :button_add="button_add" :set_data="setData" />
        <FixedCosts v-if="showFixedCost" :button_remove="() => setShowFixedCost(false)" :data="data" />
        <RecurrentCosts v-if="showRecurringCost" :button_remove="() => setShowRecurringCost(false)" />
    </main>
</template>

<style scoped lang="scss">
    main {
        display: flex;
        flex-direction: column;
        gap: 50px;
        background: #DCF9E7;
        padding: 50px;
        min-height: calc(100% - 58px);

        h2 {
            font-size: 16px;
        }
    }
</style>
