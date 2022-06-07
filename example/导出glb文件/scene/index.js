import * as THREE from "../../../node_modules/three/build/three.module.js";
import { lon2xy } from "../../../static/js/math.js";

import { model } from "./model.js";

var E = 121.49526536464691;
var N = 31.24189350905988;

// 计算中心点墨卡托坐标
var xy = lon2xy(E, N);
var x = xy.x;
var y = xy.y;

/**
 * 场景
 */

var scene = new THREE.Scene();

scene.add(model);

/**
 * 光源
 */
// 平行光
var directional = new THREE.DirectionalLight(0xffffff, .8);
directional.position.set(300, 400, 200);
scene.add(directional);
// 平行光1
var directional1 = new THREE.DirectionalLight(0xffffff, .8);
directional1.position.set(-300, -400, 200);
scene.add(directional1);
// 环境光
var ambient = new THREE.AmbientLight(0xffffff, .3);
scene.add(ambient);

var axesHelper = new THREE.AxesHelper(255);
axesHelper.position.set(x, y, 0);
scene.add(axesHelper);

export { scene }