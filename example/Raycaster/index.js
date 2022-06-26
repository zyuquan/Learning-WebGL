import * as THREE from "../../node_modules/three/build/three.module.js";

import { OrbitControls } from "../../node_modules/three/examples/jsm/controls/OrbitControls.js";
import { scene } from "./scene/index.js";
import { animation } from "./scene/model.js";

var width = window.innerWidth;
var height = window.innerHeight;
// 相机
var camera = new THREE.PerspectiveCamera(30, width/height, 1, 3000);
camera.position.set(0, -200, 400);
camera.lookAt(0, 0, 0);
// 渲染器
var renderer = new THREE.WebGLRenderer({
    antialias: true
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(width, height);
// 控制器
var controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);
controls.update();

// 
var raycaster = new THREE.Raycaster();
var pointer = new THREE.Vector2();
window.onclick = function(e) {
    console.log(e);
    pointer.x = (e.clientX - width / 2) / (width / 2);
    pointer.y = (height / 2 - e.clientY) / (height / 2);
};

function render() {
    renderer.render(scene, camera);
    animation(camera);
    // 通过摄像机和鼠标位置更新射线
    raycaster.setFromCamera(pointer, camera);
    // console.log(scene.children[0].children)
    var intersects = raycaster.intersectObjects(scene.children[0].children);
    // console.log(intersects);
    for(let i = 0; i < scene.children[0].children.length; i++) {
        if(scene.children[0].children[i].name) {
            // console.log(scene.children[0].children[i]);
            scene.children[0].children[i].material.opacity = 1.0;
        }
    }
    for(let i = 0; i < intersects.length; i++) {
        if(intersects[i].object.name) {
            // console.log(intersects[i].object);
            intersects[i].object.material.opacity = .5;
        }
    }

    window.requestAnimationFrame(render);
}
render();
export { renderer }