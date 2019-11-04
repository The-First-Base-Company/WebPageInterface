import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const columns = [
  { id: "name", label: "Name", minWidth: 30, align: "center" },
  { id: "team", label: "Team", minWidth: 18, align: "center" },
  { id: "pos", label: "Position", minWidth: 15, align: "center" },
  { id: "type", label: "Type", minWidth: 18, align: "center" },
  { id: "numGames", label: "# of Games", minWidth: 18, align: "center" },
  { id: "avgHits", label: "Avg Hits", minWidth: 18, align: "center" },
  { id: "atBat", label: "# At Bat", minWidth: 18, align: "center" },
  { id: "runs", label: "Runs", minWidth: 18, align: "center" },
  { id: "hits", label: "Hits", minWidth: 18, align: "center" },
  { id: "hr", label: "Home Runs", minWidth: 18, align: "center" },
  { id: "wins", label: "Wins", minWidth: 18, align: "center" },
  { id: "losses", label: "Losses", minWidth: 18, align: "center" },
  { id: "opt", label: "Opportunities", minWidth: 18, align: "center" },
  { id: "putOut", label: "Put Out", minWidth: 18, align: "center" },
  { id: "assist", label: "Assistances", minWidth: 18, align: "center" },
  { id: "errors", label: "Errors", minWidth: 18, align: "center" },
  { id: "avgErrors", label: "Avg Errors", minWidth: 18, align: "center" }
];

function insertData(
  name,
  team,
  pos,
  type,
  numGames,
  avgHits,
  atBat,
  runs,
  hits,
  hr,
  wins,
  losses,
  opt,
  putOut,
  assist,
  errors,
  avgErrors
) {
  return {
    name,
    team,
    pos,
    type,
    numGames,
    avgHits,
    atBat,
    runs,
    hits,
    hr,
    wins,
    losses,
    opt,
    putOut,
    assist,
    errors,
    avgErrors
  };
}

const rows = [
  insertData(
    "Betts, M",
    "BOS",
    "RF",
    "Filding",
    "76",
    "0.22341",
    "89",
    "32",
    "58",
    "13",
    "61",
    "39",
    "29",
    "54",
    "27",
    "3",
    "0.1947"
  )
];

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  tableWrapper: {
    maxHeigth: 500,
    overflow: "auto"
  }
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(50);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table tableTopFive responsive>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map(column => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value == "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </div>
      <TablePagination
        rowsPerPageOptions={[50, 100, 150]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          "aria-label": "previous page"
        }}
        nextIconButtonProps={{
          "aria-label": "next page"
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
