import {describe, it, expect, vi, beforeEach} from 'vitest';

import { mount} from '@vue/test-utils';
import component from "@/components/HomeView.vue";
import {createPinia, setActivePinia} from "pinia";

vi.mock('vue-router')
describe('Home', () => {
  let wrapper

  beforeEach(() => {
    setActivePinia(createPinia())
    wrapper = mount(component, { global: {
        stubs: ['RouterLink'],
      } });
  })
  it('contains year', () => {
    expect(wrapper.text()).toContain((new Date()).getFullYear());
  });
  ['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС'].forEach((item) => {
    it(`contains ${item}`, () => {
      expect(wrapper.text()).toContain(item);
    });
  });

});
