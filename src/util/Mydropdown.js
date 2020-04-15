import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 128,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
}));
const mach = [
  "A01",
  "A02",
  "A03",
  "A04",
  "A05",
  "A06",
  "A07",
  "A08",
  "A09",
  "A10",
];
function SimpleSelect(props) {
  const classes = useStyles();
  const [age, setAge] = React.useState(props.match.params.mid);

  const handleChange = (event) => {
    props.history.push(
      `/monitor-interface/monitor/${props.match.params.pid}/${event.target.value}`
    );
    setAge(event.target.value);
  };

  return (
    <div className="dropdown-input">
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">
          {props.match.params.pid}
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          {mach.map((key, i) => (
            <MenuItem value={key}>{key}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default withRouter(SimpleSelect);
