import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Pagination } from "@material-ui/lab";
const useStyles = makeStyles((theme) => ({
  container: {
    background: "#2d3b4b",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
    padding: "5px",
  },
}));

export default function BasicPagination({ pages, page, setPage }) {
  const classes = useStyles();
  const handleOnChange = (e, p) => {
    setPage(p);
  };
  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <Pagination
          count={pages}
          color="primary"
          page={+page}
          onChange={(e, p) => handleOnChange(e, p)}
        />
      </div>
    </div>
  );
}
