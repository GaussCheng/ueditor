module( 'plugins.music' );

test( '音乐', function () {
    var editor = te.obj[0];
    var range = te.obj[1];
    editor.setContent( '<p>hello</p>' );
    range.setStart(editor.body.firstChild,0).collapse(true).select();
    editor.execCommand( 'music',{url:"http://box.baidu.com/widget/flash/bdspacesong.swf?from=tiebasongwidget&url=…artist=%E5%BC%A0%E6%B6%A6%E8%B4%9E&extra=Vol.%202&autoPlay=false&loop=true"});
    stop();
    setTimeout(function(){
//        equal(editor.getContent(),'<p><embed type=\"application/x-shockwave-flash\" class=\"edui-faked-music\" pluginspage=\"http://www.macromedia.com/go/getflashplayer\" src=\"http://box.baidu.com/widget/flash/bdspacesong.swf?from=tiebasongwidget&amp;url=…artist=%E5%BC%A0%E6%B6%A6%E8%B4%9E&amp;extra=Vol.%202&amp;autoPlay=false&amp;loop=true\" width=\"400\" height=\"95\" align=\"none\" wmode=\"transparent\" play=\"true\" loop=\"false\" menu=\"false\" allowscriptaccess=\"never\" allowfullscreen=\"true\" /></p><p>hello<br/></p>');
        equal(editor.body.firstChild.firstChild.tagName.toLowerCase(),'img');
        equal(editor.body.firstChild.firstChild.className,'edui-faked-music');
        start();
    },50);
} );