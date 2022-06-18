import * as THREE from "../../../node_modules/three/build/three.module.js";
import { model } from "./model.js";

var scene = new THREE.Scene();

scene.add(model);

var directional = new THREE.DirectionalLight(0xffffff, .3);
directional.position.set(300, 200, 400);
scene.add(directional);

var directional1 = new THREE.DirectionalLight(0xffffff, .3);
directional1.position.set(-300, -200, 400);
scene.add(directional1);

var ambital = new THREE.AmbientLight(0xffffff, .4);
scene.add(ambital);

var axesHelper = new THREE.AxesHelper(255);
scene.add(axesHelper);


export { scene }