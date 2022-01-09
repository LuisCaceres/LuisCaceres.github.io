// Lists are from https://ki.informatik.uni-wuerzburg.de/~topsi/mtv1997/

const lists = [
  /* chart  01 (11/01/1997) */ ['!Xijuofz!Ipvtupo!!!Tufq!Cz!Tufq!', '!Qfufs!Boesf!!!J!Gffm!Zpv!', '!Y{jcju!!!Qbqbsb{{j!', '!Kbnjsprvbj!!!Dptnjd!Hjsm!', '!Tqjdf!Hjsmt!!!Tbz!Zpv(mm!Cf!Uifsf!', '!Epoob!Mfxjt!!!J!Mpwf!Zpv!Bmxbzt!Gpsfwfs!', '!Nbepoob!!!Epo(u!Dsz!Gps!Nf!Bshfoujob!', '!Cmbdltusffu!gfbu/!Es/!Esf!!!Op!Ejhhjuz!', '!Uif!Bsujtu!Gpsnfsmz!Lopxo!Bt!Qsjodf!!!Cfudib!Cz!Hpmmz!Xpx"!', '!Cpz{pof!!!Xpset!', "!Fbtu28!'!Hbcsjfmmf!!!Jg!Zpv!Fwfs!", '!Uif!Csbjet!!!Cpifnjbo!Sibqtpez!!', '!Xbssfo!H/!gfbu/!Bejob!Ipxbse!!!Xibu(t!Mpwf!Hpu!Up!Ep!Xjui!Ju!', '!Cbdltusffu!Cpzt!!!Rvju!Qmbzjoh!Hbnft!)Xjui!Nz!Ifbsu*!', '!Gvhfft!!!Op!Xpnbo!Op!Dsz!', '!Tqjdf!Hjsmt!!!3!Cfdpnf!2!', '!Nbsl!Pxfo!!!Dijme!', '!Uif!Qspejhz!!!Csfbuif!', '!Upoj!Csbyupo!!!Vo.Csfbl!Nz!Ifbsu!', '!Spcfsu!Njmft!!!Pof!Boe!Pof!'].reverse(),
  /* chart  02 (18/01/1997) */ ['!Qfufs!Boesf!!!J!Gffm!Zpv!', '!Toppq!Ephhz!Ephh!gfbu/!Dibsmjf!Xjmtpo!!!Toppq(t!Vqtjef!Zb!Ifbe!', '!Epoob!Mfxjt!!!J!Mpwf!Zpv!Bmxbzt!Gpsfwfs!', "!Fbtu28!'!Hbcsjfmmf!!!Jg!Zpv!Fwfs!", '!Cpz{pof!!!Xpset!', '!Kbnjsprvbj!!!Dptnjd!Hjsm!', '!Uif!Bsujtu!Gpsnfsmz!Lopxo!Bt!Qsjodf!!!Cfudib!Cz!Hpmmz!Xpx"!', '!Cmbdltusffu!gfbu/!Es/!Esf!!!Op!Ejhhjuz!', '!Uif!Csbjet!!!Cpifnjbo!Sibqtpez!!', '!Xijuofz!Ipvtupo!!!Tufq!Cz!Tufq!', '!Op!Epvcu!!!Epo(u!Tqfbl!', '!Nbepoob!!!Epo(u!Dsz!Gps!Nf!Bshfoujob!', '!Xbssfo!H/!gfbu/!Bejob!Ipxbse!!!Xibu(t!Mpwf!Hpu!Up!Ep!Xjui!Ju!', '!Cbdltusffu!Cpzt!!!Rvju!Qmbzjoh!Hbnft!)Xjui!Nz!Ifbsu*!', '!Nbsl!Pxfo!!!Dijme!', '!Gvhfft!!!Op!Xpnbo!Op!Dsz!', '!Uif!Qspejhz!!!Csfbuif!', '!Tqjdf!Hjsmt!!!3!Cfdpnf!2!', '!Upoj!Csbyupo!!!Vo.Csfbl!Nz!Ifbsu!', '!Spcfsu!Njmft!!!Pof!Boe!Pof!'].reverse(),
  /* chart  03 (25/01/1997) */ ['!Cpz{pof!!!B!Ejggfsfou!Cfbu!', '!Hjovxjof!!!Qpoz!', '!Uif!Bsujtu!Gpsnfsmz!Lopxo!Bt!Qsjodf!!!Cfudib!Cz!Hpmmz!Xpx"!', '!Toppq!Ephhz!Ephh!gfbu/!Dibsmjf!Xjmtpo!!!Toppq(t!Vqtjef!Zb!Ifbe!', '!Uif!Csbjet!!!Cpifnjbo!Sibqtpez!!', '!Fo!Wphvf!!!Epo(u!Mfu!Hp!)Mpwf*!', '!Cmbdltusffu!gfbu/!Es/!Esf!!!Op!Ejhhjuz!', '!Kbnjsprvbj!!!Dptnjd!Hjsm!', '!ND!Mzuf!!!Dpme!Spdl!B!Qbsuz!', '!Xbssfo!H/!gfbu/!Bejob!Ipxbse!!!Xibu(t!Mpwf!Hpu!Up!Ep!Xjui!Ju!', '!Nbsl!Pxfo!!!Dijme!', '!Cbdltusffu!Cpzt!!!Rvju!Qmbzjoh!Hbnft!)Xjui!Nz!Ifbsu*!', '!Xijuofz!Ipvtupo!!!Tufq!Cz!Tufq!', '!Gvhfft!!!Op!Xpnbo!Op!Dsz!', '!Op!Epvcu!!!Epo(u!Tqfbl!', '!Uif!Qspejhz!!!Csfbuif!', '!Nbepoob!!!Epo(u!Dsz!Gps!Nf!Bshfoujob!', '!Tqjdf!Hjsmt!!!3!Cfdpnf!2!', '!Upoj!Csbyupo!!!Vo.Csfbl!Nz!Ifbsu!', '!Spcfsu!Njmft!!!Pof!Boe!Pof!'].reverse(),
  /* chart  04 (01/02/1997) */ ['!MM!Dppm!K!!!Bjo(u!Opcpez!', '!Fbtu!28!!!Ifz!Dijme!!', '!Cpz{pof!!!B!Ejggfsfou!Cfbu!', '!Cmbdltusffu!gfbu/!Es/!Esf!!!Op!Ejhhjuz!', '!Nbsl!Pxfo!!!Dijme!', '!Hjovxjof!!!Qpoz!', '!Xbssfo!H/!gfbu/!Bejob!Ipxbse!!!Xibu(t!Mpwf!Hpu!Up!Ep!Xjui!Ju!', '!Toppq!Ephhz!Ephh!gfbu/!Dibsmjf!Xjmtpo!!!Toppq(t!Vqtjef!Zb!Ifbe!', '!Fo!Wphvf!!!Epo(u!Mfu!Hp!)Mpwf*!', '!Cbdltusffu!Cpzt!!!Rvju!Qmbzjoh!Hbnft!)Xjui!Nz!Ifbsu*!', '!Kbnjsprvbj!!!Dptnjd!Hjsm!', '!ND!Mzuf!!!Dpme!Spdl!B!Qbsuz!', '!Gvhfft!!!Op!Xpnbo!Op!Dsz!', '!Uif!Qspejhz!!!Csfbuif!', '!Upoj!Csbyupo!!!Vo.Csfbl!Nz!Ifbsu!', '!Xijuofz!Ipvtupo!!!Tufq!Cz!Tufq!', '!Spcfsu!Njmft!!!Pof!Boe!Pof!', '!Tqjdf!Hjsmt!!!3!Cfdpnf!2!', '!Op!Epvcu!!!Epo(u!Tqfbl!', '!Nbepoob!!!Epo(u!Dsz!Gps!Nf!Bshfoujob!'].reverse(),
  /* chart  05 (08/02/1997) */ ['!MM!Dppm!K!!!Bjo(u!Opcpez!', '!Cmbdltusffu!gfbu/!Es/!Esf!!!Op!Ejhhjuz!', '!Xbssfo!H/!gfbu/!Bejob!Ipxbse!!!Xibu(t!Mpwf!Hpu!Up!Ep!Xjui!Ju!', '!Upsj!Bnpt!!!Qspgfttjpobm!Xjepx!', '!Fbtu!28!!!Ifz!Dijme!!', '!Cbdltusffu!Cpzt!!!Rvju!Qmbzjoh!Hbnft!)Xjui!Nz!Ifbsu*!', '!Cpz{pof!!!B!Ejggfsfou!Cfbu!', '!Hjovxjof!!!Qpoz!', '!Gvhfft!!!Op!Xpnbo!Op!Dsz!', '!Toppq!Ephhz!Ephh!gfbu/!Dibsmjf!Xjmtpo!!!Toppq(t!Vqtjef!Zb!Ifbe!', '!Uif!Qspejhz!!!Csfbuif!', '!Kbnjsprvbj!!!Dptnjd!Hjsm!', '!Fo!Wphvf!!!Epo(u!Mfu!Hp!)Mpwf*!', '!ND!Mzuf!!!Dpme!Spdl!B!Qbsuz!', '!Upoj!Csbyupo!!!Vo.Csfbl!Nz!Ifbsu!', '!Spcfsu!Njmft!!!Pof!Boe!Pof!', '!Tqjdf!Hjsmt!!!3!Cfdpnf!2!', '!Xijuofz!Ipvtupo!!!Tufq!Cz!Tufq!', '!Op!Epvcu!!!Epo(u!Tqfbl!', '!Nbepoob!!!Epo(u!Dsz!Gps!Nf!Bshfoujob!'].reverse(),
  /* chart  06 (15/02/1997) */ ['!Cmbdltusffu!gfbu/!Es/!Esf!!!Op!Ejhhjuz!', '!Cbdltusffu!Cpzt!!!Rvju!Qmbzjoh!Hbnft!)Xjui!Nz!Ifbsu*!', '!MM!Dppm!K!!!Bjo(u!Opcpez!', '!Gvhfft!!!Op!Xpnbo!Op!Dsz!', '!Npotubst!)C!Sfbm-!Cvtub!Siznft-!Dppmjp-!MM!Dppm!K…Nfuipe!Nbo*!!!Iju!(Fn!Ijhi!)Uif!Npotubst!Bouifn*!', '!Upsj!Bnpt!!!Qspgfttjpobm!Xjepx!', '!Uif!Qspejhz!!!Csfbuif!', '!Fbtu!28!!!Ifz!Dijme!!', '!Cpz{pof!!!B!Ejggfsfou!Cfbu!', '!Toppq!Ephhz!Ephh!gfbu/!Dibsmjf!Xjmtpo!!!Toppq(t!Vqtjef!Zb!Ifbe!', '!Spcfsu!Njmft!!!Pof!Boe!Pof!', '!Kbnjsprvbj!!!Dptnjd!Hjsm!', '!Hjovxjof!!!Qpoz!', '!Upoj!Csbyupo!!!Vo.Csfbl!Nz!Ifbsu!', '!ND!Mzuf!!!Dpme!Spdl!B!Qbsuz!', '!Tqjdf!Hjsmt!!!3!Cfdpnf!2!', '!Fo!Wphvf!!!Epo(u!Mfu!Hp!)Mpwf*!', '!Op!Epvcu!!!Epo(u!Tqfbl!', '!Xijuofz!Ipvtupo!!!Tufq!Cz!Tufq!', '!Nbepoob!!!Epo(u!Dsz!Gps!Nf!Bshfoujob!'].reverse(),
  /* chart  07 (22/02/1997) */ ['!Upsj!Bnpt!!!Qspgfttjpobm!Xjepx!', '!Fbtu!28!!!Ifz!Dijme!!', '!Uif!Qspejhz!!!Csfbuif!', '!MM!Dppm!K!!!Bjo(u!Opcpez!', '!Xbssfo!H/!!!J!Tipu!Uif!Tifsjgg!', '!Toppq!Ephhz!Ephh!gfbu/!Dibsmjf!Xjmtpo!!!Toppq(t!Vqtjef!Zb!Ifbe!', '!Npotubst!)C!Sfbm-!Cvtub!Siznft-!Dppmjp-!MM!Dppm!K…Nfuipe!Nbo*!!!Iju!(Fn!Ijhi!)Uif!Npotubst!Bouifn*!', '!Spcfsu!Njmft!!!Pof!Boe!Pof!', '!Cpz{pof!!!B!Ejggfsfou!Cfbu!', '!V3!!!Ejtdpuifrvf!', '!Upoj!Csbyupo!!!Vo.Csfbl!Nz!Ifbsu!', '!Kbnjsprvbj!!!Dptnjd!Hjsm!', '!Efqfdif!Npef!!!Cbssfm!Pg!B!Hvo!', '!Tqjdf!Hjsmt!!!3!Cfdpnf!2!', '!ND!Mzuf!!!Dpme!Spdl!B!Qbsuz!', '!Hjovxjof!!!Qpoz!', '!Op!Epvcu!!!Epo(u!Tqfbl!', '!Fo!Wphvf!!!Epo(u!Mfu!Hp!)Mpwf*!', '!Xijuofz!Ipvtupo!!!Tufq!Cz!Tufq!', '!Nbepoob!!!Epo(u!Dsz!Gps!Nf!Bshfoujob!'].reverse(),
  /* chart  08 (01/03/1997) */ ['!Upsj!Bnpt!!!Qspgfttjpobm!Xjepx!', '!S/!Lfmmz!!!J!Cfmjfwf!J!Dbo!Gmz!', '!Cpz{pof!!!B!Ejggfsfou!Cfbu!', '!MM!Dppm!K!!!Bjo(u!Opcpez!', '!Spcfsu!Njmft!!!Pof!Boe!Pof!', '!Tbti"!!!Fodpsf!vof!gpjt!', '!Xbssfo!H/!!!J!Tipu!Uif!Tifsjgg!', '!Upoj!Csbyupo!!!Vo.Csfbl!Nz!Ifbsu!', '!Bqpmmp!Gpvs!Gpsuz!!!Bjo(u!Ubmljo(!(Cpvu!Evc!', '!Kbnjsprvbj!!!Dptnjd!Hjsm!', '!Npotubst!)C!Sfbm-!Cvtub!Siznft-!Dppmjp-!MM!Dppm!K…Nfuipe!Nbo*!!!Iju!(Fn!Ijhi!)Uif!Npotubst!Bouifn*!', '!Tqjdf!Hjsmt!!!3!Cfdpnf!2!', '!Efqfdif!Npef!!!Cbssfm!Pg!B!Hvo!', '!V3!!!Ejtdpuifrvf!', '!ND!Mzuf!!!Dpme!Spdl!B!Qbsuz!', '!Hjovxjof!!!Qpoz!', '!Op!Epvcu!!!Epo(u!Tqfbl!', '!Xijuofz!Ipvtupo!!!Tufq!Cz!Tufq!', '!Fo!Wphvf!!!Epo(u!Mfu!Hp!)Mpwf*!', '!Nbepoob!!!Epo(u!Dsz!Gps!Nf!Bshfoujob!'].reverse(),
  /* chart  09 (08/03/1997) */ ['!Xijuf!Upxo!!!Bcpsu-!Sfusz-!Gbjm@!Zpvs!Xpnbo!', '!Bfsptnjui!!!Gbmmjoh!Jo!Mpwf!)Jt!Ibse!Po!Uif!Lofft*!', '!S/!Lfmmz!!!J!Cfmjfwf!J!Dbo!Gmz!', '!Kbnjsprvbj!!!Dptnjd!Hjsm!', '!Cbdltusffu!Cpzt!!!Bozxifsf!Gps!Zpv!', '!Upoj!Csbyupo!!!Vo.Csfbl!Nz!Ifbsu!', '!Tqjdf!Hjsmt!!!3!Cfdpnf!2!', '!CCF!!!Gmbti!', '!Xbssfo!H/!!!J!Tipu!Uif!Tifsjgg!', '!Tbti"!!!Fodpsf!vof!gpjt!', '!Bqpmmp!Gpvs!Gpsuz!!!Bjo(u!Ubmljo(!(Cpvu!Evc!', '!ND!Mzuf!!!Dpme!Spdl!B!Qbsuz!', '!Npotubst!)C!Sfbm-!Cvtub!Siznft-!Dppmjp-!MM!Dppm!K…Nfuipe!Nbo*!!!Iju!(Fn!Ijhi!)Uif!Npotubst!Bouifn*!', '!Xijuofz!Ipvtupo!!!Tufq!Cz!Tufq!', '!Hjovxjof!!!Qpoz!', '!Efqfdif!Npef!!!Cbssfm!Pg!B!Hvo!', '!Op!Epvcu!!!Epo(u!Tqfbl!', '!Nbepoob!!!Epo(u!Dsz!Gps!Nf!Bshfoujob!', '!V3!!!Ejtdpuifrvf!', '!Fo!Wphvf!!!Epo(u!Mfu!Hp!)Mpwf*!'].reverse(),  
  /* chart  10 (15/03/1997) */ ['!Cmvs!!!Cffumfcvn!', '!Ufybt!!!Tbz!Xibu!Zpv!Xbou!', '!Bfsptnjui!!!Gbmmjoh!Jo!Mpwf!)Jt!Ibse!Po!Uif!Lofft*!', '!Xijuf!Upxo!!!Bcpsu-!Sfusz-!Gbjm@!Zpvs!Xpnbo!', '!Sfqvcmjdb!!!Sfbez!Up!Hp!', '!S/!Lfmmz!!!J!Cfmjfwf!J!Dbo!Gmz!', '!ND!Mzuf!!!Dpme!Spdl!B!Qbsuz!', '!CCF!!!Gmbti!', '!Xbssfo!H/!!!J!Tipu!Uif!Tifsjgg!', '!Cbdltusffu!Cpzt!!!Bozxifsf!Gps!Zpv!', '!Xijuofz!Ipvtupo!!!Tufq!Cz!Tufq!', '!Hjovxjof!!!Qpoz!', '!Tbti"!!!Fodpsf!vof!gpjt!', '!Bqpmmp!Gpvs!Gpsuz!!!Bjo(u!Ubmljo(!(Cpvu!Evc!', '!Op!Epvcu!!!Epo(u!Tqfbl!', '!Efqfdif!Npef!!!Cbssfm!Pg!B!Hvo!', '!Npotubst!)C!Sfbm-!Cvtub!Siznft-!Dppmjp-!MM!Dppm!K…Nfuipe!Nbo*!!!Iju!(Fn!Ijhi!)Uif!Npotubst!Bouifn*!', '!Nbepoob!!!Epo(u!Dsz!Gps!Nf!Bshfoujob!', '!V3!!!Ejtdpuifrvf!', '!Fo!Wphvf!!!Epo(u!Mfu!Hp!)Mpwf*!'].reverse(),

  
  
  
  
  /* chart  10 (22/03/1997) */ ['!Cmvs!!!Cffumfcvn!', '!Tqjdf!Hjsmt!!!Nbnb!', '!Ufybt!!!Tbz!Xibu!Zpv!Xbou!', '!Bfsptnjui!!!Gbmmjoh!Jo!Mpwf!)Jt!Ibse!Po!Uif!Lofft*!', '!Cbdltusffu!Cpzt!!!Bozxifsf!Gps!Zpv!', '!Xijuf!Upxo!!!Bcpsu-!Sfusz-!Gbjm@!Zpvs!Xpnbo!', '!Sfqvcmjdb!!!Sfbez!Up!Hp!', '!Xijuofz!Ipvtupo!!!Tufq!Cz!Tufq!', '!Hjovxjof!!!Qpoz!', '!CCF!!!Gmbti!', '!Xbssfo!H/!!!J!Tipu!Uif!Tifsjgg!', '!S/!Lfmmz!!!J!Cfmjfwf!J!Dbo!Gmz!', '!Efqfdif!Npef!!!Cbssfm!Pg!B!Hvo!', '!Op!Epvcu!!!Epo(u!Tqfbl!', '!Nbepoob!!!Epo(u!Dsz!Gps!Nf!Bshfoujob!', '!Bqpmmp!Gpvs!Gpsuz!!!Bjo(u!Ubmljo(!(Cpvu!Evc!', '!Npotubst!)C!Sfbm-!Cvtub!Siznft-!Dppmjp-!MM!Dppm!K…Nfuipe!Nbo*!!!Iju!(Fn!Ijhi!)Uif!Npotubst!Bouifn*!', '!Tbti"!!!Fodpsf!vof!gpjt!', '!Fo!Wphvf!!!Epo(u!Mfu!Hp!)Mpwf*!', '!V3!!!Ejtdpuifrvf!'].reverse(),
  
//  /* chart  10 (22/03/1997) */ [].reverse(),  
];




lists.forEach(list => expect(list.length).to.equal(20));




const charts = [
  /* chart -4 */ new Chart('All I Have To Give', 'La Lola', 'Puente', "The Kids Aren't Alright", 'Someday', 'Heartbreaker', "Someday We'll Know", 'Waiting For Tonight', 'What\'s My Age Again?', 'Higher', "When You're Gone", "If Ya Gettin' Down", 'Atrapados En La Red', 'Look At Me', 'Jennifer Del Estero', 'Let Forever Be', '...Baby One More Time', 'All Star', 'Entry 0', 'Si Me Advertí'),
  /* chart -3 */ new Chart('All I Have To Give', 'Puente', 'La Lola', 'Someday', "The Kids Aren't Alright", "Someday We'll Know", 'Higher', 'Heartbreaker', 'Waiting For Tonight', 'What\'s My Age Again?', "When You're Gone", "If Ya Gettin' Down", 'Atrapados En La Red', 'Jennifer Del Estero', 'Look At Me', 'All Star', 'Let Forever Be', '...Baby One More Time', 'Si Me Advertí', 'Entry 0'),
  /* chart -2 */ new Chart('Puente', 'All I Have To Give', 'La Lola', 'Someday', "The Kids Aren't Alright", "Someday We'll Know", 'Higher', 'Heartbreaker', 'Waiting For Tonight', 'What\'s My Age Again?', "If Ya Gettin' Down", "When You're Gone", 'Jennifer Del Estero', 'Atrapados En La Red', 'Look At Me', 'All Star', 'Let Forever Be', '...Baby One More Time', 'Si Me Advertí', 'Entry 0'),
  /* chart -1 */ new Chart('Puente', 'All I Have To Give', 'Someday', 'La Lola', "Someday We'll Know", 'Higher', "The Kids Aren't Alright", "If Ya Gettin' Down", 'Heartbreaker', 'Waiting For Tonight', 'What\'s My Age Again?', "When You're Gone", 'Jennifer Del Estero', 'All Star', 'Atrapados En La Red', 'Look At Me', 'Si Me Advertí', 'Let Forever Be', '...Baby One More Time', 'Angels'),
  /* chart  1 */ new Chart('Puente', 'Someday', 'All I Have To Give', 'La Lola', "Someday We'll Know", 'Higher', "If Ya Gettin' Down", "The Kids Aren't Alright", 'Heartbreaker', 'Waiting For Tonight', "What's My Age Again?", 'Jennifer Del Estero', "When You're Gone", 'All Star', 'Atrapados En La Red', 'Look At Me', 'Si Me Advertí', 'Let Forever Be', '...Baby One More Time', 'Angels'),
  /* chart  2 */ new Chart('Puente', 'Someday', "Someday We'll Know", 'All I Have To Give', 'Higher', 'La Lola', "If Ya Gettin' Down", "The Kids Aren't Alright", 'All Star', 'I Need To Know', 'Angels', 'Heartbreaker', "When You're Gone", 'Jennifer Del Estero', 'Si Me Advertí', "What's My Age Again?", 'Waiting For Tonight', 'Atrapados En La Red', 'No Quiero Verte', '...Baby One More Time'),
  /* chart  3 */ new Chart('Someday', 'Puente', "Someday We'll Know", 'All Star', 'All I Have To Give', 'I Need To Know', 'Higher', 'Angels', "If Ya Gettin' Down", 'La Lola', "The Kids Aren't Alright", 'New', 'Si Me Advertí', "When You're Gone", 'Mi Chico Latino', 'Heartbreaker', 'No Quiero Verte', 'Jennifer Del Estero', 'That\'s The Way It Is', 'Man! I Feel Like A Woman'),
  /* chart  4 */ new Chart('All Star', "Someday We'll Know", 'I Need To Know', 'Puente', 'Angels', 'Someday', 'All I Have To Give', 'Higher', 'New', 'Si Me Advertí', "If Ya Gettin' Down", 'Mi Chico Latino', 'No Quiero Verte', "The Kids Aren't Alright", "That's The Way It Is", 'La Lola', "When You're Gone", 'Man! I Feel Like A Woman', 'Don\'t Say You Love Me', 'Fast As You Can'),
  /* chart  5 */ new Chart('All Star', 'I Need To Know', 'Angels', "Someday We'll Know", 'Puente', 'Someday', 'New', 'Mi Chico Latino', 'Si Me Advertí', 'All I Have To Give', 'No Quiero Verte', 'Higher', "That's The Way It Is", 'Man! I Feel Like A Woman', "If Ya Gettin' Down", "Don't Say You Love Me", 'Blue Monday', "The Kids Aren't Alright", "When You're Gone", 'Fast As You Can'),
  /* chart  6 */ new Chart('All Star', 'Angels', 'I Need To Know', 'Mi Chico Latino', "Someday We'll Know", 'New', 'Someday', "That's The Way It Is", 'Si Me Advertí', 'Puente', 'No Quiero Verte', 'Man! I Feel Like A Woman', "Don't Say You Love Me", 'All I Have To Give', 'Blue Monday', 'All Or Nothing', 'Higher', 'Fast As You Can', "If Ya Gettin' Down", "When You're Gone"),
  /* chart  7 */ new Chart('All Star', 'Angels', 'Mi Chico Latino', 'I Need To Know', "That's The Way It Is", 'New', "Someday We'll Know", 'Si Me Advertí', 'Maria Maria', 'Someday', 'Fly Away', 'Man! I Feel Like A Woman', 'Puente', 'All Or Nothing', 'No Quiero Verte', 'Super Trouper', 'Fast As You Can', 'All I Have To Give', "Don't Say You Love Me", 'Blue Monday'),
  /* chart  8 */ new Chart('All Star', 'Mi Chico Latino', 'Angels', 'I Need To Know', 'New', "That's The Way It Is", 'Fly Away', 'Maria Maria', "Someday We'll Know", 'All Or Nothing', 'Si Me Advertí', 'Tengo Frío', 'Someday', 'Super Trouper', 'Coffee And T.V.', 'Puente', 'Fast As You Can', 'Man! I Feel Like A Woman', 'Díselo Con Flores', 'Blue Monday'),
  /* chart  9 */ new Chart('Mi Chico Latino', 'Fly Away', 'All Star', 'I Need To Know', 'Maria Maria', "That's The Way It Is", 'Angels', 'All Or Nothing', 'New', 'Tengo Frío', 'Coffee And T.V.', 'Super Trouper', 'I Don\'t Want To Miss A Thing', "Someday We'll Know", 'Someday', 'Crazy', 'Si Me Advertí', 'Díselo Con Flores', 'Keep On Movin\'', 'Unpretty'),
  /* chart 10 */ new Chart('Mi Chico Latino', 'Fly Away', 'All Star', 'All Or Nothing', 'Maria Maria', 'I Need To Know', 'Tengo Frío', 'Coffee And T.V.', "That's The Way It Is", 'Angels', 'Crazy', 'Super Trouper', "I Don't Want To Miss A Thing", 'New', 'Díselo Con Flores', 'Sitting Down Here', 'Unpretty', "Keep On Movin'", 'Absolutely Everybody', 'Pretty Fly'),
];

charts.forEach(chart => expect(chart.length).to.equal(20));




const usedItems = [
  {
    title: "All I Have To Give",
    artist: "Backstreet Boys",
    match: "!Uif!Qspejhz!!!Csfbuif!",
    startSeconds: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "pj6FCKm8dhM",
    volume: 100,
  },
  {
    title: "All Or Nothing",
    artist: "Cher",
    endSeconds: 242,
    match: "!Npotubst!)C!Sfbm-!Cvtub!Siznft-!Dppmjp-!MM!Dppm!K…Nfuipe!Nbo*!!!Iju!(Fn!Ijhi!)Uif!Npotubst!Bouifn*!",
    priority: 1,
    startSeconds: 6,
    style: {left: "-5vw", position: "relative", width: "110vw"},
    type: 0,
    videoId: "BW4LUe2e5oU",
    volume: 100,
  },  
  {
    title: "All Star",
    artist: "Smash Mouth",
    match: "!Nbepoob!!!Epo(u!Dsz!Gps!Nf!Bshfoujob!",
    style: {width: "100vw"},
    type: 0,
    videoId: "L_jWHffIx5E",
    volume: 100,
  },
  {
    title: "Angels",
    artist: "Robbie Williams",
    endSeconds: 235,
    match: "!Xijuofz!Ipvtupo!!!Tufq!Cz!Tufq!",
    startSeconds: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "luwAMFcc2f8",
    volume: 100,
  },
  {
    title: "Atrapados En La Red",
    artist: "Tam Tam Go!",
    match: "!Epoob!Mfxjt!!!J!Mpwf!Zpv!Bmxbzt!Gpsfwfs!",
    style: {width: "83vw"},
    type: 0,
    videoId: "u8uup17RrUU",
    volume: 100,
  },
  {
    title: "...Baby One More Time",
    artist: "Britney Spears",
    match: "!Qfufs!Boesf!!!J!Gffm!Zpv!",
    style: {width: "83vw"},
    type: 0,
    videoId: "fHPnGqXXUmI",
    volume: 100,
  },
  {
    title: "Blue Monday",
    artist: "Orgy",
    match: "!Upsj!Bnpt!!!Qspgfttjpobm!Xjepx!",
    priority: 1,
    startSeconds: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "aJZTfl3DmCU",
    volume: 100,
  },
  {
    title: "Coffee And T.V.",
    artist: "Blur",
    endSeconds: 368,
    match: "!Tbti\"!!!Fodpsf!vof!gpjt!",
    priority: 1,
    startSeconds: 7,
    style: {width: "100vw"},
    type: 0,
    videoId: "GXRVX1AKAew",
    volume: 100,
  },
  {
    title: "Crazy",
    artist: "Britney Spears",
    endSeconds: 197,
    match: "!Cbdltusffu!Cpzt!!!Bozxifsf!Gps!Zpv!",
    priority: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "IPL_4ICbrfw",
    volume: 100,
  },
  {
    title: "Díselo Con Flores",
    artist: "Fey",
    match: "!S/!Lfmmz!!!J!Cfmjfwf!J!Dbo!Gmz!",
    priority: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "r-b495ayDF4",
    volume: 100,
  },  
  {
    title: "Don't Say You Love Me",
    artist: "M2M",
    match: "!Fbtu!28!!!Ifz!Dijme!!",
    priority: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "ZCFlT_FYnEE",
    volume: 100,
  },
  {
    title: "Fast As You Can",
    artist: "Fiona Apple",
    match: "!MM!Dppm!K!!!Bjo(u!Opcpez!",
    priority: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "NbxqtbqyoRk",
    volume: 100,
  },
  {
    title: "Fly Away",
    artist: "Lenny Kravitz",
    left: "-5vw",
    match: "!V3!!!Ejtdpuifrvf!",
    priority: 1,
    style: {left: "-5vw", position: "relative", width: "110vw"},
    type: 0,
    videoId: "EvuL5jyCHOw",
    volume: 100,
  },  
  {
    title: "Heartbreaker",
    artist: "Mariah Carey",
    match: "!Uif!Csbjet!!!Cpifnjbo!Sibqtpez!!",
    style: {width: "83vw"},
    type: 0,
    videoId: "FUzcLVyFLNo",
    volume: 100,
  },
  {
    title: "Higher",
    artist: "Creed",
    match: "!Gvhfft!!!Op!Xpnbo!Op!Dsz!",
    style: {width: "83vw"},
    type: 0,
    videoId: "J16lInLZRms",
    volume: 100,
  },
  {
    title: "I Don't Want To Miss A Thing",
    artist: "Aerosmith",
    match: "!CCF!!!Gmbti!",
    priority: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "JkK8g6FMEXE",
    volume: 100,
  },
  {
    title: "I Need To Know",
    artist: "Marc Anthony",
    match: "!Op!Epvcu!!!Epo(u!Tqfbl!",
    priority: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "fLVzw9wVd9o",
    volume: 100,
  },
  {
    title: "If Ya Gettin' Down",
    artist: "Five",
    match: "!Cbdltusffu!Cpzt!!!Rvju!Qmbzjoh!Hbnft!)Xjui!Nz!Ifbsu*!",
    style: {width: "83vw"},
    type: 0,
    videoId: "TU-5FmsXOOA",
    volume: 100,
  },
  {
    title: "Jennifer Del Estero",
    artist: "Illya Kuryaki",
    match: "!Uif!Bsujtu!Gpsnfsmz!Lopxo!Bt!Qsjodf!!!Cfudib!Cz!Hpmmz!Xpx\"!",
    style: {width: "83vw"},
    type: 0,
    videoId: "KLRlJ0uJ-yI",
    volume: 100,
  },
  {
    title: "Keep On Movin'",
    artist: "Five",
    match: "!Bfsptnjui!!!Gbmmjoh!Jo!Mpwf!)Jt!Ibse!Po!Uif!Lofft*!",
    priority: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "3OJMjlzVLZE",
    volume: 100,
  },
  {
    title: "La Lola",
    artist: "Cafe Quijano",
    match: "!Nbsl!Pxfo!!!Dijme!",
    style: {width: "83vw"},
    type: 0,
    videoId: "ccsUjRhpo_U",
    volume: 100,
  },
  {
    title: "Let Forever Be",
    artist: "The Chemical Brothers",
    match: '!Y{jcju!!!Qbqbsb{{j!',
    style: {width: "83vw"},
    type: 0,
    videoId: "s5FyfQDO5g0",
    volume: 100,
  },
  {
    title: "Look At Me",
    artist: "Geri Halliwell",
    match: "!Tqjdf!Hjsmt!!!Tbz!Zpv(mm!Cf!Uifsf!",
    style: {width: "83vw"},
    type: 0,
    videoId: "31mlEEs9_Vk",
    volume: 100,
  },
  {
    title: "Man! I Feel Like A Woman",
    artist: "Shania Twain",
    match: "!Cpz{pof!!!B!Ejggfsfou!Cfbu!",
    priority: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "ZJL4UGSbeFg",
    volume: 100,
  },
  {
    title: "Maria Maria",
    artist: "Santana",
    match: "!Efqfdif!Npef!!!Cbssfm!Pg!B!Hvo!",
    priority: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "nPLV7lGbmT4",
    volume: 100,
  },
  {
    title: "Mi Chico Latino",
    artist: "Geri Halliwell",
    left: "-5vw",
    match: "!Fo!Wphvf!!!Epo(u!Mfu!Hp!)Mpwf*!",
    priority: 1,
    startSeconds: 1,
    style: {left: "-5vw", position: "relative", width: "110vw"},
    type: 0,
    videoId: "4KGTR0NPNF0",
    volume: 100,
  },
  {
    title: "New",
    artist: "No Doubt",
    match: "!ND!Mzuf!!!Dpme!Spdl!B!Qbsuz!",
    priority: 1,
    startSeconds: 2,
    style: {width: "83vw"},
    type: 0,
    videoId: "LTfD2E0hf4k",
    volume: 100,
  },
  {
    title: "No Quiero Verte",
    artist: "Lynda",
    left: "-5vw",
    match: "!Toppq!Ephhz!Ephh!gfbu/!Dibsmjf!Xjmtpo!!!Toppq(t!Vqtjef!Zb!Ifbe!",
    priority: 1,
    startSeconds: 1,
    style: {left: "-5vw", position: "relative", width: "110vw"},
    type: 0,
    videoId: "_o0vOmL-PYY",
    volume: 100,
  },
  {
    title: "Puente",
    artist: "Gustavo Cerati",
    match: "!Spcfsu!Njmft!!!Pof!Boe!Pof!",
    style: {width: "83vw"},
    type: 0,
    videoId: "eAO7CEcCD3s",
    volume: 100,
  },
  {
    title: "Si Me Advertí",
    artist: "Zurdok",
    match: "!Kbnjsprvbj!!!Dptnjd!Hjsm!",
    startSeconds: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "gZJOe6lEHJE",
    volume: 100,
  },
  {
    title: "Someday",
    artist: "Sugar Ray",
    match: "!Upoj!Csbyupo!!!Vo.Csfbl!Nz!Ifbsu!",
    startSeconds: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "NQSCKWfJlXs",
    volume: 100,
  },
  {
    title: "Someday We'll Know",
    artist: "New Radicals",
    endSeconds: 215,
    match: "!Tqjdf!Hjsmt!!!3!Cfdpnf!2!",
    style: {width: "83vw"},
    type: 0,
    videoId: "bDmA8qQKhMY",
    volume: 100,
  },
  {
    title: "Super Trouper",
    artist: "A-Teens",
    match: "!Xbssfo!H/!!!J!Tipu!Uif!Tifsjgg!",
    priority: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "5j1vhCf5XKg",
    volume: 100,
  },
  {
    title: "Tengo Frío",
    artist: "Ely Guerra",
    match: "!Bqpmmp!Gpvs!Gpsuz!!!Bjo(u!Ubmljo(!(Cpvu!Evc!",
    priority: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "foLqysKnIIM",
    volume: 100,
  },  
  {
    title: "That's The Way It Is",
    artist: "Celine Dion",
    match: "!Hjovxjof!!!Qpoz!",
    priority: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "T6wbugWrfLU",
    volume: 100,
  },
  {
    title: "The Kids Aren't Alright",
    artist: "The Offspring",
    match: "!Xbssfo!H/!gfbu/!Bejob!Ipxbse!!!Xibu(t!Mpwf!Hpu!Up!Ep!Xjui!Ju!",
    style: {left: "-5vw", position: "relative", width: "110vw"},
    type: 0,
    videoId: "7iNbnineUCI",
    volume: 100,
  },
  {
    title: "Unpretty",
    artist: "TLC",
    match: "!Xijuf!Upxo!!!Bcpsu-!Sfusz-!Gbjm@!Zpvs!Xpnbo!",
    priority: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "g2gy1Evb1Kg",
    volume: 100,
  },
  {
    title: "Waiting For Tonight",
    artist: "Jennifer Lopez",
    match: "!Fbtu28!'!Hbcsjfmmf!!!Jg!Zpv!Fwfs!",
    style: {width: "83vw"},
    type: 0,
    videoId: "_66jPJVS4JE",
    volume: 100,
  },
  {
    title: "What's My Age Again?",
    artist: "Blink 182",
    match: "!Cpz{pof!!!Xpset!",
    style: {width: "83vw"},
    type: 0,
    videoId: "K7l5ZeVVoCA",
    volume: 100,
  },
  {
    title: "When You're Gone",
    artist: "Bryan Adams",
    match: "!Cmbdltusffu!gfbu/!Es/!Esf!!!Op!Ejhhjuz!",
    style: {width: "83vw"},
    type: 0,
    videoId: "_W2jONIjrM0",
    volume: 100,
  },
];

usedItems.forEach(item => {
  const keys = Object.keys(item);
  expect(keys.includes('title')).to.equal(true);
  expect(keys.includes('artist')).to.equal(true);
  expect(keys.includes('match')).to.equal(true);
  expect(keys.includes('style')).to.equal(true);
  expect(keys.includes('type')).to.equal(true);
  expect(keys.includes('videoId')).to.equal(true);
  expect(keys.includes('volume')).to.equal(true);
});




const advertisement = {
  endSeconds: 91,
  name: "ADVERTISEMENT",
  startSeconds: 77, 
  style: {width: "83vw"},
  videoId: 'caaddLZhLoY',
  volume: 50,
};

const intro = {
  name: "INTRO",
  style: {width: "83vw"},
  videoId: 'YoqgOOQwEqI',
  volume: 50,
};

const newVideo = {
  endSeconds: 20,
  name: "STING NEW VIDEO",
  startSeconds: 11,
  style: {width: "83vw"},
  videoId: 'caaddLZhLoY',
  volume: 50,
};

const sting = {
  name: "STING",
  startSeconds: 16,
  style: {width: "83vw"},
  videoId: 'YoqgOOQwEqI',
  volume: 50,
};




const unusedItems = new List(
  {
    title: "Absolutely Everybody",
    artist: "Vanessa Amorosi",
    priority: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "Rco1QQShM1Y",
    volume: 100,
  },
  /*{
    title: "Born To Make You Happy",
    artist: "Britney Spears",
    priority: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "Yy5cKX4jBkQ",
    volume: 100,
  },*/
  {
    title: "Burning Down The House",
    artist: "Tom Jones",
    priority: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "iYuldgIOelY",
    volume: 100,
  },
  /*{
    title: "Canela",
    artist: "Fey",
    priority: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "_sgwHcuVCYg",
    volume: 100,
  },*/
  {
    title: "Coma White",
    artist: "Marilyn Manson",
    priority: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "QQPJYnr48yU",
    volume: 100,
  },
  {
    title: "Don't Call Me Baby",
    artist: "Madison Avenue",
    priority: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "M1kEjj3Ej68",
    volume: 100,
  },
  {
    title: "Ese Oscuro Objeto Del Deseo",
    artist: "Vertigogo",
    priority: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "snYOuSoIOO0",
    volume: 100,
  },
  /* 
  {
    title: "From The Bottom Of My Broken Heart",
    artist: "Britney Spears",
    priority: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "fHPnGqXXUmI",
    volume: 100,
  },
  */
  {
    title: "Guerrilla Radio",
    artist: "Rage Against The Machine",
    priority: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "Rm1nCYOZB-s",
    volume: 100,
  },
  {
    title: "Lullaby",
    artist: "Shawn Mullins",
    priority: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "hG9C0VwruXE",
    volume: 100,
  },
  /*
  {
    title: "Millenium",
    artist: "Robbie Williams",
    priority: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "xcWOviMI6Lk",
    volume: 100,
  },
  */
  {
    title: "My Favourite Game",
    artist: "The Cardigans",
    priority: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "u9WgtlgGAgs",
    volume: 100,
  },
  {
    title: "No Leaf Clover",
    artist: "Metallica",
    priority: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "Sh5S3OxiE-s",
    volume: 100,
  },
  {
    title: "Ojos Así",
    artist: "Shakira",
    priority: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "I0ahzYU1xpg",
    volume: 100,
  },
  {
    title: "Pretty Fly",
    artist: "The Offspring",
    priority: 5,
    style: {width: "83vw"},
    type: 0,
    videoId: "QtTR-_Klcq8",
    volume: 100,
  },
  /*
  {
    title: "She's Got Issues",
    artist: "The Offspring",
    priority: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "SAxPLSvvbXY",
    volume: 100,
  },
  */
  {
    title: "Sitting Down Here",
    artist: "Lene Marlin",
    priority: 1,
    style: {left: "3vw", position: "relative", width: "83vw"},
    type: 0,
    videoId: "ClSVzlObxSc",
    volume: 100,
  },
  {
    title: "So Young",
    artist: "The Corrs",
    priority: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "TzLTf69vQos",
    volume: 100,
  },
  {
    title: "Thank You",
    artist: "Alanis Morissette",
    priority: 3,
    style: {width: "83vw"},
    type: 0,
    videoId: "OOgpT5rEKIU",
    volume: 100,
  },
  {
    title: "There She Goes",
    artist: "Sixpence None The Richer",
    priority: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "68MKLkNSMN4",
    volume: 100,
  },
  {
    title: "Ya No Te Quiero",
    artist: "Ana Torroja",
    priority: 1,
    style: {width: "83vw"},
    type: 0,
    videoId: "PIiustuQOlQ",
    volume: 100,
  },
)
// Duplicate an item a certain number of times according to its priority.
// This increases the chances of an item being randomly picked up from the pool.
// For example, an item with a priority of '3' is duplicated 3 times in the pool. 
.map(item => (new Array(item.priority)).fill(item)).flat();

// Validate each item in uncharted.
unusedItems.forEach(item => {
  const keys = Object.keys(item);
  expect(keys.includes('title')).to.equal(true);
  expect(keys.includes('artist')).to.equal(true);
  expect(keys.includes('priority')).to.equal(true);
  expect(keys.includes('style')).to.equal(true);
  expect(keys.includes('type')).to.equal(true);
  expect(keys.includes('videoId')).to.equal(true);
  expect(keys.includes('volume')).to.equal(true);
});
