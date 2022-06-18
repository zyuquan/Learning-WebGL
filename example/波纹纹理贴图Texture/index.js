import * as THREE from "../../node_modules/three/build/three.module.js";
import { OrbitControls } from "../../node_modules/three/examples/jsm/controls/OrbitControls.js";

import { scene } from "./scene/index.js";

var width = window.innerWidth;
var height = window.innerHeight;

/**
 * 透视相机
 */
var camera = new THREE.PerspectiveCamera(30, width/height, 1, 3000);
camera.lookAt(0, 0, 0);
camera.position.set(0, 100, 300);

/**
 * 渲染器
 */
var renderer = new THREE.WebGLRenderer({
  antialias: true
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(width, height);

var controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);
controls.update();

function render() {
  renderer.render(scene, camera);
  window.requestAnimationFrame(render);
}

render();

export { renderer }

