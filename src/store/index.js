import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    dialogNewServerVisible: false,
    dialogChooseLayerVisible:false,
    dialogClassificationLayerVisible:false,//分类图层模态框显示/隐藏
    dialogQuantitativeLayerVisible:false,//定量图层
    dialogVectorLayerCtnVisible:false,//矢量图层
    dialogEditServerVisible:false,//编辑 服务
    globalSideClickItem:'',//请求用
  },
  mutations: {
    //编辑 服务
    changeDialogEditServerVisibleFlag(state, option){
      state.dialogEditServerVisible = option;
    },
    //新增服务
    changeDialogNewServerVisibleFlag(state, option){
      state.dialogNewServerVisible = option;
    },
    // 选择服务
    changedialogChooseLayerVisibleFlag(state, option){
      state.dialogChooseLayerVisible = option;
    },
    //分类图层
    changedialogClassificationLayerVisibleFlag(state, option){
      state.dialogClassificationLayerVisible = option;
    },
    //定量图层
    changedialogQuantitativeLayerVisibleFlag(state, option){
      state.dialogQuantitativeLayerVisible = option;
    },
    //矢量图层
    changedialogVectorLayerCtnVisibleFlag(state, option){
      state.dialogVectorLayerCtnVisible = option;
    },
  },
  actions: {
    //编辑 服务
    changeDialogEditServerVisibleFlagFn(state, option){
      store.commit('changeDialogEditServerVisibleFlag', option);
    },
    //新增服务
    changeDialogNewServerVisibleFlagFn(state, option){
      store.commit('changeDialogNewServerVisibleFlag', option);
    },
    // 选择服务
    changedialogChooseLayerVisibleFlagFn(state, option){
      store.commit('changedialogChooseLayerVisibleFlag', option);
    },
    //分类图层
    changedialogClassificationLayerVisibleFlagFn(state,option){
      store.commit('changedialogClassificationLayerVisibleFlag',option);
    },
    //分类图层
    changedialogQuantitativeLayerVisibleFlagFn(state,option){
      store.commit('changedialogQuantitativeLayerVisibleFlag',option);
    },
    //矢量图层
    changedialogVectorLayerCtnVisibleFlagFn(state,option){
      store.commit('changedialogVectorLayerCtnVisibleFlag',option);
    },
  },
  modules: {
  }
})
export default store;