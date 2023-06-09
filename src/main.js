import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import  ApolloClient  from './ApolloClient'
import { DefaultApolloClient } from '@vue/apollo-composable'

createApp(App)
.provide(DefaultApolloClient,ApolloClient)
.mount('#app')


