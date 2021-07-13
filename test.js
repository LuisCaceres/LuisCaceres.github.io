const expect = chai.expect;

// associate()
{
  const items = [
    ['Artist 1', 'Title 1'],
    ['Artist 3', 'Title 3'],
  ];
  
  const charted = [
    { artist: 'Artist 1', title: 'Title 1', match: 'Title 1' },
    { artist: 'Artist 2', title: 'Title 2', match: 'Title 2' },
  ];
  
  const uncharted = [
    { artist: 'Artist 3', title: 'Title 3' },
  ];
  
  const value = associate(items, charted, uncharted);
  
  expect(value.chart.length).to.equal(2);
  expect(value.chart[0]).to.equal(charted[0]);   // Artist 1
  expect(value.chart[1]).to.equal(uncharted[0]); // Artist 3
  expect(value.chart[1].hasOwnProperty('match')).to.equal(true);
  
  expect(value.charted.length).to.equal(3);
  expect(value.uncharted.length).to.equal(0);
}


// generatePlaylist()
//
{
  const chart = [
    {artist: 'Artist 20', title: 'Title 20' },
    {artist: 'Artist 19', title: 'Title 19' },
    {artist: 'Artist 18', title: 'Title 18' },
    {artist: 'Artist 17', title: 'Title 17' },
    {artist: 'Artist 16', title: 'Title 16' },
    {artist: 'Artist 15', title: 'Title 15' },
    {artist: 'Artist 14', title: 'Title 14' },
    {artist: 'Artist 13', title: 'Title 13' },
    {artist: 'Artist 12', title: 'Title 12' },
    {artist: 'Artist 11', title: 'Title 11' },
    {artist: 'Artist 10', title: 'Title 10' },
    {artist: 'Artist 09', title: 'Title 09' },
    {artist: 'Artist 08', title: 'Title 08' },
    {artist: 'Artist 07', title: 'Title 07' },
    {artist: 'Artist 06', title: 'Title 06' },
    {artist: 'Artist 05', title: 'Title 05' },
    {artist: 'Artist 04', title: 'Title 04' },
    {artist: 'Artist 03', title: 'Title 03' },
    {artist: 'Artist 02', title: 'Title 02' },
    {artist: 'Artist 01', title: 'Title 01' },
  ];
  
  const sting = {title: 'sting'};
  const advertisement = {title: 'advertisement'};
     
  const playlist = generatePlaylist(chart, sting, advertisement);
  
  expect(playlist.length).to.equal(52);
  
  expect(playlist[0]).to.equal(sting);      
  expect(playlist[1]).to.equal(chart[0]);   // position 20
  expect(playlist[2]).to.equal(sting);
  expect(playlist[3]).to.equal(chart[1]);   // position 19
  expect(playlist[4]).to.equal(advertisement);
  expect(playlist[5]).to.equal(sting);
  expect(playlist[6]).to.equal(chart[2]);   // position 18
  expect(playlist[7]).to.equal(advertisement);
  expect(playlist[8]).to.equal(sting);
  expect(playlist[9]).to.equal(chart[3]);   // position 17
  expect(playlist[10]).to.equal(sting);
  expect(playlist[11]).to.equal(chart[4]);   // position 16
  expect(playlist[12]).to.equal(advertisement);
  expect(playlist[13]).to.equal(sting);
  expect(playlist[14]).to.equal(chart[5]);  // position 15
  expect(playlist[15]).to.equal(sting);
  expect(playlist[16]).to.equal(chart[6]);  // position 14
  expect(playlist[17]).to.equal(advertisement);
  expect(playlist[18]).to.equal(sting);
  expect(playlist[19]).to.equal(chart[7]);  // position 13
  expect(playlist[20]).to.equal(sting);
  expect(playlist[21]).to.equal(chart[8]);  // position 12
  expect(playlist[22]).to.equal(advertisement);
  expect(playlist[23]).to.equal(sting);
  expect(playlist[24]).to.equal(chart[9]);  // position 11
  expect(playlist[25]).to.equal(advertisement);
  expect(playlist[26]).to.equal(sting);
  expect(playlist[27]).to.equal(chart[10]); // position 10
  expect(playlist[28]).to.equal(sting);
  expect(playlist[29]).to.equal(chart[11]); // position 09
  expect(playlist[30]).to.equal(advertisement);
  expect(playlist[31]).to.equal(sting);
  expect(playlist[32]).to.equal(chart[12]); // position 08
  expect(playlist[33]).to.equal(advertisement);
  expect(playlist[34]).to.equal(sting);
  expect(playlist[35]).to.equal(chart[13]); // position 07
  expect(playlist[36]).to.equal(sting);
  expect(playlist[37]).to.equal(chart[14]); // position 06
  expect(playlist[38]).to.equal(advertisement);
  expect(playlist[39]).to.equal(sting);
  expect(playlist[40]).to.equal(chart[15]); // position 05
  expect(playlist[41]).to.equal(sting);
  expect(playlist[42]).to.equal(chart[16]); // position 04
  expect(playlist[43]).to.equal(advertisement);
  expect(playlist[44]).to.equal(sting);
  expect(playlist[45]).to.equal(chart[17]); // position 03
  expect(playlist[46]).to.equal(sting);
  expect(playlist[47]).to.equal(chart[18]); // position 02
  expect(playlist[48]).to.equal(advertisement);
  expect(playlist[49]).to.equal(sting);
  expect(playlist[50]).to.equal(chart[19]); // position 01
  expect(playlist[51]).to.equal(sting);
}


// encode()
// encode a string
{
  const value = encode('Hello world!');
  const expectation = 'Ifmmp!xpsme\"';
  expect(expectation).to.equal(value);
}

// parse()
{
  const HTML = `
    <table>
      <tr>
        <th></th>
        <th></th>
        <th></th>
        <th>Title</th>
        <th>Artist</th>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td>Title 1</td>
        <td>Artist 1</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td>Title 2</td>
        <td>Artist 2</td>
      </tr>
    </table>
  `;
  
  const table = (new DOMParser()).parseFromString(HTML, 'text/html');
  const value = parse(table);
  expectation = [['Artist 2', 'Title 2'], ['Artist 1', 'Title 1']];
  
  expect(value.length).to.equal(expectation.length);       // 2
  expect(value[0].length).to.equal(expectation[0].length); // 2 
  expect(value[0][0]).to.equal(expectation[0][0]);         // 'Artist 2' 
  expect(value[0][1]).to.equal(expectation[0][1]);         // 'Title 2' 
}

// random()
// return a random number
{
  const value = random(1);
  const expectation = 1;
  expect(value).to.equal(expectation);
}

// return a random number no greater than another number.
{
  const limit = 20;
  const value = random(limit);
  const expectation = value <= limit;
  expect(expectation).to.equal(true);
}
