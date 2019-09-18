<template>
  <div class="task">
    <h3>{{taskProp.description}}</h3>
    <div v-for="comment in taskProp.comments" :key="comment._id">
      <p>{{comment.description}}</p>
    <button class= "btn btn-danger" @click= "deleteComment(comment)">Delete Comment</button>
    </div>
    <CreateCommentModal :task="taskProp" />
    <button
      class="btn btn-success"
      data-toggle="modal"
      :data-target="'#create-comment-modal'+taskProp._id"
    >Add Comment</button>
    <button class= "btn btn-danger" @click= "deleteTask(taskProp)">Delete Task</button>
  </div>
</template>


<script>
import CreateCommentModal from "../components/CreateCommentModal";
export default {
  name: "task",
  props: ["taskProp"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    deleteTask(task){
      this.$store.dispatch('deleteTask', task)
    },
    deleteComment(c){
      c.listId = this.taskProp.listId
      this.$store.dispatch('deleteComment', c)
    }
  },

  components: { CreateCommentModal }
};
</script>


<style scoped>
</style>