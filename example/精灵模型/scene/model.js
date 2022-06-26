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

// 精灵模型
var map = new THREE.TextureLoader().load("../../static/image/红豆.png");
var spriteMaterial = new THREE.SpriteMaterial({
    map: map,
    color: 0xffffff
});
var sprite = new THREE.Sprite(spriteMaterial);
sprite.scale.set(10, 10, 0);
sprite.translateZ(35);
model.add(sprite);


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