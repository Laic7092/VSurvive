import Component from "./component.js";

class Transform extends Component {
    constructor() {
      super();
      this.childCount = 0;
      this.eulerAngles = new Vector3();
      this.forward = new Vector3();
      this.hasChanged = false;
      this.hierarchyCapacity = 0;
      this.hierarchyCount = 0;
      this.localEulerAngles = new Vector3();
      this.localPosition = new Vector3();
      this.localRotation = new Quaternion();
      this.localScale = new Vector3(1, 1, 1);
      this.localToWorldMatrix = new Matrix4x4();
      this.lossyScale = new Vector3(1, 1, 1);
      this.parent = null;
      this.position = new Vector3();
      this.right = new Vector3();
      this.root = null;
      this.rotation = new Quaternion();
      this.up = new Vector3();
      this.worldToLocalMatrix = new Matrix4x4();
    }
  
    DetachChildren() {
      // 解除所有子对象的父子关系
      // 实现逻辑...
    }
  
    Find(name) {
      // 根据名称查找并返回指定子对象
      // 实现逻辑...
    }
  
    GetChild(index) {
      // 根据索引返回指定的子对象的Transform组件
      // 实现逻辑...
    }
  
    GetSiblingIndex() {
      // 获取该Transform在父对象的子对象列表中的索引
      // 实现逻辑...
    }
  
    InverseTransformDirection(direction) {
      // 将方向从世界空间转换为局部空间
      // 实现逻辑...
    }
  
    InverseTransformPoint(position) {
      // 将位置从世界空间转换为局部空间
      // 实现逻辑...
    }
  
    InverseTransformVector(vector) {
      // 将向量从世界空间转换为局部空间
      // 实现逻辑...
    }
  
    IsChildOf(parent) {
      // 判断该Transform是否是指定父对象的子对象
      // 实现逻辑...
    }
  
    LookAt(target) {
      // 使该Transform朝向目标对象的位置
      // 实现逻辑...
    }
  
    Rotate(rotation) {
      // 使用欧拉角旋转该Transform
      // 实现逻辑...
    }
  
    RotateAround(point, angle) {
      // 绕某一点在世界坐标系中旋转该Transform指定角度
      // 实现逻辑...
    }
  
    SetAsFirstSibling() {
      // 移动该Transform到父对象的子对象列表的最前面
      // 实现逻辑...
    }
  
    SetAsLastSibling() {
      // 移动该Transform到父对象的子对象列表的最后面
      // 实现逻辑...
    }
  
    SetParent(parent, worldPositionStays) {
      // 设置该Transform的父对象，并可选择是否保持世界坐标位置不变
      // 实现逻辑...
    }
  
    SetPositionAndRotation(position, rotation) {
      // 设置该Transform的世界坐标位置和旋转
      // 实现逻辑...
    }
  
    SetSiblingIndex(index) {
      // 设置该Transform在父对象的子对象列表中的索引
      // 实现逻辑...
    }
  
    TransformDirection(direction) {
      // 将方向从局部空间转换为世界空间
      // 实现逻辑...
    }
  
    TransformPoint(position) {
      // 将位置从局部空间转换为世界空间
      // 实现逻辑...
    }
  
    TransformVector(vector) {
      // 将向量从局部空间转换为世界空间
      // 实现逻辑...
    }
  
    Translate(translation) {
      // 沿指定的方向和距离移动该Transform
      // 实现逻辑...
    }
  }
  