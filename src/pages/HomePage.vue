<template>
  <section class="home-page">

    <BossFight />


    <div class="container-fluid">
      <div class="row">
        <!-- v-for === foodItems.forEach -->
        <div class="col-4" v-for="i in foodItems" :key="i.id">
          <FoodItem :foodItem="i" />
        </div>
      </div>
    </div>


    <div class="cats">

      <div class="cat" v-for="cat in cats" :key="cat.name">
        {{ cat.name }}
      </div>

    </div>




  </section>
</template>

<script>
import { computed } from 'vue';
import { AppState } from '../AppState.js';


export default {
  setup() {

    return {
      foodItems: computed(() => AppState.foodItems),
      cats: [{ name: 'Felix' }, { name: 'Garfield' }, { name: 'Sylvester' }]
    }

  }
}
</script>

<style scoped lang="scss"></style>
