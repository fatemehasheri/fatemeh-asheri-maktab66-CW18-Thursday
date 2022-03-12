import React from 'react';


function Row({array}) {
    return(
        <tr>
            {array.map((item,index) => <td key={index}>{item}</td>)}
        </tr>
    )
}
function Tablematrix(props) {
    return (
        <React.Fragment>
            <thead>
                <tr>
                    <td>col1</td>
                    <td>col2</td>
                    <td>col3</td>
                </tr>
            </thead>
            <tbody>
                {props.matrix.map((row, i) =><Row key={i} array={row}/>)}
            </tbody>
        </React.Fragment>
    );
    
}

export default Tablematrix;
