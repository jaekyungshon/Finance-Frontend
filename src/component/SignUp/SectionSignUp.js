import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';

function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [nickname, setNickname] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (username.length < 8) {
            setError('사용자 이름은 8자 이상이어야 합니다.');
            return;
        }

        if (!password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
            setError('비밀번호는 영어와 숫자를 포함하여 8자 이상이어야 합니다.');
            return;
        }

        if (password !== confirmPassword) {
            setError('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
            return;
        }

        if (!email.includes('@')) {
            setError('올바른 이메일 형식이 아닙니다.');
            return;
        }

        try {
            const response = await axios.post('/auth/signup', {
                username,
                password,
                nickname,
                email
            });

            if (response.status === 200) {
                console.log('회원가입 성공:', response.data);
                document.location.href = '/';
            }
        } catch (error) {
            if  (error.response.status === 401) {
                console.error('회원가입 실패:', error.response.statusText);
                setError('회원가입에 실패했습니다. 다시 시도해주세요.');
            }else {
                console.error('네트워크 오류:', error);
                setError('네트워크 오류가 발생했습니다.');
            }
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center vh-70">
            <div className="text-center w-50">
                <h2>회원가입</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formId">
                        <Form.Label>사용자 이름</Form.Label>
                        <Form.Control
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formPassword">
                        <Form.Label>비밀번호</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formConfirmPassword">
                        <Form.Label>비밀번호 확인</Form.Label>
                        <Form.Control
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formNickname">
                        <Form.Label>닉네임</Form.Label>
                        <Form.Control
                            type="text"
                            value={nickname}
                            onChange={(e) => setNickname(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                        <Form.Label>이메일</Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Button variant="primary" type="submit">
                        회원가입
                    </Button>
                </Form>
            </div>
        </Container>
    );
}

export default SignUp;