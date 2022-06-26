import * as THREE from "../../node_modules/three/build/three.module.js";
import { CSS2DRenderer } from "../../node_modules/three/examples/jsm/renderers/CSS2DRenderer.js";
import { OrbitControls } from "../../node_modules/three/examples/jsm/controls/OrbitControls.js";
import { scene } from "./scene/index.js";

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

var cssRenderer = new CSS2DRenderer();
cssRenderer.setSize(width, height);
cssRenderer.domElement.style.position = "absolute";
cssRenderer.domElement.style.top = "0";
cssRenderer.domElement.style.left = "0";
cssRenderer.domElement.style.pointerEvents = "none";


var controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);
controls.update();


function render() {
    renderer.render(scene, camera);
    cssRenderer.render(scene, camera);
    window.requestAnimationFrame(render);
}
render();
export { renderer, cssRenderer }