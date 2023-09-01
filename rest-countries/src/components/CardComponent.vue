<script setup>
import { useCountryStore } from '../stores/country.js'
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue';
const router = useRouter()
const countryStore = useCountryStore()

onMounted(() => {
    countryStore.getCountry()
});

</script>

<template>
    <!-- {{ countryStore }} -->
    
    <div class="cards" v-if="countryStore.filterCountry.length > 0">
        <div class="card"
        @click="router.push({ name: 'countrydetails', params: { name: country.name.common } })"
         v-for="(country, index) in countryStore.countryData" :key="country.name.common">
            <div class="flag">
                <img :src="country.flags.png" :alt="country.flags.svg">
            </div>
            <div class="flag-details">
                <h3 class="country">{{ country.name.common }}</h3>
                <div class="c-details">
                    <p><b>Population:</b>  <span>{{ country.population }}</span></p>
                    <p><b>Region:</b>  <span>{{ country.region }}</span></p>
                    <p><b>Capital:</b>  <span>{{ country.capital?.[0] }}</span></p>
                </div>
            </div>
        </div>
    </div>
    <p v-else>No results</p>
</template>

<style scoped>
    .cards{
        padding: 7%;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 20px;
        place-items: center;
    }
    .flag{
       max-width: 267px;
        height: 160px; 
    }
    .flag img{
        width: 267px;
        height: 160px;
    }
    .country{
        color: #FFF;
        font-family: Nunito Sans;
        font-size: 22px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
    }
    .flag-details{
        width: 267px;
        padding: 24px;
        background-color: #2B3844;
        color: #fff;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
    .c-details{
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    p b{
        font-size: 14px;
        font-weight: 500;
    }
    @media (min-width: 625px){
        .cards{
        padding: 7%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        place-items: center;
        /* grid-gap: 20px; */
    }
    }
    @media (min-width: 768px){
        .cards{
        padding: 7%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        /* grid-gap: 20px; */
    }
    }
</style>