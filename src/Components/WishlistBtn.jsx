
import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
  
const WishlistBtn = () => {
  
  return (
    <div style={{
      margin: 'auto',
      display: 'flex',
      
      width: 'auto'
    }}>
      
      <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} 
                  checkedIcon={<Favorite />}
          name="checkedH" />}
      />
    </div>
  );
}
  
export default WishlistBtn;