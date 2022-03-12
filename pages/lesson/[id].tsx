import Nav from "../../components/Nav"
import ReactPlayer from 'react-player'
import Head from 'next/head'

import { useState } from "react"
// Render a YouTube video player
import DottedBackground from "../../components/DottedBackground"
import { useRouter } from "next/router"
const Lesson = () => {
    const router = useRouter()
    const { id } = router.query
    console.log(router.query)
    const correctChoice = 'A'
    const [showQuiz, setShowQuiz] = useState(false)
    const [selectedChoice, setSelectedChoice] = useState("")
    const [isPlaying, setIsPlaying] = useState(false)
    const [isCorrect, setIsCorrect] = useState(false)
    const [videoLink, setVideoLink] = useState("https://eden-tree.vercel.app/lesson/lesson.mp4")
    const onEnded = () => {

        if (selectedChoice != correctChoice) setShowQuiz(true)
        else {
            setIsCorrect(true)
            setShowQuiz(false)
            setVideoLink(video['end'])
        }
    }

    const video = {
        'A': 'https://saratree.vercel.app/lesson/choice1.mp4',
        'B': 'https://saratree.vercel.app/lesson/choice2.mp4',
        'C': 'https://saratree.vercel.app/lesson/choice3.mp4',
        'D': 'https://saratree.vercel.app/lesson/choice4.mp4',
        'end': 'https://saratree.vercel.app/lesson/conclusion.mp4',
    }



    const onAnswer = (choice: string) => {
        setSelectedChoice(choice)
        setVideoLink(video[choice])
    }
    const onPlay = () => {
        setIsPlaying(true)
    }
    const onPause = () => {
        setIsPlaying(false)
    }
    return <div className="w-full flex min-h-screen flex-col items-center justify-start" >

        <Head>
            <title>Watch Lesson, SaraTree</title>
            <meta name="description" content="SaraTree is a visualization and interactive learning platform.
SaraTree is a platform for students to track the progress of their concepts with the core of game-based learning through achievement-like progress and interactive courses." />
            <link rel="icon" href="/icon.jpg" />
            <link rel="apple-touch-icon" href="/icon.jpg" />
        </Head>
        <Nav />
        <DottedBackground />


        <div className=" w-3/4 max-w-lg min-h-min mt-32">
            <div className="text-black mt-16 text-2xl my-2 border-b pr-16 border-black">
                {id}
            </div>
            <div className="flex justify-center items-center border border-black rounded-md bg-black">
                <ReactPlayer onPlay={onPlay} onPause={onPause} onEnded={onEnded} controls={true} url={videoLink} />
            </div>
            <div className={`pt-2 w-full gap-2 flex items-center justify-center ${isPlaying ? 'hidden' : 'block'}`}>
                <h1 className="text-sm font-bold px-1  text-white bg-black rounded-sm">Tip</h1>
                <h1 className="text-sm text-blue-500 font-semibold"> click on the video to play</h1>
            </div>
            <div className={`w-full mb-12 mt-6 justify-center items-center  ${isCorrect ? 'flex' : 'hidden'}`}>
                <h1 className="text-lg font-bold mx-auto text-green-600">Correct!</h1>
            </div>
            <div className={`w-full mb-12 mt-6  ${showQuiz ? 'block' : 'hidden'}`}>
                <h1 className="text-lg font-bold my-4">Quiz</h1>
                <div className="flex justify-center items-center">
                    <div className="grid grid-cols-2 gap-4">
                        {
                            ["A", "B", "C", "D"].map((choice) => {
                                return <button onClick={() => {
                                    onAnswer(choice)
                                }} className="rounded border border-black px-2 py-1 transition-colors hover:bg-black hover:text-white">Choice {choice}</button>

                            })
                        }

                    </div>
                </div>
            </div>
        </div>


    </div>
}
export default Lesson
