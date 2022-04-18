<template>
  <div id="app">
    <PricingCalculator
      v-bind:feesPercentage="0.3"
      v-bind:vatPercentage="0.2"
    />
  </div>
</template>

<script>
import PricingCalculator from './components/PricingCalculator.vue';

export default {
  name: 'app',
  components: {
    PricingCalculator
  }
}
</script>

<style lang="scss">
html, body {
  padding: 0;
  margin: 0;
  height: 100%;
}

#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #e1eef8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
