
import styled, {css} from 'styled-components'
import {sizeMixin} from "shared/lib/mixinsCSS";


export const BodySwap = styled.div`
    width: 100%;
    ${sizeMixin(14, 33, 1440, "margin-top")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media(max-width: 768px) {
    flex-direction: column;
    gap:16px;
  }
`

export const SwapItem = styled.div`
  width: 46.432160804%;
  display: flex;
  flex-direction: column;
  gap:10px;

  @media(max-width: 768px) {
    width: 100%;
  }
`

export const HeaderSwapItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 768px) {
    padding: 0 20px;
  }
`

export const InputCssText = css`
  ${sizeMixin(15, 30, 1440)}
  color: var(--font-color-white-hard);
`

export const HeaderText = styled.h3`
    ${InputCssText}
`

export const InputBody = styled.div`
  width: 100%;
  height: 81px;
  position: relative;
`

export const InputCount = styled.input`
  width: 100%;
  height: 100%;
  background: none;
  border: 5px solid var(--font-color-white);
  border-radius: 20px;
  padding-left:18px;
  padding-right:120px;
  ${InputCssText}
  
  &::placeholder {
    ${InputCssText}
  }
`

export const BodyToken = styled.div`
  position: absolute;
  top:50%;
  transform: translateY(-50%);
  right: 20px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap:7px;
`

export const ImgToken = styled.img`
    
`

export const TextToken = styled.span`
  ${InputCssText}
`

export const NextSwap = styled.img`
  position: absolute;
  top:50%;
  transform: translateY(-50%);
  right: -43px;

  @media(max-width: 768px) {
    top:auto;
    bottom: -79px;
    right: 50%;
    transform: translateY(-50%) translateX(50%) rotate(90deg);
  }
`