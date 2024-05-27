import * as React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import { Button } from "@mui/material";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const ChipTag = ({ sendChip }) => {
  const [chipData, setChipData] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");

  React.useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch("http://localhost:5000/tags");
        const data = await response.json();
        setChipData(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchTags();
  }, []);

  const MyAlert = () => {
    return (
      <div style={{ backgroundColor: "lightgray", padding: "10px" }}>
        <p style={{ color: "red", marginBottom: "0" }}>경고 메시지!</p>
      </div>
    );
  };

  const handleDelete = (chipToDelete) => async () => {
    try {
      await fetch(`http://localhost:5000/tags/${chipToDelete.tagId}`, {
        method: "DELETE",
      });
      setChipData((chips) =>
        chips.filter((chip) => chip.tagId !== chipToDelete.tagId)
      );
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleAddChip = async () => {
    if (
      inputValue.trim() === "" ||
      chipData.some((chip) => chip.label === inputValue.trim())
    ) {
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/tags1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ label: inputValue.trim() }),
      });
      const newChip = await response.json();
      setChipData([...chipData, newChip]);
      setInputValue("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddChip();
      event.preventDefault();
    }
  };

  const [chipCartData, setChipCartData] = React.useState([]);

  const handleClick = (chip) => {
    console.log(`You clicked ${chip.label}, ${chip.tagId} Chip.`, chip);

    // Prevent adding duplicate chips to the cart
    if (chipCartData.some((cartChip) => cartChip.tagId === chip.tagId)) return;

    setChipCartData([...chipCartData, chip]);
  };

  const handleDeleteCart = (chipToDelete) => () => {
    setChipCartData((chips) =>
      chips.filter((chip) => chip.tagId !== chipToDelete.tagId)
    );
  };

  const handleSendChip = () => {
    sendChip(chipCartData);
    setChipCartData([]);
  };

  return (
    <>
      <FormControl sx={{ width: 1500 }}>
        <TextField
          label="메모태그"
          id="filled-size-normal"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          variant="filled"
        />
      </FormControl>
      <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
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
          component="ul"
        >
          {chipData.map((data) => {
            let icon;

            if (data.label === "Add_the_Chip") {
              icon = <TagFacesIcon />;
            }

            return (
              <ListItem key={data.tagId}>
                <Chip
                  color="primary"
                  icon={icon}
                  label={data.label}
                  onClick={() => handleClick(data)}
                  onDelete={
                    data.label === "Add_the_Chip"
                      ? undefined
                      : handleDelete(data)
                  }
                />
              </ListItem>
            );
          })}
        </Paper>
      </Box>
      <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
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
          component="ul"
        >
          <h1>Tag Cart</h1>
          {chipCartData.length > 0 &&
            chipCartData.map((cartData) => {
              let icon;

              return (
                <ListItem key={cartData.tagId}>
                  <Chip
                    icon={icon}
                    label={cartData.label}
                    onDelete={handleDeleteCart(cartData)}
                  />
                </ListItem>
              );
            })}
          <Button onClick={handleSendChip}>확정</Button>
        </Paper>
      </Box>
    </>
  );
};

export default ChipTag;
