var newsletter = document.getElementsByClassName('newsletter')[0];
var artist = document.getElementsByClassName('artist')[0];
var forum = document.getElementsByClassName('forum')[0];
var video = document.getElementsByClassName('demo')[0];
var main = document.getElementsByClassName('main')[0];
var messages = document.getElementsByClassName('messages')[0];


newsletter.addEventListener('click',function(){
  main.innerHTML = `<h1>NEWSLETTER</h1>
  <h2>Sign Up for our Newsletter to get monthly email updates!</h2>
    <div class='insert'>
      <form id="newsletter" action="/newsletter" method="post">
        <input type="text" name="first" placeholder="first name">
        <input type="text" name="last" placeholder="last name">
        <input type="text" name="email" placeholder="email">
        <div class='button'>
        <input id='submit'type="submit" name="submit" value="Submit">
        <input id='reset'type="reset" name="reset" value="Reset">
        </div>
      </form>
    </div>
  `
});
artist.addEventListener('click',function(){
  main.innerHTML = `<h1>ARTIST</h1>
  <div class='artistinsert'>
    <div class='one'>
      <p>I love playing my custom guitar! It makes the tone sound soooo much better
      and I lovee the feel! I drive up from Bridgewater which is about an hour drive. The reason
      I do that is because its been hard to find a really good teacher where I'm from. I've been
      looking to work with a professional, someone that really knows how to teach & performs &
      knows what I want to do. It's really hard to find a teacher like that....I taught myself
      guitar for a bout a year or two...In the past four months I've gotten much better than in
      the past two years.
      </p>
      <img src='/images/slash.jpeg'/>
    </div>
    <div class='two'>
      <img src='/images/keith.jpeg'/>
      <p>
      Thank you so much. You've totally given [Karen] the bug with the Coffeehouse.
       You are an absolute huge influence on her. I can't thank you enough. We look
       forward to another year of lessons with you....We are so proud of her and we
       absolutely love you as a teacher. You've kept her motivated. I don't think she
        would have stuck with it if she had any other teacher.
      </p>
    </div>
  </div>
  `
});
forum.addEventListener('click',function(){
  main.innerHTML = `<h1>FORUM</h1>
  <div class='foruminsert'>
    <h5>Messages</h5>
    <div class='messages'>
    
    </div>
    <form id="formthing" action='/forum' method='POST'>
      <input name='important' placeholder="Enter Your Title">
      <textarea name='body' placeholder='say something'></textarea>
      <input type="submit" value="Submit" >
    </form>
  </div>
  `
});
video.addEventListener('click',function(){
  main.innerHTML = `<h1>VIDEO DEMO</h1>
  <div class='iframe'>
  <iframe height='400px' width='900px'
  src="https://www.youtube.com/embed?v=Ctfw59-NYSY"
   frameborder="0" allowfullscreen>
  </iframe>
  </div>
  `
});