let cont = [{
  id: 1,
  title: 'History',
  description: 'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up.',
},
{
  id: 2,
  title: 'Vision',
  description: 'Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal.',
},
{
  id: 3,
  title: 'Goals',
  description: 'Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones.',
}];

let textContainer = document.querySelector('.text-container');

function displayTextitems(getContent) {
  let display = getContent.map((item) => {
    return `<div class="text-container">
    <h4>${item.title}</h4>
    <p>${item.description}</p>
  </div>`
  });

  display = display.join(""); // we are using "join" to convert the array to a string and using ("") to prevent from breaking the string
  textContainer.innerHTML = display;
}

const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const category = e.target.dataset.i;

    const displayCategory = cont.filter((item) => {
      if (item.title === category) {
        return item;
      }
    });

    displayTextitems(displayCategory);
  });
});

let Vision = document.getElementById('vis');
let Goals = document.getElementById('go');
Vision.classList.add('open'); // this will initially keep the style on the button
Goals.classList.add('open'); // this will initially keep the style on the button

filterButtons.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    filterButtons.forEach((btn1) => {
      btn1.classList.add('open'); // add the class 'open' in all buttons
    }
    );
    event.target.classList.remove('open'); // remove the 'open' to the clicked button
  });
});

