import styled from "styled-components";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import React, {  useState } from "react";
import "./Filter.css";
import FeaturedOnly from "./FeatureOnly";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 10px 10px 10px;
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

const DateValueContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4px;
  padding: 8px 10px;
  border: 0.800000011920929px solid #e4e4e4;
  border-radius: 18px;
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
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  padding-top: 35px;
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
  padding-top: 35px;
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
  margin-top: 0.2rem;

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
  padding: 20px 30px 20px 30px;
  z-index: 2;
  cursor: pointer;
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

const ListItemYacht = styled("li")`
  list-style: none;
  padding: 5px 0;
  text-align: left;
  font: normal normal normal 14px/24px Quicksand;
  letter-spacing: 0.7px;
  color: #000000;
  padding-left: 30px;
`;

const Filter = ({ props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLocation, setIsLocation] = useState(false);
  const [isGuest, setIsGuest] = useState(false);
  const [isYacht, setIsYacht] = useState(false);
  const [checked, setChecked] = useState(true);

  return (
    <>
      {/* id="mainHeader" ref={stickyHeader} */}
      <Container>
        <LookingForContainer>
          <Label>Looking for</Label>
          <DropDownContainer>
            <DropDownHeader onClick={() => setIsOpen(!isOpen)}>
              Weekly Charter
            </DropDownHeader>
            {isOpen && (
              <DropDownListContainer>
                <DropDownList>
                  <ListItem style={{ fontWeight: "bold" }}>
                    Weekly Charter
                  </ListItem>
                  <ListItem>Weekly Charter Value 1</ListItem>
                  <ListItem>Weekly Charter Value 2</ListItem>
                  <ListItem>Weekly Charter Value 3</ListItem>
                </DropDownList>
              </DropDownListContainer>
            )}
          </DropDownContainer>
        </LookingForContainer>
        <LocationContainer>
          <Label>Location</Label>
          <DropDownContainer>
            <DropDownHeader onClick={() => setIsLocation(!isLocation)}>
              Any
            </DropDownHeader>
            {isLocation && (
              <DropDownListContainer>
                <DropDownList style={{paddingRight: "100px"}}>
                  <ListItem style={{ fontWeight: "bold" }}>Any</ListItem>
                  <ListItem>Location 1</ListItem>
                  <ListItem>Location 2</ListItem>
                  <ListItem>Location 3</ListItem>
                </DropDownList>
              </DropDownListContainer>
            )}
          </DropDownContainer>
        </LocationContainer>
        <DateContainer>
          <Label>Date</Label>
          <DateValueContainer>
            <Label>05/09/2022</Label>
            <Separator>|</Separator>
            <Label>17/09/2022</Label>
          </DateValueContainer>
        </DateContainer>
        <GuestContainer>
          <Label>Guest</Label>
          <DropDownContainer>
            <DropDownHeader onClick={() => setIsGuest(!isGuest)}>
              Guest
            </DropDownHeader>
            {isGuest && (
              <DropDownListContainer>
                <DropDownList  style={{paddingRight: "120px"}}>
                  <ListItem style={{ fontWeight: "bold" }}>Guest</ListItem>
                  <ListItem>Guest 1</ListItem>
                  <ListItem>Guest 2</ListItem>
                  <ListItem>Guest 3</ListItem>
                </DropDownList>
              </DropDownListContainer>
            )}
          </DropDownContainer>
        </GuestContainer>
        <YachtNameContainer>
          <Label>Yacht name</Label>
          <DropDownHeader onClick={() => setIsYacht(!isYacht)}>
            Any
          </DropDownHeader>
          {isYacht && (
            <DropDownListContainer>
              <DropDownList  style={{paddingRight: "140px"}}>
                <ListItem>Suggestion</ListItem>
                <ListItemYacht>Sunray</ListItemYacht>
                <ListItemYacht>Silver</ListItemYacht>
                <ListItemYacht>Q</ListItemYacht>
              </DropDownList>
            </DropDownListContainer>
          )}
        </YachtNameContainer>
        <FeaturedOnlyContainer>
        <div style={{ fontFamily: "system-ui", padding: "0 10px" }}>
          <label>
            <FeaturedOnly checked={checked} onChange={() => setChecked(!checked)} />
            <span
              style={{
                marginLeft: 8,
                font: "normal normal normal 14px/24px Quicksand",
                color: "black",
              }}
            >
              Featured only
            </span>
          </label>
        </div>
        </FeaturedOnlyContainer>
      </Container>
    </>
  );
};

export default Filter;
