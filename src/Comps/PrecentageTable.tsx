import { iMagadData, iUnitData } from "../../interfaces";

interface iPrecentageTable {
    magadData: iMagadData
}
const PrecentageTable: React.FC<iPrecentageTable> = ({magadData}) => {

  
    // Extract unique gdods
    const units: string[] = Array.from(
      new Set(
        Object.keys(magadData).flatMap((rowHeader) => Object.keys(magadData[rowHeader]))
      )
    );
  
    const getTotalCount = (unit: string) => {
      let totalTrueCount = 0;
      let totalFalseCount = 0;
  
      Object.keys(magadData).forEach((rowHeader) => {
        const carData = magadData[rowHeader][unit];
        if (carData) {
          totalTrueCount += carData.trueCount;
          totalFalseCount += carData.falseCount;
        }
      });
  
      return { trueCount: totalTrueCount, falseCount: totalFalseCount };
    };

    const sumForMagad = (magad: string) => {
        const magadalData = magadData[magad];
        
        if (!magadalData) {
          return { trueCount: 0, falseCount: 0 };
        }
      
        const gdodTotals = Object.keys(magadalData).reduce((totals, gdod) => {
          const tankData = magadalData[gdod];
          if (tankData) {
            totals.trueCount += tankData.trueCount;
            totals.falseCount += tankData.falseCount;
          }
          return totals;
        }, { trueCount: 0, falseCount: 0 });
      
        return gdodTotals;
      };

    
    const FormattedData = ({ data }: { data?: iUnitData }) => {
      if (!data) {
        return (
          <div className="font-bold text-center">
            X
          </div>
        );
      }
  
    const { trueCount, falseCount } = data;
    const percentage = (trueCount / (trueCount + falseCount)) * 100;
    const displayValue = `${trueCount}/${trueCount + falseCount}`;

    const colorClass = percentage < 20 ? 'text-error' : percentage < 80 ? 'text-warning' : 'text-success';
    return (
        <div className={`text-center ${colorClass}`}>
            <p className="font-bold">{percentage.toFixed(2)}%</p>
            <p>{displayValue}</p>
        </div>
      );
    };
  
    const rowTotals = Object.keys(magadData).reduce((totals, rowHeader) => {
        const magadalTotals = sumForMagad(rowHeader);
        totals.trueCount += magadalTotals.trueCount;
        totals.falseCount += magadalTotals.falseCount;
        return totals;
      }, { trueCount: 0, falseCount: 0 });


    return (
      <table className="table table-pin-rows table-pin-cols">
        <thead>
          <tr className="text-sm text-white">
            <th></th>
            {Object.keys(magadData).map((rowHeader) => (
              <th key={rowHeader}>{rowHeader}</th>
            ))}
            <th>הכל</th>
          </tr>
        </thead>
        <tbody>
          {units.map((gdod) => (
            <tr key={gdod}>
              <th className="text-white">{gdod}</th>
              {Object.keys(magadData).map((rowHeader) => {
                const data = magadData[rowHeader][gdod];
                return (
                  <td key={rowHeader}>
                    <FormattedData data={data} />
                  </td>
                );
              })}
              <td>
                <FormattedData data={getTotalCount(gdod)} />
              </td>
            </tr>
          ))}
          <tr>
            <th className="text-white">הכל</th>
            {Object.keys(magadData).map((rowHeader) => (
              <td key={rowHeader}>
                <FormattedData data={sumForMagad(rowHeader)} />
              </td>
            ))}
            <td><FormattedData data={rowTotals} /></td>
          </tr>
        </tbody>
      </table>
    );
  };
  
  export default PrecentageTable;
  