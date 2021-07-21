// WEEK 8 / 08.03 
const currentList = ["!Nbepoob!!!Epo(u!Dsz!Gps!Nf!Bshfoujob!", "!Fo!Wphvf!!!Epo(u!Mfu!Hp!)Mpwf*!", "!Xijuofz!Ipvtupo!!!Tufq!Cz!Tufq!", "!Op!Epvcu!!!Epo(u!Tqfbl!", "!Hjovxjof!!!Qpoz!", "!ND!Mzuf!!!Dpme!Spdl!B!Qbsuz!", "!V3!!!Ejtdpuifrvf!", "!Efqfdif!Npef!!!Cbssfm!Pg!B!Hvo!", "!Tqjdf!Hjsmt!!!3!Cfdpnf!2!", "!Npotubst!)C!Sfbm-!Cvtub!Siznft-!Dppmjp-!MM!Dppm!K…Nfuipe!Nbo*!!!Iju!(Fn!Ijhi!)Uif!Npotubst!Bouifn*!", "!Kbnjsprvbj!!!Dptnjd!Hjsm!", "!Bqpmmp!Gpvs!Gpsuz!!!Bjo(u!Ubmljo(!(Cpvu!Evc!", "!Upoj!Csbyupo!!!Vo.Csfbl!Nz!Ifbsu!", "!Xbssfo!H/!!!J!Tipu!Uif!Tifsjgg!", "!Tbti\"!!!Fodpsf!vof!gpjt!", "!Spcfsu!Njmft!!!Pof!Boe!Pof!", "!MM!Dppm!K!!!Bjo(u!Opcpez!", "!Cpz{pof!!!B!Ejggfsfou!Cfbu!", "!S/!Lfmmz!!!J!Cfmjfwf!J!Dbo!Gmz!", "!Upsj!Bnpt!!!Qspgfttjpobm!Xjepx!"];
const nextList = ["!Fo!Wphvf!!!Epo(u!Mfu!Hp!)Mpwf*!", "!V3!!!Ejtdpuifrvf!", "!Nbepoob!!!Epo(u!Dsz!Gps!Nf!Bshfoujob!", "!Op!Epvcu!!!Epo(u!Tqfbl!", "!Efqfdif!Npef!!!Cbssfm!Pg!B!Hvo!", "!Hjovxjof!!!Qpoz!", "!Xijuofz!Ipvtupo!!!Tufq!Cz!Tufq!", "!Npotubst!)C!Sfbm-!Cvtub!Siznft-!Dppmjp-!MM!Dppm!K…Nfuipe!Nbo*!!!Iju!(Fn!Ijhi!)Uif!Npotubst!Bouifn*!", "!ND!Mzuf!!!Dpme!Spdl!B!Qbsuz!", "!Bqpmmp!Gpvs!Gpsuz!!!Bjo(u!Ubmljo(!(Cpvu!Evc!", "!Tbti\"!!!Fodpsf!vof!gpjt!", "!Xbssfo!H/!!!J!Tipu!Uif!Tifsjgg!", "!CCF!!!Gmbti!", "!Tqjdf!Hjsmt!!!3!Cfdpnf!2!", "!Upoj!Csbyupo!!!Vo.Csfbl!Nz!Ifbsu!", "!Cbdltusffu!Cpzt!!!Bozxifsf!Gps!Zpv!", "!Kbnjsprvbj!!!Dptnjd!Hjsm!", "!S/!Lfmmz!!!J!Cfmjfwf!J!Dbo!Gmz!", "!Bfsptnjui!!!Gbmmjoh!Jo!Mpwf!)Jt!Ibse!Po!Uif!Lofft*!", "!Xijuf!Upxo!!!Bcpsu-!Sfusz-!Gbjm@!Zpvs!Xpnbo!"];

const advertisement = {
  startSeconds: 77,
  endSeconds: 91,
  style: {width: "83vw"},
  videoId: 'caaddLZhLoY',
};

const intro = {
  style: {width: "83vw"},
  videoId: 'YoqgOOQwEqI',
};

const newVideo = {
  startSeconds: 11,
  endSeconds: 20,
  style: {width: "83vw"},
  videoId: 'caaddLZhLoY',
};

const sting = {
  startSeconds: 16,
  style: {width: "83vw"},
  videoId: 'YoqgOOQwEqI',
};

const charted = [
  {
    title: "All I Have To Give",
    artist: "Backstreet Boys",
    history: [3, 4, 5, 7, 10, 14],
    match: "!Uif!Qspejhz!!!Csfbuif!",
    startSeconds: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "pj6FCKm8dhM",
  },
  {
    title: "All Or Nothing",
    artist: "Cher",
    endSeconds: 242,
    history: [16, 14, 10],
    match: "!Npotubst!)C!Sfbm-!Cvtub!Siznft-!Dppmjp-!MM!Dppm!K…Nfuipe!Nbo*!!!Iju!(Fn!Ijhi!)Uif!Npotubst!Bouifn*!",
    startSeconds: 6,
    style: {left: "-5vw", position: "relative", width: "110vw"},
    type: 0,
    videoId: "BW4LUe2e5oU",
  },
  {
    title: "All Star",
    artist: "Smash Mouth",
    history: [14, 9, 4, 1, 1, 1, 1, 1],
    match: "!Nbepoob!!!Epo(u!Dsz!Gps!Nf!Bshfoujob!",
    style: {width: "100vw"},
    type: 0,
    videoId: "L_jWHffIx5E",
  },
  {
    title: "Angels",
    artist: "Robbie Williams",
    endSeconds: 235,
    history: [20, 11, 8, 5, 3, 2, 2, 3],
    match: "!Xijuofz!Ipvtupo!!!Tufq!Cz!Tufq!",
    startSeconds: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "luwAMFcc2f8",
  },
  {
    title: "Atrapados En La Red",
    artist: "Tam Tam Go!",
    history: [15],
    match: "!Epoob!Mfxjt!!!J!Mpwf!Zpv!Bmxbzt!Gpsfwfs!",
    style: {width: "83vw"},
    type: 0,
    videoId: "u8uup17RrUU",
  },
  { 
    title: "Blue Monday",
    artist: "Orgy",
    history: [17, 15, 20, 20],
    match: "!Upsj!Bnpt!!!Qspgfttjpobm!Xjepx!",
    startSeconds: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "aJZTfl3DmCU",
  },
  {
    title: "Coffee And TV",
    artist: "Blur",
    endSeconds: 368,
    history: [15],
    match: "!Tbti\"!!!Fodpsf!vof!gpjt!",
    startSeconds: 7,
    style: {width: "100vw"},
    type: 0,
    videoId: "GXRVX1AKAew",
  },
  {
    title: "Diselo Con Flores",
    artist: "Fey",
    history: [19],
    match: "!S/!Lfmmz!!!J!Cfmjfwf!J!Dbo!Gmz!",
    style: {width: "83vw"},
    type: 0,
    videoId: "r-b495ayDF4"
  },
  {
    title: "Don't Say You Love Me",
    artist: "M2M",
    history: [19, 16, 13, 19],
    match: "!Fbtu!28!!!Ifz!Dijme!!",
    style: {width: "83vw"},
    type: 0,
    videoId: "ZCFlT_FYnEE",
  },
  {
    title: "Fast As You Can",
    artist: "Fiona Apple",
    history: [20, 20, 18, 17, 17],
    match: "!MM!Dppm!K!!!Bjo(u!Opcpez!",
    style: {width: "83vw"},
    type: 0,
    videoId: "NbxqtbqyoRk",
  },
  {
    title: "Fly Away",
    artist: "Lenny Kravitz",
    history: [20, 11, 7],
    left: "-5vw",
    match: "!V3!!!Ejtdpuifrvf!",
    style: {left: "-5vw", position: "relative", width: "110vw"},
    type: 0,
    videoId: "EvuL5jyCHOw",
  },
  {
    title: "From The Bottom Of My Broken Heart",
    artist: "Britney Spears",
    history: [19, 20],
    match: "!Qfufs!Boesf!!!J!Gffm!Zpv!",
    style: {width: "83vw"},
    type: 0,
    videoId: "fHPnGqXXUmI",
  },
  {
    title: "Heartbreaker",
    artist: "Mariah Carey",
    history: [9, 12, 16],
    match: "!Uif!Csbjet!!!Cpifnjbo!Sibqtpez!!",
    style: {width: "83vw"},
    type: 0,
    videoId: "FUzcLVyFLNo",
  },
  {
    title: "Higher",
    artist: "Creed",
    history: [6, 5, 7, 8, 12, 17],
    match: "!Gvhfft!!!Op!Xpnbo!Op!Dsz!",
    style: {width: "83vw"},
    type: 0,
    videoId: "J16lInLZRms",
  },
  {
    title: "I Need To Know",
    artist: "Marc Anthony",
    history: [18, 10, 6, 2, 2, 3, 4, 4],
    match: "!Op!Epvcu!!!Epo(u!Tqfbl!",
    style: {width: "83vw"},
    type: 0,
    videoId: "fLVzw9wVd9o",
  },
  {
    title: "If Ya Gettin' Down",
    artist: "Five",
    history: [7, 7, 9, 11, 15],
    match: "!Cbdltusffu!Cpzt!!!Rvju!Qmbzjoh!Hbnft!)Xjui!Nz!Ifbsu*!",
    style: {width: "83vw"},
    type: 0,
    videoId: "TU-5FmsXOOA",
  },
  {
    title: "Jennifer Del Estero",
    artist: "Illya Kuryaki",
    history: [12, 14, 18],
    match: "!Uif!Bsujtu!Gpsnfsmz!Lopxo!Bt!Qsjodf!!!Cfudib!Cz!Hpmmz!Xpx\"!",
    style: {width: "83vw"},
    type: 0,
    videoId: "KLRlJ0uJ-yI",
  },
  {
    title: "La Lola",
    artist: "Cafe Quijano",
    history: [4, 6, 10, 16],
    match: "!Nbsl!Pxfo!!!Dijme!",
    style: {width: "83vw"},
    type: 0,
    videoId: "ccsUjRhpo_U",
  },
  {
    title: "Look At Me",
    artist: "Geri Halliwell",
    history: [16],
    match: "!Tqjdf!Hjsmt!!!Tbz!Zpv(mm!Cf!Uifsf!",
    style: {width: "83vw"},
    type: 0,
    videoId: "31mlEEs9_Vk",
  },
  {
    title: "Man! I Feel Like A Woman",
    artist: "Shania Twain",
    history: [20, 18, 14, 12, 12, 18],
    match: "!Cpz{pof!!!B!Ejggfsfou!Cfbu!",
    style: {width: "83vw"},
    type: 0,
    videoId: "ZJL4UGSbeFg",
  },
  {
    title: "Maria Maria",
    artist: "Santana",
    history: [19, 8, 8],
    match: "!Efqfdif!Npef!!!Cbssfm!Pg!B!Hvo!",
    style: {width: "83vw"},
    type: 0,
    videoId: "nPLV7lGbmT4"
  },
  {
    title: "Mi Chico Latino",
    artist: "Geri Halliwell",
    left: "-5vw",
    history: [15, 12, 8, 4, 3, 2],
    match: "!Fo!Wphvf!!!Epo(u!Mfu!Hp!)Mpwf*!",
    startSeconds: 1,
    style: {left: "-5vw", position: "relative", width: "110vw"},
    type: 0,
    videoId: "4KGTR0NPNF0",
  },
  {
    title: "New",
    artist: "No Doubt",
    history: [18, 12, 9, 7, 6, 6, 6],
    match: "!ND!Mzuf!!!Dpme!Spdl!B!Qbsuz!",
    startSeconds: 2,
    style: {width: "83vw"},
    type: 0,
    videoId: "LTfD2E0hf4k",
  },
  {
    title: "No Quiero Verte",
    artist: "Lynda",
    history: [19, 17, 13, 11, 11, 15],
    left: "-5vw",
    match: "!Toppq!Ephhz!Ephh!gfbu/!Dibsmjf!Xjmtpo!!!Toppq(t!Vqtjef!Zb!Ifbe!",
    startSeconds: 1,
    style: {left: "-5vw", position: "relative", width: "110vw"},
    type: 0,
    videoId: "_o0vOmL-PYY",
  },
  {
    title: "Puente",
    artist: "Gustavo Cerati",
    history: [1, 1, 1, 4, 5, 10, 13, 16],
    match: "!Spcfsu!Njmft!!!Pof!Boe!Pof!",
    style: {width: "83vw"},
    type: 0,
    videoId: "eAO7CEcCD3s",
  },
  {
    title: "Si Me Adverti",
    artist: "Zurdok",
    history: [17, 15, 13, 10, 9, 9, 9, 11],
    match: "!Kbnjsprvbj!!!Dptnjd!Hjsm!",
    startSeconds: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "gZJOe6lEHJE",
  },
  {
    title: "Someday",
    artist: "Sugar Ray",
    history: [2, 2, 2, 6, 6, 7, 10, 13],
    match: "!Upoj!Csbyupo!!!Vo.Csfbl!Nz!Ifbsu!",
    startSeconds: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "NQSCKWfJlXs",
  },
  {
    title: "Someday We'll Know",
    artist: "New Radicals",
    endSeconds: 215,
    history: [5, 3, 3, 3, 4, 5, 7, 9],
    match: "!Tqjdf!Hjsmt!!!3!Cfdpnf!2!",
    style: {width: "83vw"},
    type: 0,
    videoId: "bDmA8qQKhMY",
  },
  {
    title: "Super Trouper",
    artist: "A-Teens",
    history: [16, 14],
    match: "!Xbssfo!H/!!!J!Tipu!Uif!Tifsjgg!",
    style: {width: "83vw"},
    type: 0,
    videoId: "5j1vhCf5XKg"
  },
  {
    title: "Tengo Frio",
    artist: "Ely Guerra",
    history: [18, 12],
    match: "!Bqpmmp!Gpvs!Gpsuz!!!Bjo(u!Ubmljo(!(Cpvu!Evc!",
    style: {width: "83vw"},
    type: 0,
    videoId: "foLqysKnIIM"
  },
  {
    title: "That's The Way It Is",
    artist: "Celine Dion",
    history: [19, 15, 13, 8, 5, 5],
    match: "!Hjovxjof!!!Qpoz!",
    style: {width: "83vw"},
    type: 0,
    videoId: "T6wbugWrfLU",
  },
  {
    title: "The Kids Aren't Alright",
    artist: "The Offspring",
    history: [8, 8, 11, 14, 18],
    match: "!Xbssfo!H/!gfbu/!Bejob!Ipxbse!!!Xibu(t!Mpwf!Hpu!Up!Ep!Xjui!Ju!",
    style: {left: "-5vw", position: "relative", width: "110vw"},
    type: 0,
    videoId: "7iNbnineUCI",
  },
  {
    title: "Waiting For Tonight",
    artist: "Jennifer Lopez",
    history: [10, 17],
    match: "!Fbtu28!'!Hbcsjfmmf!!!Jg!Zpv!Fwfs!",
    style: {width: "83vw"},
    type: 0,
    videoId: "_66jPJVS4JE",
  },
  {
    title: "What's My Age Again?",
    artist: "Blink 182",
    history: [11, 16],
    match: "!Cpz{pof!!!Xpset!",
    style: {width: "83vw"},
    type: 0,
    videoId: "K7l5ZeVVoCA",
  },
  {
    title: "When You're Gone",
    artist: "Bryan Adams",
    history: [13, 13, 14, 17, 19],
    match: "!Cmbdltusffu!gfbu/!Es/!Esf!!!Op!Ejhhjuz!",
    style: {width: "83vw"},
    type: 0,
    videoId: "_W2jONIjrM0",
  },
];

let uncharted = new List(
  {
    title: "Absolutely Everybody",
    artist: "Vanessa Amorosi",
    priority: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "Rco1QQShM1Y"
  },
  /*{
    title: "Born To Make You Happy",
    artist: "Britney Spears",
    type: 0,
    videoId: "Yy5cKX4jBkQ"
  },*/
  {
    title: "Burning Down The House",
    artist: "Tom Jones",
    priority: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "iYuldgIOelY"
  },
  /*{
    title: "Canela",
    artist: "Fey",
    type: 0,
    videoId: "_sgwHcuVCYg"
  },*/
  {
    title: "Coma White",
    artist: "Marilyn Manson",
    priority: 2,
    style: {width: "83vw"},
    type: 0,
    videoId: "QQPJYnr48yU"
  },
  {
    title: "Crazy",
    artist: "Britney Spears",
    priority: 3,
    style: {width: "83vw"},
    type: 0,
    videoId: "IPL_4ICbrfw",
  },
  {
    title: "Don't Call Me Baby",
    artist: "Madison Avenue",
    priority: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "M1kEjj3Ej68"
  },
  {
    title: "Ese Oscuro Objeto Del Deseo",
    artist: "Vertigogo",
    priority: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "snYOuSoIOO0"
  },
  {
    title: "Guerrilla Radio",
    artist: "Rage Against The Machine",
    priority: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "Rm1nCYOZB-s"
  },
  /* {
    title: "Keep On Movin'",
    artist: "Five",
    type: 0,
    videoId: "3OJMjlzVLZE"
  }, */  
  {
    title: "Let Forever Be",
    artist: "The Chemical Broters",
    priority: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "s5FyfQDO5g0",
  },
  {
    title: "Lullaby",
    artist: "Shawn Mullins",
    priority: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "hG9C0VwruXE"
  },
  {
    title: "No Leaf Clover",
    artist: "Metallica",
    priority: 2,
    style: {width: "83vw"},
    type: 0,
    videoId: "Sh5S3OxiE-s"
  },
  {
    title: "Ojos Así",
    artist: "Shakira",
    priority: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "I0ahzYU1xpg"
  },
  {
    title: "She's Got Issues",
    artist: "The Offspring",
    priority: 2,
    style: {width: "83vw"},
    type: 0,
    videoId: "SAxPLSvvbXY"
  },
  {
    title: "Sitting Down Here",
    artist: "Lene Marlin",
    priority: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "ClSVzlObxSc"
  },
  {
    title: "So Young",
    artist: "The Corrs",
    priority: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "TzLTf69vQos"
  },
  {
    title: "There She Goes",
    artist: "Sixpence None The Richer",
    priority: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "68MKLkNSMN4"
  },
  {
    title: "Unpretty",
    artist: "TLC",
    priority: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "g2gy1Evb1Kg"
  },
  {
    title: "Ya No Te Quiero",
    artist: "Ana Torroja",
    priority: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "PIiustuQOlQ"
  },
)
// Duplicate an item a certain number of times according to its priority.
// This increases the chances of an item being randomly picked up from the pool.
// For example, an item with a priority of '3' is duplicated 3 times in the pool. 
.map(item => (new Array(item.priority)).fill(item)).flat();
