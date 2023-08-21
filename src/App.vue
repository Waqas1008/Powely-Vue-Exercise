<script setup lang="ts">
    import Header from './components/Header.vue'
    import FixedCosts from './components/FixedCosts.vue'
    import RecurrentCosts from './components/RecurrentCosts.vue'
    import NewCost from './components/NewCost.vue';
    import { useRef } from './main';
    import Axios from 'axios'
    import { watch } from 'vue';

    const [dataFixed, setDataFixed] = useRef()
    const [dataRecurring, setDataRecurring] = useRef()
    const [showFixedCost, setShowFixedCost] = useRef(false)
    const [showRecurringCost, setShowRecurringCost] = useRef(false)

    const button_add = (button_is_fixed: boolean) => {
        button_is_fixed && setShowFixedCost(true)
        !button_is_fixed && setShowRecurringCost(true)
    }

    const postData = () => {
        console.log("postData")

        Axios.post('https://jsonplaceholder.typicode.com/posts', {
            body: {
                fixed_cost: dataFixed,
                recurring_cost: dataRecurring
            }
        })
    }
</script>

<template>
    <Header />
    <main>
        <h2>
            OTHER CAPEX AND OPEX COSTS
        </h2>
        <NewCost :button_add="button_add" :set_data_fixed="setDataFixed" :set_data_recurring="setDataRecurring" />
        <FixedCosts v-if="showFixedCost" :button_remove="() => setShowFixedCost(false)" :data="dataFixed" />
        <RecurrentCosts v-if="showRecurringCost" :button_remove="() => setShowRecurringCost(false)" :data="dataRecurring" />
        <button v-if="dataFixed || dataRecurring" class="Button-Save" @click="postData">Save</button>
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
