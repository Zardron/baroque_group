import React, { useState } from "react";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import AdditionalFilter from "./AdditionalFIlter";
import Carousel from "./Carousel";
import Card from "./Card";
import Slider from "react-slick";

import LeftArrow from "../assets/left-arrow.svg";
import RightArrow from "../assets/right-arrow.svg";

const Container = styled.div`
  display: flex;
  align-items: center;
  align-items: flex-start;
  border-top: 1px solid rgba(128, 128, 128, 0.3);
  padding: 0 10px;
`;

const DefaultContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid rgba(128, 128, 128, 0.3);
  margin: 0 10px;
`;

const FilterContainer = styled.div`
  display: flex;
  flex: 2.5;
  align-items: center;
  align-items: flex-start;
`;

const CarouselContainer = styled.div`
  display: flex;
  flex: 0.5;
  align-items: center;
  align-items: flex-start;
  padding-top: 10px;
`;

const YachtNameContainer = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;

const SortContainer = styled.div`
  flex: 0.3;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;

const MoreFilterContainer = styled.div`
  flex: 0.5;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;

const SearchContainer = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`;

export const Label = styled.p`
  padding: 8px 0;
  font: normal normal normal 12px/24px Quicksand;
  letter-spacing: 0.7px;
  color: white;
  display: flex;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Separator = styled.span`
  padding: 0 10px;
  color: white;
  &:hover {
    color: white;
  }
`;

const DateValueContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchValueContainer = styled.div`
  margin-top: 1rem;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  border: 0.800000011920929px solid #e4e4e4;
  border-radius: 19px;
  background-color: #0a3050;

  &:hover {
    background-color: white;
  }

  &:hover ${Label} {
    color: black;
  }

  &:hover ${Separator} {
    color: black;
  }
`;

const Value = styled.div`
  margin-top: 1rem;
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  padding: 0 10px;
  margin: 16px 10px;
  border: 0.800000011920929px solid #e4e4e4;
  border-radius: 19px;
  background-color: #768a9a;
`;

const Null = styled.div`
  margin-top: 1rem;
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  padding: 0 10px;
  margin: 16px 10px;
  border: none;
  border-radius: 19px;
  background-color: none;
`;

const AddOnContainer = styled.div`
  flex: 1.5;
  display: grid;
  grid-template-columns: auto auto auto auto;
`;

const ExtraContainer = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: flex-start;
  padding-left: 10px;
  padding-top: 25px;
`;

const ExtraContainers = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: flex-start;
  padding-left: 10px;
`;

export const StyledLabel = styled.label`
  margin-bottom: 1rem;
`;

export const MoreFilterLabel = styled.p`
  padding: 8px 20px;
  font: normal normal normal 12px/24px Quicksand;
  letter-spacing: 0.7px;
  display: flex;
  border: 0.800000011920929px solid #e4e4e4;
  border-radius: 19px;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  width: 100%;
  cursor: pointer;
`;

export const Labels = styled.p`
  padding: 8px 0;
  font: normal normal normal 14px/24px Quicksand;
  letter-spacing: 0.7px;
  color: #000000;
  display: flex;
  padding-top: 50px;
`;

export const Daily = styled.p`
  padding: 8px 0;
  font: normal normal normal 12px/24px Quicksand;
  letter-spacing: 0.7px;
  color: #ffffff;
  display: flex;
  border: 0.800000011920929px solid #e4e4e4;
  border-radius: 19px;
  background-color: #768a9a;
  padding-left: 10px;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
`;

export const XIcon = styled(CloseIcon)`
  margin-right: 5px;
  color: #e4e4e4;
  opacity: 0.3;
  display: flex;
  font-size: 8px;
  padding-top: 2px;
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
  border-radius: 19px;
  opacity: 1;
  margin-top: 1rem;

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
  z-index: 99;

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

const MoreFilter = () => {
  const [filter, setFilter] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  console.log(filter);

  const openFilter = () => {
    setFilter(!filter);
  };

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" {...props} />
  );
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  return (
    <>
      <div className="container">
        {filter ? <AdditionalFilter props={filter} /> : ""}

        {filter ? (
          <>
            <Container>
              <SortContainer>
                <DropDownContainer>
                  <DropDownHeader onClick={toggling}>Sort</DropDownHeader>
                  {isOpen && (
                    <DropDownListContainer>
                      <DropDownList>
                        <ListItem style={{ fontWeight: "bold" }}>
                          Price Low to High
                        </ListItem>
                        <ListItem>Price High to Low</ListItem>
                        <ListItem>Length Small to Big</ListItem>
                        <ListItem>Length Big to Small</ListItem>
                      </DropDownList>
                    </DropDownListContainer>
                  )}
                </DropDownContainer>
              </SortContainer>
              <MoreFilterContainer>
                <DateValueContainer>
                  <MoreFilterLabel onClick={openFilter}>
                    {!filter ? "More filters" : "Less filters"}
                    {!filter ? (
                      <AddIcon
                        style={{ color: "#6e6868", textAlign: "Right" }}
                      />
                    ) : (
                      <RemoveIcon style={{ color: "#6e6868" }} />
                    )}
                  </MoreFilterLabel>
                </DateValueContainer>
              </MoreFilterContainer>
              <SearchContainer>
                <SearchValueContainer>
                  <Label>Search</Label>
                  <Separator>|</Separator>
                  <Label>152 results</Label>
                </SearchValueContainer>
              </SearchContainer>
              <AddOnContainer>
                <YachtNameContainer>
                  <Value>
                    <Label>
                      Daily{" "}
                      <CloseIcon
                        fontSize="small"
                        style={{
                          color: "rgba(255,255,255,.3)",
                        }}
                      />
                    </Label>
                  </Value>
                  <Value>
                    <Label>
                      Refit{" "}
                      <CloseIcon
                        fontSize="small"
                        style={{
                          color: "rgba(255,255,255,.3)",
                        }}
                      />
                    </Label>
                  </Value>
                </YachtNameContainer>
                <YachtNameContainer>
                  <Value>
                    <Label>
                      Built{" "}
                      <CloseIcon
                        fontSize="small"
                        style={{
                          color: "rgba(255,255,255,.3)",
                        }}
                      />
                    </Label>
                  </Value>
                  <Value>
                    <Label>
                      Price{" "}
                      <CloseIcon
                        fontSize="small"
                        style={{
                          color: "rgba(255,255,255,.3)",
                        }}
                      />
                    </Label>
                  </Value>
                </YachtNameContainer>
                <YachtNameContainer>
                  <Value>
                    <Label>
                      Indian Ocean
                      <CloseIcon
                        fontSize="small"
                        style={{
                          color: "rgba(255,255,255,.3)",
                          cursor: "pointer",
                        }}
                      />
                    </Label>
                  </Value>
                  <Value>
                    <Label>
                      Builder{" "}
                      <CloseIcon
                        fontSize="small"
                        style={{
                          color: "rgba(255,255,255,.3)",
                          cursor: "pointer",
                        }}
                      />
                    </Label>
                  </Value>
                </YachtNameContainer>
                <YachtNameContainer>
                  <Value>
                    <Label>
                      Built{" "}
                      <CloseIcon
                        fontSize="small"
                        style={{
                          color: "rgba(255,255,255,.3)",
                        }}
                      />
                    </Label>
                  </Value>
                  <Null>
                    <Label></Label>
                  </Null>
                </YachtNameContainer>
              </AddOnContainer>
              <ExtraContainer>
                <a href="/" style={{ color: "blue" }}>
                  Clear all
                </a>
              </ExtraContainer>
            </Container>
          </>
        ) : (
          <>
            <DefaultContainer>
              <FilterContainer>
                <SortContainer>
                  <DropDownContainer>
                    <DropDownHeader onClick={toggling}>Sort</DropDownHeader>
                    {isOpen && (
                      <DropDownListContainer>
                        <DropDownList>
                          <ListItem style={{ fontWeight: "bold" }}>
                            Price Low to High
                          </ListItem>
                          <ListItem>Price High to Low</ListItem>
                          <ListItem>Length Small to Big</ListItem>
                          <ListItem>Length Big to Small</ListItem>
                        </DropDownList>
                      </DropDownListContainer>
                    )}
                  </DropDownContainer>
                </SortContainer>
                <MoreFilterContainer>
                  <DateValueContainer>
                    <MoreFilterLabel onClick={openFilter}>
                      {!filter ? "More filters" : "Less filters"}
                      {!filter ? (
                        <AddIcon
                          style={{ color: "#6e6868", textAlign: "Right" }}
                        />
                      ) : (
                        <RemoveIcon style={{ color: "#6e6868" }} />
                      )}
                    </MoreFilterLabel>
                  </DateValueContainer>
                </MoreFilterContainer>
                <SearchContainer>
                  <SearchValueContainer>
                    <Label>Search</Label>
                    <Separator>|</Separator>
                    <Label>152 results</Label>
                  </SearchValueContainer>
                </SearchContainer>
              </FilterContainer>
              <CarouselContainer>
              <Slider {...settings}>
              <div  style={{ width: 75 }}>
          <span>Daily</span>
        </div>
      </Slider>
              </CarouselContainer>
              <ExtraContainers>
                <a href="/" style={{ color: "blue" }}>
                  Clear all
                </a>
              </ExtraContainers>
            </DefaultContainer>
          </>
        )}
      </div>
    </>
  );
};

export default MoreFilter;
