<template>
  <form @submit.prevent="getWeather">
    <div>
      <label>City</label>
      <input v-model.trim="city">
    </div>
    <button type="submit">Go</button>
  </form>
    <div>
      <div>
        <p>Feels like</p>
        <p>{{ this.feelsLike }}</p>
      </div>
      <div>
        <p>Humidity</p>
        <p>{{ results.humidity }}</p>
      </div>
      <div>
        <p>Pressure</p>
        <p>{{ results.pressure }}</p>
      </div>
      <div>
        <p>Temperature</p>
        <p>{{ this.temp }}</p>
      </div>
      <div>
        <p>High</p>
        <p>{{ this.tempMax }}</p>
      </div>
      <div>
        <p>Low</p>
        <p>{{ this.tempMin }}</p>
      </div>
    </div>
</template>

<script>
/* const dotenv = require('dotenv').config();

const db = require('db')
db.connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
}) */

const APIKEY = "b2e78c921b5d40100a642a48abf72552";

export default {
  name: 'App',
  components: {
    
  },
  data() {
    return {
      city: "",
      results: {}
    };
  },
  methods: {
    async getWeather() {
      if (!this.city) {
        return
      } 
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${APIKEY}&units=metric`
      );
      const { main } = await res.json();
      this.results = main;
      this.feelsLike = this.results.feels_like.toFixed(0);
      this.temp = this.results.temp.toFixed(0);
      this.tempMax = this.results.temp_max.toFixed(0);
      this.tempMin = this.results.temp_min.toFixed(0);
    }
  }
}
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
