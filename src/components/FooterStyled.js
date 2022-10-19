import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #fbfaf9;
`;

export const Left = styled.div`
  flex: 0.05;
  display: flex;
  flex-direction: column;
`;

export const SocialLinks = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 10px;
`;

export const Image = styled.img`
  width: 150px;
  height: 100px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
`;

export const SocialIconLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  padding: 2px;
`;

export const SocialIcon = styled.img`
  height: 15px;
  padding: 0 12px;
`;

export const Center = styled.div`
  flex: 2;
  padding: 20px;
`;

export const Title = styled.h3`
  padding-bottom: 5px;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  width: 50%;
  padding: 10px 0;
  text-align: left;
  font: normal normal medium 14px/24px Quicksand;
  letter-spacing: 0.7px;
  color: #000000;
`;

export const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

export const ContactItem = styled.p`
  display: flex;
  align-items: center;
  padding: 15px 0;

  text-align: left;
  font: normal normal medium 14px/24px Quicksand;
  letter-spacing: 0.7px;
  color: #000000;
`;

export const Payment = styled.img``;

export const Span = styled.span`
  color: #39b157;
`;
