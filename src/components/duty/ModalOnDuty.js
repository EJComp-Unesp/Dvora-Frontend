import React, { useState } from 'react';
import { Form, Input, Modal, Button, message, Popconfirm } from 'antd';
import { membersDutyApi } from '../../api';
import { isLoginMember } from '../../api/auth';

function ModalOnDuty(props) {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const { getFieldDecorator } = props.form;

    function onSubmit(e) {
        e.preventDefault();
        props.form.validateFields(async (err, values) => {
            if (!err) {
                setLoading(true);
                try {
                    const response = await membersDutyApi.create(values);
                    if (response.status === 201) {
                        setLoading(false);
                        setVisible(false);
                        props.setNewDuty(response.data.duty.id);
                        message.success('Plantão iniciado!');
                    }
                } catch (error) {
                    setLoading(false);
                    message.error(error.response.data.msg);
                }
            }
        });
    }

    return (
        isLoginMember() ?
            <Popconfirm title="Deseja iniciar um plantão?" onConfirm={onSubmit}><Button disabled={props.disabled} type="primary" >Iniciar</Button></Popconfirm>:
            <>
                <Button disabled={props.disabled} type="primary" onClick={() => setVisible(true)} >Iniciar</Button>
                <Modal
                    destroyOnClose={true}
                    visible={visible}
                    title="Identificação de usuário"
                    onOk={onSubmit}
                    onCancel={() => setVisible(false)}
                    footer={[
                        <Button key="back" onClick={() => setVisible(false)}>
                            Cancelar
                        </Button>,
                        <Button key="submit" type="primary" loading={loading} onClick={onSubmit}>
                            Iniciar plantão
                        </Button>,
                    ]}
                >
                    <Form>
                        <Form.Item>
                            {getFieldDecorator('email', {
                                rules: [{ required: true, message: 'Please input your email!' }],
                            })(<Input placeholder='email' />)}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your password!' }],
                            })(<Input.Password placeholder='senha' />)}
                        </Form.Item>
                    </Form>
                </Modal>
            </>
    )
}
export default Form.create()(ModalOnDuty)
