import * as THREE from "../../../node_modules/three/build/three.module.js";
import { lon2xy } from "../../../static/js/math.js";

import { model } from "./model.js";

/**
 * 多边形经纬坐标或中心点坐标
 */
var E = 121.49526536464691;
var N = 31.24189350905988;

 var xy = lon2xy(E, N);
 var x = xy.x;
 var y = xy.y;

var scene = new THREE.Scene();

scene.add(model);

var directional = new THREE.DirectionalLight(0xffffff, .4);
directional.position.set(300, 400, 200);
scene.add(directional);

var directional1 = new THREE.DirectionalLight(0xffffff, .4);
directional1.position.set(-300, -400, 200);
scene.add(directional1);

var ambient = new THREE.AmbientLight(0xffffff, .3);
scene.add(ambient);

var axes = new THREE.AxesHelper(255);
axes.position.set(x, y, 0);
scene.add(axes);

// 设置雾化效果，雾的颜色和背景颜色相近，这样远处三维场景和背景颜色融为一体
// 结合相机参数设置Fog的参数2和参数3
scene.fog = new THREE.Fog(0x001111, 10, 12000);

export { scene }