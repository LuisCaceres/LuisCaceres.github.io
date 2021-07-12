const expect = chai.expect;

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
