declare module 'cytoscape-spread';
declare module 'cytoscape-klay';
declare module 'cytoscape-avsdf';

declare module 'react-cytoscapejs' {
  import cytoscape, { NodeDataDefinition, EdgeDataDefinition } from 'cytoscape';
  import { Stylesheet, LayoutOptions, ElementDefinition } from 'cytoscape';
  import { FC, CSSProperties } from 'react';

  type CytoscapeComponentProps = {
    id?: string;
    cy?: (cy: cytoscape.Core) => void;
    style?: CSSProperties;
    elements: ElementDefinition[];
    layout?: any;
    stylesheet?: any;
    className?: string;
    zoom?: number;
    pan?: Position;
    minZoom?: number;
    maxZoom?: number;
    zoomingEnabled?: boolean;
    userZoomingEnabled?: boolean;
    panningEnabled?: boolean;
    userPanningEnabled?: boolean;
    boxSelectionEnabled?: boolean;
    autoungrabify?: boolean;
    autounselectify?: boolean;
    autolock?: boolean;
  };

  interface CytoscapeComponentInterface extends FC<CytoscapeComponentProps> {
    static normalizeElements(
      data:
        | {
            nodes: ElementDefinition[];
            edges: ElementDefinition[];
          }
        | ElementDefinition[]
    ): ElementDefinition[];
  }

  const CytoscapeComponent: CytoscapeComponentInterface;

  export = CytoscapeComponent;
}
