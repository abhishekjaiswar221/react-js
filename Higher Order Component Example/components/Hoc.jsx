import React, {Component} from 'react';

const Hoc = (WrappedComponent, entity) => {
    return class Inner extends Component {
        state = {
            data: [],
            term: ""
        }

        componentDidMount() {
            let fetchData = async () => {
                try {
                    let data = await fetch(`https://jsonplaceholder.typicode.com/${entity}`, {
                        method: "GET"
                    })
                    let finalData = await data.json();
                    this.setState({...this.state, data: finalData});
                    // console.log(finalData);
                } catch (error) {
                    throw new Error("Not Resolved");
                }
            }
            fetchData();
        }

        render() {
            let {data, term} = this.state;
            let filteredData = data.filter((val, ind) => {
                if (entity === "users") {
                    let {name} = val;
                    return name.indexOf(term) >= 0;
                } else if (entity === "todos") {
                    let {title} = val;
                    return title.indexOf(term) >= 0;
                }
            })
            return (
                <>
                    <input type="text" value={term} placeholder={"Search"} onChange={e => {
                        this.setState({...this.state, term: e.target.value})
                    }}/>
                    <WrappedComponent data={filteredData}/>
                </>
            )
        }
    }
};

export default Hoc;