### HTML标注

##### HTML位置计算
- 获取模型（中心点）世界坐标位置
``` js
    var position = new THREE.Vector3();
    mesh.getWorldPosition(position); // (0, 0, 15)
```
- 根据HTML要放置在模型的什么位置修改世界坐标
``` js
    // HTML要放置在模型z轴顶端
    position.z += 15
```
- 获取设备坐标
``` js
    // 计算出模型在设备屏幕的坐标位置
    // 屏幕中心为(0, 0), 左上角为(-1, 1)，右下角(1, -1)
    var xy = position.project(camera);
```
- 计算HTML在屏幕的定位
``` js
    var top = window.innerHeight / 2 - (window.innerHeight / 2 * xy.y);
    var left = window.innerWidth / 2 + (window.innerWidth / 2 * xy.x);
```