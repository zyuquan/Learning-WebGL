import * as THREE from "../../../node_modules/three/build/three.module.js";

import { lon2xy } from "../../../static/js/math.js";

function extrudeMesh(build, height) {
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
    var geometry = new THREE.ExtrudeGeometry(
        arr, // 多个多边形二维轮廓
        {
            depth: height, // 拉伸高度
            bevelEnabled: false // 无倒角
        }
    );
    var material = new THREE.MeshLambertMaterial({
        color: 0x009999
    });
    var mesh = new THREE.Mesh(geometry, material);
    return mesh;
}

export { extrudeMesh }