const Partition = ({ partition, onSplit, onRemove }) => {
  return (
    <div
      className="flex flex-col items-center justify-center relative"
      style={{
        backgroundColor: partition.color,
        width: partition.width,
        height: partition.height,
      }}>
      <div className="mb-4">
        <button
          className="px-2 py-1 mr-2 text-white bg-blue-500 rounded"
          onClick={() => onSplit(partition.id, "horizontal")}>
          H
        </button>
        <button
          className="px-2 py-1 mr-2 text-white bg-blue-500 rounded"
          onClick={() => onSplit(partition.id, "vertical")}>
          V
        </button>
        {partition.id !== 1 && (
          <button
            className="px-2 py-1 text-white bg-red-500 rounded"
            onClick={() => onRemove(partition.id)}>
            -
          </button>
        )}
      </div>
    </div>
  );
};

export default Partition;
