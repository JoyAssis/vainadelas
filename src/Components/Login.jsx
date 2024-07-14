import { styled, createGlobalStyle } from 'styled-components';
import Background from '../assets/Fundo.png';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  color:white;
}
body{
  background-image:url(${Background});
  background-repeat:no-repeat;
  background-color:#000000;
  background-size:100%;
}
`;

const SectionLogin = styled.section`
display:flex;
align-items:center;
justify-content:center;
height:112vh;
`;

const FormLogin = styled.form`
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:center;
h2{
  font-size:41px;
  margin-bottom:4vh;
  font-family:"Signika", sans-serif;
}
`;

const InputsLogin = styled.input`
width:100%;
height:48px;
background-color:#424530;
border:none;
border-radius:10px;
padding-left:13px;
font-size:17px;
font-family:"PT Sans", sans-serif;
&:focus{
  border:none;
  outline:none;
}

&::placeholder{
 color:#ffffff;
}
margin-top:3vh;
`;

const ForgotPasswordBox = styled.div`
display:flex;
align-items:flex-end;
justify-content:center;
flex-direction:column;
width:100%;
height:7vh;
padding-top:3.6vh;
p{
  font-size:16px;
  cursor:pointer;
  &:hover{
    transform:scale(105%);
  }
}

p:hover ~ span{
width:58%;
}

span{
  margin-top:3px;
  width:0%;
  transition:ease-in-out 0.6s;
  height:1.2px;
  background-color:#F89DC8;
}
`;

const Button = styled.button`
background-color:#943271;
border:none;
border-radius:10px;
width:100%;
margin-top:3vh;
height:44px;
font-family:"Inter",sans-serif;
font-weight:900;
font-size:18px;
cursor:pointer;
letter-spacing:0.3px;
&:hover{
  transform:scale(105%);
}
`;

export default function Login() {
  const [modalSignUp, setModalSignUp] = useState(false);
  const [modalForgotPassword, setModalForgotPassword] = useState(false);

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const CloseModalSignUp = () => setModalSignUp(false);
  const CloseModalForgotPassword = () => setModalForgotPassword(false);

  useEffect(()=>{
    if(localStorage.getItem("login") === "on"){
      navigate("/")
    }
  },[])


  const CheckLogin = () => {
    if (
      email === localStorage.getItem('email') &&
      password === localStorage.getItem('password')
    ) {
      localStorage.setItem('login', 'on');
      alert('logada com sucesso');
      location.reload()
    } else {
      alert('Dados inconsistentes, preencha novamente');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <>
      <GlobalStyle />
      <SectionLogin>
        <FormLogin onSubmit={(e) => e.preventDefault()}>
          <h2>VOCÊ CHEGOU!</h2>
          <InputsLogin
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="E-mail:"
          />
          <InputsLogin
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Senha:"
          />
          <ForgotPasswordBox>
            <p onClick={() => setModalForgotPassword(true)}>
              Esqueceu sua senha?
            </p>
            <span></span>
          </ForgotPasswordBox>
          <Button onClick={() => CheckLogin()}>Login</Button>
          <Button onClick={() => setModalSignUp(true)}>Crie sua conta</Button>
        </FormLogin>
      </SectionLogin>
      {modalSignUp && <SignUp closeModal={CloseModalSignUp} />}
      {modalForgotPassword && (
        <ForgotYourPassword closeModal={CloseModalForgotPassword} />
      )}
    </>
  );
}

const SectionSignupFade = styled.section`
position:absolute;
top:0vh;
height:112vh;
width:100%;
background-color:black;
opacity:0.7;
`;

const SectionSignupLight = styled.section`
position:absolute;
z-index:1;
top:0vh;
display:flex;
align-items:center;
justify-content:center;
width:100%;
height:112vh;
top:0vh;
`;

const FormSignUp = styled(FormLogin)`

width:26%;
background-color:black;
`;

function SignUp({ closeModal }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [password, setPassword] = useState('');

  const SendDataStorage = () => {
    if (name !== '' && email !== '' && date !== '' && password !== '') {
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      localStorage.setItem('date', date);
      localStorage.setItem('password', password);
      localStorage.setItem("data_criacao", new Date().toLocaleDateString("pt-BR"))
      alert('Conta criada com sucesso');
      closeModal();
    } else {
      alert('Preencha todos seus dados corretamente');
    }
  };

  return (
    <>
      <SectionSignupFade></SectionSignupFade>
      <SectionSignupLight>
        <FormSignUp onSubmit={(e) => e.preventDefault()}>
          <h2>Cadastre-se</h2>
          <InputsLogin
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Nome Completo"
            required
          />
          <InputsLogin
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="E-mail"
            required
          />
          <InputsLogin
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
            required
          />
          <InputsLogin
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Senha:"
            required
          />
          <Button onClick={() => SendDataStorage()}>Criar conta</Button>
        </FormSignUp>
      </SectionSignupLight>
    </>
  );
}

const FormForgotPassword = styled(FormSignUp)`
height:60vh;
width:26%;
background-color:black;
`;

function ForgotYourPassword({ closeModal }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const ChangeOldPassword = () => {
    if (
      name === localStorage.getItem('name') &&
      email === localStorage.getItem('email') &&
      date === localStorage.getItem('date')
    ) {
      localStorage.setItem('password', newPassword);
      alert('Senha modificada com sucesso');
      closeModal();
    } else {
      alert('Dados inconsistentes preencha novamente');
      setDate('');
      setEmail('');
      setName('');
      setNewPassword('');
    }
  };

  return (
    <>
      <SectionSignupFade></SectionSignupFade>
      <SectionSignupLight>
        <FormForgotPassword onSubmit={(e) => e.preventDefault()}>
          <h2>Redefine sua senha</h2>
          <InputsLogin
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Nome Completo"
            required
          />
          <InputsLogin
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Digite seu e-mail"
            required
          />
          <InputsLogin
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
            required
          />
          <InputsLogin
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            type="password"
            placeholder="Digite sua nova senha"
            required
          />
          <Button onClick={() => ChangeOldPassword()}>Criar nova senha</Button>
        </FormForgotPassword>
      </SectionSignupLight>
    </>
  );
}
