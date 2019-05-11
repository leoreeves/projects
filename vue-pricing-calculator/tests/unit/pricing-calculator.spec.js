import { shallowMount } from '@vue/test-utils'
import PricingCalculator from '@/components/PricingCalculator.vue'

describe('PricingCalculator.vue', () => {
  let feesPercentage;
  let vatPercentage;
  let wrapper;

  beforeEach(() => {
    feesPercentage = 0.3;
    vatPercentage = 0.2;
    wrapper = shallowMount(PricingCalculator, {
      propsData: { feesPercentage, vatPercentage }
    });
  });

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  })

  describe('computed', () => {
    it('calculates correct totalCost', () => {
      wrapper.setData({ reward: 1, places: 10 });
      expect(wrapper.vm.calculateTotalCost).toEqual('13.60');
    });

    it('calculates correct rewardPerHour', () => {
      wrapper.setData({ reward: 1, time: 10 });
      expect(wrapper.vm.calculateRewardPerHour).toEqual('6.00');
    });
  });

  describe('methods', () => {
    it('adds commas to amounts correctly', () => {
      const addCommasTest = wrapper.vm.addCommasToAmount('2500');
      expect(addCommasTest).toEqual('2,500');
    });
  });

  describe('elements', () => {
    it('shows an error message if reward per hour is less than £5', () => {
      wrapper.setData({ reward: 1, places: 100, time: 120 });
      expect(wrapper.find('.error').exists()).toBeTruthy();
    });

    it('does not show an error message if reward per hour is greater than £5', () => {
      wrapper.setData({ reward: 10, places: 100, time: 120 });
      expect(wrapper.find('.error').exists()).toBeFalsy();
    });
  });
})
