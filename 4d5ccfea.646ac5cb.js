(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{291:function(e,t,r){"use strict";r.d(t,"a",(function(){return O})),r.d(t,"b",(function(){return u}));var a=r(0),n=r.n(a);function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},b=Object.keys(e);for(a=0;a<b.length;a++)r=b[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)r=b[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=n.a.createContext({}),p=function(e){var t=n.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},O=function(e){var t=p(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,b=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),O=p(r),d=a,u=O["".concat(c,".").concat(d)]||O[d]||j[d]||b;return r?n.a.createElement(u,l(l({ref:t},i),{},{components:r})):n.a.createElement(u,l({ref:t},i))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=r.length,c=new Array(b);c[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var i=2;i<b;i++)c[i]=r[i];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},89:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return o})),r.d(t,"default",(function(){return p}));var a=r(3),n=r(7),b=(r(0),r(291)),c={},l={unversionedId:"props/linearProgress",id:"version-3.4.2/props/linearProgress",isDocsHomePage:!1,title:"linearProgress",description:"Props",source:"@site/versioned_docs/version-3.4.2/props/linearProgress.md",slug:"/props/linearProgress",permalink:"/docs/props/linearProgress",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-3.4.2/props/linearProgress.md",version:"3.4.2"},o=[{value:"Props",id:"props",children:[]},{value:"Reference",id:"reference",children:[{value:"<code>value</code>",id:"value",children:[]},{value:"<code>variant</code>",id:"variant",children:[]},{value:"<code>style</code>",id:"style",children:[]},{value:"<code>color</code>",id:"color",children:[]},{value:"<code>trackColor</code>",id:"trackcolor",children:[]}]}],i={rightToc:o};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"props"},"Props"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Also receives all\n",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactnative.dev/docs/view#props"}),"View")," props")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"#value"}),Object(b.b)("inlineCode",{parentName:"a"},"value"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"#variant"}),Object(b.b)("inlineCode",{parentName:"a"},"variant"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"#style"}),Object(b.b)("inlineCode",{parentName:"a"},"style"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"#color"}),Object(b.b)("inlineCode",{parentName:"a"},"color"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"#trackColor"}),Object(b.b)("inlineCode",{parentName:"a"},"trackColor")))),Object(b.b)("hr",null),Object(b.b)("h2",{id:"reference"},"Reference"),Object(b.b)("h3",{id:"value"},Object(b.b)("inlineCode",{parentName:"h3"},"value")),Object(b.b)("p",null,"The value of the progress indicator for the determinate variant. Value between 0 and 1."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"number"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"0")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"variant"},Object(b.b)("inlineCode",{parentName:"h3"},"variant")),Object(b.b)("p",null,"Type of button (optional)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"determinate"),", ",Object(b.b)("inlineCode",{parentName:"td"},"indeterminate")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"indeterminate")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"style"},Object(b.b)("inlineCode",{parentName:"h3"},"style")),Object(b.b)("p",null,"add additional styling for linear progress component (optional)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"View style (object)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"color"},Object(b.b)("inlineCode",{parentName:"h3"},"color")),Object(b.b)("p",null,"color for linear progress"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"primary"),",",Object(b.b)("inlineCode",{parentName:"td"},"secondary")," ",Object(b.b)("br",null),Object(b.b)("strong",{parentName:"td"},"OR"),Object(b.b)("br",null),"color name"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"secondary")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"trackcolor"},Object(b.b)("inlineCode",{parentName:"h3"},"trackColor")),Object(b.b)("p",null,"Track color for linear progress"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"string"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"color")," with transparency")))),Object(b.b)("hr",null))}p.isMDXComponent=!0}}]);