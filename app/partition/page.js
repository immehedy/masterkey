"use client";
import { useState } from "react";
import Container from "../components/Container";
import Partition from "../components/Partition";
import { getRandomColor } from "../utils/generateColor";

const LayoutBuilder = () => {
  const [layout, setLayout] = useState([
    {
      id: 1,
      type: "partition",
      color: getRandomColor(),
      width: "100%",
      height: "100vh",
    },
  ]);

  const handleSplit = (partitionId, direction) => {
    setLayout((prevLayout) => {
      const updateLayout = (items) => {
        return items.map((item) => {
          if (item.id === partitionId) {
            const newPartition = {
              id: Date.now(),
              type: "partition",
              color: getRandomColor(),
              width: direction === "horizontal" ? "50%" : "100%",
              height: direction === "vertical" ? "50%" : "100%",
              parentWidth: item.width,
              parentHeight: item.height,
            };
            return {
              type: "container",
              direction,
              children: [
                {
                  ...item,
                  width: direction === "horizontal" ? "50%" : "100%",
                  height: direction === "vertical" ? "50%" : "100%",
                },
                newPartition,
              ],
            };
          }
          if (item.type === "container") {
            return {
              ...item,
              children: updateLayout(item.children),
            };
          }
          return item;
        });
      };

      return updateLayout(prevLayout);
    });
  };

  const handleRemove = (partitionId) => {
    setLayout((prevLayout) => {
      const removePartition = (items) => {
        return items
          .flatMap((item) => {
            if (item.type === "container") {
              const updatedChildren = removePartition(item.children);
              if (updatedChildren.length === 0) {
                return [];
              }
              if (updatedChildren.length === 1) {
                return updatedChildren.map((child) => ({
                  ...child,
                  width: "100%",
                  height: "100%",
                }));
              }
              return [{ ...item, children: updatedChildren }];
            }
            return item.id !== partitionId ? [item] : [];
          })
          .filter(
            (item) => item.type === "container" || item.id !== partitionId
          );
      };
      return removePartition(prevLayout);
    });
  };

  const renderLayout = (layout) => {
    return layout.map((item) => {
      if (item.type === "partition") {
        return (
          <Partition
            key={item.id}
            partition={item}
            onSplit={handleSplit}
            onRemove={handleRemove}
          />
        );
      }
      if (item.type === "container") {
        return (
          <Container
            key={item.id}
            container={item}
            onSplit={handleSplit}
            onRemove={handleRemove}
          />
        );
      }
      return null;
    });
  };

  return <div className="h-screen">{renderLayout(layout)}</div>;
};

export default LayoutBuilder;
