"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2145,7248],{3905:(e,t,r)=>{r.d(t,{Zo:()=>D,kt:()=>p});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},A=Object.keys(e);for(a=0;a<A.length;a++)r=A[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);for(a=0;a<A.length;a++)r=A[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},D=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,A=e.originalType,c=e.parentName,D=i(e,["components","mdxType","originalType","parentName"]),d=s(r),p=n,u=d["".concat(c,".").concat(p)]||d[p]||l[p]||A;return r?a.createElement(u,o(o({ref:t},D),{},{components:r})):a.createElement(u,o({ref:t},D))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var A=r.length,o=new Array(A);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<A;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},40778:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>c,contentTitle:()=>s,metadata:()=>D,toc:()=>l,default:()=>p});var a=r(87462),n=r(63366),A=(r(67294),r(3905)),o=r(32433),i=["components"],c={},s=void 0,D={unversionedId:"components/usage/Avatar/Avatar",id:"components/usage/Avatar/Avatar",title:"Avatar",description:"",source:"@site/docs/components/usage/Avatar/Avatar.mdx",sourceDirName:"components/usage/Avatar",slug:"/components/usage/Avatar/",permalink:"/docs/next/components/usage/Avatar/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/usage/Avatar/Avatar.mdx",tags:[],version:"current",frontMatter:{}},l=[],d={toc:l};function p(e){var t=e.components,r=(0,n.Z)(e,i);return(0,A.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,A.kt)(o.default,{mdxType:"Snack"}))}p.isMDXComponent=!0},32433:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>c,metadata:()=>s,toc:()=>D,default:()=>d});var a=r(87462),n=r(63366),A=(r(67294),r(3905)),o=["components"],i={},c=void 0,s={unversionedId:"components/usage/Avatar/snack/index",id:"components/usage/Avatar/snack/index",title:"index",description:"",source:"@site/docs/components/usage/Avatar/snack/index.md",sourceDirName:"components/usage/Avatar/snack",slug:"/components/usage/Avatar/snack/",permalink:"/docs/next/components/usage/Avatar/snack/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/usage/Avatar/snack/index.md",tags:[],version:"current",frontMatter:{}},D=[],l={toc:D};function d(e){var t=e.components,r=(0,n.Z)(e,o);return(0,A.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,A.kt)("div",{className:"snack-player","data-snack-name":"RNE Avatar","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20ScrollView%2C%20Text%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Avatar%20%7D%20from%20'react-native-elements'%3B%0A%0Atype%20AvatarData%20%3D%20%7B%0A%20%20image_url%3A%20string%3B%0A%7D%3B%0A%0Aconst%20dataList%3A%20AvatarData%5B%5D%20%3D%20%5B%0A%20%20%7B%0A%20%20%20%20image_url%3A%20'https%3A%2F%2Fuifaces.co%2Four-content%2Fdonated%2F6MWH9Xi_.jpg'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20image_url%3A%20'https%3A%2F%2Frandomuser.me%2Fapi%2Fportraits%2Fmen%2F36.jpg'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20image_url%3A%0A%20%20%20%20%20%20'https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2019%2F11%2F03%2F20%2F11%2Fportrait-4599553__340.jpg'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20image_url%3A%0A%20%20%20%20%20%20'https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2014%2F09%2F17%2F20%2F03%2Fprofile-449912__340.jpg'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20image_url%3A%0A%20%20%20%20%20%20'https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2020%2F09%2F18%2F05%2F58%2Flights-5580916__340.jpg'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20image_url%3A%0A%20%20%20%20%20%20'https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2016%2F11%2F21%2F12%2F42%2Fbeard-1845166_1280.jpg'%2C%0A%20%20%7D%2C%0A%5D%3B%0A%0Atype%20AvatarComponentProps%20%3D%20%7B%7D%3B%0A%0AArray.prototype.chunk%20%3D%20function%20(%20n%20)%20%7B%0A%20%20%20%20if%20(%20!this.length%20)%20%7B%0A%20%20%20%20%20%20%20%20return%20%5B%5D%3B%0A%20%20%20%20%7D%0A%20%20%20%20return%20%5B%20this.slice(%200%2C%20n%20)%20%5D.concat(%20this.slice(n).chunk(n)%20)%3B%0A%7D%3B%0A%0Aconst%20Avatars%3A%20React.FunctionComponent%3CAvatarComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CScrollView%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EImage%20Avatars%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%7BdataList.chunk(3).map((chunk%2C%20chunkIndex)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'space-around'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginBottom%3A%2030%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20key%3D%7BchunkIndex%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Bchunk.map((l%2C%20i)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3D%7B64%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20rounded%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20source%3D%7Bl.image_url%20%3F%20%7B%20uri%3A%20l.image_url%20%7D%20%3A%20%7B%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20key%3D%7B%60%24%7BchunkIndex%7D-%24%7Bi%7D%60%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20))%7D%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20))%7D%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EIcon%20Avatars%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'space-around'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20marginBottom%3A%2030%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20%20%20%20%20size%3D%7B64%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20rounded%0A%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'pencil'%2C%20type%3A%20'font-awesome'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20backgroundColor%3A%20'%236733b9'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20%20%20%20%20size%3D%7B64%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20rounded%0A%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'rowing'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20backgroundColor%3A%20'%2300a7f7'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20%20%20%20%20size%3D%7B64%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20rounded%0A%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'heartbeat'%2C%20type%3A%20'font-awesome'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20backgroundColor%3A%20'%23eb1561'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'space-around'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20marginBottom%3A%2030%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20%20%20%20%20size%3D%7B64%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20rounded%0A%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'extension'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'material'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20'%23cdde20'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderColor%3A%20'grey'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderStyle%3A%20'solid'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderWidth%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20%20%20%20%20size%3D%7B64%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20rounded%0A%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'apartment'%2C%20type%3A%20'material'%2C%20color%3A%20'%23009688'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderColor%3A%20'grey'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderStyle%3A%20'solid'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderWidth%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20%20%20%20%20size%3D%7B64%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20rounded%0A%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'backup'%2C%20type%3A%20'material'%2C%20color%3A%20'%23ff5606'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderColor%3A%20'grey'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderStyle%3A%20'solid'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderWidth%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3ELetter%20Avatars%3C%2FText%3E%0A%0A%20%20%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'space-around'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20marginBottom%3A%2030%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20%20%20%20%20size%3D%7B64%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20rounded%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Fc%22%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20backgroundColor%3A%20'%233d4db7'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20%20%20%20%20size%3D%7B64%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20rounded%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22P%22%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20backgroundColor%3A%20'coral'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20%20%20%20%20size%3D%7B64%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20rounded%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Rd%22%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20backgroundColor%3A%20'purple'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EBadged%20Avatars%3C%2FText%3E%0A%0A%20%20%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'space-around'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20marginBottom%3A%2040%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20%20%20%20%20size%3D%7B64%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20rounded%0A%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'adb'%2C%20type%3A%20'material'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20backgroundColor%3A%20'orange'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CAvatar.Accessory%20size%3D%7B24%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20%20%20%20%20size%3D%7B64%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20rounded%0A%20%20%20%20%20%20%20%20%20%20%20%20source%3D%7B%7B%20uri%3A%20'https%3A%2F%2Frandomuser.me%2Fapi%2Fportraits%2Fwomen%2F57.jpg'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Bj%22%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20backgroundColor%3A%20'grey'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CAvatar.Accessory%20size%3D%7B23%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3C%2FScrollView%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20subHeader%3A%20%7B%0A%20%20%20%20backgroundColor%20%3A%20%22%232089dc%22%2C%0A%20%20%20%20color%20%3A%20%22white%22%2C%0A%20%20%20%20textAlign%20%3A%20%22center%22%2C%0A%20%20%20%20paddingVertical%20%3A%205%2C%0A%20%20%20%20marginBottom%20%3A%2010%0A%20%20%7D%0A%7D)%0A%0Aexport%20default%20Avatars%3B","data-snack-dependencies":"react-native-elements","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}d.isMDXComponent=!0}}]);