$(function(){

    //导航栏搜索框的出现
    $(".header .header-inner .nav .search").on('click',function(){
        //alert(1)
        $(".header .header-inner .search-box,  .header .header-inner .nav .xiaoShi")
            .addClass("searching");
    })

    //导航栏搜索框的取消
    $(".header .header-inner .search-box .search-button .cancel").on("click",function(){
        $(".header .header-inner .search-box,  .header .header-inner .nav .xiaoShi")
            .toggleClass("searching");
    })

    //小屏时的面包屑下拉菜单
    $(".header .nav-phone .menu").on("click",function(){
        $(".header .nav-phone .menu .hang, .header .nav-phone .menu .shu, .header .menu-box").toggleClass("dianJi")
    })

    //banner部分开始
    //console.log(active)
    //var transitionTime=600;
    //var items=$(".banner .content li");
    //console.log(items.length)
    //var moving=false;
    //var magicMove=function(n,direction){
    //    moving=true;
    //    var active=$(".banner .content .active");
    //    //当前的一张的动画
    //    active
    //        .addClass("animage")
    //        .addClass(direction)
    //        .delay(transitionTime)
    //        .queue(function(){
    //            moving=false;
    //            $(this)
    //                .removeClass("active")
    //                .removeClass(direction)
    //                .dequeue();
    //        })
    //    //下一张动画
    //    var op=(direction=="left")?"right":"left";
    //    $(n).addClass(op);
    //    $(n).get(0).offsetWidth;
    //    $(n)
    //        .removeClass(op)
    //        .addClass("active")
    //        .delay(transitionTime)
    //        .queue(function () {
    //            $(this).addClass("animate").dequeue();
    //        })
    //    //小圆点动画
    //    $(".banner .pagegation li")
    //        .removeClass("active")
    //        .eq(items.index(n))
    //        .addClass("active");
    //}
    //
    ////左右按钮点击开始
    //var btnRight=$(".banner .moveright");
    //var btnLeft=$(".banner .moveleft");
    ////var n=active.next();
    //btnRight.on("click",function(){
    //    if(moving){
    //        return;
    //    }
    //    var active=$(".banner .content .active");
    //    if(active.next().length){
    //        var n=active.next();
    //    }else{
    //        var n=items.eq(0);
    //    }
    //    magicMove(n,"left");
    //})
    //btnLeft.on("click",function(){
    //    if(moving){
    //        return;
    //    }
    //    var active=$(".banner .content .active");
    //    if(active.prev().length){
    //        var n=active.prev();
    //    }else{
    //        var n=items.eq(-1);
    //    }
    //    magicMove(n,"right");
    //})
    //
    ////轮播指示原点开始
    //$(".banner .pagegation li").on("click",function(){
    //    var activeIndex=items.index($(".banner .content .active"))
    //    var currentIndex = $(this).index();
    //    var direction=(currentIndex>activeIndex)?'left':'right';
    //    magicMove(items.eq(currentIndex),direction);
    //})
    //var t=setInterval(function(){
    //    btnRight.trigger("click")
    //},2000)
    //$(".banner").on("mouseenter",function(){
    //    clearInterval(t)
    //})
    //$(".banner").on("mouseleave",function(){
    //    t=setInterval(function(){
    //        btnRight.trigger("click")
    //    },2000)
    //})


    var flag=false;
    var transitionTime=600;
    var magicMove = function(n,dir){
        flag=true;
        var active=$('.banner .content .active');
        active.addClass(dir)
            .delay(transitionTime)
            .queue(function(){
                flag=false;
                $(this)
                    .removeClass('active')
                    .removeClass(dir)
                    .dequeue();
            })
        var op=(dir=='left')?'right':'left';
        $(n).addClass(op);
        $(n).get(0).offsetWidth;
        $(n).removeClass(op)
            .addClass('active');
        $('.banner .pagegation li').removeClass('active').eq(items.index(n)).addClass('active');
    }
    var btnRight=$(".banner .moveright");
    var btnLeft=$(".banner .moveleft");
    var items=$(".banner .content li");
    btnRight.on('click',function(){
        if(flag){return;}
        var active=$('.banner .content .active');
        if(active.next().length){
            var n=active.next();
        }else {
            var n=items.eq(0)
        }
        magicMove(n,'left');
    })
    btnLeft.on('click',function(){
        if(flag){
            return
        }
        var active=$('.banner .content .active');
        if(active.prev().length){
            var n=active.prev();
        }else {
            var n=items.eq(-1)
        }
        magicMove(n,'right');
    })
    $('.banner .pagegation li').on('click',function(){
        if($(this).index()>items.index($('.banner .content .active'))){
            var dir='left';
        }else {
            var dir='right';
        }
        var n=items.eq($(this).index());
        magicMove(n,d);
    })

     var t=setInterval(function(){
         btnRight.trigger('click');
     },2000)

     $('.banner').on('mousemove',function(){
          clearInterval(t);
         btnLeft.css({opacity:1,});
         btnRight.css({opacity:1});
     })
     $('.banner').on('mouseout',function(){
         t=setInterval(function(){
             btnRight.trigger('click');
         },2000)
         btnLeft.css({opacity:0,});
         btnRight.css({opacity:0});
     })
    $(document).on('mousewheel',function(e){
        var ee= e.originalEvent.deltaY;
        if(ee>0){
            btnRight.trigger('click');
        }
        if(ee<0){
            btnLeft.trigger('click');
        }
    })
    //最底部show-list开始
    var show=$(".footer .footer-inner .show-list")
    show.on("click",function(){
        $(this).toggleClass("active");
    })
})