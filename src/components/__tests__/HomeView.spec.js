import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import HelloWorld from '../HomeView.vue';

describe('Home', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld);
    expect(wrapper.text()).toContain('home');
  });
});
