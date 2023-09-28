class Scene {
    constructor(buildIndex, name, path, rootCount) {
      this.buildIndex = buildIndex;
      this.name = name;
      this.path = path;
      this.rootCount = rootCount;
      this.isDirty = false;
      this.isLoaded = false;
    }
  
    get isValid() {
      // 判断场景是否有效
      // 实现省略
    }
  
    getRootGameObjects() {
      // 返回场景中所有根游戏对象
      // 实现省略
    }
  }

// buildIndex：返回场景在 Build Settings 中的索引。
// name：返回当前在游戏或应用中活动的场景的名称。
// path：返回场景的相对路径，如 "Assets/MyScenes/MyScene.unity"。
// rootCount：场景中根变换的数量。
// isDirty：如果场景已被修改，则返回 true。
// isLoaded：如果场景已加载，则返回 true。
  