import React from "react";
import sampleProfilePic from "../../assets/sampleProfilePic.jpg"
import quotation from "../../assets/quotation.png"


const SliderContent = ({ text, title, name }) => {
    return (
        <>
            <div className="layer"></div>
            <div className="testimonialContent">
                <img src={quotation} className="mt-8 mb-4 quotation" alt="quotation" />
                <p className="mb-4">{text}
                </p>
                <img src={sampleProfilePic} className="profilePicture mt-8 mb-4" alt="Rayvon Stewart" />
                <h2 className="mt-4 font-bold uppercase font-roboto">{name}</h2>
                <h3 className="title font-semibold text-greencolor">{title}</h3>
            </div>
        </>
    )
}

export default SliderContent