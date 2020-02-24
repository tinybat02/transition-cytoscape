export interface GraphSettings {
  edgeThicknessUnit: number;
  nodeWidth: number;
  nodeSeparation: number;
}

export const defaults: GraphSettings = {
  edgeThicknessUnit: 75,
  nodeWidth: 120,
  nodeSeparation: 200,
};
