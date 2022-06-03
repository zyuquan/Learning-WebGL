### 通过数据文件创建模型



### 多边形平面（ShapeGeometry）

在已知多边形平面顶点坐标的情况下可以通过**ShapeGeometry**创建一个多边形平面对象

```js
  var shape = new THREE.Shape([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(2, 0),
    new THREE.Vector2(2, 2),
    new THREE.Vector2(0, 2)
  ]);
  var geometry = new THREE.ShapeGeometry(shape);
```

### GeoJSON数据加载

- 确定中心点经纬度或坐标（用于设置相机坐标等）
- 使用**FileLoader**加载器加载
```js
   // 加载器
  var loader = new THREE.FileLoader();
  // 加载文件类型
  loader.setResponseType("json");
  // 加载文件
  loader.load(name, function(data){
    // data
  })
```

### 工具

geojson.io：http://geojson.io/#map=2/20.0/0.0

百度地图坐标系统：https://api.map.baidu.com/lbsapi/getpoint/index.html

### 经纬度转墨卡托坐标系

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
// camera.position.set(292, 223, 185);//相机在Three.js三维坐标系中的位置
// camera.lookAt(0, 0, 0); //相机指向Three.js坐标系原点
// var E = 121.49131393432617;// 黄浦江几何中心坐标
// var N = 31.232206344604492;
var E = 121.49526536464691;//东方明珠经纬度坐标
var N = 31.24189350905988;
var xy = lon2xy(E,N);
var x = xy.x;
var y = xy.y;
camera.position.set(x+5000, y+5000, 5000);//5000是根据建筑物尺寸范围设置  数量级对应即可 具体数值不用精准
camera.lookAt(x,y,0);//根据黄浦江几何中心坐标或附近某个经纬度坐标设置
```

### 批量渲染（ExtrudeGeometry）

```js
var shapeArr = [
  new THREE.Shape([
    new THREE.Vector2(x, y), // 顶点坐标
    ...
  ]),
  ...
];
var geometry = new THREE.ExtrudeGeometry(
  shapeArr, // 多个多边形二维轮廓
  {
    depth: height, //拉伸高度
    bevelEnabled: false, //无倒角
  }
);
```