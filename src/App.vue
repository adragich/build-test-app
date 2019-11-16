<template>
  <div
    id="app"
    class="build-test__wrapper"
  >
    <h2>
      Frontend Developer Love - Eindhoven. Hi all!
    </h2>

    <NameInput
      :name="name"
      @input="setName"
    />

    <TextInput
      :feedback="feedback"
      @input="setFeedback"
    />

    <SubmitButton @submit="showRequest" />

    <div v-if="isRequestVisible">
      <h3>
        Guest name: {{ name }}
      </h3>

      <hr>

      <p>
        Feedback: {{ feedback }}
      </p>
    </div>
  </div>
</template>

<script>
import NameInput from './components/NameInput.vue';
import TextInput from './components/TextInput.vue';
import SubmitButton from './components/SubmitButton.vue';

import { mapState, mapActions, mapMutations } from 'vuex';

export default {
  name: 'App',
  components: {
    NameInput,
    TextInput,
    SubmitButton
  },
  computed: {
    ...mapState([
      'name',
      'feedback',
      'isRequestVisible'
    ]),
  },
  methods: {
    ...mapActions([
      'showRequest',
    ]),
    ...mapMutations([
      'setName',
      'setFeedback',
    ]),
  }

}
</script>

<style>
.build-test__wrapper {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
