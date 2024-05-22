import Partition from "./Partition";

const Container = ({ container, onSplit, onRemove }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: container.direction === "horizontal" ? "row" : "column",
        height: "100%",
        width: "100%",
      }}>
      {container.children.map((item) => {
        if (item.type === "partition") {
          return (
            <Partition
              key={item.id}
              partition={item}
              onSplit={onSplit}
              onRemove={onRemove}
            />
          );
        }
        if (item.type === "container") {
          return (
            <Container
              key={item.id}
              container={item}
              onSplit={onSplit}
              onRemove={onRemove}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default Container;
