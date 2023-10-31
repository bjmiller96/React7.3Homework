import Background from '../assets/images/cityrush.jpg'

const About = () => {
    return (
        <div style={{ backgroundImage: `url(${ Background })`}} className='relative mx-auto bg-cover bg-center bg-fixed'>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="flex justify-center place-items-center h-screen">
                <h1 className="relative z-10 m-5 text-2xl text-white">Just a small app that's used to keep track of your car collection, whether it's real or not!</h1>
            </div>
        </div>
    )
}

export default About