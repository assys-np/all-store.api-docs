webpackJsonp([2],{1117:function(e,n,t){window.config=t(531)},531:function(e,n,t){"use strict";e.exports={openapiLocation:"openapi.json",useHash:!0,basePath:"",oauth:!0,favicon:"assets/favicon.ico",routes:{"/":{redirect:"/documentation",meta:{title:"API Documentation"}},"/documentation":{openapi:"default",ui:"documentation",meta:{title:"API Documentation"}},"/console":{openapi:"default",ui:"console",meta:{title:"API Documentation"}}},sitemap:!1,workflows:{},codegen:{disabled:!0,languages:[],templates:{},setupTemplates:{}},bootstrap:{bootstrapVersion:3,styleLoaders:["style-loader","css-loader","sass-loader"],styles:!0,preBootstrapCustomizations:"/home/ubuntu/git/lucy-v3/examples/starter/styles/bootstrap.scss"},uiOptions:{discussionTitle:"Discussion",embedConsoleInDocumentation:!1,redirectHashURLs:!1},prismjsTheme:"",javascript:[],css:[],github:{redirect_uri:"",client_id:"",repo:"",workflowDirectory:"workflows"},templates:{navbar:'<nav class="navbar navbar-inverse">\n  <div class="container-fluid">\n    <div class="navbar-header">\n      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#NavbarCollapse" aria-expanded="false">\n        <span class="sr-only">Toggle menu</span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n      </button>\n      <a href="" class="navbar-brand">\n        <span id="LucyBotAPITitle"></span>\n      </a>\n    </div>\n    <div id="NavbarCollapse" class="collapse navbar-collapse">\n      <ul class="nav navbar-nav navbar-right">\n        <li>\n          <a href="documentation">Documentation</a>\n        </li>\n        <li>\n          <a href="console">Console</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<script>\n  var title = \'\';\n  var titleInterval = setInterval(function() {\n    if (window.lucybot.openapiService) {\n      var spec = window.lucybot.openapiService.original;\n      if (spec) {\n        window.clearInterval(titleInterval);\n        if (spec.info.title) {\n          title = spec.info.title;\n          window.jquery(\'#LucyBotAPITitle\').text(title);\n        }\n      }\n    }\n  }, 100)\n</script>\n\n<script type="text/javascript">(function(e,a){if(!a.__SV){var b=window;try{var c,l,i,j=b.location,g=j.hash;c=function(a,b){return(l=a.match(RegExp(b+"=([^&]*)")))?l[1]:null};g&&c(g,"state")&&(i=JSON.parse(decodeURIComponent(c(g,"state"))),"mpeditor"===i.action&&(b.sessionStorage.setItem("_mpcehash",g),history.replaceState(i.desiredHash||"",e.title,j.pathname+j.search)))}catch(m){}var k,h;window.mixpanel=a;a._i=[];a.init=function(b,c,f){function e(b,a){var c=a.split(".");2==c.length&&(b=b[c[0]],a=c[1]);b[a]=function(){b.push([a].concat(Array.prototype.slice.call(arguments,\n0)))}}var d=a;"undefined"!==typeof f?d=a[f]=[]:f="mixpanel";d.people=d.people||[];d.toString=function(b){var a="mixpanel";"mixpanel"!==f&&(a+="."+f);b||(a+=" (stub)");return a};d.people.toString=function(){return d.toString(1)+".people (stub)"};k="disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config reset people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");\nfor(h=0;h<k.length;h++)e(d,k[h]);a._i.push([b,c,f])};a.__SV=1.2;b=e.createElement("script");b.type="text/javascript";b.async=!0;b.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"file:"===e.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\\/\\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";c=e.getElementsByTagName("script")[0];c.parentNode.insertBefore(b,c)}})(document,window.mixpanel||[]);\nmixpanel.init("4349a0b43fd16d5a0ec5ed2cecce85cc");\nmixpanel.track(\'start\', {hostname: window.location.hostname});\n</script>\n',loading:'<style>\n  .loading-screen {\n    min-height: 500px;\n    text-align: center;\n    padding-top: 100px;\n  }\n</style>\n<div id="LoadingScreen" class="loading-screen">\n  <h1><i class="fa fa-spin fa-refresh"></i><h1>\n</div>\n\n',footer:'<style>\n  #LucyBotFooter {\n    padding-top: 20px;\n    padding-bottom: 20px;\n  }\n</style>\n\n<div id="LucyBotFooter">\n  <div class="container-fluid">\n    <div class="row">\n      <div class="col-xs-6">\n        <div class="footer-copyright">Copyright &#xA9;\n          <span id="LucyBotYear"></span>\n          <a href="http://lucybot.com" target="_blank">LucyBot Inc.</a>\n        </div>\n        <script>\n          document.getElementById(\'LucyBotYear\').innerHTML = (new Date()).getFullYear();\n        </script>\n      </div>\n      <div class="col-xs-6 text-right">\n        <a href="http://lucybot.com" target="_blank">Document your API</a>\n      </div>\n    </div>\n  </div>\n</div>\n'}}}},[1117]);