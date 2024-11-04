import React from 'react'
import Container from './Container'
import Flex from './Flex'

const Blog = () => {
  return (
      <div className='py-[100px]'>
          <Container>
              <Flex>
                  <video width="320" height="240" controls>
                      <source src='best.mp4' type="video.mp4" />
Your browser does not support the video tag.
</video>
              </Flex>
          </Container>
          
      
    </div>
  )
}

export default Blog
