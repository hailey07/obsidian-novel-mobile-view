"use strict";var S=Object.defineProperty;var N=Object.getOwnPropertyDescriptor;var A=Object.getOwnPropertyNames;var M=Object.prototype.hasOwnProperty;var W=(h,l)=>{for(var e in l)S(h,e,{get:l[e],enumerable:!0})},O=(h,l,e,i)=>{if(l&&typeof l=="object"||typeof l=="function")for(let t of A(l))!M.call(h,t)&&t!==e&&S(h,t,{get:()=>l[t],enumerable:!(i=N(l,t))||i.enumerable});return h};var $=h=>O(S({},"__esModule",{value:!0}),h);var r=(h,l,e)=>new Promise((i,t)=>{var s=c=>{try{a(e.next(c))}catch(d){t(d)}},n=c=>{try{a(e.throw(c))}catch(d){t(d)}},a=c=>c.done?i(c.value):Promise.resolve(c.value).then(s,n);a((e=e.apply(h,l)).next())});var j={};W(j,{NovelMobileView:()=>w,VIEW_TYPE_NOVEL_MOBILE_VIEW:()=>p,default:()=>v});module.exports=$(j);var o=require("obsidian");var p="novel-mobile-view",E={White:"#fafafa","Twilight Silver":"#7f7f7e",Black:"#4a4e51","Soft Pink Gold":"#ead2c6","Lavender Purple":"#e8d8f2",Pink:"#f3b2dc","Warm Coral Red":"#ee6779","Frosty Green":"#d3e8dd","Sage Green":"#b9c69c","Cold River Blue":"#c8d3df",Ultramarine:"#a0b3f7","Mist Blue":"#a9bede","Ocean Blue":"#3c5b8a","Deep Blue Black":"#42525c"};function I(h){let l=h.split(":");if(l.length===2){let e=parseFloat(l[0]),i=parseFloat(l[1]);if(!isNaN(e)&&!isNaN(i)&&e>0&&i>0)return{width:e,height:i}}return null}var H={en:{novelMobileViewSettings:"--- View Settings ---",appearanceandsize:"--- Appearance & Size ---",fontSize:"Font Size",fontSizeDesc:"Adjust the font size of the text (px).",lineHeight:"Line Height",lineHeightDesc:"Adjust the line height (e.g., 1.5).",paragraphSpacing:"Paragraph Spacing",paragraphSpacingDesc:"Adjust spacing between paragraphs (CSS em).",iframeWidth:"Phone Width",iframeWidthDesc:"Width of the phone content area (px).",iframeHeight:"Phone Height",iframeHeightDesc:"Height of the phone content area (px).",outerBorderRadius:"Border Radius",outerBorderRadiusDesc:"Adjust the roundness of the phone corners (px).",phoneShellColor:"Phone Case Color",phoneShellColorDesc:"Choose the color of the phone frame.",languageSetting:"Language",languageSettingDesc:"Choose the language for the settings menu.",fixedRatio:"Fixed Aspect Ratio",fixedRatioDesc:"Lock width/height ratio (e.g., 9:16). Overrides manual height.",aspectRatio:"Select Aspect Ratio",aspectRatioDesc:"Choose a common phone aspect ratio.",showNotch:"Show Status Bar & Notch",showNotchDesc:"Toggle visibility of the top status bar (time, notch, icons).",showHomeBar:"Show Home Bar",showHomeBarDesc:"Toggle visibility of the bottom home indicator.",fixedTitle:"Fixed Title",fixedTitleDesc:"If enabled, the title stays at the top. If disabled, it scrolls with the content.",White:"White","Twilight Silver":"Twilight Silver",Black:"Black","Soft Pink Gold":"Soft Pink Gold","Lavender Purple":"Lavender Purple",Pink:"Pink","Warm Coral Red":"Warm Coral Red","Frosty Green":"Frosty Green","Sage Green":"Sage Green","Cold River Blue":"Cold River Blue",Ultramarine:"Ultramarine","Mist Blue":"Mist Blue","Ocean Blue":"Ocean Blue","Deep Blue Black":"Deep Blue Black"},zh:{novelMobileViewSettings:"--- \u663E\u793A\u8BBE\u7F6E ---",appearanceandsize:"--- \u5916\u89C2\u4E0E\u5C3A\u5BF8 ---",fontSize:"\u5B57\u4F53\u5927\u5C0F",fontSizeDesc:"\u8C03\u6574\u6B63\u6587\u5B57\u4F53\u5927\u5C0F (\u50CF\u7D20)\u3002",lineHeight:"\u884C\u9AD8",lineHeightDesc:"\u8C03\u6574\u884C\u95F4\u8DDD\u500D\u6570 (\u4F8B\u5982 1.5)\u3002",paragraphSpacing:"\u6BB5\u843D\u95F4\u8DDD",paragraphSpacingDesc:"\u8C03\u6574\u6BB5\u843D\u4E4B\u95F4\u7684\u5782\u76F4\u8DDD\u79BB (\u500D\u6570)\u3002",iframeWidth:"\u624B\u673A\u5C4F\u5E55\u5BBD\u5EA6",iframeWidthDesc:"\u624B\u673A\u663E\u793A\u533A\u57DF\u7684\u5BBD\u5EA6 (\u50CF\u7D20)\u3002",iframeHeight:"\u624B\u673A\u5C4F\u5E55\u9AD8\u5EA6",iframeHeightDesc:"\u624B\u673A\u663E\u793A\u533A\u57DF\u7684\u9AD8\u5EA6 (\u50CF\u7D20)\u3002",outerBorderRadius:"\u5916\u6846\u5706\u89D2",outerBorderRadiusDesc:"\u8C03\u6574\u624B\u673A\u56DB\u4E2A\u89D2\u7684\u5706\u6DA6\u7A0B\u5EA6 (\u50CF\u7D20)\u3002",phoneShellColor:"\u624B\u673A\u5916\u58F3\u989C\u8272",phoneShellColorDesc:"\u9009\u62E9\u624B\u673A\u8FB9\u6846\u7684\u989C\u8272\u98CE\u683C\u3002",languageSetting:"\u754C\u9762\u8BED\u8A00",languageSettingDesc:"\u9009\u62E9\u63D2\u4EF6\u8BBE\u7F6E\u754C\u9762\u7684\u663E\u793A\u8BED\u8A00\u3002",fixedRatio:"\u56FA\u5B9A\u5BBD\u9AD8\u6BD4",fixedRatioDesc:"\u9501\u5B9A\u5BBD\u9AD8\u6BD4\u4F8B (\u5982 9:16)\uFF0C\u5F00\u542F\u540E\u9AD8\u5EA6\u5C06\u81EA\u52A8\u8BA1\u7B97\u3002",aspectRatio:"\u9009\u62E9\u6BD4\u4F8B",aspectRatioDesc:"\u9009\u62E9\u5E38\u89C1\u7684\u624B\u673A\u5C4F\u5E55\u6BD4\u4F8B\u3002",showNotch:"\u663E\u793A\u72B6\u6001\u680F\u4E0E\u5218\u6D77",showNotchDesc:"\u5207\u6362\u9876\u90E8\u72B6\u6001\u680F\uFF08\u65F6\u95F4\u3001\u6444\u50CF\u5934\u5218\u6D77\u3001\u56FE\u6807\uFF09\u7684\u663E\u793A/\u9690\u85CF\u3002",showHomeBar:"\u663E\u793A\u5E95\u90E8\u6A2A\u6761",showHomeBarDesc:"\u5207\u6362\u5E95\u90E8 Home \u6307\u793A\u6761\u7684\u663E\u793A/\u9690\u85CF\u3002",fixedTitle:"\u56FA\u5B9A\u6807\u9898\u680F",fixedTitleDesc:"\u5F00\u542F\u540E\u6807\u9898\u59CB\u7EC8\u505C\u9760\u5728\u9876\u90E8\uFF1B\u5173\u95ED\u540E\u6807\u9898\u968F\u6B63\u6587\u4E00\u8D77\u6EDA\u52A8\u3002",White:"\u767D\u8272","Twilight Silver":"\u66AE\u8272\u94F6",Black:"\u9ED1\u8272","Soft Pink Gold":"\u7C89\u91D1\u8272","Lavender Purple":"\u85B0\u8863\u8349\u7D2B",Pink:"\u7C89\u8272","Warm Coral Red":"\u6696\u73CA\u745A\u7EA2","Frosty Green":"\u971C\u7EFF\u8272","Sage Green":"\u7070\u7EFF\u8272","Cold River Blue":"\u51B7\u6CB3\u84DD",Ultramarine:"\u5B9D\u84DD\u8272","Mist Blue":"\u8584\u96FE\u84DD","Ocean Blue":"\u6D77\u6D0B\u84DD","Deep Blue Black":"\u6DF1\u84DD\u9ED1"}},z=320,G=660,y={fontSize:16,lineHeight:1.7,paragraphSpacing:1,iframeWidth:z,iframeHeight:G,outerBorderRadius:56,phoneShellColor:"Ultramarine",language:"zh",fixedRatioEnabled:!1,selectedAspectRatio:"9:18.5",showNotch:!0,showHomeBar:!0,fixedTitleEnabled:!0};function _(h,l){let e;return function(...i){let t=this,s=()=>{e=null,h.apply(t,i)};clearTimeout(e),e=setTimeout(s,l)}}function T(h){return h.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function U(h){let l=h.split(`
`),e=[];for(let i=0;i<l.length;i++){let t=l[i];t.trim()!==""&&e.push(`<p><span class="line" data-source-line="${i}">${T(t)}</span></p>`)}return e.join(`
`)}var w=class extends o.ItemView{constructor(e,i){super(e);this.iframe=null;this.phoneFrameEl=null;this.phoneScreenEl=null;this.notchContainerEl=null;this.notchEl=null;this.timeEl=null;this.timerInterval=null;this.homeBarEl=null;this.currentFile=null;this.currentSettings=y;this.safeAreaTop=35;this.safeAreaBottom=10;this.icon="smartphone",this.plugin=i}getViewType(){return p}getDisplayText(){return"Novel Mobile View"}onOpen(){return r(this,null,function*(){this.contentEl.empty(),this.contentEl.addClass("novel-mobile-view-wrapper"),this.phoneFrameEl=this.contentEl.createEl("div",{cls:"iphone-case"}),this.phoneFrameEl.createEl("div",{cls:"screen_bottom"}),this.phoneScreenEl=this.phoneFrameEl.createEl("div",{cls:"screen"}),this.notchContainerEl=this.phoneScreenEl.createEl("div",{cls:"notch-container"});let e=this.notchContainerEl.createEl("div",{cls:"status-bar-left"});this.timeEl=e.createEl("div",{cls:"status-time",text:"12:00"}),this.updateTime(),this.timerInterval=window.setInterval(()=>this.updateTime(),1e4),this.notchEl=this.notchContainerEl.createEl("div",{cls:"notch"}),this.notchEl.createEl("div",{cls:"speaker"});let i=this.notchContainerEl.createEl("div",{cls:"status-bar-right"}),t=i.createEl("div",{cls:"status-icon wifi-icon"});t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 18l.01 0" /><path d="M9.172 15.172a4 4 0 0 1 5.656 0" /><path d="M6.343 12.343a8 8 0 0 1 11.314 0" /><path d="M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0" /></svg>',i.createEl("div",{cls:"battery-icon"}),this.iframe=this.phoneScreenEl.createEl("iframe",{cls:"novel-mobile-view-frame"}),this.iframe.style.border="none",this.iframe.setAttribute("sandbox","allow-scripts allow-same-origin"),this.homeBarEl=this.phoneScreenEl.createEl("div",{cls:"home-bar"}),this.phoneFrameEl.createEl("div",{cls:"btn-silence"}),this.phoneFrameEl.createEl("div",{cls:"btn-volume-up"}),this.phoneFrameEl.createEl("div",{cls:"btn-volume-down"}),this.phoneFrameEl.createEl("div",{cls:"btn-power"});let s=this.contentEl.ownerDocument.defaultView;s&&this.registerDomEvent(s,"message",this.handleIframeMessage.bind(this)),this.updateSettings(this.plugin.settings)})}onClose(){return r(this,null,function*(){this.iframe&&(this.iframe.remove(),this.iframe=null),this.timerInterval&&(window.clearInterval(this.timerInterval),this.timerInterval=null),this.phoneScreenEl=null,this.phoneFrameEl=null,this.notchContainerEl=null,this.notchEl=null,this.timeEl=null,this.homeBarEl=null,this.currentFile=null,this.contentEl.removeClass("novel-mobile-view-wrapper")})}updateTime(){if(this.timeEl){let e=new Date,i=e.getHours().toString(),t=e.getMinutes().toString().padStart(2,"0");this.timeEl.innerText=`${i}:${t}`}}handleIframeMessage(e){return r(this,null,function*(){var i;e.source===((i=this.iframe)==null?void 0:i.contentWindow)&&e.data&&e.data.type==="novel-mobile-view-click-line"&&(yield this.plugin.handleExternalClick(e.data.line,e.data.filePath))})}setFile(e,i,t,s=!1){return r(this,null,function*(){var V,k;if(!e)return;this.currentFile=e;let n=i!==void 0?i:yield this.app.vault.read(e),a=U(n),{fontSize:c,lineHeight:d,paragraphSpacing:f,fixedTitleEnabled:u}=this.currentSettings,m=window.getComputedStyle(document.body),g=((V=m.getPropertyValue("--text-normal"))==null?void 0:V.trim())||"black",C=((k=m.getPropertyValue("--background-primary"))==null?void 0:k.trim())||"white",B=this.getObsidianFontFamilyCSS(m),P=e.path,D=`<div class="${u?"file-title-fixed":"file-title-scrollable"}">${T(e.basename)}</div>`,F=this.safeAreaTop,L=this.safeAreaBottom,b="";u?b=`
                <div class="content-wrapper">
                    ${D}
                    <div class="scrollable-content">${a}</div>
                </div>
            `:b=`
                <div class="content-wrapper">
                    <div class="scrollable-content">
                        ${D}
                        ${a}
                    </div>
                </div>
            `;let R=`
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
                <style>
                    * { box-sizing: border-box; }
                    html { height: 100%; overflow: hidden; } 
                    body {
                        margin: 0; padding: 0; width: 100%; height: 100%;
                        background-color: ${C}; 
                        color: ${g}; 
                        overflow: hidden; 
                        font-family: ${B}; 
                        font-size: ${c}px; 
                        line-height: ${d}; 
                    }
                    .scrollable-content::-webkit-scrollbar { display: none !important; width: 0 !important; background: transparent; }
                    .scrollable-content { scrollbar-width: none !important; -ms-overflow-style: none !important; }
                    .content-wrapper {
                        display: flex;
                        flex-direction: column;
                        height: 100%; 
                        width: 100%;
                        overflow: hidden; 
                        padding-top: ${F}px; 
                        padding-bottom: ${L}px;
                        padding-left: 5%;
                        padding-right: 3%;
                    }
                    .file-title-fixed {
                        flex-shrink: 0;
                        font-size: ${c*1.05}px;
                        font-weight: bold;
                        margin-bottom: 1em;
                        margin-top: 0.5em;
                        background-color: ${C};
                        color: ${g};
                        word-wrap: break-word;
                        position: relative; 
                        z-index: 1; 
                        border-bottom: 1px solid rgba(127,127,127, 0.1);
                        padding-bottom: 4px;
                    }
                    .file-title-scrollable {
                        font-size: ${c*1.05}px;
                        font-weight: bold;
                        margin-bottom: 1em;
                        margin-top: 1em;
                        color: ${g};
                        word-wrap: break-word;
                    }
                    .scrollable-content {
                        flex-grow: 1;
                        overflow-y: auto;
                        -webkit-overflow-scrolling: touch; 
                        padding: 0 0 5% 0 !important;
                    }
                    .scrollable-content p {
                        display: block;
                        margin-top: 0 !important;
                        margin-bottom: ${f*c}px !important;
                        line-height: inherit;
                        text-indent: 2em !important;
                    }
                    .scrollable-content p:last-of-type { margin-bottom: 0 !important; }
                    .scrollable-content span.line { display: inline; white-space: normal; cursor: pointer; }
                </style>
            </head>
            <body data-target-line="${t!==void 0?t:-1}" data-should-highlight="${s}" data-file-path="${T(P)}">
                ${b}
                <script>
                    document.addEventListener('DOMContentLoaded', () => {
                        const targetLine = parseInt(document.body.getAttribute('data-target-line') || '-1');
                        const shouldHighlight = document.body.getAttribute('data-should-highlight') === 'true';
                        const obsidianTextColor = ${JSON.stringify(g)};
                        const currentFilePathInIframe = document.body.getAttribute('data-file-path');
                        const scrollableContentEl = document.querySelector('.scrollable-content');
                        let elementToScroll = null;
                        let elementToHighlight = null; 
                        if (targetLine !== -1) {
                            const targetElementSpan = document.querySelector(\`span[data-source-line="\${targetLine}"]\`);
                            if (targetElementSpan) {
                                elementToHighlight = targetElementSpan;
                                elementToScroll = targetElementSpan.closest('p') || targetElementSpan;
                            }
                        }
                        if (scrollableContentEl) {
                            if (elementToScroll) {
                                elementToScroll.scrollIntoView({ behavior: 'auto', block: 'start' });
                            } else {
                                scrollableContentEl.scrollTo(0, 0);
                            }
                        }
                        if (shouldHighlight && elementToHighlight) {
                            elementToHighlight.style.transition = 'color 0.1s ease-in-out';
                            elementToHighlight.style.color = '#f67280'; 
                            setTimeout(() => {
                                elementToHighlight.style.color = obsidianTextColor; 
                                setTimeout(() => {
                                    elementToHighlight.style.transition = '';
                                }, 500);
                            }, 1000); 
                        }
                        document.querySelectorAll('.scrollable-content span.line').forEach(span => {
                            span.addEventListener('click', (event) => {
                                const line = parseInt(span.dataset.sourceLine || '-1');
                                if (line !== -1) {
                                    window.parent.postMessage({ type: 'novel-mobile-view-click-line', line, filePath: currentFilePathInIframe }, '*');
                                }
                                event.stopPropagation(); 
                            });
                        });
                    });
                <\/script>
            </body>
            </html>
        `;this.iframe&&(this.iframe.srcdoc=R)})}getObsidianFontFamilyCSS(e){let i=e.getPropertyValue("--font-text")||"system-ui, sans-serif",t=e.getPropertyValue("--font-interface")||"system-ui, sans-serif",s=n=>n.replace(/"/g,"'").split(",").map(a=>a.trim()).filter(a=>a).join(", ");return`${s(i)}, ${s(t)}`}updateSettings(e){console.log("NovelMobileView: Updating settings to",e),this.currentSettings=e;let i=e.iframeWidth,t=e.iframeHeight;if(e.fixedRatioEnabled){let s=I(e.selectedAspectRatio);if(s){let{width:n,height:a}=s;t=Math.round(i*(a/n))}else t=Math.round(i/1.7777777777777777)}if(this.phoneFrameEl){let n=i+28,a=t+28;this.phoneFrameEl.style.setProperty("--phone-case-width",`${n}px`),this.phoneFrameEl.style.setProperty("--phone-case-height",`${a}px`);let c=e.outerBorderRadius;this.phoneFrameEl.style.setProperty("--phone-outer-radius",`${c}px`);let f=n/368,u=40;e.showNotch||(u=0),this.safeAreaTop=Math.max(0,Math.round(u*f));let m=0;this.safeAreaBottom=Math.max(0,Math.round(m*f));let g=E[e.phoneShellColor]||E.iphone_blue;this.phoneFrameEl.style.setProperty("--phone-outer-color",g),this.notchContainerEl&&(this.notchContainerEl.style.display=e.showNotch?"flex":"none"),this.homeBarEl&&(this.homeBarEl.style.display=e.showHomeBar?"block":"none")}this.currentFile&&this.setFile(this.currentFile,void 0,this.plugin.lastKnownCursorLine,!1)}},v=class extends o.Plugin{constructor(){super(...arguments);this.settings=y;this.activeLeaf=null;this.lastKnownCursorLine=-1;this.scrollDebounceTimer=null}onload(){return r(this,null,function*(){yield this.loadSettings(),this.registerView(p,e=>new w(e,this)),this.addRibbonIcon("smartphone","Open Novel Mobile View",()=>{this.activateView()}),this.addSettingTab(new x(this.app,this)),this.registerEvent(this.app.workspace.on("active-leaf-change",e=>{this.refreshPreviewViews()})),this.registerEvent(this.app.workspace.on("editor-change",_((e,i)=>{this.refreshPreviewViews()},100))),this.registerDomEvent(document,"selectionchange",()=>{this.handleCursorActivity()}),this.registerEvent(this.app.workspace.on("editor-menu",(e,i)=>{this.handleCursorActivity()}))})}handleCursorActivity(){let e=this.app.workspace.getActiveViewOfType(o.MarkdownView);if(e){let t=e.editor.getCursor();this.lastKnownCursorLine=t.line}}loadSettings(){return r(this,null,function*(){this.settings=Object.assign({},y,yield this.loadData())})}saveSettings(){return r(this,null,function*(){yield this.saveData(this.settings)})}refreshPreviewViews(e=!1){let i=this.app.workspace.getActiveViewOfType(o.MarkdownView),t=null,s,n=-1;i&&(t=i.file,s=i.editor.getValue(),n=i.editor.getCursor().line,this.lastKnownCursorLine=n),this.app.workspace.getLeavesOfType(p).forEach(c=>{let d=c.view;t&&d.setFile(t,s,n,!0)})}handleExternalClick(e,i){return r(this,null,function*(){let t=this.app.workspace.getLeavesOfType("markdown");for(let n of t){let a=n.view;if(a.file&&a.file.path===i){this.app.workspace.setActiveLeaf(n,{focus:!0}),a.editor.setCursor({line:e,ch:0}),a.editor.scrollIntoView({from:{line:e,ch:0},to:{line:e,ch:0}},!0);return}}let s=this.app.vault.getAbstractFileByPath(i);if(s instanceof o.TFile){let n=this.app.workspace.getLeaf(!1);yield n.openFile(s);let a=n.view;a&&(a.editor.setCursor({line:e,ch:0}),a.editor.scrollIntoView({from:{line:e,ch:0},to:{line:e,ch:0}},!0))}})}activateView(){return r(this,null,function*(){let e=this.app.workspace.getLeavesOfType(p);if(e.length===0){let i=this.app.workspace.getRightLeaf(!1);i&&(yield i.setViewState({type:p,active:!0})),this.app.workspace.revealLeaf(i)}else this.app.workspace.revealLeaf(e[0]);this.refreshPreviewViews()})}},x=class extends o.PluginSettingTab{constructor(e,i){super(e,i);this.plugin=i}display(){let{containerEl:e}=this;e.empty();let i=this.plugin.settings.language,t=H[i]||H.en;e.createEl("h3",{text:t.novelMobileViewSettings}),new o.Setting(e).setName(t.languageSetting).setDesc(t.languageSettingDesc).addDropdown(s=>s.addOption("en","English").addOption("zh","\u4E2D\u6587").setValue(this.plugin.settings.language).onChange(n=>r(this,null,function*(){this.plugin.settings.language=n,yield this.plugin.saveSettings(),this.display()}))),new o.Setting(e).setName(t.fontSize).setDesc(t.fontSizeDesc).addSlider(s=>s.setLimits(10,36,1).setValue(this.plugin.settings.fontSize).setDynamicTooltip().onChange(n=>r(this,null,function*(){this.plugin.settings.fontSize=n,yield this.plugin.saveSettings(),this.updateAllViews()}))),new o.Setting(e).setName(t.lineHeight).setDesc(t.lineHeightDesc).addSlider(s=>s.setLimits(1,3,.1).setValue(this.plugin.settings.lineHeight).setDynamicTooltip().onChange(n=>r(this,null,function*(){this.plugin.settings.lineHeight=n,yield this.plugin.saveSettings(),this.updateAllViews()}))),new o.Setting(e).setName(t.paragraphSpacing).setDesc(t.paragraphSpacingDesc).addSlider(s=>s.setLimits(0,3,.1).setValue(this.plugin.settings.paragraphSpacing).setDynamicTooltip().onChange(n=>r(this,null,function*(){this.plugin.settings.paragraphSpacing=n,yield this.plugin.saveSettings(),this.updateAllViews()}))),e.createEl("h3",{text:t.appearanceandsize}),new o.Setting(e).setName(t.phoneShellColor).setDesc(t.phoneShellColorDesc).addDropdown(s=>{for(let n in E)s.addOption(n,t[n]||n);s.setValue(this.plugin.settings.phoneShellColor).onChange(n=>r(this,null,function*(){this.plugin.settings.phoneShellColor=n,yield this.plugin.saveSettings(),this.updateAllViews()}))}),new o.Setting(e).setName(t.showNotch).setDesc(t.showNotchDesc).addToggle(s=>s.setValue(this.plugin.settings.showNotch).onChange(n=>r(this,null,function*(){this.plugin.settings.showNotch=n,yield this.plugin.saveSettings(),this.updateAllViews()}))),new o.Setting(e).setName(t.showHomeBar).setDesc(t.showHomeBarDesc).addToggle(s=>s.setValue(this.plugin.settings.showHomeBar).onChange(n=>r(this,null,function*(){this.plugin.settings.showHomeBar=n,yield this.plugin.saveSettings(),this.updateAllViews()}))),new o.Setting(e).setName(t.fixedTitle).setDesc(t.fixedTitleDesc).addToggle(s=>s.setValue(this.plugin.settings.fixedTitleEnabled).onChange(n=>r(this,null,function*(){this.plugin.settings.fixedTitleEnabled=n,yield this.plugin.saveSettings(),this.updateAllViews()}))),new o.Setting(e).setName(t.iframeWidth).setDesc(t.iframeWidthDesc).addText(s=>s.setPlaceholder("320").setValue(String(this.plugin.settings.iframeWidth)).onChange(n=>r(this,null,function*(){let a=parseInt(n);!isNaN(a)&&a>100&&(this.plugin.settings.iframeWidth=a,yield this.plugin.saveSettings(),this.updateAllViews())}))),new o.Setting(e).setName(t.outerBorderRadius).setDesc(t.outerBorderRadiusDesc).addSlider(s=>s.setLimits(0,60,1).setValue(this.plugin.settings.outerBorderRadius).setDynamicTooltip().onChange(n=>r(this,null,function*(){this.plugin.settings.outerBorderRadius=n,yield this.plugin.saveSettings(),this.updateAllViews()}))),new o.Setting(e).setName(t.fixedRatio).setDesc(t.fixedRatioDesc).addToggle(s=>s.setValue(this.plugin.settings.fixedRatioEnabled).onChange(n=>r(this,null,function*(){this.plugin.settings.fixedRatioEnabled=n,yield this.plugin.saveSettings(),this.display(),this.updateAllViews()}))),this.plugin.settings.fixedRatioEnabled?new o.Setting(e).setName(t.aspectRatio).setDesc(t.aspectRatioDesc).addDropdown(s=>s.addOption("9:16","9:16").addOption("9:17.5","9:17.5").addOption("9:18.5","9:18.5").addOption("9:19.5","9:19.5").addOption("9:21","9:21").setValue(this.plugin.settings.selectedAspectRatio).onChange(n=>r(this,null,function*(){this.plugin.settings.selectedAspectRatio=n,yield this.plugin.saveSettings(),this.updateAllViews()}))):new o.Setting(e).setName(t.iframeHeight).setDesc(t.iframeHeightDesc).addText(s=>s.setPlaceholder("660").setValue(String(this.plugin.settings.iframeHeight)).onChange(n=>r(this,null,function*(){let a=parseInt(n);!isNaN(a)&&a>100&&(this.plugin.settings.iframeHeight=a,yield this.plugin.saveSettings(),this.updateAllViews())})))}updateAllViews(){this.app.workspace.getLeavesOfType(p).forEach(i=>{i.view.updateSettings(this.plugin.settings)})}};0&&(module.exports={NovelMobileView,VIEW_TYPE_NOVEL_MOBILE_VIEW});
