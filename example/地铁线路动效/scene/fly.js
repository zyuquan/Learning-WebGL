import * as THREE from "../../../node_modules/three/build/three.module.js";

function fly(arr) {
    var vecArr = [];
    for(let i = 0; i < arr.length - 3; i += 3) {
        vecArr.push(new THREE.Vector3(arr[i], arr[i+1], arr[i+2]));
    };
    // 创建三维样条曲线
    var curve = new THREE.CatmullRomCurve3(vecArr);
    // 曲线上等间距返回多个顶点坐标
    var points = curve.getSpacedPoints(100);
    // console.log(points)

    var index = 20; // 取点索引位置
    var num = 15; // 取点个数
    var points2 = points.slice(index, index + num);
    var curve2 = new THREE.CatmullRomCurve3(points2);
    var newPoints2 = curve2.getSpacedPoints(100);

    // 飞线颜色
    var colorArr = [];
    // 飞线大小百分比
    var percentArr = [];
    // 地铁线路颜色
    var color1 = new THREE.Color(0x006666);
    // 飞线颜色
    var color2 = new THREE.Color(0x00ffff);
    for(let i = 0; i < newPoints2.length; i++) {
        percentArr.push(i / newPoints2.length);
        /**
         * lerp(color, alpha)
         * color - 用于收敛的颜色
         * alpha - 介于0到1的数字
         */
        var color = color1.lerp(color2, i / newPoints2.length);
        colorArr.push(color.r, color.g, color.b);
    }
    /**
     * 创建几何模型
     */
    var geometry = new THREE.BufferGeometry();
    // 
    geometry.setFromPoints(newPoints2);
    //
    geometry.attributes.percent = new THREE.BufferAttribute(new Float32Array(percentArr), 1);
    // 
    geometry.attributes.color = new THREE.BufferAttribute(new Float32Array(colorArr), 3);
    /**
     * 创建材质
     */
    var material = new THREE.PointsMaterial({
        // color: 0xff0000,
        size: 300.0,
        vertexColors: true
    });

    material.onBeforeCompile = function(shader) {
        shader.vertexShader = shader.vertexShader.replace(
            'void main() {',
            [
                'attribute float percent;',
                'void main() {'
            ].join('\n')
        )
        .replace(
            'gl_PointSize = size;',
            [
                'gl_PointSize = size * percent;'
            ].join('\n')
        );
    }

    /**
     * 动画
     */
    var maxIndex = points.length - num;
    function animation() {
        if(index > maxIndex) index = 0;
        index += 1;
        points2 = points.slice(index, index + num);
        curve2 = new THREE.CatmullRomCurve3(points2);
        newPoints2 = curve2.getSpacedPoints(100);
        geometry.setFromPoints(newPoints2);

        window.requestAnimationFrame(animation);
    }
    animation();

    var flyMesh = new THREE.Points(geometry, material);
    return flyMesh;
}

export { fly }