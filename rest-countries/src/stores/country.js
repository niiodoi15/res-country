import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

export const useCountryStore = defineStore('country', () => {
    const countryData = ref([])
    const country = ref('')
    const searchTerm = ref('')
    
    const regions = ref('');
    const search = ref('')

    async function getCountry() {
        try {
            const res = await axios.get(`https://restcountries.com/v3.1/all/${country.value}`)
            countryData.value = res.data;

        } catch (error) {
            console.error(error);
        }
        country.value = ""
    }



    const filterCountry = computed(() => {
        const normalSearchTerm = searchTerm.value.toLowerCase().trim();

        if (normalSearchTerm === '') {
            return countryData.value;
        }else{
            return countryData.value.filter(country =>
                country.name.common.toLowerCase().includes(normalSearchTerm)
            );
        }

    })

    // const filteredCountry = computed(() => {
    //     console.log(regions.value)
    //     if (search.value) {
    //         if (regions.value) {
    //             return countryData.value.filter(country => country.region === regions.value && country.name.common.toLowerCase().includes(search.value.toLocaleLowerCase()));
    //         } else {
    //             return countryData.value.filter(country => country.name.common.toLowerCase().includes(search.value.toLocaleLowerCase()));
    //         }
    //     }
    //     else if (regions.value) {
    //         return countryData.value.filter(country => country.region === regions.value);
    //     }



    //     else {
    //         return countryData.value
    //     }


    // });

    return { countryData, country, regions, searchTerm, getCountry, filterCountry, }
})
