import * as THREE from "../../node_modules/three/build/three.module.js";
import { OrbitControls } from "../../node_modules/three/examples/jsm/controls/OrbitControls.js";
import { scene } from "./scene/index.js";

// 获取窗口宽高用来设置画布
var width = window.innerWidth;
var height = window.innerHeight;
console.log(THREE)

/**
 * 透视投影相机设置
 */
// 30：视场角度 width/height：画布宽高比 1：近裁截面，3000：远裁截面
var camera = new THREE.PerspectiveCamera(30, width/height, 1, 30000);
// 设置相机位置
camera.position.set(-1496, 1559, 2715);
// 相机指向
camera.lookAt(0, 0, 0);

/**
 * 渲染器对象
 */
var renderer = new THREE.WebGLRenderer({
    antialias: true, // 开启锯齿
});
// 设置像素比率，防止Canvas画布输出模糊
renderer.setPixelRatio(window.devicePixelRatio);
// 设置渲染区域尺寸
renderer.setSize(width, height);
// 设置背景颜色
// renderer.setClearColor(0xffffff, 1);
// renderer.domElement表示Three.js渲染结果，也就是一个HTML元素（Canvas画布）
// document.body.appendChild(renderer.domElement);


/**
 * 可监听鼠标变化，改变相机对象的属性
 */
var controls = new OrbitControls(camera, renderer.domElement);

window.onresize = function() {
    // 重新渲染画布尺寸
    renderer.setSize(window.innerWidth, window.innerHeight);
    // 设置观察范围宽高比aspect为窗口宽高比
    camera.aspect = window.innerWidth / window.innerHeight;
    /**
     * 渲染器执行render方法时会读取相机对象的投影矩阵projectionMatrix
     * 但不会每渲染一帧，就通过相机的属性计算投影矩阵（节约计算资源）
     * 如果相机的一些属性发生了变化，需要执行updateProjectionMatrix()方法更新相机的投影矩阵
     */
    camera.updateProjectionMatrix();
}

function render() {
    renderer.render(scene, camera);
    window.requestAnimationFrame(render);
}
render();
export { renderer }
