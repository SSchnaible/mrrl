<template>
  <a v-bind:href="url" v-bind:style="styleObject">{{ name }}</a>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "wowheadLink",
  props: {
    url: String,
    name: String,
    color: String
  },
  data: function() {
    return {
      styleObject: {
        color: this.color
      }
    };
  }
});
</script>

<style lang="scss">
a {
  text-decoration-line: none;
}
</style>
