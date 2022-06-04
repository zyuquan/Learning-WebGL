import * as THREE from "../../../node_modules/three/build/three.module.js";

import { model } from "./model.js";

var scene = new THREE.Scene();

scene.add(model);

/**
 * 光源
 */
var directional = new THREE.DirectionalLight(0xffffff, .8);
directional.position.set(200, 300, 400);
scene.add(directional);

var directional1 = new THREE.DirectionalLight(0xffffff, .8);
directional1.position.set(-200, -300, 400);
scene.add(directional1);

var ambient = new THREE.AmbientLight(0xffffff, .3);
scene.add(ambient);


var asexHelper = new THREE.AxesHelper(255);
scene.add(asexHelper);

export { scene }