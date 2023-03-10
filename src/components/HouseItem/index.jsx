import { useState } from "react";
import { useEffect } from "react";
import Recent from "../Recent";
import { useParams } from "react-router-dom";
import { Button, Input } from "../Generic";
import { Checkbox } from "antd";
import noImg from "../../assets/imgs/noimg.jpg";
import nouserImage from "../../assets/imgs/nouser.png";
import {
  Blur,
  Container,
  Content,
  Description,
  Details,
  Icons,
  ImageContainer,
  ImgContainer,
  Section,
  User,
  Wrapper,
} from "./style";
import Yandex from "../Generic/Yandex";

const HouseItem = () => {
  const [data, setData] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`https://houzing-app.herokuapp.com/api/v1/houses/id/${params?.id}`)
      .then((res) => res.json())
      .then((res) => setData(res?.data));
    window.scrollTo(0, 0);
  }, [params?.id]);

  console.log(data?.attachments);

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <>
      <ImageContainer>
        <ImageContainer.Main
          src={(data?.attachments && data?.attachments[0]?.imgPath) || noImg}
          alt="test"
        />
        <ImgContainer>
          {data?.attachments?.slice(1, 5).map((value, index) => {
            return data?.attachments.length > 4 && index === 3 ? (
              <Blur.Container key={index}>
                <ImageContainer.Subimg src={value.imgPath} alt="test" />
                {data?.attachments.length - 5 === 0 ? (
                  ""
                ) : (
                  <Blur>+ {data?.attachments.length - 5}</Blur>
                )}
              </Blur.Container>
            ) : (
              <ImageContainer.Subimg
                key={index}
                src={value.imgPath}
                alt="test"
              />
            );
          })}
        </ImgContainer>
      </ImageContainer>
      <Wrapper>
        <Container flex={3}>
          <Section>
            <Content>
              <div>
                <Content.Title large>{data?.name}</Content.Title>
                <div className="info">
                  {data?.city},{data?.address},{data?.country},
                </div>
              </div>
            </Content>
            <Content flex>
              <Icons.Share />
              <Icons.Title>Share</Icons.Title>
              <Icons.Love />
              <Icons.Title>Save</Icons.Title>
            </Content>
          </Section>
          <Section>
            <Details>
              <div style={{ textAlign: "center" }}>
                <Icons.Bed />
                <Details.Item>Bed {data?.houseDetails?.beds || 0}</Details.Item>
              </div>
              <div style={{ textAlign: "center" }}>
                <Icons.Bath />
                <Details.Item>
                  Bath {data?.houseDetails?.bath || 0}
                </Details.Item>
              </div>
              <div style={{ textAlign: "center" }}>
                <Icons.Garage />
                <Details.Item>
                  Garage {data?.houseDetails?.garage || 0}
                </Details.Item>
              </div>
              <div style={{ textAlign: "center" }}>
                <Icons.Ruler />
                <Details.Item>
                  Area {data?.houseDetails?.area || 0} kv
                </Details.Item>
              </div>
            </Details>
            <Content>
              <Content flex>
                <del>${data?.price || 0}/mo</del>
                <h2> ${data?.salePrice || 0}/mo</h2>{" "}
              </Content>
              <div style={{ textAlign: "end" }} className="info">
                {data?.user?.firstname}
              </div>
            </Content>
          </Section>
          <Content.Title>Description</Content.Title>
          <Description>{data?.description}</Description>
          <Content.Title>Features</Content.Title>
          <Section>
            <Container gap={25}>
              <Content flex>
                <Icons.Bed />
                <Details.Item>
                  Air Conditionning {data?.houseDetails?.beds || 0}
                </Details.Item>
              </Content>
              <Content flex>
                <Icons.Garage />
                <Details.Item>
                  Barbeque {data?.houseDetails?.beds || 0}
                </Details.Item>
              </Content>
              <Content flex>
                <Icons.Ruler />
                <Details.Item>
                  Dryer {data?.houseDetails?.beds || 0}
                </Details.Item>
              </Content>
              <Content flex>
                <Icons.Bath />
                <Details.Item>GYM {data?.houseDetails?.beds || 0}</Details.Item>
              </Content>
            </Container>
            <Container gap={25}>
              <Content flex>
                <Icons.Bed />
                <Details.Item>
                  Air Conditionning {data?.houseDetails?.beds || 0}
                </Details.Item>
              </Content>
              <Content flex>
                <Icons.Garage />
                <Details.Item>
                  Barbeque {data?.houseDetails?.beds || 0}
                </Details.Item>
              </Content>
              <Content flex>
                <Icons.Ruler />
                <Details.Item>
                  Dryer {data?.houseDetails?.beds || 0}
                </Details.Item>
              </Content>
              <Content flex>
                <Icons.Bath />
                <Details.Item>GYM {data?.houseDetails?.beds || 0}</Details.Item>
              </Content>
            </Container>
            <Container gap={25}>
              <Content flex>
                <Icons.Bed />
                <Details.Item>
                  Air Conditionning {data?.houseDetails?.beds || 0}
                </Details.Item>
              </Content>
              <Content flex>
                <Icons.Garage />
                <Details.Item>
                  Barbeque {data?.houseDetails?.beds || 0}
                </Details.Item>
              </Content>
              <Content flex>
                <Icons.Ruler />
                <Details.Item>
                  Dryer {data?.houseDetails?.beds || 0}
                </Details.Item>
              </Content>
              <Content flex>
                <Icons.Bath />
                <Details.Item>GYM {data?.houseDetails?.beds || 0}</Details.Item>
              </Content>
            </Container>
            <Container gap={25}>
              <Content flex>
                <Icons.Bed />
                <Details.Item>
                  Air Conditionning {data?.houseDetails?.beds || 0}
                </Details.Item>
              </Content>
              <Content flex>
                <Icons.Garage />
                <Details.Item>
                  Barbeque {data?.houseDetails?.beds || 0}
                </Details.Item>
              </Content>
              <Content flex>
                <Icons.Ruler />
                <Details.Item>
                  Dryer {data?.houseDetails?.beds || 0}
                </Details.Item>
              </Content>
              <Content flex>
                <Icons.Bath />
                <Details.Item>GYM {data?.houseDetails?.beds || 0}</Details.Item>
              </Content>
            </Container>
          </Section>
        </Container>
        <Container className="user" flex={1}>
          <Section style={{ justifyContent: "flex-start" }}>
            <User.Img src={nouserImage} alt="no user image" />
            <Content>
              <div className="subTitle">Nurbek Abdulkhamid</div>
              <div className="info">+998 94 044 70 64</div>
            </Content>
          </Section>
          <Input placeholder="Name" />
          <Input placeholder="Email" />
          <Input placeholder="Phone" />
          <Input placeholder="Message" />
          <Checkbox onChange={onChange}>
            By submitting this form I agree to Terms of Use
          </Checkbox>
          <Button width="%">Send reuquest</Button>
        </Container>
      </Wrapper>
      <Content.Title mt={48}>
        <Yandex />
        <Recent />
      </Content.Title>
    </>
  );
};

export default HouseItem;
