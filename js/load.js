

//资讯详情页面图片点击跳转
$(document).on('click','img',function(){
    if (this.dataset.href){
        window.location.href=this.dataset.href
    }
});
function __CreateJSPath(js) {
    var scripts = document.getElementsByTagName("script");
    var path = "";
    for (var i = 0, l = scripts.length; i < l; i++) {
        var src = scripts[i].src;
        if (src.indexOf(js) != -1) {
            var ss = src.split(js);
            path = ss[0];
            break;
        }
    }

    var href = location.href;
    href = href.split("#")[0];
    href = href.split("?")[0];
    var ss = href.split("/");
    ss.length = ss.length - 1;
    href = ss.join("/");
    if (path.indexOf("https:") == -1 && path.indexOf("http:") == -1 && path.indexOf("file:") == -1 && path.indexOf("\/") != 0) {
        path = href + "/" + path;
    }
    return path;

}

var BOOTPATH = __CreateJSPath("load.js")
function load(jsdir) {
    switch(jsdir) {
        //公共基础 axios
        case 'axios':{
            document.write('<script src="' + BOOTPATH + '/home.js"></script>')
            document.write('<script src="' + BOOTPATH + '/wow.min.js"></script>')
            document.write('<script src="' + BOOTPATH + '/vue.js"></script>')
            document.write('<script src="' + BOOTPATH + '/axios.min.js"></script>')
			document.write('<script src="' + BOOTPATH + '/service.js"></script>');
            document.write('<script src="' + BOOTPATH + '/qs.js"></script>');
            break;
        }
        default: {
            break;
        }
    }
}