class SceneManager {
    static get sceneCount() {
      // 返回当前加载的场景总数
      // 实现省略
    }
  
    static get sceneCountInBuildSettings() {
      // 返回 Build Settings 中的场景总数
      // 实现省略
    }
  
    static createScene(name) {
      // 在运行时创建一个空的新场景，并指定名称
      // 实现省略
    }
  
    static getActiveScene() {
      // 获取当前激活的场景
      // 实现省略
    }
  
    static getSceneAt(index) {
      // 获取索引处的场景
      // 实现省略
    }
  
    static getSceneByBuildIndex(buildIndex) {
      // 根据 Build Settings 中的索引获取场景
      // 实现省略
    }
  
    static getSceneByName(name) {
      // 根据名称搜索加载的场景
      // 实现省略
    }
  
    static getSceneByPath(path) {
      // 根据资源路径搜索加载的场景
      // 实现省略
    }
  
    static loadScene(sceneName, mode) {
      // 根据名称或索引加载场景
      // 可选参数 mode 用于指定加载模式（同步或异步）
      // 实现省略
    }
  
    static loadSceneAsync(sceneName, mode) {
      // 异步加载场景
      // 可选参数 mode 用于指定加载模式
      // 实现省略
    }
  
    static mergeScenes(sourceScene, destinationScene) {
      // 将源场景合并到目标场景中
      // 实现省略
    }
  
    static moveGameObjectToScene(gameObject, scene) {
      // 将游戏对象从当前场景移动到指定场景
      // 实现省略
    }
  
    static setActiveScene(scene) {
      // 设置指定场景为激活场景
      // 实现省略
    }
  
    static unloadSceneAsync(scene, mode) {
      // 异步卸载指定场景，销毁与之关联的所有游戏对象
      // 可选参数 mode 用于指定卸载模式
      // 实现省略
    }
  }
  
  // 事件
  SceneManager.activeSceneChanged = null;
  SceneManager.sceneLoaded = null;
  SceneManager.sceneUnloaded = null;
  