<script setup lang="ts">
    const props = defineProps({
        button_remove: {
            type: Function,
            required: true
        }
    })
</script>

<template>
    <table>
        <thead>
            <tr>
                <td>RECURRENT COSTS [OPEX]</td>
                <td>CATEGORY</td>
                <td>COST</td>
                <td>STARTING</td>
                <td colspan="4">FREQUENCY</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    HR & PERSONNEL
                </td>
                <td>
                    <select>
                        <option>People</option>
                        <option>Test</option>
                    </select>
                </td>
                <td>
                    <input type="text" />
                    <span>EUR</span>
                </td>
                <td colspan="2">
                    <select>
                        <option>After FID</option>
                        <option>Before FID</option>
                    </select>
                </td>
                <td>
                    <select>
                        <option>Annualy</option>
                        <option>Monthly</option>
                    </select>
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
                    max-width: 250px;
                }
            }
        }
    }
</style>