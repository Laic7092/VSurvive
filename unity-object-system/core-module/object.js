export default class Object {
    constructor(name, hideFlags) {
      this.name = name;
      this.hideFlags = hideFlags;
    }
  
    GetInstanceID() {
      // 返回对象的实例ID
      // 实现逻辑...
    }
  
    ToString() {
      // 返回对象的名称
      // 实现逻辑...
    }
  
    static Destroy(obj) {
      // 销毁游戏对象、组件或资源
      // 实现逻辑...
    }
  
    static DestroyImmediate(obj) {
      // 立即销毁对象
      // 强烈建议使用Destroy而不是DestroyImmediate
      // 实现逻辑...
    }
  
    static DontDestroyOnLoad(target) {
      // 加载新场景时不销毁目标对象
      // 实现逻辑...
    }
  
    static FindObjectOfType(type) {
      // 返回第一个激活的已加载Type类型的对象
      // 实现逻辑...
    }
  
    static FindObjectsOfType(type) {
      // 返回所有激活的已加载Type类型的对象列表
      // 实现逻辑...
    }
  
    static Instantiate(original) {
      // 克隆原始对象并返回克隆体
      // 实现逻辑...
    }
  
    static exists(obj) {
      // 判断对象是否存在
      // 实现逻辑...
    }
  
    static notEqual(obj1, obj2) {
      // 比较两个对象是否不相同
      // 实现逻辑...
    }
  
    static equal(obj1, obj2) {
      // 比较两个对象是否相同
      // 实现逻辑...
    }
  }


  