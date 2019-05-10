<template>
  <div id="app">
    <PricingCalculator
      feesPercentage="0.3"
      vatPercentage="0.2"
    />
  </div>
</template>

<script>
import PricingCalculator from './components/PricingCalculator.vue'

export default {
  name: 'app',
  components: {
    PricingCalculator
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
