import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { join } from '../store/modules/register';

const Div = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -200px 0 0 -150px;
  width: 300px;
  height: 400px;
  background-color: #faf9f9;
  border: 0.5px solid black;
  text-align: center;
`;
const Logo = styled.p`
  width: 137px;
  height: 65px;
  margin: 70px auto -10px;

  font-family: 'Port Lligat Slab';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 64px;
  cursor: pointer;
`;
const ID = styled.input`
  width: 62%;
  height: 3%;
  padding: 10px;
  border: 1px solid #d8d8d8;
  ::placeholder {
    font-size: 3px;
  }
`;
const PW = styled.input`
  width: 62%;
  height: 3%;
  padding: 10px;
  border: 1px solid #d8d8d8;
  margin: 5px;
  ::placeholder {
    font-size: 3px;
  }
`;
const City = styled.input`
  width: 62%;
  height: 3%;
  padding: 10px;
  border: 1px solid #d8d8d8;
  ::placeholder {
    font-size: 3px;
  }
`;
const Joinbtn = styled.button`
  width: 69%;
  height: 8%;
  margin: 50px;
  border: 1px solid #d8d8d8;
  cursor: pointer;
  font-family: 'Port Lligat Slab';
  background-color: black;
  color: white;
`;
export default function JoinBox() {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const [city, setCity] = useState('');
  const registerId = (e) => {
    console.log(e.target.value);
    setId(e.target.value);
  };
  const registerPwd = (e) => {
    setPwd(e.target.value);
  };
  const registerCity = (e) => {
    setCity(e.target.value);
  };

  return (
    <>
      <Div>
        <Logo onClick={() => window.open('/', '_self')}>WeTo</Logo>
        <ID placeholder="ID" value={id} onChange={registerId} ref={inputRef} />
        <br />
        <PW
          placeholder="Password"
          value={pwd}
          onChange={registerPwd}
          ref={inputRef}
        />
        <br />
        <City
          placeholder="City"
          value={city}
          onChange={registerCity}
          ref={inputRef}
        />
        <br />
        <Joinbtn
          type="submit"
          onClick={() => dispatch(join({ register: inputRef.current.value }))}
        >
          Create an Account
        </Joinbtn>
      </Div>
    </>
  );
}
