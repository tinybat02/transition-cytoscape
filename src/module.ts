// @ts-ignore
import { PanelPlugin } from '@grafana/ui';
import { SimpleOptions, defaults } from './types';
import { MainPanel } from './MainPanel';
import { MainEditor } from './MainEditor';

export const plugin = new PanelPlugin<SimpleOptions>(MainPanel).setDefaults(defaults).setEditor(MainEditor);
