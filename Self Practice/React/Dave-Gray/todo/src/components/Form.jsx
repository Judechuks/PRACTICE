import { useGlobalContext } from "../context";

function Form() {
  const { addItem, addRef } = useGlobalContext();

  return (
    <form
      className="add-form"
      onSubmit={(e) => {
        e.preventDefault();
        addItem(addRef.current.value);
        addRef.current.value = "";
      }}>
      <input
        type="text"
        placeholder="grocery"
        autoFocus
        required
        ref={addRef}
      />
      <button className="btn add-btn">add</button>
    </form>
  );
}
export default Form;
