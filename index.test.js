const sut = require('./index');
// sut: System Under Test

test.each`
    source | expected
    ${"Hello  world"} || ${"Hello world"}
    ${"Hello   world"} || ${"Hello world"}
    ${"Hello    world"} || ${"Hello world"}
`('sut transforms "$source" to "$expected"', ({ source, expected }) => {
    const actual = sut(source);
    expect(actual).toBe(expected);
});