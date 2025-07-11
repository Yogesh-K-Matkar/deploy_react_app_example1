//import { useContext } from "react";
//import { useContext } from "./ContextAPIIndex";

import { useBioCustomContext } from "./ContextAPIIndex";

export const ContextAPIAbout = () => {
  //const { bioInfo } = useContext(BioContextStore);

  //Replace by customeHook
  const { bioInfo } = useBioCustomContext();

  return (
    <section
      className={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-amber-200 text-black`}>
      <h1>
        Passing Props Using Context API(Using use hook instead of useContext
        hook by creating custom hook!)
      </h1>
      <div className={`justify-center items-center`}>
        <h1>Basic Info</h1>
        <p>
          FullName:-{bioInfo.FullName}
          <br />
          FirstName:-{bioInfo.FirstName}
          <br />
          LastName:-{bioInfo.LastName}
        </p>
      </div>
    </section>
  );
};
