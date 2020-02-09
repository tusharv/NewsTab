const DEFAULTS = {
    COUNTRY: "in",
    CATEGORY: "general",
    THEME: 'single',
    PAGESIZE: 20,
    PAGE: 1
  }
  
  const URLS = {
    FEEDURL: "https://newsapi.org/v2/top-headlines?country=#COUNTRY#&category=#CATEGORY#&pagesize=#PAGESIZE#&page=#PAGE#",
    QUERYURL: "https://newsapi.org/v2/everything?q=#QUERY#&from=#DATE#&sortBy=publishedAt&page=#PAGE#",
    FALLBACK_IMAGE: 'https://via.placeholder.com/500/000000/FFFFFF/?text=Image%20Not%20Found',
  }
  
  const LOCALSTORAGE = {
    COUNTRY: 'country',
    CATEGORY: 'category',
    THEME: 'theme',
    PAGESIZE: 'pagesize',
    PAGE: 'page'
  }
  
  const COUNTRY_LIST = {
    ae:{
      name:'ae',
      display:'United Arab Emirates',
      flag:'ae.png'
      },
    ar:{
        name:'ar',
        display:'Argentina',
        flag:'ar.png'
        },
    at:{
        name:'at',
        display:'Austria',
        flag:'at.png'
        },
    au:{
        name:'au',
        display:'Australia',
        flag:'au.png'
        },
    be:{
        name:'be',
        display:'Belgium',
        flag:'be.png'
        },
    bg:{
        name:'bg',
        display:'Bulgaria',
        flag:'bg.png'
        },
    br:{
        name:'br',
        display:'Brazil',
        flag:'br.png'
        },
    ca:{
        name:'ca',
        display:'Canada',
        flag:'ca.png'
        },
    ch:{
        name:'ch',
        display:'Switzerland',
        flag:'ch.png'
        },
    cn:{
        name:'cn',
        display:'China',
        flag:'cn.png'
    },
    co:{
        name:'co',
        display:'Colombia',
        flag:'co.png'
    },
    cu:{
        name:'cu',
        display:'Cuba',
        flag:'cu.png'
    },
    cz:{
        name:'cz',
        display:'Czechia',
        flag:'cz.png'
    },
    de:{
        name:'de',
        display:'Germany',
        flag:'de.png'
    },
    eg:{
        name:'eg',
        display:'Egypt',
        flag:'eg.png'
    },
    fr:{
        name:'fr',
        display:'France',
        flag:'fr.png'
    },
    gb:{
        name:'gb',
        display:'United Kingdom',
        flag:'gb.png'
    },
    gr:{
        name:'gr',
        display:'Greece',
        flag:'gr.png'
    },
    hk:{
        name:'hk',
        display:'Hong Kong',
        flag:'hk.png'
    },
    hu:{
        name:'hu',
        display:'Hungary',
        flag:'hu.png'
    },
    id:{
        name:'id',
        display:'Indonesia',
        flag:'id.png'
    },
    ie:{
        name:'ie',
        display:'Ireland',
        flag:'ie.png'
    },
    il:{
        name:'il',
        display:'Israel',
        flag:'il.png'
    },
    in:{
        name:'in',
        display:'India',
        flag:'in.png'
    },
    it:{
        name:'it',
        display:'Italy',
        flag:'it.png'
    },
    jp:{
        name:'jp',
        display:'Japan',
        flag:'jp.png'
    },
    kr:{
        name:'kr',
        display:'Republic of Korea',
        flag:'kr.png'
    },
    lt:{
        name:'lt',
        display:'Lithuania',
        flag:'lt.png'
    },
    lv:{
        name:'lv',
        display:'Latvia',
        flag:'lv.png'
    },
    ma:{
        name:'ma',
        display:'Morocco',
        flag:'ma.png'
    },
    mx:{
        name:'mx',
        display:'Mexico',
        flag:'mx.png'
    },
    my:{
        name:'my',
        display:'Malaysia',
        flag:'my.png'
    },
    ng:{
        name:'ng',
        display:'Nigeria',
        flag:'ng.png'
    },
    nl:{
        name:'nl',
        display:'Netherlands',
        flag:'nl.png'
    },
    no:{
        name:'no',
        display:'Norway',
        flag:'no.png'
    },
    nz:{
        name:'nz',
        display:'New Zealand',
        flag:'nz.png'
    },
    ph:{
        name:'ph',
        display:'Philippines',
        flag:'ph.png'
    },
    pl:{
        name:'pl',
        display:'Poland',
        flag:'pl.png'
    },
    pt:{
        name:'pt',
        display:'Portugal',
        flag:'pt.png'
    },
    ro:{
        name:'ro',
        display:'Romania',
        flag:'ro.png'
    },
    rs:{
        name:'rs',
        display:'Serbia',
        flag:'rs.png'
    },
    ru:{
        name:'ru',
        display:'Russian Federation',
        flag:'ru.png'
    },
    sa:{
        name:'sa',
        display:'Saudi Arabia',
        flag:'sa.png'
    },
    se:{
        name:'se',
        display:'Sweden',
        flag:'se.png'
    },
    sg:{
        name:'sg',
        display:'Singapore',
        flag:'sg.png'
    },
    si:{
        name:'si',
        display:'Slovenia',
        flag:'si.png'
    },
    sk:{
        name:'sk',
        display:'Slovakia',
        flag:'sk.png'
    },
    th:{
        name:'th',
        display:'Thailand',
        flag:'th.png'
    },
    tr:{
        name:'tr',
        display:'Turkey',
        flag:'tr.png'
    },
    tw:{
        name:'tw',
        display:'Taiwan',
        flag:'tw.png'
    },
    ua:{
        name:'ua',
        display:'Ukraine',
        flag:'ua.png'
    },
    us:{
        name:'us',
        display:'United States of America',
        flag:'us.png'
    },
    ve:{
        name:'ve',
        display:'Venezuela',
        flag:'ve.png'
    },
    za:{
        name:'za',
        display:'South Africa',
        flag:'za.png'
    }
  }
  
  const CATEGORY_LIST = {
    business: {
      name: 'business',
      display: 'Business'
    },
    entertainment: {
      name: 'entertainment',
      display: 'Entertainment'
    },
    general: {
      name: 'general',
      display: 'General'
    },
    health: {
      name: 'health',
      display: 'Health'
    },
    science: {
      name: 'science',
      display: 'Science'
    },
    sports: {
      name: 'sports',
      display: 'Sports'
    },
    technology: {
      name: 'technology',
      display: 'Technology'
    },
  }

  const THEME_LIST = {
    single: {
      name: 'single',
      display: 'Single Column'
    },
    multi: {
      name: 'multi',
      display: 'Multi Column'
    },
  }
  
  function fetchFeed(url) {
    let loader = document.querySelector('.spinner');
    let message = document.querySelector('.message');
    let newsContainer = document.querySelector(".news");

    makeRequest(url)
      .then(res => {
        let { articles, totalResults, status } = JSON.parse(res.responseText);
        if(status.toLocaleLowerCase() === 'ok'){
          loadNews(articles, totalResults, new Date());
          loader.classList.add('hidden');
        }
      })
      .catch(err => {
        console.log(err);

        newsContainer.classList.add('error');

        loader.classList.remove('hidden');
        message.classList.remove('hidden');

        message.innerHTML = err.statusText;
      });
  }
  
  function loadNews(articles, totalResults, lastUpdateTime) {
    let newsContainer = document.querySelector(".news");
    let template = document.querySelector("#newstemplate");
    let results = document.querySelector('.newsResults');
    let lastUpdated = document.querySelector('.newsLastUpdated');
    results.innerHTML = `Total <strong>${totalResults}</strong> results found`;
    lastUpdated.innerHTML = moment(lastUpdateTime).fromNow();
  
    articles.forEach((article, index) => {

      if(article.author === null || article.author.length === 0){
        article.author = article.source.name;
      }
  
      if(article.content === null || article.content.length === 0){
        article.content = "Click link to know more..";
      }
      
      if (article.author && article.content) {
        let newsNode = document.importNode(template.content, true);
  
        let title = newsNode.querySelector(".newsTitle");
        title.innerText = article.title;
        title.setAttribute("href",article.url);
  
        let count = newsNode.querySelector('.newsCount')
        count.innerText = `#${index +1}`;
  
        let author = newsNode.querySelector(".newsAuthor");
        author.innerHTML =
          `<strong>${article.author}</strong> Published about ${moment(article.publishedAt).startOf('m').fromNow()}`;
  
        let desc = newsNode.querySelector(".newsDescription");
        desc.innerHTML = article.content;
  
        let img = newsNode.querySelector(".newsImage");
        img.src = article.urlToImage || URLS.FALLBACK_IMAGE;
        newsContainer.appendChild(newsNode);
        
        img.addEventListener("error", function(e){
          e.target.setAttribute("src", URLS.FALLBACK_IMAGE);
        });
        
      }
    });
  }
  
  
  function makeRequest(url, method) {
    var request = new XMLHttpRequest();
    return new Promise(function(resolve, reject) {
      request.onreadystatechange = function() {
        if (request.readyState !== 4) return;
  
        if (request.status >= 200 && request.status < 300) {
          resolve(request);
        } else {
          reject({
            status: request.status,
            statusText: request.statusText
          });
        }
      }
      request.open(method || "GET", url, true);
      //News API is Free - Please use your own Key from https://newsapi.org/ :)
      request.setRequestHeader('X-Api-Key', '4c2159b38736423cb393853bda9e642f');
      request.send();
    });
  }
  
  function onSearch(e){
    let closeButton = document.querySelector('.close');
    if(e.target.value.length > 0){
      closeButton.classList.remove('hidden');
      if (e.keyCode === 13) {
        window.location.href = `${window.location.protocol}//${window.location.host}${window.location.pathname}?q=${e.target.value}`;
      }else if(e.keyCode === 27) {
        clearSearch(e.target, closeButton);
      }
    }else{
      closeButton.classList.add('hidden');
    }
  }
  
  function getParams(url) {
      let params = {};
      let parser = document.createElement('a');
      parser.href = url;
      let query = parser.search.substring(1);
      let vars = query.split('&');
      for (let i = 0; i < vars.length; i++) {
          let pair = vars[i].split('=');
          params[pair[0]] = decodeURIComponent(pair[1]);
      }
      return params;
  }
  
  function updateCountry(e){
    localStorage.setItem(LOCALSTORAGE.COUNTRY, e.target.value);
    window.location.href = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;
  }
  
  function updateCategory(e){
    localStorage.setItem(LOCALSTORAGE.CATEGORY, e.target.value);
    window.location.href = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;
  }

  function updateTheme(e){
    changeTheme(e.target.value);
  }

  function changeTheme(theme = DEFAULTS.THEME){
    switch (theme){
      case 'single':
          document.querySelector('.news').classList.remove('card-theme');
          localStorage.setItem(LOCALSTORAGE.THEME, theme);
          break;
      case 'multi':
          document.querySelector('.news').classList.add('card-theme');
          localStorage.setItem(LOCALSTORAGE.THEME, theme);
          break;
      default:
          break;
    }
  }
  
  function populateList(elem, group, key){
    let list = Object.keys(group);
    for(var i=0;i<list.length;i++){ 
      let option = document.createElement('option');
      let selected = localStorage.getItem(key);
      option.value = group[list[i]].name;
      option.innerText = group[list[i]].display;
  
      if(selected === list[i]){
        option.selected = true;
      }
  
      elem.appendChild(option);
    }
  }
  
  function updateTitle(){
    let country = COUNTRY_LIST[(localStorage.getItem(LOCALSTORAGE.COUNTRY) || DEFAULTS.COUNTRY)].display;
    let category = CATEGORY_LIST[(localStorage.getItem(LOCALSTORAGE.CATEGORY) || DEFAULTS.CATEGORY)].display;
  
    document.querySelector('title').innerText = `${category} News from ${country}`;
  }

  function clearSearch(search, closeButton){
    closeButton.classList.add('hidden');
    search.value = "";
    search.focus();

    let u = new URL(document.URL);
    u.search = "";
    window.location.href = u.href;
  }
  
  function init() {
    let param = getParams(window.location.href);
    let search = document.getElementById('search');
    let closeButton = document.querySelector('.close');
    let countrySelector = document.querySelector('#countrySelector');
    let categorySelector = document.querySelector('#categorySelector');
    let themeSelector = document.querySelector('#themeSelector');
    let d = new Date();
    
    if(search) search.addEventListener('keydown', onSearch);
    if(closeButton) closeButton.addEventListener('click', (e)=>{
      clearSearch(search, closeButton);
    })

    if(param.q){
      search.value = param.q;
      closeButton.classList.remove('hidden');
      
      fetchFeed(
        URLS.QUERYURL
          .replace('#QUERY#',param.q)
          .replace('#DATE#',`${d.getFullYear()}-${"0" + d.getMonth()+1}-${d.getDate()}`)
          .replace('#PAGE#', localStorage.getItem(LOCALSTORAGE.PAGE) || DEFAULTS.PAGE)
        );
    }else{
      fetchFeed(
        URLS.FEEDURL
          .replace('#COUNTRY#', (localStorage.getItem(LOCALSTORAGE.COUNTRY) || DEFAULTS.COUNTRY))
          .replace('#CATEGORY#', (localStorage.getItem(LOCALSTORAGE.CATEGORY) || DEFAULTS.CATEGORY))
          .replace('#PAGESIZE#', (localStorage.getItem(LOCALSTORAGE.PAGESIZE) || DEFAULTS.PAGESIZE))
          .replace('#PAGE#', (localStorage.getItem(LOCALSTORAGE.PAGE) || DEFAULTS.PAGE))
        );  
    }
    
    populateList(countrySelector, COUNTRY_LIST, LOCALSTORAGE.COUNTRY);
    populateList(categorySelector, CATEGORY_LIST, LOCALSTORAGE.CATEGORY);
    populateList(themeSelector, THEME_LIST, LOCALSTORAGE.THEME);
    
    countrySelector.addEventListener('change', updateCountry);
    categorySelector.addEventListener('change', updateCategory);
    themeSelector.addEventListener('change', updateTheme);
  
    updateTitle();

    changeTheme((localStorage.getItem(LOCALSTORAGE.THEME) || DEFAULTS.THEME));
  }
  
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }