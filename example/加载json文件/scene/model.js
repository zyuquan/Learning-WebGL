import * as THREE from "../../../node_modules/three/build/three.module.js";

import { shapeMesh } from "./shapeMesh.js";

/**
 * 模型分组
 */
var model = new THREE.Group();
/**
 * 文件加载器
 */
var loader = new THREE.FileLoader();
// 设置加载文件类型
loader.setResponseType("json");
// 加载文件
loader.load("../../static/json/beijing.json", function(data) {
    var buildGroup = new THREE.Group();
    data.features.forEach((build) => {
        if(build.geometry) {
            if(build.geometry.type === "Polygon") {
                build.geometry.coordinates = [build.geometry.coordinates];
            };
            buildGroup.add(shapeMesh(build.geometry.coordinates));
        }
    });
    model.add(buildGroup);
});

export { model }