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
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const Footer = () => {
  return (
    <div className="container">
      <Container>
        <SocialLinks>
          <SocialContainer>
            <Image src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1666091146/Baroque/Mask_Group_2_2x_uzxjyb.png" />

            <Social>
              <SocialIconLink
                href="https://twitter.com/?lang=en"
                target="_blank"
                title="Twitter"
              >
                <SocialIcon src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1666091145/Baroque/Icon_awesome-twitter-1_2x_lubqbk.png"></SocialIcon>
              </SocialIconLink>
              <SocialIconLink
                href="https://www.facebook.com/"
                target="_blank"
                title="Facebook"
              >
                <SocialIcon src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1666091144/Baroque/Icon_awesome-facebook-f-1_2x_wv11ql.png"></SocialIcon>
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/"
                target="_blank"
                title="Instagram"
              >
                <SocialIcon src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1666091144/Baroque/Icon_awesome-instagram_2x_r6tj26.png"></SocialIcon>
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/in/zardron-angelo-pesquera-89b8961ba/"
                target="_blank"
                title="LinkedIn"
              >
                <SocialIcon src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1666091144/Baroque/Icon_awesome-linkedin-in_2x_mpolwz.png"></SocialIcon>
              </SocialIconLink>
            </Social>
          </SocialContainer>
        </SocialLinks>
        <Center>
          <List>
            <ListItem style={{ cursor: "pointer" }}>
              Day Charter Yachts
            </ListItem>

            <ListItem style={{ cursor: "pointer" }}>
              Regions & Destinations
            </ListItem>
            <ListItem style={{ cursor: "pointer" }}>
              Weekly Charter Yachts
            </ListItem>
            <ListItem style={{ cursor: "pointer" }}>
              Featured Itineraries
            </ListItem>
            <ListItem style={{ cursor: "pointer" }}>Type of charter</ListItem>
            <ListItem style={{ cursor: "pointer" }}>
              Private Events and Experience
            </ListItem>
            <ListItem style={{ cursor: "pointer" }}>Corporate Charter</ListItem>

            <ListItem style={{ cursor: "pointer" }}>
              Global Events Calendar
            </ListItem>
          </List>
        </Center>
        <Right>
          <ContactItem style={{ cursor: "pointer" }}>
            <WhatsAppIcon style={{ paddingRight: "10px", color: "#39B157" }} />{" "}
            <Span>+1 917 690 6203</Span>
          </ContactItem>
          <ContactItem style={{ cursor: "pointer" }}>
            <CallOutlinedIcon style={{ paddingRight: "10px" }} /> +1 917 690
            6203
          </ContactItem>
          <ContactItem style={{ cursor: "pointer" }}>
            <EmailOutlinedIcon style={{ paddingRight: "10px" }} />{" "}
            info@baroqueyachts.com
          </ContactItem>
        </Right>
      </Container>
    </div>
  );
};

export default Footer;
