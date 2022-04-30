import { Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { MdAccountCircle, MdThumbUp, MdThumbDown } from "react-icons/md";

export interface PostInterface {
  message: string;
  recommended: boolean;
  id: number;
}

interface Props {
  post: PostInterface;
}
export const Post: React.FC<Props> = ({ post }) => {
  const thumbStyle = {
    marginRight: "1rem",
    height: "2rem",
    width: "1.5rem",
  };

  return (
    <>
      <Container>
        <div style={{ display: "flex" }}>
          <MdAccountCircle
            style={{ height: "1.5rem", marginRight: "0.5rem" }}
          />
          <Typography variant="body1">Anonymous</Typography>
        </div>

        <div style={{ width: "70%" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            {post.recommended ? (
              <MdThumbUp style={thumbStyle} color="lightblue" />
            ) : (
              <MdThumbDown style={thumbStyle} color="red" />
            )}
            {post.recommended ? (
              <Typography variant="body1" color="white">
                The best game of my life!
              </Typography>
            ) : (
              <Typography variant="body1" color="white">
                Never play this!
              </Typography>
            )}
          </div>
          <Typography sx={{marginTop: "1rem", overflowWrap: "anywhere"}} variant="body2">{post.message}</Typography>
        </div>
      </Container>
    </>
  );
};

const Container = styled("div")({
  marginTop: "0.5rem",
  padding: "1rem",
  background: "#262626",
  fontWeight: "400",
  maxWidth: "50vw",
  color: "#F5F5F599",
  lineHeight: "25px",
  borderRadius: 3,
  display: "flex",
  justifyContent: "space-between",
});
