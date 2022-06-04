import * as THREE from "../../../node_modules/three/build/three.module.js";

import {
    GLTFLoader
} from "../../../node_modules/three/examples/jsm/loaders/GLTFLoader.js";

// 声明一个组对象，用来添加城市三维模型对象
var model = new THREE.Group();

// 创建一个GLTF加载器
var loader = new GLTFLoader();

loader.load("../../static/glb/shanghai.glb", function(gltf) {
    console.log("gltf对象结构", gltf);
    // 设置地面材质
    var Floor = gltf.scene.getObjectByName("地面");
    Floor.material = new THREE.MeshLambertMaterial({
        color: 0x444433,
    });
    // 设置河面材质
    var River = gltf.scene.getObjectByName("河面");
    River.material = new THREE.MeshLambertMaterial({
        color: 0x336633,
    });
    // 所有建筑物递归遍历批量设置材质
    gltf.scene.getObjectByName("楼房").traverse(function(object) {
        if(object.type === "Mesh") {
            object.material = new THREE.MeshLambertMaterial({
                color: 0xffffff,
            });
        }
    });
    // 单独设置东方明珠材质
    var dongfang = gltf.scene.getObjectByName("东方明珠");
    dongfang.material = new THREE.MeshLambertMaterial({
        color: 0x996633,
    });

    // 把gltf.scene中的所有模型添加到model组对象中
    model.add(gltf.scene);
})

export { model }