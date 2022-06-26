import * as THREE from "../../node_modules/three/build/three.module.js";

import { OrbitControls } from "../../node_modules/three/examples/jsm/controls/OrbitControls.js";
import { scene } from "./scene/index.js";
import { animation } from "./scene/model.js";

var width = window.innerWidth;
var height = window.innerHeight;

var camera = new THREE.PerspectiveCamera(30, width/height, 1, 3000);
camera.position.set(0, -200, 400);
camera.lookAt(0, 0, 0);

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
    animation(camera);
    window.requestAnimationFrame(render);
}
render();
export { renderer }