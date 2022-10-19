import React from "react";
import {
  Center,
  ContactItem,
  Container,
  Image,
  List,
  ListItem,
  Right,
  Social,
  SocialContainer,
  SocialIcon,
  SocialIconLink,
  SocialLinks,
  Span,
} from "./FooterStyled";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Footer = () => {
  return (
    <Container>
      <SocialLinks>
        <SocialContainer>
          <Image src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1666091146/Baroque/Mask_Group_2_2x_uzxjyb.png" />

          <Social>
            <SocialIconLink
              href="https://github.com/Zardron"
              target="_blank"
              title="GitHub"
            >
              <SocialIcon src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1666091145/Baroque/Icon_awesome-twitter-1_2x_lubqbk.png"></SocialIcon>
            </SocialIconLink>
            <SocialIconLink
              href="https://www.linkedin.com/in/zardron-angelo-pesquera-89b8961ba/"
              target="_blank"
              title="LinkedIn"
            >
              <SocialIcon src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1666091144/Baroque/Icon_awesome-facebook-f-1_2x_wv11ql.png"></SocialIcon>
            </SocialIconLink>
            <SocialIconLink
              href="mailto:zardron.pesquera1993@gmail.com?subject=INQUIRE"
              target="_blank"
              title="Gmail"
            >
              <SocialIcon src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1666091144/Baroque/Icon_awesome-instagram_2x_r6tj26.png"></SocialIcon>
            </SocialIconLink>
            <SocialIconLink
              href="https://wa.me/971581874753"
              target="_blank"
              title="Whatsapp"
            >
              <SocialIcon src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1666091144/Baroque/Icon_awesome-linkedin-in_2x_mpolwz.png"></SocialIcon>
            </SocialIconLink>
          </Social>
        </SocialContainer>
      </SocialLinks>
      <Center>
        <List>
          <ListItem>Day Charter Yachts</ListItem>
          <ListItem>Weekly Charter Yachts</ListItem>
          <ListItem>Type of charter</ListItem>
          <ListItem>Corporate Charter</ListItem>
          <ListItem>Regions & Destinations</ListItem>
          <ListItem>Featured Itineraries</ListItem>
          <ListItem>Private Events and Experience</ListItem>
          <ListItem>Global Events Calendar</ListItem>
        </List>
      </Center>
      <Right>
        <ContactItem>
          <WhatsAppIcon style={{ paddingRight: "10px", color: "#39B157" }} /> <Span>+1 917 690 6203</Span>
        </ContactItem>
        <ContactItem>
          <CallOutlinedIcon style={{ paddingRight: "10px" }} /> +1 917 690 6203
        </ContactItem>
        <ContactItem>
          <EmailOutlinedIcon style={{ paddingRight: "10px" }} />{" "}
          info@baroqueyachts.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
