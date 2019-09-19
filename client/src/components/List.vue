<template>
<div class="col-3 pt-3">
<div class="card">
  <div class="card-header">
   <h3>{{listProp.title}} <span class="btn btn-sm" @click="deleteList(listProp)"><i class="far fa-times-circle fa-2x"></i></span></h3>
  </div>
  <div class="card-body list">
         <CreateTaskModal :list="listProp" />
      <task v-for="task in tasks" :taskProp="task" :key="task._id" />
      <button
        class="btn btn-success mt-3"
        data-toggle="modal"
        :data-target="'#create-task-modal'+listProp._id"
      >Add Task</button>
  </div>
</div>
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
  components: { Task, CreateTaskModal },
  methods: {
      deleteList(list){
      this.$store.dispatch('deleteList', list)
    },
  }
};

</script>

<style scoped>
.list{
  background-color: bisque
}
</style>
