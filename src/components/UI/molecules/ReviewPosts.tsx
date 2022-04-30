import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  FormControl,
  InputLabel,
  NativeSelect,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { ThemeContext } from "../../templates/Main";
import { MainTheme } from "../../templates/MainTheme";
import { Post, PostInterface } from "../atoms/Post";
import { TypographyImproved } from "../organisms/GameInfo";

export const ReviewPosts: React.FC = () => {
  const [posts, setPosts] = useState<PostInterface[]>([
    { id: 1, message: "Really good game", recommended: true },
    {
      id: 2,
      message:
        "Interesting game to play with your fiends and believe in teh future life that is beyonf the corner!",
      recommended: false,
    },
  ]);

  const [open, setOpen] = useState(false);
  const [reccomended, setRecommended] = useState<boolean>(true);
  const [newPost, setNewPost] = useState<string>(" ");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePost = () => {
    if (newPost.length > 10) {
      setOpen(false);
      setPosts([
        ...posts,
        { id: posts.length + 1, message: newPost, recommended: reccomended },
      ]);
      setNewPost("");
    } else alert("not enough");
  };

  const { theme } = useContext(ThemeContext);
  const headerStyle: MainTheme = {
    dark: {
      backgroundColor: "#161515ed",
      color: "white",
    },
    light: {
      backgroundColor: "#f8f7f7",
      color: "black",
    },
    common: {},
  };

  const themeStyle = {
    ...headerStyle.common,
    ...(theme === "light" ? headerStyle.light : headerStyle.dark),
  };
  const reverseTheme = {
    ...headerStyle.common,
    ...(theme !== "light" ? headerStyle.light : headerStyle.dark),
  };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <TypographyImproved variant="body1" style={themeStyle}>
          Reviews
        </TypographyImproved>
        <CreatePostButton
          variant="outlined"
          style={reverseTheme}
          onClick={handleClickOpen}
        >
          Create a post
        </CreatePostButton>
        <Dialog open={open} onClose={handleClose}>
          <DialogContent>
            <DialogContentText>
              Please enter your mesage and if you would reccomend the game to
              others!
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Message"
              type="email"
              fullWidth
              variant="standard"
              onChange={({ target }) => setNewPost(target.value)}
            />
          </DialogContent>
          <DialogActions>
            <FormControl sx={{ width: "20%", marginRight: "19rem" }}>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Would you reccomend it?w
              </InputLabel>
              <NativeSelect
                onChange={({ target }) => {
                  target.value == "0"
                    ? setRecommended(true)
                    : setRecommended(false);
                }}
                defaultValue={30}
                inputProps={{
                  name: "age",
                  id: "uncontrolled-native",
                }}
              >
                <option value={0}>Yes</option>
                <option value={1}>No</option>
              </NativeSelect>
            </FormControl>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handlePost}>Post</Button>
          </DialogActions>
        </Dialog>
      </div>

      <div>
        {posts.map((post: PostInterface) => {
          return <Post key={post.id} post={post} />;
        })}
      </div>
    </>
  );
};

const CreatePostButton = styled(Button)({
  marginTop: "2rem",
  padding: "1px 1rem",
  height: "2rem",
});
