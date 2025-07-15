import React from 'react';
import { FullWidthBox, LearningBox, LearningMethodWrapper } from './style';

const LearningMethod = () => {
    return (
        <>
            <h2 style={{ textAlign: 'center', marginTop: '32px', color: '#BD1220FF' }}>Phương pháp học tập</h2>
            <LearningMethodWrapper>
                <LearningBox>
                    <div className="text-content">
                        <strong style={{ fontSize: '18px', color: '#BD1220FF' }}>Phương pháp Dictation</strong><br />
                        Phương pháp dictation là một phương pháp học ngôn ngữ bằng cách nghe hội thoại hoặc văn bản,
                        và sau đó viết ra những gì bạn nghe được. Đây là phương pháp vô cùng hiệu quả.
                    </div>
                    <div className="image-content">
                        <img src={`${process.env.REACT_APP_API_URL}/uploads/dictation.jpg`} alt="dictation" />
                    </div>
                </LearningBox>
                <LearningBox>
                    <div className="text-content">
                        <strong style={{ fontSize: '18px', color: '#BD1220FF' }}>Tài liệu học tập đa dạng và độc quyền chỉ có nơi này</strong><br />
                        Tất cả sách, giáo trình, video đều được lên kế hoạch và thiết kế theo cách riêng biệt, hiệu quả và tối ưu.
                    </div>
                    <div className="image-content">
                        <img src={`${process.env.REACT_APP_API_URL}/uploads/document.webp`} alt="document" />
                    </div>
                </LearningBox>
                <FullWidthBox>
                    <div className="text-content">
                        <strong style={{ fontSize: '18px', color: '#BD1220FF' }}>Ứng dụng công nghệ hoàn thiện và hiện đại</strong><br />
                        - Theo dõi quá trình học của học viên<br />
                        - Thống kê điểm danh và làm bài<br />
                        - Luyện tập không giới hạn mọi lúc, mọi nơi<br />
                        - Kho bài tập đa dạng riêng cho từng khóa<br />
                        - Giáo viên chấm & trả bài trực tiếp qua app<br />
                        - Ứng dụng công nghệ AI vào chấm bài
                    </div>
                    <div className="image-content">
                        <img src={`${process.env.REACT_APP_API_URL}/uploads/app-learn-english.jpg`} alt="app-learn-english" />
                    </div>
                </FullWidthBox>
            </LearningMethodWrapper>
        </>
    );
};

export default LearningMethod;