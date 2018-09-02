<template>
<div>
  <vi-input
    data-test="titleText"
    placeholder="O que precisa ser feito?"
    v-model="titleText"/>

</div>
</template>
<script>
export default {
  name: 'FormToDo',
  data() {
    return {
      titleText: '',
    };
  },
};
</script>
