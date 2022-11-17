import "../styles/globals.css";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
    return (
        <div className="bg-stone-800 h-screen text-white">
            <Component {...pageProps} />
        </div>
    );
}

export default App;
