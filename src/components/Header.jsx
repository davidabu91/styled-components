import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
          <Nav>
              <Logo src='./images/logo.svg' alt=""/>
              <Button>Try It Free</Button>
          </Nav>

          <Flex>
              <div>
                  <h1>
                      Build The Community Yout Fans Will Love
                  </h1>

                  <p>
                      Huddle re-imagines the way we build communties. You have a voice, but so your audience. Create connections with your users as you engage in discussion
                  </p>

                  <Button bg="#ff0033" color="fff">
                    Get Stardet For free
                  </Button>
              </div>

              <Image src="./images/illustration-mockups.svg" alt=""/>
          </Flex>
      </Container>
    </StyledHeader>
  );
}
