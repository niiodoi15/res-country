<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue';

const lightMode = ref(true);

function togglelightMode() {
  lightMode.value = !lightMode.value; 
}
</script>

<template>
  <div class="light" :class="{ 'light-mode': lightMode }">
    <div class="header">
          <h3 class="heading">Where in the world?</h3>
          <button @click.prevent="togglelightMode" class="btn"><i class="fas fa-sun-o"></i> Light Mode</button>
      </div>

    <RouterView />
  </div>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  /* background-color: #fff; */
}
.light-mode{
  background: #202C36;
  color: #fff;
  
}
.header{
        background: #2B3844;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #FFF;
        padding: 23px 8%;
    }
    .heading{
        font-size: 24px;
        font-weight: 800;
    }
    .btn{
        background-color: transparent;
        border: none;
        color: #FFF;
        font-size: 16px;
        font-weight: 600;
    }
</style>
