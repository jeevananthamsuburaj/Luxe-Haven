
import frtstyle from './Frontpage.module.css';
function Front(){


    return(
        <>
       
        
       <div id={frtstyle.wall}>
          <div className={frtstyle.content}>
            <h1>Dress the moment,<br></br>Own the vibe.</h1>
            <p>
              Celebrate every moment with confidence. Our dresses are designed to 
              help you express your <br></br> unique vibe and own every occasion effortlessly.
              From timeless classics to trendsetting styles,<br></br> we bring elegance to every wardrobe.
Each piece is crafted with care, comfort, and confidence <br></br>in mind.
              </p>
         

              <div className={frtstyle.btns}>
                <button>Shop Now</button>
                <button className={frtstyle.read}>View Collection</button>

              </div>
            
          </div>
          <div className={frtstyle.actor}>
          
            </div>
         
          </div>
       

        
    
        </>
    )
}


export default Front;