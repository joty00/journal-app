<template>
  <button class="btn btn-primary" @click="goToDayBook">primary</button>
  <button class="btn btn-secondary">secondary</button>
  <button class="btn btn-success">success</button>
</template>

<script>
  export default {
    methods: {
      goToDayBook() {
        this.$router.push({name: 'no-entry'})
      }
    }
  }
</script>
