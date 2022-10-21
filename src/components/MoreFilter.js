import React, { useState } from "react";
import Slider from "react-slick";

import LeftArrow from "../assets/left-arrow.svg";
import RightArrow from "../assets/right-arrow.svg";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import AdditionalFilter from "./AdditionalFIlter";

const YachtNameContainers = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  padding-top: 5px;
`;

const SortContainers = styled.div`
  flex: 0.7;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 20px;
`;

const MoreFilterContainers = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;

const SearchContainers = styled.div`
  flex: 1.3;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`;

export const Labels = styled.p`
  padding: 8px 0;
  font: normal normal normal 14px/24px Quicksand;
  letter-spacing: 0.7px;
  color: white;
  display: flex;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Separators = styled.span`
  padding: 0 10px;
  color: white;
  &:hover {
    color: white;
  }
`;

const DateValueContainers = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchValueContainers = styled.div`
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

  &:hover ${Labels} {
    color: black;
  }

  &:hover ${Separators} {
    color: black;
  }
`;

const Values = styled.div`
  margin-top: 1rem;
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  padding: 0 10px;
  margin: 16px 10px;
  border: 0.800000011920929px solid #e4e4e4;
  border-radius: 20px;
  background-color: #768a9a;
`;

const Nulls = styled.div`
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

const AddOnContainers = styled.div`
  flex: 1.5;
  display: grid;
  grid-template-columns: auto auto auto auto;
`;

export const StyledLabels = styled.label`
  margin-bottom: 1rem;
`;

export const MoreFilterLabels = styled.p`
  padding: 8px 10px;
  font: normal normal normal 14px/24px Quicksand;
  letter-spacing: 0.7px;
  display: flex;
  border: 0.800000011920929px solid #e4e4e4;
  border-radius: 19px;
  display: flex;
  font-weight: 500;
  width: auto;
  cursor: pointer;
`;

export const Labelss = styled.p`
  padding: 8px 0;
  font: normal normal normal 14px/24px Quicksand;
  letter-spacing: 0.7px;
  color: #000000;
  display: flex;
  padding-top: 50px;
`;

export const Dailys = styled.p`
  padding: 8px 0;
  font: normal normal normal 14px/24px Quicksand;
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

const DropDownContainers = styled("div")`
  width: 90%;
`;

const DropDownHeaders = styled("div")`
  max-width: 90%;
  height: 100%;
  padding: 0.5rem;
  margin-bottom: 5px;
  border: 0.800000011920929px solid #e4e4e4;
  border-radius: 19px;
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

const DropDownListContainers = styled("div")``;

const DropDownLists = styled("ul")`
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

const ListItems = styled("li")`
  list-style: none;
  padding: 7px 0;
  text-align: left;
  font: normal normal normal 14px/24px Quicksand;
  letter-spacing: 0.7px;
  color: #000000;

  &:hover {
    font: normal normal 600 14px/24px Quicksand;
  }
`;

const Spans = styled("span")`
  list-style: none;
  text-align: left;
  font: normal normal normal 14px/24px Quicksand;
  letter-spacing: 0.7px;
  color: #000000;
  cursor: pointer;

  &:hover {
    padding-bottom: 7px;
    font: normal normal 600 14px/24px Quicksand;
    border-bottom: 1px solid rgba(128, 128, 128, 0.3);
  }
`;

const MoreFilter = ({ handleLocation }) => {
  const [filter, setFilter] = useState(false);
  const [isOpens, setIsOpens] = useState(false);
  const toggling = () => setIsOpens(!isOpens);

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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };
  return (
    <>
      {filter ? <AdditionalFilter props={filter} /> : ""}

      {filter ? (
        <>
          <div
            class="row"
            style={{
              padding: "0px 10px 0px 10px",
              borderTop: "1px solid rgba(128, 128, 128, 0.3)",
            }}
          >
            <div class="column1">
              <SortContainers>
                <DropDownContainers>
                  <DropDownHeaders onClick={toggling}>Sort</DropDownHeaders>
                  {isOpens && (
                    <DropDownListContainers>
                      <DropDownLists>
                        <ListItems>
                          <Spans>Price Low to High</Spans>
                        </ListItems>
                        <ListItems>
                          <Spans>Price High to Low</Spans>
                        </ListItems>
                        <ListItems>
                          <Spans>Length Small to Big</Spans>
                        </ListItems>
                        <ListItems>
                          <Spans>Length Big to Small</Spans>
                        </ListItems>
                      </DropDownLists>
                    </DropDownListContainers>
                  )}
                </DropDownContainers>
              </SortContainers>
              <MoreFilterContainers>
                <DateValueContainers>
                  <MoreFilterLabels onClick={openFilter}>
                    {!filter ? "More filters" : "Less filters"}
                    {!filter ? (
                      <span style={{ paddingLeft: "10px" }}>+</span>
                    ) : (
                      <span style={{ paddingLeft: "10px" }}>-</span>
                    )}
                  </MoreFilterLabels>
                </DateValueContainers>
              </MoreFilterContainers>
              <SearchContainers>
                <SearchValueContainers>
                  <Labels>Search</Labels>
                  <Separators>|</Separators>
                  <Labels>152 results</Labels>
                </SearchValueContainers>
              </SearchContainers>
            </div>
            <div class="column2">
              <AddOnContainers>
                <YachtNameContainers>
                  <Values>
                    <Labels>
                      Daily{" "}
                      <CloseIcon
                        fontSize="small"
                        style={{
                          color: "rgba(255,255,255,.3)",
                        }}
                      />
                    </Labels>
                  </Values>
                  <Values>
                    <Labels>
                      Refit{" "}
                      <CloseIcon
                        fontSize="small"
                        style={{
                          color: "rgba(255,255,255,.3)",
                        }}
                      />
                    </Labels>
                  </Values>
                </YachtNameContainers>
                <YachtNameContainers>
                  <Values>
                    <Labels>
                      Built{" "}
                      <CloseIcon
                        fontSize="small"
                        style={{
                          color: "rgba(255,255,255,.3)",
                        }}
                      />
                    </Labels>
                  </Values>
                  <Values>
                    <Labels>
                      Price{" "}
                      <CloseIcon
                        fontSize="small"
                        style={{
                          color: "rgba(255,255,255,.3)",
                        }}
                      />
                    </Labels>
                  </Values>
                </YachtNameContainers>
                <YachtNameContainers>
                  <Values>
                    <Labels>
                      Indian Ocean
                      <CloseIcon
                        fontSize="small"
                        style={{
                          color: "rgba(255,255,255,.3)",
                          cursor: "pointer",
                        }}
                      />
                    </Labels>
                  </Values>
                  <Values>
                    <Labels>
                      Builder{" "}
                      <CloseIcon
                        fontSize="small"
                        style={{
                          color: "rgba(255,255,255,.3)",
                          cursor: "pointer",
                        }}
                      />
                    </Labels>
                  </Values>
                </YachtNameContainers>
                <YachtNameContainers>
                  <Values>
                    <Labels>
                      Built{" "}
                      <CloseIcon
                        fontSize="small"
                        style={{
                          color: "rgba(255,255,255,.3)",
                        }}
                      />
                    </Labels>
                  </Values>
                  <Nulls>
                    <Labels></Labels>
                  </Nulls>
                </YachtNameContainers>
              </AddOnContainers>
            </div>
            <div class="column3">
              <a href="/" style={{ color: "blue", padding: "30px 0px" }}>
                Clear all
              </a>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            class="row"
            style={{
              padding: "0px 10px 0px 10px",
              borderTop: "1px solid rgba(128, 128, 128, 0.3)",
            }}
          >
            <div class="column1">
              <SortContainers>
                <DropDownContainers>
                  <DropDownHeaders onClick={toggling}>Sort</DropDownHeaders>
                  {isOpens && (
                    <DropDownListContainers>
                      <DropDownLists>
                        <ListItems>
                          <Spans>Price Low to High</Spans>
                        </ListItems>
                        <ListItems>
                          <Spans>Price High to Low</Spans>
                        </ListItems>
                        <ListItems>
                          <Spans>Length Small to Big</Spans>
                        </ListItems>
                        <ListItems>
                          <Spans>Length Big to Small</Spans>
                        </ListItems>
                      </DropDownLists>
                    </DropDownListContainers>
                  )}
                </DropDownContainers>
              </SortContainers>
              <MoreFilterContainers>
                <DateValueContainers>
                  <MoreFilterLabels onClick={openFilter}>
                    {!filter ? "More filters" : "Less filters"}
                    {!filter ? (
                      <span style={{ paddingLeft: "10px" }}>+</span>
                    ) : (
                      <span style={{ paddingLeft: "10px" }}>-</span>
                    )}
                  </MoreFilterLabels>
                </DateValueContainers>
              </MoreFilterContainers>
              <SearchContainers>
                <SearchValueContainers>
                  <Labels>Search</Labels>
                  <Separators>|</Separators>
                  <Labels>152 results</Labels>
                </SearchValueContainers>
              </SearchContainers>
            </div>
            <div class="column2">
              <Slider {...settings} style={{ paddingTop: "5px" }}>
                <div style={{ width: 100 }}>
                  <Values>
                    <Labels>
                      Daily{" "}
                      <CloseIcon
                        fontSize="small"
                        style={{
                          color: "rgba(255,255,255,.3)",
                        }}
                      />
                    </Labels>
                  </Values>
                </div>
                <div style={{ width: 100 }}>
                  <Values>
                    <Labels>
                      Built{" "}
                      <CloseIcon
                        fontSize="small"
                        style={{
                          color: "rgba(255,255,255,.3)",
                        }}
                      />
                    </Labels>
                  </Values>
                </div>
                <div style={{ width: 160 }}>
                  <Values>
                    <Labels>
                      Indian Ocean{" "}
                      <CloseIcon
                        fontSize="small"
                        style={{
                          color: "rgba(255,255,255,.3)",
                        }}
                      />
                    </Labels>
                  </Values>
                </div>
                <div style={{ width: 100 }}>
                  <Values>
                    <Labels>
                      Built{" "}
                      <CloseIcon
                        fontSize="small"
                        style={{
                          color: "rgba(255,255,255,.3)",
                        }}
                      />
                    </Labels>
                  </Values>
                </div>
                <div style={{ width: 160 }}>
                  <Values>
                    <Labels>
                      Indian Ocean{" "}
                      <CloseIcon
                        fontSize="small"
                        style={{
                          color: "rgba(255,255,255,.3)",
                        }}
                      />
                    </Labels>
                  </Values>
                </div>
                <div style={{ width: 100 }}>
                  <Values>
                    <Labels>
                      Built{" "}
                      <CloseIcon
                        fontSize="small"
                        style={{
                          color: "rgba(255,255,255,.3)",
                        }}
                      />
                    </Labels>
                  </Values>
                </div>
                <div style={{ width: 100 }}>
                  <Values>
                    <Labels>
                      Daily{" "}
                      <CloseIcon
                        fontSize="small"
                        style={{
                          color: "rgba(255,255,255,.3)",
                        }}
                      />
                    </Labels>
                  </Values>
                </div>
                <div style={{ width: 160 }}>
                  <Values>
                    <Labels>
                      Indian Ocean{" "}
                      <CloseIcon
                        fontSize="small"
                        style={{
                          color: "rgba(255,255,255,.3)",
                        }}
                      />
                    </Labels>
                  </Values>
                </div>
                <div style={{ width: 120 }}>
                  <Values>
                    <Labels>
                      Refit{" "}
                      <CloseIcon
                        fontSize="small"
                        style={{
                          color: "rgba(255,255,255,.3)",
                        }}
                      />
                    </Labels>
                  </Values>
                </div>
              </Slider>
            </div>
            <div class="column3">
             <a href="/" style={{color: "blue", padding: "30px 0px"}}>Clear all</a>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MoreFilter;
