

import { Link } from "atomic-router-react";
import { sizeMixin } from "shared/lib/mixinsCSS";
import styled from "styled-components";


export const MenuBtn = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-left: auto;

    @media (min-width: 851px) {
        display: none;
    }

    width: 24px;
    height: 24px;

    @media (max-width: 550px) {
        width: 15.5px;
        height: 11.5px;
    }
`

export const BtnItems = styled.div`
    height: 2px;
    width: 100%;

    border-radius: 5px;

    background-color: var(--font-color-white);
`

// MENU


export const MenuWrapper = styled.section
.attrs((props:{isActive:boolean}) => props)`
  position: fixed;
  z-index:40000;
  top: 0;
  left: ${props => props.isActive ? '0' : '-200%'};
  transition: left .5s;

  background:#01001D;

  width: 100%;
  height: 100%;
  
  padding: 28px 24px 42px;

  display: flex;
  justify-content: center;
`

export const ListLinks = styled.ul`
    display: flex;
    flex-direction: column;

    margin-right: 34px;
`


export const Links = styled(Link)`
    ${sizeMixin(12, 18, 774)}
    color: var(--font-color-white);

    &:not(:first-child) {
        margin-top:33px;
    }
`

export const WrapperBtnMenu = styled.div
.attrs((props:{isActive:boolean}) => props)`
    position: fixed;
    top:38px;

    right: ${props => props.isActive ? '21px' : '-200%'};
    transition: right .5s;
`