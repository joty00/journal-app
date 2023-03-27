<template>
  <div class="d-flex text-success">
    <h1>Welcome to DayBook</h1>
    <button class="btn btn-primary" @click="goToDayBook">Let's Start</button>
  </div>
  
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
