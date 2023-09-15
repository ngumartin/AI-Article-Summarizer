import { logo } from '../assets'

const Hero = () => {
    return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mt-10 mb-10 pt-4'>
            <img src={ logo } alt="sumz_logo" className='w-20 object-contain rounded-full'/>
            <button
                type='button'
                onClick={() => window.open('https://github.com/ngumartin')}
                className='rounded-full border border-silver bg-black py-1.5 px-5 text-sm text-white transition-all hover:bg-white hover:text-black border-black'
            >
                GitHub
            </button>
        </nav>
        <h1 className='head_text'>
            Summarize Articles with <br className='max-md:hidden' />
            <span className='blue_gradient'>OpenAI GPT-4</span>
        </h1>
        <h2 className='desc'>
            Simplify your reading with Summarize, an open-source article summarizer that transforms lengthy articles into clear and concise summaries.
        </h2>
    </header>
    )
}

export default Hero