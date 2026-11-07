const $=s=>document.querySelector(s);
const searchInput=$("#searchInput"),categoryNav=$("#categoryNav"),linkContainer=$("#linkContainer"),emptyState=$("#emptyState");
let language=localStorage.getItem("lh-language")||"EN";
let theme=localStorage.getItem("lh-theme")||"light";
let activeCategory="All";
const translations={
EN:{brandTitle:"Quick Links",portal:"Employee portal",dark:"Dark",light:"Light",overline:"YOUR WORKDAY, CONNECTED",headline1:"Everything you need.",headline2:"One click away.",intro:"Find the tools, reports and resources that keep your work moving.",artLabel:"WORK<br>CONNECTED",search:"Search links, teams, or reports…",resources:"resources",searchHint:"Search by name or category",directory:"RESOURCE DIRECTORY",quickAccess:"Quick access",reset:"Reset filters",openHint:"Select a resource to open it in a new tab ↗",all:"All",allResources:"All resources",noResults:"No matching resources",tryAgain:"Try another keyword or clear your filters.",showAll:"Show all resources",footer:"Internal resource directory · Built for better workdays",placeholder:"Search links, teams, or reports…",categoryNames:{"Sales & Distribution":"Sales & Distribution","MIS & Reporting":"MIS & Reporting","Human Resources":"Human Resources","Finance & Accounts":"Finance & Accounts","Operations & Logistics":"Operations & Logistics","Other Resources":"Other Resources"}},
BN:{brandTitle:"দ্রুত লিংক",portal:"কর্মী পোর্টাল",dark:"ডার্ক",light:"লাইট",overline:"আপনার কর্মদিবস, সংযুক্ত",headline1:"আপনার প্রয়োজনীয় সবকিছু।",headline2:"এক ক্লিকেই।",intro:"কাজের জন্য প্রয়োজনীয় টুল, প্রতিবেদন ও রিসোর্স খুঁজুন।",artLabel:"কাজে<br>সংযুক্ত",search:"লিংক, বিভাগ বা প্রতিবেদন খুঁজুন…",resources:"টি রিসোর্স",searchHint:"নাম বা বিভাগ দিয়ে খুঁজুন",directory:"রিসোর্স ডিরেক্টরি",quickAccess:"দ্রুত প্রবেশ",reset:"ফিল্টার রিসেট",openHint:"নতুন ট্যাবে খুলতে রিসোর্স নির্বাচন করুন ↗",all:"সব",allResources:"সব রিসোর্স",noResults:"কোনো রিসোর্স পাওয়া যায়নি",tryAgain:"অন্য শব্দ দিয়ে খুঁজুন অথবা ফিল্টার মুছে দিন।",showAll:"সব রিসোর্স দেখুন",footer:"অভ্যন্তরীণ রিসোর্স ডিরেক্টরি · আরও সহজ কর্মদিবস",placeholder:"লিংক, বিভাগ বা প্রতিবেদন খুঁজুন…",categoryNames:{"Sales & Distribution":"বিক্রয় ও বিতরণ","MIS & Reporting":"এমআইএস ও প্রতিবেদন","Human Resources":"মানবসম্পদ","Finance & Accounts":"অর্থ ও হিসাব","Operations & Logistics":"অপারেশন ও লজিস্টিকস","Other Resources":"অন্যান্য রিসোর্স"}}
};
function t(key){return translations[language][key]||key}
function escapeHtml(v){return String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function categoryName(cat){return language==="BN"?(companyLinks.find(x=>x.category===cat)?.bnCategory||t("all")):(cat==="All"?t("all"):cat)}
function applyLanguage(){
 document.documentElement.lang=language==="BN"?"bn":"en";
 document.documentElement.classList.toggle("bn",language==="BN");
 document.querySelectorAll("[data-i18n]").forEach(el=>{const key=el.dataset.i18n;if(translations[language][key])el.innerHTML=translations[language][key]});
 searchInput.placeholder=t("placeholder");searchInput.setAttribute("aria-label",t("placeholder"));
 $("#langEN").classList.toggle("active",language==="EN");$("#langBN").classList.toggle("active",language==="BN");
 renderCategories();renderLinks();
}
function applyTheme(){
 document.documentElement.dataset.theme=theme;
 $("#themeIcon").textContent=theme==="dark"?"☀":"☾";
 $("#themeText").textContent=theme==="dark"?t("light"):t("dark");
 $("#themeToggle").setAttribute("aria-label",theme==="dark"?"Switch to light theme":"Switch to dark theme");
}
function renderCategories(){
 const cats=["All",...new Set(companyLinks.map(x=>x.category))];categoryNav.replaceChildren();
 cats.forEach(cat=>{const count=cat==="All"?companyLinks.length:companyLinks.filter(x=>x.category===cat).length;
 const b=document.createElement("button");b.type="button";b.className="category-button"+(activeCategory===cat?" active":"");b.setAttribute("aria-pressed",String(activeCategory===cat));
 b.innerHTML=`<span>${escapeHtml(categoryName(cat))}</span><span class="cat-count">${count}</span>`;
 b.addEventListener("click",()=>{activeCategory=cat;renderCategories();renderLinks()});categoryNav.appendChild(b)});
}
function filtered(){const q=searchInput.value.trim().toLowerCase();return companyLinks.filter(x=>(activeCategory==="All"||x.category===activeCategory)&&[x.name,x.bn,x.category,x.bnCategory,x.description,x.bnDescription].join(" ").toLowerCase().includes(q))}
function renderLinks(){
 const items=filtered();linkContainer.replaceChildren();
 items.forEach((x,i)=>{let url;try{const u=new URL(x.url);if(["http:","https:"].includes(u.protocol))url=u.href}catch{}
 const card=document.createElement(url?"a":"div");card.className="link-card";card.style.animationDelay=`${Math.min(i*28,240)}ms`;
 if(url){card.href=url;card.target="_blank";card.rel="noopener noreferrer";card.setAttribute("aria-label",`${language==="BN"?x.bn:x.name} — opens in a new tab`)}
 const icon=document.createElement("div");icon.className="link-icon";icon.textContent=x.icon||"↗";icon.setAttribute("aria-hidden","true");
 const content=document.createElement("div");content.className="link-content";const h=document.createElement("h3");h.textContent=language==="BN"?x.bn:x.name;const p=document.createElement("p");p.textContent=language==="BN"?x.bnDescription:x.description;content.append(h,p);
 const ext=document.createElement("span");ext.className="external-icon";ext.textContent=url?"↗":"•";ext.setAttribute("aria-hidden","true");card.append(icon,content,ext);linkContainer.appendChild(card)});
 $("#resultCount").textContent=language==="BN"?new Intl.NumberFormat("bn-BD").format(items.length):items.length;
 $("#activeCategoryLabel").textContent=activeCategory==="All"?t("allResources"):categoryName(activeCategory);
 emptyState.hidden=items.length>0;linkContainer.hidden=!items.length;
}
function reset(){activeCategory="All";searchInput.value="";renderCategories();renderLinks()}
$("#langEN").addEventListener("click",()=>{language="EN";localStorage.setItem("lh-language",language);applyLanguage()});
$("#langBN").addEventListener("click",()=>{language="BN";localStorage.setItem("lh-language",language);applyLanguage()});
$("#themeToggle").addEventListener("click",()=>{theme=theme==="dark"?"light":"dark";localStorage.setItem("lh-theme",theme);applyTheme()});
$("#clearFilters").addEventListener("click",reset);$("#emptyReset").addEventListener("click",reset);searchInput.addEventListener("input",renderLinks);
document.addEventListener("keydown",e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();searchInput.focus()}if(e.key==="Escape"){searchInput.value="";renderLinks();searchInput.blur()}});
$("#todayLabel")?.remove();
applyLanguage();applyTheme();
// Admin password gate (client-side convenience only; not secure authentication).
const ADMIN_PASSWORD = "L@fargeholcimsylhet";
const adminModal = $("#adminModal");
const adminPassword = $("#adminPassword");
function closeAdminModal(){adminModal.hidden=true;adminPassword.value="";$("#adminError").hidden=true}
$("#adminButton").addEventListener("click",()=>{adminModal.hidden=false;adminPassword.focus()});
$("#adminClose").addEventListener("click",closeAdminModal);
adminModal.addEventListener("click",e=>{if(e.target===adminModal)closeAdminModal()});
$("#adminLoginForm").addEventListener("submit",e=>{e.preventDefault();if(adminPassword.value===ADMIN_PASSWORD){window.location.href="admin.html"}else{$("#adminError").hidden=false;adminPassword.select()}});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!adminModal.hidden)closeAdminModal()});
