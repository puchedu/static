var doc=document,ua=navigator.userAgent.toLowerCase(),bot=/bot|spider/.test(ua),mobile=/android|phone|mobi|ipad|ipod|blackberry|symbian|midp/.test(ua),js=function(e){doc.write('<script src="'+e+'"><\/script>')},echo=function(e){doc.write(e)};
var baidupush=function(){(function(){var bp=document.createElement('script');var curProtocol=window.location.protocol.split(':')[0];if(curProtocol==='https'){bp.src='https://zz.bdstatic.com/linksubmit/push.js'}else{bp.src='http://push.zhanzhang.baidu.com/push.js'}var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(bp,s)})();}
function cc(id){!bot&&mobile&&(echo("<script type='text/javascript'>var cpro_id='"+id+"';<\/script>"),js("//cpro.baidustatic.com/cpro/ui/cm.js"))}
function cc01(){cc("u5949020")}
function cc02(){}
function cc03(){cc("u5949153")}
function cc04(){echo("<div style='clear:both;'>"),cc("u5949159"),echo("</div>")}
function cc05(){echo("<div style='clear:both;'>"),cc("u5949274"),echo("</div>")}
