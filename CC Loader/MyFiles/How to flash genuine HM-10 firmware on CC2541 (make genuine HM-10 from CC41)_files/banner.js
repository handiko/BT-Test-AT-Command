(function(){var zoneId;var oldZoneId;var breakpointDesktop=window.arduinoAdvOptions?window.arduinoAdvOptions.breakpointDesktop:1024;var breakpointMobile=window.arduinoAdvOptions?window.arduinoAdvOptions.breakpointMobile:420;var zoneIdDesktop=window.arduinoAdvOptions?window.arduinoAdvOptions.zoneIdDesktop:556;var zoneIdTablet=window.arduinoAdvOptions?window.arduinoAdvOptions.zoneIdTablet:558;var zoneIdMobile=window.arduinoAdvOptions?window.arduinoAdvOptions.zoneIdMobile:557;var m3_r=Math.floor(Math.random()*99999999999);var m3_u='//ads.supplyframe.com/openads/www/delivery/ajs.php';var charset=(document.charset?'&amp;charset='+document.charset:(document.characterSet?'&amp;charset='+document.characterSet:''));var debounce=function(func,wait,immediate){var timeout;return function(){var context=this,args=arguments;var later=function(){timeout=null;if(!immediate)func.apply(context,args);};var callNow=immediate&&!timeout;clearTimeout(timeout);timeout=setTimeout(later,wait);if(callNow)func.apply(context,args);};};var addEvent=function(object,type,callback){if(object==null||typeof(object)=='undefined')return;if(object.addEventListener){object.addEventListener(type,callback,false);}else if(object.attachEvent){object.attachEvent('on'+type,callback);}else{object['on'+type]=callback;}};var generateUrl=function(){var url=m3_u+'?zoneid='+zoneId;if(document.MAX_used!=',')url+='&exclude='+document.MAX_used;url+='&charset='+charset;url+='&loc='+escape(window.location);if(document.referrer)url+='&referer='+escape(document.referrer);if(document.context)url+='&context='+escape(document.context);if(document.mmm_fo)url+='&mmm_fo=1';return url;}
var getZoneId=function(){var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth;switch(true){case(x<=breakpointMobile):zoneId=zoneIdMobile;break;case(x>breakpointMobile&&x<=breakpointDesktop):zoneId=zoneIdTablet;break;default:zoneId=zoneIdDesktop;break;}
oldZoneId=oldZoneId||zoneId;}
addEvent(window,'resize',debounce(function(event){getZoneId();var url=generateUrl();if(zoneId!=oldZoneId){var myNode=document.getElementById('ad_container_zone');while(myNode.firstChild){myNode.removeChild(myNode.firstChild);}
postscribe('#ad_container_zone','<script src="'+url+'"><\/script>');oldZoneId=zoneId;}}),500);window.injectFirstTimeArduinoAdv=function(){getZoneId();var url=generateUrl();var myNode=document.getElementById('ad_container_zone');while(myNode.firstChild){myNode.removeChild(myNode.firstChild);}
postscribe('#ad_container_zone','<script src="'+url+'"><\/script>');}
document.addEventListener("DOMContentLoaded",function(event){window.injectFirstTimeArduinoAdv();});})();