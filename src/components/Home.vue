<template>
  <div class="wrap">
    <v-head :isCollapse="isCollapse" @setCollapse="setCollapse"></v-head>
    <v-sidebar :isCollapse="isCollapse"></v-sidebar>
  </div>
</template>

<script>
import vHead from "./Header.vue";
import vSidebar from "./SliderBar.vue";
export default {
  props: {
    // isCollapse: Boolean
  },
  components: {
    vHead,
    vSidebar
  },
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    setCollapse(){
      this.isCollapse = !this.isCollapse;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
