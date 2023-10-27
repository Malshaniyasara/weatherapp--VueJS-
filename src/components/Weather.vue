<template>
    <div class="container p-0">
      <div class="d-flex">
        <div class="card main-div w-100">
          <div class="p-3">
            <div class="image-container">
              <div class="overlay">
                <p class="date-time">{{ date }} {{ time }}</p>
              </div>
            </div>
            <h2 class="mb-1 day">Today</h2>
            <p class="text-light date mb-0">
             2023/10/27
            </p>
            <h2 class="place">
              <i class="fa fa-location"></i>
            
              <small>hambantota,Sri lanka</small>
            </h2><br>
            <div class="temp">
              <h1 class="weather-temp">29{{ temperature }}&deg;</h1>
              <h2 class="text-light">{{ description }}</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="card card-2 w-100">
        <table class="m-4">
          <tbody>
            <tr>
              <th>Sea Level</th>
              <td>{{ seaLevel }}</td>
            </tr>
          </tbody>
        </table>
        <DaysWeather></DaysWeather>
        <div id="div_Form" class="d-flex m-3 justify-content-center">
          <form @submit.prevent="searchWeather">
            <input type="button" value="Change Location" class="btn change-btn btn-primary" />
           
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import DaysWeather from "./DaysWeather.vue";
  
  export default {
    name: "myWeather",
    components: {
      DaysWeather,
    },
    data() {
      return {
        temperature: null,
        description: null,
        iconUrl: null,
        time: null,
        name: null,
        date: null,
        Country: null,
        seaLevel: null,
        city: "",
        monthNames: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
      };
    },
    async created() {
      this.searchWeather();
    },
    methods: {
      async searchWeather() {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid={API key}`
          );
  
          const weatherData = response.data;
          this.temperature = Math.round(weatherData.main.temp);
          this.description = weatherData.weather[0].description;
          this.name = weatherData.name;
          this.iconUrl = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
  
          const d = new Date();
          this.date = d.getDate() + " " + this.monthNames[d.getMonth()] + " " + d.getFullYear();
          this.time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
          this.Country = weatherData.sys.country;
          this.seaLevel = weatherData.main.sea_level;
        } catch (error) {
          console.error("Error:", error);
        }
      },
    },
  };
  </script>
  
  
  <style scoped>
  .image-container {
    position: relative;
    display: inline-block;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    padding: 5px;
  }
  
  .date-time {
    margin: 0;
  }
  
 
  body {
    background-color: #343d4b;
  }
  .weather-temp {
    margin: 0;
    font-weight: 700;
    font-size: 4rem;
  }
  h2.mb-1.day {
    font-size: 3rem;
    font-weight: 400;
  }
  .main-div {
    border-radius: 20px;
    color: #9b8888;
    background-image: url("../img1.jpg");
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay;
    background-color: rgb(23, 96, 72);
    background-repeat: no-repeat;
  }
  .weather-temp {
    position: absolute;
    bottom: 0;
  }
  .main-div:hover {
    transform: scale(1.1);
    transition: transform 0.5s ease;
    z-index: 1;
  }
  .card-2 {
    background-color: #212730;
    border-radius: 20px;
  }
  .card-details {
    margin-left: 19px;
  }
  .h1_left {
    position: absolute;
    bottom: 25px;
    left: 16px;
    font-size: 3vw;
    line-height: 1.2;
  }
  .h3_left {
    position: absolute;
    left: 16px;
    font-size: 2vw;
    line-height: 0.5;
  }
  .h3_left small {
    font-size: 1rem;
  }
  table {
    position: relative;
    left: 15px;
    border-collapse: separate;
    border-spacing: 15px;
    width: 85%;
    text-align: left;
    max-width: 600px;
    margin: 0 auto;
  }
  th,
  td {
    font-size: 18px;
    color: #e9e3e3;
  }
  td {
    text-align: right;
  }
  table,
  tr:hover {
    color: aqua;
  }
  .change-btn {
    background-image: linear-gradient(to right, cyan, magenta);
  }
  .change-btn:hover {
    transform: scale(0.9);
  }
  </style>
  