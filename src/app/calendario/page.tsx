import Grid from "./grid";

export default function Calendario(){
    return (
        <main id="box">
            <section id="header">
                <span className="arrow"> &lt; </span>
                <h1 id="title">Maio</h1>
                <span className="arrow"> &gt; </span>
            </section>
            <Grid />
        </main>
    );
}