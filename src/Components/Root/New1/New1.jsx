
import { Typewriter } from 'react-simple-typewriter'

const New1 = () => {



  return (
    <div className='App mb-8 -mt-8'>
      <h1 className='text-4xl  text-center mb-6' style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'bold'  }}>
      Welcome Travellers...{' '}
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Do!','Eat!', 'Sleep!', 'Travel!', 'Work!']}
           
            cursor
            cursorStyle='_'
            loop ={100000000000000000000000000000000000000000}	

            typeSpeed={90}
            deleteSpeed={90}
            delaySpeed={500}
          
          />
        </span>
      </h1>
    </div>
  )

}


export default New1;