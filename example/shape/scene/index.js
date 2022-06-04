import * as THREE from ".././../../node_modules/three/build/three.module.js";

import { model } from "./model.js";

/**
 * 多边形经纬坐标或中心点坐标
 */
var x = 116.395645038;
var y = 39.9299857781;
// var x = 0;
// var y = 0;

/**
 * 创建场景对象
 */
var scene = new THREE.Scene();

scene.add(model);

/**
 * 光源设置
 */
// 平行光
var directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(200, 400, 300);
scene.add(directionalLight);

// 平行光2
var directionalLight2 = new THREE.DirectionalLight(0xffffff, .8);
directionalLight2.position.set(-200, -400, 300);
scene.add(directionalLight2);

// 环境光
var ambient = new THREE.AmbientLight(0xffffff, .3);
scene.add(ambient);


var axesHelper = new THREE.AxesHelper(255);
axesHelper.position.set(x, y, 0);
scene.add(axesHelper);

export { scene };