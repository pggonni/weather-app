<template>
  <form>
    <div>
      <label>City</label>
      <input v-model.trim="City">
    </div>
    <button type="submit">Go</button>
  </form>
    <div>
      <div>
        <p>Feels like</p>
        <p>{{ .feels_like }}</p>
      </div>
      <div>
        <p>Humidity</p>
        <p>{{ result.humidity }}</p>
      </div>
      <div>
        <p>Pressure</p>
        <p>{{ results.pressure }}</p>
      </div>
      <div>
        <p>Temperature</p>
        <p>{{ results.temp }}</p>
      </div>
      <div>
        <p>High</p>
        <p>{{ results.temp_max }}</p>
      </div>
      <div>
        <p>Low</p>
        <p>{{ results.temp_min }}</p>
      </div>
    </div>
</template>

<script>
const APIKEY = "key";

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
        `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${APIKEY}`
      );
      const { main } = await res.json();
      this.results = main;
    }
  }
}
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
