### Raycaster 射线

- 创建一个射线投射器
``` js
    var raycaster = new THREE.Raycaster();
```
- 计算鼠标点击位置
``` js
    var pointer = new THREE.Vector2();
    window.onclick = function(e) {
        // e.clientX - width / 2  计算出鼠标在xy坐标系中点击的x轴的位置
        // (e.clientX - width / 2) / (width / 2) 将x轴坐标位置归一化(-1, 1)之间;
        // (e.clientX / width) * 2 - 1
        pointer.x = (e.clientX - width / 2) / (width / 2);
        // height / 2 - e.clientY 计算出鼠标在xy坐标系中点击的y轴的位置
        // (height / 2 - e.clientY) / (height / 2) 将y轴坐标位置归一化(-1. 1)之间
        // 1 - (e.clientY / height) * 2
        pointer.y = (height / 2 - e.clientY) / (height / 2);
    }
```
- 通过摄像机和鼠标位置更新射线
``` js
    raycaster.setFromCamera(pointer, camera);
```
- 将需要进行选中的网格对象放入.intersectObjects([])
``` js
    // 选中的网格对象就在intersects数组里面
    var intersects = raycaster.intersectObjects(array);
```