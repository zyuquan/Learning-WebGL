import * as THREE from "../../../node_modules/three/build/three.module.js";
import { model } from "./model.js";

/**
 * 创建场景对象Scene
 */
var scene = new THREE.Scene();
// 将三维模型添加到场景中
scene.add(model);

/**
 * 光源设置
 */
// 平行光1
var directionalLight = new THREE.DirectionalLight(0xffffff, .3);
// 设置光源位置
directionalLight.position.set(400, 200, 300);
scene.add(directionalLight);
//平行光2
var directionalLight2 = new THREE.DirectionalLight(0xffffff, .6);
directionalLight2.position.set(-300, 600, -300);
scene.add(directionalLight2);
// 环境光
var ambient = new THREE.AmbientLight(0xffffff, .5);
scene.add(ambient);

/**
 * three.js三维坐标轴， 三个坐标轴颜色RGB分别对应xyz轴
 *  辅助工具
 */ 
var axesHelper = new THREE.AxesHelper(255);
scene.add(axesHelper);

export { scene }