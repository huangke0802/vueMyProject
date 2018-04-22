/* 多选的矩形选择 模块 */

<template>
  <div class="chooser-component">
    <ul class="chooser-list">
      <li v-for="(item, index) in selections"
      @click="chooseSelction(index)"
      :class="{active : nowIndex.indexOf(index) != -1}">{{item.label}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props : {
    selections : {
      type : Array,
      default : [{
        label : "test",
        value : 0
      }]
    }
  },
  data(){
    return {
      nowIndex : [0],
    }
  },
  methods : {
    chooseSelction(index){
      let n;
      if(this.nowIndex.indexOf(index) === -1){
          this.nowIndex.push(index);
      }else{
        n = this.nowIndex.indexOf(index);
        this.nowIndex.splice(n, 1);
      }
      let mapObj = new Array();
      for(let i in this.nowIndex){
        mapObj[i] = this.selections[i];
      }
      this.$emit('on-change', mapObj);
    }
  }
}
</script>

<style scoped>
.chooser-component {
  position: relative;
  display: inline-block;
}
.chooser-list li{
  display: inline-block;
  border: 1px solid #e3e3e3;
  height: 25px;
  line-height: 25px;
  padding: 0 8px;
  margin-right: 5px;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
}
.chooser-list li.active {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
</style>

