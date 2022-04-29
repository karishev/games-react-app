import { SystemReq } from "../../../model/game.model";
import { ReqsItem } from "../atoms/ReqsItem";

interface Props {
  reqs: SystemReq;
}

export const SystemReqs: React.FC<Props> = ({reqs}) => {
  return (
    <div style={{marginTop: "1rem", background: "#262626", padding: "0.5rem 1rem 0 1rem", borderRadius: 3}}>
      {Object.entries(reqs).map(([key, value]) => (
        <ReqsItem key={key} first={key} second={value} />
      ))}
    </div>
  );
};
