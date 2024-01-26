const div_home = document.querySelector('#div-home');
const div_search = document.querySelector('#div-search');
const div_evente = document.querySelector('#div-event');
const div_browse = document.querySelector('#div-browse');

const svgOne = document.querySelector('#svgOne')
const svgTwo = document.querySelector('#svgTwo')
const svgThree = document.querySelector('#svgThree')
const svgFour = document.querySelector('#svgFour')

const a_One = document.querySelector('#a-One')
const a_Two = document.querySelector('#a-Two')
const a_Three = document.querySelector('#a-Three')
const a_Four = document.querySelector('#a-Four')

const home = document.querySelector('#home');
const search = document.querySelector('#search');
const evente = document.querySelector('#event');
const browse = document.querySelector('#browse');

div_home.addEventListener('mouseenter', () => {
    home.innerText = 'Accueil';
    a_One.classList.add('bg-slate-500', 'rounded-full');
    svgOne.innerHTML = `
    <path d="M12.5 30H7.5L30 7.5L52.5 30H47.5M12.5 30V47.5C12.5 48.8261 13.0268 50.0979 13.9645 51.0355C14.9021 51.9732 16.1739 52.5 17.5 52.5H42.5C43.8261 52.5 45.0979 51.9732 46.0355 51.0355C46.9732 50.0979 47.5 48.8261 47.5 47.5V30" stroke="#0B3156" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22.5 52.5V37.5C22.5 36.1739 23.0268 34.9021 23.9645 33.9645C24.9021 33.0268 26.1739 32.5 27.5 32.5H32.5C33.8261 32.5 35.0979 33.0268 36.0355 33.9645C36.9732 34.9021 37.5 36.1739 37.5 37.5V52.5" stroke="#0B3156" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
`;
});

div_search.addEventListener('mouseenter', () => {
    search.innerText = 'Recherche';
    a_Two.classList.add('bg-slate-500', 'rounded-full');
    svgTwo.innerHTML = `
    <path d="M48.7125 50.3853L33.0575 34.7304C31.8075 35.7954 30.37 36.6195 28.745 37.2029C27.12 37.7862 25.4867 38.0779 23.845 38.0779C19.8417 38.0779 16.4534 36.692 13.68 33.9204C10.9067 31.147 9.52002 27.7595 9.52002 23.7579C9.52002 19.7562 10.905 16.367 13.675 13.5904C16.4467 10.812 19.8334 9.42285 23.835 9.42285C27.8384 9.42285 31.2284 10.8095 34.005 13.5829C36.7817 16.3562 38.17 19.7454 38.17 23.7504C38.17 25.487 37.8625 27.1679 37.2475 28.7929C36.6309 30.4179 35.8225 31.8079 34.8225 32.9629L50.4775 48.6153L48.7125 50.3853ZM23.845 35.5754C27.1617 35.5754 29.9625 34.4337 32.2475 32.1504C34.5309 29.867 35.6725 27.0662 35.6725 23.7479C35.6725 20.4312 34.5309 17.6312 32.2475 15.3479C29.9642 13.0645 27.1642 11.9229 23.8475 11.9229C20.5309 11.9229 17.73 13.0645 15.445 15.3479C13.1617 17.6312 12.02 20.4312 12.02 23.7479C12.02 27.0645 13.1617 29.8645 15.445 32.1479C17.7284 34.4312 20.5284 35.5754 23.845 35.5754Z" fill="#0B3156"/>
    `;
});

div_evente.addEventListener('mouseenter', () => {
    evente.innerText = 'Événement';
    a_Three.classList.add('bg-slate-500', 'rounded-full');
    svgThree.innerHTML = `
    <path d="M37.2125 44.9998C35.7508 44.9998 34.5033 44.4831 33.47 43.4498C32.4383 42.4198 31.9225 41.174 31.9225 39.7123C31.9225 38.2506 32.4392 37.0031 33.4725 35.9698C34.5042 34.9381 35.7508 34.4223 37.2125 34.4223C38.6742 34.4223 39.9208 34.939 40.9525 35.9723C41.9842 37.004 42.5 38.2506 42.5 39.7123C42.5 41.174 41.9833 42.4206 40.95 43.4523C39.92 44.484 38.6742 44.9998 37.2125 44.9998ZM14.0375 52.4998C12.8875 52.4998 11.9275 52.1148 11.1575 51.3448C10.3858 50.5731 10 49.6123 10 48.4623V16.5373C10 15.3873 10.3858 14.4273 11.1575 13.6573C11.9275 12.8856 12.8875 12.4998 14.0375 12.4998H18.4625V6.9248H21.155V12.4998H39.0375V6.9248H41.5375V12.4998H45.9625C47.1125 12.4998 48.0725 12.8856 48.8425 13.6573C49.6142 14.4273 50 15.3873 50 16.5373V48.4623C50 49.6123 49.615 50.5723 48.845 51.3423C48.0733 52.114 47.1125 52.4998 45.9625 52.4998H14.0375ZM14.0375 49.9998H45.9625C46.3458 49.9998 46.6983 49.8398 47.02 49.5198C47.34 49.1981 47.5 48.8456 47.5 48.4623V26.5373H12.5V48.4623C12.5 48.8456 12.66 49.1981 12.98 49.5198C13.3017 49.8398 13.6542 49.9998 14.0375 49.9998ZM12.5 24.0373H47.5V16.5373C47.5 16.154 47.34 15.8015 47.02 15.4798C46.6983 15.1598 46.3458 14.9998 45.9625 14.9998H14.0375C13.6542 14.9998 13.3017 15.1598 12.98 15.4798C12.66 15.8015 12.5 16.154 12.5 16.5373V24.0373Z" fill="#0B3156"/>
    `;
});

div_browse.addEventListener('mouseenter', () => {
    browse.innerText = 'Parcourir';
    a_Four.classList.add('bg-slate-500', 'rounded-full');
    svgFour.innerHTML = `
    <path d="M10 32.5V14.0375C10 12.8875 10.3858 11.9275 11.1575 11.1575C11.9275 10.3858 12.8875 10 14.0375 10H27.5V32.5H10ZM32.5 10H45.9625C47.1125 10 48.0725 10.3858 48.8425 11.1575C49.6142 11.9275 50 12.8933 50 14.055V22.5H32.5V10ZM32.5 50V27.5H50V45.9625C50 47.1125 49.615 48.0725 48.845 48.8425C48.0733 49.6142 47.1125 50 45.9625 50H32.5ZM10 37.5H27.5V50H14.0375C12.8875 50 11.9275 49.615 11.1575 48.845C10.3858 48.0733 10 47.1067 10 45.945V37.5ZM12.5 30H25V12.5H14.0375C13.5892 12.5 13.2208 12.6442 12.9325 12.9325C12.6442 13.2208 12.5 13.5892 12.5 14.0375V30ZM35 20H47.5V14.0375C47.5 13.5892 47.3558 13.2208 47.0675 12.9325C46.7792 12.6442 46.4108 12.5 45.9625 12.5H35V20ZM35 30V47.5H45.9625C46.4108 47.5 46.7792 47.3558 47.0675 47.0675C47.3558 46.7792 47.5 46.4108 47.5 45.9625V30H35ZM12.5 40V45.9625C12.5 46.4108 12.6442 46.7792 12.9325 47.0675C13.2208 47.3558 13.5892 47.5 14.0375 47.5H25V40H12.5Z" fill="#0B3156"/>
    `;
});

div_home.addEventListener('mouseleave', () => {
    home.innerText = '';
    a_One.classList.remove('bg-slate-500', 'rounded-full');
    svgOne.innerHTML = `
        <path d="M12.5 30H7.5L30 7.5L52.5 30H47.5M12.5 30V47.5C12.5 48.8261 13.0268 50.0979 13.9645 51.0355C14.9021 51.9732 16.1739 52.5 17.5 52.5H42.5C43.8261 52.5 45.0979 51.9732 46.0355 51.0355C46.9732 50.0979 47.5 48.8261 47.5 47.5V30" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22.5 52.5V37.5C22.5 36.1739 23.0268 34.9021 23.9645 33.9645C24.9021 33.0268 26.1739 32.5 27.5 32.5H32.5C33.8261 32.5 35.0979 33.0268 36.0355 33.9645C36.9732 34.9021 37.5 36.1739 37.5 37.5V52.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    `;
});

div_search.addEventListener('mouseleave', () => {
    search.innerText = '';
    a_Two.classList.remove('bg-slate-500', 'rounded-full');
    svgTwo.innerHTML = `
    <path d="M48.7125 50.3853L33.0575 34.7304C31.8075 35.7954 30.37 36.6195 28.745 37.2029C27.12 37.7862 25.4867 38.0779 23.845 38.0779C19.8417 38.0779 16.4534 36.692 13.68 33.9204C10.9067 31.147 9.52002 27.7595 9.52002 23.7579C9.52002 19.7562 10.905 16.367 13.675 13.5904C16.4467 10.812 19.8334 9.42285 23.835 9.42285C27.8384 9.42285 31.2284 10.8095 34.005 13.5829C36.7817 16.3562 38.17 19.7454 38.17 23.7504C38.17 25.487 37.8625 27.1679 37.2475 28.7929C36.6309 30.4179 35.8225 31.8079 34.8225 32.9629L50.4775 48.6153L48.7125 50.3853ZM23.845 35.5753C27.1617 35.5753 29.9625 34.4337 32.2475 32.1504C34.5309 29.867 35.6725 27.0662 35.6725 23.7479C35.6725 20.4312 34.5309 17.6312 32.2475 15.3479C29.9642 13.0645 27.1642 11.9229 23.8475 11.9229C20.5309 11.9229 17.73 13.0645 15.445 15.3479C13.1617 17.6312 12.02 20.4312 12.02 23.7479C12.02 27.0645 13.1617 29.8645 15.445 32.1479C17.7284 34.4312 20.5284 35.5753 23.845 35.5753Z" fill="white"/>
    `;
});

div_evente.addEventListener('mouseleave', () => {
    evente.innerText = '';
    a_Three.classList.remove('bg-slate-500', 'rounded-full');
    svgThree.innerHTML = `
    <path d="M13.7062 14.9998H12.9417V16.5373V24.0373V24.5373H13.4417H48.5583H49.0583V24.0373V16.5373C49.0583 15.9973 48.8266 15.5233 48.4306 15.1266L48.4288 15.1247C48.0307 14.73 47.5559 14.4998 47.0157 14.4998H14.9843C14.5039 14.4998 14.0753 14.6819 13.7062 14.9998ZM34.8345 43.0957L34.8343 43.0954C33.8936 42.1593 33.4289 41.0411 33.4289 39.7123C33.4289 38.3838 33.8943 37.2636 34.8371 36.3239C35.7781 35.3861 36.9018 34.9223 38.2366 34.9223C39.571 34.9223 40.6947 35.3867 41.6358 36.3262L41.6361 36.3264C42.577 37.2643 43.0417 38.3835 43.0417 39.7123C43.0417 41.0408 42.5764 42.16 41.6338 43.0979L41.6333 43.0984C40.694 44.0361 39.5713 44.4998 38.2366 44.4998C36.9021 44.4998 35.7774 44.0354 34.8345 43.0957ZM12.4473 14.0118L12.4481 14.0111C13.1211 13.3388 13.9546 12.9998 14.9843 12.9998H19.4241H19.9241V12.4998V7.4248H21.6255V12.4998V12.9998H22.1255H40.0676H40.5676V12.4998V7.4248H42.076V12.4998V12.9998H42.576H47.0157C48.0454 12.9998 48.8789 13.3388 49.552 14.0111L49.5527 14.0118C50.2272 14.6826 50.5667 15.5125 50.5667 16.5373V48.4623C50.5667 49.4874 50.2278 50.3175 49.5549 50.9882C48.88 51.6608 48.0454 51.9998 47.0157 51.9998H14.9843C13.9543 51.9998 13.1207 51.6614 12.4477 50.9907C11.7729 50.3181 11.4333 49.4871 11.4333 48.4623V16.5373C11.4333 15.5125 11.7729 14.6826 12.4473 14.0118ZM48.4288 49.8749L48.4306 49.873C48.8266 49.4763 49.0583 49.0023 49.0583 48.4623V26.5373V26.0373H48.5583H13.4417H12.9417V26.5373V48.4623C12.9417 49.0023 13.1734 49.4763 13.5694 49.873L13.5712 49.8749C13.9693 50.2696 14.4442 50.4998 14.9843 50.4998H47.0157C47.5559 50.4998 48.0307 50.2696 48.4288 49.8749Z" fill="white" stroke="white"/>
    `;
});

div_browse.addEventListener('mouseleave', () => {
    browse.innerText = '';
    a_Four.classList.remove('bg-slate-500', 'rounded-full');
    svgFour.innerHTML = `
    <path d="M10 32.5V14.0375C10 12.8875 10.3858 11.9275 11.1575 11.1575C11.9275 10.3858 12.8875 10 14.0375 10H27.5V32.5H10ZM32.5 10H45.9625C47.1125 10 48.0725 10.3858 48.8425 11.1575C49.6142 11.9275 50 12.8933 50 14.055V22.5H32.5V10ZM32.5 50V27.5H50V45.9625C50 47.1125 49.615 48.0725 48.845 48.8425C48.0733 49.6142 47.1125 50 45.9625 50H32.5ZM10 37.5H27.5V50H14.0375C12.8875 50 11.9275 49.615 11.1575 48.845C10.3858 48.0733 10 47.1067 10 45.945V37.5ZM12.5 30H25V12.5H14.0375C13.5892 12.5 13.2208 12.6442 12.9325 12.9325C12.6442 13.2208 12.5 13.5892 12.5 14.0375V30ZM35 20H47.5V14.0375C47.5 13.5892 47.3558 13.2208 47.0675 12.9325C46.7792 12.6442 46.4108 12.5 45.9625 12.5H35V20ZM35 30V47.5H45.9625C46.4108 47.5 46.7792 47.3558 47.0675 47.0675C47.3558 46.7792 47.5 46.4108 47.5 45.9625V30H35ZM12.5 40V45.9625C12.5 46.4108 12.6442 46.7792 12.9325 47.0675C13.2208 47.3558 13.5892 47.5 14.0375 47.5H25V40H12.5Z" fill="white"/>
    `;
});
