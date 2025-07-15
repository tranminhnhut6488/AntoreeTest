import styled from "styled-components"

export const VisionMissionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  margin-top: 32px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const VisionText = styled.div`
  flex: 1;
  font-size: 16px;
  line-height: 1.6;
`

export const VisionImage = styled.img`
  flex: 1;
  max-width: 740px;
  width: 100%;
  height: 300px;
  border-radius: 12px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: auto;
  }
`