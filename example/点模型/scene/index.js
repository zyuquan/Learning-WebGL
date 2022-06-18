import * as THREE from "../../../node_modules/three/build/three.module.js";
import { lon2xy } from "../../../static/js/math.js";

import { model } from "./model.js";

var E = 121.49526536464691;
var N = 31.24189350905988;
// 计算中心点墨卡托坐标
var xy = lon2xy(E, N);
var x = xy.x;
var y = xy.y;

var scene = new THREE.Scene();

scene.add(model)

var axes = new THREE.AxesHelper(2550);
axes.position.set(x, y, 0);
scene.add(axes);

export { scene }