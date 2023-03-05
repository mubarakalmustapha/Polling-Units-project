import { useState, useEffect } from "react";
import AniochaNorth from "./localGovernments/AniochaNorth";
import AniochaSouth from "./localGovernments/AniochaSouth";
import Bomadi from "./localGovernments/Bomadi";
import Burutu from "./localGovernments/Burutu"
import EthiopeEast from "./localGovernments/EthiopeEast"
import IkaNorthEast from "./localGovernments/IkaNorthEast"
import IsokoSouth from "./localGovernments/IsokoSouth"
import NdokwaEast from "./localGovernments/NdokwaEast"

function Total(){
    const [lga, setLga] = useState("selectedlga");

    const [aniochaNorth, setAniochaNorth] = useState(false)
    const [aniochaSouth, setAniochaSouth] = useState(false)
    const [bomadi, setBomadi] = useState(false)
    const [burutu, setBurutu] = useState(false)
    const [ethiopeEast, setEthiopeEast] = useState(false)
    const [ikaNorthEast, setIkaNorthEast] = useState(false)
    const [isokoSouth, setIsokoSouth] = useState(false)
    const [ndokwaEast, setNdokwaEast] = useState(false)

    useEffect(() => {
        lga  === "aniocha North" ? setAniochaNorth(true) : setAniochaNorth(false)
        lga === "aniocha South" ? setAniochaSouth(true) : setAniochaSouth(false)
        lga === "bomadi" ? setBomadi(true) : setBomadi(false)
        lga === "burutu" ? setBurutu(true) : setBurutu(false)
        lga === "ethiope East" ? setEthiopeEast(true) : setEthiopeEast(false)
        lga === "ika North East" ? setIkaNorthEast(true) : setIkaNorthEast(false)
        lga === "isoko South" ? setIsokoSouth(true) : setIsokoSouth(false)
        lga === "ndokwa East" ? setNdokwaEast(true) : setNdokwaEast(false)
    },[lga])

    const handlechange = e => {
        setLga(e.target.value)
    }

    const makefisrtLetterCapital = str => {
        return str.charAt(0).toUpperCase()  + str.slice(1)
    }

    const renderResult = () => {
        let result;
        lga === "selectedlga" ? (result = "Select Your LGA") : result  = makefisrtLetterCapital(lga)
        return result
    }

    return(
        <>
        <h1>{renderResult()}</h1>
        <div className="mt-4">
            <select className="form-select" id="" value={lga} onChange={handlechange}>
                <option value="selectedlga">Select Your LGA</option>
                <option value="aniocha North">ANIOCHA NORTH</option>
                <option value="aniocha South">ANIOCHA SOUTH</option>
                <option value="bomadi">BOMADI</option>
                <option value="burutu">BURUTU</option>
                <option value="ethiope East">ETHIOPE EAST</option>
                <option value="ika North East">IKA NORTH EAST</option>
                <option value="isoko South">ISOKA SOUTH</option>
                <option value="ndokwa East">NDOKWA EAST</option>
            </select>
        </div>
       {aniochaNorth && <AniochaNorth/> }
       {aniochaSouth && <AniochaSouth/>}
       {bomadi && <Bomadi/>}
       {burutu && <Burutu/>}
       {ethiopeEast && <EthiopeEast/>}
       {ikaNorthEast && <IkaNorthEast/>}
       {isokoSouth && <IsokoSouth/>}
       {ndokwaEast && <NdokwaEast/>}
        </>
    )
}

export default Total;