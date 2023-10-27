<template>
  <div class="days-tab text-center">
    <div class="loading" v-if="loading">Loading...</div>
    <ul class="p-0" v-else>
      <li class="li_active" v-for="item in items" :key="item.id">
        <div class="py-3">{{ item.icon }}</div>
        <div class="py-3">{{ item.day }}</div>
        <div class="py-3">{{ item.temperature }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isLoading: true, 
      items: [], 
    };
  },
 
  created() {
   
    setTimeout(() => {
      this.items = [
        { id: 1, icon: 'icon1', day: 'FRIDAY', temperature: '31°C°' },
        { id: 2, icon: 'icon2', day: 'SATURDAY', temperature: '31°C' },
        { id: 3, icon: 'icon3', day: 'SUNDAY', temperature: '31°C' },
        { id: 4, icon: 'icon4', day: 'MONDAY', temperature: '30°C' },
      ];
      this.isLoading = false; 
    }, 2000); // Simulated delay (replace with actual data fetching)
  },
};

 </script>
 
 export default {
   name: 'App',
  
 }
 
 

 
 <style>
 .days-tab {
   width: 90%;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
   border-radius: 20px;
   width: 90%;
   margin: auto;
 }
 .loading {
   color: rgb(234, 228, 228);
 }
 ul {
   margin: 0;
   padding: 0; /* Add this to remove default padding */
 }
 li {
   display: inline-block;
   list-style: none;
   height: 100%;
   width: 21%;
   max-width: 21%;
   font-size: 1vw;
   line-height: 1.2;
 }
 span {
   display: block;
   margin-bottom: 5px;
   font: 100% sans-serif;
   height: 35px;
 }
 .li_active {
   background: #253d5c;
   color: #fff;
   border-radius: 10px;
   margin: 0.5rem;
   font-weight: 600;
 }
 .li_active:hover {
   transform: scale(1.2);
   transition: transform 0.1s ease;
 }
 .li_active_temp {
   display: inline-block;
   background-color: #222831;
   color: #0e0b0b;
   transition: background-color 0.5s;
   border-radius: 10px;
 }
 .li_active_temp:hover {
   transform: scale(1.2);
   transition: transform 0.1s ease;
   background: #fff;
   border-radius: 10px;
   color: #191a1f;
 }
</style>
