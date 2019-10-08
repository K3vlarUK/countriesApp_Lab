import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      allCountries: [],
      selectedCountry: ""
    },
    mounted(){
      this.fetchCountry();
    },
    computed: {
      totalPopulation: function() {
        return this.allCountries.reduce((runningTotal, country) => {
          return runningTotal + country.population;
        }, 0)
      }
    },
    methods: {
      fetchCountry: function () {
        const request = fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(data => this.allCountries = data)
      },
    }
  })
});
