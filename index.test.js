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
    source | bennedWords | expected
    ${"Hello mockist"} | ${["mockist", "purist"]} | ${"Hello *******"}
    ${"Hello purist"} | ${["mockist", "purist"]} | ${"Hello ******"}
`('sut transforms $source" to "$expected"', ({ source, bannedWords, expected}) => {
    const actual = sut(source, { bannedWords });
    expect(actual).toBe(expected);
});