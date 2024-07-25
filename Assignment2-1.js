import { useState } from "react";

function Assign2() {
    const [review, setReview] = useState('');
    const [review1, setReviewDisplay] = useState('');

    const inputValueChange = (event) => {
        console.log("Input value changed");
        setReview(event.target.value);
    };
    
    const btnUpdate = () => {
        const newReview = `Reviewer Name\n${review}`;
        
        setReviewDisplay(prevReview => `${prevReview}\n${newReview}`);
    };
    return (
        <div>
            <h9 style={{ fontWeight: "bolder", marginLeft: "20px" }}>Reviews</h9><br /><br />
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                <input
                    type="text"
                    onChange={inputValueChange}
                    placeholder="Type to review"
                    style={{ width: "85%", marginLeft: "20px" }}
                />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button
                    type="button"
                    className="btn btn-dark"
                    style={{ alignItems: "center", display: "flex", alignContent: "center", justifyContent: "center", height: "40px" }}
                    onClick={btnUpdate}
                >
                    <h8>Add Review</h8>
                </button>
            </div>
            <br />
            <h9 style={{ fontWeight: "bolder", marginLeft: "20px" }}>Reviews</h9>
            <div style={{ whiteSpace: "pre-line", marginLeft: "20px" }}>{review1}</div>
        </div>
    );
}

export default Assign2;