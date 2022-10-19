import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 10px 10px 10px;
`;

const LengthForContainer = styled.div`
  flex: 0.1;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;

const LookingForContainer = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;

const LocationContainer = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;

const DateContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`;

const MinMaxContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  border: 0.800000011920929px solid #e4e4e4;
  border-radius: 18px;
  margin-top: 40px;
`;

const GuestContainer = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;

const YachtNameContainer = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;

const FeaturedOnlyContainer = styled.div`
  flex: 0.5;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;

const StyledSelect = styled.select`
  max-width: 90%;
  height: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 0.800000011920929px solid #e4e4e4;
  border-radius: 18px;
  opacity: 1;

  text-align: left;
  font: normal normal normal 14px/24px Quicksand;
  letter-spacing: 0.7px;
  color: #000000;

  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background: url("data:image/svg+xml;utf8,<svg viewBox='0 0 140 140' width='16' height='16' xmlns='http://www.w3.org/2000/svg'><g><path d='m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z' fill='gray'/></g></svg>")
    no-repeat;
  background-position: right 5px top 50%;
`;

const StyledOption = styled.option`
  color: ${(props) => (props.selected ? "lightgrey" : "black")};
  text-align: left;
  font: normal normal normal 14px/24px Quicksand;
  letter-spacing: 0.7px;
  color: #000000;
  padding: 10px;
`;

export const StyledLabel = styled.label`
  margin-bottom: 1rem;
`;

export const Label = styled.p`
  padding: 8px 0;
  font: normal normal normal 14px/24px Quicksand;
  letter-spacing: 0.7px;
  color: #000000;
  display: flex;
`;

export const Labels = styled.p`
  padding: 8px 0;
  font: normal normal normal 14px/24px Quicksand;
  letter-spacing: 0.7px;
  color: #000000;
  display: flex;
  padding-top: 50px;
`;

const Separator = styled.span`
  padding: 0 20px;
  color: rgba(128, 128, 128, 0.3);
`;

const DropDownContainer = styled("div")`
  width: 90%;
`;

const DropDownHeader = styled("div")`
  max-width: 90%;
  height: 100%;
  padding: 0.5rem;
  margin-bottom: 5px;
  border: 0.800000011920929px solid #e4e4e4;
  border-radius: 18px;
  opacity: 1;

  text-align: left;
  font: normal normal normal 14px/24px Quicksand;
  letter-spacing: 0.7px;
  color: #000000;

  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background: url("data:image/svg+xml;utf8,<svg viewBox='0 0 140 140' width='16' height='16' xmlns='http://www.w3.org/2000/svg'><g><path d='m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z' fill='gray'/></g></svg>")
    no-repeat;
  background-position: right 5px top 50%;

  cursor: pointer;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  position: absolute;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 3px 6px 14px #00000019;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  padding: 20px 50px 20px 20px;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  padding: 5px 0;
  text-align: left;
  font: normal normal normal 14px/24px Quicksand;
  letter-spacing: 0.7px;
  color: #000000;
`;

const AdditionalFilter = () => {
  const [isFilter, setIsFilter] = useState(false);
  const [isYacht, setIsYacht] = useState(false);
  const [isBuilder, setIsBuilder] = useState(false);
  const [isBuilt, setIsBuilt] = useState(false);
  const [isRefit, setIsRefit] = useState(false);
  const [isLength, setIsLength] = useState(false);
  const [isPrice, setIsPrice] = useState(false);
  const [isToys, setIsToys] = useState(false);
  const [isAmenities, setIsAmenities] = useState(false);
  
  return (
    <>
      <Container>
        <LookingForContainer>
          <Label>Filter by</Label>
          <DropDownContainer>
            <DropDownHeader onClick={() => setIsFilter(!isFilter)}>
              Featured only
            </DropDownHeader>
            {isFilter && (
              <DropDownListContainer>
                <DropDownList style={{ paddingRight: "120px" }}>
                  <ListItem style={{ fontWeight: "bold" }}>
                    Featured only
                  </ListItem>
                  <ListItem>Featured only 1</ListItem>
                  <ListItem>Featured only 2</ListItem>
                  <ListItem>Featured only 3</ListItem>
                </DropDownList>
              </DropDownListContainer>
            )}
          </DropDownContainer>
        </LookingForContainer>
        <LocationContainer>
          <Label>Yacht type</Label>
          <DropDownContainer>
            <DropDownHeader onClick={() => setIsYacht(!isYacht)}>
              Both
            </DropDownHeader>
            {isYacht && (
              <DropDownListContainer>
                <DropDownList style={{ paddingRight: "120px" }}>
                  <ListItem style={{ fontWeight: "bold" }}>Both</ListItem>
                  <ListItem>Sailing Yacht</ListItem>
                  <ListItem>Motor Yacht</ListItem>
                  <ListItem>Gulet Yacht</ListItem>
                </DropDownList>
              </DropDownListContainer>
            )}
          </DropDownContainer>
        </LocationContainer>
        <GuestContainer>
          <Label>Builder</Label>
          <DropDownContainer>
            <DropDownHeader onClick={() => setIsBuilder(!isBuilder)}>
              Any
            </DropDownHeader>
            {isBuilder && (
              <DropDownListContainer>
                <DropDownList style={{ paddingRight: "120px" }}>
                  <ListItem style={{ fontWeight: "bold" }}>Any</ListItem>
                  <ListItem>Builder 1</ListItem>
                  <ListItem>Builder 2</ListItem>
                  <ListItem>Builder 3</ListItem>
                </DropDownList>
              </DropDownListContainer>
            )}
          </DropDownContainer>
        </GuestContainer>
        <YachtNameContainer>
          <Label>Built</Label>
          <DropDownContainer>
            <DropDownHeader onClick={() => setIsBuilt(!isBuilt)}>
              Any
            </DropDownHeader>
            {isBuilt && (
              <DropDownListContainer>
                <DropDownList style={{ paddingRight: "160px" }}>
                  <ListItem style={{ fontWeight: "bold" }}>Any</ListItem>
                  <ListItem>Built 1</ListItem>
                  <ListItem>Built 2</ListItem>
                  <ListItem>Built 3</ListItem>
                </DropDownList>
              </DropDownListContainer>
            )}
          </DropDownContainer>
        </YachtNameContainer>
        <YachtNameContainer>
          <Label>Refit</Label>
          <DropDownContainer>
            <DropDownHeader onClick={() => setIsRefit(!isRefit)}>
              Any
            </DropDownHeader>
            {isRefit && (
              <DropDownListContainer>
                <DropDownList style={{ paddingRight: "160px" }}>
                  <ListItem style={{ fontWeight: "bold" }}>Any</ListItem>
                  <ListItem>Refit 1</ListItem>
                  <ListItem>Refit 2</ListItem>
                  <ListItem>Refit 3</ListItem>
                </DropDownList>
              </DropDownListContainer>
            )}
          </DropDownContainer>
        </YachtNameContainer>
        <FeaturedOnlyContainer></FeaturedOnlyContainer>
      </Container>

      {/* SECOND ADD ON FILTER */}
      <Container>
        <LengthForContainer>
          <Label>Length</Label>
          <DropDownContainer>
            <DropDownHeader
              onClick={() => setIsLength(!isLength)}
              style={{ paddingRight: "50px" }}
            >
              Ft
            </DropDownHeader>
            {isLength && (
              <DropDownListContainer>
                <DropDownList>
                  <ListItem style={{ fontWeight: "bold" }}>Ft</ListItem>
                  <ListItem>Inch</ListItem>
                  <ListItem>Meter</ListItem>
                  <ListItem>Kilometer</ListItem>
                </DropDownList>
              </DropDownListContainer>
            )}
          </DropDownContainer>
        </LengthForContainer>
        <DateContainer>
          <MinMaxContainer>
            <Label>Minimum</Label>
            <Separator>|</Separator>
            <Label>Maximum</Label>
          </MinMaxContainer>
        </DateContainer>
        <LengthForContainer>
          <Label>Price</Label>
          <DropDownContainer>
            <DropDownHeader
              onClick={() => setIsPrice(!isPrice)}
              style={{ paddingRight: "50px" }}
            >
              USD
            </DropDownHeader>
            {isPrice && (
              <DropDownListContainer>
                <DropDownList>
                  <ListItem style={{ fontWeight: "bold" }}>USD</ListItem>
                  <ListItem>AED</ListItem>
                  <ListItem>PHP</ListItem>
                  <ListItem>EUR</ListItem>
                </DropDownList>
              </DropDownListContainer>
            )}
          </DropDownContainer>
        </LengthForContainer>
        <DateContainer>
          <MinMaxContainer>
            <Label>Minimum</Label>
            <Separator>|</Separator>
            <Label>Maximum</Label>
          </MinMaxContainer>
        </DateContainer>
        <YachtNameContainer>
          <Label>Toys</Label>
          <DropDownContainer>
            <DropDownHeader onClick={() => setIsToys(!isToys)}>
              Any
            </DropDownHeader>
            {isToys && (
              <DropDownListContainer>
                <DropDownList style={{ paddingRight: "180px" }}>
                  <ListItem style={{ fontWeight: "bold" }}>Any</ListItem>
                  <ListItem>Toys 1</ListItem>
                  <ListItem>Toys 2</ListItem>
                  <ListItem>Toys 3</ListItem>
                </DropDownList>
              </DropDownListContainer>
            )}
          </DropDownContainer>
        </YachtNameContainer>
        <YachtNameContainer>
          <Label>Amenities</Label>
          <DropDownContainer>
            <DropDownHeader onClick={() => setIsAmenities(!isAmenities)}>
              Any
            </DropDownHeader>
            {isAmenities && (
              <DropDownListContainer>
                <DropDownList style={{ paddingRight: "180px" }}>
                  <ListItem style={{ fontWeight: "bold" }}>Any</ListItem>
                  <ListItem>Amenities 1</ListItem>
                  <ListItem>Amenities 2</ListItem>
                  <ListItem>Amenities 3</ListItem>
                </DropDownList>
              </DropDownListContainer>
            )}
          </DropDownContainer>
        </YachtNameContainer>
      </Container>
    </>
  );
};

export default AdditionalFilter;
