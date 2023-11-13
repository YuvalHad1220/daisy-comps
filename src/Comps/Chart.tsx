import Paper from "./Paper";

const Chart = () => {
    
    const redThres = 20;
    const yellowThres = 60;

    const trueCount = 10;
    const falseCount = 90;

    const value = trueCount / (falseCount + trueCount) * 100;

    // will be consisted of two charts - one gray and one purple
    const CircleChart = () => (
        <div className="relative">
            <div className="radial-progress text-black absolute" style={{"--value": 100, "--thickness": "0.7rem", "--size": "150px",}}></div>
            <div className="radial-progress text-primary absolute right-" style={{"--value": value, "--thickness": "0.7rem", "--size": "150px",}} role="progressbar">
                <div>
                    {value}%
                </div>
            </div>
        </div>
    );

    return (
        <Paper>
            {/* <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="40" stroke="black" stroke-width="8" fill="none" shape-rendering="auto"/>
            </svg> */}
            <CircleChart />

        </Paper>
    );

};

export default Chart;