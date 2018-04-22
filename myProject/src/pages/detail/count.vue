<template>
  <div>
    <h1>count</h1>
    <v-selection :selections="buyTypes"></v-selection>
    <v-chooser :selections="buyTypes"></v-chooser>
    <v-multiply-chooser :selections="buyTypes"></v-multiply-chooser>
    <v-counter :max="max" :min="min"></v-counter>
  </div>
</template>

<script>
import VSelection from "../../components/base/selection";
import VChooser from "../../components/base/chooser";
import VMultiplyChooser from "../../components/base/multiplyChooser";
import VCounter from "../../components/base/counter"
export default {
  components: {
    VSelection,
    VChooser,
    VMultiplyChooser,
    VCounter
  },
  data() {
    return {
      max : 100,
      min :20,
      buyTypes: [
        {
          label: "入门版",
          value: 0
        },
        {
          label: "中级版",
          value: 1
        },
        {
          label: "高级版",
          value: 2
        }
      ]
    };
  }
};
</script>

<style scoped>

</style>

