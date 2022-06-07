import * as THREE from "../../node_modules/three/build/three.module.js";
import { OrbitControls } from "../../node_modules/three/examples/jsm/controls/OrbitControls.js";

import { scene } from "./scene/index.js";

import { lon2xy } from "../../static/js/math.js";

var width = window.innerWidth;
var height = window.innerHeight;

var E = 121.49526536464691;
var N = 31.24189350905988;
// 计算中心点墨卡托坐标
var xy = lon2xy(E, N);
var x = xy.x;
var y = xy.y;
console.log(xy)
/**
 * 透视相机
 */
var camera = new THREE.PerspectiveCamera(30, width/height, 1, 30000);
camera.position.set(x, y - 10000, 5000);
camera.lookAt(x, y, 0);

/**
 * 渲染器
 */
var renderer = new THREE.WebGLRenderer({
    antialials: true // 开启抗锯齿
});
renderer.setSize(width, height);
renderer.setPixelRatio(window.devicePixelRatio);

/**
 * 控制器
 */
var controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(x, y, 0);
controls.update();

window.onresize = function() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);

    camera.aspect = width/height;
    camera.updateProjectionMatrix();
}

function render() {
    renderer.render(scene, camera);
    window.requestAnimationFrame(render);
}
render();
export { renderer }
