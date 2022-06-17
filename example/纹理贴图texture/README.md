### 设置纹理贴图

- 给缓冲几何体设置uv坐标

- 通过new THREE.TextureLoader().load()给材质的map属性设置纹理贴图

```js
var geometry = new THREE.BufferGeometry();
// 设置顶点坐标
geometry.attributes.position = new THREE.BufferAttribute(new Float32Array(trigerArr), 3);
// 设置uv坐标
geometry.attributes.uv = new THREE.BufferAttribute(new Float32Array(uv), 2);
geometry.computeVertexNormals();
/**
 * 材质
 */
var material = new THREE.MeshLambertMaterial({
  // 设置材质的颜色
  color: 0x00ffff,
  // 设置材质的纹理贴图
  map: new THREE.TextureLoader().load('../../static/image/gradient.png'),
  // 两面可见
  side: THREE.DoubleSide,
  // 可透明
  transparent: true,
  depthTest: false
});
```
