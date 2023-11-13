import Paper from "./Paper";

const Chart = () => {
    
    const redThres = 20;
    const yellowThres = 60;

    const trueCount = 10;
    const falseCount = 90;

    const value = trueCount / (falseCount + trueCount) * 100;

    // will be consisted of two charts - one gray and one purple
    const CircleChart = () => (
        <div className="radial-progress text-black" style={{"--value": 100, "--thickness": "0.7rem", "--size": "150px",}} role="progressbar">
            <div className="radial-progress text-primary z-10" style={{"--value": value, "--thickness": "0.7rem", "--size": "150px",}} role="progressbar">
                    {value}%
            </div>
        </div>
    );

    return (
        <Paper bgcolor="bg-base-200" classnames="w-80">
            <p className="text-center text-white pt-3 text-xl font-bold">כשירות נגמ"שים</p>
            <div className="collapse">
                <input type="checkbox" /> 
                <div className="collapse-title">
                    <CircleChart />
                </div>
                <div className="collapse-content"> 
                    <p>bippity bopitty u r now my property</p>
                    <div className="w-full bg-gray-200 rounded-full h-3.5 dark:bg-gray-700">
                        <div className="bg-blue-600 h-3.5 rounded-full" style={{width: "45%"}} />
                    </div>
                </div>
            </div>
        </Paper>
    );

};

export default Chart;