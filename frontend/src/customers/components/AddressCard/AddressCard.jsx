// import React from "react"

// const AddressCard = () =>{
//     return (
//         <div>
//             <div className="space-y-3">
//                 <p className="font-semibold">Mohd Adnan</p>
//                 <p>Delhi-53 jafrabad c-216/12</p>
//                 <div className="space-y-1" >
//                     <p className="font-semibold">Phone Number</p>
//                     <p>9191896236</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default AddressCard;


import React from "react"

const AddressCard = ({ address }) => {
    return (
        <div>
            <div className="space-y-3">
                <p className="font-semibold">{address?.firstName + " " + address?.lastName}</p>
                <p>{address?.state} , {address?.streetAddress} , {address?.zipCode}</p>
                <div className="space-y-1" >
                    <p className="font-semibold">Phone Number</p>
                    <p>{address?.mobile}</p>
                </div>
            </div>
        </div>
    )
}

export default AddressCard;