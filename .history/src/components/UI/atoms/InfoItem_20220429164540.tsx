import { Typography } from "@mui/material";

interface Props {
  first: string;
  second: string;
}

export const InfoItem: React.FC<Props> = (info) => {
  const firstChanger = () => {
    if (info.first == "release_date") return "Release Date";
    else return info.first[0].toUpperCase() + info.first.substring(1);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "1rem",
          color: "white",
          paddingBottom: "0.5rem",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <Typography sx={{ color: "#F5F5F599" }} variant="body2">
          {firstChanger()}
        </Typography>
        <Typography variant="body2">{info.second}</Typography>
      </div>
    </>
  );
};
