import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

interface ISearchResultProps {
  result_type: "class" | "mark";
  name: string;
  showFullResult: (type: "mark" | "class", name: string) => void;
}

const SearchResult = ({
  result_type,
  name,
  showFullResult,
}: ISearchResultProps) => {
  return (
    <ListItem>
      <ListItemButton onClick={() => showFullResult(result_type, name)}>
        <ListItemText
          primary={name}
          secondary={result_type === "class" ? "Класс Бетона" : "Марка Бетона"}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default SearchResult;
