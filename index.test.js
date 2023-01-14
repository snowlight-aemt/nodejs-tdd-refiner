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