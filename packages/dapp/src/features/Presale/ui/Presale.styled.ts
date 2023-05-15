

import styled from 'styled-components'

import { sizeMixin } from 'shared/lib/mixinsCSS'
import imgLi from "shared/assets/img/imgLi.svg"


export const DescriptionGet = styled.h2`
    ${sizeMixin(32, 45, 1440)}
    ${sizeMixin(29, 52, 1440, "margin-top")}
`

export const ListItems = styled.ul`
  margin: 0 auto;
  margin-bottom: 34px;
  ${sizeMixin(20, 32, 1440, "margin-top")};
  ${sizeMixin(35, 150, 1440, "padding-left")}
  list-style-image: url(${imgLi}) !important;

  @media (max-width: 768px) {
    padding-left: 50px;
    margin-top: 25px;
  }

  @media(max-width: 500px) {
    margin-top: 20px;
  }
`

export const Items = styled.li`
  ${sizeMixin(5, 10, 1440, "margin-top")}
  ${sizeMixin(20, 34, 1440)}
  list-style-image: url(${imgLi}) !important;

  @media(max-width: 768px) {
    font-size: 25px;
    margin-top: 7px;
  }

  @media(max-width: 500px) {
    font-size: 20px;
    margin-top: 5px;
  }
`

export const MarginTopProgress = styled.div`
  margin-top: 20px;
`

