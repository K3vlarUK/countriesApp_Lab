import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      allCountries: [],
      selectedCountry: "",
      favouriteCountries: [{
          name: "",
          population: ""
        }
      ]
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
      saveFavouriteCountry: function () {
        this.favouriteCountries.push({
          name: this.selectedCountry.name,
          population: this.selectedCountry.population
        })
      }
    }
  })
});
