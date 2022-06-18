### 线模型

```js
var geometry = new THREE.BufferGeometry();
geometry.attributes.position = new THREE.BufferAttribute(new Float32Array(vectorArray), 3);
var material = new THREE.LineBasicMaterial({
    color: 0x006666
});
var mesh = new THREE.Line(geometry, material);
model.add(mesh);
```