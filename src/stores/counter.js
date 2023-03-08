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
  let res = axios.get(`https://bk.utickets.uz/api/Events/GetSectors/${this.id}`)
    return res
    }
  },
})
