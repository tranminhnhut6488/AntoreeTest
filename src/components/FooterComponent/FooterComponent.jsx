import React from 'react';
import { Column, Container, Footer, FooterBottom } from './style';

const FooterComponent = () => {
    return (
        <Footer>
            <Container>
                <Column>
                    <h3>Về chúng tôi</h3>
                    <p>Giới thiệu</p>
                    <p>Lịch sử hình thành</p>
                    <p>Chính sách bảo mật</p>
                    <p>Trách nhiệm và cam kết</p>
                    <p>Thông tin thanh toán</p>
                </Column>
                <Column>
                    <h3>Liên hệ</h3>
                    <p>Email: contact@gmail.com</p>
                    <p>Phone: 0123 456 789</p>
                    <p>Địa chỉ: 123 đường Lạc Long Quân, P.3, Q.11, TP.HCM</p>
                </Column>
                <Column>
                    <h3>Theo dõi chúng tôi</h3>
                    <p>Facebook | TikTok | Youtube</p>
                </Column>
                <FooterBottom>
                    © {new Date().getFullYear()} Logo. All rights reserved.
                </FooterBottom>
            </Container>
        </Footer>
    );
};

export default FooterComponent;