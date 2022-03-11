import Nav from "../../components/Nav"
import ReactPlayer from 'react-player'

import { useState } from "react"
// Render a YouTube video player

const Lesson = ({ id }) => {
    const correctChoice = 'A'
    const [showQuiz, setShowQuiz] = useState(false)
    const [selectedChoice, setSelectedChoice] = useState("")
    const [isPlaying, setIsPlaying] = useState(false)
    const [videoLink, setVideoLink] = useState("https://eden-tree.vercel.app/lesson/lesson.mp4")
    const onEnded = () => {
        if (selectedChoice != correctChoice) setShowQuiz(true)
        else {
            setShowQuiz(false)
            setVideoLink(video['end'])
        }
    }

    const video = {
        'A': 'https://eden-tree.vercel.app/lesson/choice1.mp4',
        'B': 'https://eden-tree.vercel.app/lesson/choice2.mp4',
        'C': 'https://eden-tree.vercel.app/lesson/choice3.mp4',
        'D': 'https://eden-tree.vercel.app/lesson/choice4.mp4',
        'end': 'https://eden-tree.vercel.app/lesson/conclusion.mp4',
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
        <Nav />


        <div className=" w-3/4 max-w-lg min-h-min mt-32">
            <div className="flex justify-center items-center border border-black rounded-md bg-black">
                <ReactPlayer onPlay={onPlay} onPause={onPause} onEnded={onEnded} controls={true} url={videoLink} />

            </div>
            <div className={`w-full flex items-center justify-center ${isPlaying ? 'hidden' : 'block'}`}>
                <h1 className="text-sm mx-auto my-2 text-blue-500 font-bold"> click on the video to play</h1>
            </div>
            <div className={`w-full mt-6  ${showQuiz ? 'block' : 'hidden'}`}>
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
