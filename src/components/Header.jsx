import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className='w-full flex flex-col items-center justify-center select-none'>
            <nav className='flex items-center justify-center space-x-4'>
                <Link className='font-pixeloid-mono border rounded-md flex items-center justify-center max-w-16 w-16 h-8 hover:bg-neutral-200 hover:text-neutral-600 transition-all' to="/">Home</Link>
                <Link className='font-pixeloid-mono border rounded-md flex items-center justify-center max-w-16 w-16 h-8 hover:bg-neutral-200 hover:text-neutral-600 transition-all' to="/quiz">Quiz</Link>
            </nav>
            <h1 className="font-pixeloid text-2xl font-bold">Which Pokémon are you?</h1>
            <p className='font-silver text-2xl'>Based on your answers :]</p>
        </div>
    );
}