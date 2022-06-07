import * as THREE from "../../../node_modules/three/build/three.module.js";

import output_fragment from "./output_fragment.glsl.js";

var model = new THREE.Group();

var arr = [
    0,0,
    50,0,
    50,50,
    0,50,
    -20,30,
    0,0
];

var h = 30;

var vArr = [];

for(let i = 0; i < arr.length - 2; i+=2) {
    vArr.push(
        arr[i], arr[i+1], 0,
        arr[i+2], arr[i+3], 0,
        arr[i+2], arr[i+3], h,

        arr[i], arr[i+1], 0,
        arr[i+2], arr[i+3], h,
        arr[i], arr[i+1], h
    );
}
// 缓冲几何体
var geometry = new THREE.BufferGeometry();
// 设置缓冲几何体的顶点位置坐标
geometry.attributes.position = new THREE.BufferAttribute(new Float32Array(vArr), 3);

// 声成顶点法向量
geometry.computeVertexNormals();
// 材质
var material = new THREE.MeshLambertMaterial({
    color: 0x009999,
    side: THREE.DoubleSide,
    transparent: true, //需要开启透明度计算，否则着色器透明度设置无效
    opacity: 0.5,//整体改变透明度
    depthTest: false
});

// GPU执行material对应的着色器代码前，通过onBeforeCompile()插入新的代码， 修改已有的代码
material.onBeforeCompile = function(shader) {
    // 浏览器控制台打印着色器代码
    console.log("shader.fragmentShader", shader.fragmentShader);
    // 顶点位置坐标position类似uv坐标进行插值计算，用于在片元着色器中控制片元像素
    shader.vertexShader = shader.vertexShader.replace(
        "void main() {",
        [
            "varying vec3 vPosition;",
            "void main() {",
            "vPosition = position;",
        ].join("\n") // .join()把数组元素合并成字符串
    );
    shader.fragmentShader = shader.fragmentShader.replace(
        "void main() {",
        [
            "varying vec3 vPosition;",
            "void main() {",
        ].join("\n")
    );
    shader.fragmentShader = shader.fragmentShader.replace("#include <output_fragment>", output_fragment);
}

// 生成网格体
var mesh = new THREE.Mesh(geometry, material);
mesh.rotateX(-Math.PI/2);
model.add(mesh);
// 辅助
var grid = new THREE.GridHelper(300, 4, 0x003333, 0x003333);
model.add(grid);
// 平面几何体
var plane = new THREE.PlaneGeometry(300, 300);
var planeMaterial = new THREE.MeshLambertMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.1,
    side: THREE.DoubleSide,
});

var planeMesh = new THREE.Mesh(plane, planeMaterial);
planeMesh.rotateX(-Math.PI/2);
model.add(planeMesh);

export { model };