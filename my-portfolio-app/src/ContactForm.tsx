import styled from "styled-components";
import Container from "./Container";
import { WeatherSubheading } from "./Weather";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";



const TextInput = styled.input`
 height: 35px;
 width: 400px;
 @media (max-width: 630px) {
    width: 200px;
  }
 border-radius: 8px;
 border: grey solid 3px;
 background-color: #f1f3f8;
  font-family: "Poppins";
font-size: 18px;
margin-bottom: 10px;
padding-left: 5px;
`

const MessageInput = styled.textarea`
height: 200px;
 width: 400px;
 @media (max-width: 630px) {
    width: 200px;
    height: 125px;
  }
 border-radius: 8px;
 border: grey solid 3px;
 background-color: #f1f3f8;
  font-family: "Poppins";
   resize: none;
font-size: 18px;
padding-left: 5px;
margin-bottom: 10px;
padding-top: 5px; 
`

const SubmitButton = styled.button`
width: 150px;
height: 40px;
border-radius: 12px;
margin-top: 20px;
border: none;
background-color:rgb(91, 90, 90);
font-family: Poppins;
font-size: 15px;
color: white;
font-weight: 500;

 &:active{
 background-color: rgb(62, 62, 62);
 width: 180px;
 height: 45px;
 font-size: 13px;
 cursor: grabbing;
 color:rgb(91, 90, 90);
 }
padding-bottom: 10px
`

const ErrorMessage = styled.span`
font-family: Montserrat;
font-size: 12px;
padding-left: 3px;
`

const Loader = styled.div`
z-index: 1;
  display: inline-flex;
  gap: 10px;
&:before,
&:after {
  content: "";
  height: 20px;
  aspect-ratio: 1;
  border-radius: 50%;
  background:
    radial-gradient(farthest-side,#000 95%,#0000) 35% 35%/6px 6px no-repeat
    #fff;
  transform: scaleX(var(--s,1)) rotate(0deg);
  animation: l6 1s infinite linear;
}
.loader:after {
  --s: -1;
  animation-delay:-0.1s;
}
@keyframes l6 {
  100% {transform:scaleX(var(--s,1)) rotate(360deg);}
}
`;



export default function ContactForm(){
    const [isSending, setIsSending] = useState(false);
    const [validName, setValidName] = useState(true);
    const [validMessage, setValidMessage] = useState(true);
    
    const form = useRef<HTMLFormElement>(null);

 const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    const nameInput = document.getElementById("from_name") as HTMLInputElement | null;
    const emailInput = document.getElementById("from_email") as HTMLInputElement | null;
    const messageInput = document.getElementById("message") as HTMLInputElement | null;
    const isNameValid = nameInput?.value.trim();
    const isMessageValid = messageInput?.value.trim();
    if (!isNameValid) {
        setValidName(false);
    } else {
        setValidName(true);
    }
    
    if (!isMessageValid?.trim()) {
        setValidMessage(false);
    } else {
        setValidMessage(true);
    }

    if (form.current && isNameValid && isMessageValid && nameInput?.value && messageInput?.value && emailInput?.value) {
    emailjs
      .sendForm(process.env.REACT_APP_SERVICE_ID!, process.env.REACT_APP_TEMPLATE_ID!, form.current, {
        publicKey: process.env.REACT_APP_PUBLIC_KEY!,
      }).then(
        () => {
            setTimeout(() => {
                setIsSending(false);
            }, 500);

        }
      ).finally(
() => {
    setValidName(true);
    setValidMessage(true);
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
}
      )
    } else {
        setIsSending(false);
    }
  };

    return(
<Container  
    display="flex" 
    backgroundcolor="#fbfcff" 
    height="540px" 
    width="450px" 
    customstyle="border-radius: 15px; flex-direction: column; align-items: center;  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; @media (max-width: 630px) {
    width: 300px; height: 450px;
  }" 
    paddingtop="10px">
<form ref={form} onSubmit={sendEmail}>
   <Container display="flex"  customstyle="text-align: start; flex-direction: column;" >
   <WeatherSubheading style={{color: "grey", paddingBottom: "5px"}}>
    Name
   </WeatherSubheading >
   <TextInput type="text" name="from_name" id="from_name" required />
   {!validName && (
<ErrorMessage> Invalid name</ErrorMessage>
   )}
   </Container>
   <Container display="flex"  customstyle="text-align: start; flex-direction: column;" >
   <WeatherSubheading style={{color: "grey", paddingBottom: "5px"}}>
    Email
   </WeatherSubheading>
   <TextInput type="email" name="from_email" id="from_email"  required />
   </Container>
   <Container display="flex"  customstyle="text-align: start; flex-direction: column;" >
   <WeatherSubheading style={{color: "grey", paddingBottom: "5px"}}>
    Message
   </WeatherSubheading>
   <MessageInput  name="message" id="message"   required />
   {!validMessage &&(
   <ErrorMessage> Invalid message</ErrorMessage>
   )}
   </Container>
   <SubmitButton type="submit">
  {isSending ? <Loader /> : "Send Message"}
</SubmitButton>
</form>
</Container>
    )
}