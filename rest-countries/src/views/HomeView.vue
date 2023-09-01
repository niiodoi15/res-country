<script setup>
import { RouterLink } from 'vue-router';
import CardComponent from '../components/CardComponent.vue';
import { ref } from 'vue';
import axios from 'axios';

import { useCountryStore } from '../stores/country.js'
const countryStore = useCountryStore()

const continents = ref(['Africa', 'Europe', 'America', 'Oceania', 'Asia'])

// countryStore.filterCountry()

</script>

<template>
    <div class="filter-item">
        <form action="">
            <div class="input-icons">
                <i class="fa fa-search icon"></i>
                <input class="input-field" type="text" v-model="countryStore.searchTerm" placeholder="Search for a country…">
            </div>
        </form>
        <div class="dropdown">
            <h3 class="dropdown-text">Filter by Region <i class="fa fa-arrow-down"></i></h3>
            <div class="dropdown-content">
              <div v-for="nations in continents"><p @click="countryStore.filteredCountry">{{ nations }}</p></div>
              
            </div>
        </div>
    </div>
    <CardComponent />
</template>

<style scoped>
.filter-item{
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    padding: 0 8%;
    gap: 10px;
}
    .input-icons i {
    position: absolute;
}

.input-icons {
    width: 100%;
    margin-bottom: 10px;
    border-radius: 5px;
    background: #2B3844;
    box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
    max-width: 480px;
}

.icon {
    padding: 12px;
    color: #fff;
    min-width: 50px;
    height: 20px;
    text-align: center;
    margin-top: 11px;
}

.input-field {
    margin-top: 10px;
    padding: 10px 5px 10px 40px;
    text-align: center;
    background-color: transparent;
    border: none;
    color: #FFF;
    font-size: 13px;
    font-weight: 400;
    line-height: 25px;
    text-align: start;
    }
    ::placeholder{
        color: #fff;
    }
    .dropdown {
      position: relative;
      /* display: inline-block; */
      max-width: 200px;
        width: 100%;
    }
    .dropdown-text{
        color: #FFF;
        padding: 10px 5px 10px 40px;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px; /* 142.857% */
        background: #2B3844;
        text-align: left;
    }
    .dropdown-content {
        max-width: 200px;
        width: 100%;
        display: none;
        position: absolute;
        border-radius: 5px;
        background: #2B3844;
        box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
        z-index: 1;
        padding: 15px;
    }
    
    .dropdown:hover .dropdown-content {
      display: block;
    }
    @media (min-width: 450px){
        .filter-item{
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: row;
        }
    }
</style>