<template>
  <div class="task">
    <h3>{{taskProp.description}}<span class="btn btn-sm" @click= "deleteTask(taskProp)">X</span></h3>
    <div v-for="comment in taskProp.comments" :key="comment._id">
    <p>{{comment.description}}<span class= "btn btn-sm" @click= "deleteComment(comment)">X</span></p>
    
    </div>
    <CreateCommentModal :task="taskProp" />
    <button
      class="btn btn-success"
      data-toggle="modal"
      :data-target="'#create-comment-modal'+taskProp._id"
    >Add Comment</button>

<select v-model="newListId" @change="moveTask">
  <option disabled value="">Move Task</option>
  <option v-for="list in lists" :value="list._id" :key="list._id">{{list.title}}</option>

</select>
 
</div>
</template>


<script>
import CreateCommentModal from "../components/CreateCommentModal";
export default {
  name: "task",
  props: ["taskProp"],
  data() {
    return {
      newListId: ""
    };
  },
  computed: {
    lists(){
      return this.$store.state.lists
    }
  },
  methods: {
    deleteTask(task){
      this.$store.dispatch('deleteTask', task)
    },
    deleteComment(comment){
      comment.taskId = this.taskProp._id
      comment.listId = this.taskProp.listId
      this.$store.dispatch('deleteComment', comment)
    },
    moveTask(){
      let payload={
        currentListId: this.taskProp.listId,
        listId: this.newListId,
        taskId: this.taskProp._id
      }
      this.$store.dispatch('moveTask', payload)
    }
  },

  components: { CreateCommentModal }
};
</script>


<style scoped>
</style>