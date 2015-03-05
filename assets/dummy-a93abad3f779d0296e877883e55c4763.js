define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,n,t,r,a){"use strict";n["default"].MODEL_FACTORY_INJECTIONS=!0;var i=n["default"].Application.extend({modulePrefix:a["default"].modulePrefix,podModulePrefix:a["default"].podModulePrefix,Resolver:t["default"]});r["default"](i,a["default"].modulePrefix),e["default"]=i}),define("dummy/components/ember-spinner",["exports","ember","ember-cli-spinjs/components/ember-spinner"],function(e,n,t){"use strict";e["default"]=t["default"]}),define("dummy/config/ember-spinner/small",["exports"],function(e){"use strict";e["default"]={color:"red",lines:12,length:3,radius:15,width:5,rotate:2}}),define("dummy/config/ember-spinner/standard",["exports"],function(e){"use strict";e["default"]={color:"red",lines:15,length:5,radius:30,width:5}}),define("dummy/initializers/app-version",["exports","dummy/config/environment","ember"],function(e,n,t){"use strict";var r=t["default"].String.classify;e["default"]={name:"App Version",initialize:function(e,a){var i=r(a.toString());t["default"].libraries.register(i,n["default"].APP.version)}}}),define("dummy/initializers/ember-spinner",["exports","dummy/config/environment"],function(e,n){"use strict";var t={modulePrefix:n["default"].modulePrefix};e["default"]={name:"ember-spinner-prefix",initialize:function(e,n){n.register("ember-spinner:main",t,{instantiate:!1}),n.inject("component:ember-spinner","emberSpinnerPrefixConfig","ember-spinner:main")}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,n,t){"use strict";function r(e,r){var a=n["default"].String.classify(t["default"].modulePrefix);t["default"].exportApplicationGlobal&&!window[a]&&(window[a]=r)}e.initialize=r,e["default"]={name:"export-application-global",initialize:r}}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,n,t){"use strict";var r=n["default"].Router.extend({location:t["default"].locationType});r.map(function(){}),e["default"]=r}),define("dummy/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var n=e.createDocumentFragment(),t=e.createElement("h2");e.setAttribute(t,"id","title");var r=e.createTextNode("Ember Spinner");e.appendChild(t,r),e.appendChild(n,t);var t=e.createTextNode("\n\nDefault");e.appendChild(n,t);var t=e.createElement("br");e.appendChild(n,t);var t=e.createTextNode("\n");e.appendChild(n,t);var t=e.createTextNode("\n");e.appendChild(n,t);var t=e.createElement("div");e.setAttribute(t,"class","code");var r=e.createTextNode("\n  {{ember-spinner}}\n");e.appendChild(t,r),e.appendChild(n,t);var t=e.createTextNode("\n\nSpinning Lines");e.appendChild(n,t);var t=e.createElement("br");e.appendChild(n,t);var t=e.createTextNode("\n");e.appendChild(n,t);var t=e.createTextNode("\n\n");e.appendChild(n,t);var t=e.createElement("div");e.setAttribute(t,"class","code");var r=e.createTextNode("\n  {{ember-spinner lines=11 length=16 radius=20 width=8 rotate=10 speed='1.1' color='#3498DB'}}\n");e.appendChild(t,r),e.appendChild(n,t);var t=e.createTextNode("\n\nFast orange balls");e.appendChild(n,t);var t=e.createElement("br");e.appendChild(n,t);var t=e.createTextNode("\n");e.appendChild(n,t);var t=e.createTextNode("\n");e.appendChild(n,t);var t=e.createElement("div");e.setAttribute(t,"class","code");var r=e.createTextNode("\n  {{ember-spinner lines=12 radius=10 width=5 rotate=0 speed='3.4' color='orange'}}\n");e.appendChild(t,r),e.appendChild(n,t);var t=e.createTextNode("\n\n");e.appendChild(n,t);var t=e.createElement("h3"),r=e.createTextNode("Using a Config File");e.appendChild(t,r),e.appendChild(n,t);var t=e.createTextNode("\n\nUsing a config file called standard");e.appendChild(n,t);var t=e.createElement("br");e.appendChild(n,t);var t=e.createTextNode("\n");e.appendChild(n,t);var t=e.createTextNode("\n\n");e.appendChild(n,t);var t=e.createElement("div");e.setAttribute(t,"class","code");var r=e.createTextNode("\n  {{ember-spinner config='standard'}}\n");e.appendChild(t,r),e.appendChild(n,t);var t=e.createTextNode("\n\nWith a config file called small");e.appendChild(n,t);var t=e.createElement("br");e.appendChild(n,t);var t=e.createTextNode("\n");e.appendChild(n,t);var t=e.createTextNode("\n\n");e.appendChild(n,t);var t=e.createElement("div");e.setAttribute(t,"class","code");var r=e.createTextNode("\n  {{ember-spinner config='small'}}\n");e.appendChild(t,r),e.appendChild(n,t);var t=e.createTextNode("\n");return e.appendChild(n,t),n},render:function(e,n,t){var r=n.dom,a=n.hooks,i=a.content,d=a.inline;r.detectNamespace(t);var l;n.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(l=this.build(r),this.hasRendered?this.cachedFragment=l:this.hasRendered=!0),this.cachedFragment&&(l=r.cloneNode(this.cachedFragment,!0))):l=this.build(r);var o=r.createMorphAt(l,3,4,t),p=r.createMorphAt(l,8,9,t),c=r.createMorphAt(l,13,14,t),s=r.createMorphAt(l,20,21,t),m=r.createMorphAt(l,25,26,t);return i(n,o,e,"ember-spinner"),d(n,p,e,"ember-spinner",[],{lines:11,length:16,radius:20,width:8,rotate:10,speed:"1.1",color:"#3498DB"}),d(n,c,e,"ember-spinner",[],{lines:12,radius:10,width:5,rotate:0,speed:"3.4",color:"orange"}),d(n,s,e,"ember-spinner",[],{config:"standard"}),d(n,m,e,"ember-spinner",[],{config:"small"}),l}}}())}),define("dummy/config/environment",["ember"],function(e){var n="dummy";try{var t=n+"/config/environment",r=e["default"].$('meta[name="'+t+'"]').attr("content"),a=JSON.parse(unescape(r));return{"default":a}}catch(i){throw new Error('Could not read config from meta tag with name "'+t+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({name:"ember-cli-spinjs",version:"0.4.0.dc79fb1f"});