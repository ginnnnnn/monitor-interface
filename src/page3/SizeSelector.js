import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function RadioButtonsGroup({ w, setW, setPage }) {
  // const [value, setValue] = React.useState("350");

  const handleChange = (event) => {
    setPage(1);
    setW(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">圖表大小</FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={w}
        onChange={handleChange}
      >
        <FormControlLabel value="1x1" control={<Radio />} label="1x1" />
        <FormControlLabel value="2x2" control={<Radio />} label="2x2" />
        <FormControlLabel value="3x3" control={<Radio />} label="3x3" />
        <FormControlLabel value="4x3" control={<Radio />} label="4x3" />
        <FormControlLabel value="4x4" control={<Radio />} label="4x4" />
      </RadioGroup>
    </FormControl>
  );
}
