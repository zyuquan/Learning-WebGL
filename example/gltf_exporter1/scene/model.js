import * as THREE from "../../../node_modules/three/build/three.module.js";
import { GLTFLoader } from "../../../node_modules/three/examples/jsm/loaders/GLTFLoader.js";

var model = new THREE.Group();

var loader = new GLTFLoader();
loader.load("../../static/glb/shanghaiwaitan.glb", function(glb) {
    // 递归遍历
    glb.scene.traverse(function(object) {
        // console.log(object)
        if(object.type === "Mesh") {
            object.material = new THREE.MeshLambertMaterial({
                color: object.material.color // 读取原来材质的颜色
            })
        }
    })
    model.add(glb.scene);
})

export { model };