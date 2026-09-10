import{S as e,t}from"./Iw-VXt2n.js";import{At as n,G as r,I as i,Mt as a,N as o,Nt as s,P as c,_ as l,c as u,d,f,g as p,h as m,l as h,nt as g,q as _,r as v,rt as y,u as b,ut as x,z as S}from"./qCu_DG2q.js";import{_ as C,h as w,v as T,w as E}from"./Dvc06jSt.js";import"./DSEvhjzh.js";import{_ as D,a as O,c as k,d as A,f as ee,g as j,h as M,i as te,l as N,m as ne,n as re,o as ie,p as ae,r as P,s as oe,t as se,u as ce,v as le}from"./xqmSR81M.js";var ue=globalThis.setInterval,de=1e3,fe=1001,F=1002,pe=1003,me=1004,he=1005,I=1006,ge=1007,_e=1008,ve=1009,L=1010,R=1011,ye=1012,be=1013,xe=1014,Se=1015,Ce=1016,we=1017,Te=1018,Ee=1020,De=35902,Oe=35899,ke=1021,Ae=1022,je=1023,Me=1026,Ne=1027,Pe=1028,Fe=1029,Ie=1030,Le=1031,Re=1033,ze=33776,Be=33777,Ve=33778,He=33779,Ue=35840,We=35841,Ge=35842,Ke=35843,qe=36196,Je=37492,Ye=37496,Xe=37808,Ze=37809,Qe=37810,$e=37811,et=37812,tt=37813,nt=37814,rt=37815,it=37816,at=37817,ot=37818,st=37819,ct=37820,lt=37821,ut=36492,dt=36494,ft=36495,pt=36283,mt=36284,ht=36285,gt=36286,_t=2300,vt=2301,yt=2302,bt=2400,xt=2401,St=2402,Ct=3200,wt=3201,Tt=`srgb`,Et=`srgb-linear`,Dt=`linear`,Ot=`srgb`,kt=7680,At=35044,jt=2e3,Mt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},Nt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Pt=Math.PI/180,Ft=180/Math.PI;function It(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Nt[e&255]+Nt[e>>8&255]+Nt[e>>16&255]+Nt[e>>24&255]+`-`+Nt[t&255]+Nt[t>>8&255]+`-`+Nt[t>>16&15|64]+Nt[t>>24&255]+`-`+Nt[n&63|128]+Nt[n>>8&255]+`-`+Nt[n>>16&255]+Nt[n>>24&255]+Nt[r&255]+Nt[r>>8&255]+Nt[r>>16&255]+Nt[r>>24&255]).toLowerCase()}function z(e,t,n){return Math.max(t,Math.min(n,e))}function Lt(e,t){return(e%t+t)%t}function Rt(e,t,n){return(1-n)*e+n*t}function zt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function Bt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var B=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=z(this.x,e.x,t.x),this.y=z(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=z(this.x,e,t),this.y=z(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(z(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(z(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Vt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(o===0){e[t+0]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;return}if(u!==m||s!==d||c!==f||l!==p){let e=1-o,t=s*d+c*f+l*p+u*m,n=t>=0?1:-1,r=1-t*t;if(r>2**-52){let i=Math.sqrt(r),a=Math.atan2(i,t*n);e=Math.sin(e*a)/i,o=Math.sin(o*a)/i}let i=o*n;if(s=s*e+d*i,c=c*e+f*i,l=l*e+p*i,u=u*e+m*i,e===1-o){let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:console.warn(`THREE.Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(z(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,i=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=i,this;let s=1-o*o;if(s<=2**-52){let e=1-t;return this._w=e*a+t*this._w,this._x=e*n+t*this._x,this._y=e*r+t*this._y,this._z=e*i+t*this._z,this.normalize(),this}let c=Math.sqrt(s),l=Math.atan2(c,o),u=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=i*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class e{constructor(t=0,n=0,r=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ut.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ut.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=z(this.x,e.x,t.x),this.y=z(this.y,e.y,t.y),this.z=z(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=z(this.x,e,t),this.y=z(this.y,e,t),this.z=z(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(z(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ht.copy(this).projectOnVector(e),this.sub(Ht)}reflect(e){return this.sub(Ht.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(z(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ht=new V,Ut=new Vt,H=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Wt.makeScale(e,t)),this}rotate(e){return this.premultiply(Wt.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Wt=new H;function Gt(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Kt(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function qt(){let e=Kt(`canvas`);return e.style.display=`block`,e}var Jt={};function Yt(e){e in Jt||(Jt[e]=!0,console.warn(e))}function Xt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Zt=new H().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qt=new H().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $t(){let e={enabled:!0,workingColorSpace:Et,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=en(e.r),e.g=en(e.g),e.b=en(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=tn(e.r),e.g=tn(e.g),e.b=tn(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Dt:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Yt(`THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Yt(`THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Et]:{primaries:t,whitePoint:r,transfer:Dt,toXYZ:Zt,fromXYZ:Qt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:t,whitePoint:r,transfer:Ot,toXYZ:Zt,fromXYZ:Qt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),e}var U=$t();function en(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function tn(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var nn,rn=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{nn===void 0&&(nn=Kt(`canvas`)),nn.width=e.width,nn.height=e.height;let t=nn.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=nn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Kt(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=en(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(en(t[e]/255)*255):t[e]=en(t[e]);return{data:t,width:e.width,height:e.height}}return console.warn(`THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},an=0,on=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:an++}),this.uuid=It(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(sn(r[t].image)):e.push(sn(r[t]))}else e=sn(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function sn(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?rn.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn(`THREE.Texture: Unable to serialize Texture.`),{})}var cn=0,ln=new V,un=class e extends Mt{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=fe,i=fe,a=I,o=_e,s=je,c=ve,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cn++}),this.uuid=It(),this.name=``,this.source=new on(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new B(0,0),this.repeat=new B(1,1),this.center=new B(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new H,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ln).x}get height(){return this.source.getSize(ln).y}get depth(){return this.source.getSize(ln).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case de:e.x-=Math.floor(e.x);break;case fe:e.x=e.x<0?0:1;break;case F:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case de:e.y-=Math.floor(e.y);break;case fe:e.y=e.y<0?0:1;break;case F:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};un.DEFAULT_IMAGE=null,un.DEFAULT_MAPPING=300,un.DEFAULT_ANISOTROPY=1;var dn=class e{constructor(t=0,n=0,r=0,i=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=z(this.x,e.x,t.x),this.y=z(this.y,e.y,t.y),this.z=z(this.z,e.z,t.z),this.w=z(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=z(this.x,e,t),this.y=z(this.y,e,t),this.z=z(this.z,e,t),this.w=z(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(z(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},fn=class extends Mt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:I,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new dn(0,0,e,t),this.scissorTest=!1,this.viewport=new dn(0,0,e,t);let r=new un({width:e,height:t,depth:n.depth});this.textures=[];let i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:I,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new on(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:`dispose`})}},pn=class extends fn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},mn=class extends un{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=pe,this.minFilter=pe,this.wrapR=fe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},hn=class extends un{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=pe,this.minFilter=pe,this.wrapR=fe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},gn=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,vn):vn.fromBufferAttribute(r,t),vn.applyMatrix4(e.matrixWorld),this.expandByPoint(vn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),yn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),yn.copy(e.boundingBox)),yn.applyMatrix4(e.matrixWorld),this.union(yn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(En),Dn.subVectors(this.max,En),bn.subVectors(e.a,En),xn.subVectors(e.b,En),Sn.subVectors(e.c,En),Cn.subVectors(xn,bn),wn.subVectors(Sn,xn),Tn.subVectors(bn,Sn);let t=[0,-Cn.z,Cn.y,0,-wn.z,wn.y,0,-Tn.z,Tn.y,Cn.z,0,-Cn.x,wn.z,0,-wn.x,Tn.z,0,-Tn.x,-Cn.y,Cn.x,0,-wn.y,wn.x,0,-Tn.y,Tn.x,0];return!An(t,bn,xn,Sn,Dn)||(t=[1,0,0,0,1,0,0,0,1],!An(t,bn,xn,Sn,Dn))?!1:(On.crossVectors(Cn,wn),t=[On.x,On.y,On.z],An(t,bn,xn,Sn,Dn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},_n=[new V,new V,new V,new V,new V,new V,new V,new V],vn=new V,yn=new gn,bn=new V,xn=new V,Sn=new V,Cn=new V,wn=new V,Tn=new V,En=new V,Dn=new V,On=new V,kn=new V;function An(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){kn.fromArray(e,a);let o=i.x*Math.abs(kn.x)+i.y*Math.abs(kn.y)+i.z*Math.abs(kn.z),s=t.dot(kn),c=n.dot(kn),l=r.dot(kn);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var jn=new gn,Mn=new V,Nn=new V,Pn=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?jn.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mn.subVectors(e,this.center);let t=Mn.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Mn,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nn.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mn.copy(e.center).add(Nn)),this.expandByPoint(Mn.copy(e.center).sub(Nn))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Fn=new V,In=new V,Ln=new V,Rn=new V,zn=new V,Bn=new V,Vn=new V,Hn=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fn.copy(this.origin).addScaledVector(this.direction,t),Fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){In.copy(e).add(t).multiplyScalar(.5),Ln.copy(t).sub(e).normalize(),Rn.copy(this.origin).sub(In);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Ln),o=Rn.dot(this.direction),s=-Rn.dot(Ln),c=Rn.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(In).addScaledVector(Ln,d),f}intersectSphere(e,t){Fn.subVectors(e.center,this.origin);let n=Fn.dot(this.direction),r=Fn.dot(Fn)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Fn)!==null}intersectTriangle(e,t,n,r,i){zn.subVectors(t,e),Bn.subVectors(n,e),Vn.crossVectors(zn,Bn);let a=this.direction.dot(Vn),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Rn.subVectors(this.origin,e);let s=o*this.direction.dot(Bn.crossVectors(Rn,Bn));if(s<0)return null;let c=o*this.direction.dot(zn.cross(Rn));if(c<0||s+c>a)return null;let l=-o*Rn.dot(Vn);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Un=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Wn.setFromMatrixColumn(e,0).length(),i=1/Wn.setFromMatrixColumn(e,1).length(),a=1/Wn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kn,e,qn)}lookAt(e,t,n){let r=this.elements;return Xn.subVectors(e,t),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),Jn.crossVectors(n,Xn),Jn.lengthSq()===0&&(Math.abs(n.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),Jn.crossVectors(n,Xn)),Jn.normalize(),Yn.crossVectors(Xn,Jn),r[0]=Jn.x,r[4]=Yn.x,r[8]=Xn.x,r[1]=Jn.y,r[5]=Yn.y,r[9]=Xn.y,r[2]=Jn.z,r[6]=Yn.z,r[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],ee=r[10],j=r[14],M=r[3],te=r[7],N=r[11],ne=r[15];return i[0]=a*x+o*T+s*k+c*M,i[4]=a*S+o*E+s*A+c*te,i[8]=a*C+o*D+s*ee+c*N,i[12]=a*w+o*O+s*j+c*ne,i[1]=l*x+u*T+d*k+f*M,i[5]=l*S+u*E+d*A+f*te,i[9]=l*C+u*D+d*ee+f*N,i[13]=l*w+u*O+d*j+f*ne,i[2]=p*x+m*T+h*k+g*M,i[6]=p*S+m*E+h*A+g*te,i[10]=p*C+m*D+h*ee+g*N,i[14]=p*w+m*O+h*j+g*ne,i[3]=_*x+v*T+y*k+b*M,i[7]=_*S+v*E+y*A+b*te,i[11]=_*C+v*D+y*ee+b*N,i[15]=_*w+v*O+y*j+b*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15];return p*(+i*s*u-r*c*u-i*o*d+n*c*d+r*o*f-n*s*f)+m*(+t*s*f-t*c*d+i*a*d-r*a*f+r*c*l-i*s*l)+h*(+t*c*u-t*o*f-i*a*u+n*a*f+i*o*l-n*c*l)+g*(-r*o*l-t*s*u+t*o*d+r*a*u-n*a*d+n*s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=_*S,e[1]=(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,e[2]=(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,e[3]=(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,e[4]=v*S,e[5]=(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,e[6]=(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,e[7]=(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,e[8]=y*S,e[9]=(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,e[10]=(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,e[11]=(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=b*S,e[13]=(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,e[14]=(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,e[15]=(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,i=Wn.set(r[0],r[1],r[2]).length(),a=Wn.set(r[4],r[5],r[6]).length(),o=Wn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],Gn.copy(this);let s=1/i,c=1/a,l=1/o;return Gn.elements[0]*=s,Gn.elements[1]*=s,Gn.elements[2]*=s,Gn.elements[4]*=c,Gn.elements[5]*=c,Gn.elements[6]*=c,Gn.elements[8]*=l,Gn.elements[9]*=l,Gn.elements[10]*=l,t.setFromRotationMatrix(Gn),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a,o=jt,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=jt,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Wn=new V,Gn=new Un,Kn=new V(0,0,0),qn=new V(1,1,1),Jn=new V,Yn=new V,Xn=new V,Zn=new Un,Qn=new Vt,$n=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(z(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-z(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(z(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-z(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(z(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-z(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn(`THREE.Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Zn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qn.setFromEuler(this),this.setFromQuaternion(Qn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$n.DEFAULT_ORDER=`XYZ`;var er=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},tr=0,nr=new V,rr=new Vt,ir=new Un,ar=new V,or=new V,sr=new V,cr=new Vt,lr=new V(1,0,0),ur=new V(0,1,0),dr=new V(0,0,1),fr={type:`added`},pr={type:`removed`},mr={type:`childadded`,child:null},hr={type:`childremoved`,child:null},gr=class e extends Mt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tr++}),this.uuid=It(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new V,n=new $n,r=new Vt,i=new V(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Un},normalMatrix:{value:new H}}),this.matrix=new Un,this.matrixWorld=new Un,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new er,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.multiply(rr),this}rotateOnWorldAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.premultiply(rr),this}rotateX(e){return this.rotateOnAxis(lr,e)}rotateY(e){return this.rotateOnAxis(ur,e)}rotateZ(e){return this.rotateOnAxis(dr,e)}translateOnAxis(e,t){return nr.copy(e).applyQuaternion(this.quaternion),this.position.add(nr.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lr,e)}translateY(e){return this.translateOnAxis(ur,e)}translateZ(e){return this.translateOnAxis(dr,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ir.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ar.copy(e):ar.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ir.lookAt(or,ar,this.up):ir.lookAt(ar,or,this.up),this.quaternion.setFromRotationMatrix(ir),r&&(ir.extractRotation(r.matrixWorld),rr.setFromRotationMatrix(ir),this.quaternion.premultiply(rr.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(console.error(`THREE.Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fr),mr.child=e,this.dispatchEvent(mr),mr.child=null):console.error(`THREE.Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pr),hr.child=e,this.dispatchEvent(hr),hr.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ir.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ir.multiply(e.parent.matrixWorld)),e.applyMatrix4(ir),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fr),mr.child=e,this.dispatchEvent(mr),mr.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,e,sr),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,cr,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};gr.DEFAULT_UP=new V(0,1,0),gr.DEFAULT_MATRIX_AUTO_UPDATE=!0,gr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _r=new V,vr=new V,yr=new V,br=new V,xr=new V,Sr=new V,Cr=new V,wr=new V,Tr=new V,Er=new V,Dr=new dn,Or=new dn,kr=new dn,Ar=class e{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),_r.subVectors(e,t),r.cross(_r);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){_r.subVectors(r,t),vr.subVectors(n,t),yr.subVectors(e,t);let a=_r.dot(_r),o=_r.dot(vr),s=_r.dot(yr),c=vr.dot(vr),l=vr.dot(yr),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,br)!==null&&br.x>=0&&br.y>=0&&br.x+br.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,br)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,br.x),s.addScaledVector(a,br.y),s.addScaledVector(o,br.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Dr.setScalar(0),Or.setScalar(0),kr.setScalar(0),Dr.fromBufferAttribute(e,t),Or.fromBufferAttribute(e,n),kr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Dr,i.x),a.addScaledVector(Or,i.y),a.addScaledVector(kr,i.z),a}static isFrontFacing(e,t,n,r){return _r.subVectors(n,t),vr.subVectors(e,t),_r.cross(vr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _r.subVectors(this.c,this.b),vr.subVectors(this.a,this.b),_r.cross(vr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;xr.subVectors(r,n),Sr.subVectors(i,n),wr.subVectors(e,n);let s=xr.dot(wr),c=Sr.dot(wr);if(s<=0&&c<=0)return t.copy(n);Tr.subVectors(e,r);let l=xr.dot(Tr),u=Sr.dot(Tr);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(xr,a);Er.subVectors(e,i);let f=xr.dot(Er),p=Sr.dot(Er);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Sr,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Cr.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Cr,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(xr,a).addScaledVector(Sr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},jr={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mr={h:0,s:0,l:0},Nr={h:0,s:0,l:0};function Pr(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var W=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,U.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=U.workingColorSpace){return this.r=e,this.g=t,this.b=n,U.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=U.workingColorSpace){if(e=Lt(e,1),t=z(t,0,1),n=z(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Pr(i,r,e+1/3),this.g=Pr(i,r,e),this.b=Pr(i,r,e-1/3)}return U.colorSpaceToWorking(this,r),this}setStyle(e,t=Tt){function n(t){t!==void 0&&parseFloat(t)<1&&console.warn(`THREE.Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn(`THREE.Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);console.warn(`THREE.Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let n=jr[e.toLowerCase()];return n===void 0?console.warn(`THREE.Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=en(e.r),this.g=en(e.g),this.b=en(e.b),this}copyLinearToSRGB(e){return this.r=tn(e.r),this.g=tn(e.g),this.b=tn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return U.workingToColorSpace(Fr.copy(this),e),Math.round(z(Fr.r*255,0,255))*65536+Math.round(z(Fr.g*255,0,255))*256+Math.round(z(Fr.b*255,0,255))}getHexString(e=Tt){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=U.workingColorSpace){U.workingToColorSpace(Fr.copy(this),t);let n=Fr.r,r=Fr.g,i=Fr.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=U.workingColorSpace){return U.workingToColorSpace(Fr.copy(this),t),e.r=Fr.r,e.g=Fr.g,e.b=Fr.b,e}getStyle(e=Tt){U.workingToColorSpace(Fr.copy(this),e);let t=Fr.r,n=Fr.g,r=Fr.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Mr),this.setHSL(Mr.h+e,Mr.s+t,Mr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mr),e.getHSL(Nr);let n=Rt(Mr.h,Nr.h,t),r=Rt(Mr.s,Nr.s,t),i=Rt(Mr.l,Nr.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fr=new W;W.NAMES=jr;var Ir=0,Lr=class extends Mt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ir++}),this.uuid=It(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new W(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kt,this.stencilZFail=kt,this.stencilZPass=kt,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},G=class extends Lr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new W(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Rr=new V,zr=new B,Br=0,Vr=class{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Br++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=At,this.updateRanges=[],this.gpuType=Se,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zr.fromBufferAttribute(this,t),zr.applyMatrix3(e),this.setXY(t,zr.x,zr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rr.fromBufferAttribute(this,t),Rr.applyMatrix3(e),this.setXYZ(t,Rr.x,Rr.y,Rr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rr.fromBufferAttribute(this,t),Rr.applyMatrix4(e),this.setXYZ(t,Rr.x,Rr.y,Rr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rr.fromBufferAttribute(this,t),Rr.applyNormalMatrix(e),this.setXYZ(t,Rr.x,Rr.y,Rr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rr.fromBufferAttribute(this,t),Rr.transformDirection(e),this.setXYZ(t,Rr.x,Rr.y,Rr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=zt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),r=Bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),r=Bt(r,this.array),i=Bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},Hr=class extends Vr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Ur=class extends Vr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Wr=class extends Vr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Gr=0,Kr=new Un,qr=new gr,Jr=new V,Yr=new gn,Xr=new gn,Zr=new V,Qr=class e extends Mt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gr++}),this.uuid=It(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Gt(e)?Ur:Hr)(e,1):e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new H().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kr.makeRotationFromQuaternion(e),this.applyMatrix4(Kr),this}rotateX(e){return Kr.makeRotationX(e),this.applyMatrix4(Kr),this}rotateY(e){return Kr.makeRotationY(e),this.applyMatrix4(Kr),this}rotateZ(e){return Kr.makeRotationZ(e),this.applyMatrix4(Kr),this}translate(e,t,n){return Kr.makeTranslation(e,t,n),this.applyMatrix4(Kr),this}scale(e,t,n){return Kr.makeScale(e,t,n),this.applyMatrix4(Kr),this}lookAt(e){return qr.lookAt(e),qr.updateMatrix(),this.applyMatrix4(qr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jr).negate(),this.translate(Jr.x,Jr.y,Jr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Wr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&console.warn(`THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error(`THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Yr.setFromBufferAttribute(n),this.morphTargetsRelative?(Zr.addVectors(this.boundingBox.min,Yr.min),this.boundingBox.expandByPoint(Zr),Zr.addVectors(this.boundingBox.max,Yr.max),this.boundingBox.expandByPoint(Zr)):(this.boundingBox.expandByPoint(Yr.min),this.boundingBox.expandByPoint(Yr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error(`THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error(`THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new V,1/0);return}if(e){let n=this.boundingSphere.center;if(Yr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Xr.setFromBufferAttribute(n),this.morphTargetsRelative?(Zr.addVectors(Yr.min,Xr.min),Yr.expandByPoint(Zr),Zr.addVectors(Yr.max,Xr.max),Yr.expandByPoint(Zr)):(Yr.expandByPoint(Xr.min),Yr.expandByPoint(Xr.max))}Yr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Zr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Zr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Zr.fromBufferAttribute(a,t),o&&(Jr.fromBufferAttribute(e,t),Zr.add(Jr)),r=Math.max(r,n.distanceToSquared(Zr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error(`THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new Vr(new Float32Array(4*n.count),4));let a=this.getAttribute(`tangent`),o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new V,s[e]=new V;let c=new V,l=new V,u=new V,d=new B,f=new B,p=new B,m=new V,h=new V;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new V,y=new V,b=new V,x=new V;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new Vr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new V,i=new V,a=new V,o=new V,s=new V,c=new V,l=new V,u=new V;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zr.fromBufferAttribute(e,t),Zr.normalize(),e.setXYZ(t,Zr.x,Zr.y,Zr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Vr(a,r,i)}if(this.index===null)return console.warn(`THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},$r=new Un,ei=new Hn,ti=new Pn,ni=new V,ri=new V,ii=new V,ai=new V,oi=new V,si=new V,ci=new V,li=new V,K=class extends gr{constructor(e=new Qr,t=new G){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){si.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(oi.fromBufferAttribute(s,e),a?si.addScaledVector(oi,r):si.addScaledVector(oi.sub(t),r))}t.add(si)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ti.copy(n.boundingSphere),ti.applyMatrix4(i),ei.copy(e.ray).recast(e.near),!(ti.containsPoint(ei.origin)===!1&&(ei.intersectSphere(ti,ni)===null||ei.origin.distanceToSquared(ni)>(e.far-e.near)**2))&&($r.copy(i).invert(),ei.copy(e.ray).applyMatrix4($r),(n.boundingBox===null||ei.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,ei)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=di(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=di(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=di(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=di(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function ui(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;li.copy(s),li.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(li);return l<n.near||l>n.far?null:{distance:l,point:li.clone(),object:e}}function di(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,ri),e.getVertexPosition(c,ii),e.getVertexPosition(l,ai);let u=ui(e,t,n,r,ri,ii,ai,ci);if(u){let e=new V;Ar.getBarycoord(ci,ri,ii,ai,e),i&&(u.uv=Ar.getInterpolatedAttribute(i,s,c,l,e,new B)),a&&(u.uv1=Ar.getInterpolatedAttribute(a,s,c,l,e,new B)),o&&(u.normal=Ar.getInterpolatedAttribute(o,s,c,l,e,new V),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new V,materialIndex:0};Ar.getNormal(ri,ii,ai,t.normal),u.face=t,u.barycoord=e}return u}var q=class e extends Qr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Wr(c,3)),this.setAttribute(`normal`,new Wr(l,3)),this.setAttribute(`uv`,new Wr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new V;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function fi(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function pi(e){let t={};for(let n=0;n<e.length;n++){let r=fi(e[n]);for(let e in r)t[e]=r[e]}return t}function mi(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function hi(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:U.workingColorSpace}var gi={clone:fi,merge:pi},_i=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vi=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yi=class extends Lr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_i,this.fragmentShader=vi,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fi(e.uniforms),this.uniformsGroups=mi(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},bi=class extends gr{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Un,this.projectionMatrix=new Un,this.projectionMatrixInverse=new Un,this.coordinateSystem=jt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},xi=new V,Si=new B,Ci=new B,wi=class extends bi{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ft*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Pt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ft*2*Math.atan(Math.tan(Pt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xi.x,xi.y).multiplyScalar(-e/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-e/xi.z)}getViewSize(e,t){return this.getViewBounds(e,Si,Ci),t.subVectors(Ci,Si)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Pt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ti=-90,Ei=1,Di=class extends gr{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new wi(Ti,Ei,e,t);r.layers=this.layers,this.add(r);let i=new wi(Ti,Ei,e,t);i.layers=this.layers,this.add(i);let a=new wi(Ti,Ei,e,t);a.layers=this.layers,this.add(a);let o=new wi(Ti,Ei,e,t);o.layers=this.layers,this.add(o);let s=new wi(Ti,Ei,e,t);s.layers=this.layers,this.add(s);let c=new wi(Ti,Ei,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,i),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,s),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Oi=class extends un{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ki=class extends pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Oi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new q(5,5,5),i=new yi({name:`CubemapFromEquirect`,uniforms:fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new K(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=I),new Di(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},J=class extends gr{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Ai={type:`move`},ji=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new J,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new J,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new J,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ai)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new J;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Mi=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new W(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ni=class extends gr{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Pi=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=At,this.updateRanges=[],this.version=0,this.uuid=It()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=It()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=It()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Fi=new V,Ii=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Fi.fromBufferAttribute(this,t),Fi.applyMatrix4(e),this.setXYZ(t,Fi.x,Fi.y,Fi.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Fi.fromBufferAttribute(this,t),Fi.applyNormalMatrix(e),this.setXYZ(t,Fi.x,Fi.y,Fi.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Fi.fromBufferAttribute(this,t),Fi.transformDirection(e),this.setXYZ(t,Fi.x,Fi.y,Fi.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=zt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=zt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=zt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=zt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=zt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),r=Bt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),r=Bt(r,this.array),i=Bt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){console.log(`THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new Vr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log(`THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Li=class extends Lr{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new W(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ri,zi=new V,Bi=new V,Vi=new V,Hi=new B,Ui=new B,Wi=new Un,Gi=new V,Ki=new V,qi=new V,Ji=new B,Yi=new B,Xi=new B,Zi=class extends gr{constructor(e=new Li){if(super(),this.isSprite=!0,this.type=`Sprite`,Ri===void 0){Ri=new Qr;let e=new Pi(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Ri.setIndex([0,1,2,0,2,3]),Ri.setAttribute(`position`,new Ii(e,3,0,!1)),Ri.setAttribute(`uv`,new Ii(e,2,3,!1))}this.geometry=Ri,this.material=e,this.center=new B(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error(`THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Bi.setFromMatrixScale(this.matrixWorld),Wi.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Vi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Bi.multiplyScalar(-Vi.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;Qi(Gi.set(-.5,-.5,0),Vi,a,Bi,r,i),Qi(Ki.set(.5,-.5,0),Vi,a,Bi,r,i),Qi(qi.set(.5,.5,0),Vi,a,Bi,r,i),Ji.set(0,0),Yi.set(1,0),Xi.set(1,1);let o=e.ray.intersectTriangle(Gi,Ki,qi,!1,zi);if(o===null&&(Qi(Ki.set(-.5,.5,0),Vi,a,Bi,r,i),Yi.set(0,1),o=e.ray.intersectTriangle(Gi,qi,Ki,!1,zi),o===null))return;let s=e.ray.origin.distanceTo(zi);s<e.near||s>e.far||t.push({distance:s,point:zi.clone(),uv:Ar.getInterpolation(zi,Gi,Ki,qi,Ji,Yi,Xi,new B),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Qi(e,t,n,r,i,a){Hi.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Ui.copy(Hi):(Ui.x=a*Hi.x-i*Hi.y,Ui.y=i*Hi.x+a*Hi.y),e.copy(t),e.x+=Ui.x,e.y+=Ui.y,e.applyMatrix4(Wi)}var $i=new V,ea=new V,ta=new H,na=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=$i.subVectors(n,t).cross(ea.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta($i),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ta.getNormalMatrix(e),r=this.coplanarPoint($i).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ra=new Pn,ia=new B(.5,.5),aa=new V,oa=class{constructor(e=new na,t=new na,n=new na,r=new na,i=new na,a=new na){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=jt,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ra.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ra.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ra)}intersectsSprite(e){return ra.center.set(0,0,0),ra.radius=.7071067811865476+ia.distanceTo(e.center),ra.applyMatrix4(e.matrixWorld),this.intersectsSphere(ra)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(aa.x=r.normal.x>0?e.max.x:e.min.x,aa.y=r.normal.y>0?e.max.y:e.min.y,aa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(aa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},sa=class extends Lr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new W(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ca=new Un,la=new Hn,ua=new Pn,da=new V,fa=class extends gr{constructor(e=new Qr,t=new sa){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(r),ua.radius+=i,e.ray.intersectsSphere(ua)===!1)return;ca.copy(r).invert(),la.copy(e.ray).applyMatrix4(ca);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);da.fromBufferAttribute(l,n),pa(da,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)da.fromBufferAttribute(l,a),pa(da,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function pa(e,t,n,r,i,a,o){let s=la.distanceSqToPoint(e);if(s<n){let n=new V;la.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ma=class extends un{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ha=class extends un{constructor(e,t,n=xe,r,i,a,o=pe,s=pe,c,l=Me,u=1){if(l!==1026&&l!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new on(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ga=class extends un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},_a=class e extends Qr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new V,l=new B;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new Wr(a,3)),this.setAttribute(`normal`,new Wr(o,3)),this.setAttribute(`uv`,new Wr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Y=class e extends Qr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Wr(u,3)),this.setAttribute(`normal`,new Wr(d,3)),this.setAttribute(`uv`,new Wr(f,2));function _(){let a=new V,_=new V,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new B,m=new V,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},X=class e extends Y{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},va=class e extends Qr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new Wr(i,3)),this.setAttribute(`normal`,new Wr(i.slice(),3)),this.setAttribute(`uv`,new Wr(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new V,r=new V,i=new V;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new V;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new V;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new V,t=new V,n=new V,r=new V,o=new B,s=new B,c=new B;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.details)}},ya=class e extends va{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,i=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r];super(i,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type=`DodecahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},ba=class e extends va{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},xa=class e extends Qr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Wr(p,3)),this.setAttribute(`normal`,new Wr(m,3)),this.setAttribute(`uv`,new Wr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Sa=class e extends Qr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new V,p=new B;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new Wr(s,3)),this.setAttribute(`normal`,new Wr(c,3)),this.setAttribute(`uv`,new Wr(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ca=class e extends Qr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new V,d=new V,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=0;f===0&&a===0?v=.5/t:f===n&&s===Math.PI&&(v=-.5/t);for(let n=0;n<=t;n++){let s=n/t;u.x=-e*Math.cos(r+s*i)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(r+s*i)*Math.sin(a+_*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(s+v,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Wr(p,3)),this.setAttribute(`normal`,new Wr(m,3)),this.setAttribute(`uv`,new Wr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},wa=class e extends Qr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i},n=Math.floor(n),r=Math.floor(r);let a=[],o=[],s=[],c=[],l=new V,u=new V,d=new V;for(let a=0;a<=n;a++)for(let f=0;f<=r;f++){let p=f/r*i,m=a/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(p),u.y=(e+t*Math.cos(m))*Math.sin(p),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),l.x=e*Math.cos(p),l.y=e*Math.sin(p),d.subVectors(u,l).normalize(),s.push(d.x,d.y,d.z),c.push(f/r),c.push(a/n)}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,o=(r+1)*(e-1)+t,s=(r+1)*e+t;a.push(n,i,s),a.push(i,o,s)}this.setIndex(a),this.setAttribute(`position`,new Wr(o,3)),this.setAttribute(`normal`,new Wr(s,3)),this.setAttribute(`uv`,new Wr(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},Ta=class extends Lr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type=`MeshPhongMaterial`,this.color=new W(16777215),this.specular=new W(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new W(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new B(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Z=class extends Lr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new W(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new W(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new B(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ea=class extends Lr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Ct,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Da=class extends Lr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Oa(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function ka(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Aa=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},ja=class extends Aa{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bt,endingEnd:bt}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case xt:i=e,o=2*t-n;break;case St:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case xt:a=e,s=2*n-t;break;case St:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Ma=class extends Aa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Na=class extends Aa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Pa=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Oa(t,this.TimeBufferType),this.values=Oa(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Oa(e.times,Array),values:Oa(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Na(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ma(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ja(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case _t:t=this.InterpolantFactoryMethodDiscrete;break;case vt:t=this.InterpolantFactoryMethodLinear;break;case yt:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return console.warn(`THREE.KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _t;case this.InterpolantFactoryMethodLinear:return vt;case this.InterpolantFactoryMethodSmooth:return yt}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error(`THREE.KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(console.error(`THREE.KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){console.error(`THREE.KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){console.error(`THREE.KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&ka(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){console.error(`THREE.KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===yt,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Pa.prototype.ValueTypeName=``,Pa.prototype.TimeBufferType=Float32Array,Pa.prototype.ValueBufferType=Float32Array,Pa.prototype.DefaultInterpolation=vt;var Fa=class extends Pa{constructor(e,t,n){super(e,t,n)}};Fa.prototype.ValueTypeName=`bool`,Fa.prototype.ValueBufferType=Array,Fa.prototype.DefaultInterpolation=_t,Fa.prototype.InterpolantFactoryMethodLinear=void 0,Fa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ia=class extends Pa{constructor(e,t,n,r){super(e,t,n,r)}};Ia.prototype.ValueTypeName=`color`;var La=class extends Pa{constructor(e,t,n,r){super(e,t,n,r)}};La.prototype.ValueTypeName=`number`;var Ra=class extends Aa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Vt.slerpFlat(i,0,a,c-o,a,c,s);return i}},za=class extends Pa{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Ra(this.times,this.values,this.getValueSize(),e)}};za.prototype.ValueTypeName=`quaternion`,za.prototype.InterpolantFactoryMethodSmooth=void 0;var Ba=class extends Pa{constructor(e,t,n){super(e,t,n)}};Ba.prototype.ValueTypeName=`string`,Ba.prototype.ValueBufferType=Array,Ba.prototype.DefaultInterpolation=_t,Ba.prototype.InterpolantFactoryMethodLinear=void 0,Ba.prototype.InterpolantFactoryMethodSmooth=void 0;var Va=class extends Pa{constructor(e,t,n,r){super(e,t,n,r)}};Va.prototype.ValueTypeName=`vector`;var Ha=class extends gr{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new W(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ua=class extends Ha{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(gr.DEFAULT_UP),this.updateMatrix(),this.groundColor=new W(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Wa=new Un,Ga=new V,Ka=new V,qa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new B(512,512),this.mapType=ve,this.map=null,this.mapPass=null,this.matrix=new Un,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oa,this._frameExtents=new B(1,1),this._viewportCount=1,this._viewports=[new dn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ga.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ga),Ka.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ka),t.updateMatrixWorld(),Wa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wa,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ja=class extends bi{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ya=class extends qa{constructor(){super(new Ja(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xa=class extends Ha{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(gr.DEFAULT_UP),this.updateMatrix(),this.target=new gr,this.shadow=new Ya}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Za=class extends wi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Qa=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},$a=`\\[\\]\\.:\\/`,eo=RegExp(`[\\[\\]\\.:\\/]`,`g`),to=`[^\\[\\]\\.:\\/]`,no=`[^`+$a.replace(`\\.`,``)+`]`,ro=`((?:WC+[\\/:])*)`.replace(`WC`,to),io=`(WCOD+)?`.replace(`WCOD`,no),ao=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,to),oo=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,to),so=RegExp(`^`+ro+io+ao+oo+`$`),co=[`material`,`materials`,`bones`,`map`],lo=class{constructor(e,t,n){let r=n||uo.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},uo=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(eo,``)}static parseTrackName(e){let t=so.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);co.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn(`THREE.PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){console.error(`THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){console.error(`THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){console.error(`THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error(`THREE.PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){console.error(`THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;console.error(`THREE.PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};uo.Composite=lo,uo.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},uo.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},uo.prototype.GetterByBindingType=[uo.prototype._getValue_direct,uo.prototype._getValue_array,uo.prototype._getValue_arrayElement,uo.prototype._getValue_toArray],uo.prototype.SetterByBindingTypeAndVersioning=[[uo.prototype._setValue_direct,uo.prototype._setValue_direct_setNeedsUpdate,uo.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[uo.prototype._setValue_array,uo.prototype._setValue_array_setNeedsUpdate,uo.prototype._setValue_array_setMatrixWorldNeedsUpdate],[uo.prototype._setValue_arrayElement,uo.prototype._setValue_arrayElement_setNeedsUpdate,uo.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[uo.prototype._setValue_fromArray,uo.prototype._setValue_fromArray_setNeedsUpdate,uo.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fo=new Un,po=class{constructor(e,t,n=0,r=1/0){this.ray=new Hn(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new er,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error(`THREE.Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return fo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fo),this}intersectObject(e,t=!0,n=[]){return ho(e,this,n,t),n.sort(mo),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)ho(e[r],this,n,t);return n.sort(mo),n}};function mo(e,t){return e.distance-t.distance}function ho(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)ho(r[e],t,n,!0)}}function go(e,t,n,r){let i=_o(r);switch(n){case ke:return e*t;case Pe:return e*t/i.components*i.byteLength;case Fe:return e*t/i.components*i.byteLength;case Ie:return e*t*2/i.components*i.byteLength;case Le:return e*t*2/i.components*i.byteLength;case Ae:return e*t*3/i.components*i.byteLength;case je:return e*t*4/i.components*i.byteLength;case Re:return e*t*4/i.components*i.byteLength;case ze:case Be:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ve:case He:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case We:case Ke:return Math.max(e,16)*Math.max(t,8)/4;case Ue:case Ge:return Math.max(e,8)*Math.max(t,8)/2;case qe:case Je:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ye:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Xe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ze:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Qe:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case $e:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case et:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case tt:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case nt:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case rt:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case it:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case at:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case ot:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case st:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case ct:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case lt:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ut:case dt:case ft:return Math.ceil(e/4)*Math.ceil(t/4)*16;case pt:case mt:return Math.ceil(e/4)*Math.ceil(t/4)*8;case ht:case gt:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function _o(e){switch(e){case ve:case L:return{byteLength:1,components:1};case ye:case R:case Ce:return{byteLength:2,components:1};case we:case Te:return{byteLength:2,components:4};case xe:case be:case Se:return{byteLength:4,components:1};case De:case Oe:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`180`}})),typeof window<`u`&&(window.__THREE__?console.warn(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`180`);function vo(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function yo(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Q={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},$={common:{diffuse:{value:new W(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new H}},envmap:{envMap:{value:null},envMapRotation:{value:new H},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new H}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new H}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new H},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new H},normalScale:{value:new B(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new H},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new H}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new H}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new H}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new W(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new W(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0},uvTransform:{value:new H}},sprite:{diffuse:{value:new W(16777215)},opacity:{value:1},center:{value:new B(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}}},bo={basic:{uniforms:pi([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.fog]),vertexShader:Q.meshbasic_vert,fragmentShader:Q.meshbasic_frag},lambert:{uniforms:pi([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new W(0)}}]),vertexShader:Q.meshlambert_vert,fragmentShader:Q.meshlambert_frag},phong:{uniforms:pi([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new W(0)},specular:{value:new W(1118481)},shininess:{value:30}}]),vertexShader:Q.meshphong_vert,fragmentShader:Q.meshphong_frag},standard:{uniforms:pi([$.common,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.roughnessmap,$.metalnessmap,$.fog,$.lights,{emissive:{value:new W(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Q.meshphysical_vert,fragmentShader:Q.meshphysical_frag},toon:{uniforms:pi([$.common,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.gradientmap,$.fog,$.lights,{emissive:{value:new W(0)}}]),vertexShader:Q.meshtoon_vert,fragmentShader:Q.meshtoon_frag},matcap:{uniforms:pi([$.common,$.bumpmap,$.normalmap,$.displacementmap,$.fog,{matcap:{value:null}}]),vertexShader:Q.meshmatcap_vert,fragmentShader:Q.meshmatcap_frag},points:{uniforms:pi([$.points,$.fog]),vertexShader:Q.points_vert,fragmentShader:Q.points_frag},dashed:{uniforms:pi([$.common,$.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Q.linedashed_vert,fragmentShader:Q.linedashed_frag},depth:{uniforms:pi([$.common,$.displacementmap]),vertexShader:Q.depth_vert,fragmentShader:Q.depth_frag},normal:{uniforms:pi([$.common,$.bumpmap,$.normalmap,$.displacementmap,{opacity:{value:1}}]),vertexShader:Q.meshnormal_vert,fragmentShader:Q.meshnormal_frag},sprite:{uniforms:pi([$.sprite,$.fog]),vertexShader:Q.sprite_vert,fragmentShader:Q.sprite_frag},background:{uniforms:{uvTransform:{value:new H},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Q.background_vert,fragmentShader:Q.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new H}},vertexShader:Q.backgroundCube_vert,fragmentShader:Q.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Q.cube_vert,fragmentShader:Q.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Q.equirect_vert,fragmentShader:Q.equirect_frag},distanceRGBA:{uniforms:pi([$.common,$.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Q.distanceRGBA_vert,fragmentShader:Q.distanceRGBA_frag},shadow:{uniforms:pi([$.lights,$.fog,{color:{value:new W(0)},opacity:{value:1}}]),vertexShader:Q.shadow_vert,fragmentShader:Q.shadow_frag}};bo.physical={uniforms:pi([bo.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new H},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new H},clearcoatNormalScale:{value:new B(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new H},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new H},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new H},sheen:{value:0},sheenColor:{value:new W(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new H},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new H},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new H},transmissionSamplerSize:{value:new B},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new H},attenuationDistance:{value:0},attenuationColor:{value:new W(0)},specularColor:{value:new W(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new H},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new H},anisotropyVector:{value:new B},anisotropyMap:{value:null},anisotropyMapTransform:{value:new H}}]),vertexShader:Q.meshphysical_vert,fragmentShader:Q.meshphysical_frag};var xo={r:0,b:0,g:0},So=new $n,Co=new Un;function wo(e,t,n,r,i,a,o){let s=new W(0),c=a===!0?0:1,l,u,d=null,f=0,p=null;function m(e){let r=e.isScene===!0?e.background:null;return r&&r.isTexture&&(r=(e.backgroundBlurriness>0?n:t).get(r)),r}function h(t){let n=!1,i=m(t);i===null?_(s,c):i&&i.isColor&&(_(i,1),n=!0);let a=e.xr.getEnvironmentBlendMode();a===`additive`?r.buffers.color.setClear(0,0,0,1,o):a===`alpha-blend`&&r.buffers.color.setClear(0,0,0,0,o),(e.autoClear||n)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(t,n){let r=m(n);r&&(r.isCubeTexture||r.mapping===306)?(u===void 0&&(u=new K(new q(1,1,1),new yi({name:`BackgroundCubeMaterial`,uniforms:fi(bo.backgroundCube.uniforms),vertexShader:bo.backgroundCube.vertexShader,fragmentShader:bo.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),So.copy(n.backgroundRotation),So.x*=-1,So.y*=-1,So.z*=-1,r.isCubeTexture&&r.isRenderTargetTexture===!1&&(So.y*=-1,So.z*=-1),u.material.uniforms.envMap.value=r,u.material.uniforms.flipEnvMap.value=r.isCubeTexture&&r.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Co.makeRotationFromEuler(So)),u.material.toneMapped=U.getTransfer(r.colorSpace)!==Ot,(d!==r||f!==r.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),u.layers.enableAll(),t.unshift(u,u.geometry,u.material,0,0,null)):r&&r.isTexture&&(l===void 0&&(l=new K(new xa(2,2),new yi({name:`BackgroundMaterial`,uniforms:fi(bo.background.uniforms),vertexShader:bo.background.vertexShader,fragmentShader:bo.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=r,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.toneMapped=U.getTransfer(r.colorSpace)!==Ot,r.matrixAutoUpdate===!0&&r.updateMatrix(),l.material.uniforms.uvTransform.value.copy(r.matrix),(d!==r||f!==r.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null))}function _(t,n){t.getRGB(xo,hi(e)),r.buffers.color.setClear(xo.r,xo.g,xo.b,n,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,_(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,_(s,c)},render:h,addToRenderList:g,dispose:v}}function To(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n){let i=n.wireframe===!0,a=r[e.id];a===void 0&&(a={},r[e.id]=a);let o=a[t.id];o===void 0&&(o={},a[t.id]=o);let s=o[i];return s===void 0&&(s=f(c()),o[i]=s),s}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){w();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e.id]}function C(e){for(let t in r){let n=r[t];if(n[e.id]===void 0)continue;let i=n[e.id];for(let e in i)u(i[e].object),delete i[e];delete n[e.id]}}function w(){T(),o=!0,a!==i&&(a=i,l(a.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:w,resetDefaultState:T,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Eo(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}function c(e,i,a,s){if(a===0)return;let c=t.get(`WEBGL_multi_draw`);if(c===null)for(let t=0;t<e.length;t++)o(e[t],i[t],s[t]);else{c.multiDrawArraysInstancedWEBGL(r,e,0,i,0,s,0,a);let t=0;for(let e=0;e<a;e++)t+=i[e]*s[e];n.update(t,r,1)}}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function Do(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(console.warn(`THREE.WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=m>0,S=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:x,maxSamples:S}}function Oo(e){let t=this,n=null,r=0,i=!1,a=!1,o=new na,s=new H,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}function ko(e){let t=new WeakMap;function n(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function r(r){if(r&&r.isTexture){let a=r.mapping;if(a===303||a===304){if(t.has(r)){let e=t.get(r).texture;return n(e,r.mapping)}{let a=r.image;if(a&&a.height>0){let o=new ki(a.height);return o.fromEquirectangularTexture(e,r),t.set(r,o),r.addEventListener(`dispose`,i),n(o.texture,r.mapping)}return null}}}return r}function i(e){let n=e.target;n.removeEventListener(`dispose`,i);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function a(){t=new WeakMap}return{get:r,dispose:a}}var Ao=4,jo=[.125,.215,.35,.446,.526,.582],Mo=20,No=new Ja,Po=new W,Fo=null,Io=0,Lo=0,Ro=!1,zo=(1+Math.sqrt(5))/2,Bo=1/zo,Vo=[new V(-zo,Bo,0),new V(zo,Bo,0),new V(-Bo,0,zo),new V(Bo,0,zo),new V(0,zo,-Bo),new V(0,zo,Bo),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],Ho=new V,Uo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Ho}=i;Fo=this._renderer.getRenderTarget(),Io=this._renderer.getActiveCubeFace(),Lo=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fo,Io,Lo),this._renderer.xr.enabled=Ro,e.scissorTest=!1,Ko(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fo=this._renderer.getRenderTarget(),Io=this._renderer.getActiveCubeFace(),Lo=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:I,minFilter:I,generateMipmaps:!1,type:Ce,format:je,colorSpace:Et,depthBuffer:!1},r=Go(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Go(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wo(r)),this._blurMaterial=qo(r,e,t)}return r}_compileMaterial(e){let t=new K(this._lodPlanes[0],e);this._renderer.compile(t,No)}_sceneToCubeUV(e,t,n,r,i){let a=new wi(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Po),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null));let d=new G({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1}),f=new K(new q,d),p=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,p=!0):(d.color.copy(Po),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Ko(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(f,a),c.render(e,a)}f.geometry.dispose(),f.material.dispose(),c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jo());let i=r?this._cubemapMaterial:this._equirectMaterial,a=new K(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Ko(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,No)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let t=1;t<r;t++){let n=Math.sqrt(this._sigmas[t]*this._sigmas[t]-this._sigmas[t-1]*this._sigmas[t-1]),i=Vo[(r-t-1)%Vo.length];this._blur(e,t-1,t,n,i)}t.autoClear=n}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&console.error(`blur direction must be either latitudinal or longitudinal!`);let l=new K(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):Mo;m>Mo&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mo}`);let h=[],g=0;for(let e=0;e<Mo;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];Ko(t,3*v*(r>_-Ao?r-_+Ao:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,No)}};function Wo(e){let t=[],n=[],r=[],i=e,a=e-Ao+1+jo.length;for(let o=0;o<a;o++){let a=2**i;n.push(a);let s=1/a;o>e-Ao?s=jo[o-e+Ao-1]:o===0&&(s=0),r.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new Qr;h.setAttribute(`position`,new Vr(f,3)),h.setAttribute(`uv`,new Vr(p,2)),h.setAttribute(`faceIndex`,new Vr(m,1)),t.push(h),i>Ao&&i--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function Go(e,t,n){let r=new pn(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Ko(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function qo(e,t,n){let r=new Float32Array(Mo),i=new V(0,1,0);return new yi({name:`SphericalGaussianBlur`,defines:{n:Mo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Jo(){return new yi({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Yo(){return new yi({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Xo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Zo(e){let t=new WeakMap,n=null;function r(r){if(r&&r.isTexture){let o=r.mapping,s=o===303||o===304,c=o===301||o===302;if(s||c){let o=t.get(r),l=o===void 0?0:o.texture.pmremVersion;if(r.isRenderTargetTexture&&r.pmremVersion!==l)return n===null&&(n=new Uo(e)),o=s?n.fromEquirectangular(r,o):n.fromCubemap(r,o),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),o.texture;if(o!==void 0)return o.texture;{let l=r.image;return s&&l&&l.height>0||c&&l&&i(l)?(n===null&&(n=new Uo(e)),o=s?n.fromEquirectangular(r):n.fromCubemap(r),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),r.addEventListener(`dispose`,a),o.texture):null}}}return r}function i(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function a(e){let n=e.target;n.removeEventListener(`dispose`,a);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function Qo(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r;switch(n){case`WEBGL_depth_texture`:r=e.getExtension(`WEBGL_depth_texture`)||e.getExtension(`MOZ_WEBGL_depth_texture`)||e.getExtension(`WEBKIT_WEBGL_depth_texture`);break;case`EXT_texture_filter_anisotropic`:r=e.getExtension(`EXT_texture_filter_anisotropic`)||e.getExtension(`MOZ_EXT_texture_filter_anisotropic`)||e.getExtension(`WEBKIT_EXT_texture_filter_anisotropic`);break;case`WEBGL_compressed_texture_s3tc`:r=e.getExtension(`WEBGL_compressed_texture_s3tc`)||e.getExtension(`MOZ_WEBGL_compressed_texture_s3tc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_s3tc`);break;case`WEBGL_compressed_texture_pvrtc`:r=e.getExtension(`WEBGL_compressed_texture_pvrtc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_pvrtc`);break;default:r=e.getExtension(n)}return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Yt(`THREE.WebGLRenderer: `+e+` extension not supported.`),t}}}function $o(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else if(i!==void 0){let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}else return;let s=new(Gt(n)?Ur:Hr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function es(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}function d(e,i,s,c){if(s===0)return;let u=t.get(`WEBGL_multi_draw`);if(u===null)for(let t=0;t<e.length;t++)l(e[t]/o,i[t],c[t]);else{u.multiDrawElementsInstancedWEBGL(r,i,0,a,e,0,c,0,s);let t=0;for(let e=0;e<s;e++)t+=i[e]*c[e];n.update(t,r,1)}}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function ts(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:console.error(`THREE.WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function ns(e,t,n){let r=new WeakMap,i=new dn;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new mn(h,p,m,u);g.type=Se,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new B(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function rs(e,t,n,r){let i=new WeakMap;function a(a){let o=r.render.frame,c=a.geometry,l=t.get(a,c);if(i.get(l)!==o&&(t.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener(`dispose`,s)===!1&&a.addEventListener(`dispose`,s),i.get(a)!==o&&(n.update(a.instanceMatrix,e.ARRAY_BUFFER),a.instanceColor!==null&&n.update(a.instanceColor,e.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let e=a.skeleton;i.get(e)!==o&&(e.update(),i.set(e,o))}return l}function o(){i=new WeakMap}function s(e){let t=e.target;t.removeEventListener(`dispose`,s),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:a,dispose:o}}var is=new un,as=new ha(1,1),os=new mn,ss=new hn,cs=new Oi,ls=[],us=[],ds=new Float32Array(16),fs=new Float32Array(9),ps=new Float32Array(4);function ms(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=ls[i];if(a===void 0&&(a=new Float32Array(i),ls[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function hs(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function gs(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function _s(e,t){let n=us[t];n===void 0&&(n=new Int32Array(t),us[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function vs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function ys(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(hs(n,t))return;e.uniform2fv(this.addr,t),gs(n,t)}}function bs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(hs(n,t))return;e.uniform3fv(this.addr,t),gs(n,t)}}function xs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(hs(n,t))return;e.uniform4fv(this.addr,t),gs(n,t)}}function Ss(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(hs(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),gs(n,t)}else{if(hs(n,r))return;ps.set(r),e.uniformMatrix2fv(this.addr,!1,ps),gs(n,r)}}function Cs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(hs(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),gs(n,t)}else{if(hs(n,r))return;fs.set(r),e.uniformMatrix3fv(this.addr,!1,fs),gs(n,r)}}function ws(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(hs(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),gs(n,t)}else{if(hs(n,r))return;ds.set(r),e.uniformMatrix4fv(this.addr,!1,ds),gs(n,r)}}function Ts(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Es(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(hs(n,t))return;e.uniform2iv(this.addr,t),gs(n,t)}}function Ds(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(hs(n,t))return;e.uniform3iv(this.addr,t),gs(n,t)}}function Os(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(hs(n,t))return;e.uniform4iv(this.addr,t),gs(n,t)}}function ks(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function As(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(hs(n,t))return;e.uniform2uiv(this.addr,t),gs(n,t)}}function js(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(hs(n,t))return;e.uniform3uiv(this.addr,t),gs(n,t)}}function Ms(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(hs(n,t))return;e.uniform4uiv(this.addr,t),gs(n,t)}}function Ns(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(as.compareFunction=515,a=as):a=is,n.setTexture2D(t||a,i)}function Ps(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||ss,i)}function Fs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||cs,i)}function Is(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||os,i)}function Ls(e){switch(e){case 5126:return vs;case 35664:return ys;case 35665:return bs;case 35666:return xs;case 35674:return Ss;case 35675:return Cs;case 35676:return ws;case 5124:case 35670:return Ts;case 35667:case 35671:return Es;case 35668:case 35672:return Ds;case 35669:case 35673:return Os;case 5125:return ks;case 36294:return As;case 36295:return js;case 36296:return Ms;case 35678:case 36198:case 36298:case 36306:case 35682:return Ns;case 35679:case 36299:case 36307:return Ps;case 35680:case 36300:case 36308:case 36293:return Fs;case 36289:case 36303:case 36311:case 36292:return Is}}function Rs(e,t){e.uniform1fv(this.addr,t)}function zs(e,t){let n=ms(t,this.size,2);e.uniform2fv(this.addr,n)}function Bs(e,t){let n=ms(t,this.size,3);e.uniform3fv(this.addr,n)}function Vs(e,t){let n=ms(t,this.size,4);e.uniform4fv(this.addr,n)}function Hs(e,t){let n=ms(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Us(e,t){let n=ms(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Ws(e,t){let n=ms(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Gs(e,t){e.uniform1iv(this.addr,t)}function Ks(e,t){e.uniform2iv(this.addr,t)}function qs(e,t){e.uniform3iv(this.addr,t)}function Js(e,t){e.uniform4iv(this.addr,t)}function Ys(e,t){e.uniform1uiv(this.addr,t)}function Xs(e,t){e.uniform2uiv(this.addr,t)}function Zs(e,t){e.uniform3uiv(this.addr,t)}function Qs(e,t){e.uniform4uiv(this.addr,t)}function $s(e,t,n){let r=this.cache,i=t.length,a=_s(n,i);hs(r,a)||(e.uniform1iv(this.addr,a),gs(r,a));for(let e=0;e!==i;++e)n.setTexture2D(t[e]||is,a[e])}function ec(e,t,n){let r=this.cache,i=t.length,a=_s(n,i);hs(r,a)||(e.uniform1iv(this.addr,a),gs(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||ss,a[e])}function tc(e,t,n){let r=this.cache,i=t.length,a=_s(n,i);hs(r,a)||(e.uniform1iv(this.addr,a),gs(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||cs,a[e])}function nc(e,t,n){let r=this.cache,i=t.length,a=_s(n,i);hs(r,a)||(e.uniform1iv(this.addr,a),gs(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||os,a[e])}function rc(e){switch(e){case 5126:return Rs;case 35664:return zs;case 35665:return Bs;case 35666:return Vs;case 35674:return Hs;case 35675:return Us;case 35676:return Ws;case 5124:case 35670:return Gs;case 35667:case 35671:return Ks;case 35668:case 35672:return qs;case 35669:case 35673:return Js;case 5125:return Ys;case 36294:return Xs;case 36295:return Zs;case 36296:return Qs;case 35678:case 36198:case 36298:case 36306:case 35682:return $s;case 35679:case 36299:case 36307:return ec;case 35680:case 36300:case 36308:case 36293:return tc;case 36289:case 36303:case 36311:case 36292:return nc}}var ic=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ls(t.type)}},ac=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rc(t.type)}},oc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},sc=/(\w+)(\])?(\[|\.)?/g;function cc(e,t){e.seq.push(t),e.map[t.id]=t}function lc(e,t,n){let r=e.name,i=r.length;for(sc.lastIndex=0;;){let a=sc.exec(r),o=sc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){cc(n,l===void 0?new ic(s,e,t):new ac(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new oc(s),cc(n,e)),n=e}}}var uc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);lc(n,e.getUniformLocation(t,n.name),this)}}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function dc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var fc=37297,pc=0;function mc(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var hc=new H;function gc(e){U._getMatrix(hc,U.workingColorSpace,e);let t=`mat3( ${hc.elements.map(e=>e.toFixed(4))} )`;switch(U.getTransfer(e)){case Dt:return[t,`LinearTransferOETF`];case Ot:return[t,`sRGBTransferOETF`];default:return console.warn(`THREE.WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function _c(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+mc(e.getShaderSource(t),r)}return i}function vc(e,t){let n=gc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}function yc(e,t){let n;switch(t){case 1:n=`Linear`;break;case 2:n=`Reinhard`;break;case 3:n=`Cineon`;break;case 4:n=`ACESFilmic`;break;case 6:n=`AgX`;break;case 7:n=`Neutral`;break;case 5:n=`Custom`;break;default:console.warn(`THREE.WebGLProgram: Unsupported toneMapping:`,t),n=`Linear`}return`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var bc=new V;function xc(){return U.getLuminanceCoefficients(bc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${bc.x.toFixed(4)}, ${bc.y.toFixed(4)}, ${bc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Sc(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Tc).join(`
`)}function Cc(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function wc(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Tc(e){return e!==``}function Ec(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Dc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Oc=/^[ \t]*#include +<([\w\d./]+)>/gm;function kc(e){return e.replace(Oc,jc)}var Ac=new Map;function jc(e,t){let n=Q[t];if(n===void 0){let e=Ac.get(t);if(e!==void 0)n=Q[e],console.warn(`THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return kc(n)}var Mc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nc(e){return e.replace(Mc,Pc)}function Pc(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Fc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}function Ic(e){let t=`SHADOWMAP_TYPE_BASIC`;return e.shadowMapType===1?t=`SHADOWMAP_TYPE_PCF`:e.shadowMapType===2?t=`SHADOWMAP_TYPE_PCF_SOFT`:e.shadowMapType===3&&(t=`SHADOWMAP_TYPE_VSM`),t}function Lc(e){let t=`ENVMAP_TYPE_CUBE`;if(e.envMap)switch(e.envMapMode){case 301:case 302:t=`ENVMAP_TYPE_CUBE`;break;case 306:t=`ENVMAP_TYPE_CUBE_UV`}return t}function Rc(e){let t=`ENVMAP_MODE_REFLECTION`;if(e.envMap)switch(e.envMapMode){case 302:t=`ENVMAP_MODE_REFRACTION`}return t}function zc(e){let t=`ENVMAP_BLENDING_NONE`;if(e.envMap)switch(e.combine){case 0:t=`ENVMAP_BLENDING_MULTIPLY`;break;case 1:t=`ENVMAP_BLENDING_MIX`;break;case 2:t=`ENVMAP_BLENDING_ADD`}return t}function Bc(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Vc(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Ic(n),l=Lc(n),u=Rc(n),d=zc(n),f=Bc(n),p=Sc(n),m=Cc(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Tc).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Tc).join(`
`),_.length>0&&(_+=`
`)):(g=[Fc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Tc).join(`
`),_=[Fc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor||n.batchingColor?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Q.tonemapping_pars_fragment,n.toneMapping===0?``:yc(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Q.colorspace_pars_fragment,vc(`linearToOutputTexel`,n.outputColorSpace),xc(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Tc).join(`
`)),o=kc(o),o=Ec(o,n),o=Dc(o,n),s=kc(s),s=Ec(s,n),s=Dc(s,n),o=Nc(o),s=Nc(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=dc(i,i.VERTEX_SHADER,y),S=dc(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=_c(i,x,`vertex`),n=_c(i,S,`fragment`);console.error(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):console.warn(`THREE.WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new uc(i,h),T=wc(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,fc)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=pc++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Hc=0,Uc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Wc(e),t.set(e,n)),n}},Wc=class{constructor(e){this.id=Hc++,this.code=e,this.usedTimes=0}};function Gc(e,t,n,r,i,a,o){let s=new er,c=new Uc,l=new Set,u=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distanceRGBA`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return l.add(e),e===0?`uv`:`uv${e}`}function g(a,s,u,g,_){let v=g.fog,y=_.geometry,b=a.isMeshStandardMaterial?g.environment:null,x=(a.isMeshStandardMaterial?n:t).get(a.envMap||b),S=x&&x.mapping===306?x.image.height:null,C=m[a.type];a.precision!==null&&(p=i.getMaxPrecision(a.precision),p!==a.precision&&console.warn(`THREE.WebGLProgram.getParameters:`,a.precision,`not supported, using`,p,`instead.`));let w=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,T=w===void 0?0:w.length,E=0;y.morphAttributes.position!==void 0&&(E=1),y.morphAttributes.normal!==void 0&&(E=2),y.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=bo[C];D=e.vertexShader,O=e.fragmentShader}else D=a.vertexShader,O=a.fragmentShader,c.update(a),k=c.getVertexShaderID(a),A=c.getFragmentShaderID(a);let ee=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),M=_.isInstancedMesh===!0,te=_.isBatchedMesh===!0,N=!!a.map,ne=!!a.matcap,re=!!x,ie=!!a.aoMap,ae=!!a.lightMap,P=!!a.bumpMap,oe=!!a.normalMap,se=!!a.displacementMap,ce=!!a.emissiveMap,le=!!a.metalnessMap,ue=!!a.roughnessMap,de=a.anisotropy>0,fe=a.clearcoat>0,F=a.dispersion>0,pe=a.iridescence>0,me=a.sheen>0,he=a.transmission>0,I=de&&!!a.anisotropyMap,ge=fe&&!!a.clearcoatMap,_e=fe&&!!a.clearcoatNormalMap,ve=fe&&!!a.clearcoatRoughnessMap,L=pe&&!!a.iridescenceMap,R=pe&&!!a.iridescenceThicknessMap,ye=me&&!!a.sheenColorMap,be=me&&!!a.sheenRoughnessMap,xe=!!a.specularMap,Se=!!a.specularColorMap,Ce=!!a.specularIntensityMap,we=he&&!!a.transmissionMap,Te=he&&!!a.thicknessMap,Ee=!!a.gradientMap,De=!!a.alphaMap,Oe=a.alphaTest>0,ke=!!a.alphaHash,Ae=!!a.extensions,je=0;a.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(je=e.toneMapping);let Me={shaderID:C,shaderType:a.type,shaderName:a.name,vertexShader:D,fragmentShader:O,defines:a.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:a.isRawShaderMaterial===!0,glslVersion:a.glslVersion,precision:p,batching:te,batchingColor:te&&_._colorsTexture!==null,instancing:M,instancingColor:M&&_.instanceColor!==null,instancingMorph:M&&_.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ee===null?e.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Et,alphaToCoverage:!!a.alphaToCoverage,map:N,matcap:ne,envMap:re,envMapMode:re&&x.mapping,envMapCubeUVHeight:S,aoMap:ie,lightMap:ae,bumpMap:P,normalMap:oe,displacementMap:f&&se,emissiveMap:ce,normalMapObjectSpace:oe&&a.normalMapType===1,normalMapTangentSpace:oe&&a.normalMapType===0,metalnessMap:le,roughnessMap:ue,anisotropy:de,anisotropyMap:I,clearcoat:fe,clearcoatMap:ge,clearcoatNormalMap:_e,clearcoatRoughnessMap:ve,dispersion:F,iridescence:pe,iridescenceMap:L,iridescenceThicknessMap:R,sheen:me,sheenColorMap:ye,sheenRoughnessMap:be,specularMap:xe,specularColorMap:Se,specularIntensityMap:Ce,transmission:he,transmissionMap:we,thicknessMap:Te,gradientMap:Ee,opaque:a.transparent===!1&&a.blending===1&&a.alphaToCoverage===!1,alphaMap:De,alphaTest:Oe,alphaHash:ke,combine:a.combine,mapUv:N&&h(a.map.channel),aoMapUv:ie&&h(a.aoMap.channel),lightMapUv:ae&&h(a.lightMap.channel),bumpMapUv:P&&h(a.bumpMap.channel),normalMapUv:oe&&h(a.normalMap.channel),displacementMapUv:se&&h(a.displacementMap.channel),emissiveMapUv:ce&&h(a.emissiveMap.channel),metalnessMapUv:le&&h(a.metalnessMap.channel),roughnessMapUv:ue&&h(a.roughnessMap.channel),anisotropyMapUv:I&&h(a.anisotropyMap.channel),clearcoatMapUv:ge&&h(a.clearcoatMap.channel),clearcoatNormalMapUv:_e&&h(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&h(a.clearcoatRoughnessMap.channel),iridescenceMapUv:L&&h(a.iridescenceMap.channel),iridescenceThicknessMapUv:R&&h(a.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&h(a.sheenColorMap.channel),sheenRoughnessMapUv:be&&h(a.sheenRoughnessMap.channel),specularMapUv:xe&&h(a.specularMap.channel),specularColorMapUv:Se&&h(a.specularColorMap.channel),specularIntensityMapUv:Ce&&h(a.specularIntensityMap.channel),transmissionMapUv:we&&h(a.transmissionMap.channel),thicknessMapUv:Te&&h(a.thicknessMap.channel),alphaMapUv:De&&h(a.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(oe||de),vertexColors:a.vertexColors,vertexAlphas:a.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,pointsUvs:_.isPoints===!0&&!!y.attributes.uv&&(N||De),fog:!!v,useFog:a.fog===!0,fogExp2:!!v&&v.isFogExp2,flatShading:a.flatShading===!0&&a.wireframe===!1,sizeAttenuation:a.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:_.isSkinnedMesh===!0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&u.length>0,shadowMapType:e.shadowMap.type,toneMapping:je,decodeVideoTexture:N&&a.map.isVideoTexture===!0&&U.getTransfer(a.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ce&&a.emissiveMap.isVideoTexture===!0&&U.getTransfer(a.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===2,flipSided:a.side===1,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionClipCullDistance:Ae&&a.extensions.clipCullDistance===!0&&r.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ae&&a.extensions.multiDraw===!0||te)&&r.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:r.has(`KHR_parallel_shader_compile`),customProgramCacheKey:a.customProgramCacheKey()};return Me.vertexUv1s=l.has(1),Me.vertexUv2s=l.has(2),Me.vertexUv3s=l.has(3),l.clear(),Me}function _(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(v(n,t),y(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function v(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function y(e,t){s.disableAll(),t.supportsVertexTextures&&s.enable(0),t.instancing&&s.enable(1),t.instancingColor&&s.enable(2),t.instancingMorph&&s.enable(3),t.matcap&&s.enable(4),t.envMap&&s.enable(5),t.normalMapObjectSpace&&s.enable(6),t.normalMapTangentSpace&&s.enable(7),t.clearcoat&&s.enable(8),t.iridescence&&s.enable(9),t.alphaTest&&s.enable(10),t.vertexColors&&s.enable(11),t.vertexAlphas&&s.enable(12),t.vertexUv1s&&s.enable(13),t.vertexUv2s&&s.enable(14),t.vertexUv3s&&s.enable(15),t.vertexTangents&&s.enable(16),t.anisotropy&&s.enable(17),t.alphaHash&&s.enable(18),t.batching&&s.enable(19),t.dispersion&&s.enable(20),t.batchingColor&&s.enable(21),t.gradientMap&&s.enable(22),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.reversedDepthBuffer&&s.enable(4),t.skinning&&s.enable(5),t.morphTargets&&s.enable(6),t.morphNormals&&s.enable(7),t.morphColors&&s.enable(8),t.premultipliedAlpha&&s.enable(9),t.shadowMapEnabled&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),t.decodeVideoTextureEmissive&&s.enable(20),t.alphaToCoverage&&s.enable(21),e.push(s.mask)}function b(e){let t=m[e.type],n;if(t){let e=bo[t];n=gi.clone(e.uniforms)}else n=e.uniforms;return n}function x(t,n){let r;for(let e=0,t=u.length;e<t;e++){let t=u[e];if(t.cacheKey===n){r=t,++r.usedTimes;break}}return r===void 0&&(r=new Vc(e,n,t,a),u.push(r)),r}function S(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),e.destroy()}}function C(e){c.remove(e)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:b,acquireProgram:x,releaseProgram:S,releaseShaderCache:C,programs:u,dispose:w}}function Kc(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function qc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.z===t.z?e.id-t.id:e.z-t.z:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Jc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Yc(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(n,r,i,a,o,s){let c=e[t];return c===void 0?(c={id:n.id,object:n,geometry:r,material:i,groupOrder:a,renderOrder:n.renderOrder,z:o,group:s},e[t]=c):(c.id=n.id,c.object=n,c.geometry=r,c.material=i,c.groupOrder=a,c.renderOrder=n.renderOrder,c.z=o,c.group=s),t++,c}function s(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function c(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function l(e,t){n.length>1&&n.sort(e||qc),r.length>1&&r.sort(t||Jc),i.length>1&&i.sort(t||Jc)}function u(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:s,unshift:c,finish:u,sort:l}}function Xc(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Yc,e.set(t,[i])):n>=r.length?(i=new Yc,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Zc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new V,color:new W};break;case`SpotLight`:n={position:new V,direction:new V,color:new W,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new V,color:new W,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new V,skyColor:new W,groundColor:new W};break;case`RectAreaLight`:n={color:new W,position:new V,halfWidth:new V,halfHeight:new V}}return e[t.id]=n,n}}}function Qc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var $c=0;function el(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function tl(e){let t=new Zc,n=Qc(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new V);let i=new V,a=new Un,o=new Un;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(el);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=$.LTC_FLOAT_1,r.rectAreaLTC2=$.LTC_FLOAT_2):(r.rectAreaLTC1=$.LTC_HALF_1,r.rectAreaLTC2=$.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=$c++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function nl(e){let t=new tl(e),n=[],r=[];function i(e){l.camera=e,n.length=0,r.length=0}function a(e){n.push(e)}function o(e){r.push(e)}function s(){t.setup(n)}function c(e){t.setupView(n,e)}let l={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:s,setupLightsView:c,pushLight:a,pushShadow:o}}function rl(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new nl(e),t.set(n,[a])):r>=i.length?(a=new nl(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var il=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,al=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ol(e,t,n){let r=new oa,i=new B,a=new B,o=new dn,s=new Ea({depthPacking:wt}),c=new Da,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new B},radius:{value:4}},vertexShader:il,fragmentShader:al}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Qr;m.setAttribute(`position`,new Vr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new K(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==3&&this.type===3,m=_===3&&this.type!==3;for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){console.warn(`THREE.WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let h=d.getFrameExtents();if(i.multiply(h),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/h.x),i.x=a.x*h.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/h.y),i.y=a.y*h.y,d.mapSize.y=a.y)),d.map===null||p===!0||m===!0){let e=this.type===3?{}:{minFilter:pe,magFilter:pe};d.map!==null&&d.map.dispose(),d.map=new pn(i.x,i.y,e),d.map.texture.name=l.name+`.shadowMap`,d.camera.updateProjectionMatrix()}e.setRenderTarget(d.map),e.clear();let g=d.getViewportCount();for(let e=0;e<g;e++){let t=d.getViewport(e);o.set(a.x*t.x,a.y*t.y,a.x*t.z,a.y*t.w),f.viewport(o),d.updateMatrices(l,e),r=d.getFrustum(),b(n,s,d.camera,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new pn(i.x,i.y)),f.uniforms.shadow_pass.value=n.map.texture,f.uniforms.resolution.value=n.mapSize,f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}var sl={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function cl(e,t){function n(){let t=!1,n=new dn,r=null,i=new dn(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?ce(e.DEPTH_TEST):le(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=sl[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(r&&(t=1-t),e.clearDepth(t),o=t)},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?ce(e.STENCIL_TEST):le(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new W(0,0,0),w=0,T=!1,E=null,D=null,O=null,k=null,A=null,ee=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,M=0,te=e.getParameter(e.VERSION);te.indexOf(`WebGL`)===-1?te.indexOf(`OpenGL ES`)!==-1&&(M=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),j=M>=2):(M=parseFloat(/^WebGL (\d)/.exec(te)[1]),j=M>=1);let N=null,ne={},re=e.getParameter(e.SCISSOR_BOX),ie=e.getParameter(e.VIEWPORT),ae=new dn().fromArray(re),P=new dn().fromArray(ie);function oe(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let se={};se[e.TEXTURE_2D]=oe(e.TEXTURE_2D,e.TEXTURE_2D,1),se[e.TEXTURE_CUBE_MAP]=oe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[e.TEXTURE_2D_ARRAY]=oe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),se[e.TEXTURE_3D]=oe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ce(e.DEPTH_TEST),o.setFunc(3),I(!1),ge(1),ce(e.CULL_FACE),me(0);function ce(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function le(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ue(t,n){return d[t]!==n&&(e.bindFramebuffer(t,n),d[t]=n,t===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=n),!0)}function de(t,n){let r=p,i=!1;if(t){r=f.get(n),r===void 0&&(r=[],f.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function fe(t){return m!==t&&(e.useProgram(t),m=t,!0)}let F={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};F[103]=e.MIN,F[104]=e.MAX;let pe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function me(t,n,r,i,a,o,s,c,l,u){if(t===0){h===!0&&(le(e.BLEND),h=!1);return}if(h===!1&&(ce(e.BLEND),h=!0),t!==5){if(t!==g||u!==T){if((_!==100||b!==100)&&(e.blendEquation(e.FUNC_ADD),_=100,b=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:console.error(`THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:console.error(`THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}v=null,y=null,x=null,S=null,C.set(0,0,0),w=0,g=t,T=u}return}a=a||n,o=o||r,s=s||i,(n!==_||a!==b)&&(e.blendEquationSeparate(F[n],F[a]),_=n,b=a),(r!==v||i!==y||o!==x||s!==S)&&(e.blendFuncSeparate(pe[r],pe[i],pe[o],pe[s]),v=r,y=i,x=o,S=s),(c.equals(C)===!1||l!==w)&&(e.blendColor(c.r,c.g,c.b,l),C.copy(c),w=l),g=t,T=!1}function he(t,n){t.side===2?le(e.CULL_FACE):ce(e.CULL_FACE);let r=t.side===1;n&&(r=!r),I(r),t.blending===1&&t.transparent===!1?me(0):me(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ve(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?ce(e.SAMPLE_ALPHA_TO_COVERAGE):le(e.SAMPLE_ALPHA_TO_COVERAGE)}function I(t){E!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),E=t)}function ge(t){t===0?le(e.CULL_FACE):(ce(e.CULL_FACE),t!==D&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),D=t}function _e(t){t!==O&&(j&&e.lineWidth(t),O=t)}function ve(t,n,r){t?(ce(e.POLYGON_OFFSET_FILL),(k!==n||A!==r)&&(e.polygonOffset(n,r),k=n,A=r)):le(e.POLYGON_OFFSET_FILL)}function L(t){t?ce(e.SCISSOR_TEST):le(e.SCISSOR_TEST)}function R(t){t===void 0&&(t=e.TEXTURE0+ee-1),N!==t&&(e.activeTexture(t),N=t)}function ye(t,n,r){r===void 0&&(r=N===null?e.TEXTURE0+ee-1:N);let i=ne[r];i===void 0&&(i={type:void 0,texture:void 0},ne[r]=i),(i.type!==t||i.texture!==n)&&(N!==r&&(e.activeTexture(r),N=r),e.bindTexture(t,n||se[t]),i.type=t,i.texture=n)}function be(){let t=ne[N];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function xe(){try{e.compressedTexImage2D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Se(){try{e.compressedTexImage3D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ce(){try{e.texSubImage2D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function we(){try{e.texSubImage3D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Te(){try{e.compressedTexSubImage2D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ee(){try{e.compressedTexSubImage3D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function De(){try{e.texStorage2D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Oe(){try{e.texStorage3D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ke(){try{e.texImage2D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ae(){try{e.texImage3D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function je(t){ae.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ae.copy(t))}function Me(t){P.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),P.copy(t))}function Ne(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Pe(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Fe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},N=null,ne={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new W(0,0,0),w=0,T=!1,E=null,D=null,O=null,k=null,A=null,ae.set(0,0,e.canvas.width,e.canvas.height),P.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:ce,disable:le,bindFramebuffer:ue,drawBuffers:de,useProgram:fe,setBlending:me,setMaterial:he,setFlipSided:I,setCullFace:ge,setLineWidth:_e,setPolygonOffset:ve,setScissorTest:L,activeTexture:R,bindTexture:ye,unbindTexture:be,compressedTexImage2D:xe,compressedTexImage3D:Se,texImage2D:ke,texImage3D:Ae,updateUBOMapping:Ne,uniformBlockBinding:Pe,texStorage2D:De,texStorage3D:Oe,texSubImage2D:Ce,texSubImage3D:we,compressedTexSubImage2D:Te,compressedTexSubImage3D:Ee,scissor:je,viewport:Me,reset:Fe}}function ll(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new B,u=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function m(e,t){return p?new OffscreenCanvas(e,t):Kt(`canvas`)}function h(e,t,n){let r=1,i=Oe(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);d===void 0&&(d=m(n,a));let o=t?m(n,a):d;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),console.warn(`THREE.WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&console.warn(`THREE.WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function g(e){return e.generateMipmaps}function _(t){e.generateMipmap(t)}function v(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function y(n,r,i,a,o=!1){if(n!==null){if(e[n]!==void 0)return e[n];console.warn(`THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let s=r;if(r===e.RED&&(i===e.FLOAT&&(s=e.R32F),i===e.HALF_FLOAT&&(s=e.R16F),i===e.UNSIGNED_BYTE&&(s=e.R8)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.R8UI),i===e.UNSIGNED_SHORT&&(s=e.R16UI),i===e.UNSIGNED_INT&&(s=e.R32UI),i===e.BYTE&&(s=e.R8I),i===e.SHORT&&(s=e.R16I),i===e.INT&&(s=e.R32I)),r===e.RG&&(i===e.FLOAT&&(s=e.RG32F),i===e.HALF_FLOAT&&(s=e.RG16F),i===e.UNSIGNED_BYTE&&(s=e.RG8)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RG8UI),i===e.UNSIGNED_SHORT&&(s=e.RG16UI),i===e.UNSIGNED_INT&&(s=e.RG32UI),i===e.BYTE&&(s=e.RG8I),i===e.SHORT&&(s=e.RG16I),i===e.INT&&(s=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RGB8UI),i===e.UNSIGNED_SHORT&&(s=e.RGB16UI),i===e.UNSIGNED_INT&&(s=e.RGB32UI),i===e.BYTE&&(s=e.RGB8I),i===e.SHORT&&(s=e.RGB16I),i===e.INT&&(s=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(s=e.RGBA16UI),i===e.UNSIGNED_INT&&(s=e.RGBA32UI),i===e.BYTE&&(s=e.RGBA8I),i===e.SHORT&&(s=e.RGBA16I),i===e.INT&&(s=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_INT_5_9_9_9_REV&&(s=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(s=e.R11F_G11F_B10F)),r===e.RGBA){let t=o?Dt:U.getTransfer(a);i===e.FLOAT&&(s=e.RGBA32F),i===e.HALF_FLOAT&&(s=e.RGBA16F),i===e.UNSIGNED_BYTE&&(s=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT_4_4_4_4&&(s=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(s=e.RGB5_A1)}return(s===e.R16F||s===e.R32F||s===e.RG16F||s===e.RG32F||s===e.RGBA16F||s===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),s}function b(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,console.warn(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function x(e,t){return g(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function S(e){let t=e.target;t.removeEventListener(`dispose`,S),w(t),t.isVideoTexture&&u.delete(t)}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),E(t)}function w(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=f.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&T(e),Object.keys(i).length===0&&f.delete(n)}r.remove(e)}function T(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=f.get(i);delete a[n.__cacheKey],o.memory.textures--}function E(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let D=0;function O(){D=0}function k(){let e=D;return e>=i.maxTextures&&console.warn(`THREE.WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+i.maxTextures),D+=1,e}function A(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ee(t,i){let a=r.get(t);if(t.isVideoTexture&&Ee(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)console.warn(`THREE.WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)console.warn(`THREE.WebGLRenderer: Texture marked for update but image is incomplete`);else{se(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function j(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){se(a,t,i);return}n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function M(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){se(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function te(t,i){let a=r.get(t);if(t.version>0&&a.__version!==t.version){ce(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let N={[de]:e.REPEAT,[fe]:e.CLAMP_TO_EDGE,[F]:e.MIRRORED_REPEAT},ne={[pe]:e.NEAREST,[me]:e.NEAREST_MIPMAP_NEAREST,[he]:e.NEAREST_MIPMAP_LINEAR,[I]:e.LINEAR,[ge]:e.LINEAR_MIPMAP_NEAREST,[_e]:e.LINEAR_MIPMAP_LINEAR},re={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ie(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&console.warn(`THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,N[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,N[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,N[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ne[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ne[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,re[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function ae(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,S));let i=n.source,a=f.get(i);a===void 0&&(a={},f.set(i,a));let s=A(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&T(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function P(e,t,n){return Math.floor(Math.floor(e/n)/t)}function oe(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=P(n.start,r.width,4),c=P(t.start,r.width,4);n.start<=i+1&&a===c&&P(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=e.getParameter(e.UNPACK_ROW_LENGTH),l=e.getParameter(e.UNPACK_SKIP_PIXELS),u=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;e.pixelStorei(e.UNPACK_SKIP_PIXELS,u),e.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,c),e.pixelStorei(e.UNPACK_SKIP_PIXELS,l),e.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function se(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=ae(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){n.activeTexture(e.TEXTURE0+s);let t=U.getPrimaries(U.workingColorSpace),r=o.colorSpace===``?null:U.getPrimaries(o.colorSpace),f=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,f);let p=h(o.image,!1,i.maxTextureSize);p=De(o,p);let m=a.convert(o.format,o.colorSpace),v=a.convert(o.type),S=y(o.internalFormat,m,v,o.colorSpace,o.isVideoTexture);ie(c,o);let C,w=o.mipmaps,T=o.isVideoTexture!==!0,E=d.__version===void 0||l===!0,D=u.dataReady,O=x(o,p);if(o.isDepthTexture)S=b(o.format===Ne,o.type),E&&(T?n.texStorage2D(e.TEXTURE_2D,1,S,p.width,p.height):n.texImage2D(e.TEXTURE_2D,0,S,p.width,p.height,0,m,v,null));else if(o.isDataTexture){if(w.length>0){T&&E&&n.texStorage2D(e.TEXTURE_2D,O,S,w[0].width,w[0].height);for(let t=0,r=w.length;t<r;t++)C=w[t],T?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,C.width,C.height,m,v,C.data):n.texImage2D(e.TEXTURE_2D,t,S,C.width,C.height,0,m,v,C.data);o.generateMipmaps=!1}else T?(E&&n.texStorage2D(e.TEXTURE_2D,O,S,p.width,p.height),D&&oe(o,p,m,v)):n.texImage2D(e.TEXTURE_2D,0,S,p.width,p.height,0,m,v,p.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){T&&E&&n.texStorage3D(e.TEXTURE_2D_ARRAY,O,S,w[0].width,w[0].height,p.depth);for(let t=0,r=w.length;t<r;t++)if(C=w[t],o.format!==1023){if(m!==null){if(T){if(D){if(o.layerUpdates.size>0){let r=go(C.width,C.height,o.format,o.type);for(let i of o.layerUpdates){let a=C.data.subarray(i*r/C.data.BYTES_PER_ELEMENT,(i+1)*r/C.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,i,C.width,C.height,1,m,a)}o.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,C.width,C.height,p.depth,m,C.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,t,S,C.width,C.height,p.depth,0,C.data,0,0)}else console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else T?D&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,C.width,C.height,p.depth,m,v,C.data):n.texImage3D(e.TEXTURE_2D_ARRAY,t,S,C.width,C.height,p.depth,0,m,v,C.data)}else{T&&E&&n.texStorage2D(e.TEXTURE_2D,O,S,w[0].width,w[0].height);for(let t=0,r=w.length;t<r;t++)C=w[t],o.format===1023?T?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,C.width,C.height,m,v,C.data):n.texImage2D(e.TEXTURE_2D,t,S,C.width,C.height,0,m,v,C.data):m===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):T?D&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,C.width,C.height,m,C.data):n.compressedTexImage2D(e.TEXTURE_2D,t,S,C.width,C.height,0,C.data)}}else if(o.isDataArrayTexture){if(T){if(E&&n.texStorage3D(e.TEXTURE_2D_ARRAY,O,S,p.width,p.height,p.depth),D){if(o.layerUpdates.size>0){let t=go(p.width,p.height,o.format,o.type);for(let r of o.layerUpdates){let i=p.data.subarray(r*t/p.data.BYTES_PER_ELEMENT,(r+1)*t/p.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,r,p.width,p.height,1,m,v,i)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,p.width,p.height,p.depth,m,v,p.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,S,p.width,p.height,p.depth,0,m,v,p.data)}else if(o.isData3DTexture)T?(E&&n.texStorage3D(e.TEXTURE_3D,O,S,p.width,p.height,p.depth),D&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,p.width,p.height,p.depth,m,v,p.data)):n.texImage3D(e.TEXTURE_3D,0,S,p.width,p.height,p.depth,0,m,v,p.data);else if(o.isFramebufferTexture){if(E){if(T)n.texStorage2D(e.TEXTURE_2D,O,S,p.width,p.height);else{let t=p.width,r=p.height;for(let i=0;i<O;i++)n.texImage2D(e.TEXTURE_2D,i,S,t,r,0,m,v,null),t>>=1,r>>=1}}}else if(w.length>0){if(T&&E){let t=Oe(w[0]);n.texStorage2D(e.TEXTURE_2D,O,S,t.width,t.height)}for(let t=0,r=w.length;t<r;t++)C=w[t],T?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m,v,C):n.texImage2D(e.TEXTURE_2D,t,S,m,v,C);o.generateMipmaps=!1}else if(T){if(E){let t=Oe(p);n.texStorage2D(e.TEXTURE_2D,O,S,t.width,t.height)}D&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,m,v,p)}else n.texImage2D(e.TEXTURE_2D,0,S,m,v,p);g(o)&&_(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ce(t,o,s){if(o.image.length!==6)return;let c=ae(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=U.getPrimaries(U.workingColorSpace),r=o.colorSpace===``?null:U.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=h(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=De(o,m[e]);let v=m[0],b=a.convert(o.format,o.colorSpace),S=a.convert(o.type),C=y(o.internalFormat,b,S,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=x(o,v);ie(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,v.width,v.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,b,S,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,b,S,i.data):b===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,b,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=Oe(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,b,S,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,b,S,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,b,S,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,b,S,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,b,S,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,b,S,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,b,S,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,b,S,i.image[t])}}}g(o)&&_(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function le(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=y(o.internalFormat,d,f,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Te(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,we(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ue(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=b(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,l=we(n);Te(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,l,o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,l,o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=y(o.internalFormat,c,l,o.colorSpace),d=we(n);r&&Te(n)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,d,u,n.width,n.height):Te(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,d,u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ve(t,i){if(i&&i.isWebGLCubeRenderTarget)throw Error(`Depth Texture with cube render targets is not supported`);if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);let a=r.get(i.depthTexture);a.__renderTarget=i,(!a.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),ee(i.depthTexture,0);let o=a.__webglTexture,c=we(i);if(i.depthTexture.format===1026)Te(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,o,0,c):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,o,0);else if(i.depthTexture.format===1027)Te(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,o,0,c):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,o,0);else throw Error(`Unknown depthTexture format`)}function L(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)throw Error(`target.depthTexture not supported in Cube render targets`);let e=t.texture.mipmaps;e&&e.length>0?ve(i.__webglFramebuffer[0],t):ve(i.__webglFramebuffer,t)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),ue(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),ue(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function R(t,n,i){let a=r.get(t);n!==void 0&&le(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&L(t)}function ye(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,C);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Te(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=y(r.internalFormat,i,o,r.colorSpace,t.isXRRenderTarget===!0),u=we(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),ue(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),ie(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)le(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else le(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);g(i)&&_(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),ie(c,a),le(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),g(a)&&_(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),ie(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)le(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else le(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);g(i)&&_(r),n.unbindTexture()}t.depthBuffer&&L(t)}function be(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(g(a)){let t=v(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),_(t),n.unbindTexture()}}}let xe=[],Se=[];function Ce(t){if(t.samples>0){if(Te(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(xe.length=0,Se.length=0,xe.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(xe.push(l),Se.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Se)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,xe))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function we(e){return Math.min(i.maxSamples,e.samples)}function Te(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Ee(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function De(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(U.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&console.warn(`THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):console.error(`THREE.WebGLTextures: Unsupported texture color space:`,n)),t}function Oe(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=O,this.setTexture2D=ee,this.setTexture2DArray=j,this.setTexture3D=M,this.setTextureCube=te,this.rebindTextures=R,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=L,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Te}function ul(e,t){function n(n,r=``){let i,a=U.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var dl=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fl=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,pl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ga(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new yi({vertexShader:dl,fragmentShader:fl,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new K(new xa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ml=class extends Mt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new pl,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new B,C=null,w=new wi;w.viewport=new dn;let T=new wi;T.viewport=new dn;let E=[w,T],D=new Za,O=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new ji,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new ji,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new ji,b[e]=t),t.getHandSpace()};function A(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ee(){r.removeEventListener(`select`,A),r.removeEventListener(`selectstart`,A),r.removeEventListener(`selectend`,A),r.removeEventListener(`squeeze`,A),r.removeEventListener(`squeezestart`,A),r.removeEventListener(`squeezeend`,A),r.removeEventListener(`end`,ee),r.removeEventListener(`inputsourceschange`,j);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}O=null,k=null,h.reset();for(let e in g)delete g[e];e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,P.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,A),r.addEventListener(`selectstart`,A),r.addEventListener(`selectend`,A),r.addEventListener(`squeeze`,A),r.addEventListener(`squeezestart`,A),r.addEventListener(`squeezeend`,A),r.addEventListener(`end`,ee),r.addEventListener(`inputsourceschange`,j),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?Ne:Me,a=_.stencil?Ee:xe);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new pn(d.textureWidth,d.textureHeight,{format:je,type:ve,depthTexture:new ha(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new pn(f.framebufferWidth,f.framebufferHeight,{format:je,type:ve,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),P.setContext(r),P.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function j(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let M=new V,te=new V;function N(e,t,n){M.setFromMatrixPosition(t.matrixWorld),te.setFromMatrixPosition(n.matrixWorld);let r=M.distanceTo(te),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ne(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),D.near=T.near=w.near=t,D.far=T.far=w.far=n,(O!==D.near||k!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),O=D.near,k=D.far),D.layers.mask=e.layers.mask|6,w.layers.mask=D.layers.mask&3,T.layers.mask=D.layers.mask&5;let i=e.parent,a=D.cameras;ne(D,i);for(let e=0;e<a.length;e++)ne(a[e],i);a.length===2?N(D,w,T):D.projectionMatrix.copy(w.projectionMatrix),re(e,D,i)};function re(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Ft*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(D)},this.getCameraTexture=function(e){return g[e]};let ie=null;function ae(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==D.cameras.length&&(D.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=E[n];o===void 0&&(o=new wi,o.layers.enable(n),o.viewport=new dn,E[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(D.matrix.copy(o.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),i===!0&&D.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new ga,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ie&&ie(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let P=new vo;P.setAnimationLoop(ae),this.setAnimationLoop=function(e){ie=e},this.dispose=function(){}}},hl=new $n,gl=new Un;function _l(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,hi(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isMeshBasicMaterial||t.isMeshLambertMaterial?a(e,t):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,hl.copy(o),hl.x*=-1,hl.y*=-1,hl.z*=-1,a.isCubeTexture&&a.isRenderTargetTexture===!1&&(hl.y*=-1,hl.z*=-1),e.envMapRotation.value.setFromMatrix4(gl.makeRotationFromEuler(hl)),e.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function vl(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return console.error(`THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?console.warn(`THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.`):console.warn(`THREE.WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var yl=class{constructor(e={}){let{canvas:t=qt(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);f=n.getContextAttributes().alpha}else f=a;let p=new Uint32Array(4),m=new Int32Array(4),h=null,g=null,_=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,b=!1;this._outputColorSpace=Tt;let x=0,S=0,C=null,w=-1,T=null,E=new dn,D=new dn,O=null,k=new W(0),A=0,ee=t.width,j=t.height,M=1,te=null,N=null,ne=new dn(0,0,ee,j),re=new dn(0,0,ee,j),ie=!1,ae=new oa,P=!1,oe=!1,se=new Un,ce=new V,le=new dn,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},de=!1;function fe(){return C===null?M:1}let F=n;function pe(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r180`),t.addEventListener(`webglcontextlost`,Be,!1),t.addEventListener(`webglcontextrestored`,Ve,!1),t.addEventListener(`webglcontextcreationerror`,He,!1),F===null){let t=`webgl2`;if(F=pe(t,e),F===null)throw pe(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}}catch(e){throw console.error(`THREE.WebGLRenderer: `+e.message),e}let me,he,I,ge,L,R,ye,be,xe,Se,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le;function Re(){me=new Qo(F),me.init(),Fe=new ul(F,me),he=new Do(F,me,e,Fe),I=new cl(F,me),he.reversedDepthBuffer&&d&&I.buffers.depth.setReversed(!0),ge=new ts(F),L=new Kc,R=new ll(F,me,I,L,he,Fe,ge),ye=new ko(y),be=new Zo(y),xe=new yo(F),Ie=new To(F,xe),Se=new $o(F,xe,ge,Ie),we=new rs(F,Se,xe,ge),Me=new ns(F,he,R),ke=new Oo(L),Te=new Gc(y,ye,be,me,he,Ie,ke),Ee=new _l(y,L),De=new Xc,Oe=new rl(me),je=new wo(y,ye,be,I,we,f,s),Ae=new ol(y,we,he),Le=new vl(F,ge,he,I),Ne=new Eo(F,me,ge),Pe=new es(F,me,ge),ge.programs=Te.programs,y.capabilities=he,y.extensions=me,y.properties=L,y.renderLists=De,y.shadowMap=Ae,y.state=I,y.info=ge}Re();let ze=new ml(y,F);this.xr=ze,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let e=me.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=me.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return M},this.setPixelRatio=function(e){e!==void 0&&(M=e,this.setSize(ee,j,!1))},this.getSize=function(e){return e.set(ee,j)},this.setSize=function(e,n,r=!0){if(ze.isPresenting){console.warn(`THREE.WebGLRenderer: Can't change size while VR device is presenting.`);return}ee=e,j=n,t.width=Math.floor(e*M),t.height=Math.floor(n*M),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(ee*M,j*M).floor()},this.setDrawingBufferSize=function(e,n,r){ee=e,j=n,M=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.getCurrentViewport=function(e){return e.copy(E)},this.getViewport=function(e){return e.copy(ne)},this.setViewport=function(e,t,n,r){e.isVector4?ne.set(e.x,e.y,e.z,e.w):ne.set(e,t,n,r),I.viewport(E.copy(ne).multiplyScalar(M).round())},this.getScissor=function(e){return e.copy(re)},this.setScissor=function(e,t,n,r){e.isVector4?re.set(e.x,e.y,e.z,e.w):re.set(e,t,n,r),I.scissor(D.copy(re).multiplyScalar(M).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(e){I.setScissorTest(ie=e)},this.setOpaqueSort=function(e){te=e},this.setTransparentSort=function(e){N=e},this.getClearColor=function(e){return e.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(C!==null){let t=C.texture.format;e=t===1033||t===1031||t===1029}if(e){let e=C.texture.type,t=e===1009||e===1014||e===1012||e===1020||e===1017||e===1018,n=je.getClearColor(),r=je.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(p[0]=i,p[1]=a,p[2]=o,p[3]=r,F.clearBufferuiv(F.COLOR,0,p)):(m[0]=i,m[1]=a,m[2]=o,m[3]=r,F.clearBufferiv(F.COLOR,0,m))}else r|=F.COLOR_BUFFER_BIT}t&&(r|=F.DEPTH_BUFFER_BIT),n&&(r|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Be,!1),t.removeEventListener(`webglcontextrestored`,Ve,!1),t.removeEventListener(`webglcontextcreationerror`,He,!1),je.dispose(),De.dispose(),Oe.dispose(),L.dispose(),ye.dispose(),be.dispose(),we.dispose(),Ie.dispose(),Le.dispose(),Te.dispose(),ze.dispose(),ze.removeEventListener(`sessionstart`,Ye),ze.removeEventListener(`sessionend`,Xe),Ze.stop()};function Be(e){e.preventDefault(),console.log(`THREE.WebGLRenderer: Context Lost.`),b=!0}function Ve(){console.log(`THREE.WebGLRenderer: Context Restored.`),b=!1;let e=ge.autoReset,t=Ae.enabled,n=Ae.autoUpdate,r=Ae.needsUpdate,i=Ae.type;Re(),ge.autoReset=e,Ae.enabled=t,Ae.autoUpdate=n,Ae.needsUpdate=r,Ae.type=i}function He(e){console.error(`THREE.WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Ue(e){let t=e.target;t.removeEventListener(`dispose`,Ue),We(t)}function We(e){Ge(e),L.remove(e)}function Ge(e){let t=L.get(e).programs;t!==void 0&&(t.forEach(function(e){Te.releaseProgram(e)}),e.isShaderMaterial&&Te.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=ue);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=ot(e,t,n,r,i);I.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Se.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Ie.setup(i,r,s,n,c);let h,g=Ne;if(c!==null&&(h=xe.get(c),g=Pe,g.setIndex(h)),i.isMesh)r.wireframe===!0?(I.setLineWidth(r.wireframeLinewidth*fe()),g.setMode(F.LINES)):g.setMode(F.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),I.setLineWidth(e*fe()),i.isLineSegments?g.setMode(F.LINES):i.isLineLoop?g.setMode(F.LINE_LOOP):g.setMode(F.LINE_STRIP)}else i.isPoints?g.setMode(F.POINTS):i.isSprite&&g.setMode(F.TRIANGLES);if(i.isBatchedMesh){if(i._multiDrawInstances!==null)Yt(`THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection.`),g.renderMultiDrawInstances(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount,i._multiDrawInstances);else if(me.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?xe.get(c).bytesPerElement:1,o=L.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(F,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Ke(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,rt(e,t,n),e.side=0,e.needsUpdate=!0,rt(e,t,n),e.side=2):rt(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),g=Oe.get(n),g.init(t),v.push(g),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(g.pushLight(e),e.castShadow&&g.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(g.pushLight(e),e.castShadow&&g.pushShadow(e))}),g.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];Ke(a,n,e),r.add(a)}else Ke(t,n,e),r.add(t)}}),g=v.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){L.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}me.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let qe=null;function Je(e){qe&&qe(e)}function Ye(){Ze.stop()}function Xe(){Ze.start()}let Ze=new vo;Ze.setAnimationLoop(Je),typeof self<`u`&&Ze.setContext(self),this.setAnimationLoop=function(e){qe=e,ze.setAnimationLoop(e),e===null?Ze.stop():Ze.start()},ze.addEventListener(`sessionstart`,Ye),ze.addEventListener(`sessionend`,Xe),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){console.error(`THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(b===!0)return;if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ze.enabled===!0&&ze.isPresenting===!0&&(ze.cameraAutoUpdate===!0&&ze.updateCamera(t),t=ze.getCamera()),e.isScene===!0&&e.onBeforeRender(y,e,t,C),g=Oe.get(e,v.length),g.init(t),v.push(g),se.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),ae.setFromProjectionMatrix(se,jt,t.reversedDepth),oe=this.localClippingEnabled,P=ke.init(this.clippingPlanes,oe),h=De.get(e,_.length),h.init(),_.push(h),ze.enabled===!0&&ze.isPresenting===!0){let e=y.xr.getDepthSensingMesh();e!==null&&Qe(e,t,-1/0,y.sortObjects)}Qe(e,t,0,y.sortObjects),h.finish(),y.sortObjects===!0&&h.sort(te,N),de=ze.enabled===!1||ze.isPresenting===!1||ze.hasDepthSensing()===!1,de&&je.addToRenderList(h,e),this.info.render.frame++,P===!0&&ke.beginShadows();let n=g.state.shadowsArray;Ae.render(n,e,t),P===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset();let r=h.opaque,i=h.transmissive;if(g.setupLights(),t.isArrayCamera){let n=t.cameras;if(i.length>0)for(let t=0,a=n.length;t<a;t++){let a=n[t];et(r,i,e,a)}de&&je.render(e);for(let t=0,r=n.length;t<r;t++){let r=n[t];$e(h,e,r,r.viewport)}}else i.length>0&&et(r,i,e,t),de&&je.render(e),$e(h,e,t);C!==null&&S===0&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),e.isScene===!0&&e.onAfterRender(y,e,t),Ie.resetDefaultState(),w=-1,T=null,v.pop(),v.length>0?(g=v[v.length-1],P===!0&&ke.setGlobalState(y.clippingPlanes,g.state.camera)):g=null,_.pop(),h=_.length>0?_[_.length-1]:null};function Qe(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)g.pushLight(e),e.castShadow&&g.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||ae.intersectsSprite(e)){r&&le.setFromMatrixPosition(e.matrixWorld).applyMatrix4(se);let t=we.update(e),i=e.material;i.visible&&h.push(e,t,i,n,le.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||ae.intersectsObject(e))){let t=we.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),le.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),le.copy(e.boundingSphere.center)),le.applyMatrix4(e.matrixWorld).applyMatrix4(se)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&h.push(e,t,s,n,le.z,o)}}else i.visible&&h.push(e,t,i,n,le.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Qe(i[e],t,n,r)}function $e(e,t,n,r){let i=e.opaque,a=e.transmissive,o=e.transparent;g.setupLightsView(n),P===!0&&ke.setGlobalState(y.clippingPlanes,n),r&&I.viewport(E.copy(r)),i.length>0&&tt(i,t,n),a.length>0&&tt(a,t,n),o.length>0&&tt(o,t,n),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function et(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[r.id]===void 0&&(g.state.transmissionRenderTarget[r.id]=new pn(1,1,{generateMipmaps:!0,type:me.has(`EXT_color_buffer_half_float`)||me.has(`EXT_color_buffer_float`)?Ce:ve,minFilter:_e,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:U.workingColorSpace}));let a=g.state.transmissionRenderTarget[r.id],o=r.viewport||E;a.setSize(o.z*y.transmissionResolutionScale,o.w*y.transmissionResolutionScale);let s=y.getRenderTarget(),c=y.getActiveCubeFace(),l=y.getActiveMipmapLevel();y.setRenderTarget(a),y.getClearColor(k),A=y.getClearAlpha(),A<1&&y.setClearColor(16777215,.5),y.clear(),de&&je.render(n);let u=y.toneMapping;y.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),g.setupLightsView(r),P===!0&&ke.setGlobalState(y.clippingPlanes,r),tt(e,n,r),R.updateMultisampleRenderTarget(a),R.updateRenderTargetMipmap(a),me.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let a=t[i],o=a.object,s=a.geometry,c=a.material,l=a.group;if(c.side===2&&o.layers.test(r.layers)){let t=c.side;c.side=1,c.needsUpdate=!0,nt(o,n,r,s,c,l),c.side=t,c.needsUpdate=!0,e=!0}}e===!0&&(R.updateMultisampleRenderTarget(a),R.updateRenderTargetMipmap(a))}y.setRenderTarget(s,c,l),y.setClearColor(k,A),d!==void 0&&(r.viewport=d),y.toneMapping=u}function tt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],o=a.object,s=a.geometry,c=a.group,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&nt(o,t,n,s,l,c)}}function nt(e,t,n,r,i,a){e.onBeforeRender(y,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(y,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,y.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,y.renderBufferDirect(n,t,r,i,e,a),i.side=2):y.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(y,t,n,r,i,a)}function rt(e,t,n){t.isScene!==!0&&(t=ue);let r=L.get(e),i=g.state.lights,a=g.state.shadowsArray,o=i.state.version,s=Te.getParameters(e,i.state,a,t,n),c=Te.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial?t.environment:null,r.fog=t.fog,r.envMap=(e.isMeshStandardMaterial?be:ye).get(e.envMap||r.environment),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Ue),l=new Map,r.programs=l);let u=l.get(c);if(u!==void 0){if(r.currentProgram===u&&r.lightsStateVersion===o)return at(e,s),u}else s.uniforms=Te.getUniforms(e),e.onBeforeCompile(s,y),u=Te.acquireProgram(s,c),l.set(c,u),r.uniforms=s.uniforms;let d=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(d.clippingPlanes=ke.uniform),at(e,s),r.needsLights=ct(e),r.lightsStateVersion=o,r.needsLights&&(d.ambientLightColor.value=i.state.ambient,d.lightProbe.value=i.state.probe,d.directionalLights.value=i.state.directional,d.directionalLightShadows.value=i.state.directionalShadow,d.spotLights.value=i.state.spot,d.spotLightShadows.value=i.state.spotShadow,d.rectAreaLights.value=i.state.rectArea,d.ltc_1.value=i.state.rectAreaLTC1,d.ltc_2.value=i.state.rectAreaLTC2,d.pointLights.value=i.state.point,d.pointLightShadows.value=i.state.pointShadow,d.hemisphereLights.value=i.state.hemi,d.directionalShadowMap.value=i.state.directionalShadowMap,d.directionalShadowMatrix.value=i.state.directionalShadowMatrix,d.spotShadowMap.value=i.state.spotShadowMap,d.spotLightMatrix.value=i.state.spotLightMatrix,d.spotLightMap.value=i.state.spotLightMap,d.pointShadowMap.value=i.state.pointShadowMap,d.pointShadowMatrix.value=i.state.pointShadowMatrix),r.currentProgram=u,r.uniformsList=null,u}function it(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=uc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function at(e,t){let n=L.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function ot(e,t,n,r,i){t.isScene!==!0&&(t=ue),R.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial?t.environment:null,s=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Et,c=(r.isMeshStandardMaterial?be:ye).get(r.envMap||o),l=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,u=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),d=!!n.morphAttributes.position,f=!!n.morphAttributes.normal,p=!!n.morphAttributes.color,m=0;r.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(m=y.toneMapping);let h=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=h===void 0?0:h.length,v=L.get(r),b=g.state.lights;if(P===!0&&(oe===!0||e!==T)){let t=e===T&&r.id===w;ke.setState(r,e,t)}let x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==b.state.version?x=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?x=!0:v.envMap===c?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==ke.numPlanes||v.numIntersection!==ke.numIntersection)?x=!0:v.vertexAlphas===l&&v.vertexTangents===u&&v.morphTargets===d&&v.morphNormals===f&&v.morphColors===p&&v.toneMapping===m?v.morphTargetsCount!==_&&(x=!0):x=!0:x=!0:x=!0:(x=!0,v.__version=r.version);let S=v.currentProgram;x===!0&&(S=rt(r,t,i));let E=!1,D=!1,O=!1,k=S.getUniforms(),A=v.uniforms;if(I.useProgram(S.program)&&(E=!0,D=!0,O=!0),r.id!==w&&(w=r.id,D=!0),E||T!==e){I.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),k.setValue(F,`projectionMatrix`,e.projectionMatrix),k.setValue(F,`viewMatrix`,e.matrixWorldInverse);let t=k.map.cameraPosition;t!==void 0&&t.setValue(F,ce.setFromMatrixPosition(e.matrixWorld)),he.logarithmicDepthBuffer&&k.setValue(F,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&k.setValue(F,`isOrthographic`,e.isOrthographicCamera===!0),T!==e&&(T=e,D=!0,O=!0)}if(i.isSkinnedMesh){k.setOptional(F,i,`bindMatrix`),k.setOptional(F,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),k.setValue(F,`boneTexture`,e.boneTexture,R))}i.isBatchedMesh&&(k.setOptional(F,i,`batchingTexture`),k.setValue(F,`batchingTexture`,i._matricesTexture,R),k.setOptional(F,i,`batchingIdTexture`),k.setValue(F,`batchingIdTexture`,i._indirectTexture,R),k.setOptional(F,i,`batchingColorTexture`),i._colorsTexture!==null&&k.setValue(F,`batchingColorTexture`,i._colorsTexture,R));let ee=n.morphAttributes;if((ee.position!==void 0||ee.normal!==void 0||ee.color!==void 0)&&Me.update(i,n,S),(D||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,k.setValue(F,`receiveShadow`,i.receiveShadow)),r.isMeshGouraudMaterial&&r.envMap!==null&&(A.envMap.value=c,A.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1),r.isMeshStandardMaterial&&r.envMap===null&&t.environment!==null&&(A.envMapIntensity.value=t.environmentIntensity),D&&(k.setValue(F,`toneMappingExposure`,y.toneMappingExposure),v.needsLights&&st(A,O),a&&r.fog===!0&&Ee.refreshFogUniforms(A,a),Ee.refreshMaterialUniforms(A,r,M,j,g.state.transmissionRenderTarget[e.id]),uc.upload(F,it(v),A,R)),r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(uc.upload(F,it(v),A,R),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&k.setValue(F,`center`,i.center),k.setValue(F,`modelViewMatrix`,i.modelViewMatrix),k.setValue(F,`normalMatrix`,i.normalMatrix),k.setValue(F,`modelMatrix`,i.matrixWorld),r.isShaderMaterial||r.isRawShaderMaterial){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Le.update(n,S),Le.bind(n,S)}}return S}function st(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function ct(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(e,t,n){let r=L.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),L.get(e.texture).__webglTexture=t,L.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=L.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0};let lt=F.createFramebuffer();this.setRenderTarget=function(e,t=0,n=0){C=e,x=t,S=n;let r=!0,i=null,a=!1,o=!1;if(e){let s=L.get(e);if(s.__useDefaultFramebuffer!==void 0)I.bindFramebuffer(F.FRAMEBUFFER,null),r=!1;else if(s.__webglFramebuffer===void 0)R.setupRenderTarget(e);else if(s.__hasExternalTextures)R.rebindTextures(e,L.get(e.texture).__webglTexture,L.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(s.__boundDepthTexture!==t){if(t!==null&&L.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);R.setupDepthRenderbuffer(e)}}let c=e.texture;(c.isData3DTexture||c.isDataArrayTexture||c.isCompressedArrayTexture)&&(o=!0);let l=L.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(i=Array.isArray(l[t])?l[t][n]:l[t],a=!0):i=e.samples>0&&R.useMultisampledRTT(e)===!1?L.get(e).__webglMultisampledFramebuffer:Array.isArray(l)?l[n]:l,E.copy(e.viewport),D.copy(e.scissor),O=e.scissorTest}else E.copy(ne).multiplyScalar(M).floor(),D.copy(re).multiplyScalar(M).floor(),O=ie;if(n!==0&&(i=lt),I.bindFramebuffer(F.FRAMEBUFFER,i)&&r&&I.drawBuffers(e,i),I.viewport(E),I.scissor(D),I.setScissorTest(O),a){let r=L.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(o){let r=t;for(let t=0;t<e.textures.length;t++){let i=L.get(e.textures[t]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=L.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,t.__webglTexture,n)}w=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){I.bindFramebuffer(F.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(!he.textureFormatReadable(c)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!he.textureTypeReadable(l)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&(e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s),F.readPixels(t,n,r,i,Fe.convert(c),Fe.convert(l),a))}finally{let e=C===null?null:L.get(C).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){I.bindFramebuffer(F.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(!he.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!he.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,d),F.bufferData(F.PIXEL_PACK_BUFFER,a.byteLength,F.STREAM_READ),e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s),F.readPixels(t,n,r,i,Fe.convert(l),Fe.convert(u),0);let f=C===null?null:L.get(C).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,f);let p=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Xt(F,p,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,d),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,a),F.deleteBuffer(d),F.deleteSync(p),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;R.setTexture2D(e,0),F.copyTexSubImage2D(F.TEXTURE_2D,n,0,0,o,s,i,a),I.unbindTexture()};let ut=F.createFramebuffer(),dt=F.createFramebuffer();this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=null){a===null&&(i===0?a=0:(Yt(`WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels.`),a=i,i=0));let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Fe.convert(t.format),_=Fe.convert(t.type),v;t.isData3DTexture?(R.setTexture3D(t,0),v=F.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(R.setTexture2DArray(t,0),v=F.TEXTURE_2D_ARRAY):(R.setTexture2D(t,0),v=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,t.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,t.unpackAlignment);let y=F.getParameter(F.UNPACK_ROW_LENGTH),b=F.getParameter(F.UNPACK_IMAGE_HEIGHT),x=F.getParameter(F.UNPACK_SKIP_PIXELS),S=F.getParameter(F.UNPACK_SKIP_ROWS),C=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,h.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,h.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,l),F.pixelStorei(F.UNPACK_SKIP_ROWS,u),F.pixelStorei(F.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=L.get(e),r=L.get(t),h=L.get(n.__renderTarget),g=L.get(r.__renderTarget);I.bindFramebuffer(F.READ_FRAMEBUFFER,h.__webglFramebuffer),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(e).__webglTexture,i,d+n),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(t).__webglTexture,a,m+n)),F.blitFramebuffer(l,u,o,s,f,p,o,s,F.DEPTH_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||L.has(e)){let n=L.get(e),r=L.get(t);I.bindFramebuffer(F.READ_FRAMEBUFFER,ut),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,dt);for(let e=0;e<c;e++)w?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,n.__webglTexture,i),T?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,r.__webglTexture,a),i===0?T?F.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):F.copyTexSubImage2D(v,a,f,p,l,u,o,s):F.blitFramebuffer(l,u,o,s,f,p,o,s,F.COLOR_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?F.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h);F.pixelStorei(F.UNPACK_ROW_LENGTH,y),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,b),F.pixelStorei(F.UNPACK_SKIP_PIXELS,x),F.pixelStorei(F.UNPACK_SKIP_ROWS,S),F.pixelStorei(F.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&F.generateMipmap(v),I.unbindTexture()},this.initRenderTarget=function(e){L.get(e).__webglFramebuffer===void 0&&R.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?R.setTextureCube(e,0):e.isData3DTexture?R.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?R.setTexture2DArray(e,0):R.setTexture2D(e,0),I.unbindTexture()},this.resetState=function(){x=0,S=0,C=null,I.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return jt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=U._getDrawingBufferColorSpace(e),t.unpackColorSpace=U._getUnpackColorSpace()}};function bl(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function xl(e,t,n){return t+e()*(n-t)}function Sl(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(32,32,2,32,32,30);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.4,`rgba(255,255,255,0.7)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new ma(e);return r.colorSpace=Tt,r}function Cl(){let e=document.createElement(`canvas`);e.width=256,e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(128,64,10,128,64,110);n.addColorStop(0,`rgba(255,255,255,0.85)`),n.addColorStop(.6,`rgba(255,255,255,0.35)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n;for(let e=0;e<5;e++)t.beginPath(),t.arc(90+Math.sin(e*1.7)*46,64+Math.cos(e*2.3)*20,30+e*8,0,Math.PI*2),t.fill();let r=new ma(e);return r.colorSpace=Tt,r}function wl(){let e=document.createElement(`canvas`);e.width=e.height=512;let t=e.getContext(`2d`);t.fillStyle=`#5d9857`,t.fillRect(0,0,512,512);let n=bl(20260905);for(let e=0;e<2600;e++){let e=n()*512,r=n()*512,i=.85+n()*.3;t.fillStyle=n()>.7?`rgba(40,80,40,${.1+n()*.12})`:`rgba(${Math.round(90*i)},${Math.round(150*i)},${Math.round(88*i)},0.5)`,t.fillRect(e,r,1.5+n()*2.5,1.5+n()*2.5)}for(let e=0;e<40;e++)t.fillStyle=`rgba(140,120,80,${.06+n()*.08})`,t.beginPath(),t.arc(n()*512,n()*512,6+n()*22,0,Math.PI*2),t.fill();let r=new ma(e);return r.colorSpace=Tt,r.wrapS=r.wrapT=de,r.repeat.set(10,10),r}function Tl(e,t,n,r,i={}){let a=new Z({color:r,...i});return new K(new q(e,t,n),a)}function El(e,t,n,r,i=6){return new K(new Y(e,t,n,i),new Z({color:r}))}function Dl(){let e=new K(new Ca(900,20,14),new yi({side:1,depthWrite:!1,fog:!1,uniforms:{top:{value:new W(5218008)},mid:{value:new W(12575730)},bottom:{value:new W(15661051)}},vertexShader:`
      varying vec3 vPos;
      void main() {
        vPos = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform vec3 top; uniform vec3 mid; uniform vec3 bottom;
      varying vec3 vPos;
      void main() {
        float h = normalize(vPos).y;
        vec3 col = h > 0.12 ? mix(mid, top, smoothstep(0.12, 0.75, h)) : mix(bottom, mid, smoothstep(-0.1, 0.12, h));
        gl_FragColor = vec4(col, 1.0);
      }`}));return e.name=`sky`,e}function Ol(e=6){let t=Cl(),n=[],r=bl(77);for(let i=0;i<e;i++){let e=new Zi(new Li({map:t,transparent:!0,opacity:.75,depthWrite:!1,fog:!1}));e.position.set(xl(r,-220,220),46+r()*30,xl(r,-220,220));let i=40+r()*50;e.scale.set(i,i*.5,1),e.userData.drift=.4+r()*.5,n.push(e)}return n}function kl(e){let t=new J,n=El(.16,.26,1.7,7031343,5);n.position.y=.85;let r=new K(new X(1.05,1.5,6),new Z({color:4029002}));r.position.y=2.2;let i=new K(new X(.82,1.3,6),new Z({color:5016661}));i.position.y=3.1;let a=new K(new X(.55,1.1,6),new Z({color:6136168}));a.position.y=3.9,t.add(n,r,i,a),t.userData.radius=.5;let o=.8+e()*.7;return t.scale.setScalar(o),t}function Al(e){let t=new J,n=3+Math.floor(e()*3);for(let r=0;r<n;r++){let n=3+e()*2.2,r=El(.07,.09,n,8367695,5);r.position.y=n/2,r.position.x=(e()-.5)*1.2,r.position.z=(e()-.5)*1.2,r.rotation.z=(e()-.5)*.08;let i=new K(new X(.5,.14,4),new Z({color:9421407}));i.position.set(r.position.x,n-.1,r.position.z),i.rotation.y=e()*Math.PI,t.add(r,i)}return t.userData.radius=.4,t}function jl(e){let t=new J,n=1+Math.floor(e()*2);for(let r=0;r<n;r++){let n=.5+e()*.9,r=new K(new ya(n,0),new Z({color:9080724}));r.position.set((e()-.5)*1.2,n*.5,(e()-.5)*1.2),r.rotation.set(e()*3,e()*3,e()*3),r.scale.y=.6+e()*.5,t.add(r)}return t.userData.radius=1,t}function Ml(e){let t=new J,n=3.4+e()*1.2,r=3+e()*1,i=2.2+e()*.4,a=Tl(n,i,r,e()>.5?13152394:12098168);a.position.y=i/2;let o=new K(new X(Math.max(n,r)*.78,1.5,4),new Z({color:4864594}));o.position.y=i+.6,o.rotation.y=Math.PI/4;let s=Tl(.7,1.3,.08,4008991);s.position.set(0,.65,r/2+.04);let c=Tl(.6,.55,.06,15918792);c.position.set(n/2+.03,i*.72,0);let l=c.clone();return l.position.x=-n/2-.03,l.rotation.y=Math.PI,t.add(a,o,s,c,l),t.userData.radius=Math.max(n,r)*.62,t}function Nl(){let e=new J,t=El(1,1.15,.8,10129280,10);t.position.y=.4;let n=El(.85,.85,.35,8024160,10);n.position.y=.9;let r=El(.09,.09,1.6,7031343,6);r.position.set(-.7,1.1,0);let i=r.clone();i.position.x=.7;let a=Tl(1.8,.14,.14,7031343);return a.position.y=1.8,e.add(t,n,r,i,a),e.userData.radius=1.2,e}function Pl(e){let t=new K(new _a(e,24),new Ta({color:4101048,transparent:!0,opacity:.78,shininess:90,specular:16777215}));return t.rotation.x=-Math.PI/2,t.position.y=.06,t.userData.baseOpacity=.78,t}function Fl(){let e=new J,t=new K(new Y(.08,.1,2.6,6),new Z({color:5913892}));t.position.y=1.3;let n=new Z({color:9067040,emissive:16751152,emissiveIntensity:.4}),r=new K(new Ca(.32,10,8),n);r.position.y=2.75;let i=new K(new X(.26,.34,6),new Z({color:8011040}));return i.position.y=3.15,e.add(t,r,i),e.userData.radius=.6,e.userData.lampMat=n,e}function Il(e=7,t=2.4){let n=new J,r=new Z({color:9070656}),i=new Z({color:6243624});for(let i=0;i<9;i++){let a=new K(new q(.9,.16,t),r);a.position.set(-e/2+(i+.5)*(e/9),.12,0),n.add(a)}for(let r of[-1,1]){let a=new K(new q(e,.14,.12),i);a.position.set(0,.95,r*(t/2-.12)),n.add(a);for(let a=0;a<5;a++){let o=new K(new q(.12,.95,.12),i);o.position.set(-e/2+a/4*e,.5,r*(t/2-.12)),n.add(o)}}return n.userData.radius=1.6,n}function Ll(e=60,t=7){let n=new J,r=new K(new xa(e,t+2),new Z({color:9083526}));r.rotation.x=-Math.PI/2,r.position.y=.02;let i=new K(new xa(e,t),new Ta({color:4101048,transparent:!0,opacity:.72,shininess:110,specular:16777215}));return i.rotation.x=-Math.PI/2,i.position.y=.07,i.userData.baseOpacity=.72,n.add(r,i),n.userData.radius=Math.max(e,t),n.userData.waterMat=i.material,n}function Rl(e,t,n){let r=new K(new X(t,n,6),new Z({color:6126179}));r.position.y=n/2,r.rotation.y=e()*Math.PI,r.scale.x=1+e()*.5,r.scale.z=1+e()*.5;let i=new K(new X(t*.28,n*.22,6),new Z({color:15265522}));return i.position.y=n*.92,r.add(i),r.userData.radius=t,r}function zl(){let e=new J,t=new Z({color:8018490}),n=new K(new q(.1,.9,.1),t);n.position.set(-.9,.45,0);let r=n.clone();r.position.x=.9;let i=new K(new q(2,.09,.09),t);i.position.y=.62;let a=i.clone();return a.position.y=.3,e.add(n,r,i,a),e}function Bl({skin:e=15254426,robe:t=4025180,hair:n=2763312,weapon:r=null,height:i=1.8}={}){let a=new J,o={},s=Tl(.56,.66,.3,t);s.position.y=1.08;let c=Tl(.58,.1,.32,9072442);c.position.y=.78;let l=Tl(.3,.3,.3,e);l.position.y=1.62;let u=Tl(.33,.14,.33,n);u.position.y=1.78;function d(e,t,n){let r=new J,i=Tl(e[0],e[1],e[2],t);return i.position.y=n,r.add(i),r}let f=d([.13,.5,.13],e,-.25);f.position.set(-.36,1.36,0);let p=d([.13,.5,.13],e,-.25);p.position.set(.36,1.36,0);let m=null;if(r){m=new J;let e=Tl(.07,.66,.03,r.color||13620442);e.position.y=.3;let t=Tl(.16,.05,.05,7031343);m.add(e,t),m.position.set(0,-.32,.12),m.rotation.x=.35,p.add(m)}let h=d([.15,.52,.15],3025446,-.26);h.position.set(-.15,.72,0);let g=d([.15,.52,.15],3025446,-.26);return g.position.set(.15,.72,0),a.add(s,c,l,u,f,p,h,g),a.scale.setScalar(i/1.8),o.body=s,o.head=l,o.armL=f,o.armR=p,o.legL=h,o.legR=g,o.weapon=m,{group:a,parts:o}}function Vl(e=9146268){let t=new J,n={},r=new Z({color:e}),i=new Z({color:5922408}),a=new K(new q(.95,.5,.4),r);a.position.y=.55;let o=new K(new q(.5,.46,.42),r);o.position.set(.55,.56,0);let s=new K(new q(.34,.3,.32),r);s.position.set(.92,.66,0);let c=new K(new q(.16,.12,.2),i);c.position.set(1.13,.58,0);let l=new K(new X(.06,.14,4),i);l.position.set(.92,.86,-.1);let u=l.clone();u.position.z=.1;let d=new K(new Y(.04,.09,.42,5),r);d.position.set(-.52,.78,0),d.rotation.z=.6;let f=[];for(let[e,n]of[[-.32,-.28],[.32,-.28],[-.32,.28],[.32,.28]]){let r=new J,a=new K(new q(.11,.42,.11),i);a.position.y=-.21,r.add(a),r.position.set(e,.42,n),f.push(r),t.add(r)}return t.add(a,o,s,c,l,u,d),n.legs=f,n.body=a,n.head=s,t.userData.radius=1,{group:t,parts:n}}function Hl(){return Bl({skin:14200968,robe:3813173,hair:1512216,weapon:{color:10133672},height:1.75})}function Ul(e=4880954){let t=new J,n={},r=new Z({color:e}),i=new Z({color:3029540}),a=[];for(let e=0;e<4;e++){let n=new K(new Ca(.17-e*.018,6,5),r);n.scale.set(1,.75,1.15),n.position.set(-(e-.5)*.34,.22+Math.sin(e*1.4)*.05,0),a.push(n),t.add(n)}let o=new K(new Ca(.19,6,5),r);o.scale.set(1.15,.75,.8),o.position.set(.68,.26,0);let s=new K(new Ca(.035,4,4),i);s.position.set(.78,.34,.09);let c=s.clone();return c.position.z=-.09,t.add(o,s,c),n.body=o,n.segs=a,n.legs=a,t.userData.radius=.8,{group:t,parts:n}}function Wl(){let{group:e,parts:t}=Bl({skin:7315295,robe:4016690,hair:1977118,weapon:{color:8022618},height:2.5}),n=new K(new X(.07,.3,4),new Z({color:3025446}));n.position.set(-.12,1.85,0),n.rotation.z=-.5;let r=n.clone();return r.position.x=.12,r.rotation.z=.5,e.add(n,r),{group:e,parts:t}}function Gl(){let{group:e,parts:t}=Bl({skin:13214071,robe:1709088,hair:854544,weapon:{color:7021616},height:2.6}),n=new Z({color:16724016,emissive:10031377}),r=new K(new q(.06,.05,.02),n);r.position.set(-.07,1.72,.16);let i=r.clone();i.position.x=.07;let a=Tl(.3,.12,.24,3024438);a.position.set(-.4,1.45,0),a.rotation.z=-.3;let o=a.clone();return o.position.x=.4,o.rotation.z=.3,e.add(r,i,a,o),{group:e,parts:t}}function Kl(e){let t=new J,n=new Z({color:2762030}),r=new Z({color:1512220}),i=(e,t)=>{let r=new K(new q(e,4,t),n);return r.position.y=2,r},a=i(22,.7);a.position.z=-10;let o=i(22,.7);o.position.z=10;let s=i(20,.7);s.position.x=-11,s.rotation.y=Math.PI/2;let c=i(20,.7);c.position.x=11,c.rotation.y=Math.PI/2,o.scale.x=.55,o.position.x=4;let l=Tl(.9,4,.7,n);l.position.set(-4,2,10);let u=Tl(8,5.2,6,r);u.position.set(0,2.6,-3);let d=new K(new X(5.4,2.2,4),new Z({color:2366508}));d.position.y=6.5,d.rotation.y=Math.PI/4;let f=new Z({color:16752688,emissive:13391104});for(let e of[-8,8]){let n=new K(new Y(.06,.06,1.2,5),new Z({color:4864552}));n.position.set(e,2.2,10);let r=new K(new X(.16,.4,5),f);r.position.set(e,3.1,10),t.add(n,r)}return t.add(a,o,s,c,l,u,d),t.userData.radius=1,t.userData.colliders=[{center:[0,0],radius:9.5,h:1},{center:[4,0],radius:3.2,h:1}],t}function ql(){let e=new J,t=new Z({color:12103842}),n=El(.5,.62,7,12103842,8);n.position.set(-4,3.5,0);let r=n.clone();r.position.x=4;let i=Tl(9.6,1.1,1.6,t);i.position.y=7.2;let a=Tl(3.6,1.1,.3,4016698);a.position.y=8.6;let o=new K(new X(5.6,1.6,4),new Z({color:4864594}));o.position.y=9.4,o.rotation.y=Math.PI/4;let s=Tl(11,.35,3,10130570);return s.position.y=.17,e.add(n,r,i,a,o,s),e.userData.radius=6,e}function Jl(){let e=new J,t=new Z({color:4999760}),n=new K(new Ca(5.5,10,8),t);n.scale.set(1.4,.85,1.2),n.position.y=2.2;let r=new K(new _a(1.7,12),new G({color:526346}));r.position.set(0,1.8,3.4);let i=Tl(.5,.5,3.6,4010791);i.position.set(0,3.2,3.2);let a=Tl(.3,2.6,.15,new Z({color:2893344}));a.position.set(-.9,1.3,3.6);let o=a.clone();return o.position.x=.9,e.add(n,r,i,a,o),e.userData.radius=4.5,e}function Yl(e){let t=new J,n=new K(new q(1.8,1.2,.25),new Z({color:10130570}));n.position.y=.75;let r=Tl(2.2,.3,.7,8025192);return r.position.y=.15,t.add(n,r),t.userData.text=e,t}function Xl(){let e=new J,t=new Z({color:13156526});new Z({color:9052192});let n=new Z({color:3820090}),r=new Z({color:2766120}),i=Tl(17,1,12,10130570);i.position.y=.5;let a=Tl(11,4.6,8,t);a.position.y=3.3;let o=new K(new X(9.5,2.4,4),n);o.position.y=6.2,o.rotation.y=Math.PI/4;let s=new K(new X(5.6,1.6,4),r);s.position.y=8,s.rotation.y=Math.PI/4;for(let t of[-4.6,4.6])for(let n of[-3.4,3.4]){let r=El(.24,.3,4.4,9052192,6);r.position.set(t,2.2,n),e.add(r)}let c=Tl(3.4,.9,.25,1710101);return c.position.set(0,5.4,4.05),e.add(i,a,o,s,c),e.userData.colliders=[{center:[0,0],radius:6.6,h:1},{center:[-4.6,-3.4],radius:1.2,h:1},{center:[4.6,-3.4],radius:1.2,h:1},{center:[-4.6,3.4],radius:1.2,h:1},{center:[4.6,3.4],radius:1.2,h:1}],e}function Zl(){let e=new J,t=new K(new Y(9.5,10.5,.6,12),new Z({color:10131084}));t.position.y=.3,t.userData={};let n=new K(new wa(10,.14,6,24),new Z({color:13938487}));n.rotation.x=Math.PI/2,n.position.y=.62;let r=new K(new _a(1.6,20),new Z({color:2763306}));r.position.y=.62;let i=new K(new _a(.8,16),new Z({color:15790312}));i.position.set(0,.63,.8);for(let t=0;t<4;t++){let n=t/4*Math.PI*2+Math.PI/4,r=El(.22,.26,1.6,6965802,6);r.position.set(Math.cos(n)*12.5,.8,Math.sin(n)*12.5),e.add(r)}return e.add(t,n,r,i),e.userData.colliders=[{center:[0,0],radius:11.2,h:1}],e}function Ql(){let e=new J,t=new Z({color:5919840}),n=new Z({color:3814464,emissive:1575456}),r=new K(new Y(4,4.8,1,10),t);r.position.y=.5;let i=new K(new Y(2.4,3,1.4,10),t);i.position.y=1.7;let a=new K(new Y(1.1,1.5,1.2,10),n);a.position.y=3;let o=new K(new ba(.5),new Z({color:9054975,emissive:4853888}));o.position.y=3.8;for(let t=0;t<4;t++){let n=t/4*Math.PI*2,r=El(.35,.45,.7,2761776,6);r.position.set(Math.cos(n)*5.6,.35,Math.sin(n)*5.6),e.add(r)}return e.add(r,i,a,o),e.userData.colliders=[{center:[0,0],radius:5.4,h:1}],e}function $l(e){let t=new J,n=Tl(3.4,2.6,3,13154450);n.position.y=1.3;let r=new K(new X(2.8,1.4,4),new Z({color:4872762}));r.position.y=3.1,r.rotation.y=Math.PI/4;let i=Tl(.9,1.5,.12,5913122);return i.position.set(0,.75,1.52),t.add(n,r,i),t.userData.radius=2.6,t}var eu={cunzhang:{id:`cunzhang`,name:`村长`,title:`青云村村长`,role:`quest`,position:[0,6],greet:`年轻人，你终于来了。`,lines:[{text:`昨夜九道雷霆劈向青云山，仙门怕是要开了。`},{text:`你若有心求仙，便去村北的青云山看看。`},{text:`记住，仙人之路，一步一劫。`}]},tiejiang:{id:`tiejiang`,name:`铁匠`,title:`青云村铁匠`,role:`smith`,position:[-14,10],greet:`要看看我的家伙什吗？`,lines:[{text:`我这炉火，能熔天下凡铁。`},{text:`有好装备尽管拿来，强化包在我身上。`}]},yaoshi:{id:`yaoshi`,name:`药师`,title:`青云村药师`,role:`shop`,position:[12,12],greet:`上山打猎，怎能不带几瓶药水？`,lines:[{text:`这灵泉的水，配上我独门药方，便是救命良药。`},{text:`生命药水 20 灵石、灵力药水 15 灵石，童叟无欺。`}]},shenmi:{id:`shenmi`,name:`神秘老人`,title:`？？？`,role:`mystery`,position:[-6,-18],greet:`年轻人，你不该走这条路。`,lines:[{text:`有些事情，现在知道得越多，死得越快。`},{text:`那扇门……不是给人间的凡人准备的。`},{text:`金丹圆满之时，天劫自会寻你。`},{text:`青云宗后山有一座渡劫台，那是凡人与天道之间，最后的隔阂。`},{text:`天劫既渡，天道有感。渡劫妖修现世，它们的血中，藏着仙门的线索。`},{text:`残卷上说：仙门曾立在青云山巅。天门守卫仍在，夺回仙门令，天门自会重现。`},{text:`时候到了。带着道种，去归墟——第一仙尊，在那里等你。`},{text:`我守了这条路三千年。等的，就是你这样的孩子。`}]},zhangmen:{id:`zhangmen`,name:`青云掌门`,title:`青云宗掌门`,role:`quest`,position:[-52,-116],greet:`黑风林之事，老夫听说了。`,lines:[{text:`你身负异种，却心性纯良，可入我青云宗修行。`},{text:`宗门不日开山门大典，你先去演武场一试身手。`},{text:`记住：仙路之上，一念成仙，一念成魔。`}]},shixiong:{id:`shixiong`,name:`大师兄`,title:`青云宗大弟子`,role:`train`,position:[-72,-102],greet:`新来的？来演武场练两手？`,lines:[{text:`击败那演武木人，我便认你这个师弟。`},{text:`后山最近不太平，小心些。`}]},shifu:{id:`shifu`,name:`玄清真人`,title:`青云宗传功长老`,role:`master`,position:[-64,-132],greet:`根骨不错，可愿随老夫修行？`,lines:[{text:`九天剑经是我青云宗不传之秘，习得后攻伐大增。`},{text:`若你立下功劳，老夫便传你此经。`}]},chengshou:{id:`chengshou`,name:`城守`,title:`青云城守将`,role:`guard`,position:[62,126],greet:`来者何人？`,lines:[{text:`青云城乃凡界雄关，城中之人都为金丹而来。`},{text:`你若修为尚浅，还是先在城外历练，莫要强闯。`},{text:`城外赤炎狼凶猛，猎杀它们可换不少灵石。`}]},paishi:{id:`paishi`,name:`拍卖师`,title:`青云城拍卖行掌柜`,role:`auction`,position:[74,132],greet:`客官来得正好，今日有几件好货。`,lines:[{text:`本行货真价实，童叟无欺。`},{text:`金丹期的兵刃丹药，都在这里了。`}]},xianjie:{id:`xianjie`,name:`白泽`,title:`云海仙域接引使`,role:`guard`,position:[220,168],greet:`凡界来客？能踏过天门，倒是有几分本事。`,lines:[{text:`这里是云海仙域，仙界最边缘的一处浮岛。`},{text:`云兽性情温和，但受惊时极为凶猛。猎几只，也好让你见识仙界的灵气。`},{text:`仙宫深处立着一块天道碑。碑上刻着什么，我没有告诉过任何人。`},{text:`第一重天青冥天，是天庭的关隘。去那里看看——天庭，到底在守着什么。`},{text:`天将身上，带着天庭的密令。若能夺回一枚……或许能知道天庭在计划什么。`},{text:`密令一旦泄露，天庭不会善罢甘休。先锋墨麟，恐怕已经在路上了。`},{text:`墨麟败了……可天庭不会罢手。第二重天天璇宫，是他们的中枢。`},{text:`记住：仙界没有你想象中那么美好。有些事，连我也不能说。`}]},wenqu:{id:`wenqu`,name:`文曲星君`,title:`被贬的天庭记录官`,role:`quest`,position:[300,196],greet:`竟有人敢闯天璇宫……有意思。`,lines:[{text:`我是文曲星君。被贬之前，我曾是天庭的记录官——看过太多不该看的东西。`},{text:`天璇宫里，藏着一座问天阁。天庭最大的秘密，都在那里面。`},{text:`天庭清洗散仙，封锁仙界边缘……就是怕有人接近问天阁。`},{text:`替我剪除那些禁卫。然后，我带你去问天阁。`},{text:`问天阁就在主殿之后。推开那扇门，你会看到天道真正的模样。`},{text:`天道的齿轮之上……还有更古老的东西。天璇宫以北的裂隙，正在渗出混沌的气息。`}]}},tu=600,nu=8,ru=[{h:0,top:660016,mid:1713216,bot:2765904,hemi:2767450,sun:8425648,sunI:.1,ambI:.16,fog:1317936,fogNear:70,fogFar:240},{h:5,top:3824266,mid:9416920,bot:14207144,hemi:9414856,sun:16760960,sunI:.35,ambI:.3,fog:10135736,fogNear:110,fogFar:380},{h:8,top:4165584,mid:13167864,bot:16055292,hemi:12572906,sun:16773848,sunI:1,ambI:.55,fog:13624300,fogNear:130,fogFar:460},{h:13,top:3837904,mid:12642552,bot:15792892,hemi:12572906,sun:16773848,sunI:1,ambI:.55,fog:13624300,fogNear:130,fogFar:460},{h:17,top:5925530,mid:14721120,bot:16304248,hemi:13146232,sun:16752720,sunI:.55,ambI:.4,fog:13148288,fogNear:120,fogFar:400},{h:19.5,top:1447470,mid:3421274,bot:5524062,hemi:3421274,sun:9079472,sunI:.12,ambI:.2,fog:2500152,fogNear:80,fogFar:260},{h:24,top:660016,mid:1713216,bot:2765904,hemi:2767450,sun:8425648,sunI:.08,ambI:.15,fog:1317936,fogNear:70,fogFar:240}],iu=[{id:`clear`,w:38},{id:`cloudy`,w:26},{id:`rain`,w:16},{id:`rain_heavy`,w:9},{id:`fog`,w:11}],au=class{constructor(e,t){this.scene=e,this.world=t,this.hour=nu,this.weather=`clear`,this._weatherT=40,this._weatherChangeT=ou(),this.period=`day`,this.nightFactor=0,this._buildCelestial(),this._buildRain(),this._buildStars(),this._rng=bl(777)}_buildCelestial(){let e=Sl();this.sun=new Zi(new Li({map:e,color:16773848,transparent:!0,opacity:0,depthWrite:!1,blending:2})),this.sun.scale.set(70,70,1),this.sun.renderOrder=10,this.scene.add(this.sun),this.moon=new Zi(new Li({map:e,color:15266047,transparent:!0,opacity:0,depthWrite:!1,blending:2})),this.moon.scale.set(34,34,1),this.moon.renderOrder=10,this.scene.add(this.moon)}_buildStars(){let e=bl(2026),t=new Float32Array(1260);for(let n=0;n<420;n++){let r=e()*Math.PI*2,i=Math.asin(e()*1-.15);t[n*3]=Math.cos(i)*Math.cos(r)*860,t[n*3+1]=Math.sin(i)*860,t[n*3+2]=Math.cos(i)*Math.sin(r)*860}let n=new Qr;n.setAttribute(`position`,new Vr(t,3)),this.stars=new fa(n,new sa({color:14477567,size:1.6,transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!1})),this.scene.add(this.stars)}_buildRain(){let e=Sl(),t=new Float32Array(960),n=new Float32Array(960);for(let e=0;e<320;e++)n[e*3]=(Math.random()-.5)*46,n[e*3+1]=Math.random()*34,n[e*3+2]=(Math.random()-.5)*46,t[e*3]=n[e*3],t[e*3+1]=n[e*3+1],t[e*3+2]=n[e*3+2];let r=new Qr;r.setAttribute(`position`,new Vr(t,3)),this.rain=new fa(r,new sa({map:e,color:12376319,size:.16,transparent:!0,opacity:0,depthWrite:!1,blending:2})),this.rain.frustumCulled=!1,this.rain.seed=n,this.rain.visible=!1,this.scene.add(this.rain)}_pickWeather(){let e=iu.reduce((e,t)=>e+t.w,0),t=Math.random()*e;for(let e of iu)if(t-=e.w,t<=0)return e.id;return`clear`}update(e,t){this.hour=(this.hour+e/tu*24)%24;let n=this.hour;this.period=n>=19.5||n<5.5?`night`:n>=17?`dusk`:n<7?`dawn`:`day`,this.nightFactor=Math.min(1,Math.max(0,n>=19.5?(n-19.5)/2:n<5.5?1-n/5.5:n<7?(n-5.5)/1.5:0)),this._weatherT+=e,this._weatherT>this._weatherChangeT&&(this._weatherT=0,this._weatherChangeT=ou(),this.weather=this._pickWeather());let r=this._frame(),i=this.world.sky;if(i){let e=i.material.uniforms;e.top.value.copy(r.top),e.mid.value.copy(r.mid),e.bottom.value.copy(r.bot)}let a=this.weather===`cloudy`?.8:this.weather===`rain`||this.weather===`rain_heavy`?.72:1,o=r.sunI*a,{hemi:s,sunLight:c,ambient:l}=this.world;s&&(s.intensity=r.ambI*a*1.1,s.color.copy(r.hemi)),c&&(c.intensity=o,c.color.copy(r.sun)),l&&(l.intensity=r.ambI*.35);let u=this.scene.fog;if(u){let t=r.fogNear,n=r.fogFar;this.weather===`fog`?(t=36,n=130):this.weather===`rain`?(t=r.fogNear*.7,n=r.fogFar*.55):this.weather===`rain_heavy`&&(t=46,n=150),u.near+=(t-u.near)*Math.min(1,e*.8),u.far+=(n-u.far)*Math.min(1,e*.8);let i=new W(r.fog);this.weather===`fog`&&i.lerp(new W(12372172),.55),u.color.copy(i)}if(this._celestial(t),this._rainUpdate(e,t),this._lanterns(),this.world.groundMat){let t=this.weather===`rain`||this.weather===`rain_heavy`?660514:0;this.world.groundMat.emissive.lerp(new W(t),Math.min(1,e*2))}}_frame(){let e=this.hour,t=ru[0],n=ru[ru.length-1];for(let r=0;r<ru.length-1;r++)if(e>=ru[r].h&&e<=ru[r+1].h){t=ru[r],n=ru[r+1];break}let r=n.h-t.h,i=r<=0?0:(e-t.h)/r,a=(e,t)=>new W(e).lerp(new W(t),i);return{top:a(t.top,n.top),mid:a(t.mid,n.mid),bot:a(t.bot,n.bot),hemi:a(t.hemi,n.hemi),sun:a(t.sun,n.sun),sunI:t.sunI+(n.sunI-t.sunI)*i,ambI:t.ambI+(n.ambI-t.ambI)*i,fog:a(t.fog,n.fog),fogNear:t.fogNear+(n.fogNear-t.fogNear)*i,fogFar:t.fogFar+(n.fogFar-t.fogFar)*i}}_celestial(e){let t=(this.hour-6)/24*Math.PI*2,n=Math.sin(t),r=Math.cos(t),i=Math.max(0,Math.min(1,(n+.12)/.35));this.sun.position.copy(e.position).add(new V(r*620,Math.max(30,n*620),-120)),this.sun.material.opacity=i*(this.weather===`rain`||this.weather===`rain_heavy`?.35:1);let a=t+Math.PI,o=Math.sin(a),s=Math.cos(a),c=Math.max(0,Math.min(1,(o+.1)/.3));this.moon.position.copy(e.position).add(new V(s*560,Math.max(26,o*560),-120)),this.moon.material.opacity=c*.95,this.stars.position.copy(e.position),this.stars.material.opacity=this.nightFactor*(this.weather===`fog`?.4:.95)}_rainUpdate(e,t){let n=this.weather===`rain`||this.weather===`rain_heavy`;this.rain.visible=n;let r=n?this.weather===`rain_heavy`?.62:.4:0;if(this.rain.material.opacity+=(r-this.rain.material.opacity)*Math.min(1,e*3),!n)return;this.rain.position.copy(t.position);let i=this.rain.geometry.attributes.position,a=i.array,o=this.rain.seed,s=this.weather===`rain_heavy`?26:16;for(let t=0;t<a.length/3;t++)a[t*3+1]-=s*e,a[t*3+1]<-2&&(a[t*3]=o[t*3]+Math.random()*2-1,a[t*3+1]=30+Math.random()*4,a[t*3+2]=o[t*3+2]+Math.random()*2-1);i.needsUpdate=!0}_lanterns(){let e=this.world.lanterns;if(!e||!e.length)return;let t=this.nightFactor;for(let n of e){let e=n.userData&&n.userData.lampMat;e&&(e.emissiveIntensity=.4+t*3.6,e.emissive.setHex(16751152))}}get isNight(){return this.nightFactor>.55}get isRaining(){return this.weather===`rain`||this.weather===`rain_heavy`}get weatherLabel(){return{clear:`晴天`,cloudy:`阴天`,rain:`小雨`,rain_heavy:`大雨`,fog:`雾天`}[this.weather]}dispose(){for(let e of[this.sun,this.moon,this.stars,this.rain])e&&(this.scene.remove(e),e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose())}};function ou(){return 90+Math.random()*90}var su=class{constructor(e){this.scene=e,this.colliders=[],this.npcObjs=[],this.clouds=[],this.water=null,this.lanterns=[],this.hemi=null,this.sunLight=null,this.ambient=null,this.groundMat=null,this.group=new J,e.add(this.group),this._build(),this.env=new au(e,this)}addCollider(e,t,n,r=2){this.colliders.push({center:[e,t],radius:n,h:r})}_build(){this._sky(),this._ground(),this._roads(),this._village(),this._nature(),this._dungeon(),this._sectGate(),this._fortress(),this._mijing(),this._qingyuncheng(),this._xianyu(),this._tianyi(),this._tianxuan(),this._hundun(),this._guixu(),this._npcs(),this._fireflies(),this.scene.fog=new Mi(13624300,130,460)}_sky(){let e=Dl();e.name=`sky`,this.sky=e,this.scene.add(e),this.clouds=Ol(7),this.clouds.forEach(e=>this.scene.add(e))}_ground(){let e=wl(),t=new K(new xa(620,620),new Z({map:e}));t.rotation.x=-Math.PI/2,t.receiveShadow=!0,this.groundMat=t.material,this.group.add(t);let n=new K(new _a(7,24),new Z({color:11576974}));n.rotation.x=-Math.PI/2,n.position.y=.03,this.group.add(n)}_roads(){let e=new Z({color:12098154}),t=(t,n,r,i,a)=>{let o=r-t,s=i-n,c=new K(new xa(Math.hypot(o,s),a),e);c.rotation.x=-Math.PI/2,c.rotation.z=-Math.atan2(o,s),c.position.set((t+r)/2,.02,(n+i)/2),this.group.add(c)};t(0,6,0,-52,3.2),t(7,2,88,-10,3.2),t(92,-18,126,-50,3.2),t(0,-80,46,-84,2.6),t(-4,-8,-66,-112,2.6),t(126,-50,186,76,2.6),t(126,-50,62,128,3)}_village(){let e=bl(1001),t=[[-18,-4,Math.PI*.1],[-26,4,.2],[-10,14,-.1],[8,18,.2],[18,6,-.2],[24,-4,.15],[-20,18,.3],[2,-10,.25]];for(let[n,r,i]of t){let t=Ml(e);t.position.set(n,0,r),t.rotation.y=i,this.group.add(t),this.addCollider(n,r,t.userData.radius)}let n=Nl();n.position.set(-4,0,4),this.group.add(n),this.addCollider(-4,4,1.4);let r=Yl();r.position.set(5,0,-6),this.group.add(r),this.addCollider(5,-6,1.6);for(let e=0;e<4;e++){let t=zl();t.position.set(-1.5+e*2.2,0,-15),this.group.add(t)}let i=Pl(7);i.position.set(22,0,26),this.group.add(i),this.water=i,this.addCollider(22,26,7.5);let a=new K(new Y(7.4,7.8,.5,20),new Z({color:10130570}));a.position.set(22,.2,26),this.group.add(a);for(let[e,t]of[[-1,5],[2,3],[-8,-2],[6,2],[4,-7],[-12,8],[10,16],[-20,2],[16,-2],[-3,-4],[8,-10],[-16,14]]){let n=Fl();n.position.set(e,0,t),this.group.add(n),this.lanterns.push(n),this.addCollider(e,t,.5)}}_nature(){let e=bl(2026),t=[[0,0,9],[22,26,8],[-70,-118,26],[128,-52,12],[52,-88,6],[24,39,13],[-98,-94,9],[60,130,24],[220,170,26]],n=0,r=0;for(;n<72&&r<400;){r++;let i=xl(e,-230,230),a=xl(e,-230,230);if(Math.hypot(i,a)>235)continue;let o=!0;for(let[e,n,r]of t)if(Math.hypot(i-e,a-n)<r){o=!1;break}if(!o)continue;let s=e()>.82?Al(e):kl(e);s.position.set(i,0,a),s.rotation.y=e()*Math.PI*2,this.group.add(s),s.userData.radius>.4&&this.addCollider(i,a,s.userData.radius),n++}for(let t=0;t<34;t++){let t=xl(e,-220,220),n=xl(e,-220,220);if(Math.hypot(t,n)>225)continue;let r=jl(e);r.position.set(t,0,n),this.group.add(r),this.addCollider(t,n,.9)}for(let[t,n,r,i]of[[0,-300,90,80],[-260,-160,70,60],[270,-190,80,72],[-250,120,60,55],[260,150,66,58],[40,300,90,78],[-180,300,70,62]]){let a=Rl(e,r,i);a.position.set(t,0,n),this.group.add(a)}let i=Ll(94,6.4);i.position.set(24,0,39),i.rotation.y=.42,this.group.add(i),i.userData.waterMat&&(this.waterRefs=this.waterRefs||[]);for(let e=0;e<=6;e++){let t=e/6,n=24+(t-.5)*94*Math.cos(.42)*.9,r=39+(t-.5)*94*Math.sin(.42)*.9;this.addCollider(n,r,3.6)}let a=Il(8,3.4);a.position.set(26,.05,36),a.rotation.y=.42+Math.PI/2,this.group.add(a),this.addCollider(26,36,2);let o=new Z({color:9079450});for(let e of[-1,1]){let t=new K(new Y(.5,.7,6.4,8),o);t.position.set(4+e*3.4,3.2,-78),t.rotation.z=e*.06,this.group.add(t);let n=new K(new q(1.4,.7,1.4),o);n.position.set(4+e*3.4,6.5,-78),this.group.add(n),this.addCollider(4+e*3.4,-78,.8)}let s=new K(new q(7.6,.9,1.2),o);s.position.set(4,6.4,-78),s.rotation.z=.08,this.group.add(s);let c=new K(new wa(3,.18,8,36),new G({color:7327999,transparent:!0,opacity:.55}));c.rotation.x=Math.PI/2,c.position.set(4,.12,-78),this.group.add(c);let l=new K(new wa(1.9,.1,8,32),new G({color:11464928,transparent:!0,opacity:.4}));l.rotation.x=Math.PI/2,l.position.set(4,.14,-78),this.group.add(l),this.addCollider(4,-78,2.6)}_dungeon(){let e=bl(55),t=Jl();t.position.set(52,0,-88),t.rotation.y=-.6,this.group.add(t),this.addCollider(52,-88,4.8);let n=Yl();n.position.set(60,0,-82),this.group.add(n),this.addCollider(60,-82,1.6);for(let t=0;t<5;t++){let t=jl(e);t.position.set(46+e()*8,0,-96+e()*10),this.group.add(t)}}_sectGate(){let e=bl(66),t=ql();t.position.set(-70,0,-118),t.rotation.y=.5,this.group.add(t),this.addCollider(-70,-118,6.5);for(let t=0;t<3;t++){let t=kl(e);t.position.set(-62+e()*6,0,-126-e()*4),this.group.add(t)}this._sectCamp(e)}_sectCamp(e){let t=Xl();t.position.set(-60,0,-124),t.rotation.y=.2,this.group.add(t);for(let e of t.userData.colliders)this.addCollider(-60+e.center[0],-124+e.center[1],e.radius);let n=Zl();n.position.set(-84,0,-108),this.group.add(n);for(let e of n.userData.colliders||[])this.addCollider(-84+e.center[0],-108+e.center[1],e.radius);let r=Ql();r.position.set(-98,0,-94),this.group.add(r);for(let e of r.userData.colliders||[])this.addCollider(-98+e.center[0],-94+e.center[1],e.radius);let i=new K(new Y(4,4.6,.5,24),new Z({color:6974072}));i.position.set(-86,.25,-84),this.group.add(i);let a=new K(new Y(3.4,3.8,.3,24),new Z({color:9408424}));a.position.set(-86,.62,-84),this.group.add(a);let o=new K(new wa(2.6,.14,8,40),new G({color:13156512}));o.rotation.x=Math.PI/2,o.position.set(-86,.8,-84),this.group.add(o);let s=new K(new Y(.05,.05,5.2,6),new G({color:13156512}));s.rotation.z=Math.PI/2,s.position.set(-86,.8,-84),this.group.add(s);let c=new Z({color:4868700,emissive:2105402});for(let e=0;e<4;e++){let t=e/4*Math.PI*2+Math.PI/4,n=-86+Math.cos(t)*5.2,r=-84+Math.sin(t)*5.2,i=new K(new Y(.35,.5,3.6,8),c);i.position.set(n,1.8,r),this.group.add(i);let a=new K(new X(.42,.8,8),new G({color:12114175}));a.position.set(n,4,r),this.group.add(a),this.addCollider(n,r,.6)}this.addCollider(-86,-84,3.2);for(let[t,n]of[[-48,-112],[-44,-120],[-54,-104]]){let r=$l(e);r.position.set(t,0,n),r.rotation.y=e()*.6,this.group.add(r),this.addCollider(t,n,r.userData.radius||2.4)}for(let[e,t]of[[-66,-116],[-76,-122],[-52,-116],[-88,-100]]){let n=Fl();n.position.set(e,0,t),this.group.add(n),this.lanterns.push(n),this.addCollider(e,t,.5)}}_qingyuncheng(){let e=bl(77),t=new Z({color:9078136}),n=4.2,r=1.3,i=(e,r,i,a)=>{let o=new K(new q(e,n,r),t);o.position.set(i,n/2,a),this.group.add(o),this.addCollider(i,a,e/2+.6)};i(46,r,60,106),i(46,r,60,154),i(r,48,36,130),i(r,48,84,130),i(19,r,46.5,106),i(19,r,73.5,106);let a=ql();a.position.set(60,0,106),a.rotation.y=Math.PI,this.group.add(a),this.addCollider(60,106,2.2);let o=Xl();o.position.set(60,0,142),o.rotation.y=Math.PI*.5,this.group.add(o);for(let e of o.userData.colliders)this.addCollider(60+e.center[0],142+e.center[1],e.radius);let s=new K(new xa(7,40),new Z({color:11049080}));s.rotation.x=-Math.PI/2,s.position.set(60,.02,130),this.group.add(s);for(let[t,n,r]of[[45,134,.2],[75,134,-.2],[45,122,.3],[75,122,-.3]]){let i=$l(e);i.position.set(t,0,n),i.rotation.y=r,this.group.add(i),this.addCollider(t,n,i.userData.radius||2.4)}for(let[e,t]of[[54,116],[66,116],[54,132],[66,132],[60,110]]){let n=Fl();n.position.set(e,0,t),this.group.add(n),this.lanterns.push(n),this.addCollider(e,t,.5)}let c=Yl();c.position.set(60,0,112),this.group.add(c),this.addCollider(60,112,1.6);let l=new K(new wa(2.2,.22,8,24),new Z({color:8378623,emissive:2254506}));l.rotation.x=Math.PI/2,l.position.set(60,.15,134),this.group.add(l);let u=new K(new Y(.9,1.6,5,8),new G({color:8378623,transparent:!0,opacity:.25,blending:2,depthWrite:!1}));u.position.set(60,2.6,134),this.group.add(u);let d=new K(new Y(.08,.08,4.4,6),new Z({color:5913122}));d.position.set(74,2.2,130),this.group.add(d);let f=new K(new q(2.6,1.1,.08),new Z({color:13120042,emissive:5578768}));f.position.set(75.4,3.4,130),this.group.add(f);let p=new K(new q(2.3,.5,.12),new Z({color:15784096}));p.position.set(75.4,3.4,130.05),this.group.add(p),this.addCollider(74,130,.4)}_fortress(){let e=bl(99),t=Kl(e);t.position.set(128,0,-52),t.rotation.y=-.25,this.group.add(t);for(let e of t.userData.colliders)this.addCollider(128+e.center[0],-52+e.center[1],e.radius);for(let t=0;t<6;t++){let t=e()*Math.PI*2,n=12+e()*5,r=kl(e);r.position.set(128+Math.cos(t)*n,0,-52+Math.sin(t)*n),this.group.add(r)}}_xianyu(){let e=new Z({color:16054527,transparent:!0,opacity:.92}),t=new K(new Y(40,46,1.6,28),e);t.position.set(220,-.2,170),this.group.add(t);for(let e=0;e<5;e++){let t=e/5*Math.PI*2,n=new K(new Ca(3+Math.random()*2,8,6),new Z({color:16777215,transparent:!0,opacity:.85}));n.position.set(220+Math.cos(t)*30,2.2+Math.random()*2,170+Math.sin(t)*30),n.scale.y=.4,this.group.add(n)}let n=new Z({color:15265012}),r=new Z({color:13161704}),i=new K(new q(14,4.6,9),n);i.position.set(220,2.3,170),this.group.add(i);let a=new K(new X(10,3.6,4),r);a.rotation.y=Math.PI/4,a.position.set(220,6.4,170),this.group.add(a);for(let e of[-6,6])for(let t of[-3.5,3.5]){let r=new K(new Y(.4,.45,4.6,8),n);r.position.set(220+e,2.3,170+t),this.group.add(r)}this.addCollider(220,170,6);for(let t=0;t<3;t++){let n=t/3*Math.PI*2+.6,i=220+Math.cos(n)*17,a=170+Math.sin(n)*17,o=new K(new Y(3.4,4.2,1,12),e);o.position.set(i,5.4,a),this.group.add(o);let s=new K(new X(1.6,3.2,4),r);s.rotation.y=Math.PI/4,s.position.set(i,7.6,a),this.group.add(s),this.addCollider(i,a,2.4)}let o=new K(new Y(1.4,2.4,26,10),new G({color:10477823,transparent:!0,opacity:.16,blending:2,depthWrite:!1}));o.position.set(220,13,170),this.group.add(o);let s=new K(new q(8,.5,3),n);s.position.set(224,.55,178),this.group.add(s);let c=new Z({color:15660287}),l=new K(new q(2.6,4.2,.7),c);l.position.set(220,1.7,177.4),this.group.add(l);let u=new K(new q(3.4,.6,1.6),r);u.position.set(220,.3,177.4),this.group.add(u);let d=new K(new q(3,.5,1),r);d.position.set(220,4,177.4),this.group.add(d);let f=new K(new xa(2.1,3.4),new G({color:9425151,transparent:!0,opacity:.3,side:2}));f.position.set(220,1.9,177.78),this.group.add(f),this.addCollider(220,177.4,1.4)}_tianyi(){let e=new K(new Y(34,40,1.6,24),new Z({color:10134712}));e.position.set(300,-.2,60),this.group.add(e);let t=new Z({color:15659770}),n=new Z({color:14202954,emissive:5586976});for(let e of[-6,6]){let n=new K(new Y(1.1,1.3,9,10),t);n.position.set(300+e,4.5,60),this.group.add(n),this.addCollider(300+e,60,1.4)}let r=new K(new q(16,1.6,3),n);r.position.set(300,9.6,60),this.group.add(r);let i=new K(new X(13,5,4),n);i.rotation.y=Math.PI/4,i.position.set(300,12.8,60),this.group.add(i);let a=new K(new q(5.6,1.8,.3),t);a.position.set(300,9.6,61.7),this.group.add(a);for(let e of[-12,12]){let t=new K(new Y(.1,.1,7,6),n);t.position.set(300+e,3.5,60),this.group.add(t);let r=new K(new q(3.4,1.8,.1),new Z({color:13122090,emissive:5575952}));r.position.set(300+e+1.8,6.2,60),this.group.add(r),this.addCollider(300+e,60,.5)}let o=new K(new Y(1.2,2.2,24,10),new G({color:10477823,transparent:!0,opacity:.14,blending:2,depthWrite:!1}));o.position.set(300,12,60),this.group.add(o),this.addCollider(300,60,3.2)}_tianxuan(){let e=new Z({color:15659770}),t=new Z({color:13161192}),n=new Z({color:14202954,emissive:5586976}),r=new K(new Y(34,40,1.6,24),t);r.position.set(300,-.2,210),this.group.add(r);let i=new K(new q(20,8,12),e);i.position.set(300,4,210),this.group.add(i),this.addCollider(300,210,9);for(let e=0;e<3;e++){let t=new K(new X(15-e*4,3.2,4),n);t.rotation.y=Math.PI/4,t.position.set(300,8+e*3.4,210),this.group.add(t)}let a=new K(new q(7,2.2,.4),t);a.position.set(300,2.6,216.2),this.group.add(a);for(let t of[-14,14])for(let n of[-10,0,10]){let r=new K(new Y(.8,1,7,8),e);r.position.set(300+t,3.5,210+n),this.group.add(r),this.addCollider(300+t,210+n,1.1)}for(let t of[-26,26]){let r=new K(new Y(2.6,3.4,16,10),e);r.position.set(300+t,8,210),this.group.add(r);let i=new K(new X(5,5,6),n);i.position.set(300+t,18.5,210),this.group.add(i),this.addCollider(300+t,210,3.5)}for(let e of[-20,20])for(let n of[-22,22]){let r=new K(new Y(1.8,2.2,2.4,8),t);r.position.set(300+e,1.2,210+n),this.group.add(r)}let o=new K(new Y(1.6,3,30,10),new G({color:16769162,transparent:!0,opacity:.16,blending:2,depthWrite:!1}));o.position.set(300,15,210),this.group.add(o);let s=new Z({color:1315882}),c=new Z({color:2759242,emissive:1706554}),l=new K(new q(5,17,5),s);l.position.set(300,8.5,232),this.group.add(l);for(let e=1;e<=8;e++){let t=new K(new q(6,.3,6),c);t.position.set(300,e*1.9+.5,232),this.group.add(t)}let u=new K(new X(5.4,4,8),c);u.position.set(300,19.5,232),this.group.add(u);let d=new K(new q(2.4,1,.2),new Z({color:15261936}));d.position.set(300,4.6,234.6),this.group.add(d);let f=new K(new xa(2.2,4.6),new G({color:8014552,transparent:!0,opacity:.4,side:2,blending:2,depthWrite:!1}));f.position.set(300,2.6,234.55),this.group.add(f);let p=new K(new Y(1,2,26,8),new G({color:9067240,transparent:!0,opacity:.12,blending:2,depthWrite:!1}));p.position.set(300,13,232),this.group.add(p),this.addCollider(300,232,3.2)}_hundun(){let e=new Z({color:2755130,emissive:1705264}),t=new G({color:10111720,transparent:!0,opacity:.5,side:2,blending:2,depthWrite:!1}),n=new K(new Y(13,16,1.4,20),e);n.position.set(240,-.6,-60),this.group.add(n);let r=new K(new xa(7,12),t);r.position.set(240,5,-60),this.group.add(r);for(let e=0;e<3;e++){let n=new K(new wa(5+e*2.2,.35,8,24),t);n.rotation.x=Math.PI/2.6,n.rotation.y=Math.PI/4+e*.7,n.position.set(240,1.5+e*1.1,-60),this.group.add(n)}let i=new Z({color:1710634}),a=new K(new q(2.4,4,.6),i);a.position.set(250,1.7,-60),this.group.add(a);let o=new K(new xa(1.9,3.2),t);o.position.set(250,1.9,-59.66),this.group.add(o),this.addCollider(240,-60,6.5),this.addCollider(250,-60,1.4)}_guixu(){let e=-220,t=new Z({color:657944}),n=new Z({color:14205024,emissive:5586976}),r=new G({color:9075432,transparent:!0,opacity:.5,side:2,blending:2,depthWrite:!1}),i=new K(new Y(30,34,1.6,28),t);i.position.set(120,-.2,e),this.group.add(i);let a=new K(new wa(8,.9,10,30),n);a.rotation.y=Math.PI/2,a.position.set(120,8,e),this.group.add(a);let o=new K(new xa(13,15),r);o.position.set(120,8,e),this.group.add(o);for(let t of[-8,8]){let r=new K(new Y(1,1.2,18,8),n);r.position.set(120+t,9,e),this.group.add(r),this.addCollider(120+t,e,1.3)}for(let t=0;t<26;t++){let n=t/26*Math.PI*2,r=10+Math.random()*18,i=new K(new Ca(.18+Math.random()*.2,6,6),new G({color:12563711}));i.position.set(120+Math.cos(n)*r,2+Math.random()*14,e+Math.sin(n)*r),this.group.add(i)}let s=new K(new q(3.2,5,.8),t);s.position.set(134,2.2,e),this.group.add(s);let c=new K(new xa(2.6,4.2),r);c.position.set(134,2.5,-219.56),this.group.add(c),this.addCollider(120,e,5.5),this.addCollider(134,e,1.5)}_npcs(){for(let e of Object.values(eu)){let{group:t}=Bl(e.id===`cunzhang`?{robe:9071162,skin:14727314,hair:13421772}:e.id===`tiejiang`?{robe:5917242,skin:13212010,hair:3351834}:e.id===`yaoshi`?{robe:4025180,skin:15254426,hair:2039590}:e.id===`zhangmen`?{robe:3820138,skin:14731432,hair:14211296}:e.id===`shixiong`?{robe:4876938,skin:14727314,hair:2763312}:e.id===`shifu`?{robe:6978122,skin:15254426,hair:13421772}:{robe:3025461,skin:14209224,hair:14211296}),[n,r]=e.position;t.position.set(n,0,r),t.rotation.y=Math.PI,this.group.add(t),this.npcObjs.push({id:e.id,group:t,pos:[n,r]}),this.addCollider(n,r,1.1)}}_fireflies(){let e=Sl(),t=new Float32Array(120),n=bl(42);for(let e=0;e<40;e++)t[e*3]=22+xl(n,-6,6),t[e*3+1]=.6+n()*2.4,t[e*3+2]=26+xl(n,-6,6);let r=new Qr;r.setAttribute(`position`,new Vr(t,3));let i=new sa({map:e,color:14221210,size:.5,transparent:!0,opacity:.85,depthWrite:!1,blending:2});this.fireflies=new fa(r,i),this.group.add(this.fireflies)}_mijing(){let e=new K(new Y(5.5,6.5,.7,10),new Z({color:4872810}));e.position.set(188,.35,78),this.group.add(e),this.addCollider(188,78,5.6);let t=new J,n=new Z({color:16767053,emissive:13404160}),r=new Z({color:7330047,emissive:2258858}),i=new K(new wa(3.1,.28,8,28),n),a=new K(new wa(2.55,.18,8,24),r);a.rotation.z=.4;let o=new K(new _a(2.5,28),new Z({color:7330047,transparent:!0,opacity:.22,side:2}));o.position.z=.05,t.add(i,a,o),t.position.set(188,1.8,78),t.rotation.y=.6,this.portal=t,this.group.add(t);let s=Sl(),c=new Float32Array(108),l=bl(7);for(let e=0;e<36;e++){let t=l()*Math.PI*2,n=1.5+l()*7;c[e*3]=188+Math.cos(t)*n,c[e*3+1]=.5+l()*3.5,c[e*3+2]=78+Math.sin(t)*n}let u=new Qr;u.setAttribute(`position`,new Vr(c,3));let d=new sa({map:s,color:9101567,size:.55,transparent:!0,opacity:.9,depthWrite:!1,blending:2});this.lingqi=new fa(u,d),this.group.add(this.lingqi)}update(e,t){this.sky&&this.sky.position.copy(t.position);for(let t of this.clouds)t.position.x+=t.userData.drift*e,t.position.x>260&&(t.position.x=-260);if(this.water&&(this.water.material.opacity=this.water.userData.baseOpacity+Math.sin(performance.now()/900)*.06),this.fireflies){let e=performance.now()/1200,t=this.fireflies.geometry.attributes.position,n=t.array;for(let t=0;t<n.length/3;t++)n[t*3+1]=.6+Math.abs(Math.sin(e+t*1.7))*2.4;t.needsUpdate=!0}if(this.portal&&(this.portal.rotation.y+=e*.7),this.lingqi){let e=performance.now()/1500,t=this.lingqi.geometry.attributes.position,n=t.array;for(let t=0;t<n.length/3;t++)n[t*3+1]=.5+Math.abs(Math.sin(e+t*1.3))*3.5;t.needsUpdate=!0}this.env&&this.env.update(e,t)}dispose(){this.env&&this.env.dispose(),this.scene.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>{e.map&&e.map.dispose(),e.dispose()})}),this.scene.remove(this.group),this.sky&&this.scene.remove(this.sky),this.clouds.forEach(e=>this.scene.remove(e))}};function cu(e){let t=Math.round(e);return t>0?`+${t}`:`${t}`}function lu(e,t,n){return Math.max(t,Math.min(n,e))}var uu=class{constructor(e,t){this.group=e.group,this.parts=e.parts,this.group.position.set(t[0],0,t[1]),this.yaw=0,this.moving=!1,this.state=`idle`,this.animT=0,this.attackT=-1,this.hitT=-1,this.deathT=-1,this._phase=0,this._baseScale=this.group.scale.x||1}get position(){return this.group.position}faceToward(e,t){this.yaw=Math.atan2(e,t),this.group.rotation.y=this.yaw}faceAngle(e){this.yaw=e,this.group.rotation.y=e}playAttack(e=0){return this.state===`dead`||this.attackT>=0?!1:(this.attackT=0,this.comboIdx=e,!0)}playHit(){this.state!==`dead`&&(this.hitT=.16)}die(){this.state!==`dead`&&(this.state=`dead`,this.deathT=0)}revive(){this.state=`idle`,this.deathT=-1,this.attackT=-1,this.hitT=-1,this.group.rotation.set(0,this.yaw,0),this.group.position.y=0}update(e){if(this.state===`dead`){this.deathT+=e,this.group.rotation.x=Math.min(1.45,this.deathT*3.2),this.group.position.y=Math.max(0,.4-this.deathT*.5);return}if(this.animT+=e,this.moving&&!this._inAttack()){let t=this._lastDir;if(t){let n=Math.atan2(t.x,t.z)-this.yaw;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;this.yaw+=n*Math.min(1,e*12),this.group.rotation.y=this.yaw}}this.attackT>=0&&(this.attackT+=e,this.attackT>.4&&(this.attackT=-1)),this.hitT>=0&&(this.hitT-=e,this.hitT<=0&&(this.hitT=-1)),this._animate(e)}_inAttack(){return this.attackT>=0&&this.attackT<.4}setMove(e,t,n=!1){this._lastDir=e,this.moving=t,this.state=t?n?`run`:`walk`:`idle`}meditate(e){this._meditating=e,e?(this.group.scale.set(1,.6,1),this.group.position.y=0,this.state=`meditate`):(this.group.scale.set(1,1,1),this.state=`idle`)}_animate(e){let t=this.parts,n=this.animT,r=this.hitT>=0?Math.sin(this.hitT*60)*.12*(this.hitT/.16):0;if(this._meditating){let e=Math.sin(n*1.6)*.03;t.armL.rotation.x=-1.15,t.armR.rotation.x=-1.15,t.armL.rotation.z=.35,t.armR.rotation.z=-.35,t.legL.rotation.x=-.6,t.legR.rotation.x=-.6,t.legL.rotation.z=.5,t.legR.rotation.z=-.5,t.body.position.y=1.08+e,t.body.rotation.z=0,t.body.rotation.x=.05}else if(this._inAttack()){let e=lu(this.attackT/.4,0,1),n=Math.sin(e*Math.PI),r=this.comboIdx||0;r===0?(t.armR.rotation.x=-.2-n*2.4,t.armL.rotation.x=-.1+n*.4,t.body.rotation.z=n*.18,t.body.rotation.x=n*.12):r===1?(t.armL.rotation.x=-.2-n*2.4,t.armR.rotation.x=-.1+n*.4,t.body.rotation.z=-n*.18,t.body.rotation.x=n*.12):(t.armR.rotation.x=-.3-n*3.2,t.armL.rotation.x=-.2+n*.6,t.body.rotation.z=n*.12,t.body.rotation.x=n*.32,t.body.position.y=1.08+Math.sin(e*Math.PI)*.06),t.legL.rotation.x=0,t.legR.rotation.x=0}else if(this.state===`run`){let e=n*14,r=Math.sin(e);t.armL.rotation.x=r*1.15,t.armR.rotation.x=-r*1.15,t.legL.rotation.x=-r*.95,t.legR.rotation.x=r*.95,t.body.position.y=1.08+Math.abs(Math.cos(e))*.09,t.body.rotation.z=0,t.body.rotation.x=.14}else if(this.state===`walk`){let e=n*9,r=Math.sin(e);t.armL.rotation.x=r*.65,t.armR.rotation.x=-r*.65,t.legL.rotation.x=-r*.55,t.legR.rotation.x=r*.55,t.body.position.y=1.08+Math.abs(Math.cos(e))*.05,t.body.rotation.z=0,t.body.rotation.x=0}else{let e=Math.sin(n*2.2)*.018;t.armL.rotation.x=.06+e,t.armR.rotation.x=.06+e,t.legL.rotation.x=-.03,t.legR.rotation.x=.03,t.body.position.y=1.08,t.body.rotation.z=0,t.body.rotation.x=0}this.hitT>=0?(t.body.position.x=r,t.head.position.x=r*.6):(t.body.position.x=0,t.head.position.x=0)}},du=1,fu={wolf:e=>Vl(e),bandit:()=>Hl(),demon:()=>Wl(),boss:()=>Gl(),snake:e=>Ul(e)},pu=class{constructor(e,t,n,r=!1){this.id=du++,this.def=e,this.isBoss=!!e.isBoss,this.isTemp=r,this.hp=e.hp,this.maxHp=e.hp,this.spawn=[...t],this.state=`idle`,this.attackCooldown=0,this.wanderT=0,this.wanderDir=new V,this.deathT=0,this.respawnT=-1,this.removed=!1,this.aggro=!1,this.detectT=0,this.chaseT=0,this._kbT=0,this._kbDir=null,this.phase=1,this.finaleDone=!1,this.slashTimer=6,this.slashWarning=null,this.summoned=[];let i=fu[e.model]||fu.wolf,a=e.model===`wolf`||e.model===`snake`?i(e.color):i();this.group=a.group,this.parts=a.parts,this.group.position.set(t[0],0,t[1]),this.group.rotation.y=Math.random()*Math.PI*2,e.scale&&this.group.scale.setScalar(e.scale),this.animT=0,this.attackAnim=-1,this.hitT=-1,this._speed=e.speed*(.9+Math.random()*.2),this._matCache=new Set}get position(){return this.group.position}get hpFrac(){return this.hp/this.maxHp}flashHit(){this.group.traverse(e=>{e.isMesh&&e.material&&e.material.emissive&&(e.material.emissive.setHex(6693410),this._matCache.add(e.material))})}takeDamage(e){return this.hp=Math.max(0,this.hp-e),this.aggro=!0,this.flashHit(),this.hitT=.14,this.state!==`dead`&&this.state!==`finale`&&(this.state=`chase`,this.chaseT=0),this.hp}knockback(e,t){this._kbDir={x:e.x,z:e.z},this._kbT=.3,this._kbPower=t}die(){this.state!==`dead`&&(this.state=`dead`,this.deathT=0)}update(e,t){if(this.respawnT>=0){this.respawnT-=e,this.respawnT<=0&&this.respawn();return}if(this.removed)return;if(this.animT+=e,this.hitT>=0&&(this.hitT-=e),this.attackCooldown>0&&(this.attackCooldown-=e*(this._enrage?1.45:1)),this._kbT>0){this._kbT-=e;let t=this._kbPower*e*(this._kbT/.3);this._kbDir&&(this.group.position.x+=this._kbDir.x*t,this.group.position.z+=this._kbDir.z*t),this._kbT<=0&&(this._kbDir=null)}if(this.state===`dead`){this.deathT+=e,this.group.rotation.x=Math.min(1.5,this.deathT*2.6),this.deathT>1.6&&this._fadeOut();return}if(this.state===`finale`){this._idleAnim(e);return}let n=t.playerPos,r=this.group.position.distanceTo(n);if(!this.aggro&&t.playerAlive&&r<this.def.aggroRadius&&(this.aggro=!0,this.state=`detect`,this.detectT=.7,this.chaseT=0),this.aggro&&!this.isBoss&&t.playerAlive&&(this.chaseT+=e,(r>this.def.aggroRadius*2.2||this.chaseT>14)&&(this.aggro=!1,this.state=`escape`)),this.aggro&&!t.playerAlive&&(this.aggro=!1,this.state=`escape`),this.isBoss&&this.phase===1&&this.hpFrac<.7&&(this.phase=2,t.onBossPhase&&t.onBossPhase(2,this),t.onBossSummon&&t.onBossSummon(this)),this.isBoss&&this.phase===2&&this.hpFrac<.3&&(this.phase=3,this._enrage=!0,this._enrageFlashT=0,t.onBossPhase&&t.onBossPhase(3,this),t.onBossSummon&&t.onBossSummon(this)),this.isBoss&&!this.finaleDone&&this.hpFrac<=.1){this.finaleDone=!0,this.state=`finale`,t.onBossFinale&&t.onBossFinale(this);return}if(this.isBoss&&this.phase===3&&this.state===`chase`&&t.playerAlive&&(this.slashTimer-=e*(this._enrage?1.35:1),this.slashTimer<=0&&(this.slashTimer=7,t.onBossSlash&&t.onBossSlash(this))),this.state===`detect`){this.detectT-=e;let t=n.clone().sub(this.group.position);if(t.y=0,t.lengthSq()>.01){let n=Math.atan2(t.x,t.z)-this.group.rotation.y;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;this.group.rotation.y+=n*Math.min(1,e*10)}this.detectT<=0&&(this.state=`chase`),this._animate(e);return}if(this.state===`escape`){let n=this.spawn[0]-this.group.position.x,r=this.spawn[1]-this.group.position.z,i=Math.hypot(n,r);if(i<1.2)this.state=`idle`;else{let a=new V(n/i,0,r/i);this._move(a,this._speed*1.15,e,t),this.group.rotation.y=Math.atan2(a.x,a.z)}this._animate(e);return}if(this.aggro&&t.playerAlive){let r=n.clone().sub(this.group.position);r.y=0;let i=r.length();if(i>.01&&r.normalize(),i<=this.def.attackRange+.4?this.attackCooldown<=0?(this.attackCooldown=this.def.attackCooldown,this.state=`attack`,this.attackAnim=0,t.onMonsterAttack&&t.onMonsterAttack(this)):this.state=`chase`:(this.state=`chase`,this._move(r,this._speed*(this._enrage?1.3:1),e,t)),i>.1){let t=Math.atan2(r.x,r.z)-this.group.rotation.y;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;this.group.rotation.y+=t*Math.min(1,e*8)}}else this.wanderT-=e,this.wanderT<=0&&(this.wanderT=2+Math.random()*4,this.state=Math.random()>.5?`wander`:`idle`,this.wanderDir.set((Math.random()-.5)*2,0,(Math.random()-.5)*2).normalize()),this.state===`wander`&&(this._move(this.wanderDir,this._speed*.4,e,t),this.group.rotation.y=Math.atan2(this.wanderDir.x,this.wanderDir.z));this._animate(e)}_move(e,t,n,r){let i=this.group.position;if(i.x+=e.x*t*n,i.z+=e.z*t*n,i.x=lu(i.x,-255,255),i.z=lu(i.z,-255,255),r.monsters)for(let e of r.monsters){if(e===this||e.removed||e.state===`dead`)continue;let t=i.x-e.position.x,r=i.z-e.position.z,a=t*t+r*r;if(a<1.2&&a>1e-4){let e=Math.sqrt(a);i.x+=t/e*.5*n,i.z+=r/e*.5*n}}}_fadeOut(){let e=Math.max(0,1-(this.deathT-1.6)/.8);this.group.scale.setScalar(Math.max(.001,e)),e<=.001&&(this.removed=!0,this.group.visible=!1)}respawn(){this.hp=this.maxHp,this.state=`idle`,this.aggro=!1,this.respawnT=-1,this.deathT=0,this.phase=1,this.slashTimer=6,this.finaleDone=!1,this.detectT=0,this.chaseT=0,this._looted=!1,this.group.position.set(this.spawn[0],0,this.spawn[1]),this.group.scale.setScalar(1),this.group.rotation.set(0,Math.random()*Math.PI*2,0),this.group.visible=!0}scheduleRespawn(e){this.respawnT=e}_idleAnim(e){let t=this.animT;this.parts.legs&&this.parts.legs.forEach((e,n)=>{e.rotation.x=Math.sin(t*3+n)*.04})}_animate(e){let t=this.parts,n=this.animT;if(this.attackAnim>=0){this.attackAnim+=e;let n=lu(this.attackAnim/.42,0,1),r=Math.sin(n*Math.PI);t.armR&&(t.armR.rotation.x=-.2-r*2.2,t.armL.rotation.x=-.1+r*.3),t.legs&&(t.body.rotation.x=r*.3,t.head.rotation.x=r*.2),this.attackAnim>.42&&(this.attackAnim=-1);return}let r=this.state===`chase`||this.state===`wander`||this.state===`escape`;if(t.segs){let e=n*(r?9:2.2);t.segs.forEach((t,n)=>{t.position.y=.22+Math.sin(e+n*.9)*(r?.1:.03)}),r?t.body.position.x=Math.sin(e)*.1:t.body.position.x=0;return}if(t.legs){let e=n*(r?9:2);t.legs.forEach((t,i)=>{t.rotation.x=r?Math.sin(e+(i%2==0?0:Math.PI))*.7:Math.sin(n*2+i)*.05}),r?t.body.position.y=.55+Math.abs(Math.cos(e))*.05:t.body.position.y=.55}if(t.armR&&!t.legs){let e=n*9,i=Math.sin(e);t.armL.rotation.x=r?i*.65:.06,t.armR.rotation.x=r?-i*.65:.06,t.legL.rotation.x=r?-i*.55:-.03,t.legR.rotation.x=r?i*.55:.03,t.body.position.y=1.08+(r?Math.abs(Math.cos(e))*.05:0)}if(this.hitT>=0?t.body&&(t.body.position.x=Math.sin(this.hitT*50)*.1):t.body&&(t.body.position.x=0),this._matCache.forEach(t=>{t.emissive.lerp(new W(0),e*8)}),this._matCache.size&&this._matCache.size>0)for(let e of this._matCache)e.emissive.r<.01&&(e.emissive.setHex(0),this._matCache.delete(e))}dispose(){this.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}},mu=class{constructor(e){this.camera=e,this.yaw=0,this.pitch=.45,this.dist=7.5,this.target=new V,this.shake=0,this._desired=new V,this._pos=new V,this._look=new V}rotate(e,t){this.yaw-=e*.0055,this.pitch=lu(this.pitch+t*.0045,.12,1.25)}zoom(e){this.dist=lu(this.dist+e*.01,3.5,16)}addShake(e){this.shake=Math.min(1.2,this.shake+e)}snap(e){this.target.copy(e),this._pos.copy(e),this._apply(),this.camera.position.copy(this._pos),this.camera.lookAt(this.target)}_apply(){let e=Math.cos(this.pitch);this._desired.set(this.target.x+Math.sin(this.yaw)*e*this.dist,this.target.y+Math.sin(this.pitch)*this.dist,this.target.z+Math.cos(this.yaw)*e*this.dist),this._desired.y=Math.max(.4,this._desired.y)}update(e,t,n=0){this.target.lerp(t,Math.min(1,e*10)),this._apply();let r=1-Math.exp(-8*e);this._pos.lerp(this._desired,r);let i=Math.max(n+.4,.4);return this._pos.y=Math.max(i,this._pos.y),this.shake>0&&(this._pos.x+=(Math.random()-.5)*this.shake*.18,this._pos.y+=(Math.random()-.5)*this.shake*.18,this.shake=Math.max(0,this.shake-e*2.2)),this.camera.position.copy(this._pos),this.camera.lookAt(this.target),this._pos}},hu=class{constructor(t,n={}){e(this,`_onKeyDown`,e=>{let t=e.key.toLowerCase();[`arrowup`,`arrowdown`,`arrowleft`,`arrowright`,` `].includes(t)&&e.preventDefault(),this.keys[t]=!0}),e(this,`_onKeyUp`,e=>{this.keys[e.key.toLowerCase()]=!1}),e(this,`_onMouseDown`,e=>{e.button===0&&(this._down=!0,this._moved=!1,this._downX=e.clientX,this._downY=e.clientY)}),e(this,`_onMouseMove`,e=>{if(!this._down)return;let t=e.clientX-this._downX,n=e.clientY-this._downY;Math.abs(t)+Math.abs(n)>8&&(this._moved=!0),this._moved&&this.onDrag&&(this.onDrag(t,n),this._downX=e.clientX,this._downY=e.clientY)}),e(this,`_onMouseUp`,e=>{if(this._down&&(this._down=!1,!this._moved&&this.onClick)){let t=this._screenPos(e);this.onClick(t.x,t.y)}}),e(this,`_onWheel`,e=>{e.preventDefault(),this.onZoom&&this.onZoom(e.deltaY)}),e(this,`_onTouchStart`,e=>{e.preventDefault();for(let t of e.changedTouches)this.el.getBoundingClientRect(),this._touches.set(t.identifier,{x:t.clientX,y:t.clientY});if(this._touches.size===1){this.el.getBoundingClientRect();let e=[...this._touches.values()][0];this._touchStart={...e},this._touchMoved=!1}else if(this._touches.size===2){let e=[...this._touches.values()];this._pinchDist=Math.hypot(e[0].x-e[1].x,e[0].y-e[1].y)}}),e(this,`_onTouchMove`,e=>{e.preventDefault();for(let t of e.changedTouches)this._touches.get(t.identifier)&&this._touches.set(t.identifier,{x:t.clientX,y:t.clientY});if(this._touches.size===1){let e=[...this._touches.values()][0],t=e.x-this._touchStart.x,n=e.y-this._touchStart.y;Math.abs(t)+Math.abs(n)>10&&(this._touchMoved=!0),this._touchMoved&&this.onDrag&&this.onDrag(t,n),this._touchStart={...e}}else if(this._touches.size===2){let e=[...this._touches.values()],t=Math.hypot(e[0].x-e[1].x,e[0].y-e[1].y);this._pinchDist&&this.onZoom&&this.onZoom((this._pinchDist-t)*1.6),this._pinchDist=t}}),e(this,`_onTouchEnd`,e=>{e.preventDefault();for(let t of e.changedTouches)this._touches.delete(t.identifier);if(this._touches.size===0&&this._touchMoved===!1&&this.onClick){let e=this.el.getBoundingClientRect();this.onClick(this._touchStart.x-e.left,this._touchStart.y-e.top)}}),this.el=t,this.onClick=n.onClick||null,this.onDrag=n.onDrag||null,this.onZoom=n.onZoom||null,this.keys={},this.joystick={x:0,y:0},this.move={x:0,y:0},this.useJoystick=!1,this.clickMoveActive=!1,this.clickTarget=null,this.sprintHeld=!1,this._down=!1,this._downX=0,this._downY=0,this._moved=!1,this._touches=new Map,this._bind()}_bind(){window.addEventListener(`keydown`,this._onKeyDown),window.addEventListener(`keyup`,this._onKeyUp),this.el.addEventListener(`mousedown`,this._onMouseDown),window.addEventListener(`mousemove`,this._onMouseMove),window.addEventListener(`mouseup`,this._onMouseUp),this.el.addEventListener(`wheel`,this._onWheel,{passive:!1}),this.el.addEventListener(`touchstart`,this._onTouchStart,{passive:!1}),this.el.addEventListener(`touchmove`,this._onTouchMove,{passive:!1}),this.el.addEventListener(`touchend`,this._onTouchEnd,{passive:!1}),this.el.addEventListener(`contextmenu`,e=>e.preventDefault())}dispose(){window.removeEventListener(`keydown`,this._onKeyDown),window.removeEventListener(`keyup`,this._onKeyUp),this.el.removeEventListener(`mousedown`,this._onMouseDown),window.removeEventListener(`mousemove`,this._onMouseMove),window.removeEventListener(`mouseup`,this._onMouseUp),this.el.removeEventListener(`wheel`,this._onWheel),this.el.removeEventListener(`touchstart`,this._onTouchStart),this.el.removeEventListener(`touchmove`,this._onTouchMove),this.el.removeEventListener(`touchend`,this._onTouchEnd)}setJoystick(e,t){this.joystick={x:e,y:t},this.useJoystick=!0}resetJoystick(){this.joystick={x:0,y:0},this.useJoystick=!1}setSprint(e){this.sprintHeld=!!e}readSprint(){return!!(this.keys.shift||this.sprintHeld)}readMove(){let e=this.keys,t=0,n=0;return(e.w||e.arrowup)&&(n+=1),(e.s||e.arrowdown)&&--n,(e.a||e.arrowleft)&&--t,(e.d||e.arrowright)&&(t+=1),t!==0||n!==0?(this.useJoystick=!1,this.move.x=t,this.move.y=n,{x:t,y:n}):this.useJoystick&&(Math.abs(this.joystick.x)>.08||Math.abs(this.joystick.y)>.08)?(this.move.x=this.joystick.x,this.move.y=this.joystick.y,{x:this.joystick.x,y:this.joystick.y}):{x:0,y:0}}_screenPos(e){let t=this.el.getBoundingClientRect();return{x:e.clientX-t.left,y:e.clientY-t.top,w:t.width,h:t.height}}_touchId(e){return e.changedTouches[0]?e.changedTouches[0].identifier:0}},gu=90,_u=class{constructor(e){this.scene=e,this.particles=[],this.fx=[],this._spriteTex=Sl()}_sprite(e,t){let n=new Zi(new Li({map:this._spriteTex,color:e,transparent:!0,opacity:1,depthWrite:!1,blending:2}));return n.scale.set(t,t,1),n}slash(e,t,n=12576984,r=1.6){let i=new Sa(.5,1.1,12,1,-Math.PI*.55,Math.PI*1.1),a=new G({color:n,transparent:!0,opacity:.95,side:2,depthWrite:!1}),o=new K(i,a);o.position.copy(e),o.position.y=1.05,o.rotation.x=-Math.PI/2.4,o.rotation.z=t,o.scale.setScalar(r),this.scene.add(o),this.fx.push({mesh:o,mat:a,t:0,life:.24,kind:`slash`})}burst(e,t,n=10,r=3.5,i=.4,a=1.6,o=.7){this.particles.length+n>gu&&(n=Math.max(1,gu-this.particles.length));for(let s=0;s<n;s++){let n=this._sprite(t,i*(.6+Math.random()*.8));n.position.copy(e),n.position.y+=Math.random()*.6,this.scene.add(n),this.particles.push({sprite:n,vel:new V((Math.random()-.5)*2*r,Math.random()*a,(Math.random()-.5)*2*r),life:o*(.6+Math.random()*.6),maxLife:o})}}fireRing(e,t=4.5,n=16742972,r=.5){let i=new Sa(.2,t,28),a=new G({color:n,transparent:!0,opacity:.85,side:2,depthWrite:!1}),o=new K(i,a);o.rotation.x=-Math.PI/2,o.position.set(e.x,.12,e.z),this.scene.add(o),this.fx.push({mesh:o,mat:a,t:0,life:r,kind:`ring`,grow:1.3}),this.burst(e.clone().setY(1.2),n,20,4,.45,3.2,.8),this.burst(e.clone().setY(.4),16769162,10,2.4,.35,2.2,.6);let s=new _a(t*.82,20),c=new G({color:2759184,transparent:!0,opacity:.5,depthWrite:!1}),l=new K(s,c);l.rotation.x=-Math.PI/2,l.position.set(e.x,.05,e.z),this.scene.add(l),this.fx.push({mesh:l,mat:c,t:0,life:1.1,kind:`burn`})}swordWave(e,t,n=10475775,r=9,i=.5){let a=new X(1.15,2.6,7,1,!0),o=new G({color:n,transparent:!0,opacity:.85,side:2,depthWrite:!1,blending:2}),s=new K(a,o);s.rotation.set(0,t+Math.PI/2,Math.PI/2),s.scale.set(.55,1,1),s.position.set(e.x,1.1,e.z),this.scene.add(s);let c={x:Math.sin(t),z:Math.cos(t)};this.fx.push({mesh:s,mat:o,t:0,life:i,kind:`wave`,dir:c,speed:r/i,trailT:0})}flyingSword(e,t,n=14203135,r=.55){let i=new J,a=new G({color:n,transparent:!0,opacity:1,depthWrite:!1,blending:2}),o=new K(new q(.09,.05,1.1),a),s=new K(new X(.09,.3,6),a);s.rotation.x=Math.PI/2,s.position.z=.7,i.add(o,s),i.position.copy(e),i.lookAt(t),this.scene.add(i),this.fx.push({mesh:i,mat:a,t:0,life:r,kind:`sword`,from:e.clone(),to:t.clone(),trailT:0})}warningRing(e,t=5.5){let n=new Sa(.15,t,30),r=new G({color:16724804,transparent:!0,opacity:.35,side:2,depthWrite:!1}),i=new K(n,r);return i.rotation.x=-Math.PI/2,i.position.set(e.x,.1,e.z),this.scene.add(i),this.fx.push({mesh:i,mat:r,t:0,life:1.2,kind:`warning`}),i}hit(e,t=16765517,n=!1){this.burst(e.clone().setY(1.1),t,n?14:8,n?5:3,n?.5:.35,2,.6)}update(e){for(let t=this.fx.length-1;t>=0;t--){let n=this.fx[t];n.t+=e;let r=n.t/n.life;if(n.kind===`slash`){n.mat.opacity=.95*(1-r);let t=.8+r*.5;n.mesh.scale.setScalar(t),n.mesh.rotation.z+=e*3}else if(n.kind===`ring`)n.mat.opacity=.85*(1-r),n.mesh.scale.setScalar(1+r*n.grow);else if(n.kind===`burn`)n.mat.opacity=.5*(1-r);else if(n.kind===`warning`)n.mat.opacity=.3+Math.sin(n.t*12)*.15;else if(n.kind===`wave`){if(n.mesh.position.x+=n.dir.x*n.speed*e,n.mesh.position.z+=n.dir.z*n.speed*e,n.mat.opacity=.85*(1-r),n.trailT-=e,n.trailT<=0&&this.particles.length<gu){n.trailT=.05;let e=this._sprite(n.mat.color.getHex(),.3);e.position.copy(n.mesh.position).y-=.15,e.position.x+=(Math.random()-.5)*.3,e.position.z+=(Math.random()-.5)*.3,this.scene.add(e),this.particles.push({sprite:e,vel:new V((Math.random()-.5)*.4,.2,(Math.random()-.5)*.4),life:.3,maxLife:.3})}}else if(n.kind===`sword`){let t=1-(1-r)**1.7,i=n.from.clone().lerp(n.to,t);if(i.y=Math.max(i.y,.5),n.mesh.position.copy(i),n.mat.opacity=1-r*.6,n.trailT-=e,n.trailT<=0&&this.particles.length<gu){n.trailT=.03;let e=this._sprite(n.mat.color.getHex(),.26);e.position.copy(i),this.scene.add(e),this.particles.push({sprite:e,vel:new V(0,.5,0),life:.34,maxLife:.34})}}n.t>=n.life&&(this.scene.remove(n.mesh),n.mesh.traverse&&n.mesh.traverse(e=>{e.geometry&&e!==n.mesh&&e.geometry.dispose(),e.material&&e!==n.mesh&&e.material.dispose()}),n.mesh.geometry&&n.mesh.geometry.dispose(),n.mat&&n.mat.dispose(),this.fx.splice(t,1))}for(let t=this.particles.length-1;t>=0;t--){let n=this.particles[t];if(n.life-=e,n.life<=0){this.scene.remove(n.sprite),n.sprite.material.map&&n.sprite.material.map.dispose(),n.sprite.material.dispose(),this.particles.splice(t,1);continue}n.sprite.position.addScaledVector(n.vel,e),n.vel.y-=4.2*e,n.sprite.material.opacity=n.life/n.maxLife}}dispose(){for(let e of this.fx)this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.mat.dispose();this.fx=[];for(let e of this.particles)this.scene.remove(e.sprite),e.sprite.material.dispose();this.particles=[]}},vu=class{constructor(e,t){this.container=e,this.camera=t,this.texts=[],this.bars=new Map,this.labels=new Map,this._v=new V,this._w=e.clientWidth||window.innerWidth,this._h=e.clientHeight||window.innerHeight}resize(){this._w=this.container.clientWidth||window.innerWidth,this._h=this.container.clientHeight||window.innerHeight}_mkEl(e){let t=document.createElement(`div`);return t.className=e,this.container.appendChild(t),t}addDamage(e,t,n={}){let r=this._mkEl(`dmg-txt${n.crit?` crit`:``}`);return r.style.color=n.color||(n.crit?`#ffb84d`:`#ffffff`),r.textContent=n.crit?`CRITICAL ${t}`:`-${t}`,r.style.fontSize=n.crit?`22px`:`16px`,this.texts.push({el:r,pos:e.clone(),t:0,life:.85,drift:n.drift||.6}),r}addFloat(e,t,n=`#ffd84d`){let r=this._mkEl(`dmg-txt float-txt`);return r.style.color=n,r.textContent=t,this.texts.push({el:r,pos:e.clone(),t:0,life:1.2,drift:.5,floatUp:!0}),r}addBar(e,t,n=1.9,r=`#e0443c`){if(this.bars.has(e))return;let i=this._mkEl(`obar`);i.innerHTML=`<div class="obar-bg"><div class="obar-fill"></div></div>`;let a=i.querySelector(`.obar-fill`);a.style.background=r,this.bars.set(e,{el:i,fill:a,obj:t,offY:n})}setBar(e,t){let n=this.bars.get(e);n&&(n.fill.style.width=`${Math.max(0,Math.min(1,t))*100}%`)}removeBar(e){let t=this.bars.get(e);t&&(t.el.remove(),this.bars.delete(e))}addLabel(e,t,n,r=`#ffe9b8`,i=2.6){if(this.labels.has(e))return;let a=this._mkEl(`name-tag`);a.textContent=n,a.style.color=r,this.labels.set(e,{el:a,obj:t,offY:i})}removeLabel(e){let t=this.labels.get(e);t&&(t.el.remove(),this.labels.delete(e))}_project(e){return this._v.copy(e),this._v.project(this.camera),this._v.z>1?null:{x:(this._v.x*.5+.5)*this._w,y:(-this._v.y*.5+.5)*this._h}}update(){for(let e=this.texts.length-1;e>=0;e--){let t=this.texts[e];t.t+=1/60;let n=t.pos.clone();n.y+=t.t*(t.floatUp?2.2:1.4);let r=this._project(n);r?(t.el.style.transform=`translate(-50%, -100%) translate(${r.x}px, ${r.y}px)`,t.el.style.opacity=String(Math.max(0,1-t.t/t.life))):t.el.style.opacity=`0`,t.t>=t.life&&(t.el.remove(),this.texts.splice(e,1))}for(let[e,t]of this.bars){let e=t.obj.position.clone();e.y+=t.offY;let n=this._project(e);n?(t.el.style.transform=`translate(-50%, -100%) translate(${n.x}px, ${n.y}px)`,t.el.style.opacity=`1`):t.el.style.opacity=`0`}for(let[e,t]of this.labels){let e=t.obj.position.clone();e.y+=t.offY;let n=this._project(e);n?(t.el.style.transform=`translate(-50%, -100%) translate(${n.x}px, ${n.y}px)`,t.el.style.opacity=`1`):t.el.style.opacity=`0`}}dispose(){this.texts.forEach(e=>e.el.remove()),this.texts=[],this.bars.forEach(e=>e.el.remove()),this.bars.clear(),this.labels.forEach(e=>e.el.remove()),this.labels.clear()}},yu=class{static calcDamage(e,t,n=1,r=5,i=150){let a=Math.random()*100<r,o=e*n*(.9+Math.random()*.2)-t*.5;return a&&(o*=i/100),o=Math.max(1,Math.round(o)),{dmg:o,crit:a}}static calcMonsterDamage(e,t){let n=e*(.85+Math.random()*.3)-t*.7;return n=Math.max(1,Math.round(n)),n}static xpForKill(e){return e.exp}},bu=class{constructor(){this.group=new J;let e=new Z({color:12576992}),t=new Z({color:9425096}),n=new Z({color:15247434}),r=new Z({color:4885114});this.body=new K(new Ca(.28,10,8),e),this.body.scale.set(1,.85,1.2),this.head=new K(new Ca(.16,8,6),e),this.head.position.set(0,.26,.34);let i=new K(new X(.05,.16,6),n);i.rotation.x=Math.PI/2,i.position.set(0,.24,.52);let a=new K(new X(.05,.18,5),r);a.position.set(0,.42,.3),this.wingL=new K(new q(.1,.02,.46),t),this.wingL.position.set(-.3,.05,.02),this.wingL.rotation.z=.5,this.wingR=new K(new q(.1,.02,.46),t),this.wingR.position.set(.3,.05,.02),this.wingR.rotation.z=-.5;let o=new K(new X(.09,.3,6),t);o.rotation.x=Math.PI/2,o.position.set(0,.02,-.42);let s=new G({color:2105376}),c=new K(new Ca(.025,6,6),s);c.position.set(-.09,.3,.42);let l=c.clone();l.position.x=.09,this.group.add(this.body,this.head,i,a,this.wingL,this.wingR,o,c,l),this.group.scale.set(1.1,1.1,1.1)}update(e,t,n,r){let i=new V(t.x+Math.cos(n+.9)*1.1,t.y+1.55+Math.sin(r*1.4)*.12,t.z+Math.sin(n+.9)*1.1);this.group.position.lerp(i,1-.001**e),this.group.rotation.y=n+Math.sin(r*2.2)*.25,this.group.rotation.z=Math.sin(r*2.2)*.06;let a=Math.sin(r*11)*.55;this.wingL.rotation.z=.5+a,this.wingR.rotation.z=-.5-a}dispose(){this.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}},xu=class{constructor(){this._map=new Map}on(e,t){return this._map.has(e)||this._map.set(e,new Set),this._map.get(e).add(t),()=>this.off(e,t)}off(e,t){this._map.get(e)?.delete(t)}emit(e,t){this._map.get(e)?.forEach(n=>{try{n(t)}catch(t){console.error(`[emitter]`,e,t)}})}clear(){this._map.clear()}},Su={wolf:{id:`wolf`,name:`青狼`,level:1,hp:80,attack:8,defense:2,exp:20,aggroRadius:7,attackRange:1.8,attackCooldown:1.4,speed:4,model:`wolf`,color:9146268,lingshi:[1,3],drops:[{itemId:`lianqidan`,chance:.22,min:1,max:1},{itemId:`hp_potion`,chance:.12,min:1,max:1},{itemId:`qianghuashi`,chance:.15,min:1,max:1},{itemId:`iron_sword`,chance:.08,min:1,max:1}]},wolf_king:{id:`wolf_king`,name:`青狼王`,level:3,hp:260,attack:22,defense:8,exp:80,aggroRadius:8,attackRange:2,attackCooldown:1.3,speed:4.6,model:`wolf`,color:5923960,scale:1.25,lingshi:[5,10],drops:[{itemId:`qianghuashi`,chance:.3,min:1,max:2},{itemId:`lianqidan`,chance:.35,min:1,max:2},{itemId:`iron_sword`,chance:.12,min:1,max:1}]},shanzei:{id:`shanzei`,name:`山贼`,level:3,hp:220,attack:20,defense:7,exp:65,aggroRadius:8,attackRange:2,attackCooldown:1.5,speed:3.6,model:`bandit`,color:4864552,lingshi:[4,8],drops:[{itemId:`qianghuashi`,chance:.22,min:1,max:2},{itemId:`hp_potion`,chance:.12,min:1,max:1},{itemId:`qingyun_robe`,chance:.06,min:1,max:1}]},bandit:{id:`bandit`,name:`黑风盗`,level:5,hp:420,attack:32,defense:12,exp:130,aggroRadius:9,attackRange:2,attackCooldown:1.5,speed:3.6,model:`bandit`,color:3813173,lingshi:[6,12],drops:[{itemId:`qianghuashi`,chance:.3,min:1,max:2},{itemId:`hp_potion`,chance:.14,min:1,max:1},{itemId:`mp_potion`,chance:.1,min:1,max:1},{itemId:`qingyun_robe`,chance:.09,min:1,max:1}]},demon:{id:`demon`,name:`山妖`,level:7,hp:700,attack:42,defense:18,exp:220,aggroRadius:9,attackRange:2.4,attackCooldown:1.7,speed:2.9,model:`demon`,color:5012044,lingshi:[10,18],drops:[{itemId:`qianghuashi`,chance:.4,min:1,max:3},{itemId:`lianqidan`,chance:.3,min:1,max:2},{itemId:`heifeng_dao`,chance:.06,min:1,max:1},{itemId:`qingyun_pendant`,chance:.06,min:1,max:1},{itemId:`yaogu_staff`,chance:.04,min:1,max:1}]},snake:{id:`snake`,name:`毒蛇`,level:5,hp:300,attack:36,defense:8,exp:120,aggroRadius:7,attackRange:1.7,attackCooldown:1.2,speed:4.2,model:`snake`,color:4880954,scale:1,lingshi:[4,9],drops:[{itemId:`mp_potion`,chance:.15,min:1,max:1},{itemId:`lianqidan`,chance:.25,min:1,max:1},{itemId:`qianghuashi`,chance:.2,min:1,max:2}]},yaolang:{id:`yaolang`,name:`妖狼`,level:7,hp:620,attack:45,defense:14,exp:200,aggroRadius:9,attackRange:2,attackCooldown:1.2,speed:5,model:`wolf`,color:3811914,scale:1.15,lingshi:[8,16],drops:[{itemId:`qianghuashi`,chance:.35,min:1,max:2},{itemId:`lianqidan`,chance:.3,min:1,max:2},{itemId:`heifeng_dao`,chance:.08,min:1,max:1}]},tree_demon:{id:`tree_demon`,name:`树妖`,level:10,hp:1500,attack:70,defense:28,exp:480,aggroRadius:8,attackRange:2.6,attackCooldown:1.9,speed:2.2,model:`demon`,color:5916208,scale:1.35,lingshi:[20,35],drops:[{itemId:`qianghuashi`,chance:.5,min:2,max:4},{itemId:`lianqidan`,chance:.4,min:1,max:2},{itemId:`yaogu_staff`,chance:.1,min:1,max:1},{itemId:`qingyun_pendant`,chance:.1,min:1,max:1}]},black_guard:{id:`black_guard`,name:`黑风护法`,level:12,hp:2600,attack:95,defense:40,exp:750,aggroRadius:10,attackRange:2.4,attackCooldown:1.6,speed:3.2,model:`bandit`,color:1709088,scale:1.18,lingshi:[35,60],drops:[{itemId:`qianghuashi`,chance:.6,min:2,max:5},{itemId:`heifeng_dao`,chance:.15,min:1,max:1},{itemId:`hp_potion`,chance:.3,min:1,max:2},{itemId:`daozhong_fragment`,chance:.25,min:1,max:1}]},boss:{id:`boss`,name:`黑风寨主`,level:15,hp:1e4,attack:150,defense:50,exp:2e3,aggroRadius:16,attackRange:3.2,attackCooldown:1.8,speed:2.8,model:`boss`,color:1709088,lingshi:[150,260],isBoss:!0,drops:[{itemId:`black_seed`,chance:1,min:1,max:1},{itemId:`heifeng_dao`,chance:1,min:1,max:1},{itemId:`qianghuashi`,chance:1,min:4,max:8},{itemId:`daozhong_fragment`,chance:.8,min:1,max:2},{itemId:`yaogu_staff`,chance:.35,min:1,max:1}]},shilian_shou:{id:`shilian_shou`,name:`试炼兽`,level:13,hp:1800,attack:80,defense:25,exp:500,aggroRadius:8,attackRange:2.2,attackCooldown:1.5,speed:3.8,model:`wolf`,color:3828554,scale:1.1,lingshi:[25,45],drops:[{itemId:`qianghuashi`,chance:.45,min:1,max:3},{itemId:`lianqidan`,chance:.35,min:1,max:2},{itemId:`qingyun_robe`,chance:.1,min:1,max:1}]},wooden_man:{id:`wooden_man`,name:`演武木人`,level:14,hp:2600,attack:70,defense:36,exp:550,aggroRadius:5,attackRange:2,attackCooldown:1.8,speed:.8,model:`bandit`,color:9071162,scale:1,lingshi:[15,30],drops:[{itemId:`qianghuashi`,chance:.5,min:1,max:3},{itemId:`hp_potion`,chance:.2,min:1,max:1}]},moxiu:{id:`moxiu`,name:`魔修弟子`,level:16,hp:3200,attack:110,defense:40,exp:800,aggroRadius:10,attackRange:2.4,attackCooldown:1.5,speed:3.4,model:`bandit`,color:2759226,scale:1.05,lingshi:[40,70],drops:[{itemId:`qianghuashi`,chance:.55,min:2,max:4},{itemId:`daozhong_fragment`,chance:.2,min:1,max:1},{itemId:`heifeng_dao`,chance:.1,min:1,max:1},{itemId:`tupodan`,chance:.12,min:1,max:1}]},zongzhu_boss:{id:`zongzhu_boss`,name:`叛教魔修`,level:20,hp:18e3,attack:200,defense:70,exp:4e3,aggroRadius:16,attackRange:3.2,attackCooldown:1.7,speed:2.9,model:`boss`,color:3805744,scale:1.05,lingshi:[200,350],isBoss:!0,drops:[{itemId:`jiutian_jing`,chance:1,min:1,max:1},{itemId:`tupodan`,chance:1,min:1,max:2},{itemId:`dizi_ling`,chance:1,min:1,max:1},{itemId:`qianghuashi`,chance:1,min:6,max:12},{itemId:`heifeng_dao`,chance:.4,min:1,max:1}]},mijing_shouwei:{id:`mijing_shouwei`,name:`秘境守卫`,level:17,hp:3400,attack:65,defense:24,exp:420,aggroRadius:10,attackRange:2.2,attackCooldown:1.5,speed:4.2,model:`demon`,color:2771546,scale:1,lingshi:[30,50],drops:[{itemId:`qianghuashi`,chance:.5,min:1,max:3},{itemId:`hp_potion`,chance:.35,min:1,max:2},{itemId:`daozhong_fragment`,chance:.15,min:1,max:1}]},mijing_yaojiang:{id:`mijing_yaojiang`,name:`秘境妖将`,level:22,hp:26e3,attack:170,defense:55,exp:2600,aggroRadius:16,attackRange:3.4,attackCooldown:1.8,speed:3.2,model:`boss`,color:2767466,scale:1.1,lingshi:[200,300],isBoss:!0,drops:[{itemId:`qingyun_lingzhu`,chance:1,min:1,max:1},{itemId:`zixiao_guiyuan`,chance:.15,min:1,max:1},{itemId:`tupodan`,chance:1,min:1,max:2},{itemId:`daozhong_fragment`,chance:1,min:2,max:4},{itemId:`qianghuashi`,chance:1,min:6,max:10}]},chiyan_lang:{id:`chiyan_lang`,name:`赤炎狼`,level:23,hp:3e3,attack:92,defense:32,exp:520,aggroRadius:13,attackRange:2.4,attackCooldown:1.3,speed:5.2,model:`wolf`,color:14174762,scale:1.05,lingshi:[40,70],drops:[{itemId:`qianghuashi`,chance:.5,min:1,max:3},{itemId:`hp_potion`,chance:.4,min:1,max:2},{itemId:`daozhong_fragment`,chance:.1,min:1,max:1}]},chiyan_wolf_king:{id:`chiyan_wolf_king`,name:`赤炎狼王`,level:25,hp:15e3,attack:130,defense:45,exp:1800,aggroRadius:15,attackRange:3,attackCooldown:1.5,speed:4.2,model:`wolf`,color:15226912,scale:1.35,lingshi:[150,250],isBoss:!0,drops:[{itemId:`qingyun_sword`,chance:1,min:1,max:1},{itemId:`tupodan`,chance:1,min:1,max:2},{itemId:`qianghuashi`,chance:1,min:4,max:8},{itemId:`daozhong_fragment`,chance:.8,min:1,max:2}]},dujie_yaoxiu:{id:`dujie_yaoxiu`,name:`渡劫妖修`,level:30,hp:8e3,attack:110,defense:40,exp:1e3,aggroRadius:14,attackRange:2.6,attackCooldown:1.4,speed:4.6,model:`humanoid`,color:5909130,scale:1.1,lingshi:[80,140],drops:[{itemId:`qianghuashi`,chance:.6,min:1,max:3},{itemId:`tupodan`,chance:.3,min:1,max:1},{itemId:`daozhong_fragment`,chance:.15,min:1,max:1}]},tianmen_shouwei:{id:`tianmen_shouwei`,name:`天门守卫`,level:35,hp:12e3,attack:140,defense:55,exp:1500,aggroRadius:14,attackRange:2.8,attackCooldown:1.5,speed:4,model:`humanoid`,color:14198840,scale:1.15,lingshi:[120,200],drops:[{itemId:`tianmen_ling`,chance:1,min:1,max:1},{itemId:`qianghuashi`,chance:.7,min:2,max:4},{itemId:`daozhong_fragment`,chance:.2,min:1,max:2}]},xian_shou:{id:`xian_shou`,name:`云兽`,level:36,hp:1e4,attack:150,defense:60,exp:1800,aggroRadius:13,attackRange:2.6,attackCooldown:1.4,speed:4.4,model:`wolf`,color:15267071,scale:1.15,lingshi:[150,240],drops:[{itemId:`qianghuashi`,chance:.7,min:2,max:4},{itemId:`tupodan`,chance:.4,min:1,max:1},{itemId:`daozhong_fragment`,chance:.25,min:1,max:2}]},tian_bing:{id:`tian_bing`,name:`天兵`,level:38,hp:15e3,attack:165,defense:70,exp:2200,aggroRadius:14,attackRange:2.8,attackCooldown:1.4,speed:4.2,model:`humanoid`,color:13150264,scale:1.15,lingshi:[180,280],drops:[{itemId:`qianghuashi`,chance:.8,min:2,max:5},{itemId:`tupodan`,chance:.5,min:1,max:1},{itemId:`daozhong_fragment`,chance:.3,min:1,max:2}]},tian_jiang:{id:`tian_jiang`,name:`天将`,level:40,hp:22e3,attack:180,defense:80,exp:2800,aggroRadius:15,attackRange:3,attackCooldown:1.3,speed:4.6,model:`humanoid`,color:10465480,scale:1.28,lingshi:[220,340],drops:[{itemId:`tianling_mi`,chance:1,min:1,max:1},{itemId:`qianghuashi`,chance:.85,min:2,max:5},{itemId:`tupodan`,chance:.55,min:1,max:1}]},tian_xianfeng:{id:`tian_xianfeng`,name:`天庭先锋·墨麟`,level:42,hp:1e5,attack:210,defense:90,exp:8e3,aggroRadius:16,attackRange:3.2,attackCooldown:1.2,speed:4.8,model:`humanoid`,color:2763322,scale:1.5,lingshi:[400,600],isBoss:!0,drops:[{itemId:`tianling_mi`,chance:1,min:2,max:2},{itemId:`tupodan`,chance:1,min:3,max:4},{itemId:`qianghuashi`,chance:1,min:8,max:12},{itemId:`daozhong_fragment`,chance:1,min:3,max:5}]},tian_wei:{id:`tian_wei`,name:`天庭禁卫`,level:44,hp:26e3,attack:190,defense:85,exp:3200,aggroRadius:15,attackRange:3,attackCooldown:1.3,speed:4.5,model:`humanoid`,color:14213360,scale:1.3,lingshi:[250,380],drops:[{itemId:`qianghuashi`,chance:.85,min:2,max:5},{itemId:`tupodan`,chance:.6,min:1,max:1},{itemId:`daozhong_fragment`,chance:.35,min:1,max:2}]},hundun_ying:{id:`hundun_ying`,name:`混沌魔影`,level:46,hp:3e4,attack:200,defense:90,exp:3500,aggroRadius:16,attackRange:3,attackCooldown:1.2,speed:4.8,model:`humanoid`,color:5909130,scale:1.35,lingshi:[300,450],drops:[{itemId:`qianghuashi`,chance:.9,min:3,max:6},{itemId:`tupodan`,chance:.65,min:1,max:2},{itemId:`daozhong_fragment`,chance:.4,min:1,max:2}]},hundun_gushen:{id:`hundun_gushen`,name:`混沌古神之影`,level:50,hp:2e5,attack:250,defense:110,exp:12e3,aggroRadius:18,attackRange:3.5,attackCooldown:1.1,speed:4.6,model:`humanoid`,color:3805280,scale:1.8,lingshi:[800,1200],isBoss:!0,drops:[{itemId:`guixu_canpian`,chance:1,min:1,max:1},{itemId:`daozhong_fragment`,chance:1,min:8,max:12},{itemId:`tupodan`,chance:1,min:5,max:8},{itemId:`qianghuashi`,chance:1,min:12,max:18}]},diyi_xianzun:{id:`diyi_xianzun`,name:`第一仙尊·残念`,level:55,hp:3e5,attack:300,defense:130,exp:2e4,aggroRadius:20,attackRange:3.8,attackCooldown:1,speed:4.4,model:`humanoid`,color:14205024,scale:1.9,lingshi:[1500,2e3],isBoss:!0,drops:[{itemId:`guixu_canpian`,chance:1,min:3,max:5},{itemId:`daozhong_fragment`,chance:1,min:15,max:20},{itemId:`tupodan`,chance:1,min:8,max:12},{itemId:`qianghuashi`,chance:1,min:15,max:25}]}},Cu={qingyun_sword:{id:`qingyun_sword`,name:`青云剑诀`,icon:`🗡️`,desc:`以青云剑气斩向敌人，造成攻击力 150% 的伤害。`,dmgMult:1.5,cooldown:3,mpCost:5,range:4.5,type:`melee`,color:5887648},liehuo_palm:{id:`liehuo_palm`,name:`烈火掌`,icon:`🔥`,desc:`烈焰在周身炸开，对周围敌人造成攻击力 200% 的伤害。`,dmgMult:2,cooldown:8,mpCost:12,range:5.5,aoeRadius:4.5,type:`aoe`,color:16742972},yujian_shu:{id:`yujian_shu`,name:`御剑术`,icon:`⚡`,desc:`御使飞剑远程轰击敌人，造成攻击力 300% 的伤害。`,dmgMult:3,cooldown:15,mpCost:25,range:22,type:`projectile`,color:7321343},guixu_jianjue:{id:`guixu_jianjue`,name:`归墟剑诀`,icon:`🌌`,desc:`引动体内道种之力，向前斩出归墟剑气，对周围敌人造成攻击力 500% 的伤害。`,dmgMult:5,cooldown:30,mpCost:40,range:10,aoeRadius:9.5,type:`nova`,color:13077247}},wu=[`qingyun_sword`,`liehuo_palm`,`yujian_shu`,`guixu_jianjue`],Tu=class{constructor(){this.ctx=null,this.master=null,this.volume=.6,this.enabled=!0}ensure(){if(this.ctx)return this.ctx.state===`suspended`&&this.ctx.resume(),!0;try{let e=window.AudioContext||window.webkitAudioContext;return this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=this.volume,this.master.connect(this.ctx.destination),!0}catch{return this.enabled=!1,!1}}setVolume(e){this.volume=e,this.master&&(this.master.gain.value=e)}_tone({freq:e=440,endFreq:t=null,type:n=`sine`,dur:r=.15,vol:i=.2,delay:a=0,attack:o=.005}){if(!this.ensure()||!this.enabled)return;let s=this.ctx.currentTime+a,c=this.ctx.createOscillator(),l=this.ctx.createGain();c.type=n,c.frequency.setValueAtTime(e,s),t&&c.frequency.exponentialRampToValueAtTime(Math.max(1,t),s+r),l.gain.setValueAtTime(1e-4,s),l.gain.exponentialRampToValueAtTime(i,s+o),l.gain.exponentialRampToValueAtTime(1e-4,s+r),c.connect(l).connect(this.master),c.start(s),c.stop(s+r+.02)}_noise({dur:e=.2,vol:t=.15,delay:n=0,freq:r=800,q:i=1,type:a=`lowpass`}){if(!this.ensure()||!this.enabled)return;let o=this.ctx.currentTime+n,s=Math.max(1,Math.floor(this.ctx.sampleRate*e)),c=this.ctx.createBuffer(1,s,this.ctx.sampleRate),l=c.getChannelData(0);for(let e=0;e<s;e++)l[e]=(Math.random()*2-1)*(1-e/s);let u=this.ctx.createBufferSource();u.buffer=c;let d=this.ctx.createBiquadFilter();d.type=a,d.frequency.value=r,d.Q.value=i;let f=this.ctx.createGain();f.gain.setValueAtTime(t,o),f.gain.exponentialRampToValueAtTime(1e-4,o+e),u.connect(d).connect(f).connect(this.master),u.start(o)}click(){this._tone({freq:660,dur:.06,vol:.12,type:`sine`})}uiOpen(){this._tone({freq:520,endFreq:780,dur:.08,vol:.1})}uiClose(){this._tone({freq:780,endFreq:480,dur:.08,vol:.1})}attack(){this._noise({dur:.12,vol:.18,freq:2200,type:`bandpass`,q:2})}skill(){this._tone({freq:300,endFreq:900,dur:.2,vol:.16,type:`sawtooth`}),this._noise({dur:.18,vol:.1,freq:1600,type:`highpass`})}hit(){this._tone({freq:160,endFreq:80,dur:.09,vol:.2,type:`triangle`}),this._noise({dur:.06,vol:.08,freq:900})}crit(){this._tone({freq:520,endFreq:200,dur:.12,vol:.2,type:`square`}),this._noise({dur:.1,vol:.12,freq:3e3,type:`highpass`})}hurt(){this._tone({freq:120,endFreq:60,dur:.15,vol:.22,type:`sawtooth`})}monsterDie(){this._tone({freq:220,endFreq:50,dur:.35,vol:.18,type:`triangle`}),this._noise({dur:.2,vol:.08,freq:500})}pickup(){this._tone({freq:880,dur:.07,vol:.12}),this._tone({freq:1320,dur:.09,vol:.12,delay:.06})}levelup(){[523,659,784,1046].forEach((e,t)=>this._tone({freq:e,dur:.14,vol:.16,delay:t*.09}))}quest(){this._tone({freq:587,dur:.12,vol:.14}),this._tone({freq:880,dur:.16,vol:.14,delay:.1})}questDone(){[784,1046,1318].forEach((e,t)=>this._tone({freq:e,dur:.12,vol:.15,delay:t*.08}))}bossRoar(){this._tone({freq:90,endFreq:45,dur:.8,vol:.25,type:`sawtooth`}),this._noise({dur:.6,vol:.12,freq:300})}bossDie(){this._tone({freq:200,endFreq:30,dur:1.2,vol:.25,type:`triangle`}),this._noise({dur:1,vol:.15,freq:300})}seed(){this._tone({freq:120,endFreq:480,dur:1.4,vol:.18,type:`sine`})}thunder(){this._noise({dur:.7,vol:.3,freq:120,type:`lowpass`}),this._tone({freq:60,endFreq:30,dur:.5,vol:.25,type:`sawtooth`})}error(){this._tone({freq:220,endFreq:180,dur:.12,vol:.12,type:`square`})}setWeather(e){this.ensure()&&this.enabled&&(this._weather=e,this._stopLoop(),e===`rain`||e===`rain_heavy`?this._startLoop({type:`lowpass`,freq:900,vol:e===`rain_heavy`?.05:.028}):e===`fog`&&this._startLoop({type:`lowpass`,freq:320,vol:.018}))}_startLoop({type:e,freq:t,vol:n}){let r=this.ctx,i=Math.floor(r.sampleRate*2),a=r.createBuffer(1,i,r.sampleRate),o=a.getChannelData(0);for(let e=0;e<i;e++)o[e]=Math.random()*2-1;let s=r.createBufferSource();s.buffer=a,s.loop=!0;let c=r.createBiquadFilter();c.type=e,c.frequency.value=t;let l=r.createGain();l.gain.value=0,s.connect(c).connect(l).connect(this.master),s.start(),l.gain.linearRampToValueAtTime(n,r.currentTime+1.2),this._loop={src:s,gain:l,vol:n}}_stopLoop(){if(this._loop){try{let{src:e,gain:t}=this._loop;t.gain.linearRampToValueAtTime(0,this.ctx.currentTime+.5),e.stop(this.ctx.currentTime+.6)}catch{}this._loop=null}}},Eu=class{constructor({canvas:t,overlayEl:n,bridge:r}){e(this,`_loop`,()=>{if(this._disposed)return;this._raf=requestAnimationFrame(this._loop);let e=Math.min(.05,this.clock.getDelta());this._petEnsured||(this._petEnsured=!0,this._ensurePet()),this._update(e),this.renderer.render(this.scene,this.camera)}),e(this,`_onResize`,()=>{this._resize()}),e(this,`_onUnload`,()=>{this.bridge.game.save()}),this.canvas=t,this.overlayEl=n,this.bridge=r,this.events=new xu,this.audio=r.audio||new Tu,this.paused=!1,this.running=!1,this.clock=new Qa,this.monsters=[],this.projectiles=[],this.slashJobs=[],this.player=null,this.world=null,this.currentArea=null,this._saveT=0,this._posT=0,this._regenT=0,this._minimapT=0,this._respawnPending=!1,this._bossFinaleMonster=null,this._tmpSeq=1,this._petEnsured=!1,this.chest=null,this.thunder=null,this.thunderPos={x:-86,z:-84},this._thunderBolts=[],this.tianmen=null,this._disposed=!1}init(){let{player:e,inventory:t,quest:n,combat:r,game:i}=this.bridge,a=window.innerWidth<768,o=i.settings;if(this.renderer=new yl({canvas:this.canvas,antialias:!0,powerPreference:`high-performance`}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,o.quality===`low`?1:a?1.5:2)),this.renderer.outputColorSpace=Tt,this.renderer.shadowMap.enabled=!!o.shadows&&o.quality!==`low`,this.renderer.shadowMap.type=2,this.scene=new Ni,this.scene.background=new W(12575730),this.camera=new wi(55,1,.1,1400),this.camera.position.set(0,8,12),this.hemi=new Ua(13625087,5599322,.95),this.scene.add(this.hemi),this.sun=new Xa(16773328,1.15),this.sun.position.set(80,110,40),this.sun.castShadow=this.renderer.shadowMap.enabled,this.sun.castShadow){this.sun.shadow.mapSize.set(1024,1024);let e=this.sun.shadow.camera;e.left=-40,e.right=40,e.top=40,e.bottom=-40,e.near=10,e.far=300}this.scene.add(this.sun),this.scene.add(this.sun.target),this.world=new su(this.scene),this.world.hemi=this.hemi,this.world.sunLight=this.sun,this.world.ambient=this.ambient,this.effects=new _u(this.scene),this.overlay=new vu(this.overlayEl,this.camera),this.rig=new mu(this.camera);let s=Bl(e.gender===`女`?{robe:8014458,skin:15782072,hair:2759200,weapon:{color:13620442}}:{robe:4025180,skin:15254426,hair:2763312,weapon:{color:13620442}});this.player=new uu(s,[e.pos.x,e.pos.z]),this.scene.add(this.player.group),this._spawnMonsters();for(let e of this.world.npcObjs)this.overlay.addLabel(`npc-${e.id}`,e.group,eu[e.id].name,eu[e.id].id===`shenmi`?`#c9b8ff`:`#ffe9b8`,2.5);this.input=new hu(this.canvas,{onClick:(e,t)=>this._handleClick(e,t),onDrag:(e,t)=>this.rig.rotate(e,t),onZoom:e=>this.rig.zoom(e)}),this._resize(),window.addEventListener(`resize`,this._onResize),window.addEventListener(`beforeunload`,this._onUnload),this.rig.snap(this.player.position.clone().setY(1.6)),this._ensurePet(),this.running=!0}_ensurePet(){let e=this.bridge.player;!this.pet&&e.pet.id&&(this.pet=new bu,this.scene.add(this.pet.group),this._petAtkT=0)}syncPet(){this._ensurePet()}_spawnChest(e,t){if(this.chest)return;let n=new J,r=new Z({color:15251530,emissive:8934656}),i=new Z({color:5913122}),a=new K(new q(1.5,.7,1),i);a.position.y=.55;let o=new K(new q(1.5,.3,1),i);o.position.y=1.1;let s=new K(new q(1.58,.16,1.08),r);s.position.y=.82;let c=new K(new Y(.4,1.1,4.2,8),new G({color:16769162,transparent:!0,opacity:.28,blending:2,depthWrite:!1}));c.position.y=3.2,n.add(a,o,s,c),n.position.set(e,0,t),this.chest={group:n,t:0,taken:!1},this.scene.add(n),this.effects.burst(new V(e,1.4,t),16769162,16,3.5,.5,2.5,.9),this.bridge.game.toast(`秘境本源宝箱出现了！`,`quest`)}_updateChest(e){let t=this.chest;if(!t||t.taken)return;t.t+=e,t.group.rotation.y+=e*1.2,t.group.position.y=Math.sin(t.t*2)*.08;let n=this.player.position.x,r=this.player.position.z,i=t.group.position.x,a=t.group.position.z;Math.hypot(n-i,r-a)<2.8&&(t.taken=!0,this._takeChest())}_takeChest(){let e=this.chest,{inventory:t,game:n}=this.bridge,r=300+Math.floor(Math.random()*201);t.lingshi+=r,t.addItem(`daozhong_fragment`,2),t.addItem(`qianghuashi`,3),n.toast(`拾取宝箱：灵石 +${r}、道种碎片 ×2、强化石 ×3`,`success`);let i=Math.random();i<.3?(t.addItem(`zixiao_guiyuan`,1),n.toast(`获得：紫霄归元镜！`,`levelup`)):i<.5&&(t.addItem(`he_ling_egg`,1),n.toast(`获得：灵鹤之卵！`,`levelup`)),this.audio.pickup(),this.effects.burst(e.group.position.clone().setY(1.2),16769162,22,4,.5,2.5,1),this.scene.remove(e.group),e.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}),this.chest=null,n.save()}_updatePet(e){if(!this.pet&&this.bridge.player.pet.id&&this._ensurePet(),!this.pet)return;let t=this.bridge.player,n=this.player;if(this.pet.update(e,n.position,n.yaw,performance.now()/1e3),t.dead||this.paused)return;this._petAtkT=(this._petAtkT||0)+e;let r=t.petDef;if(!r||this._petAtkT<r.atkInterval)return;let i=this._nearestMonster(n.position,14);if(!i)return;this._petAtkT=0;let a=this.pet.group.position.clone().setY(1.2),o=i.position.clone().setY(1.2),s=o.distanceTo(a),c=Math.max(1,Math.ceil(s/.8));for(let e=1;e<=c;e++){let t=e/c;setTimeout(()=>{this._disposed||this.effects.burst(a.clone().lerp(o,t),11464928,2,1.6,.22,.5,.4)},e*55)}setTimeout(()=>{if(this._disposed||i.removed||i.state===`dead`)return;this.effects.hit(o,11464928,!1);let{dmg:e,crit:n}=yu.calcDamage(t.stats.atk,i.def.defense,r.atkScale,t.stats.crit,t.stats.critDmg);this._damageMonster(i,e,n)},c*55+60)}_spawnMonsters(){for(let e of le){let t=Su[e.monsterId];if(!t)continue;let n=D[e.areaId];for(let r=0;r<e.count;r++){let r=Math.random()*Math.PI*2,i=e.spread>0?Math.random()*e.spread:0,a=new pu(t,[n.center[0]+Math.cos(r)*i,n.center[1]+Math.sin(r)*i],this.world);this.scene.add(a.group),this.monsters.push(a)}}}spawnTempMonster(e,t,n){for(let r=0;r<n;r++){let n=Su[e];if(!n)continue;let r=Math.random()*Math.PI*2,i=new pu(n,[t.x+Math.cos(r)*3.5,t.z+Math.sin(r)*3.5],this.world,!0);i.aggro=!0,this.scene.add(i.group),this.monsters.push(i)}}start(){this.clock.start(),this._loop()}_update(e){let{player:t,combat:n,game:r}=this.bridge;this.overlay.resize(),this._comboT>0&&(this._comboT-=e),!this.paused&&!r.paused&&(this._updatePlayer(e),this._updateMonsters(e),this._updateProjectiles(e),this._updateSlashJobs(e),this._updateAreas(),this._updateVitals(e),this._updateQuestFx(e),this._updateEnvExtras(e),this._updatePet(e),this._updateChest(e),this._updateThunderTrial(e),this._updateTianmen(e),this._updateTianbei(e),this._updateWentian(e),n.tickCooldowns(e),this._autoSave(e),this._posSync(e)),this.rig.update(e,this.player.position.clone().setY(1.6)),this.world.update(e,this.camera),this.effects.update(this.paused?0:e),this.overlay.update();for(let e of this.monsters)e.removed||((e.aggro||e.hp<e.maxHp)&&(this.overlay.addBar(`m-${e.id}`,e.group,e.isBoss?4.4:2,e.isBoss?`#ff3344`:`#e0443c`),this.overlay.setBar(`m-${e.id}`,e.hpFrac)),e.state===`detect`?this.overlay.addLabel(`md-${e.id}`,e.group,`！`,`#ffd24a`,2.6):this.overlay.removeLabel(`md-${e.id}`));let i=this.monsters.find(e=>e.isBoss&&!e.removed&&(e.aggro||e.hp<e.maxHp));i?n.setBoss({id:i.id,name:i.def.name,hp:i.hp,maxHp:i.maxHp,phase:i.phase}):n.clearBoss();let a=this.monsters.find(e=>e.id===n.targetId&&!e.removed&&e.state!==`dead`);a?n.setTargetInfo({id:a.id,name:a.def.name,level:a.def.level,hp:Math.ceil(a.hp),maxHp:a.maxHp,frac:a.hpFrac,isBoss:a.isBoss}):n.targetId&&(n.setTarget(null),n.setTargetInfo(null)),this._minimapT+=e,this._minimapT>.25&&(this._minimapT=0,this._refreshMinimap()),this._respawnPending&&(this._respawnT-=e,this._respawnT<=0&&(this._respawnPending=!1,t.respawn(),this.player.revive(),this.player.group.position.set(j[0],0,j[1]),r.toast(`你已回到青云村`,`info`)))}_updatePlayer(e){let{player:t}=this.bridge,n=this.player;if(t.meditating){t.meditateTick(e),this._medT=(this._medT||0)+e,this._medT>=.35&&(this._medT=0,this.effects.burst(n.position.clone().setY(1.3),9099007,1,.6,.22,.35,.35)),n.update(e);return}let r=this.input.readMove();if(t.dead){n.setMove(null,!1);return}let i=!1,a=null;if(r.x!==0||r.y!==0){let e=Math.hypot(r.x,r.y)||1,t=-Math.sin(this.rig.yaw),n=-Math.cos(this.rig.yaw),o=Math.cos(this.rig.yaw),s=-Math.sin(this.rig.yaw);a={x:(t*r.y+o*r.x)/e,z:(n*r.y+s*r.x)/e},i=!0,this._clickMoveTarget=null}else if(this._clickMoveTarget){let e=this._clickMoveTarget.x,t=this._clickMoveTarget.z,r=e-n.position.x,o=t-n.position.z,s=Math.hypot(r,o);s>.5?(a={x:r/s,z:o/s},i=!0):this._clickMoveTarget=null}let o=this.input.readSprint(),s=!1;i&&o&&t.stamina>1?(s=!0,t.consumeStamina(26*e)):t.regenStamina(e);let c=s?12.5:5+t.stats.speed*.35;i&&a?(n.position.x+=a.x*c*e,n.position.z+=a.z*c*e,this._resolveCollisions(n),n.setMove(a,!0,s)):n.setMove(null,!1),n.position.x=lu(n.position.x,-300,300),n.position.z=lu(n.position.z,-300,300),n.update(e)}setMeditate(e){let t=this.bridge.player;if(e&&(t.dead||this.bridge.combat.targetId)){this.bridge.game.toast(`战斗中无法打坐`,`error`);return}t.meditating=e,this.player.meditate(e),this.bridge.game.toast(e?`开始打坐修炼……`:`结束打坐`,e?`quest`:`info`),this.audio[e?`uiOpen`:`uiClose`]()}_resolveCollisions(e){for(let t of this.world.colliders){let n=e.position.x-t.center[0],r=e.position.z-t.center[1],i=t.radius+.55,a=n*n+r*r;if(a<i*i&&a>1e-4){let o=Math.sqrt(a);e.position.x=t.center[0]+n/o*i,e.position.z=t.center[1]+r/o*i}}}_updateMonsters(e){let{player:t,quest:n}=this.bridge,r={playerPos:this.player.position.clone().setY(0),playerAlive:!t.dead,monsters:this.monsters,onBossPhase:(e,t)=>{let n=t?.def?.name||`黑风寨主`;this.bridge.game.toast(e===2?`${n}召来手下！`:`${n}释放杀招！`,`boss`),this.audio.bossRoar(),this.rig.addShake(.5)},onBossSummon:e=>{if(e.def.id===`zongzhu_boss`)this.spawnTempMonster(`moxiu`,e.position,2);else if(e.def.id===`tian_xianfeng`){let t=e.phase>=3?`tian_jiang`:`tian_bing`;this.spawnTempMonster(t,e.position,3)}else{let t=e.phase>=3?`black_guard`:`bandit`;this.spawnTempMonster(t,e.position,3)}},onBossSlash:e=>{let t=e.position.clone();this.effects.warningRing(t,5.5),this.slashJobs.push({pos:t,t:0}),this.audio.skill()},onBossFinale:e=>{this._bossFinaleMonster=e,this.audio.bossRoar(),this.events.emit(`boss-finale`,e)},onMonsterAttack:e=>this._monsterAttack(e)};for(let t of this.monsters)t.update(e,r),t.removed&&!t._unregistered&&(t._unregistered=!0,this.overlay.removeBar(`m-${t.id}`),t.isTemp||t.scheduleRespawn(t.isBoss?120:25)),!t.removed&&t._unregistered&&(t._unregistered=!1)}_monsterAttack(e){let{player:t,combat:n}=this.bridge;if(t.dead)return;let r=yu.calcMonsterDamage(e.def.attack,t.stats.def);t.takeDamage(r),n.triggerHurt(),this.audio.hurt(),this.rig.addShake(.18);let i=this.player.position.clone().setY(1.4);this.overlay.addDamage(i,String(r),{color:`#ff6b6b`}),t.dead&&this._startRespawn()}_startRespawn(){this._respawnPending||(this._respawnPending=!0,this._respawnT=2.6,this.player.die(),this.audio.bossDie())}_updateVitals(e){let{player:t}=this.bridge;this._regenT+=e,this._regenT>=3&&!t.dead&&(this._regenT=0,t.heal(t.maxHp*.02),t.restoreMp(t.maxMp*.03))}_updateQuestFx(e){if(this._questFxT=(this._questFxT||0)+e,this._questFxT<1)return;this._questFxT=0;let t=this.bridge.quest;for(let e of this.world.npcObjs){let n=t.questIconFor(e.id),r=`nq-${e.id}`;if(n){let t=n===`!`?`#ffd24a`:n===`?`?`#8fd0ff`:`#7fe0a0`;this.overlay.addLabel(r,e.group,n,t,3.3)}else this.overlay.removeLabel(r)}let n=t.navigation;if(n){if(!this._questMarker){let e=new Zi(new Li({map:Sl(),color:16765514,transparent:!0,opacity:.65,depthWrite:!1,blending:2}));e.scale.set(2.4,7,1),this._questMarker=e,this.scene.add(e)}this._questMarker.position.set(n.center[0],3.5+Math.sin(performance.now()/500)*.5,n.center[1])}else this._questMarker&&(this.scene.remove(this._questMarker),this._questMarker.material.dispose(),this._questMarker=null)}_updateEnvExtras(e){let t=this.world&&this.world.env;if(!t||(this._nightSpawnT=(this._nightSpawnT||0)+e,!t.isNight||this._nightSpawnT<45)||this.monsters.filter(e=>!e.removed&&e.state!==`dead`).length>26)return;this._nightSpawnT=0;let n=[{areaId:`qingshan`,monsterId:`qinglang`},{areaId:`heifenglin`,monsterId:`yaolang`}],r=n[Math.floor(Math.random()*n.length)],i=D[r.areaId];if(!i)return;let a=1+Math.floor(Math.random()*2);for(let e=0;e<a;e++){let e=Math.random()*Math.PI*2,t=Math.random()*26,n=[i.center[0]+Math.cos(e)*t,i.center[1]+Math.sin(e)*t],a=new pu(Su[r.monsterId],n,this.world,!0);this.scene.add(a.group),this.monsters.push(a)}}get _stats(){return this.bridge.player.stats}_nearestMonster(e,t){let n=null,r=t;for(let t of this.monsters){if(t.removed||t.state===`dead`||t.state===`finale`)continue;let i=t.group.position.distanceTo(e);i<r&&(r=i,n=t)}return n}_nearestMonstersInRadius(e,t){return this.monsters.filter(n=>!n.removed&&n.state!==`dead`&&n.group.position.distanceTo(e)<=t)}attack(){let{player:e,combat:t}=this.bridge;if(e.dead||this.paused||t.cooldowns.basic>0)return;this._comboT=this._comboT||0;let n=this._comboIdx=this._comboT>0?(this._comboIdx+1)%3:0;this._comboT=1.3;let r=[1,1.2,1.8];if(t.setCooldown(`basic`,[.42,.42,.6][n]),!this.player.playAttack(n))return;this.audio.attack();let i=this.player.position,a=null,o=t.targetId;if(o){let e=this.monsters.find(e=>e.id===o&&!e.removed&&e.state!==`dead`);e&&e.group.position.distanceTo(i)<=3.4&&(a=e)}if(a||(a=this._nearestMonster(i,3.4)),a){let t=a.position.x-i.x,o=a.position.z-i.z;this.player.faceAngle(Math.atan2(t,o)),this.effects.slash(a.position,this.player.yaw,n===2?16769184:13625560);let{dmg:s,crit:c}=yu.calcDamage(e.stats.atk,a.def.defense,r[n],e.stats.crit,e.stats.critDmg);this._damageMonster(a,s,c,n===2?{power:2,from:i}:null),n===2&&this.rig.addShake(.22)}else this.effects.slash(this.player.position,this.player.yaw,n===2?16769184:13625560)}castSkill(e){let{player:t,combat:n}=this.bridge;if(t.dead||this.paused)return;let r=Cu[e];if(!r||!t.skills[e]||n.cooldowns[e]>0)return;if(!t.consumeMp(r.mpCost)){this.bridge.game.toast(`灵力不足`,`error`),this.audio.error();return}n.setCooldown(e,r.cooldown),this.player.playAttack(),this.audio.skill();let i=this.player.position;if(r.type===`melee`){let e=this._nearestMonster(i,r.range);if(e){this.player.faceAngle(Math.atan2(e.position.x-i.x,e.position.z-i.z)),this.effects.swordWave(i.clone().setY(0),this.player.yaw,r.color,8.5,.5);let{dmg:n,crit:a}=yu.calcDamage(t.stats.atk,e.def.defense,r.dmgMult,t.stats.crit,t.stats.critDmg);this._damageMonster(e,n,a)}else this.effects.swordWave(i.clone().setY(0),this.player.yaw,r.color,8.5,.5)}else if(r.type===`aoe`){let e=this._nearestMonstersInRadius(i,r.aoeRadius);this.effects.fireRing(i,r.aoeRadius,r.color),this.rig.addShake(.3);for(let n of e){let{dmg:e,crit:i}=yu.calcDamage(t.stats.atk,n.def.defense,r.dmgMult,t.stats.crit,t.stats.critDmg);this._damageMonster(n,e,i)}}else if(r.type===`projectile`){let t=this._nearestMonster(i,r.range);t?(this.player.faceAngle(Math.atan2(t.position.x-i.x,t.position.z-i.z)),this._spawnProjectile(e,r,t)):this.bridge.game.toast(`附近没有敌人`,`error`)}else if(r.type===`nova`){let e=this.player.yaw;this.effects.warningRing(i.clone().setY(0),r.aoeRadius),this.effects.swordWave(i.clone().setY(0),e,r.color,15,.75),this.effects.swordWave(i.clone().setY(0),e+.35,16767053,10,.6),this.effects.swordWave(i.clone().setY(0),e-.35,16767053,10,.6),this.rig.addShake(.55);let n=this._nearestMonstersInRadius(i,r.aoeRadius);for(let e of n){let{dmg:n,crit:i}=yu.calcDamage(t.stats.atk,e.def.defense,r.dmgMult,t.stats.crit,t.stats.critDmg);this._damageMonster(e,n,i)}n.length===0&&this.bridge.game.toast(`归墟剑气破空而出……`,`skill`)}}_spawnProjectile(e,t,n){let r=this.bridge.player,i=this.player.position.clone().setY(1.4),a=n.position.clone().setY(1);this.effects.flyingSword(i,a,t.color,.55),setTimeout(()=>{if(!this._disposed&&!n.removed&&n.state!==`dead`){this.effects.hit(n.position.clone().setY(1.2),t.color,!1),this.effects.burst(n.position.clone().setY(1.4),t.color,8,3,.4,2,.6);let{dmg:e,crit:i}=yu.calcDamage(r.stats.atk,n.def.defense,t.dmgMult,r.stats.crit,r.stats.critDmg);this._damageMonster(n,e,i)}},520)}_updateProjectiles(e){}_updateSlashJobs(e){let{player:t}=this.bridge;for(let n=this.slashJobs.length-1;n>=0;n--){let r=this.slashJobs[n];if(r.t+=e,r.t>=1.2){if(this.slashJobs.splice(n,1),t.dead)continue;if(Math.hypot(this.player.position.x-r.pos.x,this.player.position.z-r.pos.z)<=5.5){let e=yu.calcMonsterDamage(Su.boss.attack*1.5,t.stats.def);t.takeDamage(e),this.bridge.combat.triggerHurt(),this.audio.hurt(),this.rig.addShake(.4),this.overlay.addDamage(this.player.position.clone().setY(1.4),String(e),{color:`#ff5050`}),this.effects.burst(this.player.position.clone().setY(1.2),16724804,10,4,.4,2,.6),t.dead&&this._startRespawn()}}}}_damageMonster(e,t,n,r=null){if(!(e.removed||e.state===`dead`)){if(e.takeDamage(t),r){let t=e.position.x-r.from.x,n=e.position.z-r.from.z,i=Math.hypot(t,n)||1;e.knockback({x:t/i,z:n/i},r.power)}this.overlay.addDamage(e.position.clone().setY(e.isBoss?3.6:1.9),String(t),{crit:n}),this.effects.hit(e.position.clone().setY(1.2),n?16765517:16773312,n),this.audio[n?`crit`:`hit`](),n&&this.rig.addShake(.22),e.hp<=0&&this._killMonster(e)}}_killMonster(e){let{player:t,inventory:n,quest:r,game:i}=this.bridge;if(e._looted)return;e._looted=!0,e.die(),this.audio.monsterDie(),t.addExp(e.def.exp)&&(this.audio.levelup(),i.toast(`突破！等级提升至 Lv.${t.level}`,`levelup`),this.rig.addShake(.3),this.effects.burst(this.player.position.clone().setY(1.4),16769162,18,4,.5,3,1),i.save()),t.pet.id&&t.petAddExp(Math.round(e.def.exp*.12))&&(i.toast(`灵兽升级：${t.pet.name} Lv.${t.pet.level}`,`levelup`),this.audio.pickup()),e.def.id===`mijing_yaojiang`?this._spawnChest(188,78):this.overlay.addFloat(e.position.clone().setY(2.6),`经验 +${e.def.exp}`,`#ffe9b8`);let a=Math.floor(e.def.lingshi[0]+Math.random()*(e.def.lingshi[1]-e.def.lingshi[0]+1));n.lingshi+=a,this.overlay.addFloat(e.position.clone().setY(3.2),`灵石 +${a}`,`#8fd0ff`);for(let r of e.def.drops)if(!(r.itemId===`black_seed`&&t.daozhong.obtained)&&Math.random()<r.chance){let t=r.min+Math.floor(Math.random()*(r.max-r.min+1)),a=n.addItem(r.itemId,t),o=M(r.itemId);this.overlay.addFloat(e.position.clone().setY(3.8),`获得 ${o?o.name:r.itemId}${t>1?` ×`+t:``}`,`#ffd84d`),!a&&o&&!o.special&&i.toast(`背包已满`,`error`)}r.addKill(e.def.id),this._autoSave(99),e.isBoss&&e.def.id===`boss`?(this.audio.bossDie(),setTimeout(()=>{this._disposed||this.events.emit(`seed-reveal`)},900)):e.isBoss&&this.audio.bossDie()}_updateAreas(){let{quest:e,game:t}=this.bridge,n=this.player.position.x,r=this.player.position.z;for(let i of Object.values(D))if(Math.hypot(n-i.center[0],r-i.center[1])<i.radius){this.currentArea!==i.id&&(this.currentArea=i.id,e.visitArea(i.id),t.toast(`进入：${i.name}`,`area`));return}this.currentArea!==null&&(this.currentArea=null)}teleportTo(e){let{game:t}=this.bridge,n=D[e];if(!n)return{ok:!1,msg:`未知区域`};let r=this.bridge.player;if(n.minLevel&&r.level<n.minLevel)return t.toast(`境界不足：前往「${n.name}」需金丹一层（Lv.${n.minLevel}）`,`error`),{ok:!1,msg:`境界不足`};let[i,a]=n.center,[o=0,s=0]=n.spawn||[],c=i+o,l=a+s;return this.player.group.position.set(c,0,l),this.rig.snap(this.player.position.clone().setY(1.6)),this.currentArea=n.id,t.toast(`已传送至：${n.name}`,`area`),this.audio.teleport?.(),this.effects.burst(new V(c,1.2,l),8378623,20,4,.5,2.5,.9),t.save(),this._refreshMinimap(),{ok:!0}}_handleClick(e,t){let{game:n}=this.bridge;if(n.paused||Object.values(n.ui).some(Boolean))return;let r=this.canvas.getBoundingClientRect(),i=new B(e/r.width*2-1,-(t/r.height)*2+1),a=new po;a.setFromCamera(i,this.camera);let o=null,s=6;for(let e of this.world.npcObjs){let t=a.intersectObjects([e.group],!0);t.length>0&&t[0].distance<s&&(s=t[0].distance,o={kind:`npc`,id:e.id})}for(let e of this.monsters){if(e.removed||e.state===`dead`)continue;let t=a.intersectObjects([e.group],!0);t.length>0&&t[0].distance<30&&(!o||t[0].distance<s)&&(s=t[0].distance,o={kind:`monster`,id:e.id})}if(o?.kind===`npc`){this.events.emit(`npc`,o.id),this.audio.click();return}if(o?.kind===`monster`){let e=this.monsters.find(e=>e.id===o.id);e&&(this.bridge.combat.setTarget(e.id),this.audio.click());return}let c=new na(new V(0,1,0),0),l=new V;a.ray.intersectPlane(c,l)&&(this._clickMoveTarget={x:l.x,z:l.z})}finishBossFinale(){let e=this._bossFinaleMonster;e&&(this._bossFinaleMonster=null,e.die(),this._killMonster(e))}_updateThunderTrial(e){if(this._thunderBolts.length)for(let t=this._thunderBolts.length-1;t>=0;t--){let n=this._thunderBolts[t];n.t-=e;let r=Math.max(0,n.t/n.life);n.mesh.material.opacity=r*.85,n.mesh.scale.set(1,Math.max(.1,r*2),1),n.t<=0&&(this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this._thunderBolts.splice(t,1))}let{quest:t,game:n}=this.bridge,r=this.thunder,i=this.player?Math.hypot(this.player.position.x-this.thunderPos.x,this.player.position.z-this.thunderPos.z)<4.2:!1,a=t.list.q15_jiutian;if(n.ui.thunderReady=!r&&i&&a&&a.state===`active`,r&&!r.failed&&(r.timer-=e,r.timer<=0)){if(r.count++,r.count>9){this._endThunderTrial(!0);return}this._strikeLightning(r.count),r.timer=1.55}}startThunderTrial(){let{quest:e,player:t,game:n}=this.bridge,r=e.list.q15_jiutian;!this.thunder&&r&&r.state===`active`&&n.ui.thunderReady&&(t.hp<=0||(this.thunder={active:!0,count:0,timer:1.2,failed:!1},this.bridge.game.ui.thunderReady=!1,this.audio.thunder(),this.bridge.game.toast(`九天神雷将至！撑过九道天雷，淬体破境！`,`quest`)))}_strikeLightning(e){let{player:t}=this.bridge,n=t.position.x,r=t.position.z,i=26+Math.random()*6,a=new K(new Y(.12,.34,i,6,1,!0),new G({color:14676223,transparent:!0,opacity:.85,blending:2,depthWrite:!1}));a.position.set(n,i/2+1.5,r),a.rotation.z=(Math.random()-.5)*.06,this.scene.add(a),this._thunderBolts.push({mesh:a,t:.42,life:.42}),this.effects.burst(new V(n,1.2,r),13625599,16,5,.45,3,1),this.effects.warningRing(new V(n,.1,r),3.2),this.audio.thunder(),this.rig.addShake(.55);let o=Math.max(1,Math.floor(t.maxHp*.08));t.hp=Math.max(0,t.hp-o),this.bridge.game.toast(`天劫 ${e}/9 · 雷霆淬体 -${o}`,e%3==0?`quest`:`info`),t.hp<=0&&(this.thunder.failed=!0,this.bridge.game.toast(`渡劫失败……气血枯竭，天雷散去`,`error`),t.hp=Math.max(1,Math.floor(t.maxHp*.3)),this.bridge.game.save())}_endThunderTrial(e){let t=this.thunder;if(this.thunder=null,this.bridge.game.ui.thunderReady=!1,!e||t.failed)return;let{quest:n,player:r,game:i}=this.bridge;this.effects.burst(new V(this.player.position.x,2,this.player.position.z),16767053,30,7,.6,4,1.2),this.effects.burst(new V(this.player.position.x,2,this.player.position.z),9099007,22,5,.5,3,1),this.audio.levelup(),this.rig.addShake(.4);let a=r.realmText;r.level<28&&(r.level=28),r.hp=r.maxHp,r.mp=r.maxMp,i.toast(`渡劫成功！雷劫淬体，脱胎换骨 —— ${r.realmText}！`,`levelup`),a!==r.realmText&&i.toast(`境界突破：${a} → ${r.realmText}`,`levelup`),n.list.q15_jiutian.state===`active`&&n.complete(`q15_jiutian`),i.save()}_updateTianmen(e){if(this.tianmen){this.tianmen.t+=e;let t=this.tianmen.group;t.rotation.y+=e*.25;let n=.75+Math.sin(this.tianmen.t*2.4)*.25;this.tianmen.glow.material.opacity=n*.55,this.tianmen.sheet.material.opacity=.28+Math.sin(this.tianmen.t*3.1)*.14;return}let{quest:t,inventory:n,game:r}=this.bridge,i=t.list.q18_tianmen_open;if(!i||i.state!==`active`||this.currentArea!==`qingyunshan`||n.count(`tianmen_ling`)<2)return;let a=this.player.position.x,o=this.player.position.z;Math.hypot(a-4,o- -78)>6||this._openTianmen()}_openTianmen(){let{quest:e,inventory:t,game:n}=this.bridge;t.removeItem(`tianmen_ling`,2);let r=new J,i=new G({color:16767053,transparent:!0,opacity:.9,side:2}),a=new G({color:16771488,transparent:!0,opacity:.5,blending:2,depthWrite:!1}),o=new K(new wa(4.4,.35,10,48),i);o.rotation.x=Math.PI/2,r.add(o);let s=new K(new wa(3.9,.18,8,48),i);s.rotation.x=Math.PI/2,r.add(s);let c=new K(new xa(8.4,14),a);r.add(c);let l=new K(new _a(4.3,40),a);l.rotation.x=-Math.PI/2,l.position.y=.15,r.add(l),r.position.set(4,7,-78),this.scene.add(r),this.tianmen={group:r,sheet:c,glow:l,t:0},this.effects.burst(new V(4,4,-78),16767053,36,8,.6,5,1.4),this.effects.burst(new V(4,4,-78),16773312,26,6,.5,4,1),this.audio.seed(),this.rig.addShake(.5),n.toast(`仙门令共鸣！残阵苏醒……`,`quest`),setTimeout(()=>{n.toast(`天门，开了！`,`levelup`),n.toast(`光门之后……是另一个世界。`,`quest`)},900),setTimeout(()=>{e.list.q18_tianmen_open.state===`active`&&e.complete(`q18_tianmen_open`),n.save()},1600)}_updateTianbei(e){let{quest:t,game:n}=this.bridge,r=t.list.q20_tiandao_bei;if(!r||r.state!==`active`||this.currentArea!==`xianyu`)return;let i=this.player.position.x,a=this.player.position.z;Math.hypot(i-220,a-177.4)>6||this._revealTianbei()}_revealTianbei(){let{quest:e,game:t}=this.bridge;this.effects.burst(new V(220,2.5,177.4),9425151,26,5,.5,3,1),this.audio.seed(),t.toast(`天道碑上，只有一行字……`,`quest`),setTimeout(()=>{t.toast(`「飞升之后，方知仙途尽头，不过另一座牢笼。」`,`levelup`)},1e3),setTimeout(()=>{t.toast(`黑色道种……剧烈地跳动起来！`,`quest`),e.list.q20_tiandao_bei.state===`active`&&e.complete(`q20_tiandao_bei`),t.save()},2e3)}_updateWentian(e){let{quest:t,game:n}=this.bridge,r=t.list.q25_wentian;if(!r||r.state!==`active`||this.currentArea!==`tianxuan`)return;let i=this.player.position.x,a=this.player.position.z;Math.hypot(i-300,a-232)>6||this._openWentian()}_openWentian(){let{quest:e,game:t}=this.bridge;this.effects.burst(new V(300,3,232),9067240,30,6,.6,3.5,1),this.audio.seed(),this.rig.addShake(.4),t.toast(`你推开了问天阁的门……`,`quest`),setTimeout(()=>{t.toast(`阁内没有神像——只有一座巨大的黑色齿轮，一刻不停地运转。`,`levelup`)},1e3),setTimeout(()=>{t.toast(`你明白了：天道……从来就不是神。它是一套规矩。`,`boss`)},2e3),setTimeout(()=>{t.toast(`黑色道种骤然亮起，仿佛认出了什么……`,`quest`),e.list.q25_wentian.state===`active`&&e.complete(`q25_wentian`),t.save()},3100)}_autoSave(e){this._saveT+=e,this._saveT>=20&&(this._saveT=0,this.bridge.game.save())}_posSync(e){this._posT+=e,this._posT>=.4&&(this._posT=0,this.bridge.player.pos.x=this.player.position.x,this.bridge.player.pos.z=this.player.position.z)}_refreshMinimap(){this._minimap={player:{x:this.player.position.x,z:this.player.position.z,yaw:this.player.yaw},monsters:this.monsters.filter(e=>!e.removed&&e.state!==`dead`).map(e=>({x:e.position.x,z:e.position.z,boss:e.isBoss,aggro:e.aggro})),npcs:this.world.npcObjs.map(e=>({x:e.pos[0],z:e.pos[1]}))}}get minimap(){return this._minimap}_resize(){let e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.overlay.resize()}dispose(){this._disposed=!0,cancelAnimationFrame(this._raf),window.removeEventListener(`resize`,this._onResize),window.removeEventListener(`beforeunload`,this._onUnload),this.input?.dispose(),this.events.clear(),this.monsters.forEach(e=>e.dispose()),this.projectiles.forEach(e=>{this.scene.remove(e.mesh),e.mat.dispose()}),this.world?.dispose(),this.effects?.dispose(),this.overlay?.dispose(),this.chest&&(this.scene.remove(this.chest.group),this.chest.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}),this.chest=null);for(let e of this._thunderBolts)this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose();this._thunderBolts=[],this.tianmen&&(this.scene.remove(this.tianmen.group),this.tianmen.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}),this.tianmen=null),this.pet?.dispose?.(),this.player?.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}),this.renderer?.dispose()}},Du={class:`scene-overlay-root`},Ou={__name:`GameDamageText`,setup(e,{expose:t}){let n=y(null);return o(()=>{}),t({root:n}),(e,t)=>(i(),f(`div`,Du))}},ku={__name:`GameScene`,emits:[`npc`,`boss-finale`,`seed-reveal`,`env`],setup(e,{expose:t,emit:n}){let a=n,s=re(),u=A(),d=ce(),p=te(),m=P(),g=y(null),_=y(null),v=y(null),b=null,x=null,S=y({period:`day`,weather:`clear`,label:`白天`,weatherLabel:`晴天`}),C={day:`白天`,dusk:`傍晚`,night:`夜晚`,dawn:`凌晨`},w={clear:`晴天`,cloudy:`阴天`,rain:`小雨`,rain_heavy:`大雨`,fog:`雾天`},T=null,E={player:u,inventory:d,quest:p,combat:m,game:s,get audio(){return x}};return r(()=>s.paused,e=>{b&&(b.paused=e)}),o(()=>{x=new Tu,x.setVolume(s.settings.volume),b=new Eu({canvas:_.value,overlayEl:v.value.$el,bridge:E}),b.init(),s.engine=b,window.__engine=b,b.events.on(`npc`,e=>{a(`npc`,e)}),b.events.on(`boss-finale`,e=>{a(`boss-finale`,e)}),b.events.on(`seed-reveal`,()=>{a(`seed-reveal`)}),b.start();let e=ue(()=>{let e=b&&b.world&&b.world.env;e&&(S.value={period:e.period,weather:e.weather,label:C[e.period]||`白天`,weatherLabel:w[e.weather]||`晴天`},a(`env`,S.value),e.weather!==T&&(T=e.weather,x.setWeather(e.weather)))},1e3);b._envTimer=e}),c(()=>{b&&(clearInterval(b._envTimer),x&&x.setWeather(`clear`),b.dispose()),b=null,s.engine=null}),t({getEngine:()=>b,getAudio:()=>x,envInfo:S}),(e,t)=>(i(),f(`div`,{class:`game-scene`,ref_key:`wrap`,ref:g},[h(`canvas`,{ref_key:`canvasEl`,ref:_,class:`scene-canvas`},null,512),l(Ou,{ref_key:`overlayEl`,ref:v,class:`scene-overlay`},null,512)],512))}},Au={class:`player-info panel`},ju={class:`pi-avatar`},Mu={class:`pi-main`},Nu={class:`pi-name-row`},Pu={class:`pi-name`},Fu={class:`pi-level`},Iu={class:`pi-realm`},Lu={class:`pi-bar hp`},Ru={class:`pi-bar mp`},zu={class:`pi-exp`},Bu={class:`pi-bar st`},Vu={__name:`GamePlayerInfo`,setup(e){let t=A();re();let n=u(()=>t.hp/t.maxHp*100),r=u(()=>t.mp/t.maxMp*100),o=u(()=>Math.min(100,t.exp/t.expNext*100)),c=u(()=>Math.min(100,t.stamina/t.maxStamina*100));return(e,l)=>(i(),f(`div`,Au,[h(`div`,ju,[h(`span`,null,s(x(t).name.charAt(0)),1)]),h(`div`,Mu,[h(`div`,Nu,[h(`span`,Pu,s(x(t).name),1),h(`span`,Fu,`Lv.`+s(x(t).level),1),h(`span`,Iu,s(x(t).realmText),1)]),h(`div`,Lu,[h(`div`,{class:`pi-bar-fill`,style:a({width:x(n)+`%`})},null,4),h(`span`,null,s(Math.ceil(x(t).hp))+`/`+s(x(t).maxHp),1)]),h(`div`,Ru,[h(`div`,{class:`pi-bar-fill`,style:a({width:x(r)+`%`})},null,4),h(`span`,null,s(Math.ceil(x(t).mp))+`/`+s(x(t).maxMp),1)]),h(`div`,zu,[h(`div`,{class:`pi-exp-fill`,style:a({width:x(o)+`%`})},null,4),h(`span`,null,`经验 `+s(x(t).exp)+`/`+s(x(t).expNext),1)]),h(`div`,Bu,[h(`div`,{class:`pi-bar-fill`,style:a({width:x(c)+`%`,background:x(c)<25?`#e0443c`:`#7ec8ff`})},null,4),h(`span`,null,`体力 `+s(Math.ceil(x(t).stamina))+`/`+s(x(t).maxStamina),1)])])]))}},Hu={class:`minimap-title`},Uu=128,Wu={__name:`GameMiniMap`,setup(e){let t=re(),n=y(null),r=y(`荒野`);function a(){let e=t.engine?.currentArea;r.value=e&&D[e]?D[e].name:`荒野`}function l(){t.paused||Object.values(t.ui).some(Boolean)||(t.ui.worldMap=!0,t.closeDialogue())}function u(){let e=t.engine,r=n.value;if(!e||!r)return;let i=r.getContext(`2d`);i.clearRect(0,0,Uu,Uu),i.fillStyle=`rgba(10,20,14,0.82)`,i.fillRect(0,0,Uu,Uu),i.strokeStyle=`rgba(150,220,180,0.5)`,i.lineWidth=1,i.beginPath(),i.arc(Uu/2,Uu/2,46,0,Math.PI*2),i.stroke();let a=e.minimap;if(!a)return;let o=e=>Uu/2+e/256*(Uu/2),s=e=>Uu/2+e/256*(Uu/2);i.fillStyle=`#ffe9b8`;for(let e of a.npcs)i.fillRect(o(e.x)-1.5,s(e.z)-1.5,3,3);for(let e of a.monsters){i.fillStyle=e.boss?`#ff3344`:e.aggro?`#ff6b4d`:`#e08a5a`;let t=e.boss?3.5:2;i.beginPath(),i.arc(o(e.x),s(e.z),t,0,Math.PI*2),i.fill()}i.fillStyle=`#ffffff`,i.beginPath(),i.arc(o(a.player.x),s(a.player.z),3.2,0,Math.PI*2),i.fill(),i.strokeStyle=`#ffffff`,i.beginPath(),i.moveTo(o(a.player.x),s(a.player.z)),i.lineTo(o(a.player.x)+Math.sin(a.player.yaw)*8,s(a.player.z)+Math.cos(a.player.yaw)*8),i.stroke()}let d=0;function m(){a(),u(),d=requestAnimationFrame(m)}return o(()=>{m()}),c(()=>cancelAnimationFrame(d)),(e,t)=>(i(),f(`div`,{class:`minimap panel`,onClick:l},[h(`div`,Hu,[p(s(x(r)),1),t[0]||(t[0]=h(`em`,{class:`mm-tip`},`点击查看世界地图`,-1))]),h(`canvas`,{ref_key:`cvs`,ref:n,width:Uu,height:Uu},null,512)]))}},Gu={class:`quest-panel`},Ku={class:`qmini-name`},qu={key:0,class:`qmini-progress`},Ju={key:1,class:`qmini-nav`},Yu={key:1,class:`qmini-empty`},Xu={class:`panel-head`},Zu={key:0,class:`quest-nav`},Qu={class:`quest-list`},$u={class:`q-item-title`},ed={class:`q-item-desc`},td={class:`q-item-meta`},nd={key:0},rd={key:1},id={key:1,class:`q-done`},ad={key:2,class:`q-avail`},od={key:3,class:`q-lock`},sd={class:`q-reward`},cd={class:`quest-list`},ld={class:`q-item-title`},ud={class:`q-item-desc`},dd={class:`q-item-meta`},fd={key:0},pd={key:1,class:`q-done`},md={key:2,class:`q-avail`},hd={class:`q-reward`},gd={__name:`GameQuestPanel`,setup(e){let t=te(),r=re(),a=u(()=>t.activeQuest),o=e=>k[e]||N[e],c=e=>o(e).title,l=e=>o(e).type;function m(e){let t=[];if(e.reward.exp&&t.push(`经验${e.reward.exp}`),e.reward.lingshi&&t.push(`灵石${e.reward.lingshi}`),e.reward.items)for(let[n,r]of Object.entries(e.reward.items))t.push(`道具×${r}`);return t.join(`、`)||`—`}return(e,u)=>(i(),f(`div`,Gu,[h(`div`,{class:`quest-mini panel`,onClick:u[0]||(u[0]=e=>x(r).togglePanel(`quest`))},[u[3]||(u[3]=h(`div`,{class:`qmini-title`},`主线任务`,-1)),x(a)?(i(),f(v,{key:0},[h(`div`,Ku,s(c(x(a))),1),l(x(a))===`kill`?(i(),f(`div`,qu,s(x(t).list[x(a)].progress)+`/`+s(o(x(a)).target.count),1)):d(``,!0),x(t).navigation?(i(),f(`div`,Ju,` 🧭 目标：`+s(x(t).navigation.areaName)+` · `+s(x(t).navigation.dist)+`m `,1)):d(``,!0)],64)):(i(),f(`div`,Yu,`暂无任务`))]),x(r).ui.quest?(i(),f(`div`,{key:0,class:`quest-full modal-panel`,onClick:u[2]||(u[2]=E(()=>{},[`stop`]))},[h(`div`,Xu,[u[4]||(u[4]=h(`span`,null,`任务`,-1)),h(`button`,{class:`btn-close`,onClick:u[1]||(u[1]=e=>x(r).closePanels())},`✕`)]),x(t).navigation?(i(),f(`div`,Zu,[u[5]||(u[5]=p(` 🧭 `,-1)),h(`b`,null,s(x(t).navigation.areaName),1),p(` — `+s(x(t).navigation.questTitle)+` · 距离 `+s(x(t).navigation.dist)+`m `,1)])):d(``,!0),u[8]||(u[8]=h(`div`,{class:`quest-sec`},`主线`,-1)),h(`div`,Qu,[(i(!0),f(v,null,S(x(ie),e=>(i(),f(`div`,{key:e,class:n([`quest-item`,`qstate-${x(t).list[e].state}`])},[h(`div`,$u,[u[6]||(u[6]=h(`span`,{class:`q-state-dot`},null,-1)),p(` `+s(x(k)[e].title),1)]),h(`div`,ed,s(x(k)[e].desc),1),h(`div`,td,[x(t).list[e].state===`active`?(i(),f(v,{key:0},[x(k)[e].type===`kill`?(i(),f(`span`,nd,`进度 `+s(x(t).list[e].progress)+`/`+s(x(k)[e].target.count),1)):(i(),f(`span`,rd,`前往目标区域`))],64)):x(t).list[e].state===`done`?(i(),f(`span`,id,`已完成`)):x(t).list[e].state===`can_accept`?(i(),f(`span`,ad,`可接取`)):(i(),f(`span`,od,`未解锁`)),h(`span`,sd,`奖励：`+s(m(x(k)[e])),1)])],2))),128))]),u[9]||(u[9]=h(`div`,{class:`quest-sec`},`支线`,-1)),h(`div`,cd,[(i(!0),f(v,null,S(x(oe),e=>(i(),f(`div`,{key:e,class:n([`quest-item`,`qstate-${x(t).list[e].state}`])},[h(`div`,ld,[u[7]||(u[7]=h(`span`,{class:`q-state-dot`},null,-1)),p(` `+s(x(N)[e].title),1)]),h(`div`,ud,s(x(N)[e].desc),1),h(`div`,dd,[x(t).list[e].state===`active`?(i(),f(`span`,fd,`进度 `+s(x(t).list[e].progress)+`/`+s(x(N)[e].target.count),1)):x(t).list[e].state===`done`?(i(),f(`span`,pd,`已完成`)):(i(),f(`span`,md,`可接取（`+s(x(eu)[x(N)[e].npc]?.name)+`）`,1)),h(`span`,hd,`奖励：`+s(m(x(N)[e])),1)])],2))),128))])])):d(``,!0)]))}},_d={class:`fmsg-stack`},vd={__name:`GameFloatingMessage`,setup(e){let t=re();return(e,r)=>(i(),f(`div`,_d,[l(T,{name:`fmsg`},{default:_(()=>[(i(!0),f(v,null,S(x(t).toasts,e=>(i(),f(`div`,{key:e.id,class:n([`fmsg`,`fmsg-${e.type}`])},s(e.text),3))),128))]),_:1})]))}},yd={key:0,class:`target-info`},bd={class:`ti-name`},xd={class:`ti-lv`},Sd={class:`ti-title`},Cd={key:0,class:`ti-boss`},wd={class:`ti-hp`},Td=t({__name:`GameTargetInfo`,setup(e){let t=P(),n=u(()=>Math.max(0,Math.min(100,(t.target?t.target.frac:0)*100)));return(e,r)=>x(t).target?(i(),f(`div`,yd,[h(`div`,bd,[h(`span`,xd,`Lv.`+s(x(t).target.level),1),h(`span`,Sd,s(x(t).target.name),1),x(t).target.isBoss?(i(),f(`span`,Cd,`首领`)):d(``,!0)]),h(`div`,wd,[h(`div`,{class:`ti-hp-fill`,style:a({width:x(n)+`%`,background:x(t).target.isBoss?`#ff3344`:`#e0a83c`})},null,4),h(`span`,null,s(x(t).target.hp)+`/`+s(x(t).target.maxHp),1)])])):d(``,!0)}},[[`__scopeId`,`data-v-00ccdf67`]]),Ed={key:0,class:`boss-bar-wrap`},Dd={class:`boss-name`},Od={class:`boss-hp`},kd=t({__name:`GameBossHealthBar`,setup(e){let t=P(),o=u(()=>Su.boss),c=u(()=>t.boss?t.boss.hp/t.boss.maxHp*100:0),l=y(!1),m=null;return r(()=>t.boss,(e,t)=>{e&&!t&&(l.value=!0,clearTimeout(m),m=setTimeout(()=>{l.value=!1},2200))}),(e,r)=>(i(),b(C,{name:`boss-fade`},{default:_(()=>[x(t).boss?(i(),f(`div`,Ed,[h(`div`,{class:n([`boss-title`,{show:x(l)}])},`BOSS`,2),h(`div`,{class:n([`boss-bar`,{shake:x(l)}])},[h(`div`,Dd,[p(s(x(t).boss.name)+` `,1),h(`em`,null,`Lv.`+s(x(o).level)+` · 阶段`+s(x(t).boss.phase),1)]),h(`div`,Od,[h(`div`,{class:`boss-hp-fill`,style:a({width:x(c)+`%`})},null,4)])],2)])):d(``,!0)]),_:1}))}},[[`__scopeId`,`data-v-c41f0f50`]]),Ad={class:`skill-bar`},jd=[`onClick`],Md={class:`skill-icon`},Nd={class:`skill-name`},Pd={key:0,class:`skill-cd`},Fd={class:`skill-key pc-only`},Id={__name:`GameSkillBar`,setup(e){let t=A(),r=P(),a=re(),o={qingyun_sword:`1`,liehuo_palm:`2`,yujian_shu:`3`,guixu_jianjue:`4`},c=e=>r.cooldowns[e]||0;function l(){let e=a.engine;e&&e.attack()}function u(e){if(!t.skills[e])return;let n=a.engine;n&&n.castSkill(e)}return(e,r)=>(i(),f(`div`,Ad,[h(`button`,{class:`skill-btn attack`,onClick:l},[...r[0]||(r[0]=[h(`span`,{class:`skill-icon`},`⚔️`,-1),h(`span`,{class:`skill-name`},`普攻`,-1),h(`span`,{class:`skill-key pc-only`},`空格`,-1)])]),(i(!0),f(v,null,S(x(wu),e=>(i(),f(`button`,{class:n([`skill-btn`,{locked:!x(t).skills[e],ready:x(t).skills[e]&&c(e)<=0,ultimate:e===`guixu_jianjue`}]),key:e,onClick:t=>u(e)},[h(`span`,Md,s(x(Cu)[e].icon),1),h(`span`,Nd,s(x(Cu)[e].name),1),c(e)>0?(i(),f(`span`,Pd,s(Math.ceil(c(e))),1)):d(``,!0),h(`span`,Fd,s(o[e]),1)],10,jd))),128))]))}},Ld={class:`action-buttons`},Rd={key:0,class:`act-cd`},zd=[`onPointerdown`],Bd={key:0,class:`act-cd`},Vd={__name:`GameActionButtons`,setup(e){let t=A(),r=P(),a=re(),o=e=>r.cooldowns[e]||0;function c(){let e=a.engine;e&&e.attack()}function l(e){if(!t.skills[e])return;let n=a.engine;n&&n.castSkill(e)}return(e,r)=>(i(),f(`div`,Ld,[h(`button`,{class:`act-btn attack`,onPointerdown:c},[r[0]||(r[0]=p(` ⚔️`,-1)),r[1]||(r[1]=h(`br`,null,null,-1)),r[2]||(r[2]=h(`span`,null,`普攻`,-1)),o(`basic`)>0?(i(),f(`span`,Rd,s(Math.ceil(o(`basic`))),1)):d(``,!0)],32),(i(!0),f(v,null,S(x(wu),e=>(i(),f(`button`,{class:n([`act-btn skill`,{locked:!x(t).skills[e],ultimate:e===`guixu_jianjue`}]),key:e,onPointerdown:t=>l(e)},[p(s(x(Cu)[e].icon),1),r[3]||(r[3]=h(`br`,null,null,-1)),h(`span`,null,s(x(Cu)[e].name),1),o(e)>0?(i(),f(`span`,Bd,s(Math.ceil(o(e))),1)):d(``,!0)],42,zd))),128))]))}},Hd={class:`joy-base`},Ud={__name:`GameVirtualJoystick`,setup(e){let t=re(),n=y(null),r=g({x:0,y:0}),o=u(()=>({transform:`translate(${r.x}px, ${r.y}px)`})),s=!1,c=0,l=0;function d(e){s=!0;let t=e.touches[0];n.value.getBoundingClientRect(),c=t.clientX,l=t.clientY,r.x=0,r.y=0,_(0,0)}function p(e){if(!s||!e.touches.length)return;let t=e.touches[0],n=t.clientX-c,i=t.clientY-l,a=Math.hypot(n,i);a>42&&(n=n/a*42,i=i/a*42),r.x=n,r.y=i,_(n/42,i/42)}function m(){if(!s)return;s=!1,r.x=0,r.y=0;let e=t.engine;e&&e.input.resetJoystick()}function _(e,n){let r=t.engine;r&&r.input.setJoystick(e,n)}return(e,t)=>(i(),f(`div`,{class:`joystick`,ref_key:`zone`,ref:n,onTouchstart:E(d,[`prevent`]),onTouchmove:E(p,[`prevent`]),onTouchend:E(m,[`prevent`]),onTouchcancel:E(m,[`prevent`])},[h(`div`,Hd,[h(`div`,{class:`joy-knob`,style:a(x(o))},null,4)])],544))}},Wd={class:`panel-head`},Gd={class:`currency`},Kd={class:`bag-grid`},qd=[`onClick`],Jd={class:`bag-icon`},Yd={key:0,class:`bag-count`},Xd={key:1,class:`bag-str`},Zd={key:0,class:`item-detail`},Qd={key:0},$d={key:0,class:`id-stats`},ef={class:`id-desc`},tf={class:`id-actions`},nf={__name:`GameInventoryPanel`,setup(e){let t=ce(),r=re(),o=y(-1),c={atk:`攻击`,def:`防御`,hp:`生命`,mp:`灵力`,crit:`暴击`,critDmg:`暴伤`,speed:`速度`},l=u(()=>{if(o.value<0)return null;let e=t.slots[o.value];return e?M(e.itemId):null}),m=u(()=>o.value>=0?t.slots[o.value]:null);function g(e){return M(e.itemId)||{name:`?`,quality:0,icon:`❔`}}function _(e,n,r){let i=r?.strLevel?t.strengthenedValue(n,r.strLevel):n;return e===`crit`||e===`critDmg`?`${cu(i)}%`:cu(i)}let b=u(()=>{let e=m.value;return e?`${10*((e.strLevel||0)+1)} 灵石 / ${1+Math.floor((e.strLevel||0)/3)} 强化石`:``});function C(e){o.value=o.value===e?-1:e}function w(){if(!(o.value<0)&&t.useConsumable(o.value)){let e=l.value;r.toast(e?.hatch?`灵兽孵化：${e.hatch===`he_ling`?`青羽灵鹤`:``}`:`使用成功`,`success`),r.engine?.audio?.click(),e?.hatch&&r.engine?.syncPet?.()}}function T(){o.value<0||(t.equipFromSlot(o.value)?(r.toast(`已装备`,`success`),r.engine?.audio?.pickup()):r.toast(`无法装备`,`error`))}function D(){if(o.value<0)return;let e=t.slots[o.value],n=t.strengthen(e.itemId,e.strLevel||0,o.value);r.toast(n.msg,n.ok?`success`:`error`),r.engine?.audio?.[n.ok?`levelup`:`error`]()}function O(){o.value<0||(t.sellItem(o.value),r.toast(`已出售`,`info`),r.engine?.audio?.pickup())}function k(){o.value<0||(t.removeFromSlot(o.value,t.slots[o.value].count),r.toast(`已丢弃`,`info`))}return(e,u)=>(i(),f(`div`,{class:`inventory-panel modal-panel`,onClick:u[1]||(u[1]=E(()=>{},[`stop`]))},[h(`div`,Wd,[u[2]||(u[2]=h(`span`,null,`背包`,-1)),h(`span`,Gd,`💎 `+s(x(t).lingshi)+` ｜ 🔮 `+s(x(t).qianghuashi),1),h(`button`,{class:`btn-close`,onClick:u[0]||(u[0]=e=>x(r).closePanels())},`✕`)]),h(`div`,Kd,[(i(!0),f(v,null,S(x(t).slots,(e,r)=>(i(),f(`div`,{key:r,class:n([`bag-slot`,{filled:e,selected:x(o)===r}]),style:a(e?{borderColor:x(t).qualityColor(g(e).quality)}:{}),onClick:e=>C(r)},[e?(i(),f(v,{key:0},[h(`span`,Jd,s(g(e).icon),1),e.count>1?(i(),f(`span`,Yd,`×`+s(e.count),1)):d(``,!0),e.strLevel?(i(),f(`span`,Xd,`+`+s(e.strLevel),1)):d(``,!0)],64)):d(``,!0)],14,qd))),128))]),x(l)?(i(),f(`div`,Zd,[h(`div`,{class:`id-name`,style:a({color:x(t).qualityColor(x(l).quality)})},[p(s(x(l).name),1),x(m)?.strLevel?(i(),f(`span`,Qd,` +`+s(x(m).strLevel),1)):d(``,!0),h(`em`,null,`[`+s(x(t).qualityName(x(l).quality))+`]`,1)],4),x(l).stats?(i(),f(`div`,$d,[(i(!0),f(v,null,S(x(l).stats,(e,t)=>(i(),f(`span`,{key:t},s(c[t]||t)+` `+s(_(t,e,x(m))),1))),128))])):d(``,!0),h(`div`,ef,s(x(l).desc),1),h(`div`,tf,[x(l).type===`consumable`||x(l).hatch?(i(),f(`button`,{key:0,class:`btn gold`,onClick:w},s(x(l).hatch?`孵化`:`使用`),1)):d(``,!0),x(l).slot?(i(),f(`button`,{key:1,class:`btn gold`,onClick:T},`装备`)):d(``,!0),x(l).strengthenable&&x(m)&&x(m).strLevel<20?(i(),f(`button`,{key:2,class:`btn gold`,onClick:D},` 强化（`+s(x(b))+`） `,1)):d(``,!0),x(l).sell>0?(i(),f(`button`,{key:3,class:`btn`,onClick:O},`出售 `+s(x(l).sell)+` 灵石`,1)):d(``,!0),h(`button`,{class:`btn danger`,onClick:k},`丢弃`)])])):d(``,!0)]))}},rf={class:`panel-head`},af={class:`equip-rpg`},of={class:`er-col`},sf=[`onClick`],cf={class:`es-label`},lf={class:`es-icon`},uf={key:0,class:`es-str`},df={class:`er-center`},ff={class:`er-figure`},pf={class:`er-name`},mf={class:`er-power`},hf={class:`er-stats`},gf={class:`er-col`},_f=[`onClick`],vf={class:`es-label`},yf={class:`es-icon`},bf={key:0,class:`es-str`},xf={key:0,class:`equip-detail`},Sf={key:0},Cf={class:`id-stats`},wf={class:`id-actions`},Tf={__name:`GameEquipmentPanel`,setup(e){let t=ce(),r=A(),o=re(),c={atk:`攻击`,def:`防御`,hp:`生命`,mp:`灵力`,crit:`暴击`,critDmg:`暴伤`,speed:`速度`},l=[`helmet`,`weapon`,`necklace`,`bracer`,`treasure`],m=[`armor`,`belt`,`boots`,`ring`],g=[{k:`hp`,name:`生命`},{k:`mp`,name:`灵力`},{k:`atk`,name:`攻击`},{k:`def`,name:`防御`},{k:`speed`,name:`速度`},{k:`crit`,name:`暴击`}],_=e=>e===`crit`?`${r.stats.crit}%`:r.stats[e],b=y(null),C=u(()=>b.value?t.equipment[b.value]:null);function w(e){return M(e)||{name:`?`,icon:`❔`,quality:0}}function T(e,n,r){let i=r?.strLevel?t.strengthenedValue(n,r.strLevel):n;return e===`crit`||e===`critDmg`?`${cu(i)}%`:cu(i)}function D(e){b.value=b.value===e?null:e}function O(e){let n=t.unequip(e);o.toast(n?`已卸下`:`背包已满`,n?`info`:`error`),b.value=null}return(e,u)=>(i(),f(`div`,{class:`equip-panel modal-panel`,onClick:u[2]||(u[2]=E(()=>{},[`stop`]))},[h(`div`,rf,[u[3]||(u[3]=h(`span`,null,`装备`,-1)),h(`button`,{class:`btn-close`,onClick:u[0]||(u[0]=e=>x(o).closePanels())},`✕`)]),h(`div`,af,[h(`div`,of,[(i(),f(v,null,S(l,e=>h(`div`,{key:e,class:n([`equip-slot`,{filled:x(t).equipment[e],sel:x(b)===e}]),onClick:t=>D(e)},[h(`span`,cf,s(x(ne)[e]),1),x(t).equipment[e]?(i(),f(v,{key:0},[h(`span`,lf,s(w(x(t).equipment[e].itemId).icon),1),x(t).equipment[e].strLevel?(i(),f(`span`,uf,`+`+s(x(t).equipment[e].strLevel),1)):d(``,!0)],64)):d(``,!0)],10,sf)),64))]),h(`div`,df,[h(`div`,ff,s(x(r).name.charAt(0)),1),h(`div`,pf,s(x(r).name),1),h(`div`,mf,`战力 `+s(x(r).power),1),h(`div`,hf,[(i(),f(v,null,S(g,e=>h(`div`,{key:e.k,class:`er-stat`},[h(`span`,null,s(e.name),1),h(`b`,null,s(_(e.k)),1)])),64))])]),h(`div`,gf,[(i(),f(v,null,S(m,e=>h(`div`,{key:e,class:n([`equip-slot`,{filled:x(t).equipment[e],sel:x(b)===e}]),onClick:t=>D(e)},[h(`span`,vf,s(x(ne)[e]),1),x(t).equipment[e]?(i(),f(v,{key:0},[h(`span`,yf,s(w(x(t).equipment[e].itemId).icon),1),x(t).equipment[e].strLevel?(i(),f(`span`,bf,`+`+s(x(t).equipment[e].strLevel),1)):d(``,!0)],64)):d(``,!0)],10,_f)),64))])]),x(C)?(i(),f(`div`,xf,[h(`div`,{class:`id-name`,style:a({color:x(t).qualityColor(w(x(C).itemId).quality)})},[p(s(w(x(C).itemId).name),1),x(C).strLevel?(i(),f(`span`,Sf,` +`+s(x(C).strLevel),1)):d(``,!0)],4),h(`div`,Cf,[(i(!0),f(v,null,S(w(x(C).itemId).stats,(e,t)=>(i(),f(`span`,{key:t},s(c[t]||t)+` `+s(T(t,e,x(C))),1))),128))]),h(`div`,wf,[h(`button`,{class:`btn danger`,onClick:u[1]||(u[1]=e=>O(x(b)))},`卸下`)])])):d(``,!0)]))}},Ef={class:`panel-head`},Df={class:`char-head`},Of={class:`char-avatar`},kf={class:`char-basic`},Af={class:`char-name`},jf={class:`char-gender`},Mf={class:`char-realm`},Nf={class:`char-power`},Pf={class:`tabs`},Ff=[`onClick`],If={key:0,class:`stat-list`},Lf={class:`stat-row`},Rf={class:`stat-row`},zf={class:`stat-row`},Bf={class:`stat-row`},Vf={class:`stat-row`},Hf={class:`stat-row`},Uf={class:`stat-row`},Wf={class:`stat-row`},Gf={key:1,class:`gongfa-list`},Kf={class:`gf-name`},qf={class:`gf-desc`},Jf={key:2,class:`realm-view`},Yf={class:`realm-current`},Xf={class:`realm-path`},Zf={key:0,class:`realm-break`},Qf=[`disabled`],$f={key:1,class:`realm-tip`},ep={class:`realm-meditate`},tp={key:3,class:`pet-view`},np={key:0,class:`pet-card`},rp={class:`pet-icon`},ip={class:`pet-name`},ap={class:`pet-exp`},op={class:`pet-desc`},sp={key:1,class:`pet-empty`},cp={key:4,class:`seed-view`},lp={class:`seed-icon`},up={class:`seed-name`},dp={key:0},fp={key:0,class:`seed-desc`},pp={key:1,class:`seed-desc`},mp={key:2,class:`seed-desc`},hp=[`disabled`],gp={key:4,class:`seed-max`},_p={__name:`GameCharacterPanel`,setup(e){let t=A(),r=re(),a=ce(),o=u(()=>a.count(`daozhong_fragment`)>=3&&a.lingshi>=500);function c(){if(!o.value){r.toast(`道种碎片不足（需 3 枚）或灵石不足（需 500）`,`error`);return}a.removeItem(`daozhong_fragment`,3),a.lingshi-=500;let e=t.upgradeDaozhong();r.toast(e.msg,e.ok?`success`:`error`),r.engine?.audio?.levelup()}let l=u(()=>a.count(`tupodan`)>=1&&a.lingshi>=300);function g(){if(!l.value){r.toast(`需要突破丹 ×1 与灵石 300`,`error`);return}a.removeItem(`tupodan`,1),a.lingshi-=300;let e=t.breakRealm();r.toast(e.msg,e.ok?`success`:`error`),r.engine?.audio?.levelup(),r.engine?.rig?.addShake?.(.4)}function _(){r.engine?.setMeditate(!t.meditating)}let b=[{id:`stats`,name:`属性`},{id:`gongfa`,name:`功法`},{id:`realm`,name:`境界`},{id:`seed`,name:`道种`},{id:`pet`,name:`灵兽`}],C=ee,w=u(()=>Math.min(C.length-1,Math.floor((t.level-1)/9))),T=y(`stats`);return(e,u)=>(i(),f(`div`,{class:`char-panel modal-panel`,onClick:u[1]||(u[1]=E(()=>{},[`stop`]))},[h(`div`,Ef,[u[2]||(u[2]=h(`span`,null,`角色`,-1)),h(`button`,{class:`btn-close`,onClick:u[0]||(u[0]=e=>x(r).closePanels())},`✕`)]),h(`div`,Df,[h(`div`,Of,s(x(t).name.charAt(0)),1),h(`div`,kf,[h(`div`,Af,[p(s(x(t).name)+` `,1),h(`span`,jf,s(x(t).gender),1)]),h(`div`,Mf,`境界：`+s(x(t).realmText),1),h(`div`,Nf,`战力：`+s(x(t).power),1)])]),h(`div`,Pf,[(i(),f(v,null,S(b,e=>h(`button`,{key:e.id,class:n([`tab`,{on:x(T)===e.id}]),onClick:t=>T.value=e.id},s(e.name),11,Ff)),64))]),x(T)===`stats`?(i(),f(`div`,If,[h(`div`,Lf,[u[3]||(u[3]=h(`span`,null,`生命`,-1)),h(`b`,null,s(Math.ceil(x(t).hp))+` / `+s(x(t).maxHp),1)]),h(`div`,Rf,[u[4]||(u[4]=h(`span`,null,`灵力`,-1)),h(`b`,null,s(Math.ceil(x(t).mp))+` / `+s(x(t).maxMp),1)]),h(`div`,zf,[u[5]||(u[5]=h(`span`,null,`攻击`,-1)),h(`b`,null,s(x(t).stats.atk),1)]),h(`div`,Bf,[u[6]||(u[6]=h(`span`,null,`防御`,-1)),h(`b`,null,s(x(t).stats.def),1)]),h(`div`,Vf,[u[7]||(u[7]=h(`span`,null,`速度`,-1)),h(`b`,null,s(x(t).stats.speed),1)]),h(`div`,Hf,[u[8]||(u[8]=h(`span`,null,`暴击`,-1)),h(`b`,null,s(x(t).stats.crit)+`%`,1)]),h(`div`,Uf,[u[9]||(u[9]=h(`span`,null,`暴伤`,-1)),h(`b`,null,s(x(t).stats.critDmg)+`%`,1)]),h(`div`,Wf,[u[10]||(u[10]=h(`span`,null,`经验`,-1)),h(`b`,null,s(x(t).exp)+` / `+s(x(t).expNext),1)])])):x(T)===`gongfa`?(i(),f(`div`,Gf,[u[12]||(u[12]=m(`<div class="gongfa-item"><div class="gf-name">基础吐纳术 <em>被动 · 已习得</em></div><div class="gf-desc">灵力恢复 +5%</div></div><div class="gongfa-item"><div class="gf-name">青云剑诀 <em>被动 · 已习得</em></div><div class="gf-desc">攻击 +10%</div></div>`,2)),h(`div`,{class:n([`gongfa-item`,{locked:!x(t).gongfa.jiutian_jing}])},[h(`div`,Kf,[u[11]||(u[11]=p(`九天剑经 `,-1)),h(`em`,null,s(x(t).gongfa.jiutian_jing?`被动 · 已习得`:`被动`),1)]),h(`div`,qf,`攻击 +15%`+s(x(t).gongfa.jiutian_jing?``:`（完成宗门任务获得）`),1)],2),u[13]||(u[13]=h(`div`,{class:`gongfa-item locked`},[h(`div`,{class:`gf-name`},`太古神诀`),h(`div`,{class:`gf-desc`},`？？？（未解锁）`)],-1))])):x(T)===`realm`?(i(),f(`div`,Jf,[h(`div`,Yf,`当前境界：`+s(x(t).realmText),1),h(`div`,Xf,[(i(!0),f(v,null,S(x(C),e=>(i(),f(`span`,{key:e,class:n({done:x(C).indexOf(e)<x(w)})},s(e),3))),128))]),x(t).canBreak?(i(),f(`div`,Zf,[u[14]||(u[14]=h(`div`,{class:`realm-tip`},`境界已至圆满，可突破（全属性 +5%）`,-1)),h(`button`,{class:`btn gold`,disabled:!x(l),onClick:g},`突破（灵石 300 ｜ 突破丹 ×1）`,8,Qf)])):(i(),f(`div`,$f,`境界圆满后消耗灵石与突破丹突破，属性永久提升。突破丹可从魔修与宗门强敌身上获得。`)),h(`div`,ep,[u[15]||(u[15]=h(`div`,{class:`realm-tip`},`打坐修炼：持续获得经验与灵力（PC 按 X / 移动端点击下方按钮）`,-1)),h(`button`,{class:n([`btn`,{gold:x(t).meditating}]),onClick:_},s(x(t).meditating?`停止打坐`:`开始打坐`),3)])])):x(T)===`pet`?(i(),f(`div`,tp,[x(t).pet.id?(i(),f(`div`,np,[h(`div`,rp,s(x(t).petDef.icon),1),h(`div`,ip,[p(s(x(t).pet.name)+` `,1),h(`em`,null,`Lv.`+s(x(t).pet.level),1)]),h(`div`,ap,`经验 `+s(x(t).pet.exp)+` / `+s(x(t).petExpNext),1),h(`div`,op,s(x(t).petDef.desc),1),u[16]||(u[16]=h(`div`,{class:`pet-buff`},`出战加成：攻击 +8% ｜ 速度 +2 ｜ 暴击 +2%`,-1))])):(i(),f(`div`,sp,[...u[17]||(u[17]=[h(`div`,{class:`pet-egg`},`🥚`,-1),h(`div`,null,`尚未拥有灵兽。`,-1),h(`div`,{class:`pet-tip`},`秘境妖将有几率掉落「灵鹤之卵」，使用后即可孵化灵兽。`,-1)])]))])):x(T)===`seed`?(i(),f(`div`,cp,[h(`div`,{class:n([`seed-card`,{active:x(t).daozhong.obtained}])},[h(`div`,lp,s(x(t).daozhong.obtained?`🌱`:`🌑`),1),h(`div`,up,[p(s(x(t).daozhong.obtained?`归墟道种`:`？？？`)+` `,1),x(t).daozhong.obtained?(i(),f(`em`,dp,`Lv.`+s(x(t).daozhong.level),1)):d(``,!0)]),x(t).daozhong.obtained&&x(t).daozhong.level>=2?(i(),f(`div`,fp,`攻击 +10%，生命 +10%，灵力 +10%。本源觉醒，隐隐传来古老的脉搏。`)):x(t).daozhong.obtained?(i(),f(`div`,pp,`攻击 +5%，生命 +5%。它在你丹田深处微微搏动，仿佛在……呼吸。`)):(i(),f(`div`,mp,`无法鉴定。一枚来自未知时代的黑色种子，你感应不到它的任何气息。`)),x(t).daozhong.obtained&&x(t).daozhong.level<2?(i(),f(`button`,{key:3,class:`btn gold seed-up`,disabled:!x(o),onClick:c},` 升级（道种碎片 `+s(x(a).count(`daozhong_fragment`))+`/3 ｜ 灵石 500） `,9,hp)):d(``,!0),x(t).daozhong.obtained&&x(t).daozhong.level>=2?(i(),f(`div`,gp,`道种已达当前上限，后续章节继续觉醒`)):d(``,!0)],2)])):d(``,!0)]))}},vp={class:`panel-head`},yp={class:`wm-grid`},bp=[`onClick`],xp={class:`wm-name`},Sp={class:`wm-desc`},Cp={key:0,class:`wm-tag`},wp={key:1,class:`wm-tag locked-tag`},Tp={__name:`GameWorldMap`,setup(e){let t=re(),r=[],a=u(()=>Object.values(D).map(e=>({...e,locked:r.includes(e.id)})));function o(e){if(e.locked){t.toast(`此区域尚未开放`,`error`);return}t.engine?.teleportTo(e.id)?.ok&&(t.ui.worldMap=!1,t.closeDialogue())}return(e,r)=>(i(),f(`div`,{class:`worldmap panel`,onClick:r[1]||(r[1]=E(()=>{},[`stop`]))},[h(`div`,vp,[r[2]||(r[2]=h(`span`,null,`世界地图`,-1)),h(`button`,{class:`panel-x`,onClick:r[0]||(r[0]=e=>x(t).ui.worldMap=!1)},`×`)]),r[3]||(r[3]=h(`div`,{class:`wm-hint`},`点击区域传送 · 消耗灵力 0 · 已开放区域`,-1)),h(`div`,yp,[(i(!0),f(v,null,S(a.value,e=>(i(),f(`button`,{key:e.id,class:n([`wm-cell`,{locked:e.locked,here:e.id===x(t).engine?.currentArea}]),onClick:t=>o(e)},[h(`span`,xp,s(e.name),1),h(`span`,Sp,s(e.desc),1),e.minLevel?(i(),f(`span`,Cp,`Lv.`+s(e.minLevel),1)):e.locked?(i(),f(`span`,wp,`？？？`)):d(``,!0)],10,bp))),128))])]))}},Ep={class:`menu-card panel`},Dp={__name:`GameMenu`,setup(e){let t=re(),n=w();function r(){t.closePanels(),t.resume(),t.engine?.audio?.uiClose()}function a(){t.save()?(t.toast(`存档成功`,`success`),t.engine?.audio?.pickup()):t.toast(`存档失败`,`error`)}function o(){t.save(),t.phase=`menu`,t.paused=!1,t.closePanels(),n.push(`/`)}return(e,n)=>x(t).ui.menu?(i(),f(`div`,{key:0,class:`game-menu`,onClick:n[1]||(n[1]=E(()=>{},[`stop`]))},[h(`div`,Ep,[n[2]||(n[2]=h(`div`,{class:`menu-logo`},`归墟仙途`,-1)),h(`button`,{class:`btn gold big`,onClick:r},`继续游戏`),h(`button`,{class:`btn big`,onClick:a},`保存游戏`),h(`button`,{class:`btn big`,onClick:n[0]||(n[0]=e=>{x(t).ui.settings=!0,x(t).ui.menu=!1})},`设置`),h(`button`,{class:`btn big`,onClick:o},`返回主菜单`),n[3]||(n[3]=h(`div`,{class:`menu-tip`},`WASD 移动 ｜ 鼠标点击行走 ｜ 左键拖拽转视角 ｜ 1/2/3 技能`,-1))])])):d(``,!0)}},Op={class:`game-hud`},kp={class:`hud-top-right`},Ap={key:0,class:`env-tag`},jp={class:`env-period`},Mp={class:`hud-btns pc-only`},Np={key:0,class:`trial-wrap`},Pp={key:1,class:`trial-progress`},Fp={class:`trial-bar`},Ip={class:`trial-num`},Lp={class:`hud-bottom-right`},Rp={class:`hud-joystick-wrap mobile-only`},zp={class:`hud-nav mobile-only`},Bp=t({__name:`GameHUD`,props:{env:{type:Object,default:null}},setup(e){let t=re(),u=P(),p=A(),m=y(0),g=y(null),_=null;function S(){t.engine?.startThunderTrial()}function C(){let e=t.engine?.thunder;g.value=e&&!e.failed?{count:e.count}:(e&&e.failed,null)}o(()=>{_=ue(C,150)}),c(()=>{clearInterval(_)});function w(){t.engine?.setMeditate(!p.meditating)}function T(e){t.engine?.input?.setSprint(e)}r(()=>u.hurtFlash,()=>{m.value+=1});function D(){t.closePanels(),t.ui.settings=!0}function O(){t.closePanels(),t.pause(),t.ui.menu=!0,t.engine?.audio?.uiOpen()}return(r,o)=>(i(),f(`div`,Op,[(i(),f(`div`,{class:`hurt-flash`,key:x(m)})),l(Vu,{onClick:o[0]||(o[0]=e=>x(t).openPanel(`character`))}),h(`div`,kp,[e.env?(i(),f(`div`,Ap,[h(`span`,jp,s(e.env.label),1),h(`span`,{class:n([`env-weather`,`w-`+e.env.weather])},s(e.env.weatherLabel),3)])):d(``,!0),l(Wu),h(`div`,Mp,[h(`button`,{class:`hud-btn`,onClick:o[1]||(o[1]=e=>x(t).togglePanel(`inventory`))},`背包`),h(`button`,{class:`hud-btn`,onClick:o[2]||(o[2]=e=>x(t).togglePanel(`character`))},`角色`),h(`button`,{class:`hud-btn`,onClick:o[3]||(o[3]=e=>x(t).togglePanel(`equipment`))},`装备`),h(`button`,{class:`hud-btn`,onClick:o[4]||(o[4]=e=>x(t).togglePanel(`quest`))},`任务`),h(`button`,{class:`hud-btn`,onClick:D},`设置`),h(`button`,{class:`hud-btn`,onClick:O},`菜单`)])]),l(gd),l(Td),l(vd),l(kd),x(t).ui.thunderReady||x(g)?(i(),f(`div`,Np,[x(t).ui.thunderReady&&!x(g)?(i(),f(v,{key:0},[o[14]||(o[14]=h(`div`,{class:`trial-hint`},`渡劫台 · 金丹圆满方可引动九天神雷`,-1)),h(`button`,{class:`trial-btn`,onClick:S},`⚡ 引动天劫`)],64)):d(``,!0),x(g)?(i(),f(`div`,Pp,[o[15]||(o[15]=h(`span`,{class:`trial-label`},`天劫`,-1)),h(`div`,Fp,[h(`div`,{class:`trial-fill`,style:a({width:x(g).count/9*100+`%`})},null,4)]),h(`span`,Ip,s(x(g).count)+` / 9`,1)])):d(``,!0)])):d(``,!0),h(`div`,Lp,[l(Id,{class:`pc-only`}),l(Vd,{class:`mobile-only`})]),h(`div`,Rp,[l(Ud),h(`button`,{class:`sprint-btn`,onPointerdown:o[5]||(o[5]=e=>T(!0)),onPointerup:o[6]||(o[6]=e=>T(!1)),onPointerleave:o[7]||(o[7]=e=>T(!1)),onTouchstart:o[8]||(o[8]=E(e=>T(!0),[`prevent`])),onTouchend:o[9]||(o[9]=E(e=>T(!1),[`prevent`]))},`疾`,32)]),h(`div`,zp,[h(`button`,{onClick:o[10]||(o[10]=e=>x(t).togglePanel(`character`))},`角色`),h(`button`,{onClick:o[11]||(o[11]=e=>x(t).togglePanel(`inventory`))},`背包`),h(`button`,{onClick:o[12]||(o[12]=e=>x(t).togglePanel(`quest`))},`任务`),h(`button`,{onClick:o[13]||(o[13]=e=>x(t).togglePanel(`equipment`))},`装备`),h(`button`,{class:n({on:x(p).meditating}),onClick:w},`修炼`,2),h(`button`,{onClick:O},`菜单`)]),x(t).ui.inventory?(i(),b(nf,{key:1})):d(``,!0),x(t).ui.equipment?(i(),b(Tf,{key:2})):d(``,!0),x(t).ui.character?(i(),b(_p,{key:3})):d(``,!0),x(t).ui.worldMap?(i(),b(Tp,{key:4})):d(``,!0),l(se),l(Dp)]))}},[[`__scopeId`,`data-v-55834d1c`]]),Vp={class:`dlg-portrait`},Hp={class:`dlg-body`},Up={class:`dlg-title`},Wp={class:`dlg-typed`},Gp={key:0,class:`dlg-cursor`},Kp={key:0,class:`dlg-quest`},qp={class:`dlg-actions`},Jp={class:`dlg-sub`},Yp={class:`smith-list`},Xp={class:`sm-icon`},Zp={class:`sm-stats`},Qp=[`disabled`,`onClick`],$p={class:`dlg-sub`},em={class:`shop-list`},tm={class:`shop-item`},nm={class:`shop-item`},rm={class:`dlg-sub`},im={class:`shop-list`},am={class:`shop-item`},om=[`disabled`],sm={class:`dlg-sub`},cm={key:0,class:`shop-list`},lm={class:`dlg-sub`},um={class:`shop-list`},dm={class:`sm-icon`},fm={class:`sm-stats`},pm={class:`shop-cost`},mm=[`disabled`,`onClick`],hm={class:`dlg-sub`},gm={class:`shop-list`},_m={class:`shop-item`},vm=[`disabled`],ym={__name:`GameDialoguePanel`,setup(e){let t=re(),n=te(),o=ce(),c=A(),l=y(`talk`),m=u(()=>{if(!j.value)return[];let e=[j.value.greet];for(let t of j.value.lines||[])e.push(t.text);return e}),g=y(0),_=y(``),b=y(!0),C=y(!1),w=null;function T(e){g.value=e,_.value=``,b.value=!0,C.value=!1,D()}function D(){let e=m.value[g.value]||``;_.value.length<e.length?(_.value=e.slice(0,_.value.length+1),w=setTimeout(D,45)):b.value=!1}function ee(){clearTimeout(w),g.value<m.value.length-1?T(g.value+1):(C.value=!0,_.value=m.value[g.value]||``)}let j=u(()=>t.dialogue.npcId?eu[t.dialogue.npcId]:null),ne=u(()=>j.value?O[j.value.id]?(O[j.value.id]||[]).find(e=>n.list[e]?.state===`can_accept`)||null:Object.keys(N).find(e=>N[e].npc===j.value.id&&n.list[e]?.state===`can_accept`)||null:null),ie=u(()=>ne.value?k[ne.value]||N[ne.value]:null);function P(e){return M(e)||{name:`?`,quality:0,icon:`❔`}}function oe(e){let t=M(e.itemId);return t?.stats?Object.entries(t.stats).map(([t,n])=>`${se[t]||t} ${o.strengthenedValue(n,e.strLevel||0)}`).join(` `):``}let se={atk:`攻`,def:`防`,hp:`生`,mp:`灵`,crit:`暴`,critDmg:`暴伤`,speed:`速`},le=[{itemId:`xuantie_bracer`,price:220},{itemId:`zixia_pao`,price:700},{itemId:`qingyun_sword`,price:600},{itemId:`tupodan`,price:300},{itemId:`daozhong_fragment`,price:200}],ue=u(()=>{let e=[];for(let t of ae){let n=o.equipment[t];n&&e.push({key:`eq-${t}`,itemId:n.itemId,strLevel:n.strLevel||0,fromSlot:null})}return o.slots.forEach((t,n)=>{t&&M(t.itemId)?.strengthenable&&e.push({key:`slot-${n}`,itemId:t.itemId,strLevel:t.strLevel||0,fromSlot:n})}),e});function de(){ne.value&&(n.accept(ne.value)&&t.engine?.audio?.quest(),C.value=!1,T(0))}function fe(e){let n=o.strengthen(e.itemId,e.strLevel,e.fromSlot);t.toast(n.msg,n.ok?`success`:`error`),t.engine?.audio?.[n.ok?`levelup`:`error`]()}function F(e,n,r){if(o.lingshi<n*r){t.toast(`灵石不足`,`error`),t.engine?.audio?.error();return}if(!o.addItem(e,r)){t.toast(`背包已满`,`error`);return}o.lingshi-=n*r,t.toast(`购入 ${M(e).name} ×${r}`,`success`),t.engine?.audio?.pickup()}let pe=u(()=>200+c.level*40);function me(){if(o.lingshi<100){t.toast(`灵石不足`,`error`);return}o.lingshi-=100,c.addExp(pe.value),t.toast(`演武特训结束，经验 +${pe.value}`,`success`),t.engine?.audio?.levelup(),t.engine?.rig?.addShake?.(.25)}let he=u(()=>o.count(`jiutian_jing`)>0);function I(){o.removeItem(`jiutian_jing`,1),c.learnGongfa(`jiutian_jing`),t.toast(`习得功法：九天剑经（攻击 +15%）`,`success`),t.engine?.audio?.levelup()}function ge(){clearTimeout(w),t.closeDialogue(),t.engine?.audio?.uiClose()}return r(()=>t.dialogue.open,e=>{e&&(l.value=`talk`,T(0))}),r(()=>t.dialogue.npcId,e=>{e&&T(0)}),r(j,e=>{e&&T(0)}),(e,n)=>x(t).dialogue.open&&x(j)?(i(),f(`div`,{key:0,class:`dialogue-panel`,onClick:n[17]||(n[17]=E(()=>{},[`stop`]))},[h(`div`,Vp,s(x(j).name.charAt(0)),1),h(`div`,Hp,[h(`div`,Up,[p(s(x(j).name)+` `,1),h(`em`,null,s(x(j).title),1)]),x(l)===`talk`?(i(),f(v,{key:0},[h(`div`,Wp,[n[18]||(n[18]=h(`span`,{class:`dlg-dot`},`「`,-1)),p(s(x(_)),1),x(b)?(i(),f(`span`,Gp,`▍`)):d(``,!0)]),x(ne)?(i(),f(`div`,Kp,` 任务：`+s(x(ie).title)+` — `+s(x(ie).desc),1)):d(``,!0),h(`div`,qp,[x(C)?d(``,!0):(i(),f(`button`,{key:0,class:`btn gold`,onClick:ee},`继续`)),x(C)?(i(),f(v,{key:1},[x(ne)?(i(),f(`button`,{key:0,class:`btn gold`,onClick:de},`接受任务`)):d(``,!0),x(j).role===`smith`?(i(),f(`button`,{key:1,class:`btn gold`,onClick:n[0]||(n[0]=e=>l.value=`smith`)},`强化装备`)):d(``,!0),x(j).role===`shop`?(i(),f(`button`,{key:2,class:`btn gold`,onClick:n[1]||(n[1]=e=>l.value=`shop`)},`购买药品`)):d(``,!0),x(j).role===`train`?(i(),f(`button`,{key:3,class:`btn gold`,onClick:n[2]||(n[2]=e=>l.value=`train`)},`训练`)):d(``,!0),x(j).role===`master`?(i(),f(`button`,{key:4,class:`btn gold`,onClick:n[3]||(n[3]=e=>l.value=`master`)},`传功`)):d(``,!0),x(j).role===`quest`?(i(),f(`button`,{key:5,class:`btn gold`,onClick:n[4]||(n[4]=e=>l.value=`exchange`)},`宗门兑换`)):d(``,!0),x(j).role===`auction`?(i(),f(`button`,{key:6,class:`btn gold`,onClick:n[5]||(n[5]=e=>l.value=`auction`)},`拍卖行`)):d(``,!0)],64)):d(``,!0),h(`button`,{class:`btn`,onClick:ge},`离开`)])],64)):x(l)===`smith`?(i(),f(v,{key:1},[h(`div`,Jp,`选择一件装备进行强化（灵石 `+s(x(o).lingshi)+` ｜ 强化石 `+s(x(o).qianghuashi)+`）`,1),h(`div`,Yp,[(i(!0),f(v,null,S(x(ue),e=>(i(),f(`div`,{key:e.key,class:`smith-item`},[h(`span`,Xp,s(P(e.itemId).icon),1),h(`span`,{class:`sm-name`,style:a({color:x(o).qualityColor(P(e.itemId).quality)})},s(P(e.itemId).name)+` +`+s(e.strLevel||0),5),h(`span`,Zp,s(oe(e)),1),h(`button`,{class:`btn small gold`,disabled:e.strLevel>=20,onClick:t=>fe(e)},`强化`,8,Qp)]))),128))]),h(`button`,{class:`btn`,onClick:n[6]||(n[6]=e=>l.value=`talk`)},`返回`)],64)):x(l)===`shop`?(i(),f(v,{key:2},[h(`div`,$p,`灵石：`+s(x(o).lingshi),1),h(`div`,em,[h(`div`,tm,[n[19]||(n[19]=h(`span`,null,`🧪 生命药水`,-1)),n[20]||(n[20]=h(`span`,{class:`shop-cost`},`20 灵石`,-1)),h(`button`,{class:`btn small gold`,onClick:n[7]||(n[7]=e=>F(`hp_potion`,20,1))},`买1`),h(`button`,{class:`btn small`,onClick:n[8]||(n[8]=e=>F(`hp_potion`,20,5))},`买5`)]),h(`div`,nm,[n[21]||(n[21]=h(`span`,null,`🫗 灵力药水`,-1)),n[22]||(n[22]=h(`span`,{class:`shop-cost`},`15 灵石`,-1)),h(`button`,{class:`btn small gold`,onClick:n[9]||(n[9]=e=>F(`mp_potion`,15,1))},`买1`),h(`button`,{class:`btn small`,onClick:n[10]||(n[10]=e=>F(`mp_potion`,15,5))},`买5`)])]),h(`button`,{class:`btn`,onClick:n[11]||(n[11]=e=>l.value=`talk`)},`返回`)],64)):x(l)===`train`?(i(),f(v,{key:3},[h(`div`,rm,`演武特训：消耗 100 灵石，获得 `+s(x(pe))+` 点经验（当前 `+s(x(c).exp)+` / `+s(x(c).expNext)+`）`,1),h(`div`,im,[h(`div`,am,[n[23]||(n[23]=h(`span`,null,`🥋 演武特训`,-1)),n[24]||(n[24]=h(`span`,{class:`shop-cost`},`100 灵石`,-1)),h(`button`,{class:`btn small gold`,disabled:x(o).lingshi<100,onClick:me},`开始`,8,om)])]),h(`button`,{class:`btn`,onClick:n[12]||(n[12]=e=>l.value=`talk`)},`返回`)],64)):x(l)===`master`?(i(),f(v,{key:4},[h(`div`,sm,[x(c).gongfa.jiutian_jing?(i(),f(v,{key:0},[p(`你已习得九天剑经。静心打坐（按 X），体悟剑意，或寻突破之机。`)],64)):x(he)?(i(),f(v,{key:1},[p(`你手中有九天剑经，可在此请老夫为你开经。`)],64)):(i(),f(v,{key:2},[p(`九天剑经是我宗不传之秘。立下功劳（后山除魔），老夫再传你此经。`)],64))]),x(he)&&!x(c).gongfa.jiutian_jing?(i(),f(`div`,cm,[h(`div`,{class:`shop-item`},[n[25]||(n[25]=h(`span`,null,`📜 九天剑经（开经）`,-1)),h(`button`,{class:`btn small gold`,onClick:I},`开经习得`)])])):d(``,!0),h(`button`,{class:`btn`,onClick:n[13]||(n[13]=e=>l.value=`talk`)},`返回`)],64)):x(l)===`auction`?(i(),f(v,{key:5},[h(`div`,lm,`今日拍卖 · 灵石：`+s(x(o).lingshi)+`（品质越高越珍稀）`,1),h(`div`,um,[(i(),f(v,null,S(le,e=>h(`div`,{key:e.itemId,class:`shop-item`},[h(`span`,dm,s(P(e.itemId).icon),1),h(`span`,{class:`sm-name`,style:a({color:x(o).qualityColor(P(e.itemId).quality)})},s(P(e.itemId).name),5),h(`span`,fm,s(oe(P(e.itemId))),1),h(`span`,pm,s(e.price)+` 灵石`,1),h(`button`,{class:`btn small gold`,disabled:x(o).lingshi<e.price,onClick:t=>F(e.itemId,e.price,1)},`买`,8,mm)])),64))]),h(`button`,{class:`btn`,onClick:n[14]||(n[14]=e=>l.value=`talk`)},`返回`)],64)):x(l)===`exchange`?(i(),f(v,{key:6},[h(`div`,hm,`宗门库房：灵石兑换修炼之物（灵石 `+s(x(o).lingshi)+`）`,1),h(`div`,gm,[h(`div`,_m,[n[26]||(n[26]=h(`span`,null,`💊 突破丹`,-1)),n[27]||(n[27]=h(`span`,{class:`shop-cost`},`500 灵石`,-1)),h(`button`,{class:`btn small gold`,disabled:x(o).lingshi<500,onClick:n[15]||(n[15]=e=>F(`tupodan`,500,1))},`兑换`,8,vm)])]),h(`button`,{class:`btn`,onClick:n[16]||(n[16]=e=>l.value=`talk`)},`返回`)],64)):d(``,!0)])])):d(``,!0)}},bm={class:`nd-portrait`},xm={class:`nd-body`},Sm={class:`nd-title`},Cm={class:`nd-text`},wm={__name:`GameNPCDialog`,props:{show:{type:Boolean,default:!1},title:{type:String,default:``},text:{type:String,default:``},portrait:{type:String,default:`？`},confirmText:{type:String,default:`确定`}},emits:[`confirm`],setup(e,{emit:t}){let n=e,a=t,o=y(``),l=null;r(()=>n.show,e=>{e?(o.value=``,u(0)):clearTimeout(l)}),r(()=>n.text,()=>{n.show&&(o.value=``,u(0))});function u(e){e>n.text.length||(o.value=n.text.slice(0,e),l=setTimeout(()=>u(e+1),28))}function p(){clearTimeout(l),a(`confirm`)}return c(()=>clearTimeout(l)),(t,n)=>e.show?(i(),f(`div`,{key:0,class:`npc-dialog`,onClick:n[0]||(n[0]=E(()=>{},[`stop`]))},[h(`div`,bm,s(e.portrait),1),h(`div`,xm,[h(`div`,Sm,s(e.title),1),h(`div`,Cm,s(x(o)),1),h(`button`,{class:`btn gold nd-confirm`,onClick:p},s(e.confirmText),1)])])):d(``,!0)}},Tm={key:0,class:`ce-black`},Em={class:`ce-text`},Dm={key:1,class:`ce-card panel`},Om={key:2,class:`ce-card panel`},km={key:3,class:`ce-card panel`},Am={key:4,class:`ce-card panel`},jm={key:5,class:`ce-card panel`},Mm={key:6,class:`ce-card panel`},Nm={key:7,class:`ce-card panel`},Pm={key:8,class:`ce-card panel`},Fm={key:9,class:`ce-card panel`},Im={key:10,class:`ce-card panel`},Lm={__name:`GameChapterEndPanel`,props:{show:{type:Boolean,default:!1},variant:{type:String,default:`chapter1`}},emits:[`continue`],setup(e,{emit:t}){let n=e,a=t,o=y(`reveal`),l=y(``),u=null,p=[`？？？`,`无法鉴定`,`等级：？？？`,`一枚来自未知时代的黑色种子。`,`它似乎……`,`在呼吸。`,``,`道种……动了！`];r(()=>n.show,e=>{if(e){if(n.variant===`chapter2`||n.variant===`chapter4`||n.variant===`chapter5`||n.variant===`chapter6`||n.variant===`chapter7`||n.variant===`chapter8`||n.variant===`chapter9`||n.variant===`chapter10`||n.variant===`final`){o.value=`end`;return}o.value=`reveal`,l.value=``,g(0,0)}else clearTimeout(u)},{immediate:!0});function g(e,t){if(e>=p.length){u=setTimeout(()=>{o.value=`end`},500);return}let n=p[e];t<=n.length?(l.value=n.slice(0,t),u=setTimeout(()=>g(e,t+1),e===p.length-1?70:55)):u=setTimeout(()=>g(e+1,0),300)}return c(()=>clearTimeout(u)),(t,n)=>e.show?(i(),f(`div`,{key:0,class:`chapter-end`,onClick:n[10]||(n[10]=E(()=>{},[`stop`]))},[x(o)===`reveal`?(i(),f(`div`,Tm,[h(`div`,Em,s(x(l)),1)])):x(o)===`end`&&e.variant===`chapter1`?(i(),f(`div`,Dm,[n[11]||(n[11]=m(`<div class="ce-chapter">第一章 · 仙缘 —— 完</div><div class="ce-seed-title">黑色道种</div><div class="ce-seed-lines"><p>「黑色道种究竟是什么？」</p><p>「神秘老人为什么认识它？」</p><p>「仙门真的通往仙界吗？」</p></div><div class="ce-next">第二章：青云宗</div><button class="btn" disabled>未解锁</button>`,5)),h(`button`,{class:`btn gold`,onClick:n[0]||(n[0]=e=>a(`continue`))},`继续游历`)])):x(o)===`end`&&e.variant===`chapter2`?(i(),f(`div`,Om,[n[12]||(n[12]=m(`<div class="ce-chapter">第二章 · 青云宗 —— 完</div><div class="ce-seed-title">九天剑经</div><div class="ce-seed-lines"><p>「后山的魔气，似乎与黑风林同源……」</p><p>「掌门望着后山，沉默了很久。」</p><p>「灵脉之下，埋着什么？」</p></div><div class="ce-next">第三章：筑基 · 秘境</div><button class="btn" disabled>未解锁</button>`,5)),h(`button`,{class:`btn gold`,onClick:n[1]||(n[1]=e=>a(`continue`))},`继续游历`)])):x(o)===`end`&&e.variant===`chapter4`?(i(),f(`div`,km,[n[13]||(n[13]=m(`<div class="ce-chapter">第四章 · 筑基 · 秘境 —— 完</div><div class="ce-seed-title">秘境本源</div><div class="ce-seed-lines"><p>「妖将陨落，地脉本源归位。」</p><p>「它的眼中没有恐惧，只有……等待。」</p><p>「灵脉之下，埋着更古老的东西。」</p><p class="ce-whisper">神秘老人的低语：「金丹之后，去更远的地方看看。」</p></div><div class="ce-next">第五章：金丹 · 大地图</div><button class="btn" disabled>未解锁</button>`,5)),h(`button`,{class:`btn gold`,onClick:n[2]||(n[2]=e=>a(`continue`))},`继续游历`)])):x(o)===`end`&&e.variant===`chapter5`?(i(),f(`div`,Am,[n[14]||(n[14]=m(`<div class="ce-chapter">第五章 · 金丹 · 大地图 —— 完</div><div class="ce-seed-title">凡界已容不下金丹</div><div class="ce-seed-lines"><p>「赤炎狼王的咆哮声，在青云城外渐渐平息。」</p><p>「城守朝你拱手：『金丹一成，凡界便只是你的起点。』」</p><p>「夜色里，神秘老人的声音再度响起：『金丹之上，是天劫。』」</p><p>「『渡得过，便是仙；渡不过，便是劫灰。』」</p><p class="ce-whisper">丹田中的黑色道种轻轻一颤——它也在等待那一天。</p></div><div class="ce-next">第六章：渡劫 · 天劫</div><button class="btn" disabled>未解锁</button>`,5)),h(`button`,{class:`btn gold`,onClick:n[3]||(n[3]=e=>a(`continue`))},`静候天劫`)])):x(o)===`end`&&e.variant===`chapter6`?(i(),f(`div`,jm,[n[15]||(n[15]=m(`<div class="ce-chapter">第六章 · 渡劫 · 天劫 —— 完</div><div class="ce-seed-title">元婴已成 · 仙门将启</div><div class="ce-seed-lines"><p>「九道天雷散去，天地间一片寂静。」</p><p>「你站在渡劫台上，元婴在丹田中缓缓旋转。」</p><p>「神秘老人望向天空：『仙门……要开了。』」</p><p>「你低头，黑色道种轻轻律动，仿佛在与某个遥远的存在呼应。」</p><p class="ce-whisper">凡界之外，九重天之上……传说中的仙界，究竟藏着什么？</p></div><div class="ce-next">第七章：仙界 · 飞升</div><button class="btn" disabled>未解锁</button>`,5)),h(`button`,{class:`btn gold`,onClick:n[4]||(n[4]=e=>a(`continue`))},`仰望苍穹`)])):x(o)===`end`&&e.variant===`chapter7`?(i(),f(`div`,Mm,[n[16]||(n[16]=m(`<div class="ce-chapter">第七章 · 仙界 · 飞升 —— 完</div><div class="ce-seed-title">飞升之后，才是牢笼</div><div class="ce-seed-lines"><p>「云海之上，天道碑静静矗立。」</p><p>「碑上只有一行字：『飞升之后，方知仙途尽头，不过另一座牢笼。』」</p><p>「你猛然想起神秘老人的话——『飞升不一定是成仙。』」</p><p>「丹田中的黑色道种，第一次剧烈地跳动起来。」</p><p class="ce-whisper">仙界共有九重天。而天道，压在所有仙人的头顶。</p></div><div class="ce-next">第八章：天道 · 九重天</div><button class="btn" disabled>未解锁</button>`,5)),h(`button`,{class:`btn gold`,onClick:n[5]||(n[5]=e=>a(`continue`))},`仰望天道`)])):x(o)===`end`&&e.variant===`chapter8`?(i(),f(`div`,Nm,[n[17]||(n[17]=m(`<div class="ce-chapter">第八章 · 天道 · 九重天 —— 完</div><div class="ce-seed-title">天庭的獠牙</div><div class="ce-seed-lines"><p>「天庭先锋墨麟陨落在青冥天。」</p><p>「散仙被清洗的真相，终于浮出水面——天庭在怕什么？」</p><p>「白泽望着远方：『第二重天天璇宫，是天庭的中枢。那里的秘密，足以颠覆整个仙界。』」</p><p>「你握紧了手中之物。黑色道种，微微搏动——仿佛在回应什么。」</p><p class="ce-whisper">天道之下，九重天各怀鬼胎。天庭的獠牙，才刚刚显露。</p></div><div class="ce-next">第九章：天璇宫 · 天庭中枢</div><button class="btn" disabled>未解锁</button>`,5)),h(`button`,{class:`btn gold`,onClick:n[6]||(n[6]=e=>a(`continue`))},`剑指天璇宫`)])):x(o)===`end`&&e.variant===`chapter9`?(i(),f(`div`,Pm,[n[18]||(n[18]=m(`<div class="ce-chapter">第九章 · 天璇宫 · 天庭中枢 —— 完</div><div class="ce-seed-title">天道的真面目</div><div class="ce-seed-lines"><p>「问天阁里没有神——只有一架运转了万古的黑色齿轮。」</p><p>「飞升、境界、天劫、气运……全都是天道定下的规矩。」</p><p>「文曲星君低声说：『现在你知道，天庭为什么要清洗散仙了。』」</p><p>「『知道太多的人会死。但你——已经回不了头了。』」</p><p class="ce-whisper">天道之外，还有混沌古神。那是比仙界更古老的秘密。</p></div><div class="ce-next">第十章：混沌 · 古神</div><button class="btn" disabled>未解锁</button>`,5)),h(`button`,{class:`btn gold`,onClick:n[7]||(n[7]=e=>a(`continue`))},`直面天道`)])):x(o)===`end`&&e.variant===`chapter10`?(i(),f(`div`,Fm,[n[19]||(n[19]=m(`<div class="ce-chapter">第十章 · 混沌 · 古神 —— 完</div><div class="ce-seed-title">第一仙尊的本源</div><div class="ce-seed-lines"><p>「混沌古神之影消散时，裂隙深处传来一声古老的叹息。」</p><p>「黑色道种轰然觉醒——它散发的光芒，撕裂了混沌。」</p><p>「你终于明白：第一仙尊没有成仙。他……超越了天道。」</p><p>「归墟道种，此刻与你的血脉共鸣。」</p><p class="ce-whisper">天道之下是仙界。天道之上是混沌。而道种……通向归墟。</p></div><div class="ce-next">终章：归墟</div><button class="btn" disabled>未解锁</button>`,5)),h(`button`,{class:`btn gold`,onClick:n[8]||(n[8]=e=>a(`continue`))},`踏入归墟`)])):x(o)===`end`&&e.variant===`final`?(i(),f(`div`,Im,[n[20]||(n[20]=h(`div`,{class:`ce-chapter`},`终章 · 归墟 —— 完`,-1)),n[21]||(n[21]=h(`div`,{class:`ce-seed-title`},`归墟道种的新主人`,-1)),n[22]||(n[22]=h(`div`,{class:`ce-seed-lines`},[h(`p`,null,`「第一仙尊的残念消散前，最后看了一眼你。」`),h(`p`,null,`「『很好。种子，没有选错人。』」`),h(`p`,null,`「『天道是规矩。混沌是虚无。而归墟——是规矩与虚无都不存在的地方。』」`),h(`p`,null,`「『去改写它吧。』」`),h(`p`,null,`「黑色道种彻底融入你的血脉。从此，你就是归墟道种的新主人。」`),h(`p`,{class:`ce-whisper`},`—— 归墟仙途 · 未完待续 ——`)],-1)),h(`button`,{class:`btn gold`,onClick:n[9]||(n[9]=e=>a(`continue`))},`回归凡尘`)])):d(``,!0)])):d(``,!0)}},Rm={class:`loading-sub`},zm={class:`loading-bar`},Bm={class:`loading-tip`},Vm=t({__name:`GameLoadingScreen`,props:{subtitle:{type:String,default:`正在进入青云村……`}},setup(e){let t=y(0),r=y(`天地初开，仙途始现。`),l=y(!1),u=null,d=[`天地初开，仙途始现。`,`凡人之躯，亦可问鼎仙路。`,`青云之巅，紫气东来。`,`一扇能让你离开凡界的门，已经打开。`];return o(()=>{let e=performance.now(),n=()=>{let i=Math.min(1,(performance.now()-e)/2400),a=1-(1-i)**3;t.value=Math.round(a*100),r.value=d[Math.min(d.length-1,Math.floor(i*d.length))],i<1?u=requestAnimationFrame(n):setTimeout(()=>{l.value=!0},350)};u=requestAnimationFrame(n)}),c(()=>{u&&cancelAnimationFrame(u)}),(o,c)=>(i(),f(`div`,{class:n([`loading-screen`,{hide:x(l)}])},[c[0]||(c[0]=h(`div`,{class:`loading-logo`},`归墟仙途`,-1)),h(`div`,Rm,s(e.subtitle),1),h(`div`,zm,[h(`div`,{class:`loading-bar-fill`,style:a({width:x(t)+`%`})},null,4)]),h(`div`,Bm,s(x(r)),1)],2))}},[[`__scopeId`,`data-v-21012f5a`]]),Hm={class:`intro-text`},Um={__name:`GameIntroCutscene`,emits:[`finish`],setup(e,{emit:t}){let n=[`天地初开，有仙界。`,`仙人长生不死。`,`凡人以为，飞升便是终点。`,`可是……`,`没有人知道。`,`仙界之外……`,`还有什么。`],r=y(``),a=y(0),l=y(0),u=y(!1),d=t,p=null;function m(){let e=n[a.value];l.value<e.length?(l.value+=1,r.value=e.slice(0,l.value),p=setTimeout(m,90)):p=setTimeout(g,900)}function g(){if(a.value+=1,a.value>=n.length){v();return}l.value=0,r.value=``,m()}function _(){v()}function v(){u.value||(u.value=!0,clearTimeout(p),d(`finish`))}return o(()=>{m()}),c(()=>clearTimeout(p)),(e,t)=>(i(),f(`div`,{class:`intro-cutscene`,onClick:_},[h(`div`,Hm,s(x(r)),1),t[0]||(t[0]=h(`div`,{class:`intro-skip`},`点击跳过`,-1))]))}},Wm={class:`game-root`},Gm={__name:`game`,setup(e){let t=w(),n=re(),r=A(),a=y(!0),s=y(!1),u=y(!1),p=y(``),m=y(null),h=y(null);function g(e){h.value=e}o(()=>{if(n.phase!==`playing`){if(n.hasSave())n.load(),n.phase=`playing`;else{t.replace(`/`);return}}setTimeout(()=>{a.value=!1},3300),s.value=!n.story.introSeen,window.addEventListener(`keydown`,_)}),c(()=>{window.removeEventListener(`keydown`,_),n.save()});function _(e){if(e.target?.tagName===`INPUT`||e.target?.tagName===`TEXTAREA`)return;let t=e.key.toLowerCase(),i=n.engine;if(i){if(t===`escape`){n.ui.menu?(n.closePanels(),n.resume()):(n.pause(),n.ui.menu=!0,n.closePanels());return}if(!n.paused){if(t===` `){e.preventDefault(),i.attack();return}if(t===`j`){i.attack();return}if(t===`x`){i.setMeditate(!r.meditating);return}if(t===`1`){i.castSkill(`qingyun_sword`);return}if(t===`2`){i.castSkill(`liehuo_palm`);return}if(t===`3`){i.castSkill(`yujian_shu`);return}if(t===`4`){i.castSkill(`guixu_jianjue`);return}if(t===`i`||t===`b`){n.togglePanel(`inventory`);return}if(t===`c`){n.togglePanel(`character`);return}if(t===`q`){n.togglePanel(`quest`);return}if(t===`e`){n.togglePanel(`equipment`);return}}}}function v(e){n.openDialogue(e),n.engine?.audio?.uiOpen()}function S(e){if(e?.def?.id===`zongzhu_boss`){p.value=`青云宗？不过是朽木罢了……灵脉，我收下了！`,u.value=!0,n.engine?.audio?.bossRoar();return}p.value=`你以为……仙界真的存在吗？`,u.value=!0,n.engine?.audio?.bossRoar()}function C(){u.value=!1,n.engine?.finishBossFinale()}function T(){r.obtainDaozhong(),n.chapterEnd=!0,n.engine?.audio?.seed(),n.save()}function E(){n.story.chapter1Done=!0,n.chapterEnd=!1,n.save()}function D(){n.story.chapter2Done=!0,n.chapter2End=!1,n.save()}function O(){n.story.chapter4Done=!0,n.chapter4End=!1,n.save()}function k(){n.story.chapter5Done=!0,n.chapter5End=!1,n.save()}function ee(){n.story.chapter6Done=!0,n.chapter6End=!1,n.save()}function j(){n.story.chapter7Done=!0,n.chapter7End=!1,n.save()}function M(){n.story.chapter8Done=!0,n.chapter8End=!1,n.save()}function te(){n.story.chapter9Done=!0,n.chapter9End=!1,n.save()}function N(){n.story.chapter10Done=!0,n.chapter10End=!1,n.save()}function ne(){n.story.finalDone=!0,n.finalEnd=!1,n.save()}function ie(){s.value=!1,n.story.introSeen=!0,n.save()}return(e,t)=>(i(),f(`div`,Wm,[l(ku,{ref_key:`sceneRef`,ref:m,onNpc:v,onBossFinale:S,onSeedReveal:T,onEnv:g},null,512),l(Bp,{env:x(h)},null,8,[`env`]),l(ym),l(wm,{show:x(u),title:`黑风寨主`,text:x(p),portrait:`魔`,"confirm-text":`继续`,onConfirm:C},null,8,[`show`,`text`]),l(Lm,{show:x(n).chapterEnd,onContinue:E},null,8,[`show`]),x(n).chapter2End?(i(),b(Lm,{key:0,show:!0,variant:`chapter2`,onContinue:D})):d(``,!0),x(n).chapter4End?(i(),b(Lm,{key:1,show:!0,variant:`chapter4`,onContinue:O})):d(``,!0),x(n).chapter5End?(i(),b(Lm,{key:2,show:!0,variant:`chapter5`,onContinue:k})):d(``,!0),x(n).chapter6End?(i(),b(Lm,{key:3,show:!0,variant:`chapter6`,onContinue:ee})):d(``,!0),x(n).chapter7End?(i(),b(Lm,{key:4,show:!0,variant:`chapter7`,onContinue:j})):d(``,!0),x(n).chapter8End?(i(),b(Lm,{key:5,show:!0,variant:`chapter8`,onContinue:M})):d(``,!0),x(n).chapter9End?(i(),b(Lm,{key:6,show:!0,variant:`chapter9`,onContinue:te})):d(``,!0),x(n).chapter10End?(i(),b(Lm,{key:7,show:!0,variant:`chapter10`,onContinue:N})):d(``,!0),x(n).finalEnd?(i(),b(Lm,{key:8,show:!0,variant:`final`,onContinue:ne})):d(``,!0),x(a)?(i(),b(Vm,{key:9})):d(``,!0),x(s)?(i(),b(Um,{key:10,onFinish:ie})):d(``,!0)]))}};export{Gm as default};