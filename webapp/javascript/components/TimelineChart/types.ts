export type PlotType = {
  getPlotOffset: () => ShamefulAny;
  getOptions: () => ShamefulAny;
  getAxes: () => ShamefulAny[];
  getXAxes: () => ShamefulAny[];
  getYAxes: () => ShamefulAny[];
  getPlaceholder: () => {
    trigger: (arg0: string, arg1: ShamefulAny[]) => void;
    offset: () => {
      left: number;
      top: number;
    };
    unbind: (...args: ShamefulAny) => void;
    bind: (...args: ShamefulAny) => void;
  };
  triggerRedrawOverlay: () => void;
  width: () => number;
  height: () => number;
  clearSelection: (preventEvent: boolean) => void;
  setSelection: (ranges: ShamefulAny, preventEvent: ShamefulAny) => void;
  getSelection: () => ShamefulAny | null;
  hooks: ShamefulAny;
  getData: () => ShamefulAny[];
};

export type EventHolderType = {
  unbind: (
    arg0: string,
    arg1: { (e: ShamefulAny): void; (e: ShamefulAny): void }
  ) => void;
  mousemove: (arg0: (e: EventType) => void) => void;
  mousedown: (arg0: (e: EventType) => void) => void;
  mouseleave: (arg0: (e: EventType) => void) => void;
  mouseup: (arg0: (e: EventType) => void) => void;
};

export type EventType = { pageX: number; pageY: number; which?: number };
