import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiFillRead, AiOutlineLink } from "react-icons/ai"
import ReactFlow, {

  MiniMap,
  Controls,
  Background,
  Node
} from 'react-flow-renderer';


import initialElements from '../data/initial-elements';
import Nav from '../Components/Nav';

type ConceptDetail = {
  id: string;
  learned: boolean
}

const Home: NextPage = () => {
  const [elements, setElements] = useState(initialElements);

  const [conceptDetail, setConceptDetail] = useState<ConceptDetail[]>([
    { id: "1", learned: false },
    { id: "2", learned: false },
    { id: "3", learned: false },
    { id: "4", learned: true },
    { id: "5", learned: false },
    { id: "6", learned: false },
    { id: "7", learned: false },
  ])
  const [currentConcept, setCurrentConcept] = useState(<></>)
  const [currentConceptId, setCurrentConceptId] = useState("")
  const [learned, setLearned] = useState(false)

  const [showCard, setShowCard] = useState(false)

  const onLoad = (reactFlowInstance) => {
    reactFlowInstance.fitView();
  };

  const onElementClick = (event, element) => {
    setCurrentConcept(element.data.label)
    setCurrentConceptId(element.id)
    setLearned(conceptDetail.filter((concept) => { return concept.id == element.id })[0].learned)
    setShowCard(true)
  }

  const updateLearn = (id: string, status: boolean) => {
    setLearned(status)
    setConceptDetail((concepts) =>
      concepts.map((concept) => {
        if (concept.id == id) {
          concept.learned = status
          // console.log(concept)
        }

        return concept;
      })
    );

  }

  const onCheckboxChange = (e, id: string) => {
    updateLearn(id, e.target.checked)
  }
  const hideCard = () => {
    setShowCard(false)
  }

  useEffect(() => {
    setElements((els) =>
      els.map((el) => {
        const res = conceptDetail.filter((concept) => {
          return concept.id === el.id
        })
        if (res.length != 0) {
          el.style = {
            ...el.style,
            background: (res[0].learned ? '#86efac' : ''),
          }
        }


        return el;
      })
    );
  }, [conceptDetail, setElements]);


  const nodeStrokeColor = (n: Node): string => {
    if (n.style?.background) return n.style.background as string;
    if (n.type === 'input') return '#0041d0';
    if (n.type === 'output') return '#ff0072';
    if (n.type === 'default') return '#1a192b';

    return '#eee';
  };

  const nodeColor = (n: Node): string => {
    if (n.style?.background) return n.style.background as string;

    return '#fff';
  };

  return (
    <div className="w-full flex h-screen flex-col items-start justify-start">
      <Head>
        <title>EdTree</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav isLoggedIn={true} />

      <div className={`w-full h-full fixed z-10 flex-col justify-center items-center ${showCard ? 'flex' : 'hidden'}`} >
        <div className='absolute bg-black opacity-5 w-full h-full' onClick={hideCard}>

        </div>
        <div className='relative bg-white border rounded-md border-black w-3/4 h-3/4 max-w-sm max-h-96 opacity-95 flex flex-col justify-start items-center gap-2 py-4 px-10'>
          <button className='absolute -right-3 -top-3 bg-white border rounded-full p-1 border-black' onClick={hideCard}> <AiOutlineClose /></button>
          <h1 className='text-2xl font-bold border-b border-black pb-1 px-8'>{currentConcept}</h1>
          <div className='text-lg'>
            <input id='learned' type="checkbox" checked={learned} className='mr-2' onChange={(e) => onCheckboxChange(e, currentConceptId)}>
            </input>
            <label htmlFor="learned"> Learned</label>
          </div>
          <div className='my-4'>
            <a href="lesson/demo"><button className='border rounded-sm border-black px-4 py-1'>Watch Lesson</button></a>
          </div>
          <div className='w-full mt-6 flex items-center'>
            <AiFillRead className='mr-2' />
            <h2 className='text-lg font-semibold'>
              Material
            </h2>
          </div>
          <ul>
            <a href="" className='text-blue-500 underline' ><li className='flex items-center'><AiOutlineLink className='mr-2' /> What is {currentConcept}</li></a>
            <a href="" className='text-blue-500 underline' ><li className='flex items-center'><AiOutlineLink className='mr-2' /> Further reading about {currentConcept}</li></a>
            <a href="" className='text-blue-500 underline' ><li className='flex items-center'><AiOutlineLink className='mr-2' />Practice problems for {currentConcept}</li></a>
          </ul>
        </div>
      </div>
      <div className='w-full h-screen mt-0'>
        <ReactFlow
          elements={elements}
          onLoad={onLoad}
          onElementClick={onElementClick}
          snapToGrid={true}
          nodesDraggable={false}
          nodesConnectable={false}

          snapGrid={[15, 15]}
        >
          <MiniMap
            nodeStrokeColor={nodeStrokeColor}
            nodeColor={nodeColor}
            nodeBorderRadius={2}
          />
          <Controls />
          <Background color="#aaa" gap={16} />
        </ReactFlow>
      </div>

    </div>
  )
}

export default Home
