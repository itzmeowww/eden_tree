import type { NextPage } from 'next'
import Head from 'next/head'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '../firebase/firebaseConfig'
import { getDoc, doc, setDoc } from "firebase/firestore";

import React, { useState, useEffect } from 'react';
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import ReactFlow, {

  MiniMap,
  Controls,
  Background,
  Node
} from 'react-flow-renderer';


import initialElements from '../data/initial-elements';
import Nav from '../components/Nav';
import Card from '../components/Card';
import LoadingScreen from '../components/LoadingScreen';

type ConceptDetail = {
  id: string;
  learned: boolean
}

const Home: NextPage = () => {

  const [uid, setUid] = useState("")

  onAuthStateChanged(auth, (user) => {
    if (user) {
      if (uid != user.uid) setUid(user.uid)

    } else {

    }
  });




  const [elements, setElements] = useState(initialElements)
  const [loadedData, setLoadedData] = useState(false)
  let tmp = []
  for (let i = 1; i <= 22; i++) {
    tmp.push({ id: i.toString(), learned: false })
  }
  const [conceptDetail, setConceptDetail] = useState<ConceptDetail[]>(tmp)
  const [currentConcept, setCurrentConcept] = useState(<></>)
  const [currentConceptId, setCurrentConceptId] = useState("")
  const [learned, setLearned] = useState(false)
  const [savingData, setSavingData] = useState(false)

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
    if (uid != "" && loadedData) {
      setSavingData(true)
      setDoc(doc(db, "users", uid), {
        concept: conceptDetail
      }, { merge: true }).then(() => {
        setSavingData(false)
      })
    }
  }, [uid, conceptDetail])

  useEffect(() => {
    if (uid != "") {
      getDoc(doc(db, 'users', uid)).then((snap) => {
        if (snap.exists()) {
          const data: ConceptDetail[] = snap.data().concept

          if (data != undefined) {
            setConceptDetail(data)
            setLoadedData(true)
          }
        }
      })
    }
  }, [uid])
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

  const [showLoadingScreen, setShowLoadingScreen] = useState(true)

  useEffect((
  ) => {
    setTimeout(() => {
      setShowLoadingScreen(false)
    }, 2000)
  }, [])

  return (
    <div className="w-full flex h-screen flex-col items-start justify-start">
      <Head>
        <title>SaraTree</title>
        <meta name="description" content="SaraTree is a visualization and interactive learning platform.
SaraTree is a platform for students to track the progress of their concepts with the core of game-based learning through achievement-like progress and interactive courses." />
        <link rel="icon" href="/tree_logo.png" />
        <link rel="apple-touch-icon" href="/tree_logo.jpg"></link>
      </Head>
      <Nav />
      <LoadingScreen loading={showLoadingScreen} />
      <Card currentConcept={currentConcept} currentConceptId={currentConceptId} hideCard={hideCard} learned={learned} onCheckboxChange={onCheckboxChange} showCard={showCard} />

      <div className='w-full h-screen mt-0'>
        <div className='mt-16 text-black fixed z-10'>
          {savingData ? <h1 className='text-sm ml-2 flex items-center '> <AiOutlineLoading3Quarters className='animate-spin mr-2' />Saving Data</h1> : ""}
        </div>
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
