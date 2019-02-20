<template>
  <div class="summaryContainer">
    <span class="summary">할일 목록: {{ getLength }}</span>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "todoSummary",
  computed: {
    ...mapGetters(["getLength"])
  }
};
</script>
<style>
.summaryContainer {
  /* width: 8.5rem; */
  position: absolute;
  bottom: 10px;
  width: 95%;
  height: 50px;
  line-height: 50px;
  background-color: gray;
  border-radius: 5px;
  margin: 0.5rem auto;
}
.summary {
  color: white;
  display: block;
}
</style>