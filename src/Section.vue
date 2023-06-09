<template>
    <section>
      <h2>{{ title }}</h2>
      <!-- Add your section content here -->
    </section>
  </template>
  
  <script>
  export default {
    name: 'Section',
    props: {
      title: {
        type: String,
        required: true
      }
    },
    // Add your component logic here if needed
  }
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  </style>
  