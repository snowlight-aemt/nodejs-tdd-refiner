const sut = require('./index');
// sut: System Under Test

test('stu correctly works' , () => {
    for (const source of ['hello  world', 'hello   world', 'hello    world']) {
        const actual = sut(source);
        expect(actual).toBe("hello world");
    }
});

// TODO
// * 중복을 제거했지만, 어느 소스에서 발생한 에러인지 확인 힘들다
// * 중간에 테스트가 실패하면 마지막까지 테스트를 확인하지 않는다.

// 결론 : 테스트 피드백이 줄어 들었다. 중복을 제거한다고 무조건 좋은것은 아니다.