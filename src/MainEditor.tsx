import React, { useState } from 'react';
import { PanelOptionsGroup, FormField } from '@grafana/ui';
import { PanelEditorProps } from '@grafana/data';

import { GraphSettings } from './types';

export const MainEditor: React.FC<PanelEditorProps<GraphSettings>> = ({ options, onOptionsChange }) => {
  const [inputs, setInputs] = useState(options);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onOptionsChange(inputs);
  };

  return (
    <PanelOptionsGroup>
      <div className="editor-row">
        <div className="section gf-form-group">
          <h5 className="section-heading">Graph Settings</h5>
          <FormField
            label="Node Width"
            labelWidth={10}
            inputWidth={80}
            type="number"
            name="nodeWidth"
            value={inputs.nodeWidth}
            onChange={handleChange}
          />
          <FormField
            label="Node Distance"
            labelWidth={10}
            inputWidth={80}
            type="number"
            name="nodeSeparation"
            value={inputs.nodeSeparation}
            onChange={handleChange}
          />
          <FormField
            label="Thickness Unit"
            labelWidth={10}
            inputWidth={80}
            type="number"
            name="edgeThicknessUnit"
            value={inputs.edgeThicknessUnit}
            onChange={handleChange}
          />
        </div>
      </div>

      <button className="btn btn-inverse" onClick={handleSubmit}>
        Submit
      </button>
    </PanelOptionsGroup>
  );
};
