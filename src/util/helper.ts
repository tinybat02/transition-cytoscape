interface NodeType {
  data: {
    id: string;
    label: string;
  };
}

interface EdgeType {
  data: {
    source: string;
    target: string;
    value: number;
  };
}

export const getGraphElements = (bufferSource: string[], bufferTarget: string[], bufferValue: number[]) => {
  const allNodes = [...new Set([...bufferSource, ...bufferTarget])];

  const elements: Array<NodeType | EdgeType> = allNodes.map(item => ({
    data: { id: item !== '' ? item : 'N/A', label: item !== '' ? item : 'N/A' },
  }));
  bufferSource.map((item, index) => {
    elements.push({
      data: {
        source: item !== '' ? item : 'N/A',
        target: bufferTarget[index] !== '' ? bufferTarget[index] : 'N/A',
        value: Math.round(bufferValue[index] / 75) / 2,
      },
    });
  });

  return elements;
};
