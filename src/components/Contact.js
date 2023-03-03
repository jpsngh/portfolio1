import React from 'react'
import Form from 'antd/es/form/Form'
import Input from 'antd/es/input/Input'
import { Button } from 'antd';
const Contact = () => {
    
  return (
    <div>

        <h1>Contact Me</h1>


        <Form >
            <Form.Item label="Name">
                <Input placeholder='Name'> </Input>
            </Form.Item>
            <Form.Item label="Email">
                <Input placeholder='Email'> </Input>
            </Form.Item>
            <Form.Item label="Email">
                <Input placeholder='Email'> </Input>
            </Form.Item>
            <Form.Item label="Message">
                <Input placeholder='Message'> </Input>
            </Form.Item>
            <Button type='primary' htmlType="submit">Send Message</Button>
        </Form>
      
    </div>
  )
}

export default Contact
