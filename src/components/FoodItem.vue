<template>
  <div class="card">
    <img :src="foodItem.img" alt="">
    <div class="card-body">
      <p>{{ foodItem.name }} <b>{{ foodItem.cost }}</b></p>
    </div>

  </div>
</template>


<script>
export default {

  props: {
    foodItem: { type: Object, required: true }
  },


  setup() {

    function doThing(thing) {
      console.log(thing)
    }

    doThing(7)
    doThing({ name: 'bob' })



    return {



    }
  }
}
</script>


<style lang="scss" scoped></style>