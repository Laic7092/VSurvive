import Component from "./component.js"
import { Vector2 } from "./math/world.js"

class Transform extends Component {
    constructor() {
        super()
        this.childCount = 0
        this.root = null
        this.parent = null
        this._children = []


        this.position = new Vector2()
        this.rotation = new Vector2()
        this.scale = new Vector2()
        this.position = new Vector2()
        this.rotation = new Vector2()
        this.scale = new Vector2()
    }

    DetachChildren() {
        this._children.forEach(child => {
            child.parent = null
        })
    }

    Find(name) {
       return this._children.find(item => item.name === name)
    }

    GetChild(index) {
        return this._children[index]
    }

    GetSiblingIndex() {
        return this.parent.GetChild
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
        let curParent = this.curParent
        while (curParent && parent !== curParent) {
            curParent = curParent.parent
        }
        return parent === curParent
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
  // 这感觉有点复杂,但是我还是慢慢写完吧
