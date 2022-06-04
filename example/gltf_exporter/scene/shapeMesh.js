import * as THREE from "../../../node_modules/three/build/three.module.js";

import { lon2xy } from "../../../static/js/math.js";

function shapeMesh(build) {
    var arr = [];
    build.forEach(b => {
        var vArr = [];
        b[0].forEach(a => {
            // 计算顶点墨卡托坐标
            var xy = lon2xy(a[0], a[1]);
            vArr.push(new THREE.Vector2(xy.x, xy.y));
        });
        var shape = new THREE.Shape(vArr);
        arr.push(shape);
    });
    var geometry = new THREE.ShapeGeometry(arr);
    var material = new THREE.MeshLambertMaterial({
        color: 0x009999
    });
    var mesh = new THREE.Mesh(geometry, material);
    return mesh;
}

export { shapeMesh }