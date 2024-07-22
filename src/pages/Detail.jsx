import {Link} from "react-router-dom";
import ReactPlayer from "react-player";
import {FaArrowLeft} from "react-icons/fa";

function Detail() {
    return (
        <>
            <section className={'relative h-screen flex flex-col gap-6'}>
                <div className={'absolute top-0 bg-black'}>

                </div>
                {/*<Link to={'/'} className={'flex items-center gap-3'}>*/}
                {/*    <FaArrowLeft/>*/}
                {/*    <span>Back</span>*/}
                {/*</Link>*/}
                <ReactPlayer url={'https://www.youtube.com/watch?v=SqcY0GlETPk&t=163s'} controls width={'100%'}
                             height={'100%'}/>
            </section>
        </>
    );
}

export default Detail;