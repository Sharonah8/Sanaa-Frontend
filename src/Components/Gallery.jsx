import * as React from "react";
import Review from "./Review";
import Button from "@mui/material/Button";
import "../Styles/Gallery.css";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";


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

function Gallery({ img }) {
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
        <div className='product-card' >
          <h2 className='product-name'>{img.title}</h2>
            <span className='product-price'>{img.price}</span>
             <button className='popup-btn'onClick={handleClickOpen} >Quick View</button>
              <img src={img.image} clasName="product-img" alt='product-img' width={299} height={320}></img>
         </div>
         <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      // TransitionComponent={Transition}
    >
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar id ='toolbar'>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
           <i><u>About This Potrait</u></i>
          </Typography>
          <Button autoFocus color="inherit" onClick={handleClose}>
            Back
          </Button>
        </Toolbar>
      </AppBar>
          <div className='popup-view'>
            <div className='popup-card-inner'>
              <div className='product-img-inner'>
                <img src={img.image} alt=''width={400} height={500} ></img>
              </div>
              <div className='info-inner'>
                <h2 id='info-inner-h2' >{img.title}.<br/><span id='info-inner-h2-span'><u>info:-</u></span></h2>
                <p id='info-inner-desc'>{img.description}</p>
                <p id = 'info-inner-price'>{img.price}.</p>
                 <a href="#" className='add-cart-btn'>Add to Cart</a>
                 <Review  />
              </div>
            </div>
          </div>
          </Dialog>

       </div>
     </div>
  );
}

export default Gallery;
