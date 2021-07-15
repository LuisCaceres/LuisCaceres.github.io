// WEEK 1 / 11.01 
const currentList = ["!Spcfsu!Njmft!!!Pof!Boe!Pof!", "!Upoj!Csbyupo!!!Vo.Csfbl!Nz!Ifbsu!", "!Uif!Qspejhz!!!Csfbuif!", "!Nbsl!Pxfo!!!Dijme!", "!Tqjdf!Hjsmt!!!3!Cfdpnf!2!", "!Gvhfft!!!Op!Xpnbo!Op!Dsz!", "!Cbdltusffu!Cpzt!!!Rvju!Qmbzjoh!Hbnft!)Xjui!Nz!Ifbsu*!", "!Xbssfo!H/!gfbu/!Bejob!Ipxbse!!!Xibu(t!Mpwf!Hpu!Up!Ep!Xjui!Ju!", "!Uif!Csbjet!!!Cpifnjbo!Sibqtpez!!", "!Fbtu28!'!Hbcsjfmmf!!!Jg!Zpv!Fwfs!", "!Cpz{pof!!!Xpset!", "!Uif!Bsujtu!Gpsnfsmz!Lopxo!Bt!Qsjodf!!!Cfudib!Cz!Hpmmz!Xpx\"!", "!Cmbdltusffu!gfbu/!Es/!Esf!!!Op!Ejhhjuz!", "!Nbepoob!!!Epo(u!Dsz!Gps!Nf!Bshfoujob!", "!Epoob!Mfxjt!!!J!Mpwf!Zpv!Bmxbzt!Gpsfwfs!", "!Tqjdf!Hjsmt!!!Tbz!Zpv(mm!Cf!Uifsf!", "!Kbnjsprvbj!!!Dptnjd!Hjsm!", "!Y{jcju!!!Qbqbsb{{j!", "!Qfufs!Boesf!!!J!Gffm!Zpv!", "!Xijuofz!Ipvtupo!!!Tufq!Cz!Tufq!"];
const nextList = ["!Spcfsu!Njmft!!!Pof!Boe!Pof!", "!Upoj!Csbyupo!!!Vo.Csfbl!Nz!Ifbsu!", "!Tqjdf!Hjsmt!!!3!Cfdpnf!2!", "!Uif!Qspejhz!!!Csfbuif!", "!Gvhfft!!!Op!Xpnbo!Op!Dsz!", "!Nbsl!Pxfo!!!Dijme!", "!Cbdltusffu!Cpzt!!!Rvju!Qmbzjoh!Hbnft!)Xjui!Nz!Ifbsu*!", "!Xbssfo!H/!gfbu/!Bejob!Ipxbse!!!Xibu(t!Mpwf!Hpu!Up!Ep!Xjui!Ju!", "!Nbepoob!!!Epo(u!Dsz!Gps!Nf!Bshfoujob!", "!Op!Epvcu!!!Epo(u!Tqfbl!", "!Xijuofz!Ipvtupo!!!Tufq!Cz!Tufq!", "!Uif!Csbjet!!!Cpifnjbo!Sibqtpez!!", "!Cmbdltusffu!gfbu/!Es/!Esf!!!Op!Ejhhjuz!", "!Uif!Bsujtu!Gpsnfsmz!Lopxo!Bt!Qsjodf!!!Cfudib!Cz!Hpmmz!Xpx\"!", "!Kbnjsprvbj!!!Dptnjd!Hjsm!", "!Cpz{pof!!!Xpset!", "!Fbtu28!'!Hbcsjfmmf!!!Jg!Zpv!Fwfs!", "!Epoob!Mfxjt!!!J!Mpwf!Zpv!Bmxbzt!Gpsfwfs!", "!Toppq!Ephhz!Ephh!gfbu/!Dibsmjf!Xjmtpo!!!Toppq(t!Vqtjef!Zb!Ifbe!", "!Qfufs!Boesf!!!J!Gffm!Zpv!"];


const advertisement = {
  endSeconds: 10,
  videoId: 'caaddLZhLoY',
  width: '83vw',
};

const sting = {
  videoId: 'YoqgOOQwEqI',
  width: '83vw',
};

const charted = [
  {
    title: "All I Have To Give",
    artist: "Backstreet Boys",
    history: [3, 4, 5, 7, 10, 14, 18],
    match: "!Uif!Qspejhz!!!Csfbuif!",
    startSeconds: 1,
    videoId: "pj6FCKm8dhM",
    type: 0,
    width: "83vw",
  },
  {
    title: "All Or Nothing",
    artist: "Cher",
    endSeconds: 242,
    history: [16, 14],
    match: "!Iju!(Fn!Ijhi!)Uif!Npotubst!Bouifn*!",
    startSeconds: 6,
    type: 0,
    videoId: "BW4LUe2e5oU",
    width: "100vw",
  },
  {
    title: "All Star",
    artist: "Smash Mouth",
    history: [14, 9, 4, 1, 1, 1, 1],
    match: "!Nbepoob!!!Epo(u!Dsz!Gps!Nf!Bshfoujob!",
    type: 0,
    videoId: "L_jWHffIx5E",
    width: "100vw",
  },
  {
    title: "Angels",
    artist: "Robbie Williams",
    endSeconds: 235,
    history: [20, 11, 8, 5, 3, 2, 2],
    match: "!Xijuofz!Ipvtupo!!!Tufq!Cz!Tufq!",
    startSeconds: 1,
    type: 0,
    videoId: "luwAMFcc2f8",
    width: "83vw",
  },
  {
    title: "Atrapados En La Red",
    artist: "Tam Tam Go!",
    history: [15, 18],
    match: "!Epoob!Mfxjt!!!J!Mpwf!Zpv!Bmxbzt!Gpsfwfs!",
    type: 0,
    videoId: "u8uup17RrUU",
    width: "83vw",
  },
  { 
    title: "Blue Monday",
    artist: "Orgy",
    history: [17, 15, 20],
    match: "!Qspgfttjpobm!Xjepx!",
    startSeconds: 1,
    type: 0,
    videoId: "aJZTfl3DmCU",
    width: "83vw",
  },
  {
    title: "Don't Say You Love Me",
    artist: "M2M",
    history: [19, 16, 13, 19],
    match: "!Ifz!Dijme!!",
    type: 0,
    videoId: "ZCFlT_FYnEE",
    width: "83vw",
  },
  {
    title: "Fast As You Can",
    artist: "Fiona Apple",
    history: [20, 20, 18, 17],
    match: "!Bjo(u!Opcpez!",
    type: 0,
    videoId: "NbxqtbqyoRk",
    width: "83vw",
  },
  {
    title: "Fly Away",
    artist: "Lenny Kravitz",
    history: [11],
    match: "!Ejtdpuifrvf!",
    priority: 2,
    type: 0,
    videoId: "EvuL5jyCHOw",
    width: "100vw",
  },
  {
    title: "From The Bottom Of My Broken Heart",
    artist: "Britney Spears",
    history: [19, 20],
    match: "!Qfufs!Boesf!!!J!Gffm!Zpv!",
    type: 0,
    videoId: "fHPnGqXXUmI",
    width: "83vw",
  },
  {
    title: "Heartbreaker",
    artist: "Mariah Carey",
    history: [9, 12, 16],
    match: "!Uif!Csbjet!!!Cpifnjbo!Sibqtpez!!",
    type: 0,
    videoId: "FUzcLVyFLNo",
    width: "83vw",
  },
  {
    title: "Higher",
    artist: "Creed",
    history: [6, 5, 7, 8, 12, 17],
    match: "!Gvhfft!!!Op!Xpnbo!Op!Dsz!",
    type: 0,
    videoId: "J16lInLZRms",
    width: "83vw",
  },
  {
    title: "I Need To Know",
    artist: "Marc Anthony",
    history: [10, 6, 2, 2, 3, 4],
    match: "!Op!Epvcu!!!Epo(u!Tqfbl!",
    type: 0,
    videoId: "fLVzw9wVd9o",
    width: "83vw",
  },
  {
    title: "If Ya Gettin' Down",
    artist: "Five",
    history: [7, 7, 9, 11, 15, 19],
    match: "!Cbdltusffu!Cpzt!!!Rvju!Qmbzjoh!Hbnft!)Xjui!Nz!Ifbsu*!",
    type: 0,
    videoId: "TU-5FmsXOOA",
    width: "83vw",
  },
  {
    title: "Jennifer Del Estero",
    artist: "Illya Kuryaki",
    history: [12, 14, 18],
    match: "!Uif!Bsujtu!Gpsnfsmz!Lopxo!Bt!Qsjodf!!!Cfudib!Cz!Hpmmz!Xpx\"!",
    type: 0,
    videoId: "KLRlJ0uJ-yI",
    width: "83vw",
  },
  {
    title: "La Lola",
    artist: "Cafe Quijano",
    history: [4, 6, 10, 16],
    match: "!Nbsl!Pxfo!!!Dijme!",
    type: 0,
    videoId: "ccsUjRhpo_U",
    width: "83vw",
  },
  {
    title: "Let Forever Be",
    artist: "The Chemical Broters",
    history: [15],
    match: "!Y{jcju!!!Qbqbsb{{j!",
    type: 0,
    videoId: "s5FyfQDO5g0",
    width: "83vw",
  },
  {
    title: "Look At Me",
    artist: "Geri Halliwell",
    history: [12],
    match: "!Tqjdf!Hjsmt!!!Tbz!Zpv(mm!Cf!Uifsf!",
    type: 0,
    videoId: "31mlEEs9_Vk",
    width: "83vw",
  },
  {
    title: "Man! I Feel Like A Woman",
    artist: "Shania Twain",
    history: [20, 18, 14, 12, 12],
    match: "!B!Ejggfsfou!Cfbu!",
    type: 0,
    videoId: "ZJL4UGSbeFg",
    width: "83vw",
  },
  {
    title: "Maria Maria",
    artist: "Santana",
    history: [8],
    match: "!Cbssfm!Pg!B!Hvo!",
    priority: 2,
    type: 0,
    videoId: "nPLV7lGbmT4"
  },
  {
    title: "Mi Chico Latino",
    artist: "Geri Halliwell",
    history: [15, 12, 8, 4, 3],
    match: "!Epo(u!Mfu!Hp!)Mpwf*!",
    startSeconds: 1,
    type: 0,
    videoId: "4KGTR0NPNF0",
    width: "100vw",
  },
  {
    title: "New",
    artist: "No Doubt",
    history: [12, 9, 7, 6, 6],
    match: "!Dpme!Spdl!B!Qbsuz!",
    startSeconds: 2,
    type: 0,
    videoId: "LTfD2E0hf4k",
    width: "83vw",
  },
  {
    title: "No Quiero Verte",
    artist: "Lynda",
    history: [19, 17, 13, 11, 11, 15],
    match: "!Toppq!Ephhz!Ephh!gfbu/!Dibsmjf!Xjmtpo!!!Toppq(t!Vqtjef!Zb!Ifbe!",
    startSeconds: 2,
    type: 0,
    videoId: "vJKc2xWD6gE", // "ms14D_Cz7FU",
    width: "83vw",
  },
  {
    title: "Puente",
    artist: "Gustavo Cerati",
    history: [1, 1, 1, 4, 5, 10, 13],
    match: "!Spcfsu!Njmft!!!Pof!Boe!Pof!",
    type: 0,
    videoId: "eAO7CEcCD3s",
    width: "83vw",
  },
  {
    title: "Si Me Adverti",
    artist: "Zurdok",
    history: [17, 15, 13, 10, 9, 9, 9],
    match: "!Kbnjsprvbj!!!Dptnjd!Hjsm!",
    startSeconds: 1,
    type: 0,
    videoId: "gZJOe6lEHJE",
    width: "83vw",
  },
  {
    title: "Someday",
    artist: "Sugar Ray",
    history: [2, 2, 2, 6, 6, 7, 10],
    match: "!Upoj!Csbyupo!!!Vo.Csfbl!Nz!Ifbsu!",
    startSeconds: 1,
    type: 0,
    videoId: "NQSCKWfJlXs",
    width: "83vw",
  },
  {
    title: "Someday We'll Know",
    artist: "New Radicals",
    endSeconds: 215,
    history: [5, 3, 3, 3, 4, 5, 7],
    match: "!Tqjdf!Hjsmt!!!3!Cfdpnf!2!",
    type: 0,
    videoId: "bDmA8qQKhMY",
    width: "83vw",
  },
  {
    title: "Super Trouper",
    artist: "A-Teens",
    history: [16],
    match: "!J!Tipu!Uif!Tifsjgg!",
    priority: 3,
    type: 0,
    videoId: "5j1vhCf5XKg"
  },
  {
    title: "That's The Way It Is",
    artist: "Celine Dion",
    history: [19, 15, 13, 8, 5],
    match: "!Qpoz!",
    type: 0,
    videoId: "T6wbugWrfLU",
    width: "83vw",
  },
  {
    title: "The Kids Aren't Alright",
    artist: "The Offspring",
    history: [8, 8, 11, 14, 18],
    match: "!Xbssfo!H/!gfbu/!Bejob!Ipxbse!!!Xibu(t!Mpwf!Hpu!Up!Ep!Xjui!Ju!",
    type: 0,
    videoId: "7iNbnineUCI",
    width: "100vw",
  },
  {
    title: "Waiting For Tonight",
    artist: "Jennifer Lopez",
    history: [10, 17],
    match: "!Fbtu28!'!Hbcsjfmmf!!!Jg!Zpv!Fwfs!",
    type: 0,
    videoId: "_66jPJVS4JE",
    width: "83vw",
  },
  {
    title: "What's My Age Again?",
    artist: "Blink 182",
    history: [11, 16],
    match: "!Cpz{pof!!!Xpset!",
    type: 0,
    videoId: "K7l5ZeVVoCA",
    width: "83vw",
  },
  {
    title: "When You're Gone",
    artist: "Bryan Adams",
    history: [13, 13, 14, 17, 19, 20],
    match: "!Cmbdltusffu!gfbu/!Es/!Esf!!!Op!Ejhhjuz!",
    type: 0,
    videoId: "_W2jONIjrM0",
    width: "83vw",
  },
];

let uncharted = [
  {
    title: "Absolutely Everybody",
    artist: "Vanessa Amorosi",
    priority: 1,
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
    title: "Coffee And TV",
    artist: "Blur",
    endSeconds: 368,
    startSeconds: 7,
    priority: 1,
    type: 0,
    videoId: "GXRVX1AKAew",
    width: "100vw"
  },
  {
    title: "Coma White",
    priority: 2,
    type: 0,
    artist: "Marilyn Manson",
    videoId: "QQPJYnr48yU"
  },
  {
    title: "Crazy",
    artist: "Britney Spears",
    priority: 3,
    type: 0,
    videoId: "IPL_4ICbrfw",
  },
  {
    title: "Diselo Con Flores",
    artist: "Fey",
    priority: 2,
    type: 0,
    videoId: "r-b495ayDF4"
  },
  {
    title: "Don't Call Me Baby",
    artist: "Madison Avenue",
    priority: 1,
    type: 0,
    videoId: "M1kEjj3Ej68"
  },
  {
    title: "Ese Oscuro Objeto Del Deseo",
    artist: "Vertigogo",
    priority: 1,
    type: 0,
    videoId: "snYOuSoIOO0"
  },
  {
    title: "Guerrilla Radio",
    artist: "Rage Against The Machine",
    priority: 1,
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
    title: "Lullaby",
    artist: "Shawn Mullins",
    priority: 1,
    type: 0,
    videoId: "hG9C0VwruXE"
  },
  {
    title: "No Leaf Clover",
    artist: "Metallica",
    priority: 2,
    type: 0,
    videoId: "Sh5S3OxiE-s"
  },
  {
    title: "Ojos Así",
    artist: "Shakira",
    priority: 1,
    type: 0,
    videoId: "I0ahzYU1xpg"
  },
  {
    title: "She's Got Issues",
    artist: "The Offspring",
    priority: 2,
    type: 0,
    videoId: "SAxPLSvvbXY"
  },
  {
    title: "Sitting Down Here",
    artist: "Lene Marlin",
    priority: 1,
    type: 0,
    videoId: "ClSVzlObxSc"
  },
  {
    title: "So Young",
    artist: "The Corrs",
    priority: 1,
    type: 0,
    videoId: "TzLTf69vQos"
  },
  {
    title: "Tengo Frio",
    artist: "Ely Guerra",
    priority: 1,
    type: 0,
    videoId: "foLqysKnIIM"
  },
  {
    title: "There She Goes",
    artist: "Sixpence None The Richer",
    priority: 1,
    type: 0,
    videoId: "68MKLkNSMN4"
  },
  {
    title: "Unpretty",
    artist: "TLC",
    priority: 1,
    type: 0,
    videoId: "g2gy1Evb1Kg"
  },
  {
    title: "Ya No Te Quiero",
    artist: "Ana Torroja",
    priority: 1,
    type: 0,
    videoId: "PIiustuQOlQ"
  },
]
// Duplicate an item a certain number of times according to its priority.
// This increases the chances of an item being randomly picked up from the pool.
// For example, an item with a priority of '3' is duplicated 3 times in the pool. 
.map(item => (new Array(item.priority)).fill(item)).flat();
