<template>
    <div class="entry-list-container">
        <div class="px-2 pt-2">
            <input 
              v-model="term"
              type="text"
              class="form-control"
              placeholder="Buscar entradas">
        </div>
        <div class="mt-2 d-flex flex-column">
            <button class="btn btn-primary mx-3"
                    @click="$router.push({name: 'entry', params: {id: 'new'}})">
                <i class="fa fa-plus-circle"></i>
                Nueva Entrada
            </button>
        </div>
        <div class="entry-scrollarea"> 
              
            <Entry 
              v-for="entry in entriesByTerm"
              :key="entry.id" 
              :item="entry"
            />
              
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters } from 'vuex'

    export default {
        components: {
            Entry: defineAsyncComponent(() => import('./Entry.vue'))
        },
        computed: {
            ...mapGetters('journal', ['getEntriesByTerm']),
            entriesByTerm() {
                return this.getEntriesByTerm (this.term)
            }
        },
        data() {
            return {
                term: ''
            }
        }
    }
</script>

<style scoped>
    .entry-list-container {
        border-right: 1px solid #123e50;
        height: calc( 100vh - 56px );
    }
    .entry-scrollarea {
        height: calc( 100vh - 102px );
        overflow: scroll;
    }

</style>