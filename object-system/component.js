import Object from "./object.js"

export default class Component extends Object {
    constructor() {
      super()
      this.gameObject = null
      this.tag = "" //从gameobj拿,如何保持同步,get(_)
      this.transform = null
    }

    CompareTag(tag) {
      // 判断该游戏对象是否被标记为指定的tag
      // 实现逻辑...
    }
}

class Tree {

    GetComponent(type) {
        // 返回附加在该游戏对象上指定类型的组件
        // 实现逻辑...
      }

      GetComponentInChildren(type) {
        // 返回该游戏对象或任意子对象中指定类型的组件（使用深度优先搜索）
        // 实现逻辑...
      }

      GetComponentInParent(type) {
        // 返回该游戏对象或任意父对象中指定类型的组件
        // 实现逻辑...
      }

      GetComponents(type) {
        // 返回该游戏对象上所有指定类型的组件
        // 实现逻辑...
      }

      GetComponentsInChildren(type) {
        // 返回该游戏对象或任意子对象中所有指定类型的组件（使用深度优先搜索，递归实现）
        // 实现逻辑...
      }

      GetComponentsInParent(type) {
        // 返回该游戏对象或任意父对象中所有指定类型的组件
        // 实现逻辑...
      }

      TryGetComponent(type) {
        // 尝试获取该游戏对象上指定类型的组件，如果存在则返回组件，否则返回null
        // 实现逻辑...
      }
}


