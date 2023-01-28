import React from 'react'
import styles from "../styles/sass.module.scss"
// import styles from "../styles/sass.module.css"
const sass = () => {
  return (
    <div>
        <div>
        <h1 className={styles.heading}><a href="#">Syntacilly Awesome Style Sheet</a></h1>
       
  <a href="#"className={styles.text}>this is an anchor tag</a>
  <p class={styles.error}>this is an error</p>
  <p class={styles.notification}>this is a notification</p>
  </div>
  <div>
    <div>
    <h2>Nested Rules</h2>
    <div className={styles.card}>
      <h1 class={styles.card_title}>This is a title</h1>
      <p class={styles.card_body}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sunt, quo totam aliquam praesentium ducimus tempore sapiente quia nulla optio? Lorem ipsum, dolor sit amet consectetur <a href="">adipisicing elit</a>. Libero laboriosam laborum exercitationem autem commodi voluptas odio aliquid ut velit doloremque minima, quaerat dolores, corporis consequuntur totam nam id veniam maxime.</p>
    </div>
    </div>
  </div>
  <div>
    <h1>Using math</h1>
    <p className={styles.math}>sass math</p>
    <p className={styles.math_text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sunt, quo totam aliquam praesentium ducimus tempore sapiente quia nulla optio? Lorem ipsum, dolor sit amet consectetur <a href="">adipisicing elit</a>. Libero laboriosam laborum exercitationem autem commodi voluptas odio aliquid ut velit doloremque minima, quaerat dolores, corporis consequuntur totam nam id veniam maxime</p>
    

  </div>
  <div>
    <h1>Loops in Sass</h1>
    <h2>Colors</h2>
    <span class="text-primary">primary text</span> | 
    <span class="text-secondary">secondary text</span> | 
    <span class="text-error">error text</span> | 
    <span class="text-info">info text</span> | 
    <span class="text-blue">blue text</span> | 
    <span class="text-red">red text</span> |
    <span class="text-green">green text</span> | 
    <span class="text-yellow">yellow text</span> | 
    <span class="text-purple">purple text</span> | 
    <span class="text-orange">orange text</span> | 
    <span class="text-black">gray text</span>

    <br></br>

    <span class="bg-primary text-white">bg primary</span> |
    <span class="bg-secondary text-white">bg secondary</span> |
    <span class="bg-error text-white">bg error</span> |
    <span class="bg-info text-white">bg info</span> |
    <span class="bg-blue text-white">bg blue</span> |
    <span class="bg-red text-white">bg red</span> |
    <span class="bg-green text-white">bg green</span> |
    <span class="bg-yellow text-white">bg yellow</span> |
    <span class="bg-purple text-white">bg purple</span> |
    <span class="bg-orange text-white">bg orange</span> |
    <span class="bg-gray text-white">bg gray</span> |

    <br></br>

    {/* <span class="bg-primary-dark-8 text-white">primary dark 8</span> |
    <span class="bg-primary-dark-6 text-white">primary dark 6</span> |
    <span class="bg-primary-dark-4 text-white">primary dark 4</span> |
    <span class="bg-primary-dark-2 text-white">primary dark 2</span> |
    <span class="bg-primary text-white">primary</span> |
    <span class="bg-primary-light-2 text-white">primary light 2</span> |
    <span class="bg-primary-light-4 text-white">primary light 4</span> |
    <span class="bg-primary-light-6 text-white">primary light 6</span> |
    <span class="bg-primary-light-8 text-white">primary light 8</span> | */}

   

  </div>
  <div>heading loop</div>
<span class="bg-primary-dark-8 text-white">primary dark 8</span> |
    <span class="bg-primary-dark-6 text-white">primary dark 6</span> |
    <span class="bg-primary-dark-4 text-white">primary dark 4</span> |
    <span class="bg-primary-dark-2 text-white">primary dark 2</span> |
    <span class="bg-primary text-white">primary</span> |
    <span class="bg-primary-light-2 text-white">primary light 2</span> |
    <span class="bg-primary-light-4 text-white">primary light 4</span> |
    <span class="bg-primary-light-6 text-white">primary light 6</span> |
    <span class="bg-primary-light-8 text-white">primary light 8</span>
     <div>
    <h1 >hello 1</h1>
      <p className={styles.loops_for}>hello 2</p>
      <p className={styles.loops_for_each}>hello 3</p>
    </div> 
    </div>
  )
}

export default sass