<template>
  <div class="task">
    <h3>{{taskProp.description}}</h3>
  </div>
</template>


<script>
export default {
  name: "task",
  props: ["taskProp"],
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>