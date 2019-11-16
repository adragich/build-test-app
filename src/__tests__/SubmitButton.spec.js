import { shallowMount } from '@vue/test-utils';
import SubmitButton from '../components/SubmitButton.vue';

describe('TextInput.vue', () => {
  test('emitting "submit" event on click', () => {
    const wrapper = shallowMount(SubmitButton);

    wrapper.find('button').trigger('click');
    
    expect(wrapper.emitted('submit')).toBeTruthy();
  });
});
