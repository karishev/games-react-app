import { Typography } from "@mui/material";

interface Props {
  first: string;
  second: string;
}

export const ReqsItem: React.FC<Props> = (reqs) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingRight: "1rem",
        marginTop: "1rem",
        paddingBottom: "1rem",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <Typography sx={{ color: "#F5F5F599" }} variant="body2">
        {reqs.first[0].toUpperCase() + (reqs.first.length !== 2 ? reqs.first.substring(1) : "S")}
      </Typography>
      <Typography sx={{ color: "white" }} variant="body2">
        {reqs.second.indexOf("or ") && reqs.second.split("or ")[0]}
      </Typography>
      {/* <span>{reqs.second}</span> */}
    </div>
  );
};
