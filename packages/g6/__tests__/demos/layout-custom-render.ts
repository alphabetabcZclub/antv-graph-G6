// @ts-nocheck
import { BaseLayout, ExtensionCategory, Graph, register } from '@/src';
import * as d3 from 'd3';

import type { GraphData } from '@/src';

const visibleNodes = [
  {
    id: '0',
    name: 'CHANGE',
    style: {
      x: -160.11,
      y: 759.6925000000001,
    },
  },
  {
    id: '1',
    name: 'ToC',
    style: {
      x: -159.12750000000005,
      y: 671.0475,
    },
  },
  {
    id: '2',
    name: '榆林',
    style: {
      x: 14.019999999999996,
      y: 672.385,
    },
  },
  {
    id: '7',
    name: '渭南',
    style: {
      x: 130.055,
      y: 672.385,
    },
  },
  {
    id: '12',
    name: '延安',
    style: {
      x: -212.55,
      y: 667.7149999999999,
    },
  },
  {
    id: '17',
    name: 'name1',
    style: {
      x: -657.825,
      y: 669.71,
    },
  },
  {
    id: '25',
    name: '安康',
    style: {
      x: 232.20500000000004,
      y: 672.38,
    },
  },
  {
    id: '28',
    name: '汉中',
    style: {
      x: -338.34000000000003,
      y: 667.71,
    },
  },
  {
    id: '31',
    name: '商洛',
    style: {
      x: -446.56,
      y: 667.71,
    },
  },
  {
    id: '36',
    name: '铜川',
    style: {
      x: 337.57,
      y: 669.46,
    },
  },
  {
    id: '37',
    name: 'name2',
    style: {
      x: -90.38,
      y: 667.7149999999999,
    },
  },
  {
    id: '47',
    name: '宝鸡',
    style: {
      x: -561.735,
      y: 671.63,
    },
  },
  {
    id: '50',
    name: 'ToB',
    style: {
      x: -159.09249999999997,
      y: 850.3375000000001,
    },
  },
  {
    id: '51',
    name: '榆林',
    style: {
      x: -442.72,
      y: 848.86,
    },
  },
  {
    id: '52',
    name: '渭南',
    style: {
      x: -326.12,
      y: 848.86,
    },
  },
  {
    id: '53',
    name: '延安',
    style: {
      x: -213.44,
      y: 848.86,
    },
  },
  {
    id: '54',
    name: 'name1',
    style: {
      x: -655.2049999999999,
      y: 846.855,
    },
  },
  {
    id: '59',
    name: '安康',
    style: {
      x: 335.02,
      y: 851.82,
    },
  },
  {
    id: '60',
    name: '汉中',
    style: {
      x: 243.86,
      y: 851.82,
    },
  },
  {
    id: '61',
    name: '商洛',
    style: {
      x: 125.25,
      y: 851.82,
    },
  },
  {
    id: '62',
    name: '铜川',
    style: {
      x: 14.48,
      y: 851.82,
    },
  },
  {
    id: '63',
    name: 'name2',
    style: {
      x: -549.8,
      y: 847.86,
    },
  },
  {
    id: '65',
    name: '宝鸡',
    style: {
      x: -104.12,
      y: 848.86,
    },
  },
  {
    id: '66',
    name: '(R)AN',
    style: {
      x: -931.23,
      y: 758.87,
    },
  },
  {
    id: '67',
    name: 'TEST-BBB',
    style: {
      x: 621.2,
      y: 315.27,
    },
  },
  {
    id: '68',
    name: 'ToC TEST-BBB/UDR2PUDR POOL',
    style: {
      x: 759.18,
      y: 244.05,
    },
  },
  {
    id: '73',
    name: 'ToC TEST-BBB/UDR1PUDR POOL',
    style: {
      x: 485.45,
      y: 389.04,
    },
  },
  {
    id: '75',
    name: 'ToCTEST-BBB/UDR2 TEST-BBB POOL',
    style: {
      x: 469.81,
      y: 243.5,
    },
  },
  {
    id: '78',
    name: 'ToCTEST-BBB/UDR1 TEST-BBB POOL',
    style: {
      x: 774.59,
      y: 379.62,
    },
  },
  {
    id: '81',
    name: 'center-building',
    style: {
      x: -163.715,
      y: 316.95000000000005,
    },
  },
  {
    id: '82',
    name: 'ToC center-building POOL1',
    style: {
      x: -13.37,
      y: 386.82,
    },
  },
  {
    id: '100',
    name: 'vvvToB center-building POOL1',
    style: {
      x: -155.24,
      y: 244.05,
    },
  },
  {
    id: '105',
    name: 'ToB center-building POOL1',
    style: {
      x: -312.06,
      y: 391.85,
    },
  },
  {
    id: '112',
    name: '我丢了',
    style: {
      x: -933.6800000000001,
      y: 319.53999999999996,
    },
  },
  {
    id: '113',
    name: 'ToB 我丢了 POOL1',
    style: {
      x: -1067.65,
      y: 397.03,
    },
  },
  {
    id: '120',
    name: 'vvvToB 我丢了 POOL1',
    style: {
      x: -929.38,
      y: 244.05,
    },
  },
  {
    id: '125',
    name: 'ToC 我丢了 POOL1',
    style: {
      x: -797.71,
      y: 385.62,
    },
  },
  {
    id: '137',
    name: 'xx0F',
    style: {
      x: -1520.22,
      y: 315.185,
    },
  },
  {
    id: '138',
    name: 'test-XBXAsnxx0F001BHW-04AHWxx0tex',
    style: {
      x: -1638.04,
      y: 390.73,
    },
  },
  {
    id: '139',
    name: 'test-acrhjusnxx0F002BHW-07AHWxx0tex',
    style: {
      x: -1514.88,
      y: 241.53,
    },
  },
  {
    id: '140',
    name: 'test-XBLZsnxx0F002BHW-02AHW012',
    style: {
      x: -1400.4,
      y: 390.84,
    },
  },
  {
    id: '141',
    name: '我丢了-1',
    style: {
      x: -166.62,
      y: -148.01,
    },
  },
  {
    id: '142',
    name: 'test-XBLZsn我丢了-1003我丢了-1000BZX-03AZX012',
    style: {
      x: 109.49,
      y: -89.13,
    },
  },
  {
    id: '143',
    name: 'test-XBLZsn我丢了-1002我丢了-1000BHW-02AHW012',
    style: {
      x: -162.97,
      y: -89.13,
    },
  },
  {
    id: '144',
    name: 'test-XBXAxbq我丢了-1m001我丢了-1001AZX-03AZXxx0tex',
    style: {
      x: -162.87,
      y: -204.85,
    },
  },
  {
    id: '145',
    name: 'test-acrhjuxbq我丢了-1m001我丢了-1000AZX-oiefescxx0tex',
    style: {
      x: -433.8,
      y: -88.89,
    },
  },
  {
    id: '146',
    name: 'test-XBXAsn我丢了-1002我丢了-1001BHW-04AHW012',
    style: {
      x: -445.69,
      y: -205.13,
    },
  },
  {
    id: '147',
    name: 'test-XBXAsn我丢了-1003我丢了-1001BZX-03AZX012',
    style: {
      x: 114.45,
      y: -205.13,
    },
  },
  {
    id: '148',
    name: 'NRF',
    style: {
      x: -554.64,
      y: 79.56,
    },
  },
  {
    id: '149',
    name: 'NRF',
    style: {
      x: -554.64,
      y: 79.56,
    },
  },
  {
    id: '150',
    name: 'TEST0-23',
    style: {
      x: -940.7149999999999,
      y: -149.185,
    },
  },
  {
    id: '151',
    name: 'test-acrhjusnTEST0-23m004BZX-oiefesc012',
    style: {
      x: -941.53,
      y: -94.79,
    },
  },
  {
    id: '152',
    name: 'test-acrhjusnTEST0-23m004BZX-oiefesc023',
    style: {
      x: -937.9,
      y: -201.58,
    },
  },
];

const visibleEdges = [
  {
    id: '125',
    source: '141',
    target: '150',
  },
  {
    id: '133',
    source: '81',
    target: '67',
  },
  {
    id: '123',
    source: '137',
    target: '112',
  },
  {
    id: '144',
    source: '0',
    target: '81',
  },
  {
    id: '124',
    source: '150',
    target: '112',
  },
  {
    id: '117',
    source: '66',
    target: '112',
  },
  {
    id: '115',
    source: '81',
    target: '141',
  },
  {
    id: '122',
    source: '112',
    target: '81',
  },
  {
    id: '120',
    source: '66',
    target: '0',
  },
  {
    id: '1425',
    source: '148',
    target: '81',
  },
  {
    id: '3352',
    source: '148',
    target: '112',
  },
];

console.log(visibleNodes.filter((d) => d.name.includes('我丢了')));

class CustomLayout extends BaseLayout {
  id = 'custom-layout';
  async execute(model: GraphData, options?: any): Promise<GraphData> {
    console.log(this, options);

    const { nodes = [], edges = [] } = model;

    const { width, height, padding = 30 } = this.options;

    let paddingTop = padding;
    let paddingRight = padding;
    let paddingBottom = padding;
    let paddingLeft = padding;

    if (Array.isArray(padding)) {
      if (padding.length <= 1) {
        paddingTop = paddingRight = paddingBottom = paddingLeft = padding[0] ?? 30;
      } else if (padding.length === 2) {
        paddingTop = paddingBottom = padding[0] ?? 30;
        paddingRight = paddingLeft = padding[1] ?? 30;
      } else if (padding.length === 3) {
        paddingTop = padding[0] ?? 30;
        paddingRight = paddingLeft = padding[1] ?? 30;
        paddingBottom = padding[2] ?? 30;
      } else {
        paddingTop = padding[0] ?? 30;
        paddingRight = padding[1] ?? 30;
        paddingBottom = padding[2] ?? 30;
        paddingLeft = padding[3] ?? 30;
      }
    }

    const scaleX = d3
      .scaleLinear()
      // @ts-ignore
      .domain(d3.extent(nodes, (d) => d.style.x))
      .range([0 + paddingLeft, width - paddingRight])
      .clamp(true);
    const scaleY = d3
      .scaleLinear()
      // @ts-ignore
      .domain(d3.extent(nodes, (d) => d.style.y))
      .range([0 + paddingTop, height - paddingBottom])
      .clamp(true);

    return {
      nodes: nodes.map((node: any) => {
        return {
          ...node,
          style: {
            x: scaleX(node.style.x),
            y: scaleY(node.style.y),
          },
        };
      }),
      edges,
    };
  }
}

register(ExtensionCategory.LAYOUT, 'custom-layout', CustomLayout);

const data = {
  nodes: visibleNodes,
  edges: visibleEdges,
};

export const LayoutCustomRender: TestCase = async (context) => {
  console.log(context);
  context.container.config.width = 1600;

  const graph = new Graph({
    ...context,
    autoFit: {
      type: 'view',
      options: {
        direction: 'both',
      },
    },
    data,
    node: {
      type: 'rect',
      style: {
        size: [60, 30],
        radius: 8,
        labelText: (d: any) => {
          return `${d.name}-${d.id}` ?? d.id;
        },
        labelPlacement: 'center',
        ports: [{ placement: 'top' }, { placement: 'bottom' }],
        labelFontSize: 10,
      },
    },
    edge: {
      type: 'line',
      style: {
        endArrow: false,
      },
    },

    layout: {
      type: 'custom-layout',
      padding: [30, 100],
    },
    behaviors: ['drag-element', 'drag-canvas', 'zoom-canvas'],
  });

  await graph.render();

  return graph;
};
