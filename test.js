const expect = chai.expect;

// encode()
{
  const expectation = 'Ifmmp!xpsme\"'
  const value = encode('Hello world!');
  expect(value).to.equal(expectation);
}

// random()
{
  const value = random(0);
  const expectation = 0;
  expect(value).to.equal(expectation);
  expect(value).to.equal(10);
}
