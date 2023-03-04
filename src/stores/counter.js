import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'


export const useCounterStore = defineStore('counter', {
  state: () => {
    return{
      items:[]
    }
  },

  actions: {
    increment() {
  let res = axios.get(`https://bk.utickets.uz/api/Events/GetSectors/232dd89e-90c6-4c53-802d-fd93094dbdba`)
    return res
    }
  },
})
