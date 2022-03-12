import React from 'react'
import { Elements, ArrowHeadType } from 'react-flow-renderer'

const initialElements: Elements = [
  {
    id: '1',
    data: { label: 'A' },
    position: { x: 0, y: 0 },
    type: 'input',
  },
  { id: '2', data: { label: 'B' }, position: { x: 0, y: 150 } },
  {
    id: '3',
    data: { label: 'E' },
    position: { x: 0, y: 300 },
    type: 'output',
  },
  { id: '4', data: { label: 'F' }, position: { x: 200, y: 300 } },
  {
    id: '5',
    data: { label: 'G' },
    position: { x: 200, y: 450 },
    type: 'output',
  },
  {
    id: '6',
    data: { label: 'C' },
    position: { x: 200, y: 150 },
    type: 'output',
  },
  {
    id: '7',
    data: { label: 'D' },
    position: { x: 400, y: 150 },
    type: 'output',
  },
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    type: 'smoothstep',
    animated: false,
    style: { stroke: '#000000' },
    arrowHeadType: ArrowHeadType.ArrowClosed,
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    type: 'smoothstep',
    animated: false,
    style: { stroke: '#000000' },
    arrowHeadType: ArrowHeadType.ArrowClosed,
  },
  {
    id: 'e2-4',
    source: '2',
    target: '4',
    type: 'smoothstep',
    animated: false,
    style: { stroke: '#000000' },
    arrowHeadType: ArrowHeadType.ArrowClosed,
  },
  {
    id: 'e4-5',
    source: '4',
    target: '5',
    type: 'smoothstep',
    animated: false,
    style: { stroke: '#000000' },
    arrowHeadType: ArrowHeadType.ArrowClosed,
  },
  {
    id: 'e1-6',
    source: '1',
    target: '6',
    type: 'smoothstep',
    animated: false,
    style: { stroke: '#000000' },
    arrowHeadType: ArrowHeadType.ArrowClosed,
  },
  {
    id: 'e1-7',
    source: '1',
    target: '7',
    type: 'smoothstep',
    animated: false,
    style: { stroke: '#000000' },
    arrowHeadType: ArrowHeadType.ArrowClosed,
  },
]

export default initialElements
