import { Circles } from "react-loader-spinner";

const Spinner = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full mt-28">
      <Circles color="#00BFFF" height={80} width={200} className="m-5" />
      <p className="text-lg text-center px-2 mt-5">{message}</p>
    </div>
  );
};
export default Spinner;

/* Where we have Spinners like;
<Audio /> <Circles /> <Rings /> etc 
to see the others, visit the node modules folder, navigate to the "react-loader-spinner" folder and open the main.js file you will see
$parcel$export(module.exports, "Audio", () => $b6f4e6a49a3349b1$export$153755f98d9861de);
with the different type of spinner being exported.
*/
