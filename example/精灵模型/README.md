### 精灵模型

- 加载纹理图片
``` js
    var texture = new THREE.TextureLoader().load(path);
```
- 使用精灵材质
``` js
    var material = new THREE.SpriteMaterial({
        map: texture,
        color
    })
```
- 创建精灵
``` js
    var sprite = new THREE.Sprite(material)
```
- 设置精灵大小和位置
``` js
    sprite.scale.set(x, y, z);
    sprite.position.set(x, y, z);
```
- 添加到场景
``` js
    scene.add(sprite)
```