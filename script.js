// AI video slots are intentionally empty for now. Add your real videos later in this array.
const videos = [
    {
        id: 1,
        category: "ugc",
        title: "JUPI Hydration Product",
        description: "A story-driven AI UGC video.",
        driveId: "1b6Ol8Nrxi3JfRpJFLYOYgI5rSy0hg9FR",
        thumbnail: "https://drive.google.com/thumbnail?id=1b6Ol8Nrxi3JfRpJFLYOYgI5rSy0hg9FR&sz=w1000",
        label: "AI UGC"
    },

    {
        id: 2,
        category: "ugc",
        title: "JUPI Hydration Product",
        description: "An AI UGC video featuring a product story.",
        driveId: "1scAU_VcWgn0rdNBPPLcVDJEnuUGWb-aD",
        thumbnail: "https://drive.google.com/thumbnail?id=1scAU_VcWgn0rdNBPPLcVDJEnuUGWb-aD&sz=w1000",
        label: "AI UGC"
    },

    {
        id: 3,
        category: "ugc",
        title: "JUPI Hydration Product",
        description: "An AI UGC video teaching remedy and featuring a product.",
        driveId: "1yX2AOPEqn7yMmk0sdUykUymbh6FW5EMq",
        thumbnail: "https://drive.google.com/thumbnail?id=1yX2AOPEqn7yMmk0sdUykUymbh6FW5EMq&sz=w1000",
        label: "AI UGC"
    },

    {
        id: 4,
        category: "ugc",
        title: "Soursop Bitters",
        description: "A symptom-driven AI UGC video.",
        driveId: "1_CSexI4AbnrQmQHl7WM49qvcDhYB2Igy",
        thumbnail: "https://drive.google.com/thumbnail?id=1_CSexI4AbnrQmQHl7WM49qvcDhYB2Igy&sz=w1000",
        label: "AI UGC"
    },

    {
        id: 5,
        category: "ugc",
        title: "Recipe Video",
        description: "An AI UGC Video teaching healthy recipe.",
        driveId: "1IUsDSY5Mh1iqrQTu04U2UCjkc75UWWFR",
        thumbnail: "https://drive.google.com/thumbnail?id=1IUsDSY5Mh1iqrQTu04U2UCjkc75UWWFR&sz=w1000",
        label: "AI UGC"
    },

    {
        id: 6,
        category: "ugc",
        title: "JUPI Hydration Product",
        description: "A warning-driven AI UGC Video.",
        driveId: "1CNFNEUhe1b5TwBxX5yTajekPkefi4gbm",
        thumbnail: "https://drive.google.com/thumbnail?id=1CNFNEUhe1b5TwBxX5yTajekPkefi4gbm&sz=w1000",
        label: "AI UGC"
    },

    {
        id: 7,
        category: "ugc",
        title: "Soursop Bitters",
        description: "AI UGC Video that promotes healthy habits.",
        driveId: "1ZTIMJvzjYQYKfpXoJQFpZ6CUzyBN_fmq",
        thumbnail: "https://drive.google.com/thumbnail?id=1ZTIMJvzjYQYKfpXoJQFpZ6CUzyBN_fmq&sz=w1000",
        label: "AI UGC"
    },

    {
        id: 8,
        category: "ugc",
        title: "Blueberry Tips",
        description: "AI UGC Video that reveals a secret.",
        driveId: "17lMvZyDbrqLE6QX5PhUwOzxSczh4pD90",
        thumbnail: "https://drive.google.com/thumbnail?id=17lMvZyDbrqLE6QX5PhUwOzxSczh4pD90&sz=w1000",
        label: "AI UGC"
    },

    {
        id: 9,
        category: "vsl",
        title: "Educational VSL",
        description: "A video sales letter that educates everyone regarding parasites.",
        driveId: "1dqkHQcOa_SajV2vIaXhswr9SwQUigkdx",
        thumbnail: "https://drive.google.com/thumbnail?id=1dqkHQcOa_SajV2vIaXhswr9SwQUigkdx&sz=w1000",
        label: "VSL"
    },

    {
        id: 10,
        category: "vsl",
        title: "Warning VSL",
        description: "A video sales letter that provides symptoms and remedy.",
        driveId: "1ibaO6Esc9yojX5unG68BqUJdnwNV5BIK",
        thumbnail: "https://drive.google.com/thumbnail?id=1ibaO6Esc9yojX5unG68BqUJdnwNV5BIK&sz=w1000",
        label: "VSL"
    },

    {
        id: 11,
        category: "vsl",
        title: "Product VSL",
        description: "A video sales letter with storytelling and product visuals.",
        driveId: "1AL7egUPw04hvRSLR480beZIbgn8Uoy3-",
        thumbnail: "https://drive.google.com/thumbnail?id=1AL7egUPw04hvRSLR480beZIbgn8Uoy3-&sz=w1000",
        label: "VSL"
    },

    {
        id: 12,
        category: "podcast",
        title: "Testimony Podcast",
        description: "A podcast-style ADS that provides first-hand experience.",
        driveId: "1FWLIS9Hv0NHnWNyyUJ5xxRcGHUrPzd5X",
        thumbnail: "https://drive.google.com/thumbnail?id=1FWLIS9Hv0NHnWNyyUJ5xxRcGHUrPzd5X&sz=w1000",
        label: "PODCAST"
    },

    {
        id: 13,
        category: "pixar",
        title: "Product ADS",
        description: "A Pixar-style ADS with personal struggle and remedy.",
        driveId: "1z9wrue7YqD7ycHUALrTy1hNVVloEuPmK",
        thumbnail: "https://drive.google.com/thumbnail?id=1z9wrue7YqD7ycHUALrTy1hNVVloEuPmK&sz=w1000",
        label: "PIXAR"
    },

];
const grid=document.getElementById('videoGrid'),tabs=[...document.querySelectorAll('.tabs button')],modal=document.getElementById('modal'),frame=document.getElementById('frame'),empty=document.getElementById('empty'),title=document.getElementById('mt'),desc=document.getElementById('md'),mk=document.getElementById('mk');
function render(f='all'){grid.innerHTML='';const list=videos.filter(v=>f==='all'||v.category===f);if(!list.length){grid.innerHTML=`<div class="empty">${f==='all'?'Your AI video samples will appear here.':'No '+f.toUpperCase()+' samples added yet.'}<br><br><span style="color:#36efb0">Ready for your actual 9:16 work.</span></div>`;return}list.forEach(v=>{const c=document.createElement('article');c.className='video';c.innerHTML=`<div class="thumb">${v.thumbnail?`<img src="${v.thumbnail}" alt="${v.title}">`:''}<div class="play">▶</div></div><div class="vinfo"><b>${v.label}</b><h3>${v.title}</h3><p>${v.description}</p></div>`;c.onclick=()=>openVideo(v);grid.appendChild(c)})}
function openVideo(v){title.textContent=v.title;desc.textContent=v.description;mk.textContent=v.label;if(v.driveId){frame.src=`https://drive.google.com/file/d/${v.driveId}/preview`;frame.style.display='block';empty.style.display='none'}else{frame.src='';frame.style.display='none';empty.style.display='grid'}modal.classList.add('open');document.body.style.overflow='hidden'}
function closeVideo(){modal.classList.remove('open');frame.src='';document.body.style.overflow=''}
tabs.forEach(t=>t.onclick=()=>{tabs.forEach(x=>x.classList.remove('active'));t.classList.add('active');render(t.dataset.filter)});document.getElementById('close').onclick=closeVideo;document.querySelector('.backdrop').onclick=closeVideo;document.addEventListener('keydown',e=>{if(e.key==='Escape')closeVideo()});document.getElementById('year').textContent=new Date().getFullYear();render();
