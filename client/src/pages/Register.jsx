import { useDispatch } from "react-redux";
import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { register } from "../redux/apiCalls";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";


const Container = styled.div` 
  width: 100vw;
  height: 90%;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://w.wallha.com/ws/11/naS1ZQ7z.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
border-radius: 8px;
  width: 32%;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5 );
  color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`;

const Input = styled.input`
  border: 0;
  outline: 0; 
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  border: 2px solid white;
  width: 30%;
  padding: 10px 15px;
  background-color: transparent;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;


const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    register(dispatch, { username, email, password });
  };

  return (
    <div style={{height:"100vh"}}>
    <Navbar/>
    <Announcement/>
    <Container>
      <Wrapper>
        <Title>REGISTER  ACCOUNT</Title>
        <Form>
          <Input placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
          <Input placeholder="E-Mail" onChange={(e) => setEmail(e.target.value)}/>
          <Input placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleClick} >CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
    </div>
  );
};

export default Register;
