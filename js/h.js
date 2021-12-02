if(window.top!=window.self){window.top.location.href=window.location.href;}
var doc=document,ua=navigator.userAgent.toLowerCase(),bot=/bot|spider/.test(ua),mobile=/android|phone|mobi|ipad|ipod|blackberry|symbian|midp/.test(ua),js=function(e){doc.write('<script src="'+e+'"><\/script>')},echo=function(e){doc.write(e)};
var baidupush=function(){(function(){var bp=document.createElement('script');var curProtocol=window.location.protocol.split(':')[0];if(curProtocol==='https'){bp.src='https://zz.bdstatic.com/linksubmit/push.js'}else{bp.src='http://push.zhanzhang.baidu.com/push.js'}var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(bp,s)})();}
function cc(id){!bot&&mobile&&(echo("<script type='text/javascript'>var cpro_id='"+id+"';<\/script>"),js("//cpro.baidustatic.com/cpro/ui/cm.js"))}
function cc00(s){!bot&mobile&&(echo(s))}
function cc01(){cc00('<script type="text/javascript" src="//bd.paocu.com/common/i/dccf/source/a_v_sj.js"></script>')}
function cc02(){}
function cc03(){cc00('<script type="text/javascript" src="//bd.paocu.com/source/pk-j/resource/jmg/openjs/cs/t.js"></script>')}
function cc04(){echo("<div style='clear:both;'>"),cc00('<script type="text/javascript" src="//bd.paocu.com/production/j_eddg/bw/t/resource/n.js"></script>'),echo("</div>")}
function cc05(){echo("<div style='clear:both;'>"),cc00('<script type="text/javascript" src="//bd.paocu.com/site/k-feehc-x/openjs/uu.js"></script>'),echo("</div>")}
