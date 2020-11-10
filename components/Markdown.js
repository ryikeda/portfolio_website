/*
This file is to add material ui styling to md files 

*/

import React from "react";
import ReactMarkdown from "react-markdown";
import { withStyles } from "@material-ui/core/styles";
import {
  Typography,
  Link,
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Card,
} from "@material-ui/core";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { vs } from "react-syntax-highlighter/dist/cjs/styles/prism";

const styles = (theme) => ({
  listItem: {
    marginTop: theme.spacing(1),
  },
  header: {
    marginTop: theme.spacing(2),
  },
  paragraph: {
    color: theme.palette.grey[600],
  },
  list: {
    marginLeft: theme.spacing(2),
  },
  // This checks if dark mode
  [theme.palette.type]: {
    type: theme.palette.type,
  },
  image: {
    width: "100%",
  },
});

const MarkdownParagraph = withStyles(styles)(({ classes, ...props }) => {
  return (
    <Typography
      component="ul"
      className={classes.paragraph}
      variant="body1"
      display="inline"
    >
      {props.children}
    </Typography>
  );
});
const MarkdownList = withStyles(styles)(({ classes, ...props }) => {
  return (
    <Typography variant="body1" color="textPrimary" className={classes.list}>
      {props.children}
    </Typography>
  );
});

const MarkdownImage = withStyles(styles)(({ classes, ...props }) => {
  return (
    <Card>
      <img src={props.src} alt={props.alt} className={classes.image}></img>
    </Card>
  );
});
const MarkdownListItem = withStyles(styles)(({ classes, ...props }) => {
  return <Typography component="li">{props.children}</Typography>;
});

const MarkdownCode = withStyles(styles)(({ classes, ...props }) => {
  // check if is dark mode
  const style = classes.light ? vs : vscDarkPlus;
  return (
    <SyntaxHighlighter
      language={props.language}
      className={classes.code}
      style={style}
      showLineNumbers
    >
      {props.value}
    </SyntaxHighlighter>
  );
});

const MarkdownHeading = withStyles(styles)(({ classes, ...props }) => {
  let variant;
  switch (props.level) {
    case 1:
      variant = "h5";
      break;
    case 2:
      variant = "h6";
      break;
    case 3:
      variant = "subtitle1";
      break;
    case 4:
      variant = "subtitle2";
      break;
    default:
      variant = "h5";
      break;
  }
  return (
    <Typography
      className={classes.header}
      color="textPrimary"
      variant={variant}
    >
      {props.children}
    </Typography>
  );
});

function MarkdownTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        {props.children}
      </Table>
    </TableContainer>
  );
}

function MarkdownTableCell(props) {
  return (
    <TableCell>
      <Typography>{props.children}</Typography>
    </TableCell>
  );
}

function MarkdownTableRow(props) {
  return <TableRow>{props.children}</TableRow>;
}

function MarkdownTableBody(props) {
  return <TableBody>{props.children}</TableBody>;
}

function MarkdownTableHead(props) {
  return <TableHead>{props.children}</TableHead>;
}

const renderers = {
  heading: MarkdownHeading,
  paragraph: MarkdownParagraph,
  link: Link,
  list: MarkdownList,
  listItem: MarkdownListItem,
  code: MarkdownCode,
  image: MarkdownImage,
  table: MarkdownTable,
  tableHead: MarkdownTableHead,
  tableBody: MarkdownTableBody,
  tableRow: MarkdownTableRow,
  tableCell: MarkdownTableCell,
};

export default function Markdown(props) {
  return <ReactMarkdown escapeHtml={false} renderers={renderers} {...props} />;
}
