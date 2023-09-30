export default class Object {
    constructor(name, hideFlags) {
      this.name = name
      this.hideFlags = hideFlags
    }

    GetInstanceID() {
      // 返回对象的实例ID
      // 实现逻辑...
    }

    ToString() {
      // 返回对象的名称
      // 实现逻辑...
    }

    static Instantiate(original, transform, other) {
        // 克隆原始对象并返回克隆体
        // 实现逻辑...
    }

    static exists(obj) {
        // 判断对象是否存在
        // 实现逻辑...

        // 关于到底需不需要判断, 我暂时想不清楚, 对象不存在就是null了, 意思是传一个变量,直接判断
        // 这个变量是不是假值, 或者说,因为没有一个严格的类型系统, 只需要传入的对象 instance of gameObject
        // 从原型链的角度来说, 好像还挺合理的.
    }
}

function bind() {
    //todo
}

// 关于lifeCycle 中的destory,destroyImmiedia或许和垃圾收集机制相关?,这里JS内部的机制与unity是不同的
// 然后FindWithName, FindObjectsOfType这两个静态方法, 这肯定需要Object静态类去绑定到当前场景的对象树?

// 就好像一个森林,场景存一个gameobject[],每个元素又是单独的树,树结构是靠transform组件维持
// (我觉得合理...也不宜i的那个,后需要改再说)
// 还有一点就是,manager该如何组织呢?我希望这些基本类尽可能简单些,然后这些绑定方法呢?靠啥实现,接口,组合,继承???
// 哪种合适我也不是很清楚,爱就这么先写着,现在还简单改起来没啥问题,多改改也好
// 还有那个实例id,感觉就是内部系统作为唯一标识的(虽然说name也可以,但可能不是那么规范)
// 还有一点, 如果我这是一个项目, 我的场景里的所有对象, 可定是要保存起来的
// (当然这是游戏引擎阿甘的,我只是觉得支持保存读取比较好)

