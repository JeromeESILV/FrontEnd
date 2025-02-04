const upStyle = {
    color: "white",
    width: "0px",
    height: "0px",
    border: "15px solid black",
    borderTopColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "green",
    borderLeftColor: "transparent",
}
const downStyle = {
    color: "white",
    width: "0px",
    height: "0px",
    border: "15px solid black",
    borderTopColor: "red",
    borderRightColor: "transparent",
    borderBottomColor: "transparent",
    borderLeftColor: "transparent",
}

export default function MoL({
    dir,
    onClick,
  }) {

    if (!onClick) {
      throw new Error("no onClick function provided");
    }
    const style = dir === "up" ? upStyle : downStyle
    return (
      <button style={style} onClick={onClick}>
      </button>
    );
  }