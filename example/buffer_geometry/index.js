import * as THREE from "../../node_modules/three/build/three.module.js";
import { OrbitControls } from "../../node_modules/three/examples/jsm/controls/OrbitControls.js";

import { scene } from "./scene/index.js";

var width = window.innerWidth;
var height = window.innerHeight;

/**
 * 创建透视相机
 */

var camera = new THREE.PerspectiveCamera(30, width/height, 1, 3000);
camera.position.set(292, 223, 185);
camera.lookAt(0, 0, 0);

/**
 * 渲染器
 */
var renderer = new THREE.WebGLRenderer({
    antialias: true // 开启抗锯齿
});
renderer.setSize(width, height);
renderer.setPixelRatio(window.devicePixelRatio);

/**
 * 控制器
 */
var controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);
controls.update();

function render() {
    renderer.render(scene, camera);
    window.requestAnimationFrame(render);
}
render();

export { renderer }