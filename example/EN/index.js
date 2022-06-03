import * as THREE from "../../node_modules/three/build/three.module.js";
import { OrbitControls } from "../../node_modules/three/examples/jsm/controls/OrbitControls.js";

import { scene } from "./scene/index.js";

import { lon2xy } from "./scene/math.js";

var width = window.innerWidth;
var height = window.innerHeight;

var E = 121.49526536464691;
var N = 31.24189350905988;
// 计算中心点墨卡托坐标
var xy = lon2xy(E, N);
var x = xy.x;
var y = xy.y;
/**
 * 透视相机对象
 * {fov} 视角 30
 * {aspect} 视锥体长宽比
 * {near} 视锥体近端面
 * {far} 视锥体远端面
 */
var camera = new THREE.PerspectiveCamera(30, width/height, 1, 30000);
camera.position.set(x+5000, y+5000, 5000);
camera.lookAt(x, y, 0);

/**
 * 渲染器对象
 */
var renderer = new THREE.WebGL1Renderer({
    antialias: true // 开启抗锯齿
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(width, height);

var controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(x, y, 0);
controls.update();

window.onresize = function() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);

    camera.aspect = width / height;
    camera.updateProjectionMatrix()
}

function render() {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
render();

export { renderer }

