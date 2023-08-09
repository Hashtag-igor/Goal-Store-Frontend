import { styled } from "styled-components";
import { Link } from "react-router-dom"


export const FormContainer = styled.form`
    width: 80%;
    margin: 70px auto;
    padding: 40px 0 60px 0;
    border: 1px solid #e9e9e9;
`
export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px 0;
    width: 90%;
    margin: auto;
    box-sizing: border-box;
`
export const FormInputContainer = styled.div`
    width: 100%;
`
export const FormLabel = styled.label``

export const FormInput = styled.input`
    width: 100%;
    margin-top: 10px;
    padding: 15px 0 15px 10px;
    font-size: 18px;
    box-sizing: border-box;
    background: #f3f3f3;
    letter-spacing: 1px;
    border: 1px solid #e0e0e0;
`
export const FormButtonArea = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
`
export const FormLink = styled(Link)`
    color: #f82e56;

    &:hover{
        cursor: pointer;
    } 
`
export const FormTitle = styled.h2`
    text-align: center;
    margin-bottom: 30px;
`
export const FormButton = styled.button`
  background-color: #f82e56;
  color: #fff;
  font-weight: bolder;
  border: none;
  width: 150px;
  height: 60px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover{
    background: #fff;
    color: #f82e56;
    cursor: pointer;
    border: 1px solid #f82e56;
  }
`