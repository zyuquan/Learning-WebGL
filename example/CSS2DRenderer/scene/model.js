import * as THREE from "../../../node_modules/three/build/three.module.js";
import { CSS2DObject } from "../../../node_modules/three/examples/jsm/renderers/CSS2DRenderer.js";

var model = new THREE.Group();

// 立方体
var geometry = new THREE.BoxGeometry(10, 10, 30);
var material = new THREE.MeshLambertMaterial({
    color: 0xff3300
})
var boxMesh = new THREE.Mesh(geometry, material);
boxMesh.translateZ(15);
model.add(boxMesh);

// html
var div = document.createElement("div");
div.innerHTML = "Hello World!";
div.style.width = "100px";
div.style.lineHeight = "30px";
div.style.borderRadius = "4px";
div.style.background = "rgba(255, 255, 255, .3)";
div.style.color = "#ffffff";
div.style.position = "absolute";

var label = new CSS2DObject(div);
console.log(boxMesh.position)
// label.position.copy(boxMesh.position);
// label.position.z += 15;
model.add(label);
document.body.appendChild(div);


// 网格
var grid = new THREE.GridHelper(300, 10, 0x003333, 0x003333);
grid.rotateX(Math.PI/2);
model.add(grid);
// 平面
var plane = new THREE.PlaneGeometry(300, 300);
var planeMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: .1,
    side: THREE.DoubleSide
})
var planeMesh = new THREE.Mesh(plane, planeMaterial);
model.add(planeMesh);

export { model }