<template>
  <div class="wrap">
    <v-head :isCollapse="isCollapse" @setCollapse="setCollapse"></v-head>
    <v-sidebar :isCollapse="isCollapse"></v-sidebar>
    <div class="content-box" :class="{open:!isCollapse}">
        <v-tags></v-tags>
        <div class="content">
          <router-view></router-view>
        </div>
    </div>
  </div>
</template>

<script>
import vHead from "./Header.vue";
import vSidebar from "./SliderBar.vue";
import vTags from "./tags";
export default {
  props: {
    // isCollapse: Boolean
  },
  components: {
    vHead,
    vSidebar,
    vTags
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
.content-box {
  position: absolute;
  height: 100%;
  left: 64px;
  right: 0;
  top: 70px;
  border: 1px solid #ccc;
  transition: left .3s ease-in-out;
  background: rgb(240,240,240);
  
}
.content-box.open {
  left: 200px;
}
.content {
  padding: 10px;
  height: 100%;
  box-sizing: border-box;
  overflow-y: scroll;
  padding-bottom: 120px;
}
</style>
