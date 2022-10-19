import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
`;

const Data = styled.div`
  margin: 10px 0;
  padding: 0 10px;
  text-align: center;
  border-right: 1px solid rgba(128, 128, 128, 0.3);

  :nth-child(3n) {
    border-right: none;
  }
`;

const Image = styled.img`
  margin-top: 10px;
  width: 100%;
  height: 250px;
  border-radius: 10px;
`;

const ImageIcon = styled.img`
  width: 30px;
  cursor: pointer;
  height: 30px;
`;

const Title = styled.p`
  text-align: left;
  font: normal normal medium 18px/24px Quicksand;
  letter-spacing: 0.9px;
  color: #000000;
  padding: 10px 0;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(128, 128, 128, 0.3);
  padding-top: 10px;
`;

const Left = styled.div`
  text-align: left;
`;

const Label = styled.p`
  text-align: left;
  font: normal normal medium 14px/24px Quicksand;
  letter-spacing: 0.7px;
  color: #000000;
  font-weight: bold;
`;

const Value = styled.p`
  text-align: left;
  font: normal normal normal 14px/24px Quicksand;
  letter-spacing: 0.7px;
  color: #000000;
`;

const DetailsContainer = styled.div`
  text-align: left;
  padding: 10px 0;
`;

const Right = styled.div`
  text-align: left;
`;

const RightIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Price = styled.p`
  text-align: left;
  font: normal normal normal 14px/24px Quicksand;
  letter-spacing: 0.7px;
  color: #000000;
  font-weight: bold;
`;

const PriceDetails = styled.p`
  text-align: left;
  font: normal normal normal 14px/24px Quicksand;
  letter-spacing: 0.7px;
  color: #000000;
  font-weight: bold;
`;

const PriceDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(128, 128, 128, 0.3);
  border-bottom: 1px solid rgba(128, 128, 128, 0.3);
  padding: 10px 0;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;

const Add = styled(AddIcon)`
  color: #6e6868;
`;

const MoreFilterLabel = styled.p`
  font: normal normal normal 14px/24px Quicksand;
  letter-spacing: 0.7px;
  color: #000000;
  display: flex;
  cursor: pointer;
`;

const Inquiry = styled.p`
  padding: 5px 10px;

  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #768a9a;
  border-radius: 18px;
  color: white;

  :hover {
    background-color: #768a9a;
  }

  :hover ${MoreFilterLabel} {
    color: white;
  }

  :hover ${Add} {
    color: white;
  }
`;

const HeartIcon = styled(FavoriteBorderOutlinedIcon)`
  color: #a3b1be;
  cursor: pointer;
`;

const Separator = styled.span`
  padding: 0 20px;
  color: rgba(128, 128, 128, 0.3);
`;

const SpanText = styled.span`
  position: absolute;
  top: 20px;
  left: 10px;
  background: #0a3050 0% 0% no-repeat padding-box;
  border-radius: 11px;
  color: #fae46d;
  opacity: .8;
  padding: 2px 15px 1px 25px;
  display: none;
`;

const ImageContainer = styled.div`
  position: relative;

  &:hover ${SpanText} {
    display: flex;
  }
`;



const FeaturedLogo = styled.img`
  position: absolute;
  top: 20px;
  left: 10px;
  z-index: 2;

 
`;


const Main = () => {
  return (
    <Container>
      <Data>
        <ImageContainer>
          <FeaturedLogo src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1666091143/Baroque/Group_88030_l8koiv.png" />
          <SpanText>Featured</SpanText>
          <Image src="https://cdn.cnn.com/cnnnext/dam/assets/210701131326-worlds-largest-yacht--credit--winch-design-3-full-169.jpg" />
        </ImageContainer>
        <Title>MIA ELISE I</Title>
        <Details>
          <Left>
            <DetailsContainer>
              <Label>Type</Label>
              <Value>Motor Boat</Value>
            </DetailsContainer>

            <DetailsContainer>
              <Label>Builder</Label>
              <Value>John Doe</Value>
            </DetailsContainer>
          </Left>
          <Right>
            <DetailsContainer>
              <Label>Length</Label>
              <Value>110m (360 ft 11 in)</Value>
            </DetailsContainer>

            <DetailsContainer>
              <Label>Built/Refit</Label>
              <Value>2008/2020</Value>
            </DetailsContainer>
          </Right>
        </Details>
        <PriceDetailsContainer>
          <Left>
            <Price>Starting from</Price>
          </Left>
          <Right>
            <PriceDetails>USD 6,800 / day *</PriceDetails>
          </Right>
        </PriceDetailsContainer>

        <BottomContainer>
          <Left>
            <Inquiry>
              <MoreFilterLabel>
                <Add />
                Add to Inquiry List
              </MoreFilterLabel>
            </Inquiry>
          </Left>
          <RightIcons>
            <Separator>|</Separator>
            <HeartIcon />
            <Separator>|</Separator>
            <ImageIcon src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1666091142/Baroque/Group_88028_chvowo.png" />
            <Separator>|</Separator>
            <ImageIcon
              style={{ paddingTop: "3px" }}
              src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1666091142/Baroque/Group_88027_viunqy.png"
            />
          </RightIcons>
        </BottomContainer>
      </Data>

      <Data>
        <Image src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1666091140/Baroque/shutterstock_1458063419-1_uualrn.png" />
        <Title>MIA ELISE II</Title>
        <Details>
          <Left>
            <DetailsContainer>
              <Label>Type</Label>
              <Value>Motor Boat</Value>
            </DetailsContainer>

            <DetailsContainer>
              <Label>Builder</Label>
              <Value>John Doe</Value>
            </DetailsContainer>
          </Left>
          <Right>
            <DetailsContainer>
              <Label>Length</Label>
              <Value>110m (360 ft 11 in)</Value>
            </DetailsContainer>

            <DetailsContainer>
              <Label>Built/Refit</Label>
              <Value>2008/2020</Value>
            </DetailsContainer>
          </Right>
        </Details>
        <PriceDetailsContainer>
          <Left>
            <Price>Starting from</Price>
          </Left>
          <Right>
            <PriceDetails>USD 6,800 / day *</PriceDetails>
          </Right>
        </PriceDetailsContainer>

        <BottomContainer>
          <Left>
            <Inquiry>
              <MoreFilterLabel>
                <Add />
                Add to Inquiry List
              </MoreFilterLabel>
            </Inquiry>
          </Left>
          <RightIcons>
            <Separator>|</Separator>
            <HeartIcon />
            <Separator>|</Separator>
            <ImageIcon src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1666091142/Baroque/Group_88028_chvowo.png" />
            <Separator>|</Separator>
            <ImageIcon
              style={{ paddingTop: "3px" }}
              src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1666091142/Baroque/Group_88027_viunqy.png"
            />
          </RightIcons>
        </BottomContainer>
      </Data>

      <Data>
        <Image src="https://cdn.boatinternational.com/files/2022/02/24ba1820-8999-11ec-a1c7-0ff633deb58b-STATUS%20QUO_superyacht_for_sale_charter_01.jpg" />
        <Title>MIA ELISE III</Title>
        <Details>
          <Left>
            <DetailsContainer>
              <Label>Type</Label>
              <Value>Motor Boat</Value>
            </DetailsContainer>

            <DetailsContainer>
              <Label>Builder</Label>
              <Value>John Doe</Value>
            </DetailsContainer>
          </Left>
          <Right>
            <DetailsContainer>
              <Label>Length</Label>
              <Value>110m (360 ft 11 in)</Value>
            </DetailsContainer>

            <DetailsContainer>
              <Label>Built/Refit</Label>
              <Value>2008/2020</Value>
            </DetailsContainer>
          </Right>
        </Details>
        <PriceDetailsContainer>
          <Left>
            <Price>Starting from</Price>
          </Left>
          <Right>
            <PriceDetails>USD 6,800 / day *</PriceDetails>
          </Right>
        </PriceDetailsContainer>

        <BottomContainer>
          <Left>
            <Inquiry>
              <MoreFilterLabel>
                <Add />
                Add to Inquiry List
              </MoreFilterLabel>
            </Inquiry>
          </Left>
          <RightIcons>
            <Separator>|</Separator>
            <HeartIcon />
            <Separator>|</Separator>
            <ImageIcon src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1666091142/Baroque/Group_88028_chvowo.png" />
            <Separator>|</Separator>
            <ImageIcon
              style={{ paddingTop: "3px" }}
              src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1666091142/Baroque/Group_88027_viunqy.png"
            />
          </RightIcons>
        </BottomContainer>
      </Data>

      {/*  */}

      <Data>
        <ImageContainer>
          <FeaturedLogo src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1666091143/Baroque/Group_88030_l8koiv.png" />
          <Image src="https://majesty.gulfcraftinc.com/hubfs/Majesty%2062%20(redesigned)%20-%20New%20Images%20-%20April%202022/Exteriors/Majesty%2062%20-%20Profile%20(1)-1.jpeg" />
        </ImageContainer>
        <Title>MAJESTY II</Title>
        <Details>
          <Left>
            <DetailsContainer>
              <Label>Type</Label>
              <Value>Motor Boat</Value>
            </DetailsContainer>

            <DetailsContainer>
              <Label>Builder</Label>
              <Value>John Doe</Value>
            </DetailsContainer>
          </Left>
          <Right>
            <DetailsContainer>
              <Label>Length</Label>
              <Value>110m (360 ft 11 in)</Value>
            </DetailsContainer>

            <DetailsContainer>
              <Label>Built/Refit</Label>
              <Value>2008/2020</Value>
            </DetailsContainer>
          </Right>
        </Details>
        <PriceDetailsContainer>
          <Left>
            <Price>Starting from</Price>
          </Left>
          <Right>
            <PriceDetails>USD 6,800 / day *</PriceDetails>
          </Right>
        </PriceDetailsContainer>

        <BottomContainer>
          <Left>
            <Inquiry>
              <MoreFilterLabel>
                <Add />
                Add to Inquiry List
              </MoreFilterLabel>
            </Inquiry>
          </Left>
          <RightIcons>
            <Separator>|</Separator>
            <HeartIcon />
            <Separator>|</Separator>
            <ImageIcon src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1666091142/Baroque/Group_88028_chvowo.png" />
            <Separator>|</Separator>
            <ImageIcon
              style={{ paddingTop: "3px" }}
              src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1666091142/Baroque/Group_88027_viunqy.png"
            />
          </RightIcons>
        </BottomContainer>
      </Data>

      <Data>
        <Image src="https://media.fraseryachts.com/Yachts/Y46_MC_MC/images/website/Benetti_yacht_for_charter_Formosa_22555-nHJHhqpS.jpg?vh=d79e30" />
        <Title>FORMOSA</Title>
        <Details>
          <Left>
            <DetailsContainer>
              <Label>Type</Label>
              <Value>Motor Boat</Value>
            </DetailsContainer>

            <DetailsContainer>
              <Label>Builder</Label>
              <Value>John Doe</Value>
            </DetailsContainer>
          </Left>
          <Right>
            <DetailsContainer>
              <Label>Length</Label>
              <Value>110m (360 ft 11 in)</Value>
            </DetailsContainer>

            <DetailsContainer>
              <Label>Built/Refit</Label>
              <Value>2008/2020</Value>
            </DetailsContainer>
          </Right>
        </Details>
        <PriceDetailsContainer>
          <Left>
            <Price>Starting from</Price>
          </Left>
          <Right>
            <PriceDetails>USD 6,800 / day *</PriceDetails>
          </Right>
        </PriceDetailsContainer>

        <BottomContainer>
          <Left>
            <Inquiry>
              <MoreFilterLabel>
                <Add />
                Add to Inquiry List
              </MoreFilterLabel>
            </Inquiry>
          </Left>
          <RightIcons>
            <Separator>|</Separator>
            <HeartIcon />
            <Separator>|</Separator>
            <ImageIcon src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1666091142/Baroque/Group_88028_chvowo.png" />
            <Separator>|</Separator>
            <ImageIcon
              style={{ paddingTop: "3px" }}
              src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1666091142/Baroque/Group_88027_viunqy.png"
            />
          </RightIcons>
        </BottomContainer>
      </Data>

      <Data>
        <Image src="https://mydubaicruises.com/wp-content/uploads/2017/01/sea-master-9-100ft.jpg" />
        <Title>SEA MASTER</Title>
        <Details>
          <Left>
            <DetailsContainer>
              <Label>Type</Label>
              <Value>Motor Boat</Value>
            </DetailsContainer>

            <DetailsContainer>
              <Label>Builder</Label>
              <Value>John Doe</Value>
            </DetailsContainer>
          </Left>
          <Right>
            <DetailsContainer>
              <Label>Length</Label>
              <Value>110m (360 ft 11 in)</Value>
            </DetailsContainer>

            <DetailsContainer>
              <Label>Built/Refit</Label>
              <Value>2008/2020</Value>
            </DetailsContainer>
          </Right>
        </Details>
        <PriceDetailsContainer>
          <Left>
            <Price>Starting from</Price>
          </Left>
          <Right>
            <PriceDetails>USD 6,800 / day *</PriceDetails>
          </Right>
        </PriceDetailsContainer>

        <BottomContainer>
          <Left>
            <Inquiry>
              <MoreFilterLabel>
                <Add />
                Add to Inquiry List
              </MoreFilterLabel>
            </Inquiry>
          </Left>
          <RightIcons>
            <Separator>|</Separator>
            <HeartIcon />
            <Separator>|</Separator>
            <ImageIcon src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1666091142/Baroque/Group_88028_chvowo.png" />
            <Separator>|</Separator>
            <ImageIcon
              style={{ paddingTop: "3px" }}
              src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1666091142/Baroque/Group_88027_viunqy.png"
            />
          </RightIcons>
        </BottomContainer>
      </Data>

      {/*  */}

      <Data>
        <ImageContainer>
          <FeaturedLogo src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1666091143/Baroque/Group_88030_l8koiv.png" />
          <Image src="https://cdn.boatinternational.com/files/2022/02/24ba1820-8999-11ec-a1c7-0ff633deb58b-STATUS%20QUO_superyacht_for_sale_charter_01.jpg" />
        </ImageContainer>
        <Title>SUPER YACHT</Title>
        <Details>
          <Left>
            <DetailsContainer>
              <Label>Type</Label>
              <Value>Motor Boat</Value>
            </DetailsContainer>

            <DetailsContainer>
              <Label>Builder</Label>
              <Value>John Doe</Value>
            </DetailsContainer>
          </Left>
          <Right>
            <DetailsContainer>
              <Label>Length</Label>
              <Value>110m (360 ft 11 in)</Value>
            </DetailsContainer>

            <DetailsContainer>
              <Label>Built/Refit</Label>
              <Value>2008/2020</Value>
            </DetailsContainer>
          </Right>
        </Details>
        <PriceDetailsContainer>
          <Left>
            <Price>Starting from</Price>
          </Left>
          <Right>
            <PriceDetails>USD 6,800 / day *</PriceDetails>
          </Right>
        </PriceDetailsContainer>

        <BottomContainer>
          <Left>
            <Inquiry>
              <MoreFilterLabel>
                <Add />
                Add to Inquiry List
              </MoreFilterLabel>
            </Inquiry>
          </Left>
          <RightIcons>
            <Separator>|</Separator>
            <HeartIcon />
            <Separator>|</Separator>
            <ImageIcon src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1666091142/Baroque/Group_88028_chvowo.png" />
            <Separator>|</Separator>
            <ImageIcon
              style={{ paddingTop: "3px" }}
              src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1666091142/Baroque/Group_88027_viunqy.png"
            />
          </RightIcons>
        </BottomContainer>
      </Data>

      <Data>
        <Image src="https://www.centauruscharter.com/product/galleryimages/1652105258Majesty%20101%201.jpg" />
        <Title>MAJESTY</Title>
        <Details>
          <Left>
            <DetailsContainer>
              <Label>Type</Label>
              <Value>Motor Boat</Value>
            </DetailsContainer>

            <DetailsContainer>
              <Label>Builder</Label>
              <Value>John Doe</Value>
            </DetailsContainer>
          </Left>
          <Right>
            <DetailsContainer>
              <Label>Length</Label>
              <Value>110m (360 ft 11 in)</Value>
            </DetailsContainer>

            <DetailsContainer>
              <Label>Built/Refit</Label>
              <Value>2008/2020</Value>
            </DetailsContainer>
          </Right>
        </Details>
        <PriceDetailsContainer>
          <Left>
            <Price>Starting from</Price>
          </Left>
          <Right>
            <PriceDetails>USD 6,800 / day *</PriceDetails>
          </Right>
        </PriceDetailsContainer>

        <BottomContainer>
          <Left>
            <Inquiry>
              <MoreFilterLabel>
                <Add />
                Add to Inquiry List
              </MoreFilterLabel>
            </Inquiry>
          </Left>
          <RightIcons>
            <Separator>|</Separator>
            <HeartIcon />
            <Separator>|</Separator>
            <ImageIcon src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1666091142/Baroque/Group_88028_chvowo.png" />
            <Separator>|</Separator>
            <ImageIcon
              style={{ paddingTop: "3px" }}
              src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1666091142/Baroque/Group_88027_viunqy.png"
            />
          </RightIcons>
        </BottomContainer>
      </Data>

      <Data>
        <Image src="https://frg-fwm.azurewebsites.net/asset/fwm/Upload/Models/Images/Main/Ferretti/61428.jpg" />
        <Title>FERRETTI</Title>
        <Details>
          <Left>
            <DetailsContainer>
              <Label>Type</Label>
              <Value>Motor Boat</Value>
            </DetailsContainer>

            <DetailsContainer>
              <Label>Builder</Label>
              <Value>John Doe</Value>
            </DetailsContainer>
          </Left>
          <Right>
            <DetailsContainer>
              <Label>Length</Label>
              <Value>110m (360 ft 11 in)</Value>
            </DetailsContainer>

            <DetailsContainer>
              <Label>Built/Refit</Label>
              <Value>2008/2020</Value>
            </DetailsContainer>
          </Right>
        </Details>
        <PriceDetailsContainer>
          <Left>
            <Price>Starting from</Price>
          </Left>
          <Right>
            <PriceDetails>USD 6,800 / day *</PriceDetails>
          </Right>
        </PriceDetailsContainer>

        <BottomContainer>
          <Left>
            <Inquiry>
              <MoreFilterLabel>
                <Add />
                Add to Inquiry List
              </MoreFilterLabel>
            </Inquiry>
          </Left>
          <RightIcons>
            <Separator>|</Separator>
            <HeartIcon />
            <Separator>|</Separator>
            <ImageIcon src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1666091142/Baroque/Group_88028_chvowo.png" />
            <Separator>|</Separator>
            <ImageIcon
              style={{ paddingTop: "3px" }}
              src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1666091142/Baroque/Group_88027_viunqy.png"
            />
          </RightIcons>
        </BottomContainer>
      </Data>
    </Container>
  );
};

export default Main;
