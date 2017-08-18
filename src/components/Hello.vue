<template>
  <div class="count">
    <p> {{ count }} </p>
    <button @click="increment">+</button>
    <button @click="DECREMENT">-</button>
    <p>{{ message }}</p>
    <p>大于5才会显示：{{ gt5 }}</p>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapState([
        'count'
      ]),
      ...mapGetters([
        'gt5'
      ]),
      message () {
        return 'hello vuex!'
      }
    },
    methods: {
      ...mapMutations([
        'DECREMENT'
      ]),
      ...mapActions([
        'increment'
      ])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
