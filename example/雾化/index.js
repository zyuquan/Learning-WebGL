import * as THREE from "../../node_modules/three/build/three.module.js";
import { OrbitControls } from "../../node_modules/three/examples/jsm/controls/OrbitControls.js";
import { lon2xy } from "../../static/js/math.js";

import { scene } from "./scene/index.js";

var width = window.innerWidth;
var height = window.innerHeight;

/**
 * 多边形经纬坐标或中心点坐标
 */
 var E = 121.49526536464691;
 var N = 31.24189350905988;

 var xy = lon2xy(E, N);
 var x = xy.x;
 var y = xy.y;

/**
 * 相机
 */
var camera = new THREE.PerspectiveCamera(30, width/height, .001, 30000);
camera.position.set(x, y-5000, 5000);
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