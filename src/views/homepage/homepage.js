import Features from "../../components/features/features";
import Hero from "../../components/hero/hero";


import './homepage.scss';

export default function Homepage() {
    return ( 
        <main className="homepage">
            <Hero />
            <Features />
        </main>
    )
}