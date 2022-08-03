import React, { useEffect, useState } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  // componentDidMount와 componentDidUpdate를 합친 형태
  useEffect(() => {
    console.log('렌더링 완료! (마운트 때만 실행됨)');
    console.log(name);
    // console.log({
    //   name,
    //   nickname,
    // });
    // 뒷정리 함수 반환 (언마운트직전+업데이트직전, 언마운트 시에만 호출하고 싶다면 동일하게 두 번째 파라미터에 빈 배열)
    return () => {
      console.log('cleanup');
      console.log(name);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);
  // 최초 렌더링 시에만 실행하기 위해 두 번째 파라미터로 빈 배열을 넣어줌
  // 배열 안에 검사하고 싶은 값을 넣어 특정 값이 업데이트될 때만 실행할 수도 있음

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름 : </b> {name}
        </div>
        <div>
          <b>닉네임 : </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
