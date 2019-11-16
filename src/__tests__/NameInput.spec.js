import { shallowMount } from '@vue/test-utils';
import NameInput from '../components/NameInput.vue';

describe('NameInput.vue', () => {
  test('renders name', () => {
    const name = 'Anastasia';
    const wrapper = shallowMount(NameInput, {
        propsData: { name }
    });
    const textInput = wrapper.find('input');
    
    expect(textInput.element.value).toBe(name);
  });

  test('emitting "input" event on input', () => {
    const wrapper = shallowMount(NameInput, {
        propsData: { 'name': '' }
    });
    let textInput = wrapper.find('input');

    textInput.trigger('input', 'John');
    
    expect(wrapper.emitted('input')).toBeTruthy();
  });

  test('renders textarea item correctly', () => {
    const wrapper = shallowMount(NameInput, {
        propsData: { 'name': '' }
    });
    
    expect(wrapper.element).toMatchSnapshot();
  });
});
