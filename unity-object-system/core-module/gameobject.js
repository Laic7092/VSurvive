import Object from "./object.js";
export default class GameObject extends Object{
    constructor(name) {
      super()
      this.name = name;
      this.activeInHierarchy = true;
      this.activeSelf = true;
      this.isStatic = false;
      this.layer = 0;
      this.tag = "Untagged";
      this.transform = new Transform();
      this.scene = null
      this.sceneCullingMask = null
    }
  
    AddComponent(className) {
      // 添加名为className的组件到游戏对象
      // 实现逻辑...
    }
  
    BroadcastMessage(methodName) {
      // 在该游戏对象及其子对象上调用名为methodName的方法
      // 实现逻辑...
    }
  
    CompareTag(tag) {
      // 检查游戏对象是否具有指定的标签
      // 实现逻辑...
    }
  
    GetComponent(type) {
      // 返回游戏对象所附加的Type类型的组件
      // 实现逻辑...
    }
  
    GetComponentInChildren(type) {
      // 返回游戏对象及其子对象中按深度优先搜索找到的Type类型的组件
      // 实现逻辑...
    }
  
    GetComponentInParent(type) {
      // 返回游戏对象及其父对象中找到的Type类型的组件
      // 实现逻辑...
    }
  
    GetComponents(type) {
      // 返回游戏对象中所有Type类型的组件列表
      // 实现逻辑...
    }
  
    GetComponentsInChildren(type) {
      // 返回游戏对象及其子对象中按深度优先搜索找到的所有Type类型的组件列表
      // 实现逻辑...
    }
  
    GetComponentsInParent(type) {
      // 返回游戏对象及其父对象中找到的所有Type类型的组件列表
      // 实现逻辑...
    }
  
    SendMessage(methodName) {
      // 在该游戏对象上调用名为methodName的方法
      // 实现逻辑...
    }
  
    SendMessageUpwards(methodName) {
      // 在该游戏对象及其祖先对象上调用名为methodName的方法
      // 实现逻辑...
    }
  
    SetActive(value) {
      // 设置游戏对象的激活状态
      // 实现逻辑...
    }
  
    TryGetComponent(type) {
      // 尝试获取指定类型的组件，如果存在则返回组件，否则返回null
      // 实现逻辑...
    }
  
    static CreatePrimitive() {
      // 创建一个带有基本网格渲染器和适当碰撞体的游戏对象
      // 实现逻辑...
    }
  
    static Find(name) {
      // 根据名称查找并返回游戏对象
      // 实现逻辑...
    }
  
    static FindGameObjectsWithTag(tag) {
      // 返回标记为tag的所有激活的游戏对象数组
      // 实现逻辑...
    }
  
    static FindWithTag(tag) {
      // 返回标记为tag的第一个激活的游戏对象
      // 实现逻辑...
    }
  }
  