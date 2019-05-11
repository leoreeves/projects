<template>
  <section class="pricing-calculator-container">
    <div class="pricing-inputs-container">
      <h1 class="heading-primary">Study Pricing Calculator</h1>
      <div class="input-container">
        <label for="reward">Participant reward</label>
        <span class="currency-symbol">£</span>
        <input
          type="number"
          placeholder="Enter amount"
          step="0.01"
          class="reward-input"
          id="reward"
          v-model.number="reward">
      </div>
      <div class="input-container">
        <label for="places">Total participants</label>
        <input
          type="number"
          placeholder="Enter amount"
          id="places"
          pattern="[0-9]"
          onkeypress="return !(event.charCode === 46)"
          step="1"
          v-model.number="places">
      </div>
      <div class="input-container">
        <label for="time">Time to complete (in minutes)</label>
        <input
          type="number"
          pattern="[0-9]"
          onkeypress="return !(event.charCode === 46)"
          placeholder="Enter amount"
          id="time"
          step="1"
          v-model.number="time">
      </div>
    </div>
    <div class="results-container">
      <p class="result">
        Total cost:
        <span class="amount amount-cost" v-if="calculateTotalCost">£{{ calculateTotalCost }}</span>
      </p>
      <p class="result">
        Reward per hour:
        <span class="amount amount-reward" v-if="calculateRewardPerHour">£{{ calculateRewardPerHour }}</span>
      </p>
      <small class="error" v-if="calculateRewardPerHour && calculateRewardPerHour < 5">
        Reward per hour is less than £5, please amend entered amounts.
      </small>
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
        const roundedTotalCost = (Math.ceil((cost + additionalFees + vat) * 100) / 100).toFixed(2);
        return this.addCommasToAmount(roundedTotalCost);
      } else {
        return '';
      }
    },
    calculateRewardPerHour() {
      if (this.reward && this.time) {
        const roundedTotalRewardPerHour = (Math.ceil((this.reward / this.time * 60) * 100) / 100).toFixed(2);
        return this.addCommasToAmount(roundedTotalRewardPerHour);
      } else {
        return '';
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
$border-color: #e3eaef;
$input-border-focused: #199dff;
$error-color: lightcoral;

.pricing-calculator-container {
  width: 100%;
  max-width: 550px;
  border: 1px solid $border-color;
  border-radius: $base / 2;
  padding: $base * 2;
  margin: $base;
  text-align: left;
  background: #fff;

  @media screen and (max-width: 720px) {
    min-width: 200px;
    max-width: 60%;
  }

  .error {
    display: block;
    margin-top: $base;
    color: $error-color;
  }

  .pricing-inputs-container {
    display: flex;
    flex-direction: column;

    .heading-primary {
      margin-top: 0;
      margin-bottom: $base * 2;
      font-size: 1.6em;
    }

    .input-container {
      display: flex;
      flex-direction: column;
      position: relative;
      margin-bottom: $base / 2;

      label {
        font-weight: 500;
      }

      .reward-input {
        text-indent: $base / 2;
      }

      .currency-symbol {
        position: absolute;
        bottom: 25px;
        left: 10px;
        font-weight: 600;
      }
    }

    input {
      margin: $base 0;
      padding: $base / 2 $base;
      border: 1px solid $border-color;
      border-radius: $base / 4;
      outline: 0;

      &:focus {
        border-color: $input-border-focused;
      }
    }
  }

  .results-container {
    .result {
      display: flex;
      font-size: 1.1em;
      margin-bottom: 0;
    }

    .amount {
      margin-left: auto;
    }
  }
}
</style>
