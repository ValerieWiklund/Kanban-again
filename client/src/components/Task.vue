<template>
  <div class="task">
    <h3>{{taskProp.description}}<button class="btn btn-sm" @click= "deleteTask(taskProp)">X</button></h3>
    <div v-for="comment in taskProp.comments" :key="comment._id">
      <p>{{comment.description}}<button class= "btn btn-sm" @click= "deleteComment(comment)">X</button></p>
    
    </div>
    <CreateCommentModal :task="taskProp" />
    <button
      class="btn btn-success"
      data-toggle="modal"
      :data-target="'#create-comment-modal'+taskProp._id"
    >Add Comment</button>
 
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
    deleteComment(comment){
      comment.taskId = this.taskProp._id
      comment.listId = this.taskProp.listId
      this.$store.dispatch('deleteComment', comment)
    }
  },

  components: { CreateCommentModal }
};
</script>


<style scoped>
</style>