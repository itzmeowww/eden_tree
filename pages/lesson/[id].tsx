import Nav from "../../Components/Nav"
import ReactPlayer from 'react-player'

// Render a YouTube video player

const Lesson = ({ id }) => {
    return <div className="w-full flex min-h-screen flex-col items-center justify-start" >
        <Nav isLoggedIn={true} />


        <div className=" w-3/4 max-w-lg  mt-32">
            <div className="w-full h-96 flex justify-center items-center">
                <ReactPlayer width={"full"} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /></div>
            <div className="w-full mt-6">
                <h1 className="text-lg font-bold my-4">Quiz</h1>
                <div className="flex justify-center items-center">
                    <div className="grid grid-cols-2 gap-4">
                        {
                            ["A", "B", "C", "D"].map((choice) => {
                                return <div>
                                    <button className="rounded border border-black px-2 py-1 transition-colors hover:bg-black hover:text-white">Choice {choice}</button>
                                </div>
                            })
                        }

                    </div>
                </div>
            </div>
        </div>


    </div>
}
export default Lesson
