import { shallowMount } from '@vue/test-utils';
import SubmitButton from '../components/SubmitButton.vue';

describe('TextInput.vue', () => {
  const wrapper = shallowMount(SubmitButton);
  
  test('emitting "submit" event on click', () => {
    wrapper.find('button').trigger('click');
    
    expect(wrapper.emitted('submit')).toBeTruthy();
  });

  test('renders button correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
