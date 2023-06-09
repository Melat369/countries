<script setup>
import Header from './Header.vue'
import Main from './Main.vue'
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
const { result } = useQuery(gql`
query MyQuery {
  countries {
    name
    emoji
    capital

  }
}
    `)
</script>

<template>
  <Header/>
  <Main/>
  
  </template>

