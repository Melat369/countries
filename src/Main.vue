<script>
const { result } ;
    </script>
<template>
<div class="grid grid-cols-4 gap-3 bg-[#272727] rounded-md">
    <ul class="">
  <li v-for="cntry of result.countries" class="text-xl">
  <h1>Name:  {{ cntry.emoji }} </h1>
  <h1>Capital: {{ cntry.capital }}</h1> 
  <h1>State{{cntry.states}}</h1>
</li>
</ul>

</div>
  </template>
  
  <script>
  </script>
  
  <style scoped>
  </style>
  