import React, { useRef, useState } from 'react';

// 문제점 - 인풋 내용이 수정될 때도 getAverage가 호출됨
const getAverage = (numbers) => {
  console.log('평균값 계산 중...');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

// useRef - ref안의 값이 바뀌어도 컴포넌트가 리렌더링되지 않으므로 로컬 변수로 사용할 수 있다.

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  const inputEl = useRef(null); // useRef를 통해 만든 객체안의 current값이 실제 엘리멘트를 참조함

  const onChange = (e) => {
    setNumber(e.target.value);
  };
  const onInsert = () => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
    inputEl.current.focus(); // 이렇게 사용
  };

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>
      <div>
        <b>평균값 :</b> {getAverage(list)}
      </div>
    </div>
  );
};

export default Average;
