import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,0.6946428229494923) 50%, rgba(252,176,69,1) 100%);
  color: black;
`;


export const FormContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 20px;
  padding-right: 20px;
  max-width: 1250px;
  width: 100%;
`;

export const Header = styled.header`
  background-color: #2980b9;
  padding: 20px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  width: 100%;
  padding-top:5px;
`;

export const Footer = styled.footer`
  background-color: #2980b9;
  padding: 10px;
  text-align: center;
  font-size: 14px;
  width: 100%;
  margin-top: 10px;
`;

export const Section = styled.h3`
  display: block;
  margin-left: 5px;
  color: blue;
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10%;
  margin: 20px;
`;

export const FormText = styled.div`
  margin: 20px;
`;

export const FormField = styled.div`
  label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: #333;
  }

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
  }
`;


export const SubmitButton = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  width: 50%;
  margin: 0 auto;
  display: block;
  
  &:hover {
    background-color: #2980b9;
  }
`;

export const FileInput = styled.input`
  display:inline;
  width: 30%;
  padding: 8px;
  margin-top: 8px;
  margin-bottom:8px;
`;

export const Result = styled.ol`
  list-style: none;
  padding: 0px;
  margin: 20px 0;

  li {
    padding: 10px;
    margin: 5px 0;
    font-size: 18px;
  }
`;