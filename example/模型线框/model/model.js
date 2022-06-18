import * as THREE from "../../../node_modules/three/build/three.module.js";
import { GLTFLoader } from "../../../node_modules/three/examples/jsm/loaders/GLTFLoader.js";

var model = new THREE.Group();

var loaders = new GLTFLoader();

loaders.load("../../static/glb/car.glb", function(gltf) {
    console.log(gltf);
    // 车主体色
    var car = gltf.scene.getObjectByName("??099_1");
    car.material = new THREE.MeshLambertMaterial({
        color: 0xd35a05,
        transparent: false
    });
    // 车玻璃
    var car1 = gltf.scene.getObjectByName("??099_4");
    car1.material = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: .8
    });
    // 车灯
    var car2 = gltf.scene.getObjectByName("??099_8");
    car2.material = new THREE.MeshLambertMaterial({
        color: 0xffa500,
        transparent: true,
        opacity: .8
    });

    gltf.scene.traverse(function(object) {
        if(object.type === "Mesh") {
            console.log(object);
            // object.material = new THREE.MeshLambertMaterial({
            //     color: 0x1A92C6, //批量设置颜色
            //     transparent: true,//允许透明计算
            //     opacity: 0.7,//半透明设置
            // });
            // 设置模型边线
            var edges = new THREE.EdgesGeometry(object.geometry, 50);
            var lineMaterial = new THREE.LineBasicMaterial({
                color: 0xffffff
            });
            var line = new THREE.LineSegments(edges, lineMaterial);
            object.add(line);
        }
    })
    gltf.scene.rotateX(Math.PI/2);
    model.add(gltf.scene)
});

export { model }