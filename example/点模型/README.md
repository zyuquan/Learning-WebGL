### 点模型

##### 主要知识点
- new THREE.PointsMaterial()
- new THREE.Points()

```js
// 缓冲几何体
var geometry = new THREE.BufferGeometry();
// 缓冲几何体设置顶点数据
geometry.attributes.position = new THREE.BufferAttribute(new Float32Array(vectorArray), 3);
// 点材质
var pointMaterial = new THREE.PointsMaterial({
    color: 0xffff00,
    size: 300 // 点对象像素尺寸
});
// 生成点模型
var point = new THREE.Points(geometry, pointMaterial);
model.add(point);
```