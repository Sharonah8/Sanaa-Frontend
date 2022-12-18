import * as React from 'react'
import Button from '@mui/material/Button';
import '../Styles/Gallery.css'
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
// import Slide from '@mui/material/Slide';
// import { TransitionProps } from '@mui/material/transitions';

// const Transition = React.forwardRef(function Transition(
//   props: TransitionProps & {
//     children: React.ReactElement;
//   },
//   ref: React.Ref<unknown>,
// ) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });



function Gallery({img}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
 return (
     
       <div className='container'>
         <div className='product'>
           <div className='product-card'>
             <h2 className='name'>{img.title}</h2>
               <span className='price'>{img.price}</span>
                <button className='popup-btn'onClick={handleClickOpen} >Quick View</button>
                 <img src={img.image} className="product-img" alt='product-img' width={299} height={320}></img>     
            </div>
            <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        // TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              About This Potrait
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Back
            </Button>
          </Toolbar>
        </AppBar>


            <div className='popup-view'>
              <div className='popup-card'>
                <div className='product-img'>
                  <img src={img.image} alt=''width={400} height={500} ></img>
                </div>
                <div className='info'>
                  <h2>{img.title}<br/><span>Potrait</span></h2>
                  <p>{img.description}</p>
                  <span className="price">{img.price}</span>
                  {/* <a href="#" className='add-cart-btn'>Add to Cart</a>
                  <a href="#" className='add-wish'>Add to Wishlist</a> */}
                </div>
              </div>
            </div> 
            </Dialog>  
         </div>
         
       </div>  

         
  )
}

export default Gallery