import "./App.css";

function AppJSX() {
  const name = "엘리";
  const list = ["우유", "딸기", "바나나", "요거트"];
  return (
    <>
      <h1 className="orange">{`Hello! ${name}`}</h1>
      <h2>Hello!</h2>
      <p>{name}</p>
      {/* <ul>
        <li>우유</li>
        <li>딸기</li>
        <li>바나나</li>
      </ul> 이걸 더 쉽게 만들기*/}
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <img
        style={{ width: "400px" }}
        src="https://cdn.newspenguin.com/news/photo/202104/4475_14264_4458.jpg"
        alt="nature"
      />
    </>
  );
}

export default AppJSX;
