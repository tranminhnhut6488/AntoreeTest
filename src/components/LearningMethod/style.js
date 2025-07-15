import styled from "styled-components"

export const LearningMethodWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const LearningBox = styled.div`
  border: 1px solid #BD1220FF;
  padding: 16px;
  border-radius: 12px;
  background: rgba(189, 18, 32, 0.2);
  font-size: 16px;
  line-height: 1.6;

  display: flex;
  align-items: center;
  gap: 24px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .text-content,
  .image-content {
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  &:hover .text-content {
    transform: translateX(8px);
    opacity: 0.95;
  }

  &:hover .image-content {
    transform: scale(1.03);
    opacity: 0.95;
  }

  .text-content {
    flex: 1;
  }

  .image-content {
    flex: 2;
  }

  .image-content img {
    width: 100%;
    height: auto;
    max-height: 300px;
    object-fit: cover;
    border-radius: 8px;
    transition: transform 0.3s ease;
  }
`


export const FullWidthBox = styled(LearningBox)`
  grid-column: span 2;

  @media (max-width: 768px) {
    grid-column: span 1;
  }
`