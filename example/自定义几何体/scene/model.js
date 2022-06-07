import * as THREE from "../../../node_modules/three/build/three.module.js";

var model = new THREE.Group();

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
geometry.attributes.position = new THREE.BufferAttribute(new Float32Array(vectorArr), 3);
geometry.computeVertexNormals();
var material = new THREE.MeshLambertMaterial({
    color: 0x009999,
    side: THREE.DoubleSide
});

var mesh = new THREE.Mesh(geometry, material);
mesh.rotateX(-Math.PI / 2);
model.add(mesh);

// 网格
var grid = new THREE.GridHelper(300, 10, 0x003333, 0x003333);
model.add(grid);

// 平面
var plane = new THREE.PlaneGeometry(300, 300);
var planeMaterial = new THREE.MeshLambertMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.1,
    side: THREE.DoubleSide,
});
var planeMesh = new THREE.Mesh(plane, planeMaterial);
planeMesh.rotateX(-Math.PI / 2);
model.add(planeMesh);

export { model }