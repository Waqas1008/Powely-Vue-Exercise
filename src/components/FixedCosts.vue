<script setup lang="ts">
    const props = defineProps({
        button_remove: {
            type: Function,
            required: true
        },
        data: {
            type: Object,
            required: true
        }
    })
</script>

<template>
    <table>
        <thead>
            <tr>
                <td>FIXED COSTS [CAPEX]</td>
                <td>CATEGORY</td>
                <td>COST</td>
                <td colspan="4">STARTING</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    {{ props.data.costName }}
                </td>
                <td>
                    <select :value="props.data.category">
                        <option>Above Ground</option>
                        <option>Below Ground</option>
                        <option>Marketing</option>
                        <option>People</option>
                        <option>Operations</option>
                        <option>Other</option>
                    </select>
                </td>
                <td>
                    <input type="text" :value="props.data.cost" />
                    <span>EUR</span>
                </td>
                <td colspan="2">
                    <select :value="props.data.frequency">
                        <option>Hourly</option>
                        <option>Daily</option>
                        <option>Weekly</option>
                        <option>Monthly</option>
                        <option>Quarerly</option>
                        <option>Annualy</option>
                    </select>
                </td>
                <td>
                </td>
                <td>
                    <button class="Button-Remove" @click="props.button_remove">REMOVE</button>
                </td>
            </tr>
            <tr>
                <td></td>
                <td colspan="2">DESCRIPTION</td>
                <td colspan="4">After COD</td>
            </tr>
            <tr>
                <td></td>
                <td colspan="5">
                    <textarea rows="3" placeholder="Cost details..."></textarea>
                </td>
                <td></td>
            </tr>
        </tbody>
    </table>
</template>

<style lang="scss" scoped>
    table {
        width: 100%;
        border-collapse: collapse;

        thead td {
            font-weight: bold;
            padding: 10px;
            //border: 1px solid lightblue;
            color: black;
        }

        tbody {
            background: #F7F8FD;

            td {
                padding: 10px;
                //border: 1px solid lightgray;

                input[type=text] {
                    padding-right: 50px;
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