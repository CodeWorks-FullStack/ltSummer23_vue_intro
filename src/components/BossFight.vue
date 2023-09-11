<template>
  <div class="boss-fight">
    <div class="my-4">
      <h1 class="bg-secondary" :class="healthClass">Health: <span>{{ health }}</span></h1>
      <button class="btn btn-dark" @click="attack()" :disabled="health == 0">Hit</button>
      <button class="btn btn-dark" @click="restart()" v-if="health == 0">Restart</button>
    </div>
  </div>
</template>


<script>
import { computed } from 'vue'
import { AppState } from '../AppState.js'
import { bossService } from '../services/BossService.js'

export default {
  setup() {
    const health = computed(() => AppState.health)

    return {
      health,
      healthClass: computed(() => {
        return {
          'text-success': health.value >= 75,
          'text-warning': health.value > 30 && health.value < 75,
          'text-danger': health.value <= 30,
          'ded': health.value == 0
        }
      }),
      attack() {
        bossService.attack()
      },
      restart() {
        bossService.restart()
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.ded {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 3em;
  background-color: teal !important;
}
</style>