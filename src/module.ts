// @ts-ignore
import { PanelPlugin } from '@grafana/ui';
import { GraphSettings, defaults } from './types';
import { MainPanel } from './MainPanel';
import { MainEditor } from './MainEditor';

export const plugin = new PanelPlugin<GraphSettings>(MainPanel).setDefaults(defaults).setEditor(MainEditor);
