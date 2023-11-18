import styled from 'styled-components'
import BaseSectionTitle from '@/components/BaseSectionTitle'
import Basebutton from '@/components/BaseButton'
import React from 'react';

const Container = styled.div`
 width: 783px;
 max-width: 100%;
 margin: 0 auto;
 padding-left: 40px;
 padding-right: 40px;
 position: relative;
`

const StyledService = styled.div`
  background-color:#D9E8FF;
  padding: 80px 0;
  .content {
    sectionText {
      margin-bottom: 8px;
    }
  }
`;
const StyledForm = styled.form`
  margin-top: 40px;
  > div {
    margin-bottom: 8px;
    display: flex;
    align-items: center;
  }
  label {
    width:90px;
    padding-right: 8px;
    display:inline-block;
    flex-shrink: 0;
  }
  .input {
    height: 48px;
    border: 1px solid #DCDCDC;
    border-radius: 2px;
    outline: none;
    font-size: 18px;
    &.area {
      width: 80px;
      margin-right: 8px;
    }
    &.phone {
      width: 154px;
    }
    &:placeholder { 
      color: #DCDCDC;
    }
    &.suggest {
      width: 100%;
      height: auto;
    }
  }
  .submitBtn {
    display:flex;
    justify-content: flex-end;
    margin-top: 40px;
    .baseButton {
      padding: 8px 20px;
      font-size: 14px;
    }
  }
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
`
const Form = () => {
  const [submitData, setsubmitData] = React.useState({
    name: '',
    email: '',
    area: '',
    phone: '',
    suggest: ''
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setsubmitData((state) => ({...state, [name]:value}))
  }
  const submit = (e) => {
    e.preventDefault();
    alert('送出完成')
  }
  const isFormFilled = Object.values(submitData).every(value => value.trim() !== '');
  return(
    <>
      <StyledForm action='no' >
        <div>
          <label htmlFor="name">姓名</label>
          <input 
            name="name" 
            id="name"
            type="text" 
            className="input" 
            value={ submitData.name } 
            onChange = { handleChange } 
            placeholder='請輸入你的姓名' 
            required/>
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input 
            name="email" 
            id="email" 
            type="email" 
            className="input" 
            value={ submitData.email } 
            onChange = { handleChange } 
            placeholder='abc@abc.com' 
            required
          />
        </div>
        <div>
          <label htmlFor="area">手機</label>
          <input 
            name="area" 
            id="area" 
            className="input area" 
            value={ submitData.area } 
            onChange = { handleChange } 
            placeholder='0800'
            type='number' 
            required
          />
          <input 
            name="phone" 
            id="phone" 
            className="input phone" 
            value={ submitData.phone } 
            onChange = { handleChange } 
            placeholder='000000'
            type='number' 
            required
          />
        </div>
        <div>
          <label htmlFor="suggest">您的建言</label>
          <textarea 
            name="suggest" 
            id="suggest" 
            rows={7} 
            className="input suggest" 
            value={ submitData.suggest } 
            onChange = { handleChange } 
            placeholder='請輸入您的建言或問題' 
            required
          />
        </div>
        <div className='submitBtn'>
          <Basebutton onClick={submit} className={isFormFilled ? '' : 'disabled'}>送出意見</Basebutton>
        </div>
       
      </StyledForm>
    </>
  )
}

function Marquee () {
  return (
    <StyledService>
      <Container>
        <BaseSectionTitle>
          民眾服務信箱
        </BaseSectionTitle>
        <div className='content'>
          <h5 className='sectionText'>您的聲音，我們的行動！</h5>
          <p>今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！</p>
        </div>
        <Form />
      </Container>
    </StyledService>
  )
}

export default Marquee