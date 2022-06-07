### 自定义几何体

```js
// 篱笆占地平面
var arr = [
    0.0, 0.0,
    30.0, 0.0,
    25.0, 45.0,
    -30.0, 30.0,
    -15.0, 15.0,
    0.0, 0.0
];
// 篱笆高度
var h = 10;
var vectorArr = [];
for(let i = 0; i < arr.length - 2; i += 2) {
    // 第一个三角形
    vectorArr.push(
        arr[i], arr[i+1], 0,
        arr[i+2], arr[i+3], 0,
        arr[i+2], arr[i+3], h
    );
    // 第二个三角形
    vectorArr.push(
        arr[i], arr[i+1], 0,
        arr[i+2], arr[i+3], h,
        arr[i], arr[i+1], h,
    )
};
// 声明空几何对象
var geometry = new THREE.BufferGeometry();

// 为当前几何体 attribute 属性 设置 position
geometry.attributes.position = new THREE.BufferAttribute(new Float32Array(vectorArr), 3);
// 通过面片法向量的平均值计算每个顶点的法向量
geometry.computeVertexNormals();

```