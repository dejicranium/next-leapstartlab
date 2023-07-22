import styles from "../styles/Experiment.module.scss"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Experiment } from "./Experiment";


export function ExperimentsContainer(props) {

    const [experiments_to_show, setExperimentsToShow] = useState(props.experiments.slice(0,4))

    return <div className={styles.experiments}>
        <div className={styles.experiments__container}>

            {experiments_to_show.map((experiment, index)=> (
                <Experiment key={index} video_link={experiment.video_link}></Experiment>
            ))} 
        </div>
        {
            experiments_to_show && experiments_to_show.length === 4 && props.experiments.length > 4 &&

                <div>
                    <button onClick={() => setExperimentsToShow(props.experiments)} className={styles.experiments__show}>
                        Show more experiments
                        <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M36 18L24 30L12 18" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                    </button>
                </div>
        }
       
    </div>
}