const Chart = () => {

    const redThres = 20;
    const yellowThres = 60;

    const trueCount = 10;
    const falseCount = 90;

    const value = trueCount / (falseCount + trueCount) * 100;

    return (
        <div>
            <div className="radial-progress" style={{"--value": value, "--thickness": "0.3rem", "--size": "200px"}} role="progressbar">{value}%</div>
        </div>
    );

};

export default Chart;