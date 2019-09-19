<template>
  <!-- <div class="task">
    <h3>{{taskProp.description}}<span class="btn btn-sm" @click= "deleteTask(taskProp)">X</span></h3>
    <div v-for="comment in taskProp.comments" :key="comment._id">
    <p><p>{{comment.description}}<span class= "btn btn-sm" @click= "deleteComment(comment)">X</span></p></p>
    
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
 
</div> -->

<div class="card task mb-3">
  <div class="card-header">
    <h3>{{taskProp.description}}<span class="btn" @click= "deleteTask(taskProp)"><i class="far fa-times-circle fa-1x"></i></span></h3>
<select v-model="newListId" @change="moveTask">
  <option disabled value="">Move Task</option>
  <option v-for="list in lists" :value="list._id" :key="list._id">{{list.title}}</option>
</select>
  </div>
  <div v-for="comment in taskProp.comments" :key="comment._id">
  <ol class="list-group list-group-flush">
    <li class="list-group-item">{{comment.description}}<span class= "btn btn-sm" @click= "deleteComment(comment)"><i class="fas fa-times"></i></span></li>
  </ol>
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