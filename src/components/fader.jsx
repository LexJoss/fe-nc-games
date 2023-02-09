import {PropTypes} from 'prop-types'
import react from 'react'
import {setState, useState, useEffect} from 'react'


export const Fader = ({ text , off}) => {

    
console.log(off)
    

    const [fadeProp, setFadeProp] = useState({
        fade: 'fade-out'}
    )
    const [blink, setBlink] = useState(true)


    useEffect(() => {
        if (blink) {
        const timeout = setInterval(() => {
           if (fadeProp.fade === 'fade-out') {
              setFadeProp({
                   fade: 'fade-in'
              })
           } else {
                setFadeProp({
                   fade: 'fade-out'
                })
           }
           if (fadeProp.fade === 'fade-in') {setBlink(false)}
           
        }, 3000);

        
   
        return () => clearInterval(timeout)
        
            }
            const timeout2 = setInterval(() => {
                {off()}
            }, 4000);
            return () => clearInterval(timeout2)

            }, [fadeProp]) 

    return (
        
            <label className={fadeProp.fade}>{text}</label>
        
    )
}


Fader.defaultProps = {
    text: 'Comment Submitted'
}

Fader.propTypes = {
    text: PropTypes.string,
}