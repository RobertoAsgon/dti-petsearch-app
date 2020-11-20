import React, { useState } from 'react';
import { getBestPetShop } from '../services/request-api';
import PetShopCard from '../components/Home/PetShopCard';
import logoPetsearch from '../assets/logo-petsearch.png';
import Header from '../components/Header';
import '../components/Home/styles.css';
import TextField from '@material-ui/core/TextField';
import { Search } from '@material-ui/icons';
import {
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Table,
} from '@material-ui/core';

const styleInputNumber = {
  borderRadius: 5,
  width: 115,
  margin: 10,
  marginBottom: 25,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .4)',
};

const Home = () => {
  const [date, setDate] = useState(null);
  const [littleDogs, setLittleDogs] = useState(0);
  const [bigDogs, setBigDogs] = useState(0);
  const [bestPetShop, setBestPetshop] = useState(null);
  const [error, setError] = useState(null);

  const sendRequest = async (date, littleDogs, bigDogs) => {
    const response = await getBestPetShop(date, littleDogs, bigDogs);
    console.log('response from server side', response)
    if (response.data[0].petshop) {
      setBestPetshop(response.data);
      setError(null);
    } else {
      setError(response.data);
      setBestPetshop(null);
    }
  };

  return (
    <>
      <Header />
      <div className="home-page">
        <img id="img-logo" src={logoPetsearch} alt="Logo Petsearch"></img>

        <div className="form-container">
          <h1>Encontre aqui, o melhor pet shop para seus cães!</h1>
          <TextField
            style={{
              borderRadius: 5,
              width: 250,
              margin: 15,
              boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .4)',
            }}
            id="date"
            label="Data"
            type="date"
            onChange={(e) => setDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
          <div>
            <TextField
              style={styleInputNumber}
              id="outlined-number"
              label="Cães pequenos"
              type="number"
              onChange={ (e) => setLittleDogs(e.target.value) }
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
            
            <TextField
              style={styleInputNumber}
              id="outlined-number"
              label="Cães grandes"
              type="number"
              onChange={ (e) => setBigDogs(e.target.value) }
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </div>
          <button
            type="button"
            onClick={() => sendRequest(date, littleDogs, bigDogs)}>
            Encontrar
            <Search style={{ fontSize: 40 }}/>
          </button>
          {error && <span>{error}</span>}
        </div>

        {
          bestPetShop &&
          <div className="shop-list-container">
          <TableContainer>
            <Table size="small" aria-label="caption table">
              <TableHead style={{background: "rgb(245, 105, 210)"}}>
                <TableRow>
                  <TableCell align="center">The Best Pet Shop</TableCell>
                  <TableCell align="left">Distância</TableCell>
                  <TableCell align="left">Preço Total</TableCell>
                </TableRow>
              </TableHead>
              {bestPetShop.map((data, index) => <PetShopCard data={data} key={index}/>)}
            </Table>
          </TableContainer>
        </div>
        }
      </div>
    </>
  );
};

export default Home;