import {useState} from "react";

const App = () => {
    let [employee, setEmployee] = useState([
        {
            name: "sachin",
            id: 721,
            sal: 82357,
            skills: ["python", "html", "css"]
        },
        {
            name: "abhi",
            id: 161,
            sal: 82357,
            skills: ["js", "html", "css"]
        },
        {
            name: "mani",
            id: 321,
            sal: 82357,
            skills: ["javaScript", "html", "css"]
        },
        {
            name: "ruchi",
            id: 122,
            sal: 82357,
            skills: ["java", "html", "css"]
        }
    ])

    return (
        <>
            <section>
                <article>
                    {employee.map(v => {
                        let {name, id, sal, skills} = v;
                        return (
                            <>
                                <h1>Name: {name}</h1>
                                <h2>ID: {id}</h2>
                                <h2>Sal: {sal}</h2>
                                <span><b>Skills: </b></span>
                                {skills.map((v, i) => {
                                    if (i === skills.length - 1)
                                        return <span>{v + "."}</span>
                                    return <span>{v + ","}</span>
                                })}
                            </>
                        )
                    })}
                </article>
            </section>
        </>
    )
}
export default App;