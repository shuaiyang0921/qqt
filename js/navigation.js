$(".homeHead_popUpStyle").mousemove(function(){
    // console.log(event.clientX)
    if (event.clientX<124){
        $(".homeHead_popUpStyle").css({
            "border-radius": "0px 0px 4px 4px",
            "box-shadow": "0px 8px 16px 0px rgba(0,0,0,0.04)",
            "position": "absolute",
            "top": "74px",
            "left": "0px",
            "width": "100%",
            "z-index": "10",
            "opacity": "0",
            "height": "0",
            "overflow": "hidden",
            "max-height": "20px",
            "transition": "max-height .25s ease-in-out,opacity .25s ease-in-out"

        })
    }
});
$(".hobverPopUp").mouseenter(function (){
    $(".homeHead_popUpStyle").attr("style","")
})

//获取友情链接数据
var _getData = p => get('/websiteBlogroll/noToken/list', p);
_getData({})
    .then(res => {
        if (res.code==200){
            vm.blogrollList=res.result;
        }else {
            vm.blogrollList=[];
        }
    }).catch(err => {
        console.log(err,'_getData获取数据异常');
    })

//获取基本信息数据
var _getBaseInfo = p => get('/baseInfo/websiteBaseInfo/noToken/queryBaseInfo', p);
_getBaseInfo({})
    .then(res => {
        if (res.code==200){
            vm.baseInfo=res.result;
        }else {
            vm.baseInfo={};
        }
    }).catch(err => {
    console.log(err,'_getBaseInfo获取数据异常');
})
//获取其他的一下设置信息
var _getOtherSet = p => get('/websiteOther/noToken/queryPosition', p);
_getOtherSet({positions:"1,2"})
    .then(res => {
        if (res.code==200){
            vm.kefuInfo=res.result;
        }else {
            vm.kefuInfo=[];
        }
    }).catch(err => {
    console.log(err,'_OtherSet获取数据异常');
})
//获取顶部导航数据
var _getTopNav = p => get('/websiteNav/noToken/queryByType', p);
_getTopNav({
    type:1,
})
    .then(res => {
        if (res.code==200){
            res.result.forEach(rel=>{
                vm.topNav.push(rel);
            })
            vm.topNavShow=true;
        }

    })
    .catch(err => {
        console.log(err,'_getTopNav获取数据异常');
    })

//获取底部公用的banner
var _getBottomNav = p => get('/banner/noToken/queryByType', p);
_getBottomNav({
    bannerType:2,
})
    .then(res => {
        if (res.code==200){
            console.log(res.result)
            vm.bottomBanner=res.result;
        }

    })
    .catch(err => {
        console.log(err,'_getBottomNav获取数据异常');
    })


//
//
// var div="<div class=\"rightView_kf\" @click=\"showAiFanFan\">\n" +
//     "\t\t\t\t\t<div class=\"rightView_kfImg\"><img src=\"https://51qqt.com/img/right_kefu.png\" class=\"imgsize\"></div>\n" +
//     "\t\t\t\t\t<div class=\"f14 tac rightView_kfText\">在线咨询</div>\n" +
//     "\t\t\t\t\t<div class=\"rightView_showkf\">\n" +
//     "\t\t\t\t\t\t<div class=\"flex-column flex-between flex-middle rightView_showkfList \">\n" +
//     "\t\t\t\t\t\t\t<div class=\"flex-column flex-middle\">\n" +
//     "\t\t\t\t\t\t\t\t<div class=\"rightView_showkfImg\"><img src=\"https://51qqt.com/img/right_shouqian.png\" class=\"imgsize\"></div>\n" +
//     "\t\t\t\t\t\t\t\t<div>\n" +
//     "\t\t\t\t\t\t\t\t\t<div class=\"f16 rightView_showkfTitle\">售前咨询</div>\n" +
//     "\t\t\t\t\t\t\t\t\t<div class=\"f14 rightView_showkfText\">人工客户在线沟通</div>\n" +
//     "\t\t\t\t\t\t\t\t</div>\n" +
//     "\t\t\t\t\t\t\t</div>\n" +
//     "\t\t\t\t\t\t\t<div class=\"rightView_right\"></div>\n" +
//     "\t\t\t\t\t\t</div>\n" +
//     "\t\t\t\t\t\t<!-- <div class=\"flex-column flex-between flex-middle rightView_showkfList xian_head\">\n" +
//     "\t\t\t\t\t\t\t<div class=\"flex-column flex-middle\">\n" +
//     "\t\t\t\t\t\t\t\t<div class=\"rightView_showkfImg\"><img src=\"https://51qqt.com/img/right_shouhou.png\" class=\"imgsize\"></div>\n" +
//     "\t\t\t\t\t\t\t\t<div>\n" +
//     "\t\t\t\t\t\t\t\t\t<div class=\"f16 rightView_showkfTitle\">售后咨询</div>\n" +
//     "\t\t\t\t\t\t\t\t\t<div class=\"f14 rightView_showkfText\">专业售后客户解答</div>\n" +
//     "\t\t\t\t\t\t\t\t</div>\n" +
//     "\t\t\t\t\t\t\t</div>\n" +
//     "\t\t\t\t\t\t\t<div class=\"rightView_right\"></div>\n" +
//     "\t\t\t\t\t\t</div> -->\n" +
//     "\t\t\t\t\t</div>\n" +
//     "\t\t\t\t</div>\n" +
//     "\t\t\t\t<div class=\"rightView_trial\" @click=\"showregistermodal('',3,'')\">\n" +
//     "\t\t\t\t\t<div class=\"rightView_trialImg\"><img src=\"https://51qqt.com/img/right_shiyong.png\" class=\"imgsize\"></div>\n" +
//     "\t\t\t\t\t<div class=\"f14 rightView_trialText\">免费试用</div>\n" +
//     "\t\t\t\t</div>\n" +
//     "\t\t\t\t<div class=\"rightView_trial\">\n" +
//     "\t\t\t\t\t<div class=\"rightView_trialImg\"><img src=\"https://51qqt.com/img/right_chatUs.png\" class=\"imgsize\"></div>\n" +
//     "\t\t\t\t\t<div class=\"f14 rightView_trialText\">联系我们</div>\n" +
//     "\t\t\t\t\t<div class=\"rightView_chatUs\">\n" +
//     "\t\t\t\t\t\t<div class=\"rightView_chatUsImg\"><img src=\"https://51qqt.com/img/chatUs_erwei.png\" class=\"imgsize\"></div>\n" +
//     "\t\t\t\t\t\t<div class=\"f14 tac rightView_chatUsText\">采购数字化管理专家</div>\n" +
//     "\t\t\t\t\t</div>\n" +
//     "\t\t\t\t</div>";
// var test=document.createElement("div");
// test.classList.add("rightView");
// test.innerHTML=div;
// console.log(document.getElementById("app"))
// document.getElementById("app").appendChild(test)