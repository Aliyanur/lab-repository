import StepCounter from "./StepCounter";

function CounterApp(){
    return(
        <div>
            <h1>Step Counter App</h1>
            {/* Props are values passed from parent to child. State is internal data managed inside the component. Each StepCounter has its own state, even though they use the same component.*/}

            <StepCounter initialValue={0} step={1}/>
            <StepCounter initialValue={10} step={5}/>

        </div>
    );
}

export default CounterApp;