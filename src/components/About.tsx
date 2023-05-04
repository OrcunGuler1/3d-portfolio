import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'

const Div: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    icon: string
    title: string
    options: { max: number; scale: number; speed: number }
  }
> = ({ icon, title, ...rest }) => {
  return (
    <div {...rest}>
      <img src={icon} alt={title} className="w-16 h-16 object-contain" />
      <h3 className="text-white text-[20px] font-bold">{title}</h3>
    </div>
  )
}
const ServiceCard = ({
  index,
  title,
  icon,
}: {
  index: number
  title: string
  icon: string
}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <Div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          icon={icon}
          title={title}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        />
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        sljfgasşkfj
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default About
