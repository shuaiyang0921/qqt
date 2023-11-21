function getQueryVariable(variable)
{
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
    }
    return(false); 
}
// 图片懒加载
var imgs = document.getElementsByTagName('img');
function lazyLoad(imgs) {
    // 视口的高度；
     const clientH = document.documentElement.clientHeight;
    // 滚动的距离，这里的逻辑判断是为了做兼容性处理；
    const clientT = document.documentElement.scrollTop;
    for(let i = 0; i < imgs.length; i++) {
        // 逻辑判断，如果视口高度+滚动距离 > 图片到浏览器顶部的距离就去加载；
        // !imgs[i].src 是避免重复请求，可以把该条件取消试试：可以看到不加该条件的话往回滚动就会重复请求；
        if(clientH + clientT > imgs[i].offsetTop && !imgs[i].src) {
            // 使用data-xx的自定义属性可以通过dom元素的dataset.xx取得；
            imgs[i].src = imgs[i].dataset.src;
        }
    }
};
// 一开始能够加载显示在视口中的图片；
lazyLoad(imgs);
// 监听滚动事件，加载后面的图片；
window.onscroll = () => lazyLoad(imgs);

$(document).ready(function(){
    var onOff = true;
    var onchind = true;
    $('.menu_button').click(function(){
        console.log($(this))
        event.stopPropagation();
        $(this).toggleClass("cross");
        if(onOff){
            $('.header').css("height","100%");
            $('.shownavs').show();
        }else{
            $('.header').css("height","auto");
            $('.shownavs').hide();
        }
        onOff = !onOff;
    });
    $('.homephoneHead_right').eq(0).show().siblings('.homephoneHead_right').hide();



    $(document).on('click','.homephoneHead_left>a',function(){
        event.stopPropagation();
        index=$(this).index();
        // console.log(index,$('.homephoneHead_right'))
        $('.homephoneHead_left>a').eq(index).addClass('homephoneHead_leftList').siblings().removeClass('homephoneHead_leftList');
        if(index==3){
            $('.homephoneHead_right').eq(2).show().siblings('.homephoneHead_right').hide();
        }else if(index==5){
            $('.homephoneHead_right').eq(3).show().siblings('.homephoneHead_right').hide();
        }else{
            $('.homephoneHead_right').eq(index).show().siblings('.homephoneHead_right').hide();
        }
    });
    window.onscroll=function(){
        let t = document.documentElement.scrollTop || document.body.scrollTop
        var header = document.getElementsByClassName('header');
        if(t==0){
            header[0].style.backgroundColor = 'rgba(255,255,255,0.8)'
            header[0].style.boxShadow = 'none'
        }else{
            header[0].style.backgroundColor = 'rgba(255,255,255,1)'
            header[0].style.boxShadow = '0px 8px 20px 0px rgba(166,180,208,0.3)'
        }
    }
    new WOW().init();
    // 刷新页面滚动条到达顶部
    window.addEventListener("load", () => {
        setTimeout(()=>{
            window.scrollTo(0, 0);
        },100)
    });
    
    // $('.homephoneHead_navchild_Subhead>.homephoneHead_navicon').click(function(){
    //     event.stopPropagation();
    //     index=$(this).index();
    //     console.log(index, $(this)[0].style.transform)
    //     if($(this)[0].style.transform=='translateY(4px) rotate(180deg)'){
    //         $(this).parent().siblings(".shownavchild_text").hide();
    //         $(this).parent().css("color","#222222");
    //         $(this).css("transform","none");
    //     }else{
    //         console.log($(this).parent())
    //         $(this).parent().siblings(".shownavchild_text").show()
    //         $(this).parent().css("color","#005CEF");
    //         $(this).css("transform","translateY(4px) rotate(180deg)");
    //     }
    // });
    
    
    // $('.home_Solution_tabs>div').click(function(){
    //     event.stopPropagation();
    //     index=$(this).index();
    //     $('.home_Solution_tabs>div').removeClass('home_Solution_tab')
    //     $('.home_Solution_tabs>div').eq(index).addClass('home_Solution_tab')
    //     $('.home_Solution_item').removeClass('showitem')
    //     $('.home_Solution_item').eq(index).addClass('showitem')
    //     if(index==1){
    //         $('.home_Solution').css({"background":"url(https://51qqt.com/img/home41.png) no-repeat center center","background-size": "cover"});
    //     }else{
    //         $('.home_Solution').css({"background":"url(https://51qqt.com/img/home159.png) no-repeat center center","background-size": "cover"});
    //     }
    //     // $('.home_Solution_item').eq(index).show()
    //     // changenum = index
    //     // $('.homeHead_adverstyle').animate({'left':-(changenum*100)+'%'},0);
    // });
    // // $('.home_Solutionleft>div').click(function(){
    // //     event.stopPropagation();
    // //     index=$(this).index();
    // //     // $('.home_Solutionleft>div').removeClass('bgblue')
    // //     $('.home_Solutionleft>div').eq(index).addClass('bgblue').siblings().removeClass('bgblue')
    // //     // $('.home_Solution_item .home_Solution_rightwidth').not(index).css("display","none");
    // //     $('.home_Solution_item .home_Solution_rightwidth').eq(index).css("display","flex").siblings().css("display","none");
    // //     if(index==7){
    // //         console.log($('.home_Solution').css("background"))
    // //         $('.home_Solution').css({"background":"url(https://51qqt.com/img/home158.png) no-repeat center center","background-size": "cover"});
    // //         console.log($('.home_Solution').css("background"))
    // //     }else{
    // //         $('.home_Solution').css({"background":"url(https://51qqt.com/img/home159.png) no-repeat center center","background-size": "cover"});
    // //     }
    // // });
    // $('.home_Solutionleftclike>div').click(function(){
    //     event.stopPropagation();
    //     index=$(this).index();
    //     $('.home_Solutionleftclike>div').removeClass('bgblue')
    //     $('.home_Solutionleftclike>div').eq(index).addClass('bgblue')
    // });
   });