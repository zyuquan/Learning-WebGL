### 流动纹理贴图

- 加载纹理
``` js
var texture = new THREE.TextureLoader().loader(image)
```
- 设置纹理阵列模式
``` js
texture.wrapS = THREE.RepeatWrapping
texture.wrapT = THREE.RepeatWrapping
```
- 沿着纹理贴图x轴或y轴偏移
``` js
texture.offset.y += 0.02
```
- 设置纹理贴图到材质Material
``` js
new THREE.MeshLambertMaterial({
  color: 0x00ffff, 
  map: texture,
  side: THREE.DoubleSide, //两面可见
  transparent: true, //需要开启透明度计算，否则着色器透明度设置无效
  // opacity: 0.5,//整体改变透明度
  depthTest: false,
})
```
#### 完整代码
``` js
var texture = new THREE.TextureLoader().load(image);
// 设置阵列模式为 RepeatWrapping
texture.wrapS = THREE.RepeatWrapping
texture.wrapT = THREE.RepeatWrapping
function flowAnimation() {
  requestAnimationFrame(flowAnimation);
  // 使用加减法可以设置不同的运动方向
  // 设置纹理偏移
  // y方向流量  光带流动效果
  texture.offset.y -= 0.02;
  // texture.offset.x -= 0.06;
}
flowAnimation();

var material = new THREE.MeshLambertMaterial({
  color: 0x00ffff, 
  map: texture,
  side: THREE.DoubleSide, //两面可见
  transparent: true, //需要开启透明度计算，否则着色器透明度设置无效
  // opacity: 0.5,//整体改变透明度
  depthTest: false,
});
```