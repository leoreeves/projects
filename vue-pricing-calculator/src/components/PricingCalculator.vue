<template>
  <div>
    <div>
      <input type="number" placeholder="Reward (£)" step="0.01" v-model.number="reward">
      <input type="number" placeholder="Number of places" v-model.number="places">
      <input type="number" placeholder="Time to complete study (minutes)" v-model.number="time">
    </div>
    <div>
      <p><span>Total cost: </span>£{{ calculateTotalCost }}</p>
      <p><span>Reward per hour: </span>£{{ calculateRewardPerHour }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PricingCalculator',
  props: {
    feesPercentage: Number,
    vatPercentage: Number,
  },
  data () {
    return {
      reward: '',
      places: '',
      time: '',
    }
  },
  computed: {
    calculateTotalCost() {
      if (this.reward && this.places) {
        const cost = this.reward * this.places;
        const additionalFees = cost * this.feesPercentage;
        const vat = additionalFees * this.vatPercentage;
        return (Math.ceil((cost + additionalFees + vat) * 100) / 100).toFixed(2);
      }
    },
    calculateRewardPerHour() {
      if (this.reward && this.time) {
        return (Math.ceil((this.reward / this.time * 60) * 100) / 100).toFixed(2);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
