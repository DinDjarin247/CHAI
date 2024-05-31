import { useState } from "react";

import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Paper from "@mui/material/Paper";

import FormControl from "@mui/material/FormControl";

import ChipTag from "../components/ChipTag";
import ImgLinkConverter from "../components/ImgLinkConverter";
import TermCalendar from "../components/TermCalendar";

const TrainingEditor = ({ addTraining }) => {
  const [name, setName] = useState(""); //pt이름
  const [price, setPrice] = useState(""); //pt가격
  const [dtoImage, setDtoImage] = useState(""); //pt상세 이미지
  const [dtoContent, setDtoContent] = useState(""); //pt상세 설명
  const [trainTerm, setTrainTerm] = useState(""); //pt기간
  const [chipCartData, setChipCartData] = useState([]); //pt chipTag

  const handleSavePT = async () => {
    if (
      name &&
      price &&
      dtoImage &&
      dtoContent &&
      trainTerm &&
      chipCartData.length > 0
    ) {
      const newTraining = {
        name,
        price,
        dtoContent,
        dtoImage,
        trainTerm,
        chipCartData,
      };
      try {
        const response = await fetch(" ", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTraining),
        });
        const data = await response.json();
        addTraining(data);
        console.log(data, "PT입력부");
      } catch (error) {
        console.error("Error:", error);
      }
      setName("");
      setPrice("");
      setDtoImage("");
      setDtoContent("");
      setTrainTerm("");
      setChipCartData([]);
    } else {
      console.log("모든 필드를 입력해주세요.");
    }
  };

  const handleReceiveChip = (chips) => {
    setChipCartData(chips);
  };

  return (
    <>
      <div>
        <Paper
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            listStyle: "none",
            color: "primary",
            p: 0.5,
            m: 0,
          }}
        >
          <FormControl sx={{ width: 1500 }}>
            <TextField
              required
              id="outlined-required"
              label="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Title"
              className="grow"
            />
            <TextField
              required
              id="outlined-required"
              label="Price"
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Subheader"
              className="grow"
            />

            <TextField
              required
              id="outlined-required"
              label="img"
              type="text"
              value={dtoImage}
              onChange={(e) => setDtoImage(e.target.value)}
              placeholder="Image URL"
              className="grow"
            />
          </FormControl>
          <FormControl sx={{ width: 1500 }}>
            <ImgLinkConverter
              onUpload={(url) => console.log("Image URL:", url)}
            />
            <TermCalendar setDateTerm={setTrainTerm} />
          </FormControl>

          <FormControl sx={{ width: 1500 }}>
            <TextField
              id="standard-multiline-flexible"
              label="설명"
              multiline
              maxRows={4}
              variant="standard"
              value={dtoContent}
              onChange={(e) => setDtoContent(e.target.value)}
              placeholder="Content"
            />
          </FormControl>

          <ChipTag sendChip={handleReceiveChip} />

          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={handleSavePT}
          >
            Save
          </Button>
        </Paper>
      </div>
    </>
  );
};
export default TrainingEditor;
