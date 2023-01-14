const sut = require('./index');
// sut: System Under Test

test('sut transforms "hello  world" to "hello world"', () => {
    const actual = sut("hello  world");
    expect(actual).toBe("hello world");
});

test('sut transforms "hello   world" to "hello world"', () => {
    const actual = sut("hello   world");
    expect(actual).toBe("hello world");
});

test('sut transforms "hello    world" to "hello world"', () => {
    const actual = sut("hello    world");
    expect(actual).toBe("hello world");
});