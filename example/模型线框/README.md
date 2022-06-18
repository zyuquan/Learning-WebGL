### 线框模型

```js
var edges = new THREE.EdgesGeometry(geometry, 50);
var lineMaterial = new THREE.LineBasicMaterial({
    color: 0xffffff
});
var line = new THREE.LineSegments(edges, lineMaterial);
```