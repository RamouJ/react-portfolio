"use strict";(self.webpackChunkreact_portfolio=self.webpackChunkreact_portfolio||[]).push([[421],{6421:function(n,e,r){r.r(e),r.d(e,{default:function(){return b}});var t=r(1413),o=r(2791),i=r(1694),c=r.n(i),a=r(101),g=r(1864),f=r(802),u=r.n(f),l=r(6752),s=r(885),d=function(n){return n&&n.offsetHeight},v=r(5647),m=r(2982),p=r(432),x=1024,y=696,z=function(n){return(0,v.Z)(p.I,(0,m.Z)(n.split(" ").map((function(n){return Number(n)/255}))))},h=r(7762),_=function(n){n.dispose();for(var e=0,r=Object.keys(n);e<r.length;e++){var t=n[r[e]];t&&"object"===typeof t&&"minFilter"in t&&t.dispose()}},P=r(7885),w=r(184),b=function(n){var e=(0,o.useContext)(P.ThemeContext).theme,r="light"===e?"250 250 250":"17 17 17",i=(0,o.useRef)(window.innerWidth),f=(0,o.useRef)(window.innerHeight),v=(0,o.useRef)(Date.now()),m=(0,o.useRef)(),p=(0,o.useRef)(),b=(0,o.useRef)(),S=(0,o.useRef)(),k=(0,o.useRef)(),C=(0,o.useRef)(),M=(0,o.useRef)(),R=(0,o.useRef)(),F=(0,o.useRef)(),E=(0,o.useRef)(),I=(0,o.useRef)(),L=(0,o.useRef)(),Z=Boolean(!!window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches&&!1),W=function(n,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},t=(0,o.useState)(!1),i=(0,s.Z)(t,2),c=i[0],a=i[1],g=(0,o.useState)(!1),f=(0,s.Z)(g,2),u=f[0],l=f[1];return(0,o.useEffect)((function(){if(null!==n&&void 0!==n&&n.current){var t=new IntersectionObserver((function(n){var r=(0,s.Z)(n,1)[0],o=r.isIntersecting,i=r.target;a(o),o&&e&&(t.unobserve(i),l(!0))}),r);return u||t.observe(n.current),function(){return t.disconnect()}}}),[n,e,r,u]),c}(m);return(0,o.useEffect)((function(){return p.current=new a.FM8(.8,.5),b.current=new a.CP7({canvas:m.current,powerPreference:"high-performance"}),b.current.setSize(i.current,f.current),b.current.setPixelRatio(1),b.current.outputEncoding=a.knz,S.current=new a.cPb(55,i.current/f.current,.1,200),S.current.position.z=52,k.current=new a.xsS,R.current=new a.xoR,R.current.onBeforeCompile=function(n){M.current=a.rDY.merge([a.rBU.ambient,a.rBU.lights,n.uniforms,{time:{type:"f",value:0}}]),n.uniforms=M.current,n.vertexShader="\nvec3 mod289(vec3 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x)\n{\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade(vec3 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\n// Classic Perlin noise\nfloat cnoise(vec3 P)\n{\n  vec3 Pi0 = floor(P); // Integer part for indexing\n  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n  return 2.2 * n_xyz;\n}\n\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n  return 2.2 * n_xyz;\n}\n\nfloat turbulence(vec3 p) {\n  float w = 100.0;\n  float t = -.5;\n  for (float f = 1.0 ; f <= 10.0 ; f++) {\n    float power = pow(2.0, f);\n    t += abs(pnoise(vec3(power * p), vec3(10.0, 10.0, 10.0)) / power);\n  }\n  return t;\n}\n\n// START\nuniform float time;\nvarying vec2 vUv;\nvarying vec3 vNormal;\nvarying float noise;\n\nvarying vec3 vViewPosition;\n\nvoid main() {\n  #include <beginnormal_vertex>\n  #include <defaultnormal_vertex>\n  #include <begin_vertex>\n  #include <project_vertex>\n  #ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED\n    vNormal = normalize(transformedNormal);\n  #endif\n\n  vViewPosition = - mvPosition.xyz;\n\n  vUv = uv;\n\n  noise = turbulence(0.01 * position + normal + time * 0.8);\n  vec3 displacement = vec3((position.x) * noise, position.y * noise, position.z * noise);\n  gl_Position = projectionMatrix * modelViewMatrix * vec4((position + normal) + displacement, 1.0);\n}\n",n.fragmentShader="\n#define PHONG\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\nuniform float time;\nvarying vec2 vUv;\nvarying vec3 newPosition;\nvarying float noise;\n\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <envmap_physical_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n  #include <clipping_planes_fragment>\n\n  vec3 color = vec3(vUv * (0.2 - 2.0 * noise), 1.0);\n  vec3 finalColors = vec3(color.b * 1.5, color.r, color.r);\n  vec4 diffuseColor = vec4(cos(finalColors * noise * 3.0), 1.0);\n  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));\n  vec3 totalEmissiveRadiance = emissive;\n\n  #include <logdepthbuf_fragment>\n  #include <map_fragment>\n  #include <color_fragment>\n  #include <alphamap_fragment>\n  #include <alphatest_fragment>\n  #include <specularmap_fragment>\n  #include <normal_fragment_begin>\n  #include <normal_fragment_maps>\n  #include <emissivemap_fragment>\n  #include <lights_phong_fragment>\n  #include <lights_fragment_begin>\n  #include <lights_fragment_maps>\n  #include <lights_fragment_end>\n  #include <aomap_fragment>\n\n  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\n  #include <envmap_fragment>\n  #include <premultiplied_alpha_fragment>\n  #include <tonemapping_fragment>\n  #include <encodings_fragment>\n  #include <fog_fragment>\n\n  gl_FragColor = vec4(outgoingLight, diffuseColor.a);\n}\n",n.lights=!0},F.current=new a.Aip(32,128,128),E.current=new a.Kj0(F.current,R.current),E.current.position.z=0,E.current.modifier=Math.random(),k.current.add(E.current),function(){!function(n){n.traverse((function(n){if(n.isMesh)if(n.geometry.dispose(),n.material.isMaterial)_(n.material);else{var e,r=(0,h.Z)(n.material);try{for(r.s();!(e=r.n()).done;){var t=e.value;_(t)}}catch(o){r.e(o)}finally{r.f()}}})),n.dispose()}(k.current),function(n){n.dispose(),n.forceContextLoss(),n=null}(b.current)}}),[]),(0,o.useEffect)((function(){var n=new a.Ox3(z("250 250 250"),.6),t=new a.Mig(z("250 250 250"),"light"===e?.8:.1);return n.position.z=200,n.position.x=100,n.position.y=100,C.current=[n,t],k.current.background=z(r),C.current.forEach((function(n){return k.current.add(n)})),function(){!function(n){var e,r=(0,h.Z)(n);try{for(r.s();!(e=r.n()).done;){var t=e.value;t.parent.remove(t)}}catch(o){r.e(o)}finally{r.f()}}(C.current)}}),[r,e]),(0,o.useEffect)((function(){var n=function(){var n=u()(),e=window.innerWidth,r=n+.3*n;m.current.style.height=r,b.current.setSize(e,r),S.current.aspect=e/r,S.current.updateProjectionMatrix(),Z&&b.current.render(k.current,S.current),e<=y?(E.current.position.x=14,E.current.position.y=10):e<=x?(E.current.position.x=18,E.current.position.y=14):(E.current.position.x=22,E.current.position.y=16)};return window.addEventListener("resize",n),n(),function(){window.removeEventListener("resize",n)}}),[Z]),(0,o.useEffect)((function(){var n=function(n){var e=E.current.rotation,r=n.clientX/window.innerWidth,t=n.clientY/window.innerHeight;L.current||(L.current=(0,g.S3)(e.toArray(),(function(n){return e.set(n[0],n[1],E.current.rotation.z)}))),I.current=(0,g.ST)({from:L.current.get(),to:[t/2,r/2],stiffness:30,damping:20,velocity:L.current.getVelocity(),mass:2,restSpeed:1e-4}).start(L.current)};return!Z&&W&&window.addEventListener("mousemove",n),function(){window.removeEventListener("mousemove",n),I.current&&I.current.stop()}}),[W,Z]),(0,o.useEffect)((function(){var n;return!Z&&W?function e(){n=requestAnimationFrame(e),void 0!==M.current&&(M.current.time.value=5e-5*(Date.now()-v.current)),E.current.rotation.z+=.001,b.current.render(k.current,S.current)}():b.current.render(k.current,S.current),function(){cancelAnimationFrame(n)}}),[W,Z]),(0,w.jsx)(l.ZP,{appear:!0,in:!0,onEnter:d,timeout:3e3,children:function(e){return(0,w.jsx)("canvas",(0,t.Z)({"aria-hidden":!0,className:c()("displacement-sphere","displacement-sphere--".concat(e)),ref:m},n))}})}},7885:function(n,e,r){r.r(e),r.d(e,{ThemeContext:function(){return p},ThemeProvider:function(){return x}});var t=r(885),o=r(2791),i=r(3449),c=r(5838),a=r(4796),g="".concat(a.O.T$),f="".concat(a.O.BD),u="".concat(a.O.Sn),l="".concat(a.O.ix),s=(0,i.Z)((0,c.Z)({palette:{type:"light",primary:{main:g},secondary:{main:f},background:{default:l},foreground:{default:u}},typography:{fontSize:16,htmlFontSize:16,h1:{fontWeight:500},h2:{fontWeight:500},h3:{fontWeight:500},h5:{fontWeight:500,fontFamily:"Roboto Mono, monospace"},body:{fontWeight:500,fontFamily:"Roboto Mono, monospace"}},overrides:{MuiCssBaseline:{"@global":{body:{color:u,backgroundColor:l},a:{color:u,backgroundColor:l}}},MuiIconButton:{root:{boxShadow:"0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)","&:hover":{backgroundColor:g},transition:"all 0.5s ease"}},MuiFab:{root:{width:"2.5rem",height:"2.5rem",fontSize:"1.25rem"},primary:{color:u,backgroundColor:"transparent","&:hover":{color:u,backgroundColor:g},transition:"all 0.5s ease !important"}},MuiSpeedDialAction:{fab:{color:l,backgroundColor:"transparent","&:hover":{color:l,backgroundColor:g},transition:"all 0.5s ease",margin:"0px",marginBottom:"16px"}},MuiTooltip:{tooltip:{fontFamily:"Roboto Mono, monospace",backgroundColor:g,color:u,fontSize:12}}}})),d=(0,i.Z)((0,c.Z)({palette:{type:"dark",primary:{main:g},secondary:{main:f},background:{default:u},foreground:{default:l}},typography:{fontSize:16,htmlFontSize:16,h1:{fontWeight:500},h2:{fontWeight:500},h3:{fontWeight:500},h5:{fontWeight:500,fontFamily:"Roboto Mono, monospace"},body:{fontWeight:500,fontFamily:"Roboto Mono, monospace"}},overrides:{MuiCssBaseline:{"@global":{body:{color:l,backgroundColor:u},a:{color:l}}},MuiIconButton:{root:{boxShadow:"0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)","&:hover":{backgroundColor:g},transition:"all 0.5s ease"}},MuiFab:{root:{width:"2.5rem",height:"2.5rem",fontSize:"1.25rem"},primary:{color:l,backgroundColor:"transparent","&:hover":{color:l,backgroundColor:g},transition:"all 0.5s ease !important"}},MuiSpeedDialAction:{fab:{color:l,backgroundColor:"transparent","&:hover":{color:l,backgroundColor:g},transition:"all 0.5s ease",margin:"0px",marginBottom:"16px"}},MuiTooltip:{tooltip:{fontFamily:"Roboto Mono, monospace",backgroundColor:g,color:l,fontSize:12}}}})),v=r(6971),m=r(184),p=(0,o.createContext)(),x=function(n){var e=n.children,r=function(){if(window.matchMedia)return window.matchMedia("(prefers-color-scheme: dark)").matches},i=(0,o.useState)(function(){if("undefined"===typeof localStorage)return!0;var n="dark"in localStorage,e=JSON.parse(localStorage.getItem("dark")),t=r();return n?e:!!t}()?"dark":"light"),c=(0,t.Z)(i,2),a=c[0],g=c[1];return(0,o.useEffect)((function(){"undefined"!==typeof localStorage&&localStorage.setItem("dark",JSON.stringify("dark"===a))}),[a]),(0,m.jsx)(p.Provider,{value:{theme:a,toggleTheme:function(){g("light"===a?"dark":"light")}},children:(0,m.jsx)(v.Z,{theme:"light"===a?s:d,children:e})})}}}]);
//# sourceMappingURL=421.70795b8b.chunk.js.map