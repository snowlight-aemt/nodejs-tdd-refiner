const faker = require('faker');
const sut = require('./index');
// sut: System Under Test

test.each`
    source | expected
    ${"Hello  world"} | ${"Hello world"}
    ${"Hello   world"} | ${"Hello world"}
    ${"Hello    world"} | ${"Hello world"}
    ${"Hello     world"} | ${"Hello world"}
    ${"Hello      world"} | ${"Hello world"}
    ${"Hello       world"} | ${"Hello world"}
`('sut transforms "$source" to "$expected"', ({ source, expected }) => {
    const actual = sut(source);
    expect(actual).toBe(expected);
});

test.each`
    source | expected
    ${"Hello\t world"} | ${"Hello world"}
    ${"Hello \tworld"} | ${"Hello world"}
`('sut transforms $source" that contains tab character to "$expected"', ({ source, expected}) => {
    const actual = sut(source);
    expect(actual).toBe(expected);
});


test.each`
    source | bannedWords | expected
    ${"Hello mockist"} | ${["mockist", "purist"]} | ${"Hello *******"}
    ${"Hello purist"} | ${["mockist", "purist"]} | ${"Hello ******"}
`('sut transforms $source" to "$expected"', ({ source, bannedWords, expected}) => {
    const actual = sut(source, { bannedWords });
    expect(actual).toBe(expected);
});

describe('give banned word', () => {
    const bannedWord = faker.lorem.word();
    const source = "Hello " + bannedWord;
    const expected = "Hello " + "*".repeat(bannedWord.length);
    const options = { bannedWords: [bannedWord] };

    test(`${bannedWord} when invoke sut then it returns ${expected}`, () => {
        const actaul = sut(source, options);
        expect(actaul).toBe(expected);
    })
})