import { shallowMount } from '@vue/test-utils';
import TextInput from '../components/TextInput.vue';

describe('TextInput.vue', () => {
  test('renders feedback', () => {
    const feedback = 'Good job!';
    const wrapper = shallowMount(TextInput, {
        propsData: { feedback }
    });
    const textarea = wrapper.find('textarea');
    
    expect(textarea.element.value).toBe(feedback);
  });

  test('emitting "input" event on input', () => {
    const wrapper = shallowMount(TextInput, {
        propsData: { 'feedback': '' }
    });
    let textarea = wrapper.find('textarea');

    textarea.trigger('input', 'I would improve some parts...');
    
    expect(wrapper.emitted('input')).toBeTruthy();
  });

  test('renders textarea item correctly', () => {
    const wrapper = shallowMount(TextInput, {
        propsData: { 'feedback': '' }
    });
    
    expect(wrapper.element).toMatchSnapshot();
  });
});
