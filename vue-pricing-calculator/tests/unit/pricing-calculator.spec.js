import { shallowMount } from '@vue/test-utils'
import PricingCalculator from '@/components/PricingCalculator.vue'

describe('PricingCalculator.vue', () => {
  let feesPercentage;
  let vatPercentage;

  it('is a Vue instance', () => {
    const wrapper = shallowMount(PricingCalculator);
    expect(wrapper.isVueInstance()).toBeTruthy();
  })

  describe('computed', () => {
    beforeEach(() => {
      feesPercentage = 0.3;
      vatPercentage = 0.2;
    });

    it('calculates correct totalCost', () => {
      const wrapper = shallowMount(PricingCalculator, {
        propsData: { feesPercentage, vatPercentage }
      });
      wrapper.setData({ reward: 1, places: 10 });
      expect(wrapper.vm.calculateTotalCost).toEqual('13.60');
    });

    it('calculates correct rewardPerHour', () => {
      const wrapper = shallowMount(PricingCalculator, {
        propsData: { feesPercentage, vatPercentage }
      });
      wrapper.setData({ reward: 1, time: 10 });
      expect(wrapper.vm.calculateRewardPerHour).toEqual('6.00');
    });
  });
})
