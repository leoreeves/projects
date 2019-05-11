<template>
  <section class="pricing-calculator-container">
    <div class="pricing-inputs-container">
      <h1>Study Pricing Calculator</h1>
      <div class="input-container">
        <label for="reward">Participant reward (£)</label>
        <input type="number" placeholder="Enter amount" step="0.01" id="reward" v-model.number="reward">
      </div>
      <div class="input-container">
        <label for="places">Total participants</label>
        <input type="number" placeholder="Enter amount" id="places" v-model.number="places">
      </div>
      <div class="input-container">
        <label for="time">Time to complete (in minutes)</label>
        <input type="number" placeholder="Enter amount" id="time" v-model.number="time">
      </div>
    </div>
    <div class="results-container">
      <p class="result">Total cost: <span class="amount" v-if="calculateTotalCost">£{{ calculateTotalCost }}</span></p>
      <p class="result">Reward per hour: <span class="amount" v-if="calculateRewardPerHour">£{{ calculateRewardPerHour }}</span></p>
      <small class="error" v-if="calculateRewardPerHour < 5">Reward per hour is less than £5, please amend your amounts.</small>
    </div>
  </section>
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
        const totalCost = (Math.ceil((cost + additionalFees + vat) * 100) / 100).toFixed(2);
        return this.addCommasToAmount(totalCost);
      }
    },
    calculateRewardPerHour() {
      if (this.reward && this.time) {
        const totalRewardPerHour = (Math.ceil((this.reward / this.time * 60) * 100) / 100).toFixed(2);
        return this.addCommasToAmount(totalRewardPerHour);
      }
    }
  },
  methods: {
    addCommasToAmount(amount) {
      const addCommasRegex = /(\d)(?=(\d{3})+(?!\d))/g;
      return amount.toString().replace(addCommasRegex, '$1,');
    }
  }
}
</script>

<style lang="scss" scoped>
$base: 16px;

.pricing-calculator-container {
  width: 100%;
  max-width: 550px;
  border: 1px solid lightgray;
  border-radius: $base / 4;
  padding: $base * 2;
  margin: $base;
  text-align: left;
  background: #fff;

  @media screen and (max-width: 720px) {
    min-width: 200px;
    max-width: 60%;
  }

  .error {
    color: lightcoral;
  }

  .pricing-inputs-container {
    display: flex;
    flex-direction: column;

    .input-container {
      display: flex;
      flex-direction: column;

      label {
        font-weight: 500;
      }
    }

    input {
      margin: $base 0;
      padding: $base / 2 $base;
      border: 1px solid lightgray;
      border-radius: $base / 4;
      outline: 0;

      &:focus {
        border-color: lightblue;
      }
    }
  }

  .results-container {
    .result {
      display: flex;
      font-size: 1.1em;
      margin: $base 0;
    }

    .amount {
      margin-left: auto;
    }
  }
}
</style>
