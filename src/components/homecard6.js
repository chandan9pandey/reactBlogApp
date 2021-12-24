import './../styles/homecard6.css'

const HomeCard6=(props)=>{
    return(
<>
<div className="HomeCard6">
    <p className="HomeCard6head">{props.card6head}</p>
    <p className="HomeCard6desc">{props.card6desc}<br/>{props.card6desc}</p>
    <p className="HomeCard6end">{props.card6end1}&nbsp;<span>{props.card6end2}</span></p>
</div>
</>
    );
}

export default HomeCard6;