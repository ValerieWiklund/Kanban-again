<template>
  <div>
    <h1>{{listProp.title}}</h1>
    <task v-for="task in tasks" :taskProp="task" :key="task._id" />
  </div>
</template>


<script>
import Task from "../components/Task";
export default {
  name: "List",
  props: ["listProp"],
  mounted() {
    this.$store.dispatch("getTasks", this.listProp._id);
  },

  computed: {
    tasks() {
      return this.$store.state.tasks;
    }
  },
  components: { Task }
};
</script>

<style scoped>
</style>
