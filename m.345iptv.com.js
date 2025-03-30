document.addEventListener("DOMContentLoaded", function () {
    let video = document.getElementsByTagName('video')[0];

    if (video) {
        // 让视频自动播放
        video.setAttribute("autoplay", "true");
        video.play().catch(error => console.log("自动播放失败:", error));

        // 让视频全屏并铺满整个页面
        video.style.position = "fixed";
        video.style.top = "0";
        video.style.left = "0";
        video.style.width = "100vw";
        video.style.height = "100vh";
        video.style.objectFit = "cover"; // 保持视频比例并填充整个屏幕
        video.style.zIndex = "9999"; // 置于最顶层

        // 隐藏干扰元素（导航栏、广告等）
        let elementsToHide = [
            ".nav_wrapper_bg", // 可能是导航栏背景
            ".header_nav", // 可能是顶部菜单
            ".video_right", // 可能是右侧广告
            ".footer", // 可能是底部元素
            ".ad_banner" // 可能是广告条
        ];
        elementsToHide.forEach(selector => {
            let elem = document.querySelector(selector);
            if (elem) {
                elem.style.display = "none";
            }
        });
    } else {
        console.log("未找到 <video> 元素");
    }
});
