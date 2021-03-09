import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const store = new Vuex.Store({
  state: {
    // 单一状态树
    // 状态量,store中存放多个页面共享的内容
    counter: 100,
    students: [
      {id: 111, name: 'why', age: 19},
      {id: 112, name: 'how', age: 23},
      {id: 113, name: 'what', age: 28},
      {id: 114, name: 'hat', age: 30}
    ]
  },
  actions: {
    // 异步操作，结束后提交到mutations
  },
  mutations: {
    // 同步操作，devtools工具可以跟踪改变
    // 定义方法
    // vuex的store状态的更新唯一方式：提交mutation
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    }
  },
  getters: {
    // 类似计算属性：state的值需要变化后使用时使用getters
    powerCounter(state){
      return state.counter * state.counter
    },
    // 年龄大于20的学生信息
    ageMoreTwenty(state){
      return state.students.filter(s => (s.age > 20) && (s.age < 30))
    }
  },
  modules: {

  }
})

// 3.导出
export default store
