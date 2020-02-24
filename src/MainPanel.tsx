import React, { PureComponent } from 'react';
import { PanelProps, Vector as VectorData } from '@grafana/data';
import { GraphSettings } from 'types';
import cytoscape from 'cytoscape';
import avsdf from 'cytoscape-avsdf';
import CytoscapeComponent from 'react-cytoscapejs';
import { getGraphElements } from './util/helper';

cytoscape.use(avsdf);

interface Buffer extends VectorData {
  buffer: Array<string | number>;
}

interface Props extends PanelProps<GraphSettings> {}

export class MainPanel extends PureComponent<Props> {
  cy: cytoscape.Core;

  state = {
    elements: [],
  };

  componentDidMount() {
    const { buffer: bufferSource } = this.props.data.series[0].fields[0].values as Buffer;
    const { buffer: bufferTarget } = this.props.data.series[0].fields[1].values as Buffer;
    const { buffer: bufferValue } = this.props.data.series[0].fields[2].values as Buffer;
    const { edgeThicknessUnit } = this.props.options;

    const elements = getGraphElements(bufferSource as string[], bufferTarget as string[], bufferValue as number[], edgeThicknessUnit);
    this.setState({ elements });
  }

  componentDidUpdate(prevProps: PanelProps) {
    if (prevProps.data.series[0] !== this.props.data.series[0]) {
      const { buffer: bufferSource } = this.props.data.series[0].fields[0].values as Buffer;
      const { buffer: bufferTarget } = this.props.data.series[0].fields[1].values as Buffer;
      const { buffer: bufferValue } = this.props.data.series[0].fields[2].values as Buffer;
      const { edgeThicknessUnit } = this.props.options;

      const elements = getGraphElements(bufferSource as string[], bufferTarget as string[], bufferValue as number[], edgeThicknessUnit);
      this.setState({ elements });
    }
  }

  render() {
    const { width, height } = this.props;
    const { nodeWidth, nodeSeparation } = this.props.options;
    const { elements } = this.state;
    if (elements.length === 0) {
      return <div />;
    }

    return (
      <CytoscapeComponent
        elements={elements}
        userZoomingEnabled={false}
        userPanningEnabled={false}
        stylesheet={[
          {
            selector: 'node',
            style: {
              width: nodeWidth,
              shape: 'ellipse',
              content: 'data(label)',
              'background-color': '#b3e1f5',
              'font-family': 'monospace',
              'text-valign': 'center',
              events: 'no',
            },
          },
          {
            selector: 'edge',
            style: {
              'curve-style': 'bezier',
              'line-color': '#1990c1',
              //width: 'data(value)',
              width: 0.5,
              label: 'data(value)',
              'font-size': '1em',
              'target-arrow-shape': 'vee',
              'target-arrow-color': '#1990c1',
              events: 'no',
            },
          },
        ]}
        layout={{
          name: 'avsdf',
          fit: true,
          nodeSeparation: nodeSeparation,
        }}
        style={{
          width,
          height,
          textAlign: 'start',
        }}
        cy={cy => {
          this.cy = cy;
        }}
      />
    );
  }
}
