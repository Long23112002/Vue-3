<template>
    <div class="demo-slot">
        <tabs-vue title="Title Tab">
            <ul class="tabs-header">
                <li 
                   v-for="item in tabsHeader" 
                   v-bind:key="item.id"
                   v-on:click="setActiceTab(item.id)"
                   >{{ item.title }}
                </li>
            </ul>
            <div class="tabsconten tab1" v-if="tabActive === 0">
                <h1>Tab 1</h1>
                <p>Content tab 1</p>
            </div>
            <div class="tabsconten tab2" v-if="tabActive === 1">
                <h1>Tab 2</h1>
                <p>Content tab 2</p>
            </div>
            <div class="tabsconten tab3" v-if="tabActive === 2">
                <h1>Tab 3</h1>
                <p>Content tab 2</p>
            </div>
        </tabs-vue>
    </div>
</template>

<script>
import TabsVue from '@/components/Tabs.vue'

export default {
    name: 'demo-slot',

    components: {
        TabsVue
    },
    data() {
        return {
            tabsHeader: [
                { id: 1, title: 'Tab 1' },
                { id: 2, title: 'Tab 2' },
                { id: 3, title: 'Tab 3' },
            ],
            tabActive: 0
        }
    },
    methods:{
        setActiceTab(id){
            this.tabActive = id - 1
        }
    }
}
</script>

<style></style>