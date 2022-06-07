### 挤压缓冲几何体（ExtrudeGeometry）
```js
// 一组多边形二维轮廓
var shapeArr = [
  new THREE.Shape([
    new THREE.Vector2(x, y), // 顶点坐标
    ...
  ]),
  ...
];
var geometry = new THREE.ExtrudeGeometry(
  shapeArr, // 多个多边形二维轮廓
  {
    depth: height, //拉伸高度
    bevelEnabled: false, //无倒角
  }
);
```