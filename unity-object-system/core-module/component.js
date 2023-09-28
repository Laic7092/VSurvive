import Object from "./object.js";

export default class Component extends Object {
    constructor() {
      super();
      this.gameObject = null;
      this.tag = "";
      this.transform = null;
    }
  
    BroadcastMessage(methodName) {
      // 在该组件所属游戏对象及其子对象上调用名为methodName的方法
      // 实现逻辑...
    }
  
    CompareTag(tag) {
      // 判断该游戏对象是否被标记为指定的tag
      // 实现逻辑...
    }
  
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
  
    SendMessage(methodName) {
      // 在该组件所属游戏对象上调用名为methodName的方法
      // 实现逻辑...
    }
  
    SendMessageUpwards(methodName) {
      // 在该组件所属游戏对象及其所有祖先对象上调用名为methodName的方法
      // 实现逻辑...
    }
  
    TryGetComponent(type) {
      // 尝试获取该游戏对象上指定类型的组件，如果存在则返回组件，否则返回null
      // 实现逻辑...
    }
  }
  