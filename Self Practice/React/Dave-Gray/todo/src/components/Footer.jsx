import { useGlobalContext } from "../context";

function Footer() {
  const { searchResult } = useGlobalContext();

  return (
    <footer>
      <p>
        {searchResult.length <= 1
          ? `${searchResult.length} item`
          : `${searchResult.length} items`}
      </p>
    </footer>
  );
}
export default Footer;
