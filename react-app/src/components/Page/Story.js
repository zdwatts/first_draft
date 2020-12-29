import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Story() {
  const [story, setStory] = useState([]);
  const [author, setAuthor] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const data = await axios.get(`/api/stories/${id}`);
      data.data.story.length > 0 && setStory(data.data.story[0]);
      data.data.story.length > 0 && setAuthor(data.data.author[0]);
    })();
  }, [id]);

  return (
    <Container>
      <Inner>
        <Title>{story.title}</Title>

        {/* <Subtitle>
          This is hard coded, because I don't know where to start, I just fill
          it in, that's how we do it!
        </Subtitle> */}
        <Author>
          <div>
            {author.username}
            {/* <span>, 20 hours ago - 3 min reads</span> */}
          </div>
        </Author>

        <Body>
          <div>{story.body}</div>

          {/* <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
            Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu
            venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum
            eget.
          </div>
          <div>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Duis pharetra luctus lacus ut vestibulum.
            Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
            Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer
            feugiat faucibus libero, at maximus nisl suscipit posuere. Morbi nec
            enim nunc.
          </div>
          <div>
            Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit
            convallis. Cras pharetra mi tristique sapien vestibulum lobortis.
            Nam eget bibendum metus, non dictum mauris. Nulla at tellus
            sagittis, viverra est a, bibendum metus.
          </div> */}
        </Body>
      </Inner>
    </Container>
  );
}

const Container = styled.div`
  //   background-color: #efdafb;
  display: flex;
  justify-content: center;
  margin-bottom: 13em;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  width: 44em;
  //   border: 1px solid red;

  div {
    padding: 1em;
  }
`;

const Title = styled.div`
  padding-top: 1em;
  font-family: roboto;
  font-size: 32px;
`;
const Subtitle = styled.div`
  padding-top: 1em;
  font-family: monserrat;
  font-size: 21px;
  letter-spacing: 0.02em;
  padding: 1em;
`;

const Author = styled.div`
  font-family: nunito;
`;

const Body = styled.div`
  font-family: nunito;
  font-size: 16px;
`;

export default Story;
