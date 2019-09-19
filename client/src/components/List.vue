<template>
<div class="col-6 border">

      <h1>{{listProp.title}}</h1>
      <CreateTaskModal :list="listProp" />
      <task v-for="task in tasks" :taskProp="task" :key="task._id" />
      <button
        class="btn btn-success"
        data-toggle="modal"
        :data-target="'#create-task-modal'+listProp._id"
      >Add Task</button>
</div>


</template>


<script>
import Task from "../components/Task";
import CreateTaskModal from "../components/CreateTaskModal";
export default {
  name: "List",
  props: ["listProp"],
  mounted() {
    this.$store.dispatch("getTasks", this.listProp._id);
  },

  computed: {
    tasks() {
      return this.$store.state.tasks[this.listProp._id]; //this is getting the task at the specific list ID
    }
  },
  components: { Task, CreateTaskModal }
};
</script>

<style scoped>
</style>
