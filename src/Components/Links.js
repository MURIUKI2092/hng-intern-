import React from 'react';



function Links() {
  return (
    <>
      <div className='links'>
        <a id='twitter_link' href='https://twitter.com/ohallo_jackson'>Twitter Link</a>
        <a id='btn_zuri' href='https://training.zuri.team/'>Zuri Team</a>
        <a title='Find books on design and coding' id='books' href='http://books.zuri.team'>Zuri Books</a>
        <a title='Buy the best books on python' id='book_python' href='https://books.zuri.team/python-for-beginners?ref_id=pengoJames'>Python Books</a>
        <a title='Access services for background checks on coders' id='pitch' href='https://background.zuri.team/'>Background Check for Coders</a>
        <a title='Access design books for free offered by Zuri' id='book_design' href='https://books.zuri.team/design-rules'>Design Books</a>
      </div>  

      <div className='icons'>
      <img className='slack-img' src='images/slack.png' alt='Slack Logo'/>
      <img className='git-hub' src='images/github.png' alt='Github Logo'/>
      </div>

      <div className='footer'>
        <p className='intern'>Zuri<span>.</span>Internship</p>
        <p className='phase'>HNG Internship 9 Frontend Task</p>
        <img className='ingressive_logo' src='images/ingressive.jpg' alt='Logo'/>
      </div>
    </>
  )
}

export default Links;
