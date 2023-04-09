
// 实例化地图视图对象
var view = new ol.View(
    {
        center: [12950000, 4860000],
        zoom: 10
    });

// 实例化map对象并加载地图
var map = new ol.Map(
    {
        target: "map",
        layers: [
            new ol.layer.Tile({
                title: "天地图矢量图层",
                source: new ol.source.XYZ({
                    url: "http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=54652deda05d40f5fa0a77b74fa7edb9",
                    wrapX: false

                })
            }),
            new ol.layer.Tile({
                title: "天地图矢量注记",
                source: new ol.source.XYZ({
                    url: "http://t0.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=54652deda05d40f5fa0a77b74fa7edb9",
                    wrapX: false
                })
            })
        ],
        loadTilesWhileAnimating: true,
        view: view
    });

//加载控件
//实例化ol.control.zoomSlider控件并加载到地图容器中
var zoomslider = new ol.control.ZoomSlider();
map.addControl(zoomslider);
//实例化ol.control.zoomToExtent控件并加载到地图容器中
var zoomToExtent = new ol.control.ZoomToExtent({
    extent: [13100000, 4290000, 13200000, 5210000]
});
map.addControl(zoomToExtent);

//比例尺控件
var scaleLineControl = new ol.control.ScaleLine({
    units: "metric"//设置比例尺单位，degrees、imperial、us、nautical、metric（度量单位）
})
map.addControl(scaleLineControl);

//鼠标控件
var mousePositionControl = new ol.control.MousePosition({
    coordinateFormat: ol.coordinate.createStringXY(4),
    projection: 'EPSG:4326',
    className: 'custom-mouse-position',
    target: document.getElementById('mouse-position'),
    undefinedHTML: '&nbsp;'
});
map.addControl(mousePositionControl)

// 定位点
var shenyang = ol.proj.fromLonLat([123.24, 41.50]);
var beijing = ol.proj.fromLonLat([116.28, 39.54]);
var shanghai = ol.proj.fromLonLat([121.29, 31.54]);
var wuhan = ol.proj.fromLonLat([114.21, 30.37]);
var guangzhou = ol.proj.fromLonLat([113.15, 23.08]);
var haikou = ol.proj.fromLonLat([110.20, 20.02]);

console.log("动画效果已调用")

//  获取反弹值
function bounce(t) {
    var s = 7.5625, p = 2.75, l;
    if (t < (1 / p)) {
        l = s * t * t;
    }
    else {
        if (t < (2 / p)) {
            t -= (1.5 / p);
            l = s * t * t + 0.75;
        }
        else {
            if (t < (2.5 / p)) {
                t -= (2.25 / p);
                l = s * t * t + 0.9375;
            } else {
                t -= (2.625 / p);
                l = s * t * +0.984375;
            }
        }
    }
    return l;
}



// 获取弹性伸缩值
function elastic(t) {
    return Math.pow(2, -10 * t) * Math.sin((t - 0.075) * (2 * Math.PI) / 0.3) + 1;
}


// 旋转定位

document.getElementById("spin").onclick = function () {
    var center = view.getCenter();

    console.log('start')
    view.animate(
        {
            // 第一个过程
            center: [
                center[0] + (shenyang[0] - shenyang[0]) / 2,
                center[1] + (shenyang[1] - shenyang[1]) / 2
            ],
            rotation: Math.PI,               //旋转180°
            easing: ol.easing.easeOut        //控制动画速度,开始快速并逐渐减慢
        },
        {
            //第二个过程
            center: shenyang,                //动画结束时的视图中心
            rotation: 2 * Math.PI,             //结束时的旋转角度
            easing: ol.easing.easeOut        //动画速度
        }
    );
};


// 弹性伸缩效果定位
document.getElementById("elastic").onclick = function () {
    console.log('start1')
    view.animate(
        {
            center: beijing,         //视图中心
            duration: 2000,          //动画持续时间(ms)
            easing: elastic          //控制动画持续时间的函数
        }
    );
};


// 反弹效果定位
document.getElementById("bounce").onclick = function () {
    console.log('start2')
    view.animate(
        {
            center: shanghai,
            duration: 2000,
            easing: bounce
        }
    );
};

// 自旋效果定位
document.getElementById("rotate").onclick = function () {
    console.log('start3')
    var rotation = view.getRotation();
    view.animate(
        // 第一个过程
        {
            rotation: rotation + Math.PI,
            center: wuhan,
            easing: ol.easing.easeIn             //动画速度,开始缓慢并逐渐加速
        },
        {
            rotation: rotation + 2 * Math.PI,
            center: wuhan,
            easing: ol.easing.easeOut            //动画速度,开始快速并逐渐减速
        }
    );
};

// 飞行效果定位
document.getElementById("fly").onclick = function () {
    console.log('start4')
    var duration = 2000;
    var zoom = view.getZoom();
    var parts = 2;
    var called = false;

    // 动画完成的回调函数
    function callback(complete) {
        --parts;
        if (called) {
            return;
        }
        if (parts === 0 || !complete) {
            called = true;
            done(complete);
        }
    }

    // 第一个动画
    view.animate(
        {
            center: guangzhou,
            duration: duration
        }, callback
    );
    // 第二个动画
    view.animate(
        {
            zoom: zoom - 1,
            duration: duration / 2
        },
        {
            zoom: zoom,
            duration: duration / 2
        }, callback
    );
};
