import Child from "./Child";

const App = () => {
    return (
        <>
            {/*Difference between <child> tag and data passed in child props */}
            <Child
                username="shashi"
                id={12}
                isMarried={true}
                isUndefinedValue={undefined}
                isNull={null}
                skills={["js", "react", "node"]}
                address={{
                    pinCode: 43223,
                    area: "thane",
                    state: "maharashtra",
                }}
            />
            <Child
                username="abhi"
                id={132}
                isMarried={false}
                isUndefinedValue={"not"}
                isNull={null}
                skills={["js", "react", "node"]}
                address={{
                    pinCode: 43223423,
                    area: "thane",
                    state: "maharastra",
                }}
            />
        </>
    );
};

export default App;