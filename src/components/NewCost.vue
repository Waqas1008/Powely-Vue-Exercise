<script setup lang="ts">
    import { useRef } from '@/main';
    import { ref } from 'vue';

    const props = defineProps({
        button_add: {
            type: Function,
            required: true
        },
        set_data_fixed: {
            type: Function,
            required: true
        },
        set_data_recurring: {
            type: Function,
            required: true
        },
        show_fixed: {
            type: Boolean,
            required: true
        },
        show_recurring: {
            type: Boolean,
            required: true
        }
    })

    const costName = ref()
    const category = ref("Above Ground")
    const cost = ref()
    const [buttonFixed, setButtonFixed] = useRef(true)
    const frequency = ref("Annualy")

    const setData = (button_fixed: boolean) => {
        if (buttonFixed.value) {
            props.set_data_fixed({
                costName: costName.value,
                category: category.value,
                cost: cost.value,
                buttonFixed: buttonFixed.value,
                frequency: frequency.value
            })
        }
        else {
            props.set_data_recurring({
                costName: costName.value,
                category: category.value,
                cost: cost.value,
                buttonFixed: buttonFixed.value,
                frequency: frequency.value
            })
        }

        props.button_add(button_fixed)
    }
</script>

<template>
    <table>
        <thead>
            <tr>
                <td>NEW COST NAME</td>
                <td>CATEGORY</td>
                <td>COST</td>
                <td>TYPE OF COST</td>
                <td colspan="2">FREQUENCY</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <input type="text" v-model="costName" />
                </td>
                <td>
                    <select v-model="category">
                        <option>Above Ground</option>
                        <option>Below Ground</option>
                        <option>Marketing</option>
                        <option>People</option>
                        <option>Operations</option>
                        <option>Other</option>
                    </select>
                    <div>Above ground</div>
                    <div>Below ground</div>
                    <div>Marketing</div>
                    <div>People</div>
                    <div>Operations</div>
                    <div>Other</div>
                </td>
                <td>
                    <input type="text" v-model="cost" />
                    <span>EUR</span>
                </td>
                <td colspan="2">
                    <button :class="buttonFixed ? 'Button-Selected' : 'Button-Select'" @click="() => setButtonFixed(true)">FIXED</button>
                    <button :class="!buttonFixed ? 'Button-Selected' : 'Button-Select'" @click="() => setButtonFixed(false)">RECURRENT</button>
                </td>
                <td>
                    <select v-model="frequency">
                        <option>Hourly</option>
                        <option>Daily</option>
                        <option>Weekly</option>
                        <option>Monthly</option>
                        <option>Quarerly</option>
                        <option>Annualy</option>
                    </select>
                    <div>Hourly</div>
                    <div>Daily</div>
                    <div>Weekly</div>
                    <div>Monthly</div>
                    <div>Quarerly</div>
                    <div>Annualy</div>
                </td>
                <td>
                    <button class="Button-Add" @click="() => setData(buttonFixed)">{{ (show_fixed || show_recurring) ? 'EDIT' : "ADD" }}</button>
                </td>
            </tr>
            <tr>
                <td>RECOMMENED COSTS</td>
            </tr>
            <tr>
                <td></td>
            </tr>
        </tbody>
    </table>
</template>

<style lang="scss" scoped>
    table {
        width: 100%;
        border-collapse: collapse;
        background: beige;

        thead td {
            font-weight: bold;
            padding: 10px;
            //border: 1px solid lightblue;
            color: black;
        }

        tbody {


            td {
                padding: 10px;
                //border: 1px solid lightgray;
                vertical-align: top;

                input[type=text] {
                    padding-right: 50px;
                }

                div {
                    margin-top: 5px;
                    padding: 0px 15px;
                    text-align: center;
                }

                span {
                    background: white;
                    padding: 8px;
                    margin-left: -50px;
                }

                &:first-child {
                    font-size: 16px;
                    font-weight: bold;
                    color: #AFB6C8;
                }
            }
        }
    }
</style>