import {PropTypes} from 'prop-types'
import {useState, useEffect} from 'react'


export const DeleteFader = ({ text , off}) => {

    

    

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
                off()
            }, 4000);
            return () => clearInterval(timeout2)

            }, [fadeProp, blink, off]) 

    return (
        
            <label className={fadeProp.fade}>{text}</label>
        
    )
}


DeleteFader.defaultProps = {
    text: 'Comment Deleted'
}

DeleteFader.propTypes = {
    text: PropTypes.string,
}