import * as THREE from "../../../node_modules/three/build/three.module.js";

import { lon2xy } from "../../../static/js/math.js";

function shapeMesh(data) {
    var arr = [];
    data[0].forEach(el => {
        // 计算顶点墨卡托坐标
        var xy = lon2xy(el[0], el[1]);
        var v = new THREE.Vector2(xy.x, xy.y);
        arr.push(v);
    });
    var shape = new THREE.Shape(arr);
    var geometry = new THREE.ShapeGeometry(shape);
    /**
     * 材质对象
     */
    var material = new THREE.MeshLambertMaterial({
        color: 0x009999
    });
    /**
     * 网格模型对象
     */
    var mesh = new THREE.Mesh(geometry, material);
    return mesh;
}

export { shapeMesh }