import styled from 'styled-components'
import { Theme } from '../constants/Theme'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0 10%;
  background: url('./assets/background.jpg');
  background-position: fixed;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 850px) {
    padding: 0 5%;
  }
`
export const Header = styled.header`
  width: 100%;
  height: 60px;
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
`
export const Logo = styled.img`
  width: 150px;
`

export const Nav = styled.ul`
  display: flex;
  flex-direction: row;

  > li {
    font-weight: 700;
    font-size: 1rem;
    margin-right: 20px;

    &:last-child {
      margin: 0;
    }

    &:hover {
      cursor: pointer;
    }
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`

export const SignUpButton = styled.button`
  width: 180px;
  height: 45px;
  border: 2px solid ${Theme.primary.main};
  color: ${Theme.primary.main};
  font-size: 1.1rem;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    color: #fff;
    background: ${Theme.primary.main};
  }

  @media screen and (max-width: 470px) {
    width: 100px;
    font-size: 3vw;
    height: 30px;
  }
`

export const Welcome = styled.div`
  width: 100%;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  max-width: 1200px;
`

export const MainText = styled.h1`
  font-size: 3.2rem;
  color: ${Theme.text.black};
  font-weight: 800;

  @media screen and (max-width: 700px) {
    font-size: 6vw;
  }
`

export const SecondText = styled.h2`
  font-size: 1rem;
  margin-top: 20px;
  letter-spacing: 1px;
  color: ${Theme.text.gray};
  width: 50%;
  text-align: center;

  @media screen and (max-width: 1200px) {
    width: 90%;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`
export const FormSearch = styled.form`
  width: 60%;
  max-width: 730px;

  @media screen and (max-width: 1200px) {
    width: 90%;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`

export const InputSearchContainer = styled.div`
  background: #fff;
  margin-top: 50px;
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  border-radius: 4px;
  box-shadow: 0 0 5px 1px #ececec;
`

export const SearchIcon = styled.img`
  width: 18px;
  height: 18px;
`

export const SearchInput = styled.input`
  flex: 1;
  height: 96%;
  padding: 0 15px;
  margin: 0 20px;
  font-size: 1.05rem;
`
export const SearchButton = styled.input`
  background: ${Theme.primary.main};
  color: #fff;
  font-size: 1rem;
  height: 70%;
  padding: 0 50px;
  border-radius: 2px;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    filter: brightness(0.8);
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`

export const PreviousSearches = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  max-width: 730px;
  margin-top: 40px;
  padding-bottom: 100px;

  @media screen and (max-width: 1200px) {
    width: 90%;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`

export const PrevSearch = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 70px;
  background: #fff;
  justify-content: space-between;
  padding: 0 2rem;
  align-items: center;
  margin-bottom: 15px;
  box-shadow: 0 0 5px 1px #f7f7f7;
`

export const PrevRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const PrevIcon = styled.img`
  width: 12px;
  height: 12px;
  margin: 0 20px;

  &:last-child {
    margin-right: 0;
  }
`

export const PrevCity = styled.p`
  font-weight: 700;
  color: ${Theme.text.black};

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

export const PrevInfo = styled.p`
  color: ${Theme.text.gray};

  @media screen and (max-width: 600px) {
    display: none;
  }
`

export const Footer = styled.footer`
  width: 125%;
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 25px 12%;

  > p {
    margin-left: 10px;
    font-size: 0.8rem;
    font-weight: 600;
    color: ${Theme.text.light_gray};
  }

  @media screen and (max-width: 850px) {
    width: 110%;
  }

  @media screen and (max-width: 630px) {
    flex-direction: column;
    gap: 15px;
  }
`

export const FooterCopyright = styled.p``

export const FooterNav = styled.ul`
  display: flex;
  flex-direction: row;

  > li {
    margin-left: 10px;
    font-size: 0.8rem;
    font-weight: 600;
    color: ${Theme.text.light_gray};

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`
