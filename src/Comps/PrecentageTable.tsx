interface iMagadHeader {
    [magadTitle: string]:{
        [gdodTitle: string]: {
            trueCount: number;
            falseCount: number;
            };
        }
  }

  interface iGdodHeader {
    [gdodTitle: string]: string[]
  }
  
const PrecentageTable = () => {


    const rowHeaders: iMagadHeader = {
        "טכנולוגיות": {
            "גדוד 37": {
                trueCount: 23,
                falseCount: 12
            }
        },
        "נגמשים": {
            "גדוד 37": {
                trueCount: 15,
                falseCount: 30
            },
            "גדוד 40": {
                trueCount: 19,
                falseCount: 0
            },
            "גדוד 180": {
                trueCount: 1,
                falseCount: 200
            }
        },
        "מעילי רוח": {
            "גדוד 37": {
                trueCount: 2,
                falseCount: 20,
            },
            "גדוד 90": {
                trueCount:11,
                falseCount: 0
            },
            "גדוד 180": {
                trueCount: 900,
                falseCount: 1200
            }
        }
    }

    const columnHeaders: iGdodHeader = {
        "גדוד 37": ["מעילי רוח", "נגמשים", "טכנולוגיות"],
        "גדוד 180": ["מעילי רוח", "נגמשים"],
        "גדוד 40": ["נגמשים"],
        "גדוד 90": ["מעילי רוח"]
    }

    const columnKeys = Object.keys(columnHeaders);
    const doesMagadContain = (key: string, magadName: string) => Object.keys(rowHeaders[magadName]).includes(key);
    
    columnKeys.map(columnKey => {
        const gdodName = columnKey;
        const magadsOfGdod = rowHeaders[gdodName];
        Object.keys(magadsOfGdod).map(magadName => {
            
        })
    });

    Object.keys(rowHeaders).map(magadHeader => {
        const magadName = magadHeader;
        const gdodsList = rowHeaders[magadName];

    });
    
    // const headers: iMagadHeader[] = [
    //     {
    //       title: "נגמשים",
    //       options: {
    //         "גדוד 4": { trueCount: 100, falseCount: 200 },
    //         "גדוד 12": { trueCount: 1, falseCount: 0 },
    //         "גדוד 759": { trueCount: 0, falseCount: 200 },
    //       },
    //     },
    //     {
    //       title: "טנקים",
    //       options: {
    //         "גדוד 4": { trueCount: 0, falseCount: 1 },
    //         "גדוד 990": { trueCount: 3, falseCount: 120 },
    //       },
    //     },
    //   ];

    
    //   const colHeaders = Array.from(
    //     new Set(headers.flatMap((item) => Object.keys(item.options)))
    //   );
  
    return (
        <>
        <table className="table">
            <thead>
                <tr>
                    {/*empty cell for coulmn headers*/}
                    <th></th>
                    {headers.map(header => <th key={header.title}>{header.title}</th>)}
                </tr>
            </thead>
            <tbody>
                {
                    colHeaders.map(colHeader => ())
                }
                {/* {headers.map((magad) => (
                    <tr key={magad.title}>
                    <th>{magad.title}</th>
                    {colHeaders.map((colHeader) => {
                        const matchingOption = magad.options[colHeader];

                        if (matchingOption) {
                        // Display true count as a percentage
                        const trueCountPercentage = (matchingOption.trueCount / (matchingOption.trueCount + matchingOption.falseCount)) * 100;
                        return <td key={colHeader}>{`${trueCountPercentage.toFixed(2)}%`}</td>;
                        }

                        return <td key={colHeader}>-</td>; // Placeholder for missing data
                    })}
                    </tr>
                ))} */}
            </tbody>  
        </table>
        </>
    )
    

};

export default PrecentageTable;