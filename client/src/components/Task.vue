<template>
  <div class="task">
    <h3>{{taskProp.description}}</h3>
    <div v-for="comment in taskProp.comments" :key="comment._id">
      <p>{{comment.description}}</p>
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
  methods: {},
  components: { CreateCommentModal }
};
</script>


<style scoped>
</style>