import {describe, it, vi, expect, beforeEach} from "vitest";
import {mount} from "@vue/test-utils";
import component from "@/components/addTask.vue";
import { setActivePinia, createPinia } from 'pinia'

vi.mock('vue-router')
describe('Home', () => {
    let wrapper
    const newdate = new Date("01.08.2023")

    beforeEach(() => {
        setActivePinia(createPinia())
        wrapper = mount(component, { global: {
                stubs: ['RouterLink'],
            },props: { data:newdate } });
    });

    it('renders properly', () => {
        expect(wrapper).toBeDefined();
        expect(wrapper.exists()).toBe(true);
    });
});
