import React from 'react'
import styled from 'styled-components';
import { Avatar, Button,Form,Input,Tooltip, Upload } from 'antd';
import {UserAddOutlined,SendOutlined,FileImageOutlined,SmileOutlined} from '@ant-design/icons';
import MessageLeft from './MessageLeft';
import MessageRight from './MessageRight';

const Headestyle = styled.div`
  display: flex;
  justify-content: space-between;
  height: 59px;
  padding: 12px 16px;
  align-item: center;
  border-bottom: 1px solid black;
  .header{
    &__info{
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-top: 12px;
    }
    &__title{
      margin: 0;
      font-weight: bold;
    }
    &__description{
      font-size: 12px;
    }
  }
`;
const ButtonGroupStyle = styled.div`
  display: flex;
  align-item: center; 
`;
const WrapperStyled = styled.div`
  height: 100vh;
`;
const ContentStyle = styled.div`
  height: calc(100% - 59px);
  display: flex;
  flex-direction: column;
  padding: 11px;
  justify-content: flex-end;

`;
const MessageListLeftStyle = styled.div`
   max-height: 100%;
   over-flow-y: auto;
`;
const MessageListRightStyle = styled.div`
   display: flex;
   justify-content: end;
`;
const MessageListStyle = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const FormStyle = styled(Form)`
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 2px 2px 0;
  border: 1px solid black;
  border-radius: 10px;

  .ant-form-item{
    flex: 1;
    margin-bottom: 0px;
  }
  span div span span{
    font-size: 30px;
    color: #f99707;
  }
  .ant-btn{
    padding: 0 5px;
  }
  .ant-btn span{
    font-size: 27px;
    color: #d92f09;
    margin-top: 3px;
  }
`;
const ButtonStyle = styled(Button)`
  margin-left: 10px; 
  width: 39px;
  height: 32px;
   span svg{
     font-size: 20px;
     color: #f99707;
  }
`;
const UploadStyle = styled(Upload)`
  .ant-upload-list-item-name{
    display: none;
  }
  .ant-upload-list-picture{
    display: flex;
  }
  .ant-upload-list-picture .ant-upload-list-item{
    border-radius: 15px;
}
  display: flex;
  align-items: center;
  flex-direction: row;
  
`;
export default function ChatWindown() {
  return (
    <WrapperStyled>
      <Headestyle>
        <div className='header__info'>
          <p className='header__title'>Room 1</p>
          <p className='header__description'>Day la room 1</p>
        </div>
        <ButtonGroupStyle>
          <Button icon={<UserAddOutlined />} type="text">Moi</Button>
          <Avatar.Group size='small' maxCount={3}>
            <Tooltip title="A">
              <Avatar>A</Avatar>
            </Tooltip>
            <Tooltip title="A">
              <Avatar>B</Avatar>
            </Tooltip>
            <Tooltip title="A">
              <Avatar>C</Avatar>
            </Tooltip>
            <Tooltip title="A">
              <Avatar>D</Avatar>
            </Tooltip>
            <Tooltip title="A">
              <Avatar>E</Avatar>
            </Tooltip>
          </Avatar.Group>  
        </ButtonGroupStyle>
      </Headestyle>
      <ContentStyle>
        <MessageListStyle>
          <MessageListLeftStyle>
            <MessageLeft 
                      text="Hello"
                      displayName="Luynh"
                      photoUrl={null}
                      createdAt={12/21/12}/>
            <MessageLeft 
                      text="How are you" 
                      displayName="Luynh" 
                      photoUrl={null} 
                      createdAt={12/21/12}/>
            <MessageLeft 
                      text="I'm fine, thank you. And you." 
                      displayName="Luynh" 
                      photoUrl={null} 
                      createdAt={12/21/12}/>
            <MessageLeft 
                      text="I'm fine" 
                      displayName="Luynh" 
                      photoUrl={null} 
                      createdAt={12/21/12}/>
          </MessageListLeftStyle>
          <MessageListRightStyle>
            <MessageRight 
                      text="I'm Good, what are you doing?" 
                      createdAt={12/21/12}/>
          </MessageListRightStyle>
        </MessageListStyle>
        <FormStyle>
          <UploadStyle listType="picture" className="UploadStyle-list-inline"><FileImageOutlined /></UploadStyle>
          <Form.Item> 
            <Input.Group compact>
              <Input bordered={false} autoComplete="off" placeholder='nhan tin...'/> 
            </Input.Group>
          </Form.Item>
          <Button type="text">{<SendOutlined />}</Button>
        </FormStyle>
      </ContentStyle>
    </WrapperStyled>
  )
}
