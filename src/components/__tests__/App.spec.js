import { describe, it, vi, expect } from "vitest";
import { shallowMount} from "@vue/test-utils";
import component from "src/App.vue";
import { setActivePinia, createPinia } from 'pinia'

vi.mock('vue-router')
describe("App component", () => {

    it.skip("mounts without error", () => {
        setActivePinia(createPinia())
        const wrapper = shallowMount(component);
        expect(wrapper).toBeDefined();
        expect(wrapper.html()).toMatchSnapshot();
    });
});
