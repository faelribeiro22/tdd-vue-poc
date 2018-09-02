<template>
  <vi-wrapper justify-content id="app">
    <h1>todos</h1>
    <vi-card>
      <form-to-do/>
    </vi-card>
  </vi-wrapper>
</template>

<script>
import FormToDo from './components/FormToDo.vue';

export default {
  name: 'app',
  components: {
    FormToDo,
  },
};
</script>

<style>
</style>
