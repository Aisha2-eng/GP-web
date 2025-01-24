export const fadeInLeftVariant = {
    hidden: {
    x: -50,
    opacity: 0,
    },
    
    visible: {
        x: 0,
        opacity: 1,
        transition:{
            type: 'tween',
            duration: 1,
    
        }
    }
    
}   

export const fadeInRightVariant = {
    hidden: {
    x: 50,
    opacity: 0,
    },
    
    visible: {
        x: 0,
        opacity: 1,
        transition:{
            type: 'tween',
            duration: 1,
    
        }
    }
    
}   