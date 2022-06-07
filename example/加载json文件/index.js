import * as THREE from "../../node_modules/three/build/three.module.js";
import { OrbitControls } from "../../node_modules/three/examples/jsm/controls/OrbitControls.js";

import { scene } from "./scene/index.js";

/**
 * 可视窗口的宽高
 */
var width = window.innerWidth;
var height = window.innerHeight;
/**
 * 多边形经纬坐标或中心点坐标
 */
 var x = 116.395645038;
 var y = 39.9299857781;

// var x = 0;
// var y = 0;

/**
 * 透视相机设置
 * {fov} 视野角度 30
 * {aspect} 视锥体长宽比 width/height
 * {near} 视锥体近端面 0.001
 * {far} 视锥体远端面 30000
 */
var camera = new THREE.PerspectiveCamera(30, width/height, 0.001, 3000);

// 相机所在位置
camera.position.set(x+.02, y+.02, .02);
// 相机指向
camera.lookAt(x, y, 0);

/**
 * 渲染器对象
 */
var renderer = new THREE.WebGLRenderer({
    antialias: true, // 开启抗锯齿
});

renderer.setPixelRatio(window.devicePixelRatio); // 设置像素比
renderer.setSize(width, height); // 设置canvas大小

/**
 * 控制器可以控制相机围绕目标进行轨道运动
 * 鼠标左键拖动 使目标旋转
 * 鼠标右键拖动 使目标旋转
 * 滚动滚轮 放大缩小
 */
var controls = new OrbitControls(camera, renderer.domElement);
// 控制器的焦点，Object的轨道围绕其运行
controls.target.set(x, y, 0);
// 更新控制器
controls.update();

window.onresize = function() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
}

function render() {
    renderer.render(scene, camera);
    window.requestAnimationFrame(render);
}

render();

export { renderer };