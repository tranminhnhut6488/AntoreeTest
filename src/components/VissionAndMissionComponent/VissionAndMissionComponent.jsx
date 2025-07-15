import React from 'react';
import { VisionImage, VisionMissionWrapper, VisionText } from './style';

const VissionAndMissionComponent = () => {
    return (
        <>
            <h2 style={{ textAlign: 'center', color: '#BD1220FF' }}>Tầm nhìn và Sứ mệnh</h2>
            <VisionMissionWrapper>
                <VisionText>
                    <strong style={{ color: '#BD1220FF' }}>Tầm nhìn</strong><br />
                    Trở thành hệ sinh thái đào tạo tiếng Anh giao tiếp & tạo môi trường chuyển hoá toàn diện cho nhiều học viên nhất tại Việt Nam.<br /><br />
                    <strong style={{ color: '#BD1220FF' }}>Sứ mệnh</strong><br />
                    Chuyển hoá người khác bằng việc thay đổi chính mình.
                </VisionText>
                <VisionImage src={`${process.env.REACT_APP_API_URL}/uploads/vission.jpg`} alt="vission" />
            </VisionMissionWrapper>
        </>
    );
};

export default VissionAndMissionComponent;