import "./calend.css";

function getDaysInCurrentMonth(): number{
    const actualMonth = new Date().getMonth() + 1; // Obter o mês atual (0-11, então adicionamos 1)
    const actualYear = new Date().getFullYear(); // Obter o ano atual
    
    return new Date(actualYear, actualMonth, 0).getDate();
}

export default function Grid(){
    const daysInMonth = getDaysInCurrentMonth();

    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
        days.push(
        <div className="day">
            <span className="n-day">{i}</span>
            </div>
    );
    }

    return(
        <section className="calendar">
            {days}
        </section>
    )
}