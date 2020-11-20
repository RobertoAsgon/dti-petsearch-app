import React from 'react';
import './styles.css'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

function PetShopCard(props) {
  const { petshop, distance, price } = props.data;
  return (
    <TableBody>
      <TableRow>
        <TableCell align="center">{petshop}</TableCell>
        <TableCell align="left">{`${distance} m`}</TableCell>
        <TableCell align="left">{`R$ ${price}`}</TableCell>
      </TableRow>
    </TableBody> 
  );
};

export default PetShopCard;

