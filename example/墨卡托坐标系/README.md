### 墨卡托坐标系

##### 经纬度转墨卡托坐标系

```javascript
// 墨卡托坐标系：展开地球，赤道作为x轴，向东为x轴正方，本初子午线作为y轴，向北为y轴正方向。
// 数字20037508.34是地球赤道周长的一半：地球半径6378137米，赤道周长2*PI*r = 2 * 20037508.3427892，墨卡托坐标x轴区间[-20037508.3427892,20037508.3427892]
function lon2xy(longitude, latitude) {
    var E = longitude;
    var N = latitude;
    var x = E * 20037508.34 / 180;
    var y = Math.log(Math.tan((90 + N) * Math.PI / 360)) / (Math.PI / 180);
    y = y * 20037508.34 / 180;
    return {
        x: x, //墨卡托x坐标——对应经度
        y: y, //墨卡托y坐标——对应维度
    }
}
```

### 相机适配
经纬度坐标转化为墨卡托坐标，注意相机的参数也要改变。
```js
/**
 * 透视投影相机设置
 */
// 30:视场角度, width / height:Canvas画布宽高比, 1:近裁截面, 3000：远裁截面
// var camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);
// 根据需要调整远裁截面 
var camera = new THREE.PerspectiveCamera(30, width / height,1, 30000);
var E = 121.49526536464691;// 经纬度坐标
var N = 31.24189350905988;
var xy = lon2xy(E,N);
var x = xy.x;
var y = xy.y;
camera.position.set(x+5000, y+5000, 5000);// 5000是根据建筑物尺寸范围设置  数量级对应即可 具体数值不用精准
camera.lookAt(x,y,0);// 几何中心坐标或附近某个经纬度坐标设置
```