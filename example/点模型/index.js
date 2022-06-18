import * as THREE from "../../node_modules/three/build/three.module.js";
import { OrbitControls } from "../../node_modules/three/examples/jsm/controls/OrbitControls.js";
import { lon2xy } from "../../static/js/math.js";

import { scene } from "./scene/index.js";

var width = window.innerWidth;
var height = window.innerHeight;

var E = 121.49526536464691;
var N = 31.24189350905988;
// 计算中心点墨卡托坐标
var xy = lon2xy(E, N);
var x = 12955314;//渲染范围几何中心坐标
var y = 4851434.5;

/**
 * 相机
 */
var camera = new THREE.PerspectiveCamera(30, width/height, 1, 2000000);
camera.position.set(12955889, 4793191, 41034);
camera.lookAt(x, y, 0);

/**
 * 渲染器
 */
var renderer = new THREE.WebGLRenderer({
    antialias: true
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(width, height);

/**
 * 控制器
 */
var controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(x, y, 0);
controls.update();

function render() {
    renderer.render(scene, camera);
    window.requestAnimationFrame(render);
}
render();

export { renderer }