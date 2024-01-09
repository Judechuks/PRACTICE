import { FaTrash } from "react-icons/fa";
import { useGlobalContext } from "../context";

function ListItem({ id, checked, item }) {
  const { removeItem, handleCheck } = useGlobalContext();
  return (
    <li className="list-item">
      <input
        type="checkbox"
        id={`checkbox${id}`}
        checked={checked}
        onChange={() => handleCheck(id)}
      />
      <label
        htmlFor={`checkbox${id}`}
        className={`${checked && "line-through"}`}>
        {item}
      </label>
      <FaTrash
        role="button"
        className="remove-btn"
        onClick={() => removeItem(id)}
      />
    </li>
  );
}
export default ListItem;
