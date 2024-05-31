import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TrainingCard = ({
  name,
  price,
  dtoImage,
  dtoContent,
  trainTerm,
  chipCartData,
  trainId,
}) => {
  console.log(
    { name, price, dtoImage, dtoContent, trainTerm, chipCartData, trainId },
    "PT생성"
  );
  const [open, setOpen] = React.useState(false);
  cosnt[(ptTags, stPtTags)] = React.useState([]);

  const navigat = useNavigate();

  return <></>;
};
export default TrainingCard;
