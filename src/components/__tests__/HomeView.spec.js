import {describe, it, expect, vi} from 'vitest';

import { shallowMount} from '@vue/test-utils';
import HomeView from "@/components/HomeView.vue";
import {createPinia, setActivePinia} from "pinia";

vi.mock('vue-router')
describe('Home', () => {
  it('renders properly', () => {
    setActivePinia(createPinia())
    const wrapper = shallowMount(HomeView,{
      global: {
        stubs: ['RouterLink'],
      },});
    expect(wrapper.text()).toContain((new Date()).getFullYear());
  });
});
