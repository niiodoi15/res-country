<script setup>
import { useCountryStore } from '../stores/country.js'
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue'
import axios from 'axios'

const countryStore = useCountryStore()
const router = useRouter()


// countryStore.updateCountry(router.params.name);


onMounted(() => {
    countryStore.getCountry()
})

</script>

<template>
    <div class="buttons">
        <button @click="router.push({ name: 'home' })" class="btn"><i class="fa fa-arrow-left"></i> Back</button>
    </div>
    <div class="container">
        <img :src="countryStore.countryData[0]?.flags.png" :alt="countryStore.countryData[0]?.name.common" class="flag">
        <div class="details">
        <h2>{{ countryStore.countryData[0]?.name.common }}</h2>
        <p><strong>Native Name:</strong> {{ countryStore.countryData[0]?.name.nativeName }}</p>
        <p><strong>Population:</strong> {{ countryStore.countryData[0]?.population }}</p>
        <p><strong>Region:</strong> {{ countryStore.countryData[0]?.region }}</p>
        <p><strong>Subregion:</strong> {{ countryStore.countryData[0]?.subregion }}</p>
        <p><strong>Capital:</strong> {{ countryStore.countryData[0]?.capital[0] }}</p>
        <p><strong>Top Level Domain:</strong> {{ countryStore.countryData[0]?.tld[0] }}</p>
        <p><strong>Border Countries:</strong></p>
        </div>
    </div>
    
</template>

<style scoped>
    .buttons{
        padding: 5% 10%;
    }
    .btn{
        border-radius: 2px;
        background: #2B3844;
        box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.29);
        color: #FFF;
        font-size: 14px;
        font-weight: 300;
        line-height: 20px;
        border: none;
        padding: 6px 23px;
    }
    .container{
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 5% 10%;
        /* height: 100vh; */
    }
@media (min-width: 695px) {
    .container{
        flex-direction: row;
        gap: 20px;
        padding: 5% 10%;
        /* height: 100vh; */
    }
}

</style>