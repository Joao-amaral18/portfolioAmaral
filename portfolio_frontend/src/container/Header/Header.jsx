import React from 'react'

import { motion } from 'framer-motion'

import { images } from '../../constants'
import './Header.scss';

const scaleVariantsProfile = {
    whileInView: {
        scale: [0, 0.5],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
}
const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
}

function Header() {
    return (
        <div id='home' className="app__header app__flex">
            <motion.div
                whileInView={{ x: [-200, 0], opacity: [0, 1] }}
                transition={{ duration: 1 }}
                className="app__header-info"
            >
                <div className="app__header-badge">
                    <div className="badge-cmp app_flex type">
                        <span>
                            <span>Olá, eu sou</span>
                            <span>Hello, I'm</span>
                            <span>Olá, eu sou</span>
                            <span>Hello, I'm</span>
                        </span>
                        <h1>João Amaral</h1>
                    </div>
                    <div className="tag-cmp app_flex">
                        <p>Web Developer</p>
                    </div>
                </div>

            </motion.div >
            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__header-img"
            >
                <motion.img
                    variants={scaleVariants}
                    whileInView={scaleVariantsProfile.whileInView}
                    className="app__header-img"
                    src={images.profile}
                />
            </motion.div>

            <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className="app__header-circles"

            >
                {[images.redux, images.react, images.sass, images.python, images.typescript].map((circle, index) => (
                    <div className="circle-cmp app__flex" key={`circle-${index}`}>
                        <img src={circle} alt="circle" />
                    </div>
                ))}
            </motion.div>
        </div >
    )
}

export default Header