import {describe, it, vi, expect, beforeEach} from "vitest";
import {mount} from "@vue/test-utils";
import component from "@/components/addTask.vue";
import { setActivePinia, createPinia } from 'pinia'

vi.mock('vue-router')
describe('addTask', () => {
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
    it("renders all", () => {
        expect(wrapper.html()).toMatchSnapshot();
    });
    it.skip("contains correct date", () => {
        const inputControl = wrapper.find('[id="date"]');
        expect(inputControl.exists()).toBe(true);
        expect(inputControl.value).toBe("01.08.2023");
    });
});
