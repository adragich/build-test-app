<template>
  <div
    id="app"
    class="build-test__wrapper"
  >
    <h2 class="build-test-u-white-color build-test__title">
      Frontend Developer Love in Eindhoven,
      <br>
      This is <em>Anastasiia Dragich</em> with <em>"Building Test Strategy Topic"</em>...
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
body {
  margin: 0;
  background: aquamarine;
}
* {
  box-sizing: border-box;
}
.build-test__wrapper {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 16px 24px;
  height: 70vh;
  background: #3F51B5;
  background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='150' preserveAspectRatio='none' viewBox='0 0 100 100'%3E%3Cpath d='M0,0Q30,150,100,1V100H0' fill='aquamarine'/%3E%3C/svg%3E%0A");
  background-position: 0 100%;
  background-size: 100% 50px;
  background-repeat: no-repeat;
}
.build-test-u-flex-column {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.build-test-u-spacer {
  margin-bottom: 12px;
}
.build-test-u-lightgrey-color {
  color: #dfdfdf;
}
.build-test-u-white-color {
  color: white;
}

@media (max-width: 768px) {
  .build-test__title {
    font-size: 22px;
  }
}
</style>
