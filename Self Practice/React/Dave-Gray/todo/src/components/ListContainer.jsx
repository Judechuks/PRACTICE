import { useGlobalContext } from "../context";
import ListItem from "./ListItem";

function ListContainer() {
  const { loading, searchResult } = useGlobalContext();

  if (loading) return;

  return (
    <ul className="list-container">
      {searchResult.length ? (
        searchResult.map((item) => <ListItem key={item.id} {...item} />)
      ) : (
        <p className="empty error">No Match</p>
      )}
    </ul>
  );
}
export default ListContainer;
