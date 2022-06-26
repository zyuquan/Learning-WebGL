import * as THREE from "../../../node_modules/three/build/three.module.js";


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
var w = window.innerWidth / 2, h = window.innerHeight / 2;
var div = document.createElement("div");
div.innerHTML = "Hello World!";
div.style.width = "100px";
div.style.lineHeight = "30px";
div.style.borderRadius = "4px";
div.style.background = "rgba(255, 255, 255, .3)";
div.style.color = "#ffffff";
div.style.position = "absolute";

function animation(camera) {
    var position = new THREE.Vector3();
    // 获取模型世界坐标
    boxMesh.getWorldPosition(position);
    // 模型中心点在z轴为15的位置，要把div放置在模型正上方，所以z轴加15
    position.z += 15;
    // 获取模型的设备坐标(-1, 1)
    position = position.project(camera);
    // 通过设备坐标计算div定位，-30为div高度
    var top = h - (position.y * h) - 30;
    var left = w + (position.x * w);

    div.style.top = top + "px";
    div.style.left = left + "px";
}
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

export { model, animation }