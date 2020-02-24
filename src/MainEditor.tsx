import React, { PureComponent } from 'react';
// import { PanelOptionsGroup, FormField } from '@grafana/ui';
import { PanelEditorProps } from '@grafana/data';

import { GraphSettings } from './types';

export class MainEditor extends PureComponent<PanelEditorProps<GraphSettings>> {
  render() {
    return (
      <div className="section gf-form-group">
        <h5 className="section-heading">Display</h5>
      </div>
    );
  }
}
