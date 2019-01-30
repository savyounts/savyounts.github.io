import React from 'react'

export default() => (
  <form action="//formspree.io/savyounts@gmail.com" method="POST" style={formStyles}>

   <input type="text" name="name" placeholder="Name" id="name" required />
   <br></br>

   <input type="email" name="_replyto" placeholder="example@domain.com" id="_replyto" required />
   <br></br>

   <input type="text" name="_subject" placeholder="Subject" id="subject" required />
   <br></br>

   <textarea name="message" rows="1" placeholder="Message" id="message" style={{height: '10rem'}} required></textarea>
   <br></br>

   <input class="hidden" type="text" name="_gotcha" style={{display:"none"}} />
  <input class="button submit" type="submit" value="Send" style={sendStyles} />
</form>
)

const formStyles ={
  width: '80%',
  margin: '2rem auto',
  display: 'flex',
  flexDirection: 'column'
}

const sendStyles = {
  backgroundColor: 'black',
  color: 'white'
}
