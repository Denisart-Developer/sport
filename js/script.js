"use struct"
document.addEventListener('DOMContentLoaded', function(){
//Фиксированный header
window.addEventListener('scroll', () => {
    const windowsScrollTop = window.pageYOffset;
    
    if(windowsScrollTop > 50){
        const header = document.querySelector('.header__top');
        header.classList.add('_fixed');
    }
    if(windowsScrollTop < 50){
        const header = document.querySelector('.header__top');
        header.classList.remove('_fixed');
    }
})
//=====



function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {

    options = {
      path: '/',
      // при необходимости добавьте другие значения по умолчанию
      ...options
    };
  
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }
  
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
  
    document.cookie = updatedCookie;
  }
setCookie('visit', 'true');
if((!getCookie('cookie') === 'true') || (getCookie('cookie') === undefined)){
    const dropItemPrize = document.querySelectorAll('.drop-item-header');
    for(let dropItemPriz of dropItemPrize){
        dropItemPriz.classList.add('open');
    }
    setCookie('cookie', 'true');
}


const body = document.body;
body.addEventListener('click', function(event){
    //== Меню бургер
    if(event.target.closest('.icon-menu')){
        const menuIcon = document.querySelector('.icon-menu');
        const menuBody = document.querySelector('.menu__body');
        menuIcon.classList.toggle('active');
        menuBody.classList.toggle('open');
    }
    //выпадающее окно при клике на иконку приза
    if(event.target.closest('.header__item-prize')){
        const dropItemPrize = document.querySelectorAll('.drop-item-header');
        for(let dropItemPriz of dropItemPrize){
            dropItemPriz.classList.toggle('open');
        }
    }
    if(event.target.closest('.drop-item-header')){
        if(event.target.closest('.close-icon')){
            const dropItemPrize = document.querySelectorAll('.drop-item-header');
            for(let dropItemPriz of dropItemPrize){
                dropItemPriz.classList.remove('open');
            }
        }
        
    }
    
    if(event.target.closest('.wrapper')){
        if(!event.target.closest('.nav-sublist__button')){
            const dropListNavs = document.querySelectorAll('.drop-list-nav');
            for(let dropListNav of dropListNavs){
                dropListNav.classList.remove('open');
            }
        }
        
    }
    if(event.target.closest('.wrapper')){
        if(!event.target.closest('.filter__select-container')){
            const selectLists = document.querySelectorAll('.filter__select-list');
            const selects = document.querySelectorAll('.filter__select')
            for(let selectList of selectLists){
                selectList.classList.remove('_open');
            }
            for(let select of selects){
                select.classList.remove('active');
            }
        }
        
    }
    if(event.target.closest('.wrapper')){
        if(!event.target.closest('.nav-calendar')){
            if(!event.target.closest('.calendar-filter')){
                const calendarFilters = document.querySelectorAll('.calendar-filter');
               for(let calendarFilter of calendarFilters){
                    calendarFilter.classList.remove('_active');
                }
               
            }
        }
        
        
    }
})
const dropNavButtons = document.querySelectorAll('.nav-sublist__button');
const dropListNavs = document.querySelectorAll('.header__drop-list');    
for (let index = 0; index < dropNavButtons.length; index++) {
    const dropNavButton = dropNavButtons[index];
    const dropListNav = dropListNavs[index];
    dropNavButton.addEventListener('mouseover', function(){
        for(let dropListNav of dropListNavs){
            dropListNav.classList.remove('open')
        }
        dropListNav.classList.add('open');

    })
    dropListNav.addEventListener('mouseleave', function(){
        dropListNav.classList.remove('open');
    })
}
//
const mediaQuery768max = window.matchMedia('(max-width: 768px)')
function handleTablet768max(e) {
    if (e.matches) {
        const searchButton = document.querySelector('.search__button');
        const searchInput = document.querySelector('.search__input');
        const headerClose = document.querySelector('.header__close');
        searchButton.addEventListener('click', function(e){
            e.preventDefault();
            searchInput.classList.add('active');
            headerClose.classList.add('_active');
        })
        headerClose.addEventListener('click', function(){
            searchInput.classList.remove('active');
            headerClose.classList.remove('_active');
        })
       //Сокращение текста
       const textItems = document.querySelectorAll('.spoller-tenis__team');
        for (let index = 0; index < textItems.length; index++) {
            const textItem = textItems[index];
            const textInner = textItem.lastElementChild.innerHTML;
            if(textInner.length > 15){
                const slicedText = textInner.slice(0,15);
                textItem.lastElementChild.innerHTML = slicedText + '...';
            }
            const mediaQuery768min = window.matchMedia('(min-width: 768px)')
            function handleTablet768min(e) {
            if (e.matches) {
                textItem.lastElementChild.innerHTML = textInner;
            }
        }
            mediaQuery768min.addListener(handleTablet768min);
            handleTablet768min(mediaQuery768min);
        }
        //Сокращение текста
        const clubItems = document.querySelectorAll('.group__item-team');
        for (let index = 0; index < clubItems.length; index++) {
            const textItem = clubItems[index];
            const textInner = textItem.lastElementChild.innerHTML;
            if(textInner.length > 10){
                const slicedText = textInner.slice(0,10);
                textItem.lastElementChild.innerHTML = slicedText + '...';
                const mediaQuery768min = window.matchMedia('(min-width: 768px)')
            function handleTablet768min(e) {
            if (e.matches) {
                textItem.lastElementChild.innerHTML = textInner;
            }
        }
            mediaQuery768min.addListener(handleTablet768min);
            handleTablet768min(mediaQuery768min);
            }
        }
    }
}
mediaQuery768max.addListener(handleTablet768max);
handleTablet768max(mediaQuery768max);
//
const mediaQuery700min = window.matchMedia('(min-width: 700px)')
function handleTablet700min(e) {
    if (e.matches) {
        const footerSpollers = document.querySelectorAll('.footer__column._spoller');
        for(let footerSpoller of footerSpollers){
            footerSpoller.removeAttribute('data-spollers');
        }
        const footerNavs = document.querySelectorAll('.footer__nav');
        for(let footerNav of footerNavs){
            footerNav.removeAttribute('hidden');
        }
        spoller();
    }
}
mediaQuery700min.addListener(handleTablet700min);
handleTablet700min(mediaQuery700min);
//=======================================
const mediaQuery700max = window.matchMedia('(max-width: 700px)')
function handleTablet700max(e) {
    if (e.matches) {
        const footerSpollers = document.querySelectorAll('.footer__column._spoller');
        for(let footerSpoller of footerSpollers){
            footerSpoller.setAttribute('data-spollers', '');
        }
        spoller();
    }
}
mediaQuery700max.addListener(handleTablet700max);
handleTablet700max(mediaQuery700max);
function spoller(){
    /*====================SPOLLER===============*/
const spollersArray = document.querySelectorAll('[data-spollers]');
if (spollersArray.length > 0) {
    // Получение обычных слойлеров
    const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
        return !item.dataset.spollers.split(",")[0];
    });
    // Инициализация обычных слойлеров
    if (spollersRegular.length > 0) {
        initSpollers(spollersRegular);
    }

    // Получение слойлеров с медиа запросами
    const spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {
        return item.dataset.spollers.split(",")[0];
    });

    // Инициализация слойлеров с медиа запросами
    if (spollersMedia.length > 0) {
        const breakpointsArray = [];
        spollersMedia.forEach(item => {
            const params = item.dataset.spollers;
            const breakpoint = {};
            const paramsArray = params.split(",");
            breakpoint.value = paramsArray[0];
            breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
            breakpoint.item = item;
            breakpointsArray.push(breakpoint);
        });
    
        // Получаем уникальные брейкпоинты
        let mediaQueries = breakpointsArray.map(function (item) {
            return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
        });
        mediaQueries = mediaQueries.filter(function (item, index, self) {
            return self.indexOf(item) === index;
        });
    
        // Работаем с каждым брейкпоинтом
        mediaQueries.forEach(breakpoint => {
            const paramsArray = breakpoint.split(",");
            const mediaBreakpoint = paramsArray[1];
            const mediaType = paramsArray[2];
            const matchMedia = window.matchMedia(paramsArray[0]);
        
            // Объекты с нужными условиями
            const spollersArray = breakpointsArray.filter(function (item) {
                if (item.value === mediaBreakpoint && item.type === mediaType) {
                    return true;
                }
            });
            // Событие
            matchMedia.addListener(function () {
                initSpollers(spollersArray, matchMedia);
            });
            initSpollers(spollersArray, matchMedia);
        });
    }
    // Инициализация
    function initSpollers(spollersArray, matchMedia = false) {
        spollersArray.forEach(spollersBlock => {
            spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
            if (matchMedia.matches || !matchMedia) {
                spollersBlock.classList.add('_init');
                initSpollerBody(spollersBlock);
                spollersBlock.addEventListener("click", setSpollerAction);
            } else {
                spollersBlock.classList.remove('_init');
                initSpollerBody(spollersBlock, false);
                spollersBlock.removeEventListener("click", setSpollerAction);
            }
        });
    }
    // Работа с контентом
    function initSpollerBody(spollersBlock, hideSpollerBody = true) {
        const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
        if (spollerTitles.length > 0) {
            spollerTitles.forEach(spollerTitle => {
                if (hideSpollerBody) {
                    spollerTitle.removeAttribute('tabindex');
                    if (!spollerTitle.classList.contains('_active')) {
                        spollerTitle.nextElementSibling.hidden = true;
                    }
                } else {
                    spollerTitle.setAttribute('tabindex', '-1');
                    spollerTitle.nextElementSibling.hidden = false;
                }
            });
        }
    }
    function setSpollerAction(e) {
        const el = e.target;
        if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
            const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
            const spollersBlock = spollerTitle.closest('[data-spollers]');
            const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;
            if (!spollersBlock.querySelectorAll('._slide').length) {
                if (oneSpoller && !spollerTitle.classList.contains('_active')) {
                    hideSpollersBody(spollersBlock);
                }
                spollerTitle.classList.toggle('_active');
                _slideToggle(spollerTitle.nextElementSibling, 500);
            }
            e.preventDefault();
        }
    }
    function hideSpollersBody(spollersBlock) {
        const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');
        if (spollerActiveTitle) {
            spollerActiveTitle.classList.remove('_active');
            _slideUp(spollerActiveTitle.nextElementSibling, 500);
        }
    }
}
}

//=================

//SlideToggle
let _slideUp = (target, duration = 500) => {
    if (!target.classList.contains('_slide')) {
        target.classList.add('_slide');
        target.style.transitionProperty = 'height, margin, padding';
        target.style.transitionDuration = duration + 'ms';
        target.style.height = target.offsetHeight + 'px';
        target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        window.setTimeout(() => {
            target.hidden = true;
            target.style.removeProperty('height');
            target.style.removeProperty('padding-top');
            target.style.removeProperty('padding-bottom');
            target.style.removeProperty('margin-top');
            target.style.removeProperty('margin-bottom');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
            target.classList.remove('_slide');
        }, duration);
    }
}
let _slideDown = (target, duration = 500) => {
    if (!target.classList.contains('_slide')) {
        target.classList.add('_slide');
        if (target.hidden) {
            target.hidden = false;
        }
        let height = target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        target.offsetHeight;
        target.style.transitionProperty = "height, margin, padding";
        target.style.transitionDuration = duration + 'ms';
        target.style.height = height + 'px';
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        window.setTimeout(() => {
            target.style.removeProperty('height');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
            target.classList.remove('_slide');
        }, duration);
    }
}
let _slideToggle = (target, duration = 500) => {
    if (target.hidden) {
        return _slideDown(target, duration);
    } else {
        return _slideUp(target, duration);
    }
}
//more
const contentLasts = document.querySelectorAll('.last-meeting__more-content');
const buttonLasts = document.querySelectorAll('.item-play__more')
if(contentLasts.length > 0){
    for(let contentLast of contentLasts){
        _slideUp(contentLast, 500);
    }
    
}
for(let buttonLast of buttonLasts){
    buttonLast.addEventListener('click', function(){
        if(contentLasts.length > 0){
            for(let contentLast of contentLasts){
                _slideToggle(contentLast, 500);
                buttonLast.classList.toggle('_active')
            }
            
        }
    })
}
const contentItems = document.querySelectorAll('.card-info__more-container');
const moreButtons = document.querySelectorAll('.card-info__more')
if(contentItems.length > 0){
    for(let contentItem of contentItems){
        _slideUp(contentItem, 500);
    }
    
}
for(let moreButton of moreButtons){
    moreButton.addEventListener('click', function(){
        if(contentItems.length > 0){
            for(let contentItem of contentItems){
                _slideToggle(contentItem, 500);
                moreButton.classList.toggle('_active')
            }
            
        }
    })
}
//Сокращение текста
const textItems = document.querySelectorAll('.grid__teams-item-title');
for (let index = 0; index < textItems.length; index++) {
    const textItem = textItems[index];
    const textInner = textItem.lastElementChild.innerHTML;
    if(textInner.length > 17){
        const slicedText = textInner.slice(0,17);
        textItem.lastElementChild.innerHTML = slicedText + '...';
    }
    
}

//Скрипт подсветки игроков
const arrayPlayers = document.querySelectorAll('.grid__teams-item');
for (let index = 0; index < arrayPlayers.length; index++) {
    const arrayPlayer = arrayPlayers[index];
    arrayPlayer.addEventListener("mouseover", function(){
        const firstInner = arrayPlayer.firstElementChild;
        const inner = firstInner.lastElementChild.innerHTML;
        for (let index = 0; index < arrayPlayers.length; index++) {
            const arrayPlayer = arrayPlayers[index];
            const firstInner = arrayPlayer.firstElementChild;
            if(inner == (firstInner.lastElementChild.innerHTML)){
                arrayPlayer.classList.add('_active');
            }
        }
    })
    arrayPlayer.addEventListener("mouseleave", function(){
        for(let arrayPlayer of arrayPlayers){
            arrayPlayer.classList.remove('_active');
        }
    })
}
// focus
const focus = document.getElementById('section1');
if(focus){
    focus.focus();

}

//==================== Табы ====================//
document.querySelectorAll('.tabs-button').forEach((item) =>
    item.addEventListener('click', function(e){
        e.preventDefault();
        const id = e.target.getAttribute('href').replace('#', '');
        document.querySelectorAll('.filter-team__button').forEach(
            (item) => item.classList.remove('_active')
        );
        document.querySelectorAll('.tabs-content').forEach(
            (item) => item.classList.remove('_active')
        );
        item.classList.add('_active');
        document.getElementById(id).classList.add('_active');
    })
);
document.querySelectorAll('.tabs-button_1').forEach((item) =>
    item.addEventListener('click', function(e){
        e.preventDefault();
        const id = e.target.getAttribute('href').replace('#', '');
        document.querySelectorAll('.tabs-button_1').forEach(
            (item) => item.classList.remove('_active')
        );
        document.querySelectorAll('.tabs-content_1').forEach(
            (item) => item.classList.remove('_active')
        );
        item.classList.add('_active');
        document.getElementById(id).classList.add('_active');
    })
);
document.querySelectorAll('.tabs-play__button').forEach((item) =>
    item.addEventListener('click', function(e){
        e.preventDefault();
        const id = e.target.getAttribute('href').replace('#', '');
        document.querySelectorAll('.tabs-play__button').forEach(
            (item) => item.classList.remove('_active')
        );
        document.querySelectorAll('.tabs-play__body').forEach(
            (item) => item.classList.remove('_active')
        );
        item.classList.add('_active');
        document.getElementById(id).classList.add('_active');
    })
);
//================== Select
// Работа с селектом
const selects = document.querySelectorAll('.filter__select');
const selectLists = document.querySelectorAll('.filter__select-list');
for (let index = 0; index < selects.length; index++) {
    const select = selects[index];
    const selectList = selectLists[index];
    select.addEventListener('click', function(){
        selectList.classList.toggle('_open');
        select.classList.toggle('active');
    })
}

const selectTeamItems = document.querySelectorAll('.sel-team-item');
for (let index = 0; index < selectTeamItems.length; index++) {
    const selectTeamItem = selectTeamItems[index];
    selectTeamItem.addEventListener('click', function(){
        const select = document.querySelector('.select-team');
        select.innerHTML = selectTeamItem.innerHTML;
        select.classList.remove('active');
        for(let selectList of selectLists){
            selectList.classList.remove('_open');
        }
    })
}

const mediaQuery600max = window.matchMedia('(max-width: 600px)')
function handleTablet600max(e) {
    if (e.matches) {
        const selects = document.querySelectorAll('.select-team');
        const turselects = document.querySelectorAll('.select-tur');
        if(selects.length > 0){
            for(let select of selects){
                select.innerHTML = '';
            }
        }
        if(turselects.length > 0){
            for(let turselect of turselects){
                turselect.innerHTML = '';
            }
        }
    }
}
mediaQuery600max.addListener(handleTablet600max);
handleTablet600max(mediaQuery600max);

const selectTurItems = document.querySelectorAll('.sel-tur-item');
for (let index = 0; index < selectTurItems.length; index++) {
    const selectTurItem = selectTurItems[index];
    selectTurItem.addEventListener('click', function(){
        const select = document.querySelector('.select-tur');
        select.innerHTML = selectTurItem.innerHTML;
        select.classList.remove('active');
        for(let selectList of selectLists){
            selectList.classList.remove('_open');
        }
    })
}

const selectSportItems = document.querySelectorAll('.sel-sport-item');
for (let index = 0; index < selectSportItems.length; index++) {
    const selectSportItem = selectSportItems[index];
    selectSportItem.addEventListener('click', function(){
        const select = document.querySelector('.select-sport');
        select.innerHTML = selectSportItem.innerHTML;
        select.classList.remove('active');
        for(let selectList of selectLists){
            selectList.classList.remove('_open');
        }
    })
}


//==================== Плавный скролл ====================//
const smoothLinks = document.querySelectorAll('._slowscroll');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    });
};


//=== Слайдер ============================================================
const swiper = new Swiper('.stocks__items', {
    // Optional parameters
    direction: 'horizontal',
    //freeMode: true,
    //loop: true,
    //slidesPerGroup: 2,
    slidesPerView: 1,
    //freeModeMomentum: true,
    //loopedSlides: 4,
    spaceBetween: 18,
    centerSlidesBounds: true,
    observer: true,
    observeParents: true,
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
      320:{
       
          slidesPerView: 1.2, //количество слайдов
          spaceBetween: 20, //отступ между слайдами
        },
        375:{
        slidesPerView: 1.5, //количество слайдов
        spaceBetween: 20, //отступ между слайдами
        },
        590:{
            slidesPerView: 2, //количество слайдов
            spaceBetween: 20, //отступ между слайдами
        },
        750:{
            slidesPerView: 2.5, //количество слайдов
            spaceBetween: 20, //отступ между слайдами
        },
        900:{
            slidesPerView: 3, //количество слайдов
            spaceBetween: 20, //отступ между слайдами
        },
        992:{
            slidesPerView: 2.5, //количество слайдов
            spaceBetween: 20, //отступ между слайдами
        },
        1200:{
            slidesPerView: 3, //количество слайдов
            spaceBetween: 20, //отступ между слайдами
        },
        
    },
    keyboard: {
        enabled: true,
        pageUpDown: true,
    },
});
//=====
document.querySelectorAll('.spoller-play__star').forEach((item) =>
    item.addEventListener('click', function(e){
        item.classList.toggle('_active')
    }))
document.querySelectorAll('.spoller-play__icon').forEach((item) =>
    item.addEventListener('click', function(e){
        e.preventDefault();
        item.classList.toggle('_active')
    }))

function calendar(){
    var Cal = function(divId) {
        //Сохраняем идентификатор div
        this.divId = divId;
        // Дни недели с понедельника
        this.DaysOfWeek = [
          'ПН',
          'ВТ',
          'СР',
          'ЧТ',
          'ПТ',
          'СБ',
          'ВС'
        ];
        // Месяцы начиная с января
        this.Months =['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
        //Устанавливаем текущий месяц, год
        var d = new Date();
        this.currMonth = d.getMonth();
        this.currYear = d.getFullYear();
        this.currDay = d.getDate();
      };
      // Переход к следующему месяцу
      Cal.prototype.nextMonth = function() {
        if ( this.currMonth == 11 ) {
          this.currMonth = 0;
          this.currYear = this.currYear + 1;
        }
        else {
          this.currMonth = this.currMonth + 1;
        }
        this.showcurr();
      };
      // Переход к предыдущему месяцу
      Cal.prototype.previousMonth = function() {
        if ( this.currMonth == 0 ) {
          this.currMonth = 11;
          this.currYear = this.currYear - 1;
        }
        else {
          this.currMonth = this.currMonth - 1;
        }
        this.showcurr();
      };
      // Показать текущий месяц
      Cal.prototype.showcurr = function() {
        this.showMonth(this.currYear, this.currMonth);
      };
      // Показать месяц (год, месяц)
      Cal.prototype.showMonth = function(y, m) {
        var d = new Date()
        // Первый день недели в выбранном месяце 
        , firstDayOfMonth = new Date(y, m, 7).getDay()
        // Последний день выбранного месяца
        , lastDateOfMonth =  new Date(y, m+1, 0).getDate()
        // Последний день предыдущего месяца
        , lastDayOfLastMonth = m == 0 ? new Date(y-1, 11, 0).getDate() : new Date(y, m, 0).getDate();
        var html = '<table>';
        // Запись выбранного месяца и года
        html += '<thead><tr>';
        html += '<td colspan="7">' + this.Months[m] + ' ' + y + '</td>';
        html += '</tr></thead>';
        // заголовок дней недели
        html += '<tr class="days">';
        for(var i=0; i < this.DaysOfWeek.length;i++) {
          html += '<td>' + this.DaysOfWeek[i] + '</td>';
        }
        html += '</tr>';
        // Записываем дни
        var i=1;
        do {
          var dow = new Date(y, m, i).getDay();
          // Начать новую строку в понедельник
          if ( dow == 1 ) {
            html += '<tr>';
          }
          // Если первый день недели не понедельник показать последние дни предыдущего месяца
          else if ( i == 1 ) {
            html += '<tr>';
            var k = lastDayOfLastMonth - firstDayOfMonth+1;
            for(var j=0; j < firstDayOfMonth; j++) {
              html += '<td class="not-current">' + k + '</td>';
              k++;
            }
          }
          // Записываем текущий день в цикл
          var chk = new Date();
          var chkY = chk.getFullYear();
          var chkM = chk.getMonth();
          if (chkY == this.currYear && chkM == this.currMonth && i == this.currDay) {
            html += '<td class="today">' + i + '</td>';
          } else {
            html += '<td class="normal">' + i + '</td>';
          }
          // закрыть строку в воскресенье
          if ( dow == 0 ) {
            html += '</tr>';
          }
          // Если последний день месяца не воскресенье, показать первые дни следующего месяца
          else if ( i == lastDateOfMonth ) {
            var k=1;
            for(dow; dow < 7; dow++) {
              html += '<td class="not-current">' + k + '</td>';
              k++;
            }
          }
          i++;
        }while(i <= lastDateOfMonth);
        // Конец таблицы
        html += '</table>';
        // Записываем HTML в div
        document.getElementById(this.divId).innerHTML = html;
      };
      // При загрузке окна
      window.onload = function() {
        // Начать календарь
        var c = new Cal("divCal");			
        c.showcurr();
        // Привязываем кнопки «Следующий» и «Предыдущий»
        getId('btnNext').onclick = function() {
          c.nextMonth();
        };
        getId('btnPrev').onclick = function() {
          c.previousMonth();
        };
      }
      // Получить элемент по id
      function getId(id) {
        return document.getElementById(id);
    }
}    
//Календарь

const divCal = document.getElementById('divCal');
if(divCal){
    calendar();
    divCal.addEventListener('click', function(e){
        if(e.target.closest('.normal')){
            e.target.classList.toggle('_active')
            
        }
        if(e.target.closest('.today')){
            e.target.classList.toggle('_active')
            
        }
    })
    const iconCalendar = document.getElementById('calendar');
    iconCalendar.addEventListener('click', function(e){
        e.preventDefault();
        const calenfarFilter = document.querySelector('.calendar-filter');
        calenfarFilter.classList.toggle('_active');
    })
}


const buttonCals = document.querySelectorAll('.date-filter__select')
const calendars = document.querySelectorAll('.calendar-wrapper')
const calendarPrevs = document.querySelectorAll('.calendar-wrapper__button')
for(let calendarPrev of calendarPrevs){
    calendarPrev.addEventListener('click', function(){
        for(let calendar of calendars){
            calendar.classList.remove('_active');
        }
    })
}
for(let buttonCal of buttonCals){
    buttonCal.addEventListener('click', function(){
        for(let calendar of calendars){
            calendar.classList.add('_active');
        }
       
    })
}
//Горизонтальный скролл

const el = document.getElementById('grid');

init();
function scrollHorizontally(e) {
  e = window.event || e;
  e.preventDefault();
  el.scrollLeft -= (e.wheelDelta || -e.detail);
  if((el.scrollLeft) > 0){
    const scroll = document.getElementById('scroll');
    scroll.classList.add('_hidden')
    }
    if((el.scrollLeft) === 0){
        const scroll = document.getElementById('scroll');
        scroll.classList.remove('_hidden')
        }
  
}

function init() {
  if (!el) {
    return;
  }

  if (el.addEventListener) {
    el.addEventListener('mousewheel', scrollHorizontally, false);
    el.addEventListener('DOMMouseScroll', scrollHorizontally, false);
  } else {
    el.attachEvent('onmousewheel', scrollHorizontally);
  }
}



})