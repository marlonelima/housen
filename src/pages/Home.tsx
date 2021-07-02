import {
  Container,
  Header,
  Logo,
  Nav,
  SignUpButton,
  Welcome,
  MainText,
  SecondText,
  FormSearch,
  InputSearchContainer,
  SearchIcon,
  SearchInput,
  SearchButton,
  PreviousSearches,
  PrevSearch,
  PrevCity,
  PrevInfo,
  PrevRight,
  PrevIcon,
  Footer,
  FooterCopyright,
  FooterNav
} from '../styles/home'

import SearchIconSvg from './../assets/icons/search.svg'
import DetailsIcon from './../assets/icons/details.svg'
import ArrowRightIcon from './../assets/icons/arrow_right.svg'

export const Home = () => {
  return (
    <Container>
      <Header>
        <Logo src="./assets/logo.svg" />
        <nav>
          <Nav>
            <li>Buy a house</li>
            <li>Rent a house</li>
            <li>Mortgage</li>
          </Nav>
        </nav>
        <SignUpButton>Sign up</SignUpButton>
      </Header>
      <Welcome>
        <MainText>Find your ideal home</MainText>
        <SecondText>
          Search from more than 19 million of inspected appartments, houses,
          cottages, villas, manors and mansions
        </SecondText>
      </Welcome>
      <FormSearch>
        <InputSearchContainer>
          <SearchIcon src={SearchIconSvg} />
          <SearchInput placeholder="Search for address" />
          <SearchButton type="submit" value="Search" />
        </InputSearchContainer>
      </FormSearch>
      <PreviousSearches>
        <PrevSearch>
          <PrevCity>Calabasas, CA</PrevCity>
          <PrevRight>
            <PrevIcon src={DetailsIcon} />
            <PrevInfo>$1.5k+ / 2 Beds / Appt. ...3 more</PrevInfo>
            <PrevIcon src={ArrowRightIcon} />
          </PrevRight>
        </PrevSearch>
        <PrevSearch>
          <PrevCity>Long Beach, CA</PrevCity>
          <PrevRight>
            <PrevIcon src={DetailsIcon} />
            <PrevInfo>$2k+ / 1 Beds / Appt. ...3 more</PrevInfo>
            <PrevIcon src={ArrowRightIcon} />
          </PrevRight>
        </PrevSearch>
        <PrevSearch>
          <PrevCity>Fullerton, CA</PrevCity>
          <PrevRight>
            <PrevIcon src={DetailsIcon} />
            <PrevInfo>$2.5k+ / 2 Beds / Appt. ...3 more</PrevInfo>
            <PrevIcon src={ArrowRightIcon} />
          </PrevRight>
        </PrevSearch>
      </PreviousSearches>
      <Footer>
        <FooterCopyright>Housen © 2020</FooterCopyright>

        <FooterNav>
          <li>About</li>
          <li>FAQ</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </FooterNav>
      </Footer>
    </Container>
  )
}
