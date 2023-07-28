// ==UserScript==
// @name         取消非不必要广告
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @match      *://*.csdn.net/*
// @require      https://cdn.bootcdn.net/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.js
// ==/UserScript==

(function() {
    'use strict';
$(".blog_container_aside").remove()
$(".aside-box").remove()
$("#pcCommentBox").remove()
$(".recommend-box").remove()
$("#recommendNps").remove()
$(".template-box").remove()
$(".blog-footer-bottom").remove()
$("#recommendNps").remove()
$("#csdn-toolbar").remove()
$("#toolBarBox").remove()
  $(".nodata .container").css("width","100%");
  $("body").css("min-width","0px");
  $(".hljs-button").remove()
  $("#content_views pre").css("-webkit-user-select","auto");
  $("#content_views pre code").css("user-select","auto");
  $(".nodata .container main").css("width","auto");
$("main").css("float","inherit");
$("#rightAside").remove()
$("#blogColumnPayAdvert").remove()
$(".blog-tags-box").remove()
$("#blog_detail_zk_collection").remove()
$("#articleSearchTip").remove()
$("#hide-article-box").remove()
$(".hide-article-box").remove()
  $("#content_views").unbind("mouseup").unbind("mousedown");

    function copy(e){
		// clipboardData 对象是为通过编辑菜单、快捷菜单和快捷键执行的编辑操作所保留的，也就是你复制或者剪切内容
		let clipboardData = e.clipboardData || window.clipboardData;
		// 如果 未复制或者未剪切，直接 return
		if(!clipboardData) return ;
		// Selection 对象 表示用户选择的文本范围或光标的当前位置。
		// 声明一个变量接收 -- 用户输入的剪切或者复制的文本转化为字符串
		let text = window.getSelection().toString();
		if(text){
			// 如果文本存在，首先取消默认行为
			e.preventDefault();
			// 通过调用 clipboardData 对象的 setData(format,data) 方法，设置相关文本
			// format 一个 DOMString 类型 表示要添加到 drag object 的拖动数据的类型
			// data 一个 DOMString 表示要添加到 drag object 的数据
			clipboardData.setData('text/plain', text)
		}
	};
    setTimeout(function(){
       $(".hl").map(function(value,index){
         var $ele=$('<span>');
         $ele.html(index.text);
         index.before($ele[0]);
         index.remove();

        })

        $("#content_views").unbind("copy");
        document.addEventListener('copy', copy );

         while(true){
            var preCode = document.getElementsByClassName("look-more-preCode contentImg-no-view")
            if(preCode.length > 0){
                for(var i = 0; i < preCode.length; i++ ){
                     preCode[i].click();
                }
            }else{
                 break;
            }
         }

    },1000)

    // Your code here...
})();
