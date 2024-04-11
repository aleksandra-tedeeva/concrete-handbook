import List from "@mui/material/List";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { ConcreteClass } from "../../types/data/concrete_class";
import { ConcreteMark } from "../../types/data/concrete_mark";
import SearchResult from "../SearchResult";
import DetailedClass from "../DetailedClass";
import DetailedMark from "../DetailedMark";
import Searchbar from "./searchbar";

const Search = () => {
  const classData = useAppSelector((state) => state.class.data);
  const markData = useAppSelector((state) => state.mark.data);
  const [value, setValue] = useState("");
  const [classFound, setClassFound] = useState<ConcreteClass[]>([]);
  const [markFound, setMarkFound] = useState<ConcreteMark[]>([]);
  const [detailedResult, setDetailedResult] = useState<null | JSX.Element>(
    null
  );

  useEffect(() => {
    if (value.length > 1) {
      searchConcrete(value);
      return;
    }
    setClassFound([]);
    setMarkFound([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const searchConcrete = (value: string) => {
    setMarkFound(markData.filter((el) => el.name.includes(value)));
    setClassFound(classData.filter((el) => el.name.includes(value)));
  };

  const returnToSearch = () => {
    setDetailedResult(null);
  };

  const showFullResult = (type: "class" | "mark", name: string) => {
    setDetailedResult(<CircularProgress />);
    const corrClass =
      classData.find((el) => el.name === name) ||
      markData.find((el) => el.name === name);
    console.log("debug", name, corrClass);
    setDetailedResult(
      type === "class" ? (
        <DetailedClass
          data={corrClass as ConcreteClass | undefined}
          returnToSearch={returnToSearch}
          showFullResult={showFullResult}
        ></DetailedClass>
      ) : (
        <DetailedMark
          data={corrClass as ConcreteMark | undefined}
          returnToSearch={returnToSearch}
          showFullResult={showFullResult}
        ></DetailedMark>
      )
    );
  };

  return (
    <>
      {detailedResult ? (
        detailedResult
      ) : (
        <>
          <Searchbar value={value} setValue={setValue} />
          <List>
            {classFound.map((concreteClass) => (
              <SearchResult
                key={concreteClass.name}
                result_type="class"
                name={concreteClass.name}
                showFullResult={showFullResult}
              ></SearchResult>
            ))}
            {markFound.map((concreteMark) => (
              <SearchResult
                key={concreteMark.name}
                result_type="mark"
                name={concreteMark.name}
                showFullResult={showFullResult}
              ></SearchResult>
            ))}
          </List>
        </>
      )}
    </>
  );
};

export default Search;
