import{A as v,S as w,i as f}from"./assets/vendor-58583ddc.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();async function p(o,t){return(await v.create({baseURL:"https://pixabay.com/api/",params:{key:"43101979-d4b3d95f27087e7220544f5cb",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}}).get("")).data}const S=new w(".gallery-link",{captionsData:"alt",captionDelay:250}),m=document.querySelector(".gallery");function M(o){const{largeImageURL:t,webformatURL:c,tags:s,likes:e,views:r,comments:a,downloads:E}=o;return`<li class="gallery-item">
  <a class="gallery-link"
    href="${t}"
    ><img class="img" loading="lazy"
      src="${c}"
      alt="${s}"
  />
  <ul class="img-dscr">
    <li>
      <p><b>Likes</b><br /> ${e}</p>
    </li>
    <li>
      <p><b>Views</b><br /> ${r}</p>
    </li>
    <li>
      <p><b>Comments</b><br /> ${a}</p>
    </li>
    <li>
      <p><b>Downloads</b><br /> ${E}</p>
    </li>
  </ul>
  </a>
</li>

`}function q(o){return o.map(M).join("")}function g(o){const t=q(o);m.insertAdjacentHTML("beforeend",t),S.refresh()}const i={formEl:document.querySelector(".form"),inputEl:document.querySelector("input"),loaderEl:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-btn")};let u,l=1,h=0;const B=15;let n;i.formEl.addEventListener("submit",P);i.loadMoreBtn.addEventListener("click",x);async function P(o){if(o.preventDefault(),y(),m.innerHTML="",u=i.inputEl.value.trim(),u==="")return d(),f.warning({title:"Caution",message:"Please complete the field!",position:"topRight"});l=1;try{if(n=await p(u,l),h=Math.ceil(n.totalHits/B),n.hits.length===0)return d(),b(),f.info({title:"Sorry",message:"There are no images matching your search query. Please try again!",position:"topRight"});g(n.hits)}catch(t){console.error("Error fetching images:",t)}finally{d()}L(),i.inputEl.value=""}async function x(o){y(),l+=1;try{n=await p(u,l),g(n.hits)}catch(t){console.error("Error fetching images:",t)}finally{d(),L(),T()}}function y(){i.loaderEl.classList.add("is-open")}function d(){i.loaderEl.classList.remove("is-open")}function R(){i.loadMoreBtn.classList.add("is-open")}function b(){i.loadMoreBtn.classList.remove("is-open")}function L(){if(l>=h)return b(),f.info({title:"Sorry",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});R()}function T(){const t=m.firstElementChild.getBoundingClientRect().height*2;scrollBy({top:t,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
