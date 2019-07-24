import React from 'react';
import './index.css'
import 'antd/dist/antd.css';
import {Input,Button,List,Row,Col,Layout} from 'antd';
const { Header, Content,Footer } = Layout;

const TodoUI=(props)=>{
        return (
<div>
    <Row>
      <Col xs={2} sm={4} md={4} lg={4} xl={4}></Col>
      <Col xs={20} sm={16} md={16} lg={16} xl={16}>
      <Layout>
      <Header><h1 style={{color:'white',textAlign:'center'}}>Hello world</h1></Header>
      <Content>
      <div style={{margin:'15px'}}>
                <h2 style={{color:'teal',textAlign:'center'}}>TODO项目</h2>
                <Input placeholder={props.inputValue}
                style={{width:'77%',marginRight:'1%'}}
                onChange={props.changeInputValue}
                value={props.inputValue}
                />
                <Button 
                type="primary"
                onClick={props.clickBtn}
                >
                添加项目
                </Button>
                <List
                bordered
                dataSource={props.list}
                size='small'
                style={{marginTop:'15px',color:'teal'}}
                renderItem={(item,index) =>(
                <List.Item
                    onClick={()=>{props.deleteItem(index)}}>{item}
                </List.Item>)}
                />
            </div>
      </Content>
      <Content>
      <h2 style={{color:'teal',textAlign:'center'}}>这些年喜欢的女神</h2>
          <List
                bordered
                dataSource={props.imgs}
                style={{marginTop:'15px'}}
                renderItem={(item) =>(
                <List.Item>
                    <div style={{margin:'0 auto'}}>
                        <h2 style={{color:'deeppink',textAlign:'center'}}>{item.who}</h2>
                        <img src={item.url}  alt={item.who} width="100%" />
                    </div>
                </List.Item>)}
                />
      </Content>
      <Footer>
      <h1 style={{color:'coral',textAlign:'center'}}>&copy;倚楼听风雨，淡看江湖路。</h1>
      </Footer>
    </Layout>  
      </Col>
      <Col xs={2} sm={4} md={4} lg={4} xl={4}></Col>
    </Row>
    </div>
         );
}
 
export default TodoUI;