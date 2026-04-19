window.addEventListener('DOMContentLoaded', () => {
  initPeriodicMatrix();
});

function initPeriodicMatrix() {
  const elements = [
    {n:1,s:'H',nm:'Hydrogen',m:'1.008',c:'nonmetal',col:1,r:1},{n:2,s:'He',nm:'Helium',m:'4.003',c:'noble',col:18,r:1},
    {n:3,s:'Li',nm:'Lithium',m:'6.941',c:'alkali',col:1,r:2},{n:4,s:'Be',nm:'Beryllium',m:'9.012',c:'alkaline',col:2,r:2},
    {n:5,s:'B',nm:'Boron',m:'10.81',c:'metalloid',col:13,r:2},{n:6,s:'C',nm:'Carbon',m:'12.01',c:'nonmetal',col:14,r:2},
    {n:7,s:'N',nm:'Nitrogen',m:'14.01',c:'nonmetal',col:15,r:2},{n:8,s:'O',nm:'Oxygen',m:'16.00',c:'nonmetal',col:16,r:2},
    {n:9,s:'F',nm:'Fluorine',m:'19.00',c:'halogen',col:17,r:2},{n:10,s:'Ne',nm:'Neon',m:'20.18',c:'noble',col:18,r:2},
    {n:11,s:'Na',nm:'Sodium',m:'22.99',c:'alkali',col:1,r:3},{n:12,s:'Mg',nm:'Magnesium',m:'24.31',c:'alkaline',col:2,r:3},
    {n:13,s:'Al',nm:'Aluminum',m:'26.98',c:'post',col:13,r:3},{n:14,s:'Si',nm:'Silicon',m:'28.09',c:'metalloid',col:14,r:3},
    {n:15,s:'P',nm:'Phosphorus',m:'30.97',c:'nonmetal',col:15,r:3},{n:16,s:'S',nm:'Sulfur',m:'32.07',c:'nonmetal',col:16,r:3},
    {n:17,s:'Cl',nm:'Chlorine',m:'35.45',c:'halogen',col:17,r:3},{n:18,s:'Ar',nm:'Argon',m:'39.95',c:'noble',col:18,r:3},
    {n:19,s:'K',nm:'Potassium',m:'39.10',c:'alkali',col:1,r:4},{n:20,s:'Ca',nm:'Calcium',m:'40.08',c:'alkaline',col:2,r:4},
    {n:21,s:'Sc',nm:'Scandium',m:'44.96',c:'transition',col:3,r:4},{n:22,s:'Ti',nm:'Titanium',m:'47.87',c:'transition',col:4,r:4},
    {n:23,s:'V',nm:'Vanadium',m:'50.94',c:'transition',col:5,r:4},{n:24,s:'Cr',nm:'Chromium',m:'52.00',c:'transition',col:6,r:4},
    {n:25,s:'Mn',nm:'Manganese',m:'54.94',c:'transition',col:7,r:4},{n:26,s:'Fe',nm:'Iron',m:'55.85',c:'transition',col:8,r:4},
    {n:27,s:'Co',nm:'Cobalt',m:'58.93',c:'transition',col:9,r:4},{n:28,s:'Ni',nm:'Nickel',m:'58.69',c:'transition',col:10,r:4},
    {n:29,s:'Cu',nm:'Copper',m:'63.55',c:'transition',col:11,r:4},{n:30,s:'Zn',nm:'Zinc',m:'65.38',c:'transition',col:12,r:4},
    {n:31,s:'Ga',nm:'Gallium',m:'69.72',c:'post',col:13,r:4},{n:32,s:'Ge',nm:'Germanium',m:'72.63',c:'metalloid',col:14,r:4},
    {n:33,s:'As',nm:'Arsenic',m:'74.92',c:'metalloid',col:15,r:4},{n:34,s:'Se',nm:'Selenium',m:'78.97',c:'nonmetal',col:16,r:4},
    {n:35,s:'Br',nm:'Bromine',m:'79.90',c:'halogen',col:17,r:4},{n:36,s:'Kr',nm:'Krypton',m:'83.80',c:'noble',col:18,r:4},
    {n:37,s:'Rb',nm:'Rubidium',m:'85.47',c:'alkali',col:1,r:5},{n:38,s:'Sr',nm:'Strontium',m:'87.62',c:'alkaline',col:2,r:5},
    {n:39,s:'Y',nm:'Yttrium',m:'88.91',c:'transition',col:3,r:5},{n:40,s:'Zr',nm:'Zirconium',m:'91.22',c:'transition',col:4,r:5},
    {n:41,s:'Nb',nm:'Niobium',m:'92.91',c:'transition',col:5,r:5},{n:42,s:'Mo',nm:'Molybdenum',m:'95.96',c:'transition',col:6,r:5},
    {n:43,s:'Tc',nm:'Technetium',m:'(98)',c:'transition',col:7,r:5},{n:44,s:'Ru',nm:'Ruthenium',m:'101.1',c:'transition',col:8,r:5},
    {n:45,s:'Rh',nm:'Rhodium',m:'102.9',c:'transition',col:9,r:5},{n:46,s:'Pd',nm:'Palladium',m:'106.4',c:'transition',col:10,r:5},
    {n:47,s:'Ag',nm:'Silver',m:'107.9',c:'transition',col:11,r:5},{n:48,s:'Cd',nm:'Cadmium',m:'112.4',c:'transition',col:12,r:5},
    {n:49,s:'In',nm:'Indium',m:'114.8',c:'post',col:13,r:5},{n:50,s:'Sn',nm:'Tin',m:'118.7',c:'post',col:14,r:5},
    {n:51,s:'Sb',nm:'Antimony',m:'121.8',c:'metalloid',col:15,r:5},{n:52,s:'Te',nm:'Tellurium',m:'127.6',c:'metalloid',col:16,r:5},
    {n:53,s:'I',nm:'Iodine',m:'126.9',c:'halogen',col:17,r:5},{n:54,s:'Xe',nm:'Xenon',m:'131.3',c:'noble',col:18,r:5},
    {n:55,s:'Cs',nm:'Cesium',m:'132.9',c:'alkali',col:1,r:6},{n:56,s:'Ba',nm:'Barium',m:'137.3',c:'alkaline',col:2,r:6},
    {n:57,s:'La',nm:'Lanthanum',m:'138.9',c:'lanthanide',col:3,r:6},{n:72,s:'Hf',nm:'Hafnium',m:'178.5',c:'transition',col:4,r:6},
    {n:73,s:'Ta',nm:'Tantalum',m:'180.9',c:'transition',col:5,r:6},{n:74,s:'W',nm:'Tungsten',m:'183.8',c:'transition',col:6,r:6},
    {n:75,s:'Re',nm:'Rhenium',m:'186.2',c:'transition',col:7,r:6},{n:76,s:'Os',nm:'Osmium',m:'190.2',c:'transition',col:8,r:6},
    {n:77,s:'Ir',nm:'Iridium',m:'192.2',c:'transition',col:9,r:6},{n:78,s:'Pt',nm:'Platinum',m:'195.1',c:'transition',col:10,r:6},
    {n:79,s:'Au',nm:'Gold',m:'197.0',c:'transition',col:11,r:6},{n:80,s:'Hg',nm:'Mercury',m:'200.6',c:'transition',col:12,r:6},
    {n:81,s:'Tl',nm:'Thallium',m:'204.4',c:'post',col:13,r:6},{n:82,s:'Pb',nm:'Lead',m:'207.2',c:'post',col:14,r:6},
    {n:83,s:'Bi',nm:'Bismuth',m:'209.0',c:'post',col:15,r:6},{n:84,s:'Po',nm:'Polonium',m:'(209)',c:'post',col:16,r:6},
    {n:85,s:'At',nm:'Astatine',m:'(210)',c:'halogen',col:17,r:6},{n:86,s:'Rn',nm:'Radon',m:'(222)',c:'noble',col:18,r:6},
    {n:87,s:'Fr',nm:'Francium',m:'(223)',c:'alkali',col:1,r:7},{n:88,s:'Ra',nm:'Radium',m:'(226)',c:'alkaline',col:2,r:7},
    {n:89,s:'Ac',nm:'Actinium',m:'(227)',c:'actinide',col:3,r:7},{n:104,s:'Rf',nm:'Rutherford.',m:'(267)',c:'transition',col:4,r:7},
    {n:105,s:'Db',nm:'Dubnium',m:'(268)',c:'transition',col:5,r:7},{n:106,s:'Sg',nm:'Seaborgium',m:'(271)',c:'transition',col:6,r:7},
    {n:107,s:'Bh',nm:'Bohrium',m:'(272)',c:'transition',col:7,r:7},{n:108,s:'Hs',nm:'Hassium',m:'(270)',c:'transition',col:8,r:7},
    {n:109,s:'Mt',nm:'Meitnerium',m:'(278)',c:'unknown',col:9,r:7},{n:110,s:'Ds',nm:'Darmstadt.',m:'(281)',c:'unknown',col:10,r:7},
    {n:111,s:'Rg',nm:'Roentgen.',m:'(282)',c:'unknown',col:11,r:7},{n:112,s:'Cn',nm:'Copernic.',m:'(285)',c:'transition',col:12,r:7},
    {n:113,s:'Nh',nm:'Nihonium',m:'(286)',c:'unknown',col:13,r:7},{n:114,s:'Fl',nm:'Flerovium',m:'(289)',c:'unknown',col:14,r:7},
    {n:115,s:'Mc',nm:'Moscovium',m:'(290)',c:'unknown',col:15,r:7},{n:116,s:'Lv',nm:'Livermore.',m:'(293)',c:'unknown',col:16,r:7},
    {n:117,s:'Ts',nm:'Tennessine',m:'(294)',c:'unknown',col:17,r:7},{n:118,s:'Og',nm:'Oganesson',m:'(294)',c:'unknown',col:18,r:7},
    {n:58,s:'Ce',nm:'Cerium',m:'140.1',c:'lanthanide',col:4,r:9},{n:59,s:'Pr',nm:'Praseodym.',m:'140.9',c:'lanthanide',col:5,r:9},
    {n:60,s:'Nd',nm:'Neodymium',m:'144.2',c:'lanthanide',col:6,r:9},{n:61,s:'Pm',nm:'Promethium',m:'(145)',c:'lanthanide',col:7,r:9},
    {n:62,s:'Sm',nm:'Samarium',m:'150.4',c:'lanthanide',col:8,r:9},{n:63,s:'Eu',nm:'Europium',m:'152.0',c:'lanthanide',col:9,r:9},
    {n:64,s:'Gd',nm:'Gadolinium',m:'157.3',c:'lanthanide',col:10,r:9},{n:65,s:'Tb',nm:'Terbium',m:'158.9',c:'lanthanide',col:11,r:9},
    {n:66,s:'Dy',nm:'Dysprosium',m:'162.5',c:'lanthanide',col:12,r:9},{n:67,s:'Ho',nm:'Holmium',m:'164.9',c:'lanthanide',col:13,r:9},
    {n:68,s:'Er',nm:'Erbium',m:'167.3',c:'lanthanide',col:14,r:9},{n:69,s:'Tm',nm:'Thulium',m:'168.9',c:'lanthanide',col:15,r:9},
    {n:70,s:'Yb',nm:'Ytterbium',m:'173.0',c:'lanthanide',col:16,r:9},{n:71,s:'Lu',nm:'Lutetium',m:'175.0',c:'lanthanide',col:17,r:9},
    {n:90,s:'Th',nm:'Thorium',m:'232.0',c:'actinide',col:4,r:10},{n:91,s:'Pa',nm:'Protactin.',m:'231.0',c:'actinide',col:5,r:10},
    {n:92,s:'U',nm:'Uranium',m:'238.0',c:'actinide',col:6,r:10},{n:93,s:'Np',nm:'Neptunium',m:'(237)',c:'actinide',col:7,r:10},
    {n:94,s:'Pu',nm:'Plutonium',m:'(244)',c:'actinide',col:8,r:10},{n:95,s:'Am',nm:'Americium',m:'(243)',c:'actinide',col:9,r:10},
    {n:96,s:'Cm',nm:'Curium',m:'(247)',c:'actinide',col:10,r:10},{n:97,s:'Bk',nm:'Berkelium',m:'(247)',c:'actinide',col:11,r:10},
    {n:98,s:'Cf',nm:'Californium',m:'(251)',c:'actinide',col:12,r:10},{n:99,s:'Es',nm:'Einsteinium',m:'(252)',c:'actinide',col:13,r:10},
    {n:100,s:'Fm',nm:'Fermium',m:'(257)',c:'actinide',col:14,r:10},{n:101,s:'Md',nm:'Mendelev.',m:'(258)',c:'actinide',col:15,r:10},
    {n:102,s:'No',nm:'Nobelium',m:'(259)',c:'actinide',col:16,r:10},{n:103,s:'Lr',nm:'Lawrencium',m:'(266)',c:'actinide',col:17,r:10},
  ];

  const grid = document.getElementById('matrix-pt');
  if (!grid) return;
  const map = {}; elements.forEach(e => { map[`${e.r}-${e.col}`] = e; });
  const divs = {};

  for (let r = 1; r <= 10; r++) {
    for (let c = 1; c <= 18; c++) {
      const e = map[`${r}-${c}`];
      const d = document.createElement('div');
      d.style.gridColumn = c;
      d.style.gridRow = r;
      if (e) {
        const isBB = (e.n === 35 || e.n === 56);
        d.className = `matrix-e ${e.c}${isBB ? ' matrix-bb' : ''}`;
        d.style.setProperty('--b', (0.25 + Math.random() * 0.2).toFixed(2));
        d.style.setProperty('--p', (0.6 + Math.random() * 0.2).toFixed(2));
        d.style.animationDuration = (Math.random() * 4 + 3).toFixed(1) + 's';
        d.style.animationDelay = (Math.random() * 5).toFixed(1) + 's';
        d.innerHTML = `<span class="matrix-n">${e.n}</span><span class="matrix-s">${e.s}</span><span class="matrix-nm">${e.nm}</span><span class="matrix-ms">${e.m}</span>`;
        divs[e.n] = d;
      } else {
        d.style.background = 'transparent';
        d.style.border = 'none';
      }
      grid.appendChild(d);
    }
  }

  const flashable = elements.filter(e => e.n !== 35 && e.n !== 56);
  function randomFlash() {
    const e = flashable[Math.floor(Math.random() * flashable.length)];
    const d = divs[e.n];
    if (d) {
      d.classList.add('matrix-fl');
      setTimeout(() => d.classList.remove('matrix-fl'), 400);
    }
    setTimeout(randomFlash, Math.random() * 500 + 200);
  }
  randomFlash();

  const atomContainer = document.getElementById('matrix-atoms');
  const colors = ['rgba(74,222,74', 'rgba(0,150,255', 'rgba(255,74,74', 'rgba(255,255,255'];
  function spawnAtom() {
    const a = document.createElement('div');
    a.className = 'matrix-atom';
    const size = Math.random() * 8 + 3;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const op = (Math.random() * 0.4 + 0.2).toFixed(2);
    a.style.cssText = `width:${size}px;height:${size}px;left:${Math.random() * 100}%;top:${Math.random() * 100}%;background:${color},${op});box-shadow:0 0 ${size * 2}px ${color},0.5);--dx:${(Math.random() - 0.5) * 300}px;--dy:${(Math.random() - 0.5) * 300}px;--ao:${op};animation-duration:${Math.random() * 8 + 6}s`;
    atomContainer.appendChild(a);
    setTimeout(() => a.remove(), 14000);
  }
  setInterval(spawnAtom, 400);

  document.addEventListener('click', e => {
    const rip = document.createElement('div');
    rip.className = 'matrix-rip';
    rip.style.left = e.clientX + 'px';
    rip.style.top = e.clientY + 'px';
    document.body.appendChild(rip);
    setTimeout(() => rip.remove(), 800);
    
    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        const el = flashable[Math.floor(Math.random() * flashable.length)];
        const d = divs[el.n];
        if (d) { d.classList.add('matrix-fl'); setTimeout(() => d.classList.remove('matrix-fl'), 400); }
      }, i * 60);
    }
  });
}


function dismissNotice() {
  const notice = document.getElementById('mobile-notice');
  if (notice) {
    notice.classList.add('hidden');
    setTimeout(() => notice.remove(), 600);
  }
}

function initBackgroundParticles() {
  const container = document.getElementById('bg-particles');
  if (!container) return;
  
  const count = 25;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'bg-particle';
    
    const size = Math.random() * 4 + 2;
    const left = Math.random() * 100;
    const duration = Math.random() * 20 + 20;
    const delay = Math.random() * -40;
    
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;
    p.style.left = `${left}%`;
    p.style.animationDuration = `${duration}s`;
    p.style.animationDelay = `${delay}s`;
    p.style.opacity = Math.random() * 0.4 + 0.1;
    
    container.appendChild(p);
  }
}

const seasonElements = [
  { atomicNum: 'S·01', symbol: 'S1',  name: 'Pilot',   mass: '8.7' },
  { atomicNum: 'S·02', symbol: 'S2',  name: 'Fallout', mass: '8.8' },
  { atomicNum: 'S·03', symbol: 'S3',  name: 'Escalate',mass: '9.1' },
  { atomicNum: 'S·04', symbol: 'S4',  name: 'The War', mass: '9.5' },
  { atomicNum: 'S·5A', symbol: 'S5A', name: 'Empire',  mass: '9.5' },
  { atomicNum: 'S·5B', symbol: 'S5B', name: 'Reckon',  mass: '9.9' },
];

function renderSeasons() {
  const tabs = document.getElementById('seasons-tabs');
  const container = document.getElementById('seasons-content');
  seasons.forEach((s, i) => {
    const el = seasonElements[i] || { atomicNum: `S·${s.num}`, symbol: `S${s.num}`, name: s.name.split(' ')[0], mass: s.rating };
    const btn = document.createElement('button');
    btn.className = 'tab-btn' + (i === 0 ? ' active' : '');
    btn.setAttribute('aria-label', 'Season ' + s.num);
    btn.innerHTML = `
      <span class="tab-btn-num">${el.atomicNum}</span>
      <span class="tab-btn-label">SEASON</span>
      <span class="tab-btn-symbol">${s.num}</span>
      <span class="tab-btn-mass">${el.mass}</span>
    `;
    btn.onclick = function() { showSeason(i, this); };
    tabs.appendChild(btn);

    const panel = document.createElement('div');
    panel.className = 'season-panel' + (i === 0 ? ' active' : '');
    panel.id = 'season-panel-' + i;
    panel.innerHTML = `
      <div class="season-info">
        <div class="season-num">S${s.num}</div>
        <div class="season-name">${s.name}</div>
        <div class="season-meta"><span>${s.year}</span><span>${s.episodes_count} Episodes</span></div>
        <p class="season-synopsis">${s.synopsis}</p>
        <div class="season-rating-display">
          <div class="season-rating-num">${s.rating}</div>
          <div class="season-rating-label">Avg. IMDb<br>Season Rating</div>
        </div>
      </div>
      <div>
        <div class="episode-list">
          ${s.episodes.map(ep => `
            <div class="ep-item">
              <span class="ep-num">${ep.num}</span>
              <span class="ep-title">${ep.title}</span>
              <span class="ep-rating ${ep.tier}">${ep.rating}</span>
            </div>`).join('')}
        </div>
      </div>`;
    container.appendChild(panel);
  });
}

function showSeason(i, btn) {
  document.querySelectorAll('.season-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('season-panel-' + i).classList.add('active');
  btn.classList.add('active');
}

function renderChars() {
  const grid = document.getElementById('chars-grid');
  characters.forEach(c => {
    const card = document.createElement('div');
    card.className = 'char-card';
    card.innerHTML = `
      <div class="char-initial">${c.initial}</div>
      <div class="char-name">${c.name}</div>
      <div class="char-actor">${c.actor}</div>
      <div class="char-role">${c.role}</div>
      <div class="char-tags">${c.tags.map((t, i) => `<span class="char-tag ${c.tagTypes[i]}">${t}</span>`).join('')}</div>`;
    grid.appendChild(card);
  });
}

const awardProfiles = {
  "Outstanding Drama Series": "The pinnacle of television achievement. Breaking Bad's wins in 2013 and 2014 solidified its status as one of the most masterfully crafted narratives in history, praised for its unparalleled pacing and character evolution.",
  "Lead Actor — Bryan Cranston": "A record-tying four wins for Bryan Cranston's transformative portrayal of Walter White. His journey from a desperate teacher to the ruthless Heisenberg remains a gold standard for television acting.",
  "Supporting Actor — Aaron Paul": "Aaron Paul's three wins reflect Jesse Pinkman's role as the emotional soul of the series. His performance brought depth and humanity to the chaotic world of the drug trade.",
  "Supporting Actress — Anna Gunn": "Anna Gunn's two consecutive wins recognized her powerful portrayal of Skyler White, navigating the complex and often terrifying domestic consequences of her husband's secret life.",
  "Outstanding Writing — Drama Series": "The 'Ozymandias' effect. Recognized for the razor-sharp precision and devastating emotional stakes of its final season, particularly the flawless narrative structure designed by Vince Gilligan.",
  "Outstanding Directing —  Drama Series": "Global recognition of the show's cultural impact and cinematic quality, marking the point where Breaking Bad transitioned from a cult hit to a worldwide phenomenon.",
  "Peabody Award — Excellence": "Honored for moving the medium of television forward with its unique visual language and moral complexity, a testament to the show's artistic integrity from the very first season."
};

function renderAwards() {
  const el = document.getElementById('emmy-list');
  if (!el) return;
  
  const symbolMap = {
    "Outstanding Drama Series": "Ds",
    "Lead Actor — Bryan Cranston": "Ac",
    "Supporting Actor — Aaron Paul": "Sa",
    "Supporting Actress — Anna Gunn": "Ax",
    "Outstanding Writing — Drama Series": "Wr",
    "Outstanding Directing — Drama Series": "Di",
    "Peabody Award — Excellence": "Pe"
  };

  const createCard = (a, i) => {
    const card = document.createElement('div');
    card.className = 'char-card award-style';
    const profileText = awardProfiles[a.name] || "A testament to the show's enduring legacy and critical acclaim.";
    const symbol = symbolMap[a.name] || a.name.substring(0, 2);
    
    card.innerHTML = `
      <div class="char-initial">${symbol}</div>
      <div class="char-name">${a.name}</div>
      <div class="char-actor">${a.year}</div>
      <div class="char-role">${profileText}</div>
      <div class="char-tags">
        <span class="char-tag award">RATIFIED</span>
        <span class="char-tag">ID-${200 + i}</span>
      </div>
    `;
    return card;
  };

  emmyAwards.forEach((a, i) => el.appendChild(createCard(a, i)));
  emmyAwards.forEach((a, i) => el.appendChild(createCard(a, i)));
}

function renderDialogues() {
  const grid = document.getElementById('dialogues-grid');
  dialogues.forEach(d => {
    const card = document.createElement('div');
    card.className = 'dialogue-card' + (d.full ? ' full' : '');
    card.innerHTML = `
      <div class="dialogue-quote">"</div>
      <div class="dialogue-text">${d.quote}</div>
      <div class="dialogue-speaker">${d.speaker}</div>
      <div class="dialogue-context">${d.context}</div>`;
    grid.appendChild(card);
  });
}

let audioCtx;
function ctx(){if(!audioCtx)audioCtx=new(window.AudioContext||window.webkitAudioContext)();return audioCtx}

function initIntroParticles(){
  const cv=document.getElementById('intro-sparks');if(!cv)return;
  const c=cv.getContext('2d');cv.width=innerWidth;cv.height=innerHeight;
  const cx=cv.width/2,cy=cv.height/2;const sparks=[];
  for(let i=0;i<60;i++){const a=Math.random()*Math.PI*2,sp=Math.random()*3+1;sparks.push({x:cx,y:cy,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp,life:1,decay:Math.random()*.008+.003,r:Math.random()*2+.5,delay:Math.random()*60+30})}
  let frame=0;
  (function draw(){
    c.clearRect(0,0,cv.width,cv.height);
    sparks.forEach(s=>{if(frame<s.delay)return;s.x+=s.vx;s.y+=s.vy;s.vx*=.995;s.vy*=.995;s.life-=s.decay;if(s.life<=0)return;c.beginPath();c.arc(s.x,s.y,s.r*s.life,0,Math.PI*2);c.fillStyle=`rgba(109,184,92,${s.life*.6})`;c.fill()});
    frame++;if(frame<300)requestAnimationFrame(draw);
  })();
}

function skipIntro() {
  const intro = document.getElementById('intro');
  if (intro) intro.classList.add('hide');
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });

function initBgParticles(){
  const cv=document.getElementById('particles-canvas');if(!cv)return;
  const c=cv.getContext('2d');
  let w=cv.width=window.innerWidth,h=cv.height=window.innerHeight;
  const pts=[];for(let i=0;i<40;i++)pts.push({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.5});
  window.addEventListener('resize',()=>{w=cv.width=window.innerWidth;h=cv.height=window.innerHeight});
  function draw(){
    c.clearRect(0,0,w,h);
    pts.forEach(p=>{
      p.x+=p.vx;p.y+=p.vy;
      if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1;
      c.beginPath();c.arc(p.x,p.y,1.5,0,Math.PI*2);c.fillStyle='#6db85c';c.fill();
    });
    for(let i=0;i<pts.length;i++){
      for(let j=i+1;j<pts.length;j++){
        const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,dist=Math.sqrt(dx*dx+dy*dy);
        if(dist<150){
          c.beginPath();c.moveTo(pts[i].x,pts[i].y);c.lineTo(pts[j].x,pts[j].y);
          c.strokeStyle=`rgba(109,184,92,${1-dist/150})`;c.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
}

function initScrollEffects(){
  const sq=document.getElementById('sticky-quotes');
  const quotes=document.querySelectorAll('.sq-quote');
  const dots=document.querySelectorAll('.sq-dot');
  const dividers=document.querySelectorAll('.parallax-divider');
  let ticking=false;

  window.addEventListener('scroll',()=>{
    if(!ticking){
      window.requestAnimationFrame(()=>{
        const sy=window.scrollY;
        dividers.forEach(d=>{
          const rect=d.getBoundingClientRect();
          if(rect.top<window.innerHeight && rect.bottom>0) {
            d.style.backgroundPositionY = (rect.top * 0.3) + 'px';
          }
        });

        if(sq && quotes.length>0){
          const rect=sq.getBoundingClientRect();
          const progress=Math.max(0,Math.min(1,-rect.top/(rect.height-window.innerHeight)));
          const activeIdx=Math.min(quotes.length-1,Math.floor(progress*quotes.length));
          quotes.forEach((q,i)=>{q.classList.toggle('active',i===activeIdx)});
          dots.forEach((d,i)=>{d.classList.toggle('active',i===activeIdx)});
        }
        ticking=false;
      });
      ticking=true;
    }
  });
}

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const t = document.querySelector(a.getAttribute('href'));
    if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  renderSeasons();
  renderChars();
  renderAwards();
  renderDialogues();
  initBgParticles();
  initScrollEffects();
  
  const revealEls = document.querySelectorAll('.sr-up, .sr-left, .sr-right, .sr-scale');
  revealEls.forEach(el => observer.observe(el));

  const intro = document.getElementById('intro');
  if (intro) {
    const startBtn = document.createElement('button');
    startBtn.className = 'intro-start-btn';
    startBtn.innerHTML = `
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:28px;">
        <div class="rv-svg-wrapper rv-wrap">
          <svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Breaking Bad cook RV">
            <defs>
              <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#e8dfc0"/>
                <stop offset="100%" stop-color="#c9bc96"/>
              </linearGradient>
              <linearGradient id="roofGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#d4c9a4"/>
                <stop offset="100%" stop-color="#b8aa7e"/>
              </linearGradient>
              <radialGradient id="wg" cx="40%" cy="35%" r="60%">
                <stop offset="0%" stop-color="#666"/>
                <stop offset="100%" stop-color="#1a1a1a"/>
              </radialGradient>
            </defs>
            <ellipse cx="262" cy="220" rx="198" ry="11" fill="rgba(0,0,0,0.5)"/>
            <rect x="38" y="88" width="430" height="118" rx="10" fill="url(#bodyGrad)" stroke="#a8996e" stroke-width="1.5"/>
            <path d="M70,88 Q75,52 130,44 L390,44 Q445,44 450,88 Z" fill="url(#roofGrad)" stroke="#a8996e" stroke-width="1.5"/>
            <rect x="190" y="36" width="90" height="15" rx="3" fill="#bfb28a" stroke="#9a8d60" stroke-width="1"/>
            <rect x="195" y="38" width="80" height="11" rx="2" fill="#a89e72"/>
            <line x1="210" y1="38" x2="210" y2="49" stroke="#9a8d60" stroke-width="0.8"/>
            <line x1="225" y1="38" x2="225" y2="49" stroke="#9a8d60" stroke-width="0.8"/>
            <line x1="240" y1="38" x2="240" y2="49" stroke="#9a8d60" stroke-width="0.8"/>
            <line x1="255" y1="38" x2="255" y2="49" stroke="#9a8d60" stroke-width="0.8"/>
            <line x1="270" y1="38" x2="270" y2="49" stroke="#9a8d60" stroke-width="0.8"/>
            <rect x="300" y="33" width="50" height="16" rx="3" fill="#b8aa7a" stroke="#9a8c5a" stroke-width="1"/>
            <rect x="304" y="36" width="42" height="10" rx="2" fill="#a89a6a"/>
            <line x1="312" y1="36" x2="312" y2="46" stroke="#9a8c5a" stroke-width="0.7"/>
            <line x1="320" y1="36" x2="320" y2="46" stroke="#9a8c5a" stroke-width="0.7"/>
            <line x1="328" y1="36" x2="328" y2="46" stroke="#9a8c5a" stroke-width="0.7"/>
            <line x1="336" y1="36" x2="336" y2="46" stroke="#9a8c5a" stroke-width="0.7"/>
            <line x1="344" y1="36" x2="344" y2="46" stroke="#9a8c5a" stroke-width="0.7"/>
            <line x1="420" y1="44" x2="420" y2="24" stroke="#888" stroke-width="1.5"/>
            <circle cx="420" cy="23" r="2.5" fill="#aaa"/>
            <rect x="430" y="88" width="50" height="118" rx="8" fill="#d4c9a4" stroke="#a8996e" stroke-width="1.5"/>
            <path d="M438,88 Q448,58 468,53 L479,53 Q490,62 480,88 Z" fill="#c8bc96" stroke="#a8996e" stroke-width="1"/>
            <rect x="440" y="60" width="36" height="34" rx="4" fill="#3a5a7a" stroke="#2a4060" stroke-width="1"/>
            <line x1="458" y1="60" x2="458" y2="94" stroke="#2a4060" stroke-width="0.8" opacity="0.5"/>
            <rect x="464" y="138" width="18" height="12" rx="3" fill="#f5e8a0" stroke="#c8b860" stroke-width="1"/>
            <rect x="466" y="140" width="14" height="8" rx="2" fill="#fffad0" opacity="0.85"/>
            <rect x="462" y="185" width="22" height="16" rx="3" fill="#8a7e58" stroke="#6a5e40" stroke-width="1"/>
            <line x1="462" y1="191" x2="484" y2="191" stroke="#6a5e40" stroke-width="0.8"/>
            <line x1="462" y1="197" x2="484" y2="197" stroke="#6a5e40" stroke-width="0.8"/>
            <rect x="38" y="168" width="430" height="10" rx="0" fill="#c0391b"/>
            <rect x="38" y="178" width="430" height="6" rx="0" fill="#e05a2b"/>
            <rect x="55" y="97" width="53" height="82" rx="4" fill="#d8cc9e" stroke="#a8996e" stroke-width="1.2"/>
            <rect x="59" y="101" width="45" height="35" rx="3" fill="#3a5a7a" stroke="#2a4060" stroke-width="0.8"/>
            <rect x="59" y="140" width="45" height="35" rx="3" fill="#3a5a7a" stroke="#2a4060" stroke-width="0.8"/>
            <rect x="60" y="102" width="10" height="33" rx="2" fill="rgba(255,255,255,0.1)"/>
            <circle cx="101" cy="139" r="3.5" fill="#c0a844" stroke="#9a8020" stroke-width="0.8"/>
            <rect x="118" y="99" width="32" height="23" rx="3" fill="#4a7a9a" stroke="#2a5070" stroke-width="1"/>
            <rect x="119" y="100" width="8" height="21" rx="1" fill="rgba(255,255,255,0.08)"/>
            <rect x="162" y="99" width="32" height="23" rx="3" fill="#4a7a9a" stroke="#2a5070" stroke-width="1"/>
            <rect x="163" y="100" width="8" height="21" rx="1" fill="rgba(255,255,255,0.08)"/>
            <rect x="350" y="95" width="66" height="52" rx="4" fill="#3d6d8a" stroke="#2a5070" stroke-width="1.2"/>
            <line x1="383" y1="95" x2="383" y2="147" stroke="#2a5070" stroke-width="0.8" opacity="0.6"/>
            <line x1="350" y1="121" x2="416" y2="121" stroke="#2a5070" stroke-width="0.6" opacity="0.4"/>
            <rect x="351" y="96" width="14" height="50" rx="2" fill="rgba(255,255,255,0.06)"/>
            <rect x="36" y="188" width="14" height="9" rx="2" fill="#7a6e48" stroke="#5a5030" stroke-width="1"/>
            <ellipse cx="36" cy="192" rx="5" ry="4" fill="#3a3020"/>
            <circle class="smoke-1" cx="24" cy="190" r="7" fill="#556655" opacity="0"/>
            <circle class="smoke-2" cx="14" cy="182" r="10" fill="#445544" opacity="0"/>
            <circle class="smoke-3" cx="6"  cy="172" r="12" fill="#334433" opacity="0"/>
            <rect x="60" y="200" width="350" height="10" rx="2" fill="#9a8e68" stroke="#7a6e48" stroke-width="1"/>
            <g class="wheel-rear">
              <circle cx="130" cy="208" r="28" fill="#252525" stroke="#444" stroke-width="2"/>
              <circle cx="130" cy="208" r="20" fill="#181818" stroke="#555" stroke-width="1.5"/>
              <circle cx="130" cy="208" r="8" fill="url(#wg)" stroke="#666" stroke-width="1"/>
              <circle cx="130" cy="208" r="3.5" fill="#d0d0d0"/>
              <line x1="130" y1="188" x2="130" y2="200" stroke="#555" stroke-width="1.5"/>
              <line x1="130" y1="216" x2="130" y2="228" stroke="#555" stroke-width="1.5"/>
              <line x1="110" y1="208" x2="122" y2="208" stroke="#555" stroke-width="1.5"/>
              <line x1="138" y1="208" x2="150" y2="208" stroke="#555" stroke-width="1.5"/>
              <line x1="116" y1="194" x2="124" y2="202" stroke="#555" stroke-width="1.2"/>
              <line x1="136" y1="214" x2="144" y2="222" stroke="#555" stroke-width="1.2"/>
              <line x1="144" y1="194" x2="136" y2="202" stroke="#555" stroke-width="1.2"/>
              <line x1="124" y1="214" x2="116" y2="222" stroke="#555" stroke-width="1.2"/>
            </g>
            <ellipse cx="124" cy="202" rx="5" ry="3.5" fill="rgba(255,255,255,0.1)"/>
            <g class="wheel-front">
              <circle cx="390" cy="208" r="28" fill="#252525" stroke="#444" stroke-width="2"/>
              <circle cx="390" cy="208" r="20" fill="#181818" stroke="#555" stroke-width="1.5"/>
              <circle cx="390" cy="208" r="8" fill="url(#wg)" stroke="#666" stroke-width="1"/>
              <circle cx="390" cy="208" r="3.5" fill="#d0d0d0"/>
              <line x1="390" y1="188" x2="390" y2="200" stroke="#555" stroke-width="1.5"/>
              <line x1="390" y1="216" x2="390" y2="228" stroke="#555" stroke-width="1.5"/>
              <line x1="370" y1="208" x2="382" y2="208" stroke="#555" stroke-width="1.5"/>
              <line x1="398" y1="208" x2="410" y2="208" stroke="#555" stroke-width="1.5"/>
              <line x1="376" y1="194" x2="384" y2="202" stroke="#555" stroke-width="1.2"/>
              <line x1="396" y1="214" x2="404" y2="222" stroke="#555" stroke-width="1.2"/>
              <line x1="404" y1="194" x2="396" y2="202" stroke="#555" stroke-width="1.2"/>
              <line x1="384" y1="214" x2="376" y2="222" stroke="#555" stroke-width="1.2"/>
            </g>
            <ellipse cx="384" cy="202" rx="5" ry="3.5" fill="rgba(255,255,255,0.1)"/>
          </svg>
        </div>
        <div class="rv-labels" style="text-align:center;">
          <div class="animated-proceed" style="display:flex;align-items:center;justify-content:center;gap:12px;margin-top:10px;">
            <div class="proceed-box" style="width:72px;height:72px;background:#5aaa3a;border-radius:3px;position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;border:2px solid #3a8a1a;transition:all 0.3s ease;">
              <span style="position:absolute;top:4px;left:6px;font-family:'Courier New',monospace;font-size:11px;font-weight:700;color:#1a5a0a;">59</span>
              <span style="font-family:'Merriweather',serif;font-size:34px;font-weight:900;color:#0a2a04;line-height:1;">Pr</span>
              <span style="font-family:'Courier New',monospace;font-size:9px;color:#1a5a0a;margin-top:2px;">140.907</span>
            </div>
            <span class="proceed-text" style="font-family:'Merriweather',serif;font-size:34px;font-weight:900;color:#e8ead4;letter-spacing:-0.5px;transition:all 0.3s ease;">oceed</span>
          </div>
        </div>
      </div>
    `;
    intro.appendChild(startBtn);

    const aud = new Audio('intro.mp3');
    aud.playbackRate = 0.92;
    
    startBtn.addEventListener('click', () => {
      startBtn.classList.add('fade-out');
      setTimeout(() => startBtn.remove(), 500);
      
      aud.play().then(() => {
        intro.classList.add('playing');
        initIntroParticles();
        
        aud.onended = () => {
          skipIntro();
        };
      }).catch(err => {
        intro.classList.add('playing');
        initIntroParticles();
        setTimeout(skipIntro, 17000);
      });
    });
  }
});
