import { FC } from "react";

interface Props {}

const App: FC<Props> = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 100,
      }}
    >
      <h1 style={{ fontSize: 42 }}>Pavel & Jelizaveta</h1>
      <div style={{ width: 500 }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
        consequatur distinctio, eius inventore maiores molestias non nostrum
        reprehenderit, totam vero voluptate voluptatum. Ad aperiam at aut autem
        commodi delectus dolorum eius enim, error esse exercitationem facere in
        magnam magni nemo odit omnis placeat, quae quod recusandae saepe,
        temporibus vero. Temporibus!
      </div>
    </div>
  );
};

export default App;
