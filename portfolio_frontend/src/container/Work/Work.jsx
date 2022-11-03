import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye, GithubLogo } from 'phosphor-react';

import { urlFor, client } from '../../client'
import './Work.scss';



function Work() {

    const [activeFilter, setActiveFilter] = useState('All')
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })
    const [works, setWorks] = useState([])
    const [filterWork, setFilterWork] = useState([])



    useEffect(() => {
        const query = '*[_type == "works"]';

        client.fetch(query)
            .then((data) => {
                setWorks(data);
                setFilterWork(data)
            })
    }, [])


    const handleWorkfilter = (item) => {
        setActiveFilter(item)
        setAnimateCard([{ y: 100, opacity: 0 }])

        setTimeout(() => {
            setAnimateCard([{ y: 0, opacity: 1 }])

            if (item !== 'All') {
                console.log(works)
                setFilterWork(works.filter((work) => work.tags.includes(item)))
            } else {
                setFilterWork(works)
            }
        }, 500);
    }


    return (
        <>
            <div id="work">
                < h2 className='head-text' style={{ color: '#fff' }}> Aqui estao alguns projetos que desenvolvi</ h2>
                <div className="app__work-filter">
                    {['React', 'Typescript', 'Axios', 'All'].map((item, index) => (
                        <div
                            key={index}
                            onClick={() => handleWorkfilter(item)}
                            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
                        >
                            {item}
                        </div>
                    ))}
                </div>
                <motion.div
                    animate={animateCard}
                    transition={{ duration: 0.25, delayChildren: 0.5 }}
                    className="app__work-portfolio"
                >
                    {filterWork.map((work, index) => (
                        <div className="app__work-item app__flex" key={index}>
                            <div className="app__work-img app__flex">
                                <img src={urlFor(work.imgUrl)} alt={work.name} />
                                <motion.div
                                    whileHover={{ opacity: [0, 1] }}
                                    transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.25 }}
                                    className="app__work-hover app__flex"
                                >
                                    <a href={work.projectLink} target="_blank" rel="noreferrer">

                                        <motion.div
                                            whileInView={{ scale: [0, 1] }}
                                            whileHover={{ scale: [1, 0.90] }}
                                            transition={{ duration: 0.25 }}
                                            className="app__flex"
                                        >
                                            <Eye />
                                        </motion.div>
                                    </a>
                                    <a href={work.codeLink} target="_blank" rel='noreferrer'>
                                        <motion.div
                                            whileInView={{ scale: [0, 1] }}
                                            whileHover={{ scale: [1, 0.90] }}
                                            transition={{ duration: 0.25 }}
                                            className="app__flex"
                                        >
                                            <GithubLogo />
                                        </motion.div>
                                    </a>
                                </motion.div>
                            </div>
                            <div className="app__work-content app__flex">
                                <h4 className="bold-text">{work.title}</h4>
                                <p className="p-text">{work.description}</p>
                                <div className="app__work-tag app__flex" >
                                    <p className="p-text">{work.tags[0]}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                </motion.div>
            </div>
        </>
    )
}

export default Work     