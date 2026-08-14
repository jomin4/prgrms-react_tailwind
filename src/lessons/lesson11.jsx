export const meta = {
  id: 11,
  title: '배열 함수 filter/map + 템플릿 리터럴',
  subtitle: 'filter로 걸러내고, map으로 변환하고, 백틱으로 문자열을 조합',
  concepts: [
    'filter: 조건을 만족하는 요소만 남긴 새 배열 반환',
    'map: 각 요소를 변환한 새 배열 반환',
    '템플릿 리터럴(백틱 ``): `${변수}` 로 문자열 안에 값 삽입',
    'filter → map 을 이어서(체이닝) 쓸 수 있다',
  ],
}

export default function Lesson() {
  const numbers = [1, 2, 3, 4, 5, 6]

  // 짝수만 걸러내고(filter) → 각각 제곱(map)
  const evens = numbers.filter((n) => n % 2 === 0)
  const squared = evens.map((n) => n * n)

  return (
    <div className="space-y-2 text-sm">
      {/* 백틱 템플릿 리터럴로 결과 문자열을 만든다 */}
      <p className="text-gray-600">{`원본 배열: [${numbers.join(', ')}]`}</p>
      <p className="text-blue-600">{`짝수만(filter): [${evens.join(', ')}]`}</p>
      <p className="text-emerald-600">{`제곱(map): [${squared.join(', ')}]`}</p>
    </div>
  )
}
