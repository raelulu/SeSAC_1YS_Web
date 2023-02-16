import React from "react";
import { useDispatch } from "react-redux";
import { modalOff, loginAction } from "../store/actions";

const DarkBackGround = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const ModalContainer = styled.div`
  width: 25%;
  height: 45%;
  background: white;
  flex-direction: column;
  position: relative;
  justify-content: center;
  display: flex;
  border-radius: 20px;
  align-items: center;
  z-index: 999;

  @media screen and (max-width: 480px) {
    width: 70%;
    height: 65%;
    margin-right: 5%;
  }
`;
const CloseBtnContainer = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
`;

export default function CrewCreate() {
  const dispatch = useDispatch();
  return (
    <div>
      <DarkBackGround>
        <ModalContainer>
          <CloseBtnContainer>
            <FontAwesomeIcon
              icon={faTimes}
              size="2x"
              onClick={() => dispatch(modalOff)}
              color="#e5e5e5"
            />
            //여기서 액션을 디스패치 해준다.
          </CloseBtnContainer>
          <Title>로그인</Title>
          <Form>
            <Email
              placeholder="이메일을 입력해주세요"
              type="email"
              name="email"
              onChange={handleInputValue}
            />
            <Pwd
              placeholder="비밀번호를 입력해주세요"
              type="password"
              name="user_pwd"
              onChange={handleInputValue}
            />

            <LoginBtn type="button" onClick={handleLogin}>
              로그인
            </LoginBtn>
          </Form>
          <Warning>{errMsg}</Warning>
        </ModalContainer>
      </DarkBackGround>
    </div>
  );
}
