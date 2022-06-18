### 序列动画

``` js
var w = 25, // 精灵的宽度
    h = 50, // 精灵的高度
    num = 15; // 图片的帧数

/**
 * 创建纹理对象
 */
var textureLoader = new THREE.TextureLoader();
// 加载纹理图片
var texture = textureLoader.load("../../static/image/fire.png");
// repeat设置uv两个方向纹理重复数量，1 / num 从图像上截取一帧
texture.repeat.set(1 / num, 1);

/**
 * 设置精灵材质对象
 */
var spriteMaterial = new THREE.SpriteMaterial({
    map: texture // 设置精灵纹理贴图
});
/**
 * 创建精灵模型对象
 */
var sprite = new THREE.Sprite(spriteMaterial);
// 控制精灵大小
sprite.scale.set(w, h, 1);
// 设置精灵位置
sprite.position.set(0, h / 2, 0)
model.add(sprite);

var t = 0;
function animate() {
    t += .1;
    if(t > num) {
        t = 0;
    }
    // 动态更新纹理偏移 播放关键帧动画
    texture.offset.x = Math.floor(t) / num;
    window.requestAnimationFrame(animate);
}
animate();
```