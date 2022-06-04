import * as THREE from "../../../node_modules/three/build/three.module.js";
import { model } from "./model.js";

import { lon2xy } from "../../../static/js/math.js";

var E = 121.49526536464691;
var N = 31.24189350905988;
// 计算中心点墨卡托坐标
var xy = lon2xy(E, N);
var x = xy.x;
var y = xy.y;


var scene = new THREE.Scene();

scene.add(model);

/**
 * 光照
 */
var direactor = new THREE.DirectionalLight(0xffffff, .8);
direactor.position.set(200, 400, 300);
scene.add(direactor);

var direactor1 = new THREE.DirectionalLight(0xffffff, .8);
direactor1.position.set(-200, -400, 300);
scene.add(direactor1);

var ambient = new THREE.AmbientLight(0xffffff, .3);
scene.add(ambient);


var axesHelper = new THREE.AxesHelper(255);
axesHelper.position.set(x, y, 0)
scene.add(axesHelper);

export { scene }