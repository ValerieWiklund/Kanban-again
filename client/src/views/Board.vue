<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="board">
        <h1>{{board.title}}<span class="btn" @click= "deleteBoard(board)">X</span></h1>
        <CreateListModal />
        <button
          class="btn btn-success"
          data-toggle="modal"
          data-target="#create-list-modal"
        >Create List</button>
    </div>
    </div>
    <div class="row">
        <list v-for="list in lists" :listProp="list" :key="list._id" />
      </div>
    </div>
</template>

<script>
import List from "../components/List";
import CreateListModal from "../components/CreateListModal";
export default {
  name: "board",
  mounted() {
    this.$store.dispatch("getActiveBoard", this.$route.params.boardId);
    this.$store.dispatch("getBoards");
    this.$store.dispatch("getLists", this.$route.params.boardId);
  },
  computed: {
    board() {
      return (
        this.$store.state.boards.find(
          b => b._id == this.$route.params.boardId
        ) || {
          title: "Loading..."
        }
      );
    },
    lists() {
      return this.$store.state.lists;
    }
  },
  methods: {
      deleteBoard(board){
      this.$store.dispatch('deleteBoard', board)
    }
  },
  components: { List, CreateListModal }
};
</script>
