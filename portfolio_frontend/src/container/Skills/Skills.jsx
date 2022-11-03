import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { urlFor, client } from '../../client';

import './Skills.scss';


function Skills() {

    const [skills, setSkills] = useState([])
    const [experiences, setExperiences] = useState([])

    useEffect(() => {
        const skillsQuery = '*[_type == skills]';
        const query = '*[_type == experiences]';

        client.fetch(skillsQuery)
            .then((data) => {
                setSkills(data)
            })
        client.fetch(query)
            .then((data) => {
                setExperiences(data)
            })
    }, [])


    return (
        <div id='skills'>
            <h2 className="head-text">Skills & Experiencias</h2>
            <div className="app__skills-container">
                <motion.div
                > {skills.map((item) => (
                    <motion.div>
                        {item}
                    </motion.div>

                ))}</motion.div>
            </div>
        </div>
    )
}

export default Skills