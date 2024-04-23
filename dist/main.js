(()=>{"use strict";var t={89:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i="",a=void 0!==e[5];return e[4]&&(i+="@supports (".concat(e[4],") {")),e[2]&&(i+="@media ".concat(e[2]," {")),a&&(i+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),i+=t(e),a&&(i+="}"),e[2]&&(i+="}"),e[4]&&(i+="}"),i})).join("")},e.i=function(t,i,a,r,n){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(a)for(var o=0;o<this.length;o++){var l=this[o][0];null!=l&&(s[l]=!0)}for(var h=0;h<t.length;h++){var c=[].concat(t[h]);a&&s[c[0]]||(void 0!==n&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=n),i&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=i):c[2]=i),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),e.push(c))}},e}},248:t=>{t.exports=function(t){return t[1]}},208:(t,e,i)=>{i.d(e,{A:()=>o});var a=i(248),r=i.n(a),n=i(89),s=i.n(n)()(r());s.push([t.id,"html {\n    min-height: 100%;\n    min-width: 100%;\n    margin: 0;\n    padding: 0;\n    background-color: #3d3d4d;\n}\nh1 {\n    text-align: center;\n    font-size: 3rem;\n    color: white;\n    font-family: monospace;\n}\nh2 {\n    text-align: center;\n    font-size: 2.5rem;\n    margin-bottom: 1rem;\n    color: white;\n    font-family: monospace;\n}\n:disabled {\n    background-color: grey;\n}\n#centerOfPage {\n    display: inline-flex;\n    margin-top: 3%;\n    width: 100%;\n    height: 60vh;\n    background-color: white;\n}\n#player1, #player2 {\n    display: grid;\n    margin-left: 10%;\n    margin-right: 10%;\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns:  repeat(10, 1fr);\n    width: 30%;\n    height: 90%;\n    margin-top: 1.5%;\n}\nbutton[name=ship] {\n    background-color: green;\n}\n.gridCellsshipHit {\n    background-color: red;\n}\n.gridCellsmiss {\n    background-color: aqua;\n}\n#randomizeBoard {\n    margin-left: 10%;\n    margin-top: 3rem;\n    width: 15rem;\n    height: 5rem;\n    font-size: 2rem;\n    border-radius: 5rem;\n    border-style: solid;   \n    font-family: monospace;\n}",""]);const o=s},72:t=>{var e=[];function i(t){for(var i=-1,a=0;a<e.length;a++)if(e[a].identifier===t){i=a;break}return i}function a(t,a){for(var n={},s=[],o=0;o<t.length;o++){var l=t[o],h=a.base?l[0]+a.base:l[0],c=n[h]||0,d="".concat(h," ").concat(c);n[h]=c+1;var p=i(d),u={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var m=r(u,a);a.byIndex=o,e.splice(o,0,{identifier:d,updater:m,references:1})}s.push(d)}return s}function r(t,e){var i=e.domAPI(e);return i.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;i.update(t=e)}else i.remove()}}t.exports=function(t,r){var n=a(t=t||[],r=r||{});return function(t){t=t||[];for(var s=0;s<n.length;s++){var o=i(n[s]);e[o].references--}for(var l=a(t,r),h=0;h<n.length;h++){var c=i(n[h]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}n=l}}},659:t=>{var e={};t.exports=function(t,i){var a=function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}(t);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(i)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,i)=>{t.exports=function(t){var e=i.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(i){!function(t,e,i){var a="";i.supports&&(a+="@supports (".concat(i.supports,") {")),i.media&&(a+="@media ".concat(i.media," {"));var r=void 0!==i.layer;r&&(a+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),a+=i.css,r&&(a+="}"),i.media&&(a+="}"),i.supports&&(a+="}");var n=i.sourceMap;n&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),e.styleTagTransform(a,t,e.options)}(e,t,i)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function i(a){var r=e[a];if(void 0!==r)return r.exports;var n=e[a]={id:a,exports:{}};return t[a](n,n.exports,i),n.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var a in e)i.o(e,a)&&!i.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.nc=void 0,(()=>{var t=i(72),e=i.n(t),a=i(825),r=i.n(a),n=i(659),s=i.n(n),o=i(56),l=i.n(o),h=i(540),c=i.n(h),d=i(113),p=i.n(d),u=i(208),m={};m.styleTagTransform=p(),m.setAttributes=l(),m.insert=s().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=c(),e()(u.A,m),u.A&&u.A.locals&&u.A.locals;const f=class{constructor(t,e,i){this.length=t,this.horizontal=e,this.hits=0,this.sunk=!1,this.shipType=i}hit(){return this.hits=this.hits+1,this.isSunk(),this.sunk}isSunk(){this.length===this.hits?this.sunk=!0:this.sunk=!1}};class y{constructor(t,e){this.xAxis=t,this.yAxis=e,this.above=null,this.below=null,this.right=null,this.left=null,this.ship=!1,this.hit=!1,this.shipType=null}}const g=class{constructor(){this.root=new y(0,0),this.buildGameBoard();let t=[!0,!1],e=Math.floor(2*Math.random());this.carrier=new f(5,t[e],"carrier"),this.randomCoordinate(this.carrier),e=Math.floor(2*Math.random()),this.battleship=new f(4,t[e],"battleship"),this.randomCoordinate(this.battleship),e=Math.floor(2*Math.random()),this.cruiser=new f(3,t[e],"cruiser"),this.randomCoordinate(this.cruiser),e=Math.floor(2*Math.random()),this.submarine=new f(3,t[e],"submarine"),this.randomCoordinate(this.submarine),e=Math.floor(2*Math.random()),this.destroyer=new f(2,t[e],"destroyer"),this.randomCoordinate(this.destroyer)}buildGameBoard(){let t=this.root;for(;t.xAxis<=9;){if(t.xAxis%2==0)for(;t.yAxis<9;){let e=t.yAxis+1,i=t;t=new y(t.xAxis,e),t.below=i,i.above=t}else for(;t.yAxis>0;){let e=t.yAxis-1,i=t;t=new y(t.xAxis,e),t.above=i,i.below=t}let e=t.xAxis+1,i=t;if(t=new y(e,t.yAxis),10===t.xAxis)break;i.right=t,t.left=i}for(t=this.root;t.xAxis<=9;){let e;for(e=t.xAxis%2!=0?0===t.yAxis?t.right:t.below:9===t.yAxis?t.right:t.above;e.xAxis!=t.xAxis+1;)for(;e.yAxis!=t.yAxis;){if(9===t.xAxis)return;e=e.xAxis%2==0?9!=e.yAxis?e.above:e.right:0!=e.yAxis?e.below:e.right}e.left=t,t.right=e,t=t.xAxis%2==0?9!=t.yAxis?t.above:t.right:0!=t.yAxis?t.below:t.right}}find(t){let e=this.root;for(;e.xAxis!=t[0]||e.yAxis!=t[1];)t[0]!=e.xAxis&&(e=e.right),t[1]!=e.yAxis&&(e=e.above);return e}placeShip(t,e){let i=this.find(e),a=0,r=[],n=i.xAxis,s=i.yAxis;for(;a<t.length;){let e=[];e.push(n),e.push(s),i=this.find(e),r.push(i),!0===t.horizontal&&(n+=1),!1===t.horizontal&&(s-=1),a+=1}let o=!1;if(r.forEach((t=>{(0!=t.ship||null!=t.above&&0!=t.above.ship&&t.above.shipType!=t.shipType||null!=t.below&&0!=t.below.ship&&t.below.shipType!=t.shipType||null!=t.left&&0!=t.left.ship&&t.left.shipType!=t.shipType||null!=t.right&&0!=t.right.ship&&t.right.shipType!=t.shipType)&&(o=!0)})),!0!==o)return r.forEach((e=>{e.ship=!0,e.shipType=t})),r;this.randomCoordinate(t)}randomCoordinate(t){let e,i,a=0;for(;a<1;)e=Math.floor(10*Math.random()),i=Math.floor(10*Math.random()),!0===t.horizontal?e+t.length<10&&(a=1):i-t.length>=0&&(a=1);let r=[e,i];this.placeShip(t,r)}receiveAttack(t){let e=this.find(t);if(!0===e.ship){let t=e.shipType.shipType;"carrier"===t?this.carrier.hit():"battleship"===t?this.battleship.hit():"cruiser"===t?this.cruiser.hit():"submarine"===t?this.submarine.hit():"destroyer"===t&&this.destroyer.hit()}return!0===this.checkLoss()||(e.hit=!0,e)}checkLoss(){return!0===this.carrier.sunk&&!0===this.battleship.sunk&&!0===this.cruiser.sunk&&!0===this.submarine.sunk&&!0===this.destroyer.sunk}},b={name:null,playerGameBoard:new g,attack(t){let e=k.playerGameBoard.receiveAttack(t);return!0===e?null:!0!==e.hit||!1!==e.ship}},k={playerGameBoard:new g,attacks:[],attacksShip:[],attack(){let t,e,i;if(0===this.attacks.length||0===this.attacksShip.length){for(t=this.randomAttack();!0===b.playerGameBoard.find(t).hit;)t=this.randomAttack();e=b.playerGameBoard.find(t)}else 1===this.attacksShip.length?(t=this.attackNear(),e=b.playerGameBoard.find(t)):this.attacksShip.length<=this.attacksShip[0].shipType.length+1&&(t=this.followAttacks(),e=b.playerGameBoard.find(t));if(void 0===e||!0===e.hit){for(t=this.randomAttack();!0===b.playerGameBoard.find(t).hit;)t=this.randomAttack();e=b.playerGameBoard.find(t)}if(e.hit=!0,!0===b.playerGameBoard.receiveAttack(t))return i=[!0],i.concat(t);if(!0===e.ship){let t=0;if(this.attacksShip.forEach((e=>{e.shipType!=this.attacksShip[this.attacksShip.length-1].shipType&&this.attacksShip.splice(t,1),t++})),this.attacksShip.push(e),this.attacksShip.length===this.attacksShip[0].shipType.length)for(;this.attacksShip.length>0;)this.attacksShip.pop()}return this.attacks.push(e),i=!0===e.hit&&!1===e.ship?[0]:[1],i.concat(t)},randomAttack:()=>[Math.floor(10*Math.random()),Math.floor(10*Math.random())],attackNear(){let t=0,e=["above","below","right","left"],i=this.attacksShip[0];for(;!0===i.hit&&e.length>0&&t<4;){i=this.attacksShip[0];let a=Math.floor(Math.random()*e.length),r=e[a];t+=1,"above"===r&&null!=i.above?i=i.above:"below"===r&&null!=i.below?i=i.below:"right"===r&&null!=i.right?i=i.right:"left"===r&&null!=i.left?i=i.left:e.length>1?e.splice(a,1):e.pop()}if(i===this.attacksShip[this.attacksShip.length-1]||null==i){let t=this.randomAttack();for(i=b.playerGameBoard.find(t);this.attacksShip.length>0;)this.attacksShip.pop()}return[i.xAxis,i.yAxis]},followAttacks(){let t,e,i,a,r=this.attacksShip[this.attacksShip.length-1];if(null!=r.above&&!0===r.above.hit&&!0===r.above.ship&&null!=r.below)if(!0===r.below.hit&&!1===r.below.ship)if(null!=this.attacksShip[0].above&&!1===this.attacksShip[0].above.hit)a=this.attacksShip[0].above;else for(t=this.randomAttack(),a=b.playerGameBoard.find(t);this.attacksShip.length>0;)this.attacksShip.pop();else!1===r.below.hit&&(a=r.below);else if(null!=r.below&&!0===r.below.hit&&!0===r.below.ship&&null!=r.above)if(!0===r.above.hit&&!1===r.above.ship)if(null!=this.attacksShip[0].below&&!1===this.attacksShip[0].below.hit)a=this.attacksShip[0].below;else for(t=this.randomAttack(),a=b.playerGameBoard.find(t);this.attacksShip.length>0;)this.attacksShip.pop();else!1===r.above.hit&&(a=r.above);else if(null!=r.right&&!0===r.right.hit&&!0===r.right.ship&&null!=r.left)if(!0===r.left.hit&&!1===r.left.ship)if(null!=this.attacksShip[0].right&&!1===this.attacksShip[0].right.hit)a=this.attacksShip[0].right;else for(t=this.randomAttack(),a=b.playerGameBoard.find(t);this.attacksShip.length>0;)this.attacksShip.pop();else!1===r.left.hit&&(a=r.left);else if(null!=r.left&&!0===r.left.hit&&!0===r.left.ship&&null!=r.right)if(!0===r.right.hit&&!1===r.right.ship)if(null!=this.attacksShip[0].left&&!1===this.attacksShip[0].left.hit)a=this.attacksShip[0].left;else for(t=this.randomAttack(),a=b.playerGameBoard.find(t);this.attacksShip.length>0;)this.attacksShip.pop();else!1===r.right.hit&&(a=r.right);else null==a&&(a=b.playerGameBoard.find(this.attackNear()));return e=a.xAxis,i=a.yAxis,[e,i]}};({startGame(){this.createUnclickableGrid(),this.createClickableGrids();let t=document.createElement("h2");t.textContent="You have 5 ships to sink!",document.getElementById("finalMessage").append(t);let e=document.createElement("button");e.textContent="Change Board",e.id="randomizeBoard",e.addEventListener("click",(()=>{for(b.playerGameBoard=new g;document.getElementById("player1").firstChild;)document.getElementById("player1").removeChild(document.getElementById("player1").firstChild);this.createUnclickableGrid()})),document.getElementById("resets").appendChild(e)},createUnclickableGrid(){let t,e,i;for(t=document.getElementById("player1"),e=0;e<10;e++)for(i=0;i<10;i++){let a=document.createElement("button");a.value=e,a.id=i+""+e;let r=[i,e];!0===b.playerGameBoard.find(r).ship&&(a.name="ship"),a.className="gridCells",a.disabled=!0,t.appendChild(a)}},createClickableGrids(){let t,e,i;for(t=document.getElementById("player2"),e=0;e<10;e++)for(i=0;i<10;i++){let a=document.createElement("button");a.value=e,a.id=i,a.className="gridCells",a.addEventListener("click",(()=>{document.getElementById("randomizeBoard")&&document.getElementById("randomizeBoard").remove();let t=[parseInt(a.id),parseInt(a.value)],e=b.attack(t);if(a.disabled=!0,!0===e){a.className+="shipHit";let t=0;!0===k.playerGameBoard.carrier.sunk&&(t+=1),!0===k.playerGameBoard.battleship.sunk&&(t+=1),!0===k.playerGameBoard.cruiser.sunk&&(t+=1),!0===k.playerGameBoard.submarine.sunk&&(t+=1),!0===k.playerGameBoard.destroyer.sunk&&(t+=1),t=5-t;let e=document.querySelector("h2");t>1?e.textContent="You have "+t+" ships to sink!":1===t&&(e.textContent="You have 1 ship to go!")}else if(null===e){a.name="hit",a.className+="shipHit",document.querySelector("h2").textContent="You have won",document.querySelectorAll("button").forEach((t=>{t.disabled=!0}));let t=document.getElementById("resets"),e=document.createElement("button");return e.textContent="Reset",e.addEventListener("click",(()=>{let t=document.getElementById("player1");for(;t.firstChild;)t.removeChild(t.firstChild);let i=document.getElementById("player2");for(;i.firstChild;)i.removeChild(i.firstChild);document.querySelector("h2").remove(),e.remove(),this.startGame()})),e.id="randomizeBoard",void t.appendChild(e)}!1===e&&(a.className+="miss");let i=k.attack(),r=i[1].toString(),n=i[2].toString(),s=document.getElementById(r+""+n);if(!0===i[0]){s.name="hit",s.className+="shipHit",document.querySelector("h2").textContent="You have lost",document.querySelectorAll("button").forEach((t=>{t.disabled=!0}));let t=document.getElementById("resets"),e=document.createElement("button");e.textContent="Reset",e.addEventListener("click",(()=>{let t=document.getElementById("player1");for(;t.firstChild;)t.removeChild(t.firstChild);let i=document.getElementById("player2");for(;i.firstChild;)i.removeChild(i.firstChild);document.querySelector("h2").remove(),e.remove(),this.startGame()})),e.id="randomizeBoard",t.appendChild(e)}else 1===i[0]?(s.name="hit",s.className+="shipHit"):s.className+="miss"})),t.appendChild(a)}}}).startGame()})()})();